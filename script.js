const tlFeatures = gsap.timeline({delay: 5});

tlFeatures.fromto('.feature', {y:-300, opacity:0});
        
const tllogo = gsap.timeline();

tlFeatures.fromto('.logo', {y:-300, opacity:0});

var btn = document.getElementsByClassName ("btn");
var banner = document.getElementById("banner");

btn.onclick = function(){
    banner.src="Assets/Image 2.png";
}

btn.onclick = function(){
    banner.src="Assets/Image 2.png";
}

btn.onclick = function(){
    banner.src="Assets/Image 2.png";
}
