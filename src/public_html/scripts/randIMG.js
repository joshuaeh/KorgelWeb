var gallery = new Array();
gallery[0] = new Array("a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","a11","a12");
gallery[1] = new Array("b1","b2","b3","b4","b5","b6","b7","b8","b9","b10","b11","b12");
gallery[2] = new Array("c1","c2","c3","c4","c5","c6","c7","c8","c9","c10","c11","c12");

function pickImageFrom(whichGallery)
{
var idx = Math.floor(Math.random() * gallery[whichGallery].length);
document.write('<img src="headerIMGs/' + gallery[whichGallery][idx] + '_thumb.png">');
}