export default function rangeSlider() {
  const el = document.createElement("div");
  el.classList.add(".container");
  const shadow = el.attachShadow({ mode: "closed" });
  const style = document.createElement("style");
  style.textContent = getTheme();

  const input = document.createElement("input");
  input.type = "range";

  shadow.append(style, input);
  return el;
}

function getTheme() {
  return `
    width: 100%;
  `;
}
