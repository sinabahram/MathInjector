/**
* @Author Sina Bahram (sina@sinabahram.com)
*/

function replaceAll(find, replace, str) {
	return str.replace(new RegExp(find, 'g'), replace);
}

var mj = document.createElement('script');
mj.setAttribute('src', 'https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML');
document.body.appendChild(mj);

var imgs = document.images;
for(var i=0; i<imgs.length; i++) {
	var img = imgs[i];
//	alert('checking image: '+i);
	if(!('mathml' in img.dataset)) {
		continue;
	}

	alert('image '+i+' had data-mathml');
	var mathml = img.dataset.mathml;



//	alert('Pre Mathml='+mathml);

/*
* replace chunk characters from WIRIS
* the following only works within console (where it works perfectly), but not when run as a bookmarklet
*/
	mathml = replaceAll('\xa8', '"', mathml);
	mathml = replaceAll('\xa7', '&', mathml);
	mathml = replaceAll('\xab', '<', mathml);
	mathml = replaceAll('\xbb', '>', mathml);

//	alert('post mathml = '+mathml);

	var tmpDiv = document.createElement('div');
	tmpDiv.innerHTML = mathml;
	var mathMLNode = tmpDiv.firstChild;
//	alert("m = "+mathMLNode);
	mathMLNode.setAttribute('display' ,'block');
	img.parentNode.insertBefore(mathMLNode, img.nextSibling);
}
