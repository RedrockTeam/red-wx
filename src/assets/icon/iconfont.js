(function(window){var svgSprite='<svg><symbol id="icon-tianjia" viewBox="0 0 1025 1024"><path d="M149.959245 874.026533C349.904916 1073.972203 674.080862 1073.972203 874.026533 874.026533 1073.972203 674.080862 1073.972203 349.904916 874.026533 149.959245 674.080862-49.986425 349.904916-49.986425 149.959245 149.959245-49.986425 349.904916-49.986425 674.080862 149.959245 874.026533ZM570.336904 456.502021 742.124281 456.0033C742.124281 456.0033 796.89973 456.502021 796.89973 514.879705 796.89973 573.257389 739.48039 570.503922 739.48039 570.503922L571.121632 570.344225 569.614687 741.588391C569.614687 741.588391 570.336904 798.820198 511.150236 798.820238 451.963527 798.820238 455.661379 742.057104 455.661379 742.057104L455.390578 570.948419 286.174162 570.406696C286.174162 570.406696 225.441731 570.406696 225.588194 514.879705 225.734697 459.352674 285.594305 456.23122 285.594305 456.23122L456.001651 456.502062 455.616246 286.035664C455.616246 286.035664 451.963527 229.665216 511.150236 229.501738 570.336904 229.338219 570.336904 286.677993 570.336904 286.677993L570.336904 456.502021Z"  ></path></symbol><symbol id="icon-jiantou" viewBox="0 0 1024 1024"><path d="M767.707 519.45L308.066 71.478l-52.012 50.732L663.628 519.42 256.086 916.63l51.975 50.733z" fill="" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)