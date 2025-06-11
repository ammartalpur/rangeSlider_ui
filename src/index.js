module.exports = rangeSlider;
function rangeSlider(opts) {
  const { min, max } = opts || { min: 0, max: 100 };
  const el = document.createElement("div");
  el.classList.add("container");
  const shadow = el.attachShadow({ mode: "closed" });
  const style = document.createElement("style");
  style.textContent = getTheme();

  const input = document.createElement("input");
  input.type = "range";
  input.oninput = handle_input;
  input.min = min;
  input.max = max;
  const bar = document.createElement("div");
  bar.classList.add("bar");

  const ruler = document.createElement("div");
  ruler.classList.add("ruler");

  const fill = document.createElement("div");
  fill.classList.add("fill");

  bar.append(ruler, fill);
  shadow.append(style, input, bar);
  return el;

  function handle_input(e) {
    const val = Number(e.target.value);
    console.log(val);
    fill.style.width = `${(val / max) * 100}%`;
  }
}

function getTheme() {
  return `
    :host { box-sizing: border-box; }
    *, *::before, *::after { box-sizing: inherit; }

  :host {
  --white: hsl(0, 0%, 100%, 1);
  --transparent: hsl(0, 0%, 0%, 0);
  --grey: hsl(0, 0%, 86%, 1);
  --blue: hsl(207, 88%, 66%, 1);
  position: relative;
  width: 100%;
  height: 100px;
}

input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  -webkit-appearance: none;
  margin: 0;
  z-index: 2;
  background-color: var(--transparent);
}


.bar {
  position: absolute;
  top: 4px;
  left: 0;
  z-index: 0;
  height: 10px;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--gray);
  display: flex;
  flex-direction: column;
  justify-content: center;
}



.ruler {
  position: absolute;
  height: 6px;
  width: 100%;
  transform: scale(-1, 1);
  background-size: 20px 8px;
  background-image: repeating-linear-gradient(to right,
    var(--grey) 0px,
    var(--grey) 17px,
    var(--white) 17px,
    var(--white) 20px
  );
}

.fill {
  position: absolute;
  height: 100%;
  width: 30%;
  background-color: var(--blue);
}

 
  `;
}
