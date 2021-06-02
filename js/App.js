//fucntions

const showNumbers = (e) => {
  let lastChar = result.value.slice(-1);

  if (e.target.classList.contains("opt")) {
    let condition = false;

    //Display the number entered by the user
    show.value += e.target.textContent;

    if (e.target.classList.contains("btn-sm")) {
      //If the user clicks on it, you will see the operation she wants to perform
      result.value = show.value;
    }

    // If the last character entered was one of these
    oprators.map((item) => {
      if (result.value.slice(-1) === item) {
        // And if one of them was clicked (Oprators)
        if (e.target.classList.contains("btn-sm")) {
          show.value = show.value.slice(0, -1);
          condition = true;
        }
      }
    });

    // If the condition is correct, the displayed value will be empty

    condition ? (show.value = "") : null;
  }

  // If an equal click was made
  if (e.target.classList.contains("equl")) {
    // If the last character was equal to plus
    if (lastChar === "+") {
      let resPlus = +result.value.slice(0, -1) + +show.value;
      result.value = result.value + show.value + e.target.textContent;
      show.value = resPlus;
      // If the last character was equal to minus
    } else if (lastChar === "\u2212") {
      let resMin =
        lastChar === "\u2212" ? +result.value.slice(0, -1) - +show.value : null;
      result.value = result.value + show.value + e.target.textContent;
      show.value = resMin;
      // If the last character was equal to Multiplication
    } else if (lastChar === "\u00D7") {
      let resMulti =
        lastChar === "\u00D7" ? +result.value.slice(0, -1) * +show.value : null;
      result.value = result.value + show.value + e.target.textContent;
      show.value = resMulti;
      // And if the last character was equal to Divide
    } else if (lastChar === "\u00F7") {
      let res = +result.value.slice(0, -1) / +show.value;
      result.value = result.value + show.value + e.target.textContent;
      show.value = res;
    }
  }

  // If you click on Clean, we will delete everything
  if (e.target.classList.contains("clean")) {
    show.value = "";
    result.value = "";
  }
};

//variablese

const show = document.querySelector(".first");
const result = document.querySelector(".last");
const oprators = ["\u002B", `\u2212`, "\u00D7", "\u00F7"];

//EventListeners

document.querySelector(".main").addEventListener("click", showNumbers);
