const rangeSlider = require("../src/index.js")

const range = rangeSlider({ min: 0, max: 100 })
document.body.innerHTML = `<h1> Range Slider</h1>`
const main = document.createElement("div")

main.append(range)

document.body.append(main)
