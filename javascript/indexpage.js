const indexImg = document.getElementById("#index-img");

const approxRatio = 1.52;
const windowRatio = document.body.clientHeight / document.body.clientWidth;
console.log("Window Ratio: ", windowRatio);

// TODO: do that on window resize
/*indexImg.className = `${
  document.body.clientHeight / document.body.clientWidth > approxRatio
    ? "index-top-image index-top-image-setheight"
    : "index-top-image index-top-image-setwidth"
}`;
*/
