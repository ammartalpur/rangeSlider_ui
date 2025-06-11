module.exports = range_slider

function range_slider(opts) {
  const { min, max } = opts || { min: 0, max: 100 }
  const el = document.createElement("div")
  el.classList.add("container")

  const shadow = el.attachShadow({ mode: "closed" })

  shadow.innerHTML = `
    <style>${getTheme()}</style>
    <input type="range" min="${min}" max="${max}" />
    <div class="bar">
      <div class="ruler"></div>
      <div class="fill"></div>
    </div>
  `;

  const [style, input, bar] = shadow.children
  const fill = shadow.querySelector(".fill")

  input.oninput = handle_input

  function handle_input(e) {
    const val = Number(e.target.value)
    fill.style.width = `${(val / max) * 100}%`
  }

  return el
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
  background-color: var(--grey);
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
input::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: var(--white);
  border: 1px solid var(--gray); /* ✅ corrected */
  cursor: pointer;
  box-shadow: 0 3px 6px rgba(0, 0, 0, .4);
  transition: background-color .3s, box-shadow .15s linear;
}
  input::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: var(--white);
  border: 1px solid var(--gray); /* Corrected spelling */
  cursor: pointer;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4);
  transition: background-color 0.3s, box-shadow 0.15s linear;
}

input::-webkit-slider-thumb:hover {
  box-shadow: 0 0 14px rgba(94, 176, 245, 0.8); /* Corrected alpha */
}

/* Firefox thumb styles */
input::-moz-range-thumb {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: var(--white);
  border: 1px solid var(--grey);
  cursor: pointer;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4);
  transition: background-color 0.3s, box-shadow 0.15s linear;
}

input::-moz-range-thumb:hover {
  box-shadow: 0 0 14px rgba(94 , 176 , 245 , .8)

 
  `;
}
