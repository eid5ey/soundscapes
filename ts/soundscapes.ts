
/// <reference path="../typings/d3/d3.d.ts" />
/// <reference path="../typings/wavesurfer/wavesurfer.d.ts" />

// TODO: modularize
// TODO: class SoundScapes
// TODO: break parts out into functions
// TODO: no globals

"use strict";

interface ClipNode extends D3.Layout.GraphNode {
    weight: number;
    name: string;
    file: string;
    category: number;
}

interface ClipLink {
    source: ClipNode;
    target: ClipNode;
    path: number;
}

interface ClipGraph {
    nodes: Array<ClipNode>;
    links: Array<ClipLink>;
}

class ClipNavigator {
    graph: ClipGraph;
    node: number;       // Current position on the main spine.
    category: number;   // Category
    index: number;      // Node to play

    constructor(graph: ClipGraph) {
        this.graph    = graph;
        this.node     = 0;
        this.category = null;
        this.index    = null;
    }

    next() {
        this.graph.links.forEach(function(link: ClipLink) {
            var node = this.node;
            if (link.source.index === this.node && link.path == 1) {
                node = link.target.index;
            }
            this.node = node;
        });
    }

    findPlayable(): boolean {
        var found = false;

        this.index = null;

        if (this.category == null) {
            this.index = this.node;

        } else {
            var index = this.index;

            this.graph.links.forEach(function(link: ClipLink) {
                if (link.target.index === this.node) {
                    var subnode = link.source;

                    if (subnode.category === this.category) {
                        index = subnode.index;
                        found = true;
                    }
                }
            });

            this.index = index;
        }

        return found;
    }

    getPlayable(): ClipNode {
        return this.graph.nodes[this.index];
    }

    getPlayableFile(): string {
        return this.getPlayable().file;
    }

    getPlayableName(): string {
        return this.getPlayable().name;
    }

    rewind() {
        this.node  = 0;
        this.index = null;
    }
}

// Create a wavesurfer object.
var wavesurfer = Object.create(WaveSurfer);

// Set wavesurfer options.
wavesurfer.init({
    container: document.querySelector('#wave'),
    waveColor: 'rgba(0,0,0,0.25)',
    progressColor: 'rgb(0,0,0,0)',
    cursorColor: 'white',
    cursorWidth: '4'
});

// Width and height variables for othe d3 graph.
var width = 900, height = 600;

// Use the force...layout.
var force = d3.layout.force()
    .linkDistance(55)
    .charge(-150)
    .size([width, height]);

// Find the #clips div and append a SVG tag to it.
var svg = d3.select("#clips").append("svg")
    .attr("width", width)
    .attr("height", height);


// Set up a simple play/pause button for the player.
var button = d3.select('#play').on('click', function (e) {
    wavesurfer.playPause();
});

// Read our clips.json data to generate our graph and play audio.
d3.json("clips.json", function(error, graph: ClipGraph) {
    window['graph'] = graph;
    force
        .nodes(graph.nodes)
        .links(graph.links)
        .start();

    // Current node and category, for player.
    var nav = new ClipNavigator(graph);

    var options = d3.selectAll('#options li')
        .on('click', function() {
            options.classed('current', false);
            d3.select(this).classed('current', true);

            if (nav.index != null) {
                setCurrent(nav, false);
            }
            nav.rewind();

            var categoryOption = d3.select(this).attr('data-category');
            if (categoryOption == 'all') {
                nav.category = null;
            } else {
                nav.category = parseInt(categoryOption);
            }

            nav.findPlayable();
            loadPlayable(nav);
        });

    // When wavesurfer is finished playing the file, we'll loop to the next one.
    wavesurfer.on('ready', function() {
        setCurrent(nav, true);
        wavesurfer.play();
    });

    wavesurfer.on('finish', function() {
        setCurrent(nav, false);
        nav.index = null;
        while (true) {
            nav.next();
            if (nav.findPlayable()) {
                break;
            }
            if (nav.node == null) {
                return;
            }
        }

        loadPlayable(nav);
    });

    var link = svg.selectAll(".link")
        .data(graph.links)
        .enter().append("line")
            .attr("class", function(link) {
                if (link[ "path"] > 0) {
                    return "link path" ;
                } else {
                    return "link" ;
                }
            });

    var node = svg.selectAll(".node")
        .data(graph.nodes)
        .enter().append("circle")
            .attr("class", "node")
            .attr("id", function(d) {
                return d.name
            })
            .attr("r", function(d) {
                return 5 * d.weight;
            })
            .call(force.drag)

    node.append("title")
        .text(function(d) { return d.name; });

    force.on("tick", function() {
        link.attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });

        node.attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; });
    });
});

function loadPlayable(nav: ClipNavigator) {
    var file = nav.getPlayableFile();
    console.log('loadPlayable', nav.index, file, nav);
    wavesurfer.load('clips/' + file);
}

function setCurrent(nav: ClipNavigator, flag: boolean) {
    var name = nav.getPlayableName();
    d3.select('#' + name).classed('current', flag);
}

function logPosition(msg: string, pos: ClipNavigator) {
    console.log(msg, pos.node, pos.category, pos.index);
}
