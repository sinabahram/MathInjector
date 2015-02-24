# MathInjector
A JavaScript bookmarklet to extract MathML from various elements on a page and insert as raw MathML for assistive technologies to access.

# Explanation
When this bookmarklet is run, mathml from an image's data-mathml attribute or other attributes (to be added in the future) is extracted and just inserted into the page. Future revisions of this bookmarklet will add some visual styling, an expand/collapse button for the math, etc.

# Live Example
Add the following link to your bookmarklets, either by dragging it to your bookmarks or by right clicking it and adding it that way.

[Math Injector Bookmarklet](javascript: (function () { var jsCode = document.createElement('script'); jsCode.setAttribute('src', 'http://pac.bz/MathInjector.js'); document.body.appendChild(jsCode); }());)

