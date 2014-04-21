




<!DOCTYPE html>
<html class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>DefinitelyTyped/webaudioapi/waa.d.ts at master · borisyankov/DefinitelyTyped · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="borisyankov/DefinitelyTyped" name="twitter:title" /><meta content="DefinitelyTyped - The repository for high quality TypeScript type definitions." name="twitter:description" /><meta content="https://avatars0.githubusercontent.com/u/867242?s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars0.githubusercontent.com/u/867242?s=400" property="og:image" /><meta content="borisyankov/DefinitelyTyped" property="og:title" /><meta content="https://github.com/borisyankov/DefinitelyTyped" property="og:url" /><meta content="DefinitelyTyped - The repository for high quality TypeScript type definitions." property="og:description" />

    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />

    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="89369BAA:7D83:6F2FA2D:534D54FA" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://github.global.ssl.fastly.net/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="QlF2DsrEqtMZozojFfJtCDEfILVv109ckI7fNm62T6c=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-44ed48ff295839711e151ed263ea459e2f8a1ee8.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-4703d5d47a28b98d8f56c6d6691ab003af71b198.css" media="all" rel="stylesheet" type="text/css" />
    


        <script crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/frameworks-28954a03feefcefacd684187f9478c307b78afe0.js" type="text/javascript"></script>
        <script async="async" crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/github-af26bb5f52f74f102ea3669eaa42c2973130c18c.js" type="text/javascript"></script>
        
        
      <meta http-equiv="x-pjax-version" content="72e8996c8e408c1c67a937c998437b93">

        <link data-pjax-transient rel='permalink' href='/borisyankov/DefinitelyTyped/blob/67aa15a029f4382a51a92413aac0e07d9c579e13/webaudioapi/waa.d.ts'>

  <meta name="description" content="DefinitelyTyped - The repository for high quality TypeScript type definitions." />

  <meta content="867242" name="octolytics-dimension-user_id" /><meta content="borisyankov" name="octolytics-dimension-user_login" /><meta content="6093316" name="octolytics-dimension-repository_id" /><meta content="borisyankov/DefinitelyTyped" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="6093316" name="octolytics-dimension-repository_network_root_id" /><meta content="borisyankov/DefinitelyTyped" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/borisyankov/DefinitelyTyped/commits/master.atom" rel="alternate" title="Recent Commits to DefinitelyTyped:master" type="application/atom+xml" />

  </head>


  <body class="logged_out  env-production  vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/join">Sign up</a>
      <a class="button signin" href="/login?return_to=%2Fborisyankov%2FDefinitelyTyped%2Fblob%2Fmaster%2Fwebaudioapi%2Fwaa.d.ts">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">

      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
      data-repo="borisyankov/DefinitelyTyped"
      data-branch="master"
      data-sha="7871e32e65da11e33df3e92c6a786ea22afb362a"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="borisyankov/DefinitelyTyped" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">


  <li>
    <a href="/login?return_to=%2Fborisyankov%2FDefinitelyTyped"
    class="minibutton with-count js-toggler-target star-button tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>Star
  </a>

    <a class="social-count js-social-count" href="/borisyankov/DefinitelyTyped/stargazers">
      2,049
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Fborisyankov%2FDefinitelyTyped"
        class="minibutton with-count js-toggler-target fork-button tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/borisyankov/DefinitelyTyped/network" class="social-count">
        1,256
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/borisyankov" class="url fn" itemprop="url" rel="author"><span itemprop="title">borisyankov</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/borisyankov/DefinitelyTyped" class="js-current-repository js-repo-home-link">DefinitelyTyped</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/borisyankov/DefinitelyTyped" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /borisyankov/DefinitelyTyped">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/borisyankov/DefinitelyTyped/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /borisyankov/DefinitelyTyped/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>194</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/borisyankov/DefinitelyTyped/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /borisyankov/DefinitelyTyped/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>36</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped tooltipped-w" aria-label="Wiki">
          <a href="/borisyankov/DefinitelyTyped/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_wiki /borisyankov/DefinitelyTyped/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/borisyankov/DefinitelyTyped/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /borisyankov/DefinitelyTyped/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/borisyankov/DefinitelyTyped/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /borisyankov/DefinitelyTyped/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/borisyankov/DefinitelyTyped/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /borisyankov/DefinitelyTyped/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/borisyankov/DefinitelyTyped.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/borisyankov/DefinitelyTyped.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/borisyankov/DefinitelyTyped" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/borisyankov/DefinitelyTyped" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>



                <a href="/borisyankov/DefinitelyTyped/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download borisyankov/DefinitelyTyped as a zip file"
                   title="Download borisyankov/DefinitelyTyped as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:ed1be0bae6d3651ce314e85975212d8a -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/borisyankov/DefinitelyTyped/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/borisyankov/DefinitelyTyped/blob/0.8/webaudioapi/waa.d.ts"
                 data-name="0.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.8">0.8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/borisyankov/DefinitelyTyped/blob/0.9.1.1/webaudioapi/waa.d.ts"
                 data-name="0.9.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.9.1.1">0.9.1.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/borisyankov/DefinitelyTyped/blob/def/bluebird/webaudioapi/waa.d.ts"
                 data-name="def/bluebird"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="def/bluebird">def/bluebird</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/borisyankov/DefinitelyTyped/blob/def/node/webaudioapi/waa.d.ts"
                 data-name="def/node"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="def/node">def/node</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/borisyankov/DefinitelyTyped/blob/dev/bandaid/full/webaudioapi/waa.d.ts"
                 data-name="dev/bandaid/full"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="dev/bandaid/full">dev/bandaid/full</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/borisyankov/DefinitelyTyped/blob/dev/runner/full/webaudioapi/waa.d.ts"
                 data-name="dev/runner/full"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="dev/runner/full">dev/runner/full</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/borisyankov/DefinitelyTyped/blob/feat-angularPromiseChaining/webaudioapi/waa.d.ts"
                 data-name="feat-angularPromiseChaining"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="feat-angularPromiseChaining">feat-angularPromiseChaining</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/borisyankov/DefinitelyTyped/blob/feat/manifest/webaudioapi/waa.d.ts"
                 data-name="feat/manifest"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="feat/manifest">feat/manifest</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/borisyankov/DefinitelyTyped/blob/import/node/webaudioapi/waa.d.ts"
                 data-name="import/node"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="import/node">import/node</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/borisyankov/DefinitelyTyped/blob/master/webaudioapi/waa.d.ts"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/borisyankov/DefinitelyTyped/blob/temp/full/webaudioapi/waa.d.ts"
                 data-name="temp/full"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="temp/full">temp/full</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/borisyankov/DefinitelyTyped" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">DefinitelyTyped</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/borisyankov/DefinitelyTyped/tree/master/webaudioapi" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">webaudioapi</span></a></span><span class="separator"> / </span><strong class="final-path">waa.d.ts</strong> <span aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="webaudioapi/waa.d.ts" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  <div class="commit file-history-tease">
    <img alt="Bart van der Schoor" class="main-avatar js-avatar" data-user="685984" height="24" src="https://avatars2.githubusercontent.com/u/685984?s=140" width="24" />
    <span class="author"><a href="/Bartvds" rel="author">Bartvds</a></span>
    <time class="js-relative-date" data-title-format="YYYY-MM-DD HH:mm:ss" datetime="2014-01-25T01:08:33+01:00" title="2014-01-24 19:08:33">January 25, 2014</time>
    <div class="commit-title">
        <a href="/borisyankov/DefinitelyTyped/commit/5263434c20d562f50e912b9cbd11beaac5756a6b" class="message" data-pjax="true" title="added/fixed few headers

https://github.com/borisyankov/DefinitelyTyped/issues/1570

cleaned up some more, mostly urls and typos">added/fixed few headers</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>4</strong>  contributors</a></p>
          <a class="avatar tooltipped tooltipped-s" aria-label="Bartvds" href="/borisyankov/DefinitelyTyped/commits/master/webaudioapi/waa.d.ts?author=Bartvds"><img alt="Bart van der Schoor" class=" js-avatar" data-user="685984" height="20" src="https://avatars2.githubusercontent.com/u/685984?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="borisyankov" href="/borisyankov/DefinitelyTyped/commits/master/webaudioapi/waa.d.ts?author=borisyankov"><img alt="Boris Yankov" class=" js-avatar" data-user="867242" height="20" src="https://avatars3.githubusercontent.com/u/867242?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="bbss" href="/borisyankov/DefinitelyTyped/commits/master/webaudioapi/waa.d.ts?author=bbss"><img alt="Baruch Berger" class=" js-avatar" data-user="2758664" height="20" src="https://avatars2.githubusercontent.com/u/2758664?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="nestalk" href="/borisyankov/DefinitelyTyped/commits/master/webaudioapi/waa.d.ts?author=nestalk"><img alt="Neil Stalker" class=" js-avatar" data-user="122057" height="20" src="https://avatars3.githubusercontent.com/u/122057?s=140" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Bart van der Schoor" class=" js-avatar" data-user="685984" height="24" src="https://avatars2.githubusercontent.com/u/685984?s=140" width="24" />
            <a href="/Bartvds">Bartvds</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Boris Yankov" class=" js-avatar" data-user="867242" height="24" src="https://avatars3.githubusercontent.com/u/867242?s=140" width="24" />
            <a href="/borisyankov">borisyankov</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Baruch Berger" class=" js-avatar" data-user="2758664" height="24" src="https://avatars2.githubusercontent.com/u/2758664?s=140" width="24" />
            <a href="/bbss">bbss</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Neil Stalker" class=" js-avatar" data-user="122057" height="24" src="https://avatars3.githubusercontent.com/u/122057?s=140" width="24" />
            <a href="/nestalk">nestalk</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>1127 lines (991 sloc)</span>
          <span class="meta-divider"></span>
        <span>62.523 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
              <a class="minibutton disabled tooltipped tooltipped-w" href="#"
                 aria-label="You must be signed in to make or propose changes">Edit</a>
          <a href="/borisyankov/DefinitelyTyped/raw/master/webaudioapi/waa.d.ts" class="button minibutton " id="raw-url">Raw</a>
            <a href="/borisyankov/DefinitelyTyped/blame/master/webaudioapi/waa.d.ts" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/borisyankov/DefinitelyTyped/commits/master/webaudioapi/waa.d.ts" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger disabled empty-icon tooltipped tooltipped-w" href="#"
             aria-label="You must be signed in to make or propose changes">
          Delete
        </a>
      </div><!-- /.actions -->
    </div>
        <div class="blob-wrapper data type-typescript js-blob-data">
        <table class="file-code file-diff tab-size-8">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>
