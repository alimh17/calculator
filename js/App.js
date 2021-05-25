//fucntions

const showNumbers = (e) => {
  if (e.target.classList.contains("opt")) {
    //find Plus Index of show value
    const plusIndex = show.value.lastIndexOf("+");
    const minIndex = show.value.lastIndexOf("\u2212");

    let condition = false;

    show.value += e.target.textContent;

    if (e.target.classList.contains("btn-sm")) {
      result.value = show.value;
    }

    if (
      result.value.slice(-1) === "+" ||
      result.value.slice(-1) === "\u2212" ||
      result.value.slice(-1) === "\u00D7" ||
      result.value.slice(-1) === "\u00F7"
    ) {
      if (e.target.classList.contains("btn-sm")) {
        show.value = show.value.slice(0, -1);
        condition = true;
      }
    }

    condition ? show.value = "" : null

    

  }

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
