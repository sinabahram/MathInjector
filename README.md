# MathInjector
A JavaScript bookmarklet to extract MathML from various elements on a page and insert it as raw MathML, along with MathJax,  for assistive technologies to access.

# Explanation
When this bookmarklet is run, mathml from an image's data-mathml attribute or other attributes (to be added in the future) is extracted and just inserted into the page. Future revisions of this bookmarklet will add some visual styling, an expand/collapse button for the math, etc.

# Current Issue
Currently, this doesn't work when run as a bookmarklet. Is there a race condition going on?