<span id="L432" rel="#L432">432</span>
<span id="L433" rel="#L433">433</span>
<span id="L434" rel="#L434">434</span>
<span id="L435" rel="#L435">435</span>
<span id="L436" rel="#L436">436</span>
<span id="L437" rel="#L437">437</span>
<span id="L438" rel="#L438">438</span>
<span id="L439" rel="#L439">439</span>
<span id="L440" rel="#L440">440</span>
<span id="L441" rel="#L441">441</span>
<span id="L442" rel="#L442">442</span>
<span id="L443" rel="#L443">443</span>
<span id="L444" rel="#L444">444</span>
<span id="L445" rel="#L445">445</span>
<span id="L446" rel="#L446">446</span>
<span id="L447" rel="#L447">447</span>
<span id="L448" rel="#L448">448</span>
<span id="L449" rel="#L449">449</span>
<span id="L450" rel="#L450">450</span>
<span id="L451" rel="#L451">451</span>
<span id="L452" rel="#L452">452</span>
<span id="L453" rel="#L453">453</span>
<span id="L454" rel="#L454">454</span>
<span id="L455" rel="#L455">455</span>
<span id="L456" rel="#L456">456</span>
<span id="L457" rel="#L457">457</span>
<span id="L458" rel="#L458">458</span>
<span id="L459" rel="#L459">459</span>
<span id="L460" rel="#L460">460</span>
<span id="L461" rel="#L461">461</span>
<span id="L462" rel="#L462">462</span>
<span id="L463" rel="#L463">463</span>
<span id="L464" rel="#L464">464</span>
<span id="L465" rel="#L465">465</span>
<span id="L466" rel="#L466">466</span>
<span id="L467" rel="#L467">467</span>
<span id="L468" rel="#L468">468</span>
<span id="L469" rel="#L469">469</span>
<span id="L470" rel="#L470">470</span>
<span id="L471" rel="#L471">471</span>
<span id="L472" rel="#L472">472</span>
<span id="L473" rel="#L473">473</span>
<span id="L474" rel="#L474">474</span>
<span id="L475" rel="#L475">475</span>
<span id="L476" rel="#L476">476</span>
<span id="L477" rel="#L477">477</span>
<span id="L478" rel="#L478">478</span>
<span id="L479" rel="#L479">479</span>
<span id="L480" rel="#L480">480</span>
<span id="L481" rel="#L481">481</span>
<span id="L482" rel="#L482">482</span>
<span id="L483" rel="#L483">483</span>
<span id="L484" rel="#L484">484</span>
<span id="L485" rel="#L485">485</span>
<span id="L486" rel="#L486">486</span>
<span id="L487" rel="#L487">487</span>
<span id="L488" rel="#L488">488</span>
<span id="L489" rel="#L489">489</span>
<span id="L490" rel="#L490">490</span>
<span id="L491" rel="#L491">491</span>
<span id="L492" rel="#L492">492</span>
<span id="L493" rel="#L493">493</span>
<span id="L494" rel="#L494">494</span>
<span id="L495" rel="#L495">495</span>
<span id="L496" rel="#L496">496</span>
<span id="L497" rel="#L497">497</span>
<span id="L498" rel="#L498">498</span>
<span id="L499" rel="#L499">499</span>
<span id="L500" rel="#L500">500</span>
<span id="L501" rel="#L501">501</span>
<span id="L502" rel="#L502">502</span>
<span id="L503" rel="#L503">503</span>
<span id="L504" rel="#L504">504</span>
<span id="L505" rel="#L505">505</span>
<span id="L506" rel="#L506">506</span>
<span id="L507" rel="#L507">507</span>
<span id="L508" rel="#L508">508</span>
<span id="L509" rel="#L509">509</span>
<span id="L510" rel="#L510">510</span>
<span id="L511" rel="#L511">511</span>
<span id="L512" rel="#L512">512</span>
<span id="L513" rel="#L513">513</span>
<span id="L514" rel="#L514">514</span>
<span id="L515" rel="#L515">515</span>
<span id="L516" rel="#L516">516</span>
<span id="L517" rel="#L517">517</span>
<span id="L518" rel="#L518">518</span>
<span id="L519" rel="#L519">519</span>
<span id="L520" rel="#L520">520</span>
<span id="L521" rel="#L521">521</span>
<span id="L522" rel="#L522">522</span>
<span id="L523" rel="#L523">523</span>
<span id="L524" rel="#L524">524</span>
<span id="L525" rel="#L525">525</span>
<span id="L526" rel="#L526">526</span>
<span id="L527" rel="#L527">527</span>
<span id="L528" rel="#L528">528</span>
<span id="L529" rel="#L529">529</span>
<span id="L530" rel="#L530">530</span>
<span id="L531" rel="#L531">531</span>
<span id="L532" rel="#L532">532</span>
<span id="L533" rel="#L533">533</span>
<span id="L534" rel="#L534">534</span>
<span id="L535" rel="#L535">535</span>
<span id="L536" rel="#L536">536</span>
<span id="L537" rel="#L537">537</span>
<span id="L538" rel="#L538">538</span>
<span id="L539" rel="#L539">539</span>
<span id="L540" rel="#L540">540</span>
<span id="L541" rel="#L541">541</span>
<span id="L542" rel="#L542">542</span>
<span id="L543" rel="#L543">543</span>
<span id="L544" rel="#L544">544</span>
<span id="L545" rel="#L545">545</span>
<span id="L546" rel="#L546">546</span>
<span id="L547" rel="#L547">547</span>
<span id="L548" rel="#L548">548</span>
<span id="L549" rel="#L549">549</span>
<span id="L550" rel="#L550">550</span>
<span id="L551" rel="#L551">551</span>
<span id="L552" rel="#L552">552</span>
<span id="L553" rel="#L553">553</span>
<span id="L554" rel="#L554">554</span>
<span id="L555" rel="#L555">555</span>
<span id="L556" rel="#L556">556</span>
<span id="L557" rel="#L557">557</span>
<span id="L558" rel="#L558">558</span>
<span id="L559" rel="#L559">559</span>
<span id="L560" rel="#L560">560</span>
<span id="L561" rel="#L561">561</span>
<span id="L562" rel="#L562">562</span>
<span id="L563" rel="#L563">563</span>
<span id="L564" rel="#L564">564</span>
<span id="L565" rel="#L565">565</span>
<span id="L566" rel="#L566">566</span>
<span id="L567" rel="#L567">567</span>
<span id="L568" rel="#L568">568</span>
<span id="L569" rel="#L569">569</span>
<span id="L570" rel="#L570">570</span>
<span id="L571" rel="#L571">571</span>
<span id="L572" rel="#L572">572</span>
<span id="L573" rel="#L573">573</span>
<span id="L574" rel="#L574">574</span>
<span id="L575" rel="#L575">575</span>
<span id="L576" rel="#L576">576</span>
<span id="L577" rel="#L577">577</span>
<span id="L578" rel="#L578">578</span>
<span id="L579" rel="#L579">579</span>
<span id="L580" rel="#L580">580</span>
<span id="L581" rel="#L581">581</span>
<span id="L582" rel="#L582">582</span>
<span id="L583" rel="#L583">583</span>
<span id="L584" rel="#L584">584</span>
<span id="L585" rel="#L585">585</span>
<span id="L586" rel="#L586">586</span>
<span id="L587" rel="#L587">587</span>
<span id="L588" rel="#L588">588</span>
<span id="L589" rel="#L589">589</span>
<span id="L590" rel="#L590">590</span>
<span id="L591" rel="#L591">591</span>
<span id="L592" rel="#L592">592</span>
<span id="L593" rel="#L593">593</span>
<span id="L594" rel="#L594">594</span>
<span id="L595" rel="#L595">595</span>
<span id="L596" rel="#L596">596</span>
<span id="L597" rel="#L597">597</span>
<span id="L598" rel="#L598">598</span>
<span id="L599" rel="#L599">599</span>
<span id="L600" rel="#L600">600</span>
<span id="L601" rel="#L601">601</span>
<span id="L602" rel="#L602">602</span>
<span id="L603" rel="#L603">603</span>
<span id="L604" rel="#L604">604</span>
<span id="L605" rel="#L605">605</span>
<span id="L606" rel="#L606">606</span>
<span id="L607" rel="#L607">607</span>
<span id="L608" rel="#L608">608</span>
<span id="L609" rel="#L609">609</span>
<span id="L610" rel="#L610">610</span>
<span id="L611" rel="#L611">611</span>
<span id="L612" rel="#L612">612</span>
<span id="L613" rel="#L613">613</span>
<span id="L614" rel="#L614">614</span>
<span id="L615" rel="#L615">615</span>
<span id="L616" rel="#L616">616</span>
<span id="L617" rel="#L617">617</span>
<span id="L618" rel="#L618">618</span>
<span id="L619" rel="#L619">619</span>
<span id="L620" rel="#L620">620</span>
<span id="L621" rel="#L621">621</span>
<span id="L622" rel="#L622">622</span>
<span id="L623" rel="#L623">623</span>
<span id="L624" rel="#L624">624</span>
<span id="L625" rel="#L625">625</span>
<span id="L626" rel="#L626">626</span>
<span id="L627" rel="#L627">627</span>
<span id="L628" rel="#L628">628</span>
<span id="L629" rel="#L629">629</span>
<span id="L630" rel="#L630">630</span>
<span id="L631" rel="#L631">631</span>
<span id="L632" rel="#L632">632</span>
<span id="L633" rel="#L633">633</span>
<span id="L634" rel="#L634">634</span>
<span id="L635" rel="#L635">635</span>
<span id="L636" rel="#L636">636</span>
<span id="L637" rel="#L637">637</span>
<span id="L638" rel="#L638">638</span>
<span id="L639" rel="#L639">639</span>
<span id="L640" rel="#L640">640</span>
<span id="L641" rel="#L641">641</span>
<span id="L642" rel="#L642">642</span>
<span id="L643" rel="#L643">643</span>
<span id="L644" rel="#L644">644</span>
<span id="L645" rel="#L645">645</span>
<span id="L646" rel="#L646">646</span>
<span id="L647" rel="#L647">647</span>
<span id="L648" rel="#L648">648</span>
<span id="L649" rel="#L649">649</span>
<span id="L650" rel="#L650">650</span>
<span id="L651" rel="#L651">651</span>
<span id="L652" rel="#L652">652</span>
<span id="L653" rel="#L653">653</span>
<span id="L654" rel="#L654">654</span>
<span id="L655" rel="#L655">655</span>
<span id="L656" rel="#L656">656</span>
<span id="L657" rel="#L657">657</span>
<span id="L658" rel="#L658">658</span>
<span id="L659" rel="#L659">659</span>
<span id="L660" rel="#L660">660</span>
<span id="L661" rel="#L661">661</span>
<span id="L662" rel="#L662">662</span>
<span id="L663" rel="#L663">663</span>
<span id="L664" rel="#L664">664</span>
<span id="L665" rel="#L665">665</span>
<span id="L666" rel="#L666">666</span>
<span id="L667" rel="#L667">667</span>
<span id="L668" rel="#L668">668</span>
<span id="L669" rel="#L669">669</span>
<span id="L670" rel="#L670">670</span>
<span id="L671" rel="#L671">671</span>
<span id="L672" rel="#L672">672</span>
<span id="L673" rel="#L673">673</span>
<span id="L674" rel="#L674">674</span>
<span id="L675" rel="#L675">675</span>
<span id="L676" rel="#L676">676</span>
<span id="L677" rel="#L677">677</span>
<span id="L678" rel="#L678">678</span>
<span id="L679" rel="#L679">679</span>
<span id="L680" rel="#L680">680</span>
<span id="L681" rel="#L681">681</span>
<span id="L682" rel="#L682">682</span>
<span id="L683" rel="#L683">683</span>
<span id="L684" rel="#L684">684</span>
<span id="L685" rel="#L685">685</span>
<span id="L686" rel="#L686">686</span>
<span id="L687" rel="#L687">687</span>
<span id="L688" rel="#L688">688</span>
<span id="L689" rel="#L689">689</span>
<span id="L690" rel="#L690">690</span>
<span id="L691" rel="#L691">691</span>
<span id="L692" rel="#L692">692</span>
<span id="L693" rel="#L693">693</span>
<span id="L694" rel="#L694">694</span>
<span id="L695" rel="#L695">695</span>
<span id="L696" rel="#L696">696</span>
<span id="L697" rel="#L697">697</span>
<span id="L698" rel="#L698">698</span>
<span id="L699" rel="#L699">699</span>
<span id="L700" rel="#L700">700</span>
<span id="L701" rel="#L701">701</span>
<span id="L702" rel="#L702">702</span>
<span id="L703" rel="#L703">703</span>
<span id="L704" rel="#L704">704</span>
<span id="L705" rel="#L705">705</span>
<span id="L706" rel="#L706">706</span>
<span id="L707" rel="#L707">707</span>
<span id="L708" rel="#L708">708</span>
<span id="L709" rel="#L709">709</span>
<span id="L710" rel="#L710">710</span>
<span id="L711" rel="#L711">711</span>
<span id="L712" rel="#L712">712</span>
<span id="L713" rel="#L713">713</span>
<span id="L714" rel="#L714">714</span>
<span id="L715" rel="#L715">715</span>
<span id="L716" rel="#L716">716</span>
<span id="L717" rel="#L717">717</span>
<span id="L718" rel="#L718">718</span>
<span id="L719" rel="#L719">719</span>
<span id="L720" rel="#L720">720</span>
<span id="L721" rel="#L721">721</span>
<span id="L722" rel="#L722">722</span>
<span id="L723" rel="#L723">723</span>
<span id="L724" rel="#L724">724</span>
<span id="L725" rel="#L725">725</span>
<span id="L726" rel="#L726">726</span>
<span id="L727" rel="#L727">727</span>
<span id="L728" rel="#L728">728</span>
<span id="L729" rel="#L729">729</span>
<span id="L730" rel="#L730">730</span>
<span id="L731" rel="#L731">731</span>
<span id="L732" rel="#L732">732</span>
<span id="L733" rel="#L733">733</span>
<span id="L734" rel="#L734">734</span>
<span id="L735" rel="#L735">735</span>
<span id="L736" rel="#L736">736</span>
<span id="L737" rel="#L737">737</span>
<span id="L738" rel="#L738">738</span>
<span id="L739" rel="#L739">739</span>
<span id="L740" rel="#L740">740</span>
<span id="L741" rel="#L741">741</span>
<span id="L742" rel="#L742">742</span>
<span id="L743" rel="#L743">743</span>
<span id="L744" rel="#L744">744</span>
<span id="L745" rel="#L745">745</span>
<span id="L746" rel="#L746">746</span>
<span id="L747" rel="#L747">747</span>
<span id="L748" rel="#L748">748</span>
<span id="L749" rel="#L749">749</span>
<span id="L750" rel="#L750">750</span>
<span id="L751" rel="#L751">751</span>
<span id="L752" rel="#L752">752</span>
<span id="L753" rel="#L753">753</span>
<span id="L754" rel="#L754">754</span>
<span id="L755" rel="#L755">755</span>
<span id="L756" rel="#L756">756</span>
<span id="L757" rel="#L757">757</span>
<span id="L758" rel="#L758">758</span>
<span id="L759" rel="#L759">759</span>
<span id="L760" rel="#L760">760</span>
<span id="L761" rel="#L761">761</span>
<span id="L762" rel="#L762">762</span>
<span id="L763" rel="#L763">763</span>
<span id="L764" rel="#L764">764</span>
<span id="L765" rel="#L765">765</span>
<span id="L766" rel="#L766">766</span>
<span id="L767" rel="#L767">767</span>
<span id="L768" rel="#L768">768</span>
<span id="L769" rel="#L769">769</span>
<span id="L770" rel="#L770">770</span>
<span id="L771" rel="#L771">771</span>
<span id="L772" rel="#L772">772</span>
<span id="L773" rel="#L773">773</span>
<span id="L774" rel="#L774">774</span>
<span id="L775" rel="#L775">775</span>
<span id="L776" rel="#L776">776</span>
<span id="L777" rel="#L777">777</span>
<span id="L778" rel="#L778">778</span>
<span id="L779" rel="#L779">779</span>
<span id="L780" rel="#L780">780</span>
<span id="L781" rel="#L781">781</span>
<span id="L782" rel="#L782">782</span>
<span id="L783" rel="#L783">783</span>
<span id="L784" rel="#L784">784</span>
<span id="L785" rel="#L785">785</span>
<span id="L786" rel="#L786">786</span>
<span id="L787" rel="#L787">787</span>
<span id="L788" rel="#L788">788</span>
<span id="L789" rel="#L789">789</span>
<span id="L790" rel="#L790">790</span>
<span id="L791" rel="#L791">791</span>
<span id="L792" rel="#L792">792</span>
<span id="L793" rel="#L793">793</span>
<span id="L794" rel="#L794">794</span>
<span id="L795" rel="#L795">795</span>
<span id="L796" rel="#L796">796</span>
<span id="L797" rel="#L797">797</span>
<span id="L798" rel="#L798">798</span>
<span id="L799" rel="#L799">799</span>
<span id="L800" rel="#L800">800</span>
<span id="L801" rel="#L801">801</span>
<span id="L802" rel="#L802">802</span>
<span id="L803" rel="#L803">803</span>
<span id="L804" rel="#L804">804</span>
<span id="L805" rel="#L805">805</span>
<span id="L806" rel="#L806">806</span>
<span id="L807" rel="#L807">807</span>
<span id="L808" rel="#L808">808</span>
<span id="L809" rel="#L809">809</span>
<span id="L810" rel="#L810">810</span>
<span id="L811" rel="#L811">811</span>
<span id="L812" rel="#L812">812</span>
<span id="L813" rel="#L813">813</span>
<span id="L814" rel="#L814">814</span>
<span id="L815" rel="#L815">815</span>
<span id="L816" rel="#L816">816</span>
<span id="L817" rel="#L817">817</span>
<span id="L818" rel="#L818">818</span>
<span id="L819" rel="#L819">819</span>
<span id="L820" rel="#L820">820</span>
<span id="L821" rel="#L821">821</span>
<span id="L822" rel="#L822">822</span>
<span id="L823" rel="#L823">823</span>
<span id="L824" rel="#L824">824</span>
<span id="L825" rel="#L825">825</span>
<span id="L826" rel="#L826">826</span>
<span id="L827" rel="#L827">827</span>
<span id="L828" rel="#L828">828</span>
<span id="L829" rel="#L829">829</span>
<span id="L830" rel="#L830">830</span>
<span id="L831" rel="#L831">831</span>
<span id="L832" rel="#L832">832</span>
<span id="L833" rel="#L833">833</span>
<span id="L834" rel="#L834">834</span>
<span id="L835" rel="#L835">835</span>
<span id="L836" rel="#L836">836</span>
<span id="L837" rel="#L837">837</span>
<span id="L838" rel="#L838">838</span>
<span id="L839" rel="#L839">839</span>
<span id="L840" rel="#L840">840</span>
<span id="L841" rel="#L841">841</span>
<span id="L842" rel="#L842">842</span>
<span id="L843" rel="#L843">843</span>
<span id="L844" rel="#L844">844</span>
<span id="L845" rel="#L845">845</span>
<span id="L846" rel="#L846">846</span>
<span id="L847" rel="#L847">847</span>
<span id="L848" rel="#L848">848</span>
<span id="L849" rel="#L849">849</span>
<span id="L850" rel="#L850">850</span>
<span id="L851" rel="#L851">851</span>
<span id="L852" rel="#L852">852</span>
<span id="L853" rel="#L853">853</span>
<span id="L854" rel="#L854">854</span>
<span id="L855" rel="#L855">855</span>
<span id="L856" rel="#L856">856</span>
<span id="L857" rel="#L857">857</span>
<span id="L858" rel="#L858">858</span>
<span id="L859" rel="#L859">859</span>
<span id="L860" rel="#L860">860</span>
<span id="L861" rel="#L861">861</span>
<span id="L862" rel="#L862">862</span>
<span id="L863" rel="#L863">863</span>
<span id="L864" rel="#L864">864</span>
<span id="L865" rel="#L865">865</span>
<span id="L866" rel="#L866">866</span>
<span id="L867" rel="#L867">867</span>
<span id="L868" rel="#L868">868</span>
<span id="L869" rel="#L869">869</span>
<span id="L870" rel="#L870">870</span>
<span id="L871" rel="#L871">871</span>
<span id="L872" rel="#L872">872</span>
<span id="L873" rel="#L873">873</span>
<span id="L874" rel="#L874">874</span>
<span id="L875" rel="#L875">875</span>
<span id="L876" rel="#L876">876</span>
<span id="L877" rel="#L877">877</span>
<span id="L878" rel="#L878">878</span>
<span id="L879" rel="#L879">879</span>
<span id="L880" rel="#L880">880</span>
<span id="L881" rel="#L881">881</span>
<span id="L882" rel="#L882">882</span>
<span id="L883" rel="#L883">883</span>
<span id="L884" rel="#L884">884</span>
<span id="L885" rel="#L885">885</span>
<span id="L886" rel="#L886">886</span>
<span id="L887" rel="#L887">887</span>
<span id="L888" rel="#L888">888</span>
<span id="L889" rel="#L889">889</span>
<span id="L890" rel="#L890">890</span>
<span id="L891" rel="#L891">891</span>
<span id="L892" rel="#L892">892</span>
<span id="L893" rel="#L893">893</span>
<span id="L894" rel="#L894">894</span>
<span id="L895" rel="#L895">895</span>
<span id="L896" rel="#L896">896</span>
<span id="L897" rel="#L897">897</span>
<span id="L898" rel="#L898">898</span>
<span id="L899" rel="#L899">899</span>
<span id="L900" rel="#L900">900</span>
<span id="L901" rel="#L901">901</span>
<span id="L902" rel="#L902">902</span>
<span id="L903" rel="#L903">903</span>
<span id="L904" rel="#L904">904</span>
<span id="L905" rel="#L905">905</span>
<span id="L906" rel="#L906">906</span>
<span id="L907" rel="#L907">907</span>
<span id="L908" rel="#L908">908</span>
<span id="L909" rel="#L909">909</span>
<span id="L910" rel="#L910">910</span>
<span id="L911" rel="#L911">911</span>
<span id="L912" rel="#L912">912</span>
<span id="L913" rel="#L913">913</span>
<span id="L914" rel="#L914">914</span>
<span id="L915" rel="#L915">915</span>
<span id="L916" rel="#L916">916</span>
<span id="L917" rel="#L917">917</span>
<span id="L918" rel="#L918">918</span>
<span id="L919" rel="#L919">919</span>
<span id="L920" rel="#L920">920</span>
<span id="L921" rel="#L921">921</span>
<span id="L922" rel="#L922">922</span>
<span id="L923" rel="#L923">923</span>
<span id="L924" rel="#L924">924</span>
<span id="L925" rel="#L925">925</span>
<span id="L926" rel="#L926">926</span>
<span id="L927" rel="#L927">927</span>
<span id="L928" rel="#L928">928</span>
<span id="L929" rel="#L929">929</span>
<span id="L930" rel="#L930">930</span>
<span id="L931" rel="#L931">931</span>
<span id="L932" rel="#L932">932</span>
<span id="L933" rel="#L933">933</span>
<span id="L934" rel="#L934">934</span>
<span id="L935" rel="#L935">935</span>
<span id="L936" rel="#L936">936</span>
<span id="L937" rel="#L937">937</span>
<span id="L938" rel="#L938">938</span>
<span id="L939" rel="#L939">939</span>
<span id="L940" rel="#L940">940</span>
<span id="L941" rel="#L941">941</span>
<span id="L942" rel="#L942">942</span>
<span id="L943" rel="#L943">943</span>
<span id="L944" rel="#L944">944</span>
<span id="L945" rel="#L945">945</span>
<span id="L946" rel="#L946">946</span>
<span id="L947" rel="#L947">947</span>
<span id="L948" rel="#L948">948</span>
<span id="L949" rel="#L949">949</span>
<span id="L950" rel="#L950">950</span>
<span id="L951" rel="#L951">951</span>
<span id="L952" rel="#L952">952</span>
<span id="L953" rel="#L953">953</span>
<span id="L954" rel="#L954">954</span>
<span id="L955" rel="#L955">955</span>
<span id="L956" rel="#L956">956</span>
<span id="L957" rel="#L957">957</span>
<span id="L958" rel="#L958">958</span>
<span id="L959" rel="#L959">959</span>
<span id="L960" rel="#L960">960</span>
<span id="L961" rel="#L961">961</span>
<span id="L962" rel="#L962">962</span>
<span id="L963" rel="#L963">963</span>
<span id="L964" rel="#L964">964</span>
<span id="L965" rel="#L965">965</span>
<span id="L966" rel="#L966">966</span>
<span id="L967" rel="#L967">967</span>
<span id="L968" rel="#L968">968</span>
<span id="L969" rel="#L969">969</span>
<span id="L970" rel="#L970">970</span>
<span id="L971" rel="#L971">971</span>
<span id="L972" rel="#L972">972</span>
<span id="L973" rel="#L973">973</span>
<span id="L974" rel="#L974">974</span>
<span id="L975" rel="#L975">975</span>
<span id="L976" rel="#L976">976</span>
<span id="L977" rel="#L977">977</span>
<span id="L978" rel="#L978">978</span>
<span id="L979" rel="#L979">979</span>
<span id="L980" rel="#L980">980</span>
<span id="L981" rel="#L981">981</span>
<span id="L982" rel="#L982">982</span>
<span id="L983" rel="#L983">983</span>
<span id="L984" rel="#L984">984</span>
<span id="L985" rel="#L985">985</span>
<span id="L986" rel="#L986">986</span>
<span id="L987" rel="#L987">987</span>
<span id="L988" rel="#L988">988</span>
<span id="L989" rel="#L989">989</span>
<span id="L990" rel="#L990">990</span>
<span id="L991" rel="#L991">991</span>
<span id="L992" rel="#L992">992</span>
<span id="L993" rel="#L993">993</span>
<span id="L994" rel="#L994">994</span>
<span id="L995" rel="#L995">995</span>
<span id="L996" rel="#L996">996</span>
<span id="L997" rel="#L997">997</span>
<span id="L998" rel="#L998">998</span>
<span id="L999" rel="#L999">999</span>
<span id="L1000" rel="#L1000">1000</span>
<span id="L1001" rel="#L1001">1001</span>
<span id="L1002" rel="#L1002">1002</span>
<span id="L1003" rel="#L1003">1003</span>
<span id="L1004" rel="#L1004">1004</span>
<span id="L1005" rel="#L1005">1005</span>
<span id="L1006" rel="#L1006">1006</span>
<span id="L1007" rel="#L1007">1007</span>
<span id="L1008" rel="#L1008">1008</span>
<span id="L1009" rel="#L1009">1009</span>
<span id="L1010" rel="#L1010">1010</span>
<span id="L1011" rel="#L1011">1011</span>
<span id="L1012" rel="#L1012">1012</span>
<span id="L1013" rel="#L1013">1013</span>
<span id="L1014" rel="#L1014">1014</span>
<span id="L1015" rel="#L1015">1015</span>
<span id="L1016" rel="#L1016">1016</span>
<span id="L1017" rel="#L1017">1017</span>
<span id="L1018" rel="#L1018">1018</span>
<span id="L1019" rel="#L1019">1019</span>
<span id="L1020" rel="#L1020">1020</span>
<span id="L1021" rel="#L1021">1021</span>
<span id="L1022" rel="#L1022">1022</span>
<span id="L1023" rel="#L1023">1023</span>
<span id="L1024" rel="#L1024">1024</span>
<span id="L1025" rel="#L1025">1025</span>
<span id="L1026" rel="#L1026">1026</span>
<span id="L1027" rel="#L1027">1027</span>
<span id="L1028" rel="#L1028">1028</span>
<span id="L1029" rel="#L1029">1029</span>
<span id="L1030" rel="#L1030">1030</span>
<span id="L1031" rel="#L1031">1031</span>
<span id="L1032" rel="#L1032">1032</span>
<span id="L1033" rel="#L1033">1033</span>
<span id="L1034" rel="#L1034">1034</span>
<span id="L1035" rel="#L1035">1035</span>
<span id="L1036" rel="#L1036">1036</span>
<span id="L1037" rel="#L1037">1037</span>
<span id="L1038" rel="#L1038">1038</span>
<span id="L1039" rel="#L1039">1039</span>
<span id="L1040" rel="#L1040">1040</span>
<span id="L1041" rel="#L1041">1041</span>
<span id="L1042" rel="#L1042">1042</span>
<span id="L1043" rel="#L1043">1043</span>
<span id="L1044" rel="#L1044">1044</span>
<span id="L1045" rel="#L1045">1045</span>
<span id="L1046" rel="#L1046">1046</span>
<span id="L1047" rel="#L1047">1047</span>
<span id="L1048" rel="#L1048">1048</span>
<span id="L1049" rel="#L1049">1049</span>
<span id="L1050" rel="#L1050">1050</span>
<span id="L1051" rel="#L1051">1051</span>
<span id="L1052" rel="#L1052">1052</span>
<span id="L1053" rel="#L1053">1053</span>
<span id="L1054" rel="#L1054">1054</span>
<span id="L1055" rel="#L1055">1055</span>
<span id="L1056" rel="#L1056">1056</span>
<span id="L1057" rel="#L1057">1057</span>
<span id="L1058" rel="#L1058">1058</span>
<span id="L1059" rel="#L1059">1059</span>
<span id="L1060" rel="#L1060">1060</span>
<span id="L1061" rel="#L1061">1061</span>
<span id="L1062" rel="#L1062">1062</span>
<span id="L1063" rel="#L1063">1063</span>
<span id="L1064" rel="#L1064">1064</span>
<span id="L1065" rel="#L1065">1065</span>
<span id="L1066" rel="#L1066">1066</span>
<span id="L1067" rel="#L1067">1067</span>
<span id="L1068" rel="#L1068">1068</span>
<span id="L1069" rel="#L1069">1069</span>
<span id="L1070" rel="#L1070">1070</span>
<span id="L1071" rel="#L1071">1071</span>
<span id="L1072" rel="#L1072">1072</span>
<span id="L1073" rel="#L1073">1073</span>
<span id="L1074" rel="#L1074">1074</span>
<span id="L1075" rel="#L1075">1075</span>
<span id="L1076" rel="#L1076">1076</span>
<span id="L1077" rel="#L1077">1077</span>
<span id="L1078" rel="#L1078">1078</span>
<span id="L1079" rel="#L1079">1079</span>
<span id="L1080" rel="#L1080">1080</span>
<span id="L1081" rel="#L1081">1081</span>
<span id="L1082" rel="#L1082">1082</span>
<span id="L1083" rel="#L1083">1083</span>
<span id="L1084" rel="#L1084">1084</span>
<span id="L1085" rel="#L1085">1085</span>
<span id="L1086" rel="#L1086">1086</span>
<span id="L1087" rel="#L1087">1087</span>
<span id="L1088" rel="#L1088">1088</span>
<span id="L1089" rel="#L1089">1089</span>
<span id="L1090" rel="#L1090">1090</span>
<span id="L1091" rel="#L1091">1091</span>
<span id="L1092" rel="#L1092">1092</span>
<span id="L1093" rel="#L1093">1093</span>
<span id="L1094" rel="#L1094">1094</span>
<span id="L1095" rel="#L1095">1095</span>
<span id="L1096" rel="#L1096">1096</span>
<span id="L1097" rel="#L1097">1097</span>
<span id="L1098" rel="#L1098">1098</span>
<span id="L1099" rel="#L1099">1099</span>
<span id="L1100" rel="#L1100">1100</span>
<span id="L1101" rel="#L1101">1101</span>
<span id="L1102" rel="#L1102">1102</span>
<span id="L1103" rel="#L1103">1103</span>
<span id="L1104" rel="#L1104">1104</span>
<span id="L1105" rel="#L1105">1105</span>
<span id="L1106" rel="#L1106">1106</span>
<span id="L1107" rel="#L1107">1107</span>
<span id="L1108" rel="#L1108">1108</span>
<span id="L1109" rel="#L1109">1109</span>
<span id="L1110" rel="#L1110">1110</span>
<span id="L1111" rel="#L1111">1111</span>
<span id="L1112" rel="#L1112">1112</span>
<span id="L1113" rel="#L1113">1113</span>
<span id="L1114" rel="#L1114">1114</span>
<span id="L1115" rel="#L1115">1115</span>
<span id="L1116" rel="#L1116">1116</span>
<span id="L1117" rel="#L1117">1117</span>
<span id="L1118" rel="#L1118">1118</span>
<span id="L1119" rel="#L1119">1119</span>
<span id="L1120" rel="#L1120">1120</span>
<span id="L1121" rel="#L1121">1121</span>
<span id="L1122" rel="#L1122">1122</span>
<span id="L1123" rel="#L1123">1123</span>
<span id="L1124" rel="#L1124">1124</span>
<span id="L1125" rel="#L1125">1125</span>
<span id="L1126" rel="#L1126">1126</span>

            </td>
            <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="c1">// Type definitions for Web Audio API</span></div><div class='line' id='LC2'><span class="c1">// Project: http://www.w3.org/TR/2012/WD-webaudio-20121213/</span></div><div class='line' id='LC3'><span class="c1">// Definitions by: Baruch Berger &lt;https://github.com/bbss&gt;, Kon &lt;http://phyzkit.net/&gt;</span></div><div class='line' id='LC4'><span class="c1">// Definitions: https://github.com/borisyankov/DefinitelyTyped</span></div><div class='line' id='LC5'><br/></div><div class='line' id='LC6'><span class="cm">/**</span></div><div class='line' id='LC7'><span class="cm"> * This interface represents a set of AudioNode objects and their connections. It allows for arbitrary routing of signals to the AudioDestinationNode (what the user ultimately hears). Nodes are created from the context and are then connected together. In most use cases, only a single AudioContext is used per document. An AudioContext is constructed as follows:</span></div><div class='line' id='LC8'><span class="cm"> *</span></div><div class='line' id='LC9'><span class="cm"> *     var context = new AudioContext();</span></div><div class='line' id='LC10'><span class="cm"> */</span></div><div class='line' id='LC11'><span class="kr">interface</span> <span class="nx">AudioContext</span> <span class="p">{</span></div><div class='line' id='LC12'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC13'><span class="cm">     * An AudioDestinationNode with a single input representing the final destination for all audio (to be rendered to the audio hardware). All AudioNodes actively rendering audio will directly or indirectly connect to destination.</span></div><div class='line' id='LC14'><span class="cm">     */</span></div><div class='line' id='LC15'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">destination</span>: <span class="kt">AudioDestinationNode</span><span class="p">;</span></div><div class='line' id='LC16'><br/></div><div class='line' id='LC17'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC18'><span class="cm">     * The sample rate (in sample-frames per second) at which the AudioContext handles audio. It is assumed that all AudioNodes in the context run at this rate. In making this assumption, sample-rate converters or &quot;varispeed&quot; processors are not supported in real-time processing.</span></div><div class='line' id='LC19'><span class="cm">     */</span></div><div class='line' id='LC20'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">sampleRate</span>: <span class="kt">number</span><span class="p">;</span></div><div class='line' id='LC21'><br/></div><div class='line' id='LC22'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC23'><span class="cm">     * This is a time in seconds which starts at zero when the context is created and increases in real-time. All scheduled times are relative to it. This is not a &quot;transport&quot; time which can be started, paused, and re-positioned. It is always moving forward. A GarageBand-like timeline transport system can be very easily built on top of this (in JavaScript). This time corresponds to an ever-increasing hardware timestamp.</span></div><div class='line' id='LC24'><span class="cm">     */</span></div><div class='line' id='LC25'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">currentTime</span>: <span class="kt">number</span><span class="p">;</span></div><div class='line' id='LC26'><br/></div><div class='line' id='LC27'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC28'><span class="cm">     * An AudioListener which is used for 3D spatialization.</span></div><div class='line' id='LC29'><span class="cm">     */</span></div><div class='line' id='LC30'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">listener</span>: <span class="kt">AudioListener</span><span class="p">;</span></div><div class='line' id='LC31'><br/></div><div class='line' id='LC32'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC33'><span class="cm">     * The number of AudioBufferSourceNodes that are currently playing.</span></div><div class='line' id='LC34'><span class="cm">     */</span></div><div class='line' id='LC35'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">activeSourceCount</span>: <span class="kt">number</span><span class="p">;</span></div><div class='line' id='LC36'><br/></div><div class='line' id='LC37'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC38'><span class="cm">     * Creates an AudioBuffer of the given size. The audio data in the buffer will be zero-initialized (silent). An exception will be thrown if the numberOfChannels or sampleRate are out-of-bounds.</span></div><div class='line' id='LC39'><span class="cm">     * @param numberOfChannels how many channels the buffer will have. An implementation must support at least 32 channels.</span></div><div class='line' id='LC40'><span class="cm">     * @param length the size of the buffer in sample-frames.</span></div><div class='line' id='LC41'><span class="cm">     * @param sampleRate the sample-rate of the linear PCM audio data in the buffer in sample-frames per second. An implementation must support sample-rates in at least the range 22050 to 96000.</span></div><div class='line' id='LC42'><span class="cm">     */</span></div><div class='line' id='LC43'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">createBuffer</span><span class="p">(</span><span class="nx">numberOfChannels</span>: <span class="kt">number</span><span class="p">,</span> <span class="nx">length</span>: <span class="kt">number</span><span class="p">,</span> <span class="nx">sampleRate</span>: <span class="kt">number</span><span class="p">)</span><span class="o">:</span> <span class="nx">AudioBuffer</span><span class="p">;</span></div><div class='line' id='LC44'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC45'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC46'><span class="cm">     * Creates an AudioBuffer given the audio file data contained in the ArrayBuffer. The ArrayBuffer can, for example, be loaded from an XMLHttpRequest&#39;s response attribute after setting the responseType to &quot;arraybuffer&quot;. Audio file data can be in any of the formats supported by the audio element.</span></div><div class='line' id='LC47'><span class="cm">     * The following steps must be performed:</span></div><div class='line' id='LC48'><span class="cm">     * 1. Decode the encoded buffer from the AudioBuffer into linear PCM. If a decoding error is encountered due to the audio format not being recognized or supported, or because of corrupted/unexpected/inconsistent data then return NULL (and these steps will be terminated).</span></div><div class='line' id='LC49'><span class="cm">     * 2. If mixToMono is true, then mixdown the decoded linear PCM data to mono.</span></div><div class='line' id='LC50'><span class="cm">     * 3. Take the decoded (possibly mixed-down) linear PCM audio data, and resample it to the sample-rate of the AudioContext if it is different from the sample-rate of buffer. The final result will be stored in an AudioBuffer and returned as the result of this method.</span></div><div class='line' id='LC51'><span class="cm">     * @param buffer the audio file data (for example from a .wav file).</span></div><div class='line' id='LC52'><span class="cm">     * @param mixToMono if a mixdown to mono will be performed. Normally, this would not be set.</span></div><div class='line' id='LC53'><span class="cm">     */</span></div><div class='line' id='LC54'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">createBuffer</span><span class="p">(</span><span class="nx">buffer</span>: <span class="kt">ArrayBuffer</span><span class="p">,</span> <span class="nx">mixToMono</span>: <span class="kt">boolean</span><span class="p">)</span><span class="o">:</span> <span class="nx">AudioBuffer</span><span class="p">;</span></div><div class='line' id='LC55'><br/></div><div class='line' id='LC56'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC57'><span class="cm">     * Asynchronously decodes the audio file data contained in the ArrayBuffer. The ArrayBuffer can, for example, be loaded from an XMLHttpRequest&#39;s response attribute after setting the responseType to &quot;arraybuffer&quot;. Audio file data can be in any of the formats supported by the audio element.</span></div><div class='line' id='LC58'><span class="cm">     * The decodeAudioData() method is preferred over the createBuffer() from ArrayBuffer method because it is asynchronous and does not block the main JavaScript thread.</span></div><div class='line' id='LC59'><span class="cm">     *</span></div><div class='line' id='LC60'><span class="cm">     * The following steps must be performed:</span></div><div class='line' id='LC61'><span class="cm">     * 1. Temporarily neuter the audioData ArrayBuffer in such a way that JavaScript code may not access or modify the data.</span></div><div class='line' id='LC62'><span class="cm">     * 2. Queue a decoding operation to be performed on another thread.</span></div><div class='line' id='LC63'><span class="cm">     * 3. The decoding thread will attempt to decode the encoded audioData into linear PCM. If a decoding error is encountered due to the audio format not being recognized or supported, or because of corrupted/unexpected/inconsistent data then the audioData neutered state will be restored to normal and the errorCallback will be scheduled to run on the main thread&#39;s event loop and these steps will be terminated.</span></div><div class='line' id='LC64'><span class="cm">     * 4. The decoding thread will take the result, representing the decoded linear PCM audio data, and resample it to the sample-rate of the AudioContext if it is different from the sample-rate of audioData. The final result (after possibly sample-rate converting) will be stored in an AudioBuffer.</span></div><div class='line' id='LC65'><span class="cm">     * 5. The audioData neutered state will be restored to normal</span></div><div class='line' id='LC66'><span class="cm">     * 6. The successCallback function will be scheduled to run on the main thread&#39;s event loop given the AudioBuffer from step (4) as an argument. </span></div><div class='line' id='LC67'><span class="cm">     *</span></div><div class='line' id='LC68'><span class="cm">     * @param ArrayBuffer containing audio file data.</span></div><div class='line' id='LC69'><span class="cm">     * @param  callback function which will be invoked when the decoding is finished. The single argument to this callback is an AudioBuffer representing the decoded PCM audio data.</span></div><div class='line' id='LC70'><span class="cm">     * @param callback function which will be invoked if there is an error decoding the audio file data.</span></div><div class='line' id='LC71'><span class="cm">     */</span></div><div class='line' id='LC72'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">decodeAudioData</span><span class="p">(</span><span class="nx">audioData</span>: <span class="kt">ArrayBuffer</span><span class="p">,</span>  <span class="nx">successCallback</span>: <span class="kt">any</span><span class="p">,</span> <span class="nx">errorCallback?</span>: <span class="kt">any</span><span class="p">)</span><span class="o">:</span> <span class="k">void</span><span class="p">;</span></div><div class='line' id='LC73'><br/></div><div class='line' id='LC74'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC75'><span class="cm">     * Creates an AudioBufferSourceNode.</span></div><div class='line' id='LC76'><span class="cm">     */</span>    </div><div class='line' id='LC77'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">createBufferSource</span><span class="p">()</span><span class="o">:</span> <span class="nx">AudioBufferSourceNode</span><span class="p">;</span></div><div class='line' id='LC78'><br/></div><div class='line' id='LC79'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC80'><span class="cm">     * Creates a MediaElementAudioSourceNode given an HTMLMediaElement. As a consequence of calling this method, audio playback from the HTMLMediaElement will be re-routed into the processing graph of the AudioContext.</span></div><div class='line' id='LC81'><span class="cm">     */</span></div><div class='line' id='LC82'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">createMediaElementSource</span><span class="p">(</span><span class="nx">mediaElement</span>: <span class="kt">HTMLMediaElement</span><span class="p">)</span><span class="o">:</span> <span class="nx">MediaElementAudioSourceNode</span><span class="p">;</span></div><div class='line' id='LC83'><br/></div><div class='line' id='LC84'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC85'><span class="cm">     * Creates a MediaStreamAudioSourceNode given a MediaStream. As a consequence of calling this method, audio playback from the MediaStream will be re-routed into the processing graph of the AudioContext.</span></div><div class='line' id='LC86'><span class="cm">     */</span>    </div><div class='line' id='LC87'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">createMediaStreamSource</span><span class="p">(</span><span class="nx">mediaStream</span>: <span class="kt">any</span><span class="p">)</span><span class="o">:</span> <span class="nx">MediaStreamAudioSourceNode</span><span class="p">;</span></div><div class='line' id='LC88'><br/></div><div class='line' id='LC89'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC90'><span class="cm">     * Creates a ScriptProcessorNode for direct audio processing using JavaScript. An exception will be thrown if bufferSize or numberOfInputChannels or numberOfOutputChannels are outside the valid range.</span></div><div class='line' id='LC91'><span class="cm">     * It is invalid for both numberOfInputChannels and numberOfOutputChannels to be zero.</span></div><div class='line' id='LC92'><span class="cm">     * @param bufferSize  the buffer size in units of sample-frames. It must be one of the following values: 256, 512, 1024, 2048, 4096, 8192, 16384. This value controls how frequently the onaudioprocess event handler is called and how many sample-frames need to be processed each call. Lower values for bufferSize will result in a lower (better) latency. Higher values will be necessary to avoid audio breakup and glitches. The value chosen must carefully balance between latency and audio quality.</span></div><div class='line' id='LC93'><span class="cm">     * @param numberOfInputChannels (defaults to 2) the number of channels for this node&#39;s input. Values of up to 32 must be supported.</span></div><div class='line' id='LC94'><span class="cm">     * @param numberOfOutputChannels (defaults to 2) the number of channels for this node&#39;s output. Values of up to 32 must be supported.</span></div><div class='line' id='LC95'><span class="cm">     */</span> </div><div class='line' id='LC96'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">createScriptProcessor</span><span class="p">(</span><span class="nx">bufferSize</span>: <span class="kt">number</span><span class="p">,</span> <span class="nx">numberOfInputChannels?</span>: <span class="kt">number</span><span class="p">,</span> <span class="nx">numberOfOutputChannels?</span>: <span class="kt">number</span><span class="p">)</span><span class="o">:</span>  <span class="nx">ScriptProcessorNode</span><span class="p">;</span></div><div class='line' id='LC97'><br/></div><div class='line' id='LC98'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC99'><span class="cm">     * Creates a AnalyserNode.</span></div><div class='line' id='LC100'><span class="cm">     */</span></div><div class='line' id='LC101'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">createAnalyser</span><span class="p">()</span><span class="o">:</span> <span class="nx">AnalyserNode</span><span class="p">;</span></div><div class='line' id='LC102'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC103'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC104'><span class="cm">     * Creates a GainNode.</span></div><div class='line' id='LC105'><span class="cm">     */</span></div><div class='line' id='LC106'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">createGain</span><span class="p">()</span><span class="o">:</span> <span class="nx">GainNode</span><span class="p">;</span>     </div><div class='line' id='LC107'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC108'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC109'><span class="cm">     * Creates a DelayNode representing a variable delay line. The initial default delay time will be 0 seconds.</span></div><div class='line' id='LC110'><span class="cm">     * @param maxDelayTime the maximum delay time in seconds allowed for the delay line. If specified, this value must be greater than zero and less than three minutes or a NOT_SUPPORTED_ERR exception will be thrown.</span></div><div class='line' id='LC111'><span class="cm">     */</span></div><div class='line' id='LC112'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">createDelay</span><span class="p">(</span><span class="nx">maxDelayTime?</span>: <span class="kt">number</span><span class="p">)</span><span class="o">:</span> <span class="nx">DelayNode</span><span class="p">;</span></div><div class='line' id='LC113'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//createDelayNode(maxDelayTime?: number): DelayNode;</span></div><div class='line' id='LC114'><br/></div><div class='line' id='LC115'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC116'><span class="cm">     * Creates a BiquadFilterNode representing a second order filter which can be configured as one of several common filter types.</span></div><div class='line' id='LC117'><span class="cm">     */</span></div><div class='line' id='LC118'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">createBiquadFilter</span><span class="p">()</span><span class="o">:</span> <span class="nx">BiquadFilterNode</span><span class="p">;</span></div><div class='line' id='LC119'><br/></div><div class='line' id='LC120'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC121'><span class="cm">     * Creates a WaveShaperNode representing a non-linear distortion.</span></div><div class='line' id='LC122'><span class="cm">     */</span></div><div class='line' id='LC123'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">createWaveShaper</span><span class="p">()</span><span class="o">:</span> <span class="nx">WaveShaperNode</span><span class="p">;</span></div><div class='line' id='LC124'><br/></div><div class='line' id='LC125'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC126'><span class="cm">     * Creates an PannerNode.</span></div><div class='line' id='LC127'><span class="cm">     */</span></div><div class='line' id='LC128'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">createPanner</span><span class="p">()</span><span class="o">:</span> <span class="nx">PannerNode</span><span class="p">;</span></div><div class='line' id='LC129'><br/></div><div class='line' id='LC130'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC131'><span class="cm">     * Creates a ConvolverNode.</span></div><div class='line' id='LC132'><span class="cm">     */</span></div><div class='line' id='LC133'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">createConvolver</span><span class="p">()</span><span class="o">:</span> <span class="nx">ConvolverNode</span><span class="p">;</span></div><div class='line' id='LC134'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC135'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC136'><span class="cm">     * Creates an ChannelSplitterNode representing a channel splitter. An exception will be thrown for invalid parameter values.</span></div><div class='line' id='LC137'><span class="cm">     * @param numberOfOutputs the number of outputs. Values of up to 32 must be supported. If not specified, then 6 will be used.</span></div><div class='line' id='LC138'><span class="cm">     */</span></div><div class='line' id='LC139'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">createChannelSplitter</span><span class="p">(</span><span class="nx">numberOfOutputs?</span>: <span class="kt">number</span><span class="p">)</span><span class="o">:</span> <span class="nx">ChannelSplitterNode</span><span class="p">;</span></div><div class='line' id='LC140'><br/></div><div class='line' id='LC141'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC142'><span class="cm">     * Creates an ChannelMergerNode representing a channel merger. An exception will be thrown for invalid parameter values.</span></div><div class='line' id='LC143'><span class="cm">     * @param numberOfInputs the number of inputs. Values of up to 32 must be supported. If not specified, then 6 will be used.</span></div><div class='line' id='LC144'><span class="cm">     */</span></div><div class='line' id='LC145'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">createChannelMerger</span><span class="p">(</span><span class="nx">numberOfInputs?</span>: <span class="kt">number</span><span class="p">)</span><span class="o">:</span> <span class="nx">ChannelMergerNode</span><span class="p">;</span></div><div class='line' id='LC146'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC147'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC148'><span class="cm">     * Creates a DynamicsCompressorNode.</span></div><div class='line' id='LC149'><span class="cm">     */</span></div><div class='line' id='LC150'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">createDynamicsCompressor</span><span class="p">()</span><span class="o">:</span> <span class="nx">DynamicsCompressorNode</span><span class="p">;</span></div><div class='line' id='LC151'><br/></div><div class='line' id='LC152'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC153'><span class="cm">     * Creates an OscillatorNode.</span></div><div class='line' id='LC154'><span class="cm">     */</span></div><div class='line' id='LC155'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">createOscillator</span><span class="p">()</span><span class="o">:</span> <span class="nx">OscillatorNode</span><span class="p">;</span></div><div class='line' id='LC156'><br/></div><div class='line' id='LC157'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC158'><span class="cm">     * Creates a WaveTable representing a waveform containing arbitrary harmonic content. The real and imag parameters must be of type Float32Array of equal lengths greater than zero and less than or equal to 4096 or an exception will be thrown. These parameters specify the Fourier coefficients of a Fourier series representing the partials of a periodic waveform. The created WaveTable will be used with an OscillatorNode and will represent a normalized time-domain waveform having maximum absolute peak value of 1. Another way of saying this is that the generated waveform of an OscillatorNode will have maximum peak value at 0dBFS. Conveniently, this corresponds to the full-range of the signal values used by the Web Audio API. Because the WaveTable will be normalized on creation, the real and imag parameters represent relative values.</span></div><div class='line' id='LC159'><span class="cm">     * @param real an array of cosine terms (traditionally the A terms). In audio terminology, the first element (index 0) is the DC-offset of the periodic waveform and is usually set to zero. The second element (index 1) represents the fundamental frequency. The third element represents the first overtone, and so on.</span></div><div class='line' id='LC160'><span class="cm">     * @param imag an array of sine terms (traditionally the B terms). The first element (index 0) should be set to zero (and will be ignored) since this term does not exist in the Fourier series. The second element (index 1) represents the fundamental frequency. The third element represents the first overtone, and so on.</span></div><div class='line' id='LC161'><span class="cm">     */</span></div><div class='line' id='LC162'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">createWaveTable</span><span class="p">(</span><span class="nx">real</span>: <span class="kt">any</span><span class="p">,</span><span class="nx">imag</span>: <span class="kt">any</span><span class="p">)</span><span class="o">:</span> <span class="nx">WaveTable</span><span class="p">;</span></div><div class='line' id='LC163'><span class="p">}</span></div><div class='line' id='LC164'><br/></div><div class='line' id='LC165'><span class="kr">declare</span> <span class="kd">var</span> <span class="nx">AudioContext</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC166'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="p">()</span><span class="o">:</span> <span class="nx">AudioContext</span><span class="p">;</span></div><div class='line' id='LC167'><span class="p">}</span></div><div class='line' id='LC168'><br/></div><div class='line' id='LC169'><span class="kr">declare</span> <span class="kd">var</span> <span class="nx">webkitAudioContext</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC170'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="p">()</span><span class="o">:</span> <span class="nx">AudioContext</span><span class="p">;</span></div><div class='line' id='LC171'><span class="p">}</span></div><div class='line' id='LC172'><br/></div><div class='line' id='LC173'><span class="kr">interface</span> <span class="nx">OfflineRenderSuccessCallback</span><span class="p">{</span></div><div class='line' id='LC174'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="nx">renderedData</span>: <span class="kt">AudioBuffer</span><span class="p">)</span><span class="o">:</span> <span class="k">void</span><span class="p">;</span></div><div class='line' id='LC175'><span class="p">}</span></div><div class='line' id='LC176'><br/></div><div class='line' id='LC177'><span class="cm">/**</span></div><div class='line' id='LC178'><span class="cm"> * OfflineAudioContext is a particular type of AudioContext for rendering/mixing-down (potentially) faster than real-time. It does not render to the audio hardware, but instead renders as quickly as possible, calling a render callback function upon completion with the result provided as an AudioBuffer. It is constructed by specifying the numberOfChannels, length, and sampleRate as follows:</span></div><div class='line' id='LC179'><span class="cm"> * </span></div><div class='line' id='LC180'><span class="cm"> *     var offlineContext = new OfflineAudioContext(unsigned long numberOfChannels, unsigned long length, float sampleRate);</span></div><div class='line' id='LC181'><span class="cm"> */</span></div><div class='line' id='LC182'><span class="kr">interface</span> <span class="nx">OfflineAudioContext</span> <span class="kr">extends</span> <span class="nx">AudioContext</span><span class="p">{</span></div><div class='line' id='LC183'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kr">constructor</span><span class="p">();</span></div><div class='line' id='LC184'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">startRendering</span><span class="p">()</span><span class="o">:</span> <span class="k">void</span><span class="p">;</span></div><div class='line' id='LC185'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">oncomplete</span>: <span class="kt">OfflineRenderSuccessCallback</span><span class="p">;</span></div><div class='line' id='LC186'><span class="p">}</span></div><div class='line' id='LC187'><br/></div><div class='line' id='LC188'><span class="cm">/**</span></div><div class='line' id='LC189'><span class="cm"> * AudioNodes are the building blocks of an AudioContext. This interface represents audio sources, the audio destination, and intermediate processing modules. These modules can be connected together to form processing graphs for rendering audio to the audio hardware. Each node can have inputs and/or outputs. An AudioSourceNode has no inputs and a single output. An AudioDestinationNode has one input and no outputs and represents the final destination to the audio hardware. Most processing nodes such as filters will have one input and one output. Each type of AudioNode differs in the details of how it processes or synthesizes audio. But, in general, AudioNodes will process its inputs (if it has any), and generate audio for its outputs (if it has any).</span></div><div class='line' id='LC190'><span class="cm"> *</span></div><div class='line' id='LC191'><span class="cm"> * An output may connect to one or more AudioNode inputs, thus fanout is supported. An input may be connected from one or more AudioNode outputs, thus fanin is supported.</span></div><div class='line' id='LC192'><span class="cm"> *</span></div><div class='line' id='LC193'><span class="cm"> * In order to handle this fanin, any AudioNode with inputs performs an up-mixing of all connections for each input:</span></div><div class='line' id='LC194'><span class="cm"> *</span></div><div class='line' id='LC195'><span class="cm"> * 1. Calculate N: the maximum number of channels of all the connections to the input. For example, if an input has a mono connection and a stereo connection then this number will be 2.</span></div><div class='line' id='LC196'><span class="cm"> * 2. For each connection to the input, up-mix to N channels.</span></div><div class='line' id='LC197'><span class="cm"> * 3. Mix together all the up-mixed streams from (2). This is a straight-forward mixing together of each of the corresponding channels from each connection.</span></div><div class='line' id='LC198'><span class="cm"> *</span></div><div class='line' id='LC199'><span class="cm"> * Please see Mixer Gain Structure for more informative details.</span></div><div class='line' id='LC200'><span class="cm"> *</span></div><div class='line' id='LC201'><span class="cm"> * For performance reasons, practical implementations will need to use block processing, with each AudioNode processing a fixed number of sample-frames of size block-size. In order to get uniform behavior across implementations, we will define this value explicitly. block-size is defined to be 128 sample-frames which corresponds to roughly 3ms at a sample-rate of 44.1KHz.</span></div><div class='line' id='LC202'><span class="cm"> */</span></div><div class='line' id='LC203'><span class="kr">interface</span> <span class="nx">AudioNode</span> <span class="p">{</span></div><div class='line' id='LC204'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC205'><span class="cm">     * Connects the AudioNode to another AudioNode.</span></div><div class='line' id='LC206'><span class="cm">     *</span></div><div class='line' id='LC207'><span class="cm">     *  It is possible to connect an AudioNode output to more than one input with multiple calls to connect(). Thus, &quot;fanout&quot; is supported.</span></div><div class='line' id='LC208'><span class="cm">     *</span></div><div class='line' id='LC209'><span class="cm">     *  It is possible to connect an AudioNode to another AudioNode which creates a cycle. In other words, an AudioNode may connect to another AudioNode, which in turn connects back to the first AudioNode. This is allowed only if there is at least one DelayNode in the cycle or an exception will be thrown.</span></div><div class='line' id='LC210'><span class="cm">     * </span></div><div class='line' id='LC211'><span class="cm">     * There can only be one connection between a given output of one specific node and a given input of another specific node. Multiple connections with the same termini are ignored. For example:</span></div><div class='line' id='LC212'><span class="cm">     *</span></div><div class='line' id='LC213'><span class="cm">     *     nodeA.connect(nodeB);</span></div><div class='line' id='LC214'><span class="cm">     *     nodeA.connect(nodeB);</span></div><div class='line' id='LC215'><span class="cm">     *</span></div><div class='line' id='LC216'><span class="cm">     * will have the same effect as</span></div><div class='line' id='LC217'><span class="cm">     * </span></div><div class='line' id='LC218'><span class="cm">     *     nodeA.connect(nodeB);</span></div><div class='line' id='LC219'><span class="cm">     *</span></div><div class='line' id='LC220'><span class="cm">     * @param destination the AudioNode to connect to.</span></div><div class='line' id='LC221'><span class="cm">     * @param output an index describing which output of the AudioNode from which to connect. An out-of-bound value throws an exception.</span></div><div class='line' id='LC222'><span class="cm">     * @param input an index describing which input of the destination AudioNode to connect to. An out-of-bound value throws an exception.</span></div><div class='line' id='LC223'><span class="cm">     */</span></div><div class='line' id='LC224'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">connect</span><span class="p">(</span><span class="nx">destination</span>: <span class="kt">AudioNode</span><span class="p">,</span> <span class="nx">output?</span>: <span class="kt">number</span><span class="p">,</span> <span class="nx">input?</span>: <span class="kt">number</span><span class="p">)</span><span class="o">:</span> <span class="k">void</span><span class="p">;</span></div><div class='line' id='LC225'><br/></div><div class='line' id='LC226'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC227'><span class="cm">     * Connects the AudioNode to an AudioParam, controlling the parameter value with an audio-rate signal.</span></div><div class='line' id='LC228'><span class="cm">     *</span></div><div class='line' id='LC229'><span class="cm">     * It is possible to connect an AudioNode output to more than one AudioParam with multiple calls to connect(). Thus, &quot;fanout&quot; is supported.</span></div><div class='line' id='LC230'><span class="cm">     *</span></div><div class='line' id='LC231'><span class="cm">     * It is possible to connect more than one AudioNode output to a single AudioParam with multiple calls to connect(). Thus, &quot;fanin&quot; is supported.</span></div><div class='line' id='LC232'><span class="cm">     *</span></div><div class='line' id='LC233'><span class="cm">     * An AudioParam will take the rendered audio data from any AudioNode output connected to it and convert it to mono by down-mixing if it is not already mono, then mix it together with other such outputs and finally will mix with the intrinsic parameter value (the value the AudioParam would normally have without any audio connections), including any timeline changes scheduled for the parameter.</span></div><div class='line' id='LC234'><span class="cm">     *</span></div><div class='line' id='LC235'><span class="cm">     * There can only be one connection between a given output of one specific node and a specific AudioParam. Multiple connections with the same termini are ignored. For example:</span></div><div class='line' id='LC236'><span class="cm">     *</span></div><div class='line' id='LC237'><span class="cm">     *     nodeA.connect(param);</span></div><div class='line' id='LC238'><span class="cm">     *     nodeA.connect(param);</span></div><div class='line' id='LC239'><span class="cm">     *</span></div><div class='line' id='LC240'><span class="cm">     * will have the same effect as</span></div><div class='line' id='LC241'><span class="cm">     *</span></div><div class='line' id='LC242'><span class="cm">     *     nodeA.connect(param);     </span></div><div class='line' id='LC243'><span class="cm">     * </span></div><div class='line' id='LC244'><span class="cm">     * @param destination the AudioParam to connect to.</span></div><div class='line' id='LC245'><span class="cm">     * @param output an index describing which output of the AudioNode from which to connect. An out-of-bound value throws an exception.</span></div><div class='line' id='LC246'><span class="cm">     */</span></div><div class='line' id='LC247'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">connect</span><span class="p">(</span><span class="nx">destination</span>: <span class="kt">AudioParam</span><span class="p">,</span> <span class="nx">output?</span>: <span class="kt">number</span><span class="p">)</span><span class="o">:</span> <span class="k">void</span><span class="p">;</span></div><div class='line' id='LC248'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC249'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC250'><span class="cm">     * Disconnects an AudioNode&#39;s output.</span></div><div class='line' id='LC251'><span class="cm">     * @param output an index describing which output of the AudioNode to disconnect. An out-of-bound value throws an exception.</span></div><div class='line' id='LC252'><span class="cm">     */</span></div><div class='line' id='LC253'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">disconnect</span><span class="p">(</span><span class="nx">output?</span>: <span class="kt">number</span><span class="p">)</span><span class="o">:</span> <span class="k">void</span><span class="p">;</span></div><div class='line' id='LC254'><br/></div><div class='line' id='LC255'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC256'><span class="cm">     * The AudioContext which owns this AudioNode.</span></div><div class='line' id='LC257'><span class="cm">     */</span></div><div class='line' id='LC258'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">context</span>: <span class="kt">AudioContext</span><span class="p">;</span></div><div class='line' id='LC259'><br/></div><div class='line' id='LC260'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC261'><span class="cm">     * The number of inputs feeding into the AudioNode. This will be 0 for an AudioSourceNode.</span></div><div class='line' id='LC262'><span class="cm">     */</span></div><div class='line' id='LC263'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">numberOfInputs</span>: <span class="kt">number</span><span class="p">;</span></div><div class='line' id='LC264'><br/></div><div class='line' id='LC265'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC266'><span class="cm">     * The number of outputs coming out of the AudioNode. This will be 0 for an AudioDestinationNode.</span></div><div class='line' id='LC267'><span class="cm">     */</span></div><div class='line' id='LC268'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">numberOfOutputs</span>: <span class="kt">number</span><span class="p">;</span></div><div class='line' id='LC269'><span class="p">}</span></div><div class='line' id='LC270'><br/></div><div class='line' id='LC271'><br/></div><div class='line' id='LC272'><span class="cm">/**</span></div><div class='line' id='LC273'><span class="cm"> * This is an abstract interface representing an audio source, an AudioNode which has no inputs and a single output:</span></div><div class='line' id='LC274'><span class="cm"> * </span></div><div class='line' id='LC275'><span class="cm"> *    numberOfInputs  : 0</span></div><div class='line' id='LC276'><span class="cm"> *    numberOfOutputs : 1</span></div><div class='line' id='LC277'><span class="cm"> *     </span></div><div class='line' id='LC278'><span class="cm"> * Subclasses of AudioSourceNode will implement specific types of audio sources.</span></div><div class='line' id='LC279'><span class="cm"> */</span></div><div class='line' id='LC280'><span class="kr">interface</span> <span class="nx">AudioSourceNode</span> <span class="kr">extends</span> <span class="nx">AudioNode</span> <span class="p">{</span></div><div class='line' id='LC281'><br/></div><div class='line' id='LC282'><span class="p">}</span></div><div class='line' id='LC283'><br/></div><div class='line' id='LC284'><span class="cm">/**</span></div><div class='line' id='LC285'><span class="cm"> * This is an AudioNode representing the final audio destination and is what the user will ultimately hear. It can be considered as an audio output device which is connected to speakers. All rendered audio to be heard will be routed to this node, a &quot;terminal&quot; node in the AudioContext&#39;s routing graph. There is only a single AudioDestinationNode per AudioContext, provided through the destination attribute of AudioContext.</span></div><div class='line' id='LC286'><span class="cm"> *</span></div><div class='line' id='LC287'><span class="cm"> *    numberOfInputs  : 1</span></div><div class='line' id='LC288'><span class="cm"> *    numberOfOutputs : 0</span></div><div class='line' id='LC289'><span class="cm"> */</span></div><div class='line' id='LC290'><span class="kr">interface</span> <span class="nx">AudioDestinationNode</span> <span class="kr">extends</span> <span class="nx">AudioNode</span> <span class="p">{</span></div><div class='line' id='LC291'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC292'><span class="cm">     * The maximum number of channels that the numberOfChannels attribute can be set to. An AudioDestinationNode representing the audio hardware end-point (the normal case) can potentially output more than 2 channels of audio if the audio hardware is multi-channel. maxNumberOfChannels is the maximum number of channels that this hardware is capable of supporting. If this value is 0, then this indicates that maxNumberOfChannels may not be changed. This will be the case for an AudioDestinationNode in an OfflineAudioContext.</span></div><div class='line' id='LC293'><span class="cm">     * @readonly</span></div><div class='line' id='LC294'><span class="cm">     */</span></div><div class='line' id='LC295'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">maxNumberOfChannels</span>: <span class="kt">number</span><span class="p">;</span></div><div class='line' id='LC296'><br/></div><div class='line' id='LC297'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC298'><span class="cm">     * The number of channels of the destination&#39;s input. This value will default to 2, and may be set to any non-zero value less than or equal to maxNumberOfChannels. An exception will be thrown if this value is not within the valid range. Giving a concrete example, if the audio hardware supports 8-channel output, then we may set numberOfChannels to 8, and render 8-channels of output.</span></div><div class='line' id='LC299'><span class="cm">     */</span></div><div class='line' id='LC300'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">numberOfChannels</span>: <span class="kt">number</span><span class="p">;</span></div><div class='line' id='LC301'><span class="p">}</span></div><div class='line' id='LC302'><br/></div><div class='line' id='LC303'><span class="cm">/**</span></div><div class='line' id='LC304'><span class="cm"> * AudioParam controls an individual aspect of an AudioNode&#39;s functioning, such as volume. The parameter can be set immediately to a particular value using the &quot;value&quot; attribute. Or, value changes can be scheduled to happen at very precise times (in the coordinate system of AudioContext.currentTime), for envelopes, volume fades, LFOs, filter sweeps, grain windows, etc. In this way, arbitrary timeline-based automation curves can be set on any AudioParam. Additionally, audio signals from the outputs of AudioNodes can be connected to an AudioParam, summing with the intrinsic parameter value.</span></div><div class='line' id='LC305'><span class="cm"> *</span></div><div class='line' id='LC306'><span class="cm"> * Some synthesis and processing AudioNodes have AudioParams as attributes whose values must be taken into account on a per-audio-sample basis. For other AudioParams, sample-accuracy is not important and the value changes can be sampled more coarsely. Each individual AudioParam will specify that it is either an a-rate parameter which means that its values must be taken into account on a per-audio-sample basis, or it is a k-rate parameter.</span></div><div class='line' id='LC307'><span class="cm"> * </span></div><div class='line' id='LC308'><span class="cm"> * Implementations must use block processing, with each AudioNode processing 128 sample-frames in each block.</span></div><div class='line' id='LC309'><span class="cm"> * </span></div><div class='line' id='LC310'><span class="cm"> * For each 128 sample-frame block, the value of a k-rate parameter must be sampled at the time of the very first sample-frame, and that value must be used for the entire block. a-rate parameters must be sampled for each sample-frame of the block.</span></div><div class='line' id='LC311'><span class="cm"> */</span></div><div class='line' id='LC312'><span class="kr">interface</span> <span class="nx">AudioParam</span> <span class="p">{</span> </div><div class='line' id='LC313'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC314'><span class="cm">     *  The parameter&#39;s floating-point value. This attribute is initialized to the defaultValue. If a value is set outside the allowable range described by minValue and maxValue no exception is thrown, because these limits are just nominal and may be exceeded. If a value is set during a time when there are any automation events scheduled then it will be ignored and no exception will be thrown.</span></div><div class='line' id='LC315'><span class="cm">     */</span></div><div class='line' id='LC316'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span>: <span class="kt">number</span><span class="p">;</span></div><div class='line' id='LC317'><br/></div><div class='line' id='LC318'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC319'><span class="cm">     * Nominal minimum value. This attribute is informational and value may be set lower than this value.</span></div><div class='line' id='LC320'><span class="cm">     */</span></div><div class='line' id='LC321'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">minValue</span>: <span class="kt">number</span><span class="p">;</span></div><div class='line' id='LC322'><br/></div><div class='line' id='LC323'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC324'><span class="cm">     * Nominal maximum value. This attribute is informational and value may be set higher than this value.</span></div><div class='line' id='LC325'><span class="cm">     */</span></div><div class='line' id='LC326'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">maxValue</span>: <span class="kt">number</span><span class="p">;</span></div><div class='line' id='LC327'><br/></div><div class='line' id='LC328'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC329'><span class="cm">     * Initial value for the value attribute</span></div><div class='line' id='LC330'><span class="cm">     */</span></div><div class='line' id='LC331'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">defaultValue</span>: <span class="kt">number</span><span class="p">;</span></div><div class='line' id='LC332'><br/></div><div class='line' id='LC333'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC334'><span class="cm">     * Schedules a parameter value change at the given time. </span></div><div class='line' id='LC335'><span class="cm">     *</span></div><div class='line' id='LC336'><span class="cm">     * If there are no more events after this SetValue event, then for t &gt;= startTime, v(t) = value. In other words, the value will remain constant.</span></div><div class='line' id='LC337'><span class="cm">     *</span></div><div class='line' id='LC338'><span class="cm">     * If the next event (having time T1) after this SetValue event is not of type LinearRampToValue or ExponentialRampToValue, then, for t: startTime &lt;= t &lt; T1, v(t) = value. In other words, the value will remain constant during this time interval, allowing the creation of &quot;step&quot; functions.</span></div><div class='line' id='LC339'><span class="cm">     *</span></div><div class='line' id='LC340'><span class="cm">     * If the next event after this SetValue event is of type LinearRampToValue or ExponentialRampToValue then please see details below.</span></div><div class='line' id='LC341'><span class="cm">     * </span></div><div class='line' id='LC342'><span class="cm">     * @param value the value the parameter will change to at the given time</span></div><div class='line' id='LC343'><span class="cm">     * @param startTime parameter is the time in the same time coordinate system as AudioContext.currentTime.</span></div><div class='line' id='LC344'><span class="cm">     */</span></div><div class='line' id='LC345'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setValueAtTime</span><span class="p">(</span><span class="nx">value</span>: <span class="kt">number</span><span class="p">,</span> <span class="nx">startTime</span>: <span class="kt">number</span><span class="p">)</span><span class="o">:</span> <span class="k">void</span><span class="p">;</span></div><div class='line' id='LC346'><br/></div><div class='line' id='LC347'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC348'><span class="cm">     * Schedules a linear continuous change in parameter value from the previous scheduled parameter value to the given value.</span></div><div class='line' id='LC349'><span class="cm">     *</span></div><div class='line' id='LC350'><span class="cm">     * The value during the time interval T0 &lt;= t &lt; T1 (where T0 is the time of the previous event and T1 is the endTime parameter passed into this method) will be calculated as:</span></div><div class='line' id='LC351'><span class="cm">     *</span></div><div class='line' id='LC352'><span class="cm">     *      v(t) = V0 + (V1 - V0) * ((t - T0) / (T1 - T0))</span></div><div class='line' id='LC353'><span class="cm">     * </span></div><div class='line' id='LC354'><span class="cm">     * Where V0 is the value at the time T0 and V1 is the value parameter passed into this method.</span></div><div class='line' id='LC355'><span class="cm">     *</span></div><div class='line' id='LC356'><span class="cm">     * If there are no more events after this LinearRampToValue event then for t &gt;= T1, v(t) = V1</span></div><div class='line' id='LC357'><span class="cm">     *</span></div><div class='line' id='LC358'><span class="cm">     * @param value the value the parameter will linearly ramp to at the given time.</span></div><div class='line' id='LC359'><span class="cm">     * @param endTime the time in the same time coordinate system as AudioContext.currentTime.</span></div><div class='line' id='LC360'><span class="cm">     */</span></div><div class='line' id='LC361'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">linearRampToValueAtTime</span><span class="p">(</span><span class="nx">value</span>: <span class="kt">number</span><span class="p">,</span> <span class="nx">time</span>: <span class="kt">number</span><span class="p">)</span><span class="o">:</span> <span class="k">void</span><span class="p">;</span></div><div class='line' id='LC362'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC363'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC364'><span class="cm">     * Schedules an exponential continuous change in parameter value from the previous scheduled parameter value to the given value. Parameters representing filter frequencies and playback rate are best changed exponentially because of the way humans perceive sound.</span></div><div class='line' id='LC365'><span class="cm">     *</span></div><div class='line' id='LC366'><span class="cm">     * The value during the time interval T0 &lt;= t &lt; T1 (where T0 is the time of the previous event and T1 is the endTime parameter passed into this method) will be calculated as:</span></div><div class='line' id='LC367'><span class="cm">     *</span></div><div class='line' id='LC368'><span class="cm">     *     v(t) = V0 * (V1 / V0) ^ ((t - T0) / (T1 - T0))</span></div><div class='line' id='LC369'><span class="cm">     *</span></div><div class='line' id='LC370'><span class="cm">     * Where V0 is the value at the time T0 and V1 is the value parameter passed into this method.</span></div><div class='line' id='LC371'><span class="cm">     *</span></div><div class='line' id='LC372'><span class="cm">     * If there are no more events after this ExponentialRampToValue event then for t &gt;= T1, v(t) = V1</span></div><div class='line' id='LC373'><span class="cm">     *</span></div><div class='line' id='LC374'><span class="cm">     * @param value the value the parameter will exponentially ramp to at the given time. An exception will be thrown if this value is less than or equal to 0, or if the value at the time of the previous event is less than or equal to 0.</span></div><div class='line' id='LC375'><span class="cm">     * @param endTime the time in the same time coordinate system as AudioContext.currentTime.</span></div><div class='line' id='LC376'><span class="cm">     */</span></div><div class='line' id='LC377'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">exponentialRampToValueAtTime</span><span class="p">(</span><span class="nx">value</span>: <span class="kt">number</span><span class="p">,</span> <span class="nx">endTime</span>: <span class="kt">number</span><span class="p">)</span><span class="o">:</span> <span class="k">void</span><span class="p">;</span></div><div class='line' id='LC378'><br/></div><div class='line' id='LC379'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC380'><span class="cm">     * Start exponentially approaching the target value at the given time with a rate having the given time constant. Among other uses, this is useful for implementing the &quot;decay&quot; and &quot;release&quot; portions of an ADSR envelope. Please note that the parameter value does not immediately change to the target value at the given time, but instead gradually changes to the target value.</span></div><div class='line' id='LC381'><span class="cm">     *</span></div><div class='line' id='LC382'><span class="cm">     * More precisely, timeConstant is the time it takes a first-order linear continuous time-invariant system to reach the value 1 - 1/e (around 63.2%) given a step input response (transition from 0 to 1 value).</span></div><div class='line' id='LC383'><span class="cm">     *</span></div><div class='line' id='LC384'><span class="cm">     * During the time interval: T0 &lt;= t &lt; T1, where T0 is the startTime parameter and T1 represents the time of the event following this event (or infinity if there are no following events):</span></div><div class='line' id='LC385'><span class="cm">     *</span></div><div class='line' id='LC386'><span class="cm">     *      v(t) = V1 + (V0 - V1) * exp(-(t - T0) / timeConstant)</span></div><div class='line' id='LC387'><span class="cm">     *</span></div><div class='line' id='LC388'><span class="cm">     * Where V0 is the initial value (the .value attribute) at T0 (the startTime parameter) and V1 is equal to the target parameter.</span></div><div class='line' id='LC389'><span class="cm">     *</span></div><div class='line' id='LC390'><span class="cm">     * @param target the value the parameter will start changing to at the given time.</span></div><div class='line' id='LC391'><span class="cm">     * @param startTime the time in the same time coordinate system as AudioContext.currentTime.</span></div><div class='line' id='LC392'><span class="cm">     * @param timeConstant the time-constant value of first-order filter (exponential) approach to the target value. The larger this value is, the slower the transition will be.</span></div><div class='line' id='LC393'><span class="cm">     */</span></div><div class='line' id='LC394'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setTargetValueAtTime</span><span class="p">(</span><span class="nx">target</span>: <span class="kt">number</span><span class="p">,</span> <span class="nx">startTime</span>: <span class="kt">number</span><span class="p">,</span> <span class="nx">timeConstant</span>: <span class="kt">number</span><span class="p">)</span><span class="o">:</span> <span class="k">void</span><span class="p">;</span></div><div class='line' id='LC395'><br/></div><div class='line' id='LC396'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC397'><span class="cm">     * Sets an array of arbitrary parameter values starting at the given time for the given duration. The number of values will be scaled to fit into the desired duration.</span></div><div class='line' id='LC398'><span class="cm">     *</span></div><div class='line' id='LC399'><span class="cm">     * During the time interval: startTime &lt;= t &lt; startTime + duration, values will be calculated:</span></div><div class='line' id='LC400'><span class="cm">     *</span></div><div class='line' id='LC401'><span class="cm">     *     v(t) = values[N * (t - startTime) / duration], where N is the length of the values array.</span></div><div class='line' id='LC402'><span class="cm">     *</span></div><div class='line' id='LC403'><span class="cm">     * After the end of the curve time interval (t &gt;= startTime + duration), the value will remain constant at the final curve value, until there is another automation event (if any).</span></div><div class='line' id='LC404'><span class="cm">     *</span></div><div class='line' id='LC405'><span class="cm">     * @param values a Float32Array representing a parameter value curve. These values will apply starting at the given time and lasting for the given duration.</span></div><div class='line' id='LC406'><span class="cm">     * @param startTime the time in the same time coordinate system as AudioContext.currentTime.</span></div><div class='line' id='LC407'><span class="cm">     * @param duration the amount of time in seconds (after the time parameter) where values will be calculated according to the values parameter..</span></div><div class='line' id='LC408'><span class="cm">     * </span></div><div class='line' id='LC409'><span class="cm">     */</span></div><div class='line' id='LC410'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setValueCurveAtTime</span><span class="p">(</span><span class="nx">values</span>: <span class="kt">Float32Array</span><span class="p">,</span> <span class="nx">time</span>: <span class="kt">number</span><span class="p">,</span> <span class="nx">duration</span>: <span class="kt">number</span><span class="p">)</span><span class="o">:</span> <span class="k">void</span><span class="p">;</span></div><div class='line' id='LC411'><br/></div><div class='line' id='LC412'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC413'><span class="cm">     * Cancels all scheduled parameter changes with times greater than or equal to startTime.</span></div><div class='line' id='LC414'><span class="cm">     * </span></div><div class='line' id='LC415'><span class="cm">     * @param startTime the starting time at and after which any previously scheduled parameter changes will be cancelled. It is a time in the same time coordinate system as AudioContext.currentTime.</span></div><div class='line' id='LC416'><span class="cm">     */</span></div><div class='line' id='LC417'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cancelScheduledValues</span><span class="p">(</span><span class="nx">startTime</span>: <span class="kt">number</span><span class="p">)</span><span class="o">:</span> <span class="k">void</span><span class="p">;</span></div><div class='line' id='LC418'><span class="p">}</span></div><div class='line' id='LC419'><br/></div><div class='line' id='LC420'><span class="cm">/**</span></div><div class='line' id='LC421'><span class="cm"> * Changing the gain of an audio signal is a fundamental operation in audio applications. The GainNode is one of the building blocks for creating mixers. This interface is an AudioNode with a single input and single output:</span></div><div class='line' id='LC422'><span class="cm"> *</span></div><div class='line' id='LC423'><span class="cm"> *     numberOfInputs  : 1</span></div><div class='line' id='LC424'><span class="cm"> *     numberOfOutputs : 1</span></div><div class='line' id='LC425'><span class="cm"> *</span></div><div class='line' id='LC426'><span class="cm"> * which multiplies the input audio signal by the (possibly time-varying) gain attribute, copying the result to the output. By default, it will take the input and pass it through to the output unchanged, which represents a constant gain change of 1.</span></div><div class='line' id='LC427'><span class="cm"> *</span></div><div class='line' id='LC428'><span class="cm"> * As with other AudioParams, the gain parameter represents a mapping from time (in the coordinate system of AudioContext.currentTime) to floating-point value. Every PCM audio sample in the input is multiplied by the gain parameter&#39;s value for the specific time corresponding to that audio sample. This multiplied value represents the PCM audio sample for the output.</span></div><div class='line' id='LC429'><span class="cm"> * </span></div><div class='line' id='LC430'><span class="cm"> * The number of channels of the output will always equal the number of channels of the input, with each channel of the input being multiplied by the gain values and being copied into the corresponding channel of the output.</span></div><div class='line' id='LC431'><span class="cm"> *</span></div><div class='line' id='LC432'><span class="cm"> * The implementation must make gain changes to the audio stream smoothly, without introducing noticeable clicks or glitches. This process is called &quot;de-zippering&quot;.</span></div><div class='line' id='LC433'><span class="cm"> */</span></div><div class='line' id='LC434'><span class="kr">interface</span> <span class="nx">GainNode</span> <span class="kr">extends</span> <span class="nx">AudioNode</span> <span class="p">{</span></div><div class='line' id='LC435'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC436'><span class="cm">     * Represents the amount of gain to apply. Its default value is 1 (no gain change). The nominal minValue is 0, but may be set negative for phase inversion. The nominal maxValue is 1, but higher values are allowed (no exception thrown).This parameter is a-rate</span></div><div class='line' id='LC437'><span class="cm">     */</span></div><div class='line' id='LC438'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">gain</span>: <span class="kt">AudioParam</span><span class="p">;</span></div><div class='line' id='LC439'><span class="p">}</span></div><div class='line' id='LC440'><br/></div><div class='line' id='LC441'><span class="cm">/**</span></div><div class='line' id='LC442'><span class="cm"> * A delay-line is a fundamental building block in audio applications. This interface is an AudioNode with a single input and single output:</span></div><div class='line' id='LC443'><span class="cm"> *</span></div><div class='line' id='LC444'><span class="cm"> *     numberOfInputs  : 1</span></div><div class='line' id='LC445'><span class="cm"> *     numberOfOutputs : 1</span></div><div class='line' id='LC446'><span class="cm"> *</span></div><div class='line' id='LC447'><span class="cm"> * which delays the incoming audio signal by a certain amount. The default amount is 0 seconds (no delay). When the delay time is changed, the implementation must make the transition smoothly, without introducing noticeable clicks or glitches to the audio stream.</span></div><div class='line' id='LC448'><span class="cm"> */</span></div><div class='line' id='LC449'><span class="kr">interface</span> <span class="nx">DelayNode</span> <span class="kr">extends</span> <span class="nx">AudioNode</span> <span class="p">{</span></div><div class='line' id='LC450'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC451'><span class="cm">     * An AudioParam object representing the amount of delay (in seconds) to apply. The default value (delayTime.value) is 0 (no delay). The minimum value is 0 and the maximum value is determined by the maxDelayTime argument to the AudioContext method createDelay. This parameter is k-rate</span></div><div class='line' id='LC452'><span class="cm">     */</span></div><div class='line' id='LC453'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">delayTime</span>: <span class="kt">AudioParam</span><span class="p">;</span></div><div class='line' id='LC454'><span class="p">}</span></div><div class='line' id='LC455'><br/></div><div class='line' id='LC456'><span class="cm">/**</span></div><div class='line' id='LC457'><span class="cm"> * This interface represents a memory-resident audio asset (for one-shot sounds and other short audio clips). Its format is non-interleaved IEEE 32-bit linear PCM with a nominal range of -1 -&gt; +1. It can contain one or more channels. It is analogous to a WebGL texture. Typically, it would be expected that the length of the PCM data would be fairly short (usually somewhat less than a minute). For longer sounds, such as music soundtracks, streaming should be used with the audio element and MediaElementAudioSourceNode.</span></div><div class='line' id='LC458'><span class="cm"> *</span></div><div class='line' id='LC459'><span class="cm"> * An AudioBuffer may be used by one or more AudioContexts.</span></div><div class='line' id='LC460'><span class="cm"> */</span></div><div class='line' id='LC461'><span class="kr">interface</span> <span class="nx">AudioBuffer</span> <span class="p">{</span></div><div class='line' id='LC462'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC463'><span class="cm">     * The sample-rate for the PCM audio data in samples per second.</span></div><div class='line' id='LC464'><span class="cm">     * @readonly</span></div><div class='line' id='LC465'><span class="cm">     */</span></div><div class='line' id='LC466'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">sampleRate</span>: <span class="kt">number</span><span class="p">;</span></div><div class='line' id='LC467'><br/></div><div class='line' id='LC468'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC469'><span class="cm">     * Length of the PCM audio data in sample-frames.</span></div><div class='line' id='LC470'><span class="cm">     * @readonly</span></div><div class='line' id='LC471'><span class="cm">     */</span></div><div class='line' id='LC472'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">length</span>: <span class="kt">number</span><span class="p">;</span></div><div class='line' id='LC473'><br/></div><div class='line' id='LC474'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC475'><span class="cm">     * Duration of the PCM audio data in seconds.</span></div><div class='line' id='LC476'><span class="cm">     * @readonly</span></div><div class='line' id='LC477'><span class="cm">     */</span></div><div class='line' id='LC478'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">duration</span>: <span class="kt">number</span><span class="p">;</span></div><div class='line' id='LC479'><br/></div><div class='line' id='LC480'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC481'><span class="cm">     * The number of discrete audio channels.</span></div><div class='line' id='LC482'><span class="cm">     * @readonly</span></div><div class='line' id='LC483'><span class="cm">     */</span></div><div class='line' id='LC484'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">numberOfChannels</span>: <span class="kt">number</span><span class="p">;</span></div><div class='line' id='LC485'><br/></div><div class='line' id='LC486'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC487'><span class="cm">     * Returns the Float32Array representing the PCM audio data for the specific channel.</span></div><div class='line' id='LC488'><span class="cm">     *</span></div><div class='line' id='LC489'><span class="cm">     * The channel parameter is an index representing the particular channel to get data for. An index value of 0 represents the first channel. This index value MUST be less than numberOfChannels or an exception will be thrown.</span></div><div class='line' id='LC490'><span class="cm">     */</span></div><div class='line' id='LC491'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">getChannelData</span><span class="p">(</span><span class="nx">channel</span>: <span class="kt">number</span><span class="p">)</span><span class="o">:</span> <span class="nx">Float32Array</span><span class="p">;</span></div><div class='line' id='LC492'><br/></div><div class='line' id='LC493'><span class="p">}</span></div><div class='line' id='LC494'><br/></div><div class='line' id='LC495'><span class="cm">/**</span></div><div class='line' id='LC496'><span class="cm"> * This interface represents an audio source from an in-memory audio asset in an AudioBuffer. It generally will be used for short audio assets which require a high degree of scheduling flexibility (can playback in rhythmically perfect ways). The playback state of an AudioBufferSourceNode goes through distinct stages during its lifetime in this order: UNSCHEDULED_STATE, SCHEDULED_STATE, PLAYING_STATE, FINISHED_STATE. The start() method causes a transition from the UNSCHEDULED_STATE to SCHEDULED_STATE. Depending on the time argument passed to start(), a transition is made from the SCHEDULED_STATE to PLAYING_STATE, at which time sound is first generated. Following this, a transition from the PLAYING_STATE to FINISHED_STATE happens when either the buffer&#39;s audio data has been completely played (if the loop attribute is false), or when the stop() method has been called and the specified time has been reached. Please see more details in the start() and stop() description. Once an AudioBufferSourceNode has reached the FINISHED state it will no longer emit any sound. Thus start() and stop() may not be issued multiple times for a given AudioBufferSourceNode.</span></div><div class='line' id='LC497'><span class="cm"> *</span></div><div class='line' id='LC498'><span class="cm"> *     numberOfInputs  : 0</span></div><div class='line' id='LC499'><span class="cm"> *     numberOfOutputs : 1</span></div><div class='line' id='LC500'><span class="cm"> */</span></div><div class='line' id='LC501'><span class="kr">interface</span> <span class="nx">AudioBufferSourceNode</span> <span class="kr">extends</span> <span class="nx">AudioSourceNode</span> <span class="p">{</span></div><div class='line' id='LC502'><br/></div><div class='line' id='LC503'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC504'><span class="cm">     * The playback state, initialized to UNSCHEDULED_STATE.</span></div><div class='line' id='LC505'><span class="cm">     */</span></div><div class='line' id='LC506'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">playbackState</span>: <span class="kt">number</span><span class="p">;</span> </div><div class='line' id='LC507'><br/></div><div class='line' id='LC508'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC509'><span class="cm">     * Represents the audio asset to be played.</span></div><div class='line' id='LC510'><span class="cm">     */</span></div><div class='line' id='LC511'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">buffer</span>: <span class="kt">AudioBuffer</span><span class="p">;</span></div><div class='line' id='LC512'><br/></div><div class='line' id='LC513'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC514'><span class="cm">     * The speed at which to render the audio stream. The default playbackRate.value is 1. This parameter is a-rate</span></div><div class='line' id='LC515'><span class="cm">     */</span></div><div class='line' id='LC516'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">playbackRate</span>: <span class="kt">AudioParam</span><span class="p">;</span> </div><div class='line' id='LC517'><br/></div><div class='line' id='LC518'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC519'><span class="cm">     * Indicates if the audio data should play in a loop. The default value is false.</span></div><div class='line' id='LC520'><span class="cm">     */</span></div><div class='line' id='LC521'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">loop</span>: <span class="kt">boolean</span><span class="p">;</span></div><div class='line' id='LC522'><br/></div><div class='line' id='LC523'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC524'><span class="cm">     * Schedules a sound to playback at an exact time.</span></div><div class='line' id='LC525'><span class="cm">     *  </span></div><div class='line' id='LC526'><span class="cm">     * @param when time (in seconds) the sound should start playing. It is in the same time coordinate system as AudioContext.currentTime. If 0 is passed in for this value or if the value is less than currentTime, then the sound will start playing immediately. start may only be called one time and must be called before stop is called or an exception will be thrown.</span></div><div class='line' id='LC527'><span class="cm">     * @param offset the offset time in the buffer (in seconds) where playback will begin. This parameter is optional with a default value of 0 (playing back from the beginning of the buffer).</span></div><div class='line' id='LC528'><span class="cm">     * @param duration the duration of the portion (in seconds) to be played. This parameter is optional, with the default value equal to the total duration of the AudioBuffer minus the offset parameter. Thus if neither offset nor duration are specified then the implied duration is the total duration of the AudioBuffer.</span></div><div class='line' id='LC529'><span class="cm">     */</span></div><div class='line' id='LC530'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">start</span><span class="p">(</span><span class="nx">when</span>: <span class="kt">number</span><span class="p">,</span> <span class="nx">offset?</span>: <span class="kt">number</span><span class="p">,</span> <span class="nx">duration?</span>: <span class="kt">number</span><span class="p">)</span><span class="o">:</span> <span class="k">void</span><span class="p">;</span></div><div class='line' id='LC531'><br/></div><div class='line' id='LC532'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC533'><span class="cm">     * Schedules a sound to stop playback at an exact time. Please see deprecation section for the old method name.</span></div><div class='line' id='LC534'><span class="cm">     *</span></div><div class='line' id='LC535'><span class="cm">     * The when parameter describes at what time (in seconds) the sound should stop playing. It is in the same time coordinate system as AudioContext.currentTime. If 0 is passed in for this value or if the value is less than currentTime, then the sound will stop playing immediately. stop must only be called one time and only after a call to start or stop, or an exception will be thrown.</span></div><div class='line' id='LC536'><span class="cm">     */</span></div><div class='line' id='LC537'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">stop</span><span class="p">(</span><span class="nx">when</span>: <span class="kt">number</span><span class="p">)</span><span class="o">:</span> <span class="k">void</span><span class="p">;</span></div><div class='line' id='LC538'><span class="p">}</span></div><div class='line' id='LC539'><br/></div><div class='line' id='LC540'><span class="cm">/*</span></div><div class='line' id='LC541'><span class="cm"> * This interface represents an audio source from an audio or video element.</span></div><div class='line' id='LC542'><span class="cm"> *</span></div><div class='line' id='LC543'><span class="cm"> *    numberOfInputs  : 0</span></div><div class='line' id='LC544'><span class="cm"> *    numberOfOutputs : 1</span></div><div class='line' id='LC545'><span class="cm"> */</span></div><div class='line' id='LC546'><span class="kr">interface</span> <span class="nx">MediaElementAudioSourceNode</span> <span class="kr">extends</span> <span class="nx">AudioSourceNode</span> <span class="p">{</span></div><div class='line' id='LC547'><span class="p">}</span></div><div class='line' id='LC548'><br/></div><div class='line' id='LC549'><span class="cm">/**</span></div><div class='line' id='LC550'><span class="cm"> * This interface is an AudioNode which can generate, process, or analyse audio directly using JavaScript.</span></div><div class='line' id='LC551'><span class="cm"> *</span></div><div class='line' id='LC552'><span class="cm"> *     numberOfInputs  : 1</span></div><div class='line' id='LC553'><span class="cm"> *     numberOfOutputs : 1</span></div><div class='line' id='LC554'><span class="cm"> *</span></div><div class='line' id='LC555'><span class="cm"> * The ScriptProcessorNode is constructed with a bufferSize which must be one of the following values: 256, 512, 1024, 2048, 4096, 8192, 16384. This value controls how frequently the onaudioprocess event handler is called and how many sample-frames need to be processed each call. Lower numbers for bufferSize will result in a lower (better) latency. Higher numbers will be necessary to avoid audio breakup and glitches. The value chosen must carefully balance between latency and audio quality.</span></div><div class='line' id='LC556'><span class="cm"> *</span></div><div class='line' id='LC557'><span class="cm"> * numberOfInputChannels and numberOfOutputChannels determine the number of input and output channels. It is invalid for both numberOfInputChannels and numberOfOutputChannels to be zero.</span></div><div class='line' id='LC558'><span class="cm"> *</span></div><div class='line' id='LC559'><span class="cm"> *     var node = context.createScriptProcessor(bufferSize, numberOfInputChannels, numberOfOutputChannels);</span></div><div class='line' id='LC560'><span class="cm"> */</span></div><div class='line' id='LC561'><span class="kr">interface</span> <span class="nx">ScriptProcessorNode</span>  <span class="kr">extends</span> <span class="nx">AudioNode</span> <span class="p">{</span></div><div class='line' id='LC562'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC563'><span class="cm">     * An event listener which is called periodically for audio processing. An event of type AudioProcessingEvent will be passed to the event handler.</span></div><div class='line' id='LC564'><span class="cm">     */</span></div><div class='line' id='LC565'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">onaudioprocess</span>: <span class="kt">EventListener</span><span class="p">;</span>        </div><div class='line' id='LC566'><br/></div><div class='line' id='LC567'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC568'><span class="cm">     * The size of the buffer (in sample-frames) which needs to be processed each time onprocessaudio is called. Legal values are (256, 512, 1024, 2048, 4096, 8192, 16384).</span></div><div class='line' id='LC569'><span class="cm">     */</span></div><div class='line' id='LC570'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">bufferSize</span>: <span class="kt">number</span><span class="p">;</span></div><div class='line' id='LC571'><span class="p">}</span></div><div class='line' id='LC572'><br/></div><div class='line' id='LC573'><span class="cm">/**</span></div><div class='line' id='LC574'><span class="cm"> * This interface is a type of Event which is passed to the onaudioprocess event handler used by ScriptProcessorNode.</span></div><div class='line' id='LC575'><span class="cm"> *</span></div><div class='line' id='LC576'><span class="cm"> * The event handler processes audio from the input (if any) by accessing the audio data from the inputBuffer attribute. The audio data which is the result of the processing (or the synthesized data if there are no inputs) is then placed into the outputBuffer.</span></div><div class='line' id='LC577'><span class="cm"> */</span></div><div class='line' id='LC578'><span class="kr">interface</span> <span class="nx">AudioProcessingEvent</span> <span class="kr">extends</span> <span class="nx">Event</span> <span class="p">{</span></div><div class='line' id='LC579'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC580'><span class="cm">     * The ScriptProcessorNode associated with this processing event.</span></div><div class='line' id='LC581'><span class="cm">     */</span></div><div class='line' id='LC582'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">node</span>: <span class="kt">ScriptProcessorNode</span><span class="p">;</span></div><div class='line' id='LC583'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC584'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC585'><span class="cm">     * The time when the audio will be played in the same time coordinate system as AudioContext.currentTime. playbackTime allows for very tight synchronization between processing directly in JavaScript with the other events in the context&#39;s rendering graph.</span></div><div class='line' id='LC586'><span class="cm">     */</span></div><div class='line' id='LC587'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">playbackTime</span>: <span class="kt">number</span><span class="p">;</span></div><div class='line' id='LC588'><br/></div><div class='line' id='LC589'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC590'><span class="cm">     * An AudioBuffer containing the input audio data. It will have a number of channels equal to the numberOfInputChannels parameter of the createScriptProcessor() method. This AudioBuffer is only valid while in the scope of the onaudioprocess function. Its values will be meaningless outside of this scope.</span></div><div class='line' id='LC591'><span class="cm">     */</span></div><div class='line' id='LC592'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">inputBuffer</span>: <span class="kt">AudioBuffer</span><span class="p">;</span></div><div class='line' id='LC593'><br/></div><div class='line' id='LC594'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC595'><span class="cm">     * An AudioBuffer where the output audio data should be written. It will have a number of channels equal to the numberOfOutputChannels parameter of the createScriptProcessor() method. Script code within the scope of the onaudioprocess function is expected to modify the Float32Array arrays representing channel data in this AudioBuffer. Any script modifications to this AudioBuffer outside of this scope will not produce any audible effects.</span></div><div class='line' id='LC596'><span class="cm">     */</span></div><div class='line' id='LC597'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">outputBuffer</span>: <span class="kt">AudioBuffer</span><span class="p">;</span> </div><div class='line' id='LC598'><span class="p">}</span></div><div class='line' id='LC599'><br/></div><div class='line' id='LC600'><span class="kr">declare</span> <span class="kr">enum</span> <span class="nx">PanningModelType</span> <span class="p">{</span></div><div class='line' id='LC601'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC602'><span class="cm">     * A simple and efficient spatialization algorithm using equal-power panning.</span></div><div class='line' id='LC603'><span class="cm">     */</span></div><div class='line' id='LC604'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">equalpower</span><span class="p">,</span></div><div class='line' id='LC605'><br/></div><div class='line' id='LC606'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC607'><span class="cm">     * A higher quality spatialization algorithm using a convolution with measured impulse responses from human subjects. This panning method renders stereo output.</span></div><div class='line' id='LC608'><span class="cm">     */</span></div><div class='line' id='LC609'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">HRTF</span><span class="p">,</span></div><div class='line' id='LC610'><br/></div><div class='line' id='LC611'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC612'><span class="cm">     * An algorithm which spatializes multi-channel audio using sound field algorithms.</span></div><div class='line' id='LC613'><span class="cm">     */</span></div><div class='line' id='LC614'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">soundfield</span></div><div class='line' id='LC615'><span class="p">}</span></div><div class='line' id='LC616'><br/></div><div class='line' id='LC617'><span class="kr">declare</span> <span class="kr">enum</span> <span class="nx">DistanceModelType</span> <span class="p">{</span></div><div class='line' id='LC618'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC619'><span class="cm">     * A linear distance model which calculates distanceGain according to:</span></div><div class='line' id='LC620'><span class="cm">     *     1 - rolloffFactor * (distance - refDistance) / (maxDistance - refDistance)</span></div><div class='line' id='LC621'><span class="cm">     */</span></div><div class='line' id='LC622'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">linear</span><span class="p">,</span></div><div class='line' id='LC623'><br/></div><div class='line' id='LC624'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC625'><span class="cm">     * An inverse distance model which calculates distanceGain according to:</span></div><div class='line' id='LC626'><span class="cm">     *     refDistance / (refDistance + rolloffFactor * (distance - refDistance))</span></div><div class='line' id='LC627'><span class="cm">     */</span></div><div class='line' id='LC628'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">inverse</span><span class="p">,</span></div><div class='line' id='LC629'><br/></div><div class='line' id='LC630'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC631'><span class="cm">     * An exponential distance model which calculates distanceGain according to:</span></div><div class='line' id='LC632'><span class="cm">     *     pow(distance / refDistance, -rolloffFactor)</span></div><div class='line' id='LC633'><span class="cm">     */</span></div><div class='line' id='LC634'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">exponential</span></div><div class='line' id='LC635'><span class="p">}</span></div><div class='line' id='LC636'><br/></div><div class='line' id='LC637'><span class="cm">/**</span></div><div class='line' id='LC638'><span class="cm"> * This interface represents a processing node which positions / spatializes an incoming audio stream in three-dimensional space. The spatialization is in relation to the AudioContext&#39;s AudioListener (listener attribute).</span></div><div class='line' id='LC639'><span class="cm"> *</span></div><div class='line' id='LC640'><span class="cm"> *     numberOfInputs  : 1</span></div><div class='line' id='LC641'><span class="cm"> *     numberOfOutputs : 1</span></div><div class='line' id='LC642'><span class="cm"> *</span></div><div class='line' id='LC643'><span class="cm"> * The audio stream from the input will be either mono or stereo, depending on the connection(s) to the input.</span></div><div class='line' id='LC644'><span class="cm"> *</span></div><div class='line' id='LC645'><span class="cm"> * The output of this node is hard-coded to stereo (2 channels) and currently cannot be configured.</span></div><div class='line' id='LC646'><span class="cm"> */</span></div><div class='line' id='LC647'><span class="kr">interface</span> <span class="nx">PannerNode</span> <span class="kr">extends</span> <span class="nx">AudioNode</span> <span class="p">{</span></div><div class='line' id='LC648'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC649'><span class="cm">     * Determines which spatialization algorithm will be used to position the audio in 3D space. The default is &quot;HRTF&quot;.</span></div><div class='line' id='LC650'><span class="cm">     */</span></div><div class='line' id='LC651'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">panningModel</span>: <span class="kt">PanningModelType</span><span class="p">;</span></div><div class='line' id='LC652'><br/></div><div class='line' id='LC653'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC654'><span class="cm">     * Sets the position of the audio source relative to the listener attribute. A 3D cartesian coordinate system is used.</span></div><div class='line' id='LC655'><span class="cm">     *</span></div><div class='line' id='LC656'><span class="cm">     * The default value is (0,0,0)</span></div><div class='line' id='LC657'><span class="cm">     *</span></div><div class='line' id='LC658'><span class="cm">     * @param x the x coordinates in 3D space.</span></div><div class='line' id='LC659'><span class="cm">     * @param y the y coordinates in 3D space.</span></div><div class='line' id='LC660'><span class="cm">     * @param z the z coordinates in 3D space.</span></div><div class='line' id='LC661'><span class="cm">     */</span></div><div class='line' id='LC662'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setPosition</span><span class="p">(</span><span class="nx">x</span>: <span class="kt">number</span><span class="p">,</span> <span class="nx">y</span>: <span class="kt">number</span><span class="p">,</span> <span class="nx">z</span>: <span class="kt">number</span><span class="p">)</span><span class="o">:</span> <span class="k">void</span><span class="p">;</span></div><div class='line' id='LC663'><br/></div><div class='line' id='LC664'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC665'><span class="cm">     * Describes which direction the audio source is pointing in the 3D cartesian coordinate space. Depending on how directional the sound is (controlled by the cone attributes), a sound pointing away from the listener can be very quiet or completely silent.</span></div><div class='line' id='LC666'><span class="cm">     * </span></div><div class='line' id='LC667'><span class="cm">     * The default value is (1,0,0) </span></div><div class='line' id='LC668'><span class="cm">     *</span></div><div class='line' id='LC669'><span class="cm">     * @param x</span></div><div class='line' id='LC670'><span class="cm">     * @param y</span></div><div class='line' id='LC671'><span class="cm">     * @param z</span></div><div class='line' id='LC672'><span class="cm">     */</span></div><div class='line' id='LC673'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setOrientation</span><span class="p">(</span><span class="nx">x</span>: <span class="kt">number</span><span class="p">,</span> <span class="nx">y</span>: <span class="kt">number</span><span class="p">,</span> <span class="nx">z</span>: <span class="kt">number</span><span class="p">)</span><span class="o">:</span> <span class="k">void</span><span class="p">;</span></div><div class='line' id='LC674'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC675'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC676'><span class="cm">     * Sets the velocity vector of the audio source. This vector controls both the direction of travel and the speed in 3D space. This velocity relative to the listener&#39;s velocity is used to determine how much doppler shift (pitch change) to apply. The units used for this vector is meters / second and is independent of the units used for position and orientation vectors.</span></div><div class='line' id='LC677'><span class="cm">     *</span></div><div class='line' id='LC678'><span class="cm">     * The default value is (0,0,0)</span></div><div class='line' id='LC679'><span class="cm">     *</span></div><div class='line' id='LC680'><span class="cm">     * @param x a direction vector indicating direction of travel and intensity.</span></div><div class='line' id='LC681'><span class="cm">     * @param y</span></div><div class='line' id='LC682'><span class="cm">     * @param z</span></div><div class='line' id='LC683'><span class="cm">     */</span></div><div class='line' id='LC684'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setVelocity</span><span class="p">(</span><span class="nx">x</span>: <span class="kt">number</span><span class="p">,</span> <span class="nx">y</span>: <span class="kt">number</span><span class="p">,</span> <span class="nx">z</span>: <span class="kt">number</span><span class="p">)</span><span class="o">:</span> <span class="k">void</span><span class="p">;</span>       </div><div class='line' id='LC685'><br/></div><div class='line' id='LC686'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC687'><span class="cm">     * Determines which algorithm will be used to reduce the volume of an audio source as it moves away from the listener. The default is &quot;inverse&quot;.</span></div><div class='line' id='LC688'><span class="cm">     */</span></div><div class='line' id='LC689'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">distanceModel</span>: <span class="kt">DistanceModelType</span><span class="p">;</span></div><div class='line' id='LC690'><br/></div><div class='line' id='LC691'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC692'><span class="cm">     * A reference distance for reducing volume as source move further from the listener. The default value is 1.</span></div><div class='line' id='LC693'><span class="cm">     */</span></div><div class='line' id='LC694'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">refDistance</span>: <span class="kt">number</span><span class="p">;</span></div><div class='line' id='LC695'><br/></div><div class='line' id='LC696'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC697'><span class="cm">     * The maximum distance between source and listener, after which the volume will not be reduced any further. The default value is 10000.</span></div><div class='line' id='LC698'><span class="cm">     */</span></div><div class='line' id='LC699'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">maxDistance</span>: <span class="kt">number</span><span class="p">;</span></div><div class='line' id='LC700'><br/></div><div class='line' id='LC701'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC702'><span class="cm">     * Describes how quickly the volume is reduced as source moves away from listener. The default value is 1.</span></div><div class='line' id='LC703'><span class="cm">     */</span></div><div class='line' id='LC704'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rolloffFactor</span>: <span class="kt">number</span><span class="p">;</span></div><div class='line' id='LC705'><br/></div><div class='line' id='LC706'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC707'><span class="cm">     * A parameter for directional audio sources, this is an angle, inside of which there will be no volume reduction. The default value is 360.</span></div><div class='line' id='LC708'><span class="cm">     */</span></div><div class='line' id='LC709'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">coneInnerAngle</span>: <span class="kt">number</span><span class="p">;</span></div><div class='line' id='LC710'><br/></div><div class='line' id='LC711'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC712'><span class="cm">     * A parameter for directional audio sources, this is an angle, outside of which the volume will be reduced to a constant value of coneOuterGain. The default value is 360.</span></div><div class='line' id='LC713'><span class="cm">     */</span></div><div class='line' id='LC714'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">coneOuterAngle</span>: <span class="kt">number</span><span class="p">;</span></div><div class='line' id='LC715'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC716'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC717'><span class="cm">     * A parameter for directional audio sources, this is the amount of volume reduction outside of the coneOuterAngle. The default value is 0.</span></div><div class='line' id='LC718'><span class="cm">     */</span></div><div class='line' id='LC719'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">coneOuterGain</span>: <span class="kt">number</span><span class="p">;</span></div><div class='line' id='LC720'><span class="p">}</span></div><div class='line' id='LC721'><br/></div><div class='line' id='LC722'><span class="cm">/**</span></div><div class='line' id='LC723'><span class="cm"> * This interface represents the position and orientation of the person listening to the audio scene. All PannerNode objects spatialize in relation to the AudioContext&#39;s listener. See this section for more details about spatialization.</span></div><div class='line' id='LC724'><span class="cm"> */</span></div><div class='line' id='LC725'><span class="kr">interface</span> <span class="nx">AudioListener</span> <span class="p">{</span></div><div class='line' id='LC726'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC727'><span class="cm">     * A constant used to determine the amount of pitch shift to use when rendering a doppler effect. The default value is 1.</span></div><div class='line' id='LC728'><span class="cm">     */</span></div><div class='line' id='LC729'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">dopplerFactor</span>: <span class="kt">number</span><span class="p">;</span>     </div><div class='line' id='LC730'><br/></div><div class='line' id='LC731'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC732'><span class="cm">     * The speed of sound used for calculating doppler shift. The default value is 343.3 meters / second.</span></div><div class='line' id='LC733'><span class="cm">     */</span></div><div class='line' id='LC734'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">speedOfSound</span>: <span class="kt">number</span><span class="p">;</span></div><div class='line' id='LC735'><br/></div><div class='line' id='LC736'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC737'><span class="cm">     * Sets the position of the listener in a 3D cartesian coordinate space. PannerNode objects use this position relative to individual audio sources for spatialization.</span></div><div class='line' id='LC738'><span class="cm">     * </span></div><div class='line' id='LC739'><span class="cm">     * The default value is (0,0,0)</span></div><div class='line' id='LC740'><span class="cm">     *</span></div><div class='line' id='LC741'><span class="cm">     * @param x</span></div><div class='line' id='LC742'><span class="cm">     * @param y</span></div><div class='line' id='LC743'><span class="cm">     * @param z</span></div><div class='line' id='LC744'><span class="cm">     */</span></div><div class='line' id='LC745'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setPosition</span><span class="p">(</span><span class="nx">x</span>: <span class="kt">number</span><span class="p">,</span> <span class="nx">y</span>: <span class="kt">number</span><span class="p">,</span> <span class="nx">z</span>: <span class="kt">number</span><span class="p">)</span><span class="o">:</span> <span class="k">void</span><span class="p">;</span></div><div class='line' id='LC746'><br/></div><div class='line' id='LC747'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC748'><span class="cm">     * Describes which direction the listener is pointing in the 3D cartesian coordinate space. Both a front vector and an up vector are provided. In simple human terms, the front vector represents which direction the person&#39;s nose is pointing. The up vector represents the direction the top of a person&#39;s head is pointing. These values are expected to be linearly independent (at right angles to each other). For normative requirements of how these values are to be interpreted, see the spatialization section.</span></div><div class='line' id='LC749'><span class="cm">     * </span></div><div class='line' id='LC750'><span class="cm">     * @param x x coordinate of a front direction vector in 3D space, with the default value being 0</span></div><div class='line' id='LC751'><span class="cm">     * @param y y coordinate of a front direction vector in 3D space, with the default value being 0</span></div><div class='line' id='LC752'><span class="cm">     * @param z z coordinate of a front direction vector in 3D space, with the default value being -1</span></div><div class='line' id='LC753'><span class="cm">     * @param xUp x coodinate of an up direction vector in 3D space, with the default value being 0</span></div><div class='line' id='LC754'><span class="cm">     * @param yUp y coodinate of an up direction vector in 3D space, with the default value being 1</span></div><div class='line' id='LC755'><span class="cm">     * @param zUp z coodinate of an up direction vector in 3D space, with the default value being 0</span></div><div class='line' id='LC756'><span class="cm">     */</span></div><div class='line' id='LC757'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setOrientation</span><span class="p">(</span><span class="nx">x</span>: <span class="kt">number</span><span class="p">,</span> <span class="nx">y</span>: <span class="kt">number</span><span class="p">,</span> <span class="nx">z</span>: <span class="kt">number</span><span class="p">,</span> <span class="nx">xUp</span>: <span class="kt">number</span><span class="p">,</span> <span class="nx">yUp</span>: <span class="kt">number</span><span class="p">,</span> <span class="nx">zUp</span>: <span class="kt">number</span><span class="p">)</span><span class="o">:</span> <span class="k">void</span><span class="p">;</span></div><div class='line' id='LC758'><br/></div><div class='line' id='LC759'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC760'><span class="cm">     * Sets the velocity vector of the listener. This vector controls both the direction of travel and the speed in 3D space. This velocity relative to an audio source&#39;s velocity is used to determine how much doppler shift (pitch change) to apply. The units used for this vector is meters / second and is independent of the units used for position and orientation vectors.</span></div><div class='line' id='LC761'><span class="cm">     *</span></div><div class='line' id='LC762'><span class="cm">     * @param x x coordinate of a direction vector indicating direction of travel and intensity. The default value is 0</span></div><div class='line' id='LC763'><span class="cm">     * @param y y coordinate of a direction vector indicating direction of travel and intensity. The default value is 0</span></div><div class='line' id='LC764'><span class="cm">     * @param z z coordinate of a direction vector indicating direction of travel and intensity. The default value is 0</span></div><div class='line' id='LC765'><span class="cm">     */</span></div><div class='line' id='LC766'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setVelocity</span><span class="p">(</span><span class="nx">x</span>: <span class="kt">number</span><span class="p">,</span> <span class="nx">y</span>: <span class="kt">number</span><span class="p">,</span> <span class="nx">z</span>: <span class="kt">number</span><span class="p">)</span><span class="o">:</span> <span class="k">void</span><span class="p">;</span></div><div class='line' id='LC767'><span class="p">}</span></div><div class='line' id='LC768'><br/></div><div class='line' id='LC769'><br/></div><div class='line' id='LC770'><span class="cm">/**</span></div><div class='line' id='LC771'><span class="cm"> * This interface represents a processing node which applies a linear convolution effect given an impulse response. Normative requirements for multi-channel convolution matrixing are described [here](http://www.w3.org/TR/2012/WD-webaudio-20121213/#Convolution-reverb-effect).</span></div><div class='line' id='LC772'><span class="cm"> *</span></div><div class='line' id='LC773'><span class="cm"> *    numberOfInputs  : 1</span></div><div class='line' id='LC774'><span class="cm"> *    numberOfOutputs : 1</span></div><div class='line' id='LC775'><span class="cm"> */</span></div><div class='line' id='LC776'><span class="kr">interface</span> <span class="nx">ConvolverNode</span> <span class="kr">extends</span> <span class="nx">AudioNode</span> <span class="p">{</span></div><div class='line' id='LC777'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC778'><span class="cm">     * A mono, stereo, or 4-channel AudioBuffer containing the (possibly multi-channel) impulse response used by the ConvolverNode. At the time when this attribute is set, the buffer and the state of the normalize attribute will be used to configure the ConvolverNode with this impulse response having the given normalization.</span></div><div class='line' id='LC779'><span class="cm">     */</span></div><div class='line' id='LC780'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">buffer</span>: <span class="kt">AudioBuffer</span><span class="p">;</span></div><div class='line' id='LC781'><br/></div><div class='line' id='LC782'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC783'><span class="cm">     * Controls whether the impulse response from the buffer will be scaled by an equal-power normalization when the buffer atttribute is set. Its default value is true in order to achieve a more uniform output level from the convolver when loaded with diverse impulse responses. If normalize is set to false, then the convolution will be rendered with no pre-processing/scaling of the impulse response. Changes to this value do not take effect until the next time the buffer attribute is set.</span></div><div class='line' id='LC784'><span class="cm">     */</span></div><div class='line' id='LC785'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">normalize</span>: <span class="kt">boolean</span><span class="p">;</span></div><div class='line' id='LC786'><span class="p">}</span></div><div class='line' id='LC787'><br/></div><div class='line' id='LC788'><span class="cm">/** </span></div><div class='line' id='LC789'><span class="cm"> * This interface represents a node which is able to provide real-time frequency and time-domain analysis information. The audio stream will be passed un-processed from input to output.</span></div><div class='line' id='LC790'><span class="cm"> *</span></div><div class='line' id='LC791'><span class="cm"> *    numberOfInputs  : 1</span></div><div class='line' id='LC792'><span class="cm"> *    numberOfOutputs : 1    Note that this output may be left unconnected.</span></div><div class='line' id='LC793'><span class="cm"> */</span></div><div class='line' id='LC794'><span class="kr">interface</span> <span class="nx">AnalyserNode</span> <span class="kr">extends</span> <span class="nx">AudioNode</span> <span class="p">{</span></div><div class='line' id='LC795'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC796'><span class="cm">     * Copies the current frequency data into the passed floating-point array. If the array has fewer elements than the frequencyBinCount, the excess elements will be dropped.</span></div><div class='line' id='LC797'><span class="cm">     * @param array where frequency-domain analysis data will be copied.</span></div><div class='line' id='LC798'><span class="cm">     */</span></div><div class='line' id='LC799'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">getFloatFrequencyData</span><span class="p">(</span><span class="nx">array</span>: <span class="kt">any</span><span class="p">)</span><span class="o">:</span> <span class="k">void</span><span class="p">;</span></div><div class='line' id='LC800'><br/></div><div class='line' id='LC801'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC802'><span class="cm">     * Copies the current frequency data into the passed unsigned byte array. If the array has fewer elements than the frequencyBinCount, the excess elements will be dropped.</span></div><div class='line' id='LC803'><span class="cm">     * @param Tarray where frequency-domain analysis data will be copied.</span></div><div class='line' id='LC804'><span class="cm">     */</span></div><div class='line' id='LC805'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">getByteFrequencyData</span><span class="p">(</span><span class="nx">array</span>: <span class="kt">any</span><span class="p">)</span><span class="o">:</span> <span class="k">void</span><span class="p">;</span></div><div class='line' id='LC806'><br/></div><div class='line' id='LC807'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC808'><span class="cm">     * Copies the current time-domain (waveform) data into the passed unsigned byte array. If the array has fewer elements than the frequencyBinCount, the excess elements will be dropped.</span></div><div class='line' id='LC809'><span class="cm">     * @param array where time-domain analysis data will be copied.</span></div><div class='line' id='LC810'><span class="cm">     */</span></div><div class='line' id='LC811'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">getByteTimeDomainData</span><span class="p">(</span><span class="nx">array</span>: <span class="kt">any</span><span class="p">)</span><span class="o">:</span> <span class="k">void</span><span class="p">;</span></div><div class='line' id='LC812'><br/></div><div class='line' id='LC813'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC814'><span class="cm">     * The size of the FFT used for frequency-domain analysis. This must be a power of two.</span></div><div class='line' id='LC815'><span class="cm">     */</span> </div><div class='line' id='LC816'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fftSize</span>: <span class="kt">number</span><span class="p">;</span></div><div class='line' id='LC817'><br/></div><div class='line' id='LC818'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC819'><span class="cm">     * Half the FFT size.</span></div><div class='line' id='LC820'><span class="cm">     */</span></div><div class='line' id='LC821'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">frequencyBinCount</span>: <span class="kt">number</span><span class="p">;</span></div><div class='line' id='LC822'><br/></div><div class='line' id='LC823'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC824'><span class="cm">     * The minimum power value in the scaling range for the FFT analysis data for conversion to unsigned byte values.</span></div><div class='line' id='LC825'><span class="cm">     */</span></div><div class='line' id='LC826'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">minDecibels</span>: <span class="kt">number</span><span class="p">;</span></div><div class='line' id='LC827'><br/></div><div class='line' id='LC828'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC829'><span class="cm">     * The maximum power value in the scaling range for the FFT analysis data for conversion to unsigned byte values.</span></div><div class='line' id='LC830'><span class="cm">     */</span></div><div class='line' id='LC831'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">maxDecibels</span>: <span class="kt">number</span><span class="p">;</span></div><div class='line' id='LC832'><br/></div><div class='line' id='LC833'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC834'><span class="cm">     * A value from 0 -&gt; 1 where 0 represents no time averaging with the last analysis frame.</span></div><div class='line' id='LC835'><span class="cm">     */</span></div><div class='line' id='LC836'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">smoothingTimeConstant</span>: <span class="kt">number</span><span class="p">;</span></div><div class='line' id='LC837'><span class="p">}</span></div><div class='line' id='LC838'><br/></div><div class='line' id='LC839'><span class="cm">/**</span></div><div class='line' id='LC840'><span class="cm"> * The ChannelSplitterNode is for use in more advanced applications and would often be used in conjunction with ChannelMergerNode.</span></div><div class='line' id='LC841'><span class="cm"> *</span></div><div class='line' id='LC842'><span class="cm"> *    numberOfInputs  : 1</span></div><div class='line' id='LC843'><span class="cm"> *    numberOfOutputs : Variable N (defaults to 6) // number of &quot;active&quot; (non-silent) outputs is determined by number of channels in the input</span></div><div class='line' id='LC844'><span class="cm"> */</span></div><div class='line' id='LC845'><span class="kr">interface</span> <span class="nx">ChannelSplitterNode</span> <span class="kr">extends</span> <span class="nx">AudioNode</span> <span class="p">{</span></div><div class='line' id='LC846'><span class="p">}</span></div><div class='line' id='LC847'><br/></div><div class='line' id='LC848'><span class="cm">/**</span></div><div class='line' id='LC849'><span class="cm"> * The ChannelMergerNode is for use in more advanced applications and would often be used in conjunction with ChannelSplitterNode.</span></div><div class='line' id='LC850'><span class="cm"> *</span></div><div class='line' id='LC851'><span class="cm"> *    numberOfInputs  : Variable N (default to 6)  // number of connected inputs may be less than this</span></div><div class='line' id='LC852'><span class="cm"> *    numberOfOutputs : 1</span></div><div class='line' id='LC853'><span class="cm"> */</span></div><div class='line' id='LC854'><span class="kr">interface</span> <span class="nx">ChannelMergerNode</span> <span class="kr">extends</span> <span class="nx">AudioNode</span> <span class="p">{</span></div><div class='line' id='LC855'><span class="p">}</span></div><div class='line' id='LC856'><br/></div><div class='line' id='LC857'><span class="cm">/**</span></div><div class='line' id='LC858'><span class="cm"> * DynamicsCompressorNode is an AudioNode processor implementing a dynamics compression effect.</span></div><div class='line' id='LC859'><span class="cm"> *</span></div><div class='line' id='LC860'><span class="cm"> * Dynamics compression is very commonly used in musical production and game audio. It lowers the volume of the loudest parts of the signal and raises the volume of the softest parts. Overall, a louder, richer, and fuller sound can be achieved. It is especially important in games and musical applications where large numbers of individual sounds are played simultaneous to control the overall signal level and help avoid clipping (distorting) the audio output to the speakers.</span></div><div class='line' id='LC861'><span class="cm"> *</span></div><div class='line' id='LC862'><span class="cm"> *    numberOfInputs  : 1</span></div><div class='line' id='LC863'><span class="cm"> *    numberOfOutputs : 1</span></div><div class='line' id='LC864'><span class="cm"> */</span></div><div class='line' id='LC865'><span class="kr">interface</span> <span class="nx">DynamicsCompressorNode</span> <span class="kr">extends</span> <span class="nx">AudioNode</span> <span class="p">{</span></div><div class='line' id='LC866'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC867'><span class="cm">     * The decibel value above which the compression will start taking effect. Its default value is -24, with a nominal range of -100 to 0.</span></div><div class='line' id='LC868'><span class="cm">     */</span></div><div class='line' id='LC869'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">threshold</span>: <span class="kt">AudioParam</span><span class="p">;</span></div><div class='line' id='LC870'><br/></div><div class='line' id='LC871'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC872'><span class="cm">     * A decibel value representing the range above the threshold where the curve smoothly transitions to the &quot;ratio&quot; portion. Its default value is 30, with a nominal range of 0 to 40.</span></div><div class='line' id='LC873'><span class="cm">     */</span></div><div class='line' id='LC874'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">knee</span>: <span class="kt">AudioParam</span><span class="p">;</span></div><div class='line' id='LC875'><br/></div><div class='line' id='LC876'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC877'><span class="cm">     * The amount of dB change in input for a 1 dB change in output. Its default value is 12, with a nominal range of 1 to 20.</span></div><div class='line' id='LC878'><span class="cm">     */</span></div><div class='line' id='LC879'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ratio</span>: <span class="kt">AudioParam</span><span class="p">;</span></div><div class='line' id='LC880'><br/></div><div class='line' id='LC881'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC882'><span class="cm">     * A read-only decibel value for metering purposes, representing the current amount of gain reduction that the compressor is applying to the signal. If fed no signal the value will be 0 (no gain reduction). The nominal range is -20 to 0.</span></div><div class='line' id='LC883'><span class="cm">     */</span></div><div class='line' id='LC884'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">reduction</span>: <span class="kt">AudioParam</span><span class="p">;</span></div><div class='line' id='LC885'><br/></div><div class='line' id='LC886'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC887'><span class="cm">     * The amount of time (in seconds) to reduce the gain by 10dB. Its default value is 0.003, with a nominal range of 0 to 1.</span></div><div class='line' id='LC888'><span class="cm">     */</span></div><div class='line' id='LC889'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">attack</span>: <span class="kt">AudioParam</span><span class="p">;</span></div><div class='line' id='LC890'><br/></div><div class='line' id='LC891'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC892'><span class="cm">     * The amount of time (in seconds) to increase the gain by 10dB. Its default value is 0.250, with a nominal range of 0 to 1.</span></div><div class='line' id='LC893'><span class="cm">     */</span></div><div class='line' id='LC894'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">release</span>: <span class="kt">AudioParam</span><span class="p">;</span></div><div class='line' id='LC895'><br/></div><div class='line' id='LC896'><span class="p">}</span></div><div class='line' id='LC897'><br/></div><div class='line' id='LC898'><span class="kr">declare</span> <span class="kr">enum</span> <span class="nx">BiquadFilterType</span> <span class="p">{</span></div><div class='line' id='LC899'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC900'><span class="cm">     * A lowpass filter allows frequencies below the cutoff frequency to pass through and attenuates frequencies above the cutoff. It implements a standard second-order resonant lowpass filter with 12dB/octave rolloff.</span></div><div class='line' id='LC901'><span class="cm">     *</span></div><div class='line' id='LC902'><span class="cm">     * ## frequency</span></div><div class='line' id='LC903'><span class="cm">     * The cutoff frequency</span></div><div class='line' id='LC904'><span class="cm">     * ## Q</span></div><div class='line' id='LC905'><span class="cm">     * Controls how peaked the response will be at the cutoff frequency. A large value makes the response more peaked. Please note that for this filter type, this value is not a traditional Q, but is a resonance value in decibels.</span></div><div class='line' id='LC906'><span class="cm">     * ## gain</span></div><div class='line' id='LC907'><span class="cm">     * Not used in this filter type</span></div><div class='line' id='LC908'><span class="cm">     */</span></div><div class='line' id='LC909'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">lowpass</span><span class="p">,</span></div><div class='line' id='LC910'><br/></div><div class='line' id='LC911'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC912'><span class="cm">     * A highpass filter is the opposite of a lowpass filter. Frequencies above the cutoff frequency are passed through, but frequencies below the cutoff are attenuated. It implements a standard second-order resonant highpass filter with 12dB/octave rolloff.</span></div><div class='line' id='LC913'><span class="cm">     *</span></div><div class='line' id='LC914'><span class="cm">     * ## frequency</span></div><div class='line' id='LC915'><span class="cm">     * The cutoff frequency below which the frequencies are attenuated</span></div><div class='line' id='LC916'><span class="cm">     * ## Q</span></div><div class='line' id='LC917'><span class="cm">     * Controls how peaked the response will be at the cutoff frequency. A large value makes the response more peaked. Please note that for this filter type, this value is not a traditional Q, but is a resonance value in decibels.</span></div><div class='line' id='LC918'><span class="cm">     * ## gain</span></div><div class='line' id='LC919'><span class="cm">     * Not used in this filter type</span></div><div class='line' id='LC920'><span class="cm">     */</span></div><div class='line' id='LC921'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">highpass</span><span class="p">,</span></div><div class='line' id='LC922'><br/></div><div class='line' id='LC923'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC924'><span class="cm">     * A bandpass filter allows a range of frequencies to pass through and attenuates the frequencies below and above this frequency range. It implements a second-order bandpass filter.</span></div><div class='line' id='LC925'><span class="cm">     *</span></div><div class='line' id='LC926'><span class="cm">     * ## frequency</span></div><div class='line' id='LC927'><span class="cm">     * The center of the frequency band</span></div><div class='line' id='LC928'><span class="cm">     * ## Q</span></div><div class='line' id='LC929'><span class="cm">     * Controls the width of the band. The width becomes narrower as the Q value increases.</span></div><div class='line' id='LC930'><span class="cm">     * ## gain</span></div><div class='line' id='LC931'><span class="cm">     * Not used in this filter type</span></div><div class='line' id='LC932'><span class="cm">     */</span></div><div class='line' id='LC933'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">bandpass</span><span class="p">,</span></div><div class='line' id='LC934'><br/></div><div class='line' id='LC935'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC936'><span class="cm">     * The lowshelf filter allows all frequencies through, but adds a boost (or attenuation) to the lower frequencies. It implements a second-order lowshelf filter.</span></div><div class='line' id='LC937'><span class="cm">     *</span></div><div class='line' id='LC938'><span class="cm">     * ## frequency</span></div><div class='line' id='LC939'><span class="cm">     * The upper limit of the frequences where the boost (or attenuation) is applied.</span></div><div class='line' id='LC940'><span class="cm">     * ## Q</span></div><div class='line' id='LC941'><span class="cm">     * Not used in this filter type.</span></div><div class='line' id='LC942'><span class="cm">     * ## gain</span></div><div class='line' id='LC943'><span class="cm">     * The boost, in dB, to be applied. If the value is negative, the frequencies are attenuated.</span></div><div class='line' id='LC944'><span class="cm">     */</span></div><div class='line' id='LC945'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">lowshelf</span><span class="p">,</span></div><div class='line' id='LC946'><br/></div><div class='line' id='LC947'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC948'><span class="cm">     * The highshelf filter is the opposite of the lowshelf filter and allows all frequencies through, but adds a boost to the higher frequencies. It implements a second-order highshelf filter</span></div><div class='line' id='LC949'><span class="cm">     *</span></div><div class='line' id='LC950'><span class="cm">     * ## frequency</span></div><div class='line' id='LC951'><span class="cm">     * The lower limit of the frequences where the boost (or attenuation) is applied.</span></div><div class='line' id='LC952'><span class="cm">     * ## Q</span></div><div class='line' id='LC953'><span class="cm">     * Not used in this filter type.</span></div><div class='line' id='LC954'><span class="cm">     * ## gain</span></div><div class='line' id='LC955'><span class="cm">     * The boost, in dB, to be applied. If the value is negative, the frequencies are attenuated.</span></div><div class='line' id='LC956'><span class="cm">     */</span></div><div class='line' id='LC957'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">highshelf</span><span class="p">,</span></div><div class='line' id='LC958'><br/></div><div class='line' id='LC959'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC960'><span class="cm">     * The peaking filter allows all frequencies through, but adds a boost (or attenuation) to a range of frequencies.</span></div><div class='line' id='LC961'><span class="cm">     *</span></div><div class='line' id='LC962'><span class="cm">     * ## frequency</span></div><div class='line' id='LC963'><span class="cm">     * The center frequency of where the boost is applied.</span></div><div class='line' id='LC964'><span class="cm">     * ## Q</span></div><div class='line' id='LC965'><span class="cm">     * Controls the width of the band of frequencies that are boosted. A large value implies a narrow width.</span></div><div class='line' id='LC966'><span class="cm">     * ## gain</span></div><div class='line' id='LC967'><span class="cm">     * The boost, in dB, to be applied. If the value is negative, the frequencies are attenuated.</span></div><div class='line' id='LC968'><span class="cm">     */</span></div><div class='line' id='LC969'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">peaking</span><span class="p">,</span></div><div class='line' id='LC970'><br/></div><div class='line' id='LC971'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC972'><span class="cm">     * The notch filter (also known as a band-stop or band-rejection filter) is the opposite of a bandpass filter. It allows all frequencies through, except for a set of frequencies.</span></div><div class='line' id='LC973'><span class="cm">     *</span></div><div class='line' id='LC974'><span class="cm">     * ## frequency</span></div><div class='line' id='LC975'><span class="cm">     * The center frequency of where the notch is applied.</span></div><div class='line' id='LC976'><span class="cm">     * ## Q</span></div><div class='line' id='LC977'><span class="cm">     * Controls the width of the band of frequencies that are attenuated. A large value implies a narrow width.</span></div><div class='line' id='LC978'><span class="cm">     * ## gain</span></div><div class='line' id='LC979'><span class="cm">     * Not used in this filter type.</span></div><div class='line' id='LC980'><span class="cm">     */</span></div><div class='line' id='LC981'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">notch</span><span class="p">,</span></div><div class='line' id='LC982'><br/></div><div class='line' id='LC983'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC984'><span class="cm">     * An allpass filter allows all frequencies through, but changes the phase relationship between the various frequencies. It implements a second-order allpass filter</span></div><div class='line' id='LC985'><span class="cm">     *</span></div><div class='line' id='LC986'><span class="cm">     * ## frequency</span></div><div class='line' id='LC987'><span class="cm">     * The frequency where the center of the phase transition occurs. Viewed another way, this is the frequency with maximal group delay.</span></div><div class='line' id='LC988'><span class="cm">     * ## Q</span></div><div class='line' id='LC989'><span class="cm">     * Controls how sharp the phase transition is at the center frequency. A larger value implies a sharper transition and a larger group delay.</span></div><div class='line' id='LC990'><span class="cm">     * ## gain</span></div><div class='line' id='LC991'><span class="cm">     * Not used in this filter type.</span></div><div class='line' id='LC992'><span class="cm">     */</span></div><div class='line' id='LC993'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">allpass</span></div><div class='line' id='LC994'><span class="p">}</span></div><div class='line' id='LC995'><br/></div><div class='line' id='LC996'><span class="cm">/**</span></div><div class='line' id='LC997'><span class="cm"> * BiquadFilterNode is an AudioNode processor implementing very common low-order filters.</span></div><div class='line' id='LC998'><span class="cm"> *</span></div><div class='line' id='LC999'><span class="cm"> * Low-order filters are the building blocks of basic tone controls (bass, mid, treble), graphic equalizers, and more advanced filters. Multiple BiquadFilterNode filters can be combined to form more complex filters. The filter parameters such as &quot;frequency&quot; can be changed over time for filter sweeps, etc. Each BiquadFilterNode can be configured as one of a number of common filter types as shown in the IDL below. The default filter type is &quot;lowpass&quot;</span></div><div class='line' id='LC1000'><span class="cm"> *</span></div><div class='line' id='LC1001'><span class="cm"> *    numberOfInputs  : 1</span></div><div class='line' id='LC1002'><span class="cm"> *    numberOfOutputs : 1</span></div><div class='line' id='LC1003'><span class="cm"> *</span></div><div class='line' id='LC1004'><span class="cm"> * The filter types are briefly described below. We note that all of these filters are very commonly used in audio processing. In terms of implementation, they have all been derived from standard analog filter prototypes. For more technical details, we refer the reader to the excellent reference by Robert Bristow-Johnson.</span></div><div class='line' id='LC1005'><span class="cm"> *</span></div><div class='line' id='LC1006'><span class="cm"> * All parameters are k-rate with the following default parameter values:</span></div><div class='line' id='LC1007'><span class="cm"> *</span></div><div class='line' id='LC1008'><span class="cm"> * ## frequency</span></div><div class='line' id='LC1009'><span class="cm"> * 350Hz, with a nominal range of 10 to the Nyquist frequency (half the sample-rate).</span></div><div class='line' id='LC1010'><span class="cm"> * ## Q</span></div><div class='line' id='LC1011'><span class="cm"> * 1, with a nominal range of 0.0001 to 1000.</span></div><div class='line' id='LC1012'><span class="cm"> * ## gain</span></div><div class='line' id='LC1013'><span class="cm"> * 0, with a nominal range of -40 to 40.</span></div><div class='line' id='LC1014'><span class="cm"> */</span></div><div class='line' id='LC1015'><span class="kr">interface</span> <span class="nx">BiquadFilterNode</span> <span class="kr">extends</span> <span class="nx">AudioNode</span> <span class="p">{</span></div><div class='line' id='LC1016'><br/></div><div class='line' id='LC1017'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span>: <span class="kt">BiquadFilterType</span><span class="p">;</span></div><div class='line' id='LC1018'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">frequency</span>: <span class="kt">AudioParam</span><span class="p">;</span> </div><div class='line' id='LC1019'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Q</span>: <span class="kt">AudioParam</span><span class="p">;</span></div><div class='line' id='LC1020'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">gain</span>: <span class="kt">AudioParam</span><span class="p">;</span></div><div class='line' id='LC1021'><br/></div><div class='line' id='LC1022'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1023'><span class="cm">     * Given the current filter parameter settings, calculates the frequency response for the specified frequencies.</span></div><div class='line' id='LC1024'><span class="cm">     * @param frequencyHz an array of frequencies at which the response values will be calculated.</span></div><div class='line' id='LC1025'><span class="cm">     * @param magResponse an output array receiving the linear magnitude response values.</span></div><div class='line' id='LC1026'><span class="cm">     * @param phaseResponse an output array receiving the phase response values in radians.</span></div><div class='line' id='LC1027'><span class="cm">     */</span></div><div class='line' id='LC1028'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">getFrequencyResponse</span><span class="p">(</span><span class="nx">frequencyHz</span>: <span class="kt">any</span><span class="p">,</span> <span class="nx">magResponse</span>: <span class="kt">any</span><span class="p">,</span> <span class="nx">phaseResponse</span>: <span class="kt">any</span><span class="p">)</span><span class="o">:</span> <span class="k">void</span><span class="p">;</span></div><div class='line' id='LC1029'><span class="p">}</span></div><div class='line' id='LC1030'><br/></div><div class='line' id='LC1031'><span class="cm">/**</span></div><div class='line' id='LC1032'><span class="cm"> * WaveShaperNode is an AudioNode processor implementing non-linear distortion effects.</span></div><div class='line' id='LC1033'><span class="cm"> *</span></div><div class='line' id='LC1034'><span class="cm"> * Non-linear waveshaping distortion is commonly used for both subtle non-linear warming, or more obvious distortion effects. Arbitrary non-linear shaping curves may be specified.</span></div><div class='line' id='LC1035'><span class="cm"> *</span></div><div class='line' id='LC1036'><span class="cm"> *    numberOfInputs  : 1</span></div><div class='line' id='LC1037'><span class="cm"> *    numberOfOutputs : 1</span></div><div class='line' id='LC1038'><span class="cm"> */</span></div><div class='line' id='LC1039'><span class="kr">interface</span> <span class="nx">WaveShaperNode</span> <span class="kr">extends</span> <span class="nx">AudioNode</span> <span class="p">{</span></div><div class='line' id='LC1040'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1041'><span class="cm">     * The shaping curve used for the waveshaping effect. The input signal is nominally within the range -1 -&gt; +1. Each input sample within this range will index into the shaping curve with a signal level of zero corresponding to the center value of the curve array. Any sample value less than -1 will correspond to the first value in the curve array. Any sample value less greater than +1 will correspond to the last value in the curve array.</span></div><div class='line' id='LC1042'><span class="cm">     */</span></div><div class='line' id='LC1043'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">curve</span>: <span class="kt">Float32Array</span><span class="p">;</span></div><div class='line' id='LC1044'><span class="p">}</span></div><div class='line' id='LC1045'><br/></div><div class='line' id='LC1046'><span class="kr">declare</span> <span class="kr">enum</span> <span class="nx">OscillatorType</span> <span class="p">{</span></div><div class='line' id='LC1047'>&nbsp;&nbsp;<span class="nx">sine</span><span class="p">,</span></div><div class='line' id='LC1048'>&nbsp;&nbsp;<span class="nx">square</span><span class="p">,</span></div><div class='line' id='LC1049'>&nbsp;&nbsp;<span class="nx">sawtooth</span><span class="p">,</span></div><div class='line' id='LC1050'>&nbsp;&nbsp;<span class="nx">triangle</span><span class="p">,</span></div><div class='line' id='LC1051'>&nbsp;&nbsp;<span class="nx">custom</span></div><div class='line' id='LC1052'><span class="p">}</span></div><div class='line' id='LC1053'><br/></div><div class='line' id='LC1054'><span class="cm">/**</span></div><div class='line' id='LC1055'><span class="cm"> * OscillatorNode represents an audio source generating a periodic waveform. It can be set to a few commonly used waveforms. Additionally, it can be set to an arbitrary periodic waveform through the use of a WaveTable object.</span></div><div class='line' id='LC1056'><span class="cm"> *</span></div><div class='line' id='LC1057'><span class="cm"> * Oscillators are common foundational building blocks in audio synthesis. An OscillatorNode will start emitting sound at the time specified by the start() method.</span></div><div class='line' id='LC1058'><span class="cm"> *</span></div><div class='line' id='LC1059'><span class="cm"> * Mathematically speaking, a continuous-time periodic waveform can have very high (or infinitely high) frequency information when considered in the frequency domain. When this waveform is sampled as a discrete-time digital audio signal at a particular sample-rate, then care must be taken to discard (filter out) the high-frequency information higher than the Nyquist frequency (half the sample-rate) before converting the waveform to a digital form. If this is not done, then aliasing of higher frequencies (than the Nyquist frequency) will fold back as mirror images into frequencies lower than the Nyquist frequency. In many cases this will cause audibly objectionable artifacts. This is a basic and well understood principle of audio DSP.</span></div><div class='line' id='LC1060'><span class="cm"> *</span></div><div class='line' id='LC1061'><span class="cm"> * There are several practical approaches that an implementation may take to avoid this aliasing. But regardless of approach, the idealized discrete-time digital audio signal is well defined mathematically. The trade-off for the implementation is a matter of implementation cost (in terms of CPU usage) versus fidelity to achieving this ideal.</span></div><div class='line' id='LC1062'><span class="cm"> * </span></div><div class='line' id='LC1063'><span class="cm"> * It is expected that an implementation will take some care in achieving this ideal, but it is reasonable to consider lower-quality, less-costly approaches on lower-end hardware.</span></div><div class='line' id='LC1064'><span class="cm"> *</span></div><div class='line' id='LC1065'><span class="cm"> * Both .frequency and .detune are a-rate parameters and are used together to determine a computedFrequency value:</span></div><div class='line' id='LC1066'><span class="cm"> *</span></div><div class='line' id='LC1067'><span class="cm"> *     computedFrequency(t) = frequency(t) * pow(2, detune(t) / 1200)</span></div><div class='line' id='LC1068'><span class="cm"> *</span></div><div class='line' id='LC1069'><span class="cm"> * The OscillatorNode&#39;s instantaneous phase at each time is the time integral of computedFrequency.</span></div><div class='line' id='LC1070'><span class="cm"> *</span></div><div class='line' id='LC1071'><span class="cm"> *     numberOfInputs  : 0</span></div><div class='line' id='LC1072'><span class="cm"> *     numberOfOutputs : 1 (mono output)</span></div><div class='line' id='LC1073'><span class="cm"> */</span></div><div class='line' id='LC1074'><span class="kr">interface</span> <span class="nx">OscillatorNode</span> <span class="kr">extends</span> <span class="nx">AudioSourceNode</span> <span class="p">{</span></div><div class='line' id='LC1075'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1076'><span class="cm">     * The shape of the periodic waveform. It may directly be set to any of the type constant values except for &quot;custom&quot;. The setWaveTable() method can be used to set a custom waveform, which results in this attribute being set to &quot;custom&quot;. The default value is &quot;sine&quot;.</span></div><div class='line' id='LC1077'><span class="cm">     */</span></div><div class='line' id='LC1078'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span>: <span class="kt">OscillatorType</span><span class="p">;</span></div><div class='line' id='LC1079'><br/></div><div class='line' id='LC1080'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1081'><span class="cm">     * defined as in AudioBufferSourceNode.</span></div><div class='line' id='LC1082'><span class="cm">     * @readonly</span></div><div class='line' id='LC1083'><span class="cm">     */</span></div><div class='line' id='LC1084'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">playbackState</span>: <span class="kt">number</span><span class="p">;</span></div><div class='line' id='LC1085'><br/></div><div class='line' id='LC1086'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1087'><span class="cm">     * The frequency (in Hertz) of the periodic waveform. This parameter is a-rate</span></div><div class='line' id='LC1088'><span class="cm">     * @readonly</span></div><div class='line' id='LC1089'><span class="cm">     */</span></div><div class='line' id='LC1090'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">frequency</span>: <span class="kt">AudioParam</span><span class="p">;</span></div><div class='line' id='LC1091'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC1092'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1093'><span class="cm">     * A detuning value (in Cents) which will offset the frequency by the given amount. This parameter is a-rate</span></div><div class='line' id='LC1094'><span class="cm">     */</span></div><div class='line' id='LC1095'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">detune</span>: <span class="kt">AudioParam</span><span class="p">;</span> <span class="c1">// in Cents</span></div><div class='line' id='LC1096'><br/></div><div class='line' id='LC1097'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1098'><span class="cm">     * defined as in AudioBufferSourceNode.</span></div><div class='line' id='LC1099'><span class="cm">     */</span></div><div class='line' id='LC1100'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">start</span><span class="p">(</span><span class="nx">when</span>: <span class="kt">number</span><span class="p">)</span><span class="o">:</span> <span class="k">void</span><span class="p">;</span></div><div class='line' id='LC1101'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC1102'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1103'><span class="cm">     * defined as in AudioBufferSourceNode.</span></div><div class='line' id='LC1104'><span class="cm">     */</span></div><div class='line' id='LC1105'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">stop</span><span class="p">(</span><span class="nx">when</span>: <span class="kt">number</span><span class="p">)</span><span class="o">:</span> <span class="k">void</span><span class="p">;</span></div><div class='line' id='LC1106'><br/></div><div class='line' id='LC1107'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1108'><span class="cm">     * Sets an arbitrary custom periodic waveform given a WaveTable.</span></div><div class='line' id='LC1109'><span class="cm">     */</span></div><div class='line' id='LC1110'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setWaveTable</span><span class="p">(</span><span class="nx">waveTable</span>: <span class="kt">WaveTable</span><span class="p">)</span><span class="o">:</span> <span class="k">void</span><span class="p">;</span></div><div class='line' id='LC1111'><span class="p">}</span></div><div class='line' id='LC1112'><br/></div><div class='line' id='LC1113'><span class="cm">/**</span></div><div class='line' id='LC1114'><span class="cm"> * WaveTable represents an arbitrary periodic waveform to be used with an OscillatorNode. Please see createWaveTable() and setWaveTable() and for more details.</span></div><div class='line' id='LC1115'><span class="cm"> */</span></div><div class='line' id='LC1116'><span class="kr">interface</span> <span class="nx">WaveTable</span> <span class="p">{</span></div><div class='line' id='LC1117'><span class="p">}</span></div><div class='line' id='LC1118'><br/></div><div class='line' id='LC1119'><span class="cm">/**</span></div><div class='line' id='LC1120'><span class="cm"> * This interface represents an audio source from a MediaStream. The first AudioMediaStreamTrack from the MediaStream will be used as a source of audio.</span></div><div class='line' id='LC1121'><span class="cm"> *</span></div><div class='line' id='LC1122'><span class="cm"> *    numberOfInputs  : 0</span></div><div class='line' id='LC1123'><span class="cm"> *    numberOfOutputs : 1</span></div><div class='line' id='LC1124'><span class="cm"> */</span></div><div class='line' id='LC1125'><span class="kr">interface</span> <span class="nx">MediaStreamAudioSourceNode</span> <span class="kr">extends</span> <span class="nx">AudioSourceNode</span> <span class="p">{</span></div><div class='line' id='LC1126'><span class="p">}</span></div></pre></div></td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.07184s from github-fe132-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>
