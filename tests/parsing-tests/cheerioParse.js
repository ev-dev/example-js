const allHTML =
  `<div class="global-notice">
    <div class="wrap center">
      
        <p><bdi>MDN wants to learn about developers like you: <a href="https://qsurvey.mozilla.com/s3/MDN-dev-survey">https://qsurvey.mozilla.com/s3/MDN-dev-survey</a></bdi></p>
      
    </div>
  </div>


  <ul id="nav-access">
    <li><a href="#document-main" id="skip-main">Skip to main content</a></li>
    <li><a id="skip-language" href="#language">Select language</a></li>
    <li><a href="#q" id="skip-search">Skip to search</a></li>
  </ul>

  <!-- Header -->
  <header id="main-header"><div class="center">
    <a href="/en-US/" class="logo">MDN Web Docs</a>

    <div id="nav-sec">
    
      <ul>
      
        <li class="nav-tools"><a href="/en-US/docs/MDN/Doc_status">Tools<i aria-hidden="true" class="icon-caret-down"></i></a>
          <div class="submenu submenu-cols-2 js-submenu" id="nav-tools-submenu">
            <div class="submenu-column">
              <div class="title">Contribute to MDN</div>
              <ul>
                <li><a href="/en-US/docs/MDN/Getting_started">Get started</a></li>
                <li><a href="/en-US/docs/MDN/Doc_status">Review or localize docs</a></li>
              </ul>
            </div><div class="submenu-column last">
              <div class="title">Site Tools</div>
              <ul>
                <li><a href="/en-US/dashboards/revisions">Revision dashboard</a></li>
                <li><a href="/en-US/docs/MDN/Doc_status">Documentation status</a></li>
              </ul>
            </div>
          </div>
      </li><li class="nav-login"><div class="login">
    
        <a class="user-url" href="/en-US/profiles/ev-dev"><img src="https://secure.gravatar.com/avatar/d44105d48fb6ca08daa9845d7d1270be?s=50&amp;r=pg&amp;d=https%3A%2F%2Fdeveloper.cdn.mozilla.net%2Fmedia%2Fimg%2Favatar.png" alt="ev-dev" width="50" height="50" class="login-photo avatar" /><span class="login-name">ev-dev</span> <i aria-hidden="true" class="icon-caret-down"></i></a>
        <div class="submenu js-submenu" id="nav-user-submenu">
            <div class="submenu-column">
                <ul>
                    <li><a href="/en-US/profiles/ev-dev">View profile</a></li>
                    <li><a href="/en-US/profiles/ev-dev/edit">Edit profile</a></li>
                    <li><form class="login-form" action="/en-US/users/signout" method="post">
                        <input type='hidden' name='csrfmiddlewaretoken' value='0Xk1l8TzkFjfbzXUO1RwxAyceXhGLvJy' />
                        <input name="next" type="hidden" value="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push">
                        <button class="logout button link" type="submit">Sign out</button>
                    </form></li>
                </ul>
            </div>
        </div>
    
</div></li>
      </ul>
    
    </div>

    <nav id="main-nav" class="nav-main" role="navigation"><ul><li class="nav-main-item"><a href="/en-US/docs/Web">Technologies<i aria-hidden="true" class="icon-caret-down"></i></a>
      <div class="submenu js-submenu" id="nav-tech-submenu">
        <div class="submenu-column">
          <ul>
            <li><a href="/en-US/docs/Web/HTML">HTML</a></li>
            <li><a href="/en-US/docs/Web/CSS">CSS</a></li>
            <li><a href="/en-US/docs/Web/JavaScript">JavaScript</a></li>
            <li><a href="/en-US/docs/Web/Guide/Graphics">Graphics</a></li>
            <li><a href="/en-US/docs/Web/HTTP">HTTP</a></li>
            <li><a href="/en-US/docs/Web/API">APIs / DOM</a></li>
            <li><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions">WebExtensions</a></li>
            <li><a href="/en-US/docs/Web/MathML">MathML</a></li>
          </ul>
        </div></div><li class="nav-main-item"><a href="/en-US/docs/Learn">References & Guides<i aria-hidden="true" class="icon-caret-down"></i></a>
        <div class="submenu js-submenu" id="nav-learn-submenu">
        <div class="submenu-column">
          <ul>
            <li><a href="/en-US/docs/Learn">Learn web development</a></li>
            <li><a href="/en-US/docs/Web/Tutorials">Tutorials</a></li>
            <li><a href="/en-US/docs/Web/Reference">References</a></li>
            <li><a href="/en-US/docs/Web/Guide">Developer Guides</a></li>
            <li><a href="/en-US/docs/Web/Accessibility">Accessibility</a></li>
            <li><a href="/en-US/docs/Games">Game development</a></li>
            <li><a href="/en-US/docs/Web">...more docs</a></li>
          </ul>
        </div>
      </div>
      </li><li class="nav-main-item"><a href="/en-US/docs/MDN/Feedback">Feedback<i aria-hidden="true" class="icon-caret-down"></i></a>
        <div class="submenu js-submenu" id="nav-contact-submenu">
          <div class="submenu-column">
            <ul>
              <li><a href="https://support.mozilla.org/">Get Firefox help<i aria-hidden="true" class="icon-external-link"></i></a></li>
              <li><a href="https://stackoverflow.com/">Get web development help<i aria-hidden="true" class="icon-external-link"></i></a></li>
            </ul>
            <ul>
              <li><a href="/en-US/docs/MDN/Community">Join the MDN community</a></li>
              <li><a target="_blank" href="https://bugzilla.mozilla.org/form.doc?bug_file_loc=https%3A//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push">Report a content problem<i aria-hidden="true" class="icon-external-link"></i></a></li>
              <li><a target="_blank" href="https://bugzilla.mozilla.org/form.mdn">Report a bug<i aria-hidden="true" class="icon-external-link"></i></a></li>
            </ul>
          </div>
        </div>
      </li><li class="nav-main-search"><form action="/en-US/search" method="get" role="search">
        <div class="search-wrap">
          <label for="main-q" class="offscreen">Search</label>
          <input type="search" id="main-q" name="q" placeholder="Search" data-value="" value="" />
          <span class="search-trigger"><i aria-hidden="true" class="icon-search"></i></span>
          <button type="submit" class="offscreen">Search</button>
        </div>
      </form></li></ul></nav>
  </div></header>

  <!-- Content will go here -->
  <main id="content"><div class="center clear">
  

   <!-- end is_zone -->


    <div class="wiki-main-content" id="document-main"><div class="center">
      
      <div class="article-meta">
        <!-- action buttons -->
        

  
    
  

  
    
  

  

  <ul class="page-buttons">
      <li><button id="languages-menu" class="transparent" aria-haspopup="true" aria-owns="languages-menu-submenu" aria-expanded="false"><span>Languages</span><i aria-hidden="true" class="icon-language"></i></button>

        <div class="submenu js-submenu" id="languages-menu-submenu">
          <div class="submenu-column">
            <ul id="translations">
              
                
                
                
                  <li><bdi><a rel="internal" href="/ar/docs/Web/JavaScript/Reference/Global_Objects/Array/push" title="Arabic">عربي (ar)</a></bdi></li>
                
                  <li><bdi><a rel="internal" href="/ca/docs/Web/JavaScript/Referencia/Objectes_globals/Array/push" title="Catalan">Català (ca)</a></bdi></li>
                
                  <li><bdi><a rel="internal" href="/de/docs/Web/JavaScript/Reference/Global_Objects/Array/push" title="German">Deutsch (de)</a></bdi></li>
                
                  <li><bdi><a rel="internal" href="/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/push" title="Spanish">Español (es)</a></bdi></li>
                
                  <li><bdi><a rel="internal" href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/push" title="French">Français (fr)</a></bdi></li>
                
                  <li><bdi><a rel="internal" href="/id/docs/Web/JavaScript/Reference/Global_Objects/Array/push" title="Indonesian">Bahasa Indonesia (id)</a></bdi></li>
                
                  <li><bdi><a rel="internal" href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/push" title="Japanese">日本語 (ja)</a></bdi></li>
                
                  <li><bdi><a rel="internal" href="/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/push" title="Korean">한국어 (ko)</a></bdi></li>
                
                  <li><bdi><a rel="internal" href="/nl/docs/Web/JavaScript/Reference/Global_Objects/Array/push" title="Dutch">Nederlands (nl)</a></bdi></li>
                
                  <li><bdi><a rel="internal" href="/pl/docs/Web/JavaScript/Referencje/Obiekty/Array/push" title="Polish">Polski (pl)</a></bdi></li>
                
                  <li><bdi><a rel="internal" href="/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/push" title="Portuguese (Brazilian)">Português (do Brasil) (pt-BR)</a></bdi></li>
                
                  <li><bdi><a rel="internal" href="/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/push" title="Russian">Русский (ru)</a></bdi></li>
                
                  <li><bdi><a rel="internal" href="/tr/docs/Web/JavaScript/Reference/Global_Objects/Array/push" title="Turkish">Türkçe (tr)</a></bdi></li>
                
                  <li><bdi><a rel="internal" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push" title="Chinese (Simplified)">中文 (简体) (zh-CN)</a></bdi></li>
                
                  <li><bdi><a rel="internal" href="/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/push" title="Chinese (Traditional)">正體中文 (繁體) (zh-TW)</a></bdi></li>
                
              

              
                <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push$locales" rel="nofollow, noindex" id="translations-add">Add a translation</a></li>
              
            </ul>
          </div>
        </div>
      </li>
      
      <li class="page-buttons-edit"><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push$edit" class="button neutral" data-optimizely-hook="button-edit-doc" id="edit-button" rel="nofollow, noindex">Edit<i aria-hidden="true" class="icon-pencil"></i></a></li>
      

        
        <li><button id="watch-menu" class="only-icon" aria-haspopup="true" aria-owns="watch-menu-submenu" aria-expanded="false"><span>Watch</span><i aria-hidden="true" class="icon-eye"></i></button>
        <div class="submenu js-submenu" id="watch-menu-submenu">
            <div class="submenu-column">
                <div class="title">Watch</div>
                <ul>
                  <li class="page-watch">
                    
                    
                    
                    
                    <form action="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push$subscribe" method="post">
                        <input type='hidden' name='csrfmiddlewaretoken' value='0Xk1l8TzkFjfbzXUO1RwxAyceXhGLvJy' />
                        <a href="#" data-subscribe-status="Updating subscription status" data-subscribe-text="Subscribe to this article" data-unsubscribe-text="Unsubscribe from this article" data-subscribe-message="You are now subscribed to Array.prototype.push()." data-unsubscribe-message="You have been unsubscribed from Array.prototype.push().">
                        Subscribe to this article
                        </a>
                    </form>
                  </li>

                  
                  <li class="page-watch">
                    
                    
                    <form action="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push$subscribe_to_tree" method="post">
                        <input type='hidden' name='csrfmiddlewaretoken' value='0Xk1l8TzkFjfbzXUO1RwxAyceXhGLvJy' />
                        <a href="#" data-subscribe-status="" data-subscribe-text="Subscribe to this article and all its sub-articles" data-unsubscribe-text="Unsubscribe from this article and all its sub-articles" data-subscribe-message="You are now subscribed to this article and all its sub-articles." data-unsubscribe-message="You have been unsubscribed from this article and all its sub-articles.">
                        Subscribe to this article and all its sub-articles
                        </a>
                    </form>
                  </li>

                  

                  </ul>

                  
                  
            </div>
        </div>
        </li>
        

        <li><button id="advanced-menu" class="only-icon" aria-haspopup="true" aria-owns="advanced-menu-submenu" aria-expanded="false"><span>Advanced</span><i aria-hidden="true" class="icon-cog"></i></button>
        <div class="submenu js-submenu" id="advanced-menu-submenu">
          <!-- this page -->
          <div class="submenu-column">
            <div class="title">Advanced</div>
            <ul>
                <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push$history" rel="nofollow, noindex">History</a></li>
                
                  <li><a href="/en-US/docs/new?parent=1409" rel="nofollow, noindex">New sub-article</a></li>
                  <li><a href="/en-US/docs/new?clone=1409&amp;parent=1592" rel="nofollow, noindex">Clone this article</a></li>
                
                
                


                

                
                
                
                <li class="page-print"><a href="#" onclick="return window.print();">Print this article</a></li>
            </ul>
          </div>
        </div>
  </li></ul>

        <!-- crumbs -->
        
  <nav class="crumbs" role="navigation"><ol xmlns:v="http://rdf.data-vocabulary.org/#" aria-label="breadcrumbs">
    <li typeof="v:Breadcrumb"><a href="/en-US" rel="v:url" property="v:title">MDN</a></li>
    
      <li class="crumb" typeof="v:Breadcrumb"><a href="/en-US/docs/Web" rel="v:url" property="v:title">Web technology for developers</a></li>
    
      <li class="crumb" typeof="v:Breadcrumb"><a href="/en-US/docs/Web/JavaScript" rel="v:url" property="v:title">JavaScript</a></li>
    
      <li class="crumb" typeof="v:Breadcrumb"><a href="/en-US/docs/Web/JavaScript/Reference" rel="v:url" property="v:title">JavaScript reference</a></li>
    
      <li class="crumb" typeof="v:Breadcrumb"><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects" rel="v:url" property="v:title">Standard built-in objects</a></li>
    
      <li class="crumb" typeof="v:Breadcrumb"><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" rel="v:url" property="v:title">Array</a></li>
    
    <li class="crumb" typeof="v:Breadcrumb" property="v:title">Array.prototype.push()</li>
  </ol></nav>
      </div>

      <!-- heading -->
      <div id="wiki-document-head" class="document-head">
        <h1>Array.prototype.push()</h1>
      </div>
      

      <!-- start the main content container -->
        <div id="wiki-column-container" class="wiki-right-present wiki-left-present">

          <!-- content row with three strips -->
          <div class="column-container column-container-reverse">

            
              <!-- TOC, approvals, etc -->
              <div class="column-strip wiki-column" id="wiki-right">
              
              <!-- table of contents -->
              <div id="toc" class="toc toggleable">
                <a href="#toc" class="title toggler" data-open-icon="icon-caret-right" data-closed-icon="icon-caret-down">In This Article<i></i></a>
                <ol class="toggle-container">
                  <li><a href="#Syntax" rel="internal">Syntax</a><ol><li><a href="#Parameters" rel="internal">Parameters</a><li><a href="#Return_value" rel="internal">Return value</a></ol></li><li><a href="#Description" rel="internal">Description</a><li><a href="#Examples" rel="internal">Examples</a><ol><li><a href="#Adding_elements_to_an_array" rel="internal">Adding elements to an array</a><li><a href="#Merging_two_arrays" rel="internal">Merging two arrays</a><li><a href="#Using_an_object_in_an_array-like_fashion" rel="internal">Using an object in an array-like fashion</a></ol></li><li><a href="#Specifications" rel="internal">Specifications</a><li><a href="#Browser_compatibility" rel="internal">Browser compatibility</a><li><a href="#See_also" rel="internal">See also</a>
                </ol>
              </div>
              
              </div>
            


            <!-- center: main article content -->
            <div id="wiki-content" class="column-half wiki-column text-content">

              

              
                
              
              

              

              
                
              
              

              <!-- just the article content -->
              <article id="wikiArticle">
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>The <code><strong>push()</strong></code> method adds one or more elements to the end of an array and returns the new length of the array.</p>

<pre class="brush: js">var numbers = [1, 2, 3];
numbers.push(4);

console.log(numbers); // [1, 2, 3, 4]

numbers.push(5, 6, 7);

console.log(numbers); // [1, 2, 3, 4, 5, 6, 7]
</pre>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox"><var>arr</var>.push([<var>element1</var>[, ...[, <var>elementN</var>]]])</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>element<em>N</em></code></dt>
 <dd>The elements to add to the end of the array.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The new <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length" title="The length property of an object which is an instance of type Array sets or returns the number of elements in that array. The value is an unsigned, 32-bit integer that is always numerically greater than the highest index in the array."><code>length</code></a> property of the object upon which the method was called.</p>

<h2 id="Description">Description</h2>

<p>The <code>push</code> method appends values to an array.</p>

<p><code>push</code> is intentionally generic. This method can be used with <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call" title="The call() method calls a function with a given this value and arguments provided individually."><code>call()</code></a> or <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply" title="The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object)."><code>apply()</code></a> on objects resembling arrays. The <code>push</code> method relies on a <code>length</code> property to determine where to start inserting the given values. If the <code>length</code> property cannot be converted into a number, the index used is 0. This includes the possibility of <code>length</code> being nonexistent, in which case <code>length</code> will also be created.</p>

<p>The only native, array-like objects are <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" title="The String global object is a constructor for strings, or a sequence of characters.">strings</a>, although they are not suitable in applications of this method, as strings are immutable.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Adding_elements_to_an_array">Adding elements to an array</h3>

<p>The following code creates the <code>sports</code> array containing two elements, then appends two elements to it. The <code>total</code> variable contains the new length of the array.</p>

<pre class="brush: js">var sports = ['soccer', 'baseball'];
var total = sports.push('football', 'swimming');

console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
console.log(total);  // 4
</pre>

<h3 id="Merging_two_arrays">Merging two arrays</h3>

<p>This example uses <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply" title="The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object)."><code>apply()</code></a> to push all elements from a second array.</p>

<p>Do <em>not</em> use this method if the second array (<code>moreVegs</code> in the example) is very large, because the maximum number of parameters that one function can take is limited in practice. See <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply" title="The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object)."><code>apply()</code></a> for more details.</p>

<pre class="brush: js">var vegetables = ['parsnip', 'potato'];
var moreVegs = ['celery', 'beetroot'];

// Merge the second array into the first one
// Equivalent to vegetables.push('celery', 'beetroot');
Array.prototype.push.apply(vegetables, moreVegs);

console.log(vegetables); // ['parsnip', 'potato', 'celery', 'beetroot']
</pre>

<h3 id="Using_an_object_in_an_array-like_fashion">Using an object in an array-like fashion</h3>

<p>As mentioned above, <code>push</code> is intentionally generic, and we can use that to our advantage. <code>Array.prototype.push</code> can work on an object just fine, as this example shows. Note that we don't create an array to store a collection of objects. Instead, we store the collection on the object itself and use <code>call</code> on <code>Array.prototype.push</code> to trick the method into thinking we are dealing with an array, and it just works, thanks to the way JavaScript allows us to establish the execution context however we please.</p>

<pre class="brush: js">var obj = {
    length: 0,

    addElem: function addElem(elem) {
        // obj.length is automatically incremented 
        // every time an element is added.
        [].push.call(this, elem);
    }
};

// Let's add some empty objects just to illustrate.
obj.addElem({});
obj.addElem({});
console.log(obj.length);
// → 2
</pre>

<p>Note that although <code>obj</code> is not an array, the method <code>push</code> successfully incremented <code>obj</code>'s <code>length</code> property just like if we were dealing with an actual array.</p>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf" class="external" lang="en" hreflang="en" title="The 'ECMAScript 3rd Edition (ECMA-262)' specification">ECMAScript 3rd Edition (ECMA-262)</a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition. Implemented in JavaScript 1.2.</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.7" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="en-US">The definition of 'Array.prototype.push' in that specification.</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td> </td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.push" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="en-US">The definition of 'Array.prototype.push' in that specification.</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td> </td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-array.prototype.push" class="external" lang="en" hreflang="en">ECMAScript Latest Draft (ECMA-262)<br><small lang="en-US">The definition of 'Array.prototype.push' in that specification.</small></a></td>
   <td><span class="spec-Living">Living Standard</span></td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<div><div class="htab">
    <a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a>
    <ul>
        <li class="selected"><a>Desktop</a></li>
        <li><a>Mobile</a></li>
    </ul>
</div></div>

<div id="compat-desktop">
<table class="compat-table">
 <tbody>
  <tr>
   <th>Feature</th>
   <th>Chrome</th>
   <th>Edge</th>
   <th>Firefox (Gecko)</th>
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td>1.0</td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td>1.0 (1.7 or earlier)</td>
   <td>5.5</td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
  </tr>
 </tbody>
</table>
</div>

<div id="compat-mobile">
<table class="compat-table">
 <tbody>
  <tr>
   <th>Feature</th>
   <th>Android</th>
   <th>Chrome for Android</th>
   <th>Edge</th>
   <th>Firefox Mobile (Gecko)</th>
   <th>IE Mobile</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop" title="The pop() method removes the last element from an array and returns that element. This method changes the length of the array."><code>Array.prototype.pop()</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift" title="The shift() method removes the first element from an array and returns that element. This method changes the length of the array."><code>Array.prototype.shift()</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift" title="The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array."><code>Array.prototype.unshift()</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat" title="The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array."><code>Array.prototype.concat()</code></a></li>
</ul>
                  
                

              
                <aside class="helpful-survey hidden" id="helpful-survey">
                  <p>Was this article helpful?</p>

                  <div class="helpful-survey-content">
                    <div class="helpful-survey-buttons">
                      <button type="button" class="helpful-survey-vote helpful-survey-yes">
                        <span class="offscreen">Yes</span>
                        <i class="icon-thumbs-o-up" aria-hidden="true"></i>
                      </button>
                      <button type="button" class="helpful-survey-vote helpful-survey-no">
                        <span class="offscreen">No</span>
                        <i class="icon-thumbs-o-down" aria-hidden="true"></i>
                      </button>
                    </div>

                    <div class="helpful-survey-thankyou">Thank you!</div>
                  </div>
                </aside>
              
              </article>

              

                <!-- contributors -->
                <div class="wiki-block contributors">
                  <h2 class="offscreen">Document Tags and Contributors</h2>
                  
                  
  <div class="tag-attach-list contributors-sub">
    <i aria-hidden="true" class="icon-tags icon-fw"></i>
    <strong>Tags:</strong>&nbsp;
    <ul class="tags tags-small">
      
        <li><a href="/en-US/docs/tag/Array" rel="nofollow, noindex">Array</a></li>
      
        <li><a href="/en-US/docs/tag/JavaScript" rel="nofollow, noindex">JavaScript</a></li>
      
        <li><a href="/en-US/docs/tag/Method" rel="nofollow, noindex">Method</a></li>
      
        <li><a href="/en-US/docs/tag/Prototype" rel="nofollow, noindex">Prototype</a></li>
      
        <li><a href="/en-US/docs/tag/Reference" rel="nofollow, noindex">Reference</a></li>
      
    </ul>
  </div>


                  
                    <div class="contributors-sub">
                      <i aria-hidden="true" class="icon-group icon-fw"></i>&nbsp;<strong>Contributors to this page:</strong> 
        <a href="/en-US/profiles/erikadoyle">erikadoyle</a>, 
    
        <a href="/en-US/profiles/wbamberg">wbamberg</a>, 
    
        <a href="/en-US/profiles/nmve">nmve</a>, 
    
        <a href="/en-US/profiles/uxitten">uxitten</a>, 
    
        <a href="/en-US/profiles/Rob%20W">Rob W</a>, 
    
        <a href="/en-US/profiles/luisco">luisco</a>, 
    
        <a href="/en-US/profiles/fscholz">fscholz</a>, 
    
        <a href="/en-US/profiles/eduardoboucas">eduardoboucas</a>, 
    
        <a href="/en-US/profiles/wizzwizz4">wizzwizz4</a>, 
    
        <a href="/en-US/profiles/penuganti">penuganti</a>, 
    
        <a href="/en-US/profiles/FernandoBasso">FernandoBasso</a>, 
    
        <a href="/en-US/profiles/Mingun">Mingun</a>, 
    
        <a href="/en-US/profiles/Granjow">Granjow</a>, 
    
        <a href="/en-US/profiles/denim2x">denim2x</a>, 
    
        <a href="/en-US/profiles/Sheppy">Sheppy</a>, 
    
        <a href="/en-US/profiles/esgs.persona">esgs.persona</a>, 
    
        <a href="/en-US/profiles/rogerhc">rogerhc</a>, 
    
        <a href="/en-US/profiles/informatik01">informatik01</a>, 
    
        <a href="/en-US/profiles/mananvaghasiya">mananvaghasiya</a>, 
    
        <a href="/en-US/profiles/mikemaccana">mikemaccana</a>, 
    
        <a href="/en-US/profiles/ethertank">ethertank</a>, 
    
        <a href="/en-US/profiles/Nickolay">Nickolay</a>, 
    
        <a href="/en-US/profiles/dbruant">dbruant</a>, 
    
        <a href="/en-US/profiles/mfollett">mfollett</a>, 
    
        <a href="/en-US/profiles/madarche">madarche</a>, 
    
        <a href="/en-US/profiles/thelastnode">thelastnode</a>, 
    
        <a href="/en-US/profiles/evilpie">evilpie</a>, 
    
        <a href="/en-US/profiles/Sevenspade">Sevenspade</a>, 
    
        <a href="/en-US/profiles/Displague">Displague</a>, 
    
        <a href="/en-US/profiles/Ggranum">Ggranum</a>, 
    
        <a href="/en-US/profiles/Waldo">Waldo</a>, 
    
        <a href="/en-US/profiles/Mgjbot">Mgjbot</a>, 
    
        <a href="/en-US/profiles/Yuichirou">Yuichirou</a>, 
    
        <a href="/en-US/profiles/Ptak82">Ptak82</a>, 
    
        <a href="/en-US/profiles/Maian">Maian</a>, 
    
        <a href="/en-US/profiles/Dria">Dria</a>
    
                    </div>
                  

                  
                    <div class="contributors-sub">
                      <i aria-hidden="true" class="icon-clock-o icon-fw"></i>&nbsp;<strong>Last updated by:</strong>
                      <a href="/en-US/profiles/erikadoyle">erikadoyle</a>,
                      <time datetime="2017-05-11T12:48:42.722257-07:00">May 11, 2017, 12:48:42 PM</time>
                    </div>
                  
                </div>
              
            </div>

            
              <!-- quick links and zone subnav strip -->
              <div id="wiki-left" class="column-strip wiki-column">

              

                

                
                  <!-- quick links -->
                  
  <div class="quick-links" id="quick-links">
    <div class="title see-also">See also</div>
    <ol><li><strong><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/">Standard built-in objects</a></strong></li><li><strong><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"><code>Array</code></a></strong></li><li data-default-state="open"><a href="#"><strong>Properties</strong></a><ol><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length" title="The length property of an object which is an instance of type Array sets or returns the number of elements in that array. The value is an unsigned, 32-bit integer that is always numerically greater than the highest index in the array."><code>Array.length</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype" title="The Array.prototype property represents the prototype for the Array constructor and allows you to add new properties and methods to all Array objects."><code>Array.prototype</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@unscopables" title="The @@unscopable symbol property contains property names that were not included in the ECMAScript standard prior to the ES2015 version. These properties are excluded from with statement bindings."><code>Array.prototype[@@unscopables]</code></a></li></ol></li><li data-default-state="open"><a href="#"><strong>Methods</strong></a><ol><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from" title="The Array.from() method creates a new Array instance from an array-like or iterable object."><code>Array.from()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray" title="The Array.isArray() function determines whether the passed value is an Array."><code>Array.isArray()</code></a></li><li><span class="sidebar-icon"><span title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span></span><s class="obsoleteElement"><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe" title="The Array.observe() method was used for asynchronously observing changes to Arrays, similar to Object.observe() for objects. It provided a stream of changes in order of occurrence. It's equivalent to Object.observe() invoked with the accept type list [&quot;add&quot;, &quot;update&quot;, &quot;delete&quot;, &quot;splice&quot;]. However, this API has been deprecated and removed from Browsers. You can use the more general Proxy object instead."><code>Array.observe()</code></a></s></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of" title="The Array.of() method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments."><code>Array.of()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat" title="The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array."><code>Array.prototype.concat()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin" title="The copyWithin() method shallow copies part of an array to another location in the same array and returns it, without modifying its size."><code>Array.prototype.copyWithin()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries" title="The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array."><code>Array.prototype.entries()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every" title="The every() method tests whether all elements in the array pass the test implemented by the provided function."><code>Array.prototype.every()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill" title="The fill() method fills all the elements of an array from a start index to an end index with a static value."><code>Array.prototype.fill()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" title="The filter() method creates a new array with all elements that pass the test implemented by the provided function."><code>Array.prototype.filter()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find" title="The find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned."><code>Array.prototype.find()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex" title="The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned."><code>Array.prototype.findIndex()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach" title="The forEach() method executes a provided function once for each array element."><code>Array.prototype.forEach()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes" title="The includes() method determines whether an array includes a certain element, returning true or false as appropriate."><code>Array.prototype.includes()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf" title="The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present."><code>Array.prototype.indexOf()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join" title="The join() method joins all elements of an array (or an array-like object) into a string."><code>Array.prototype.join()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys" title="The keys() method returns a new Array Iterator that contains the keys for each index in the array."><code>Array.prototype.keys()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf" title="The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex."><code>Array.prototype.lastIndexOf()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map" title="The map() method creates a new array with the results of calling a provided function on every element in the calling array."><code>Array.prototype.map()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop" title="The pop() method removes the last element from an array and returns that element. This method changes the length of the array."><code>Array.prototype.pop()</code></a></li><li><em><code>Array.prototype.push()</code></em></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce" title="The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value."><code>Array.prototype.reduce()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight" title="The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value."><code>Array.prototype.reduceRight()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse" title="The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first."><code>Array.prototype.reverse()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift" title="The shift() method removes the first element from an array and returns that element. This method changes the length of the array."><code>Array.prototype.shift()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice" title="The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified."><code>Array.prototype.slice()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some" title="The some() method tests whether some element in the array passes the test implemented by the provided function."><code>Array.prototype.some()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort" title="The sort() method sorts the elements of an array in place and returns the array. The sort is not necessarily stable. The default sort order is according to string Unicode code points."><code>Array.prototype.sort()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice" title="The splice() method changes the contents of an array by removing existing elements and/or adding new elements."><code>Array.prototype.splice()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString" title="The toLocaleString() method returns a string representing the elements of the array. The elements are converted to Strings using their toLocaleString methods and these Strings are separated by a locale-specific String (such as a comma “,”)."><code>Array.prototype.toLocaleString()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSource" title="The toSource() method returns a string representing the source code of the array."><code>Array.prototype.toSource()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString" title="The toString() method returns a string representing the specified array and its elements."><code>Array.prototype.toString()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift" title="The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array."><code>Array.prototype.unshift()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values" title="The values() method returns a new Array Iterator object that contains the values for each index in the array."><code>Array.prototype.values()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator" title="The initial value of the @@iterator property is the same function object as the initial value of the values() property."><code>Array.prototype[@@iterator]()</code></a></li><li><span class="sidebar-icon"><span title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span></span><s class="obsoleteElement"><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unobserve" title="The Array.unobserve() method was used to remove observers set by Array.observe(), but has been deprecated and removed from Browsers. You can use the more general Proxy object instead."><code>Array.unobserve()</code></a></s></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@species" title="The Array[@@species] accessor property returns the Array constructor."><code>get Array[@@species]</code></a></li></ol></li><li><strong>Inheritance:</strong></li><li><strong><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function"><code>Function</code></a></strong></li><li><a href="#"><strong>Properties</strong></a><ol><li><span class="sidebar-icon"><span title="This deprecated API should no longer be used, but will probably still work."><i class="icon-thumbs-down-alt"> </i></span></span><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments" title="The function.arguments property refers to an an array-like object corresponding to the arguments passed to a function. Use the simple variable arguments instead."><code>Function.arguments</code></a></li><li><span class="sidebar-icon"><span title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span></span><s class="obsoleteElement"><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/arity" title="The arity property used to return the number of arguments expected by the function, however, it no longer exists and has been replaced by the Function.prototype.length property."><code>Function.arity</code></a></s></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/caller" title="The function.caller property returns the function that invoked the specified function."><code>Function.caller</code></a></li><li><span class="sidebar-icon"><span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span></span><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/displayName" title="The function.displayName property returns the display name of the function."><code>Function.displayName</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length" title="The length property specifies the number of arguments expected by the function."><code>Function.length</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name" title="The function.name property returns the name of the function."><code>Function.name</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype" title="The Function.prototype property represents the Function prototype object."><code>Function.prototype</code></a></li></ol></li><li><a href="#"><strong>Methods</strong></a><ol><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply" title="The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object)."><code>Function.prototype.apply()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind" title="The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called."><code>Function.prototype.bind()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call" title="The call() method calls a function with a given this value and arguments provided individually."><code>Function.prototype.call()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/isGenerator" title="The isGenerator() method determines whether or not a function is a generator."><code>Function.prototype.isGenerator()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/toSource" title="The toSource() method returns a string representing the source code of the object."><code>Function.prototype.toSource()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/toString" title="The toString() method returns a string representing the source code of the function."><code>Function.prototype.toString()</code></a></li></ol></li><li><strong><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"><code>Object</code></a></strong></li><li><a href="#"><strong>Properties</strong></a><ol><li><span class="sidebar-icon"><span title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span></span><s class="obsoleteElement"><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/count" title="The __count__ property used to store the count of enumerable properties on the object, but it has been removed."><code>Object.prototype.__count__</code></a></s></li><li><span class="sidebar-icon"><span title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span></span><s class="obsoleteElement"><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/noSuchMethod" title="The __noSuchMethod__ property used to reference a function to be executed when a non-existent method is called on an object, but this function is no longer available."><code>Object.prototype.__noSuchMethod__</code></a></s></li><li><span class="sidebar-icon"><span title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span></span><s class="obsoleteElement"><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/Parent" title="The __parent__ property used to point to an object's context, but it has been removed."><code>Object.prototype.__parent__</code></a></s></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto" title="The __proto__ property of Object.prototype is an accessor property (a getter function and a setter function) that exposes the internal [[Prototype]] (either an object or null) of the object through which it is accessed."><code>Object.prototype.__proto__</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor" title="Returns a reference to the Object constructor function that created the instance object. Note that the value of this property is a reference to the function itself, not a string containing the function's name. The value is only read-only for primitive values such as 1, true and &quot;test&quot;."><code>Object.prototype.constructor</code></a></li></ol></li><li><a href="#"><strong>Methods</strong></a><ol><li><span class="sidebar-icon"><span title="This deprecated API should no longer be used, but will probably still work."><i class="icon-thumbs-down-alt"> </i></span></span><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__" title="The __defineGetter__ method binds an object's property to a function to be called when that property is looked up."><code>Object.prototype.__defineGetter__()</code></a></li><li><span class="sidebar-icon"><span title="This deprecated API should no longer be used, but will probably still work."><i class="icon-thumbs-down-alt"> </i></span></span><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__" title="The __defineSetter__ method binds an object's property to a function to be called when an attempt is made to set that property."><code>Object.prototype.__defineSetter__()</code></a></li><li><span class="sidebar-icon"><span title="This deprecated API should no longer be used, but will probably still work."><i class="icon-thumbs-down-alt"> </i></span></span><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__" title="The __lookupGetter__ method returns the function bound as a getter to the specified property."><code>Object.prototype.__lookupGetter__()</code></a></li><li><span class="sidebar-icon"><span title="This deprecated API should no longer be used, but will probably still work."><i class="icon-thumbs-down-alt"> </i></span></span><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__" title="The __lookupSetter__ method returns the function bound as a setter to the specified property."><code>Object.prototype.__lookupSetter__()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty" title="The hasOwnProperty() method returns a boolean indicating whether the object has the specified property as own (not inherited) property."><code>Object.prototype.hasOwnProperty()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf" title="The isPrototypeOf() method checks if an object exists in another object's prototype chain."><code>Object.prototype.isPrototypeOf()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable" title="The propertyIsEnumerable() method returns a Boolean indicating whether the specified property is enumerable."><code>Object.prototype.propertyIsEnumerable()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString" title="The toLocaleString() method returns a string representing the object. This method is meant to be overridden by derived objects for locale-specific purposes."><code>Object.prototype.toLocaleString()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource" title="The toSource() method returns a string representing the source code of the object."><code>Object.prototype.toSource()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString" title="The toString() method returns a string representing the object."><code>Object.prototype.toString()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/unwatch" title="The unwatch() method removes a watchpoint set with the watch() method."><code>Object.prototype.unwatch()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf" title="The valueOf() method returns the primitive value of the specified object."><code>Object.prototype.valueOf()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/watch" title="The watch() method watches for a property to be assigned a value and runs a function when that occurs."><code>Object.prototype.watch()</code></a></li><li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf" title="The Object.setPrototypeOf() method sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null."><code>Object.setPrototypeOf()</code></a></li></ol></li></ol>
  </div>
                

                <!-- approvals -->
                

              

              </div>
            
          </div>
        </div>
      </div>
    </div> <!-- ends "main-content" -->

    
      <div class="newsletter-box">
      <div class="newsletter">
    <form id="newsletterForm" class="newsletter-form nodisable" name="newsletter-form" action="https://www.mozilla.org/en-US/newsletter/" method="post">
        <div class="newsletter-head">
            <h2 class="newsletter-teaser">Learn the best of web development</h2>
            <p class="newsletter-description">Get the latest and greatest from MDN delivered straight to your inbox.</p>
            
        </div>

        <div class="newsletter-fields">
            <input type="hidden" id="fmt" name="fmt" value="H">
            <input type="hidden" id="newsletterNewslettersInput" name="newsletters" value="app-dev" />
            <div id="newsletterErrors" class="newsletter-errors"></div>

            <div id="newsletterEmail" class="form-group newsletter-group-email">
                <label for="newsletterEmailInput" class="form-label offscreen">E-mail</label>
                <input type="email" id="newsletterEmailInput" name="email" class="form-input newsletter-input-email" required placeholder="you@example.com" size="30">
            </div>

            <div id="newsletterPrivacy" class="form-group form-group-agree newsletter-group-privacy hidden">
                <input type="checkbox" id="newsletterPrivacyInput" name="privacy" required>
                <label for="newsletterPrivacyInput">
                I'm okay with Mozilla handling my info as explained in this <a href="https://www.mozilla.org/privacy/">Privacy Policy</a>.
                </label>
            </div>
            <div id="newsletterSubmit" class="newsletter-group-submit">
                <button id="newsletter-submit" type="submit" class="button neutral newsletter-submit">Sign up now</button>
            </div>
        </div>
    </form>
    <div id="newsletterThanks" class="newsletter-thanks hidden">
        <h2>Thanks! Please check your inbox to confirm your subscription.</h2>
        <p>If you haven’t previously confirmed a subscription to a Mozilla-related newsletter you may have to do so. Please check your inbox or your spam filter for an email from us.
        </p>
    </div>
    <button id="newsletterHide" type="button" class="only-icon newsletter-hide hidden"><span>Hide Newsletter Sign-up</span><i aria-hidden="true" class="icon-times"></i></button>
</div>
      </div>
    

  <menu type="context" id="edit-history-menu">
    <menuitem data-action="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push$edit" label="Edit page"></menuitem>
    <menuitem data-action="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push$history" label="View page history"></menuitem>
  </menu>

  </div></main>

  <!-- redesign notices -->
  
<div id="redesignNotice" class="redesign-notice hidden">
  <h2>Why does MDN look different?</h2>
  <p>MDN is changing to focus just on documenting web technologies. All the same great content is still here; we’re just changing some visual elements and navigation, to help you more quickly find the web technology docs you’re looking for.</p>
  <p>But don’t worry, MDN and Mozilla are still together! In fact, we're updating MDN’s look to reflect Mozilla's new logo and colors.</p>
  <p><span class="redesign-old-logo"></span><span class="redesign-new-logo"></span></p>
  <p>
    <a href="https://blog.mozilla.org/opendesign/future-mdn-focus-web-docs/">Read more about the redesign</a> in our blog post.
    Thanks for using MDN!
  </p>
  <button id="redesignHide" type="button" class="only-icon transparent redesign-hide"><span>Hide redesign announcement</span><i aria-hidden="true" class="icon-times"></i></button>
</div>



  <!-- Footer -->
    <footer id="nav-footer" class="nav-footer">
      <div class="center">
          <a href="/en-US/" class="nav-footer-logo">MDN Web Docs</a>
          <div class="footer-group footer-group-mdn">
            <h2 class="footer-title">MDN</h2>
            <ul class="footer-list">
              <li><a href="/en-US/docs/Web">Web Technologies</a></li>
              <li><a href="/en-US/docs/Learn">Learn Web Development</a></li>
              <li><a href="/docs/MDN/About">About MDN</a></li>
              <li><a href="/en-US/docs/MDN/Feedback">Feedback</a></li>
              <li class="footer-social"><a href="https://twitter.com/mozdevnet" class="only-icon"><i aria-hidden="true" class="icon-twitter"></i> <span>Twitter</span></a></li>
              <li class="footer-social"><a href="https://github.com/mdn/" class="only-icon"><i aria-hidden="true" class="icon-github"></i> <span>GitHub</span></a></li>
            </ul>
          </div>

          <a href="https://mozilla.org" class="nav-footer-mozilla">Mozilla</a>
          <div class="footer-group footer-group-mozilla">
            <h2 class="footer-title">Mozilla</h2>
            <ul class="footer-list">
              <li><a href="https://www.mozilla.org/about/">About</a></li>
              <li><a href="https://www.mozilla.org/contact/">Contact Us</a></li>
              <li><a href="https://donate.mozilla.org/?utm_source=developer.mozilla.org&utm_medium=referral&utm_content=footer">Donate</a></li>
              <li class="footer-social"><a href="https://twitter.com/mozilla" class="only-icon"><i aria-hidden="true" class="icon-twitter"></i> <span>Twitter</span></a></li>
              <li class="footer-social"><a href="https://www.facebook.com/mozilla" class="only-icon"><i aria-hidden="true" class="icon-facebook"></i> <span>Facebook</span></a></li>
              <li class="footer-social"><a href="https://www.instagram.com/mozillagram/" class="only-icon"><i aria-hidden="true" class="icon-instagram"></i> <span>Instagram</span></a></li>
            </ul>
          </div>

          
            
  
    <form class="languages go" method="get" action="/en-US/docs/Web">
      <label for="language">Other languages:</label>
      <select id="language" class="wiki-l10n" name="next" dir="ltr">
        <option title="English (US)" value="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push" selected>
          English (US) (en-US)
        </option>
        
          <option title="Arabic" value="/ar/docs/Web/JavaScript/Reference/Global_Objects/Array/push">
            عربي (ar)
          </option>
          <option title="Catalan" value="/ca/docs/Web/JavaScript/Referencia/Objectes_globals/Array/push">
            Català (ca)
          </option>
          <option title="German" value="/de/docs/Web/JavaScript/Reference/Global_Objects/Array/push">
            Deutsch (de)
          </option>
          <option title="Spanish" value="/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/push">
            Español (es)
          </option>
          <option title="French" value="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/push">
            Français (fr)
          </option>
          <option title="Indonesian" value="/id/docs/Web/JavaScript/Reference/Global_Objects/Array/push">
            Bahasa Indonesia (id)
          </option>
          <option title="Japanese" value="/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/push">
            日本語 (ja)
          </option>
          <option title="Korean" value="/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/push">
            한국어 (ko)
          </option>
          <option title="Dutch" value="/nl/docs/Web/JavaScript/Reference/Global_Objects/Array/push">
            Nederlands (nl)
          </option>
          <option title="Polish" value="/pl/docs/Web/JavaScript/Referencje/Obiekty/Array/push">
            Polski (pl)
          </option>
          <option title="Portuguese (Brazilian)" value="/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/push">
            Português (do Brasil) (pt-BR)
          </option>
          <option title="Russian" value="/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/push">
            Русский (ru)
          </option>
          <option title="Turkish" value="/tr/docs/Web/JavaScript/Reference/Global_Objects/Array/push">
            Türkçe (tr)
          </option>
          <option title="Chinese (Simplified)" value="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push">
            中文 (简体) (zh-CN)
          </option>
          <option title="Chinese (Traditional)" value="/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/push">
            正體中文 (繁體) (zh-TW)
          </option>
      </select>
      <noscript><button type="submit">Go</button></noscript>
    </form>
  

          

          
            <ul class="footer-tos">
              <li><a href="https://www.mozilla.org/about/legal/terms/mozilla">Terms</a></li>
              <li><a href="https://www.mozilla.org/privacy/websites/">Privacy</a></li>
              <li><a href="https://www.mozilla.org/privacy/websites/#cookies">Cookies</a></li>
            </ul>

            <div class="contentinfo">
              <p>&copy; 2005-2017 Mozilla Developer Network and individual contributors.</p> <p>Content is available under <a href="/en-US/docs/MDN/About#Copyrights_and_licenses">these licenses</a>.</p>
            </div>
          
      </div>
    </footer>`

const cheerio = require('cheerio')

const $ = cheerio.load(allHTML)

// $('#Examples').next('pre');

console.log('\n\ntest text...\n\n')
console.log('test type is:  ', typeof $('#Examples').next('pre'))
console.log('\n\n')
console.log('test looks like...')
console.log('\n\n')
console.log($('#Examples').next('pre')._root["0"])
console.log('\n\n')