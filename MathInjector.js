var mj = document.createElement('script');
mj.setAttribute('src', 'https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML');
document.body.appendChild(mj);

var imgs = document.images;
for(var i=0; i<imgs.length; i++) {
	var img = imgs[i];
	var mathml = img.dataset.mathml;
	var div = document.createElement('div');
	div.innerHTML = mathml;
	var math = div.firstChild;
	math.setAttribute('display' ,'block');
	img.parentNode.insertBefore(math, img.nextSibling);
}
