# MathInjector
A JavaScript bookmarklet to extract MathML from various elements on a page and insert it as raw MathML, along with MathJax,  for assistive technologies to access.

# Explanation
When this bookmarklet is run, mathml from an image's data-mathml attribute or other attributes (to be added in the future) is extracted and just inserted into the page. Future revisions of this bookmarklet will add some visual styling, an expand/collapse button for the math, etc.

# How to Include
```
<a href="javascript:%20(function()%7Bvar%20yourURL=(window.location.protocol=='http:'?'https://pac.bz/MathInjector.js':'https://pac.bz/MathInjector.js');function%20getScript(url,success)%7Bvar%20script=document.createElement('script');script.src=url;var%20head=document.getElementsByTagName('head')%5B0%5D,done=false;script.onload=script.onreadystatechange=function()%7Bif(!done&&(!this.readyState%7C%7Cthis.readyState=='loaded'%7C%7Cthis.readyState=='complete'))%7Bdone=true;success();script.onload=script.onreadystatechange=null;head.removeChild(script);%7D%7D;head.appendChild(script);%7D%20getScript(yourURL,function()%7B%7D);%7D)();">
Math Injector
</a>
```

# How to Test
There's an image with a data-mathml attribute on the following page:
http://a11yideas.com/csun/math/

We're successful wen we can get the math from the data-math attribute to show up after that image in the dom. We'll worry about prettifying it later.

# Current Issue
Currently, this doesn't work when run as a bookmarklet. Is there a race condition going on?
