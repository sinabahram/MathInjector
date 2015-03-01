// The below line is the whole bookmarklet but on one line for easier testing/copying/pasting.
// To regenerate it after making changes, use BookMarkletBuilder.pl
// javascript:function%20replaceAll(find,%20replace,%20str)%20{return%20str.replace(new%20RegExp(find,%20%27g%27),%20replace);}(function()%20{var%20mj%20=%20document.createElement(%27script%27);mj.setAttribute(%27src%27,%20%27https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML%27);document.body.appendChild(mj);var%20imgs%20=%20document.images;for(var%20i=0;%20i<imgs.length;%20i++)%20{var%20img%20=%20imgs[i];if(!(%27mathml%27%20in%20img.dataset))%20{continue;}var%20mathml%20=%20img.dataset.mathml;mathml%20=%20replaceAll(%27\xa8%27,%20%27%22%27,%20mathml);mathml%20=%20replaceAll(%27\xa7%27,%20%27&%27,%20mathml);mathml%20=%20replaceAll(%27\xab%27,%20%27<%27,%20mathml);mathml%20=%20replaceAll(%27\xbb%27,%20%27>%27,%20mathml);var%20tmpDiv%20=%20document.createElement(%27div%27);tmpDiv.innerHTML%20=%20mathml;var%20mathMLNode%20=%20tmpDiv.firstChild;mathMLNode.setAttribute(%27display%27%20,%27block%27);img.parentNode.insertBefore(mathMLNode,%20img.nextSibling);}})();

/**
* @Author Sina Bahram (sina@sinabahram.com)
*/

function replaceAll(find, replace, str) {
	return str.replace(new RegExp(find, 'g'), replace);
}

(function() {
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

//	alert('image '+i+' had data-mathml');
	var mathml = img.dataset.mathml;

//	alert('Pre Mathml='+mathml);

/*
* replace junk characters from WIRIS
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
})();
