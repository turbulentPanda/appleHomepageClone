const img = document.querySelector(".sub-sub-title");
let startingSrc = img.getAttribute('src');
let secondSrc = "assets/watch_sub_subheading_underline.png";

img.onmouseover = () => { img.src = secondSrc };
img.onmouseout = () => { img.src = startingSrc };