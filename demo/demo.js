const rangeSlider = require("../src/index.js");

const range = rangeSlider();
document.body.innerHTML = `<h1> Range Slider</h1>`;
const main = document.createElement("div");

main.append(range);

document.body.append(main);
