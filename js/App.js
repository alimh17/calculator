//fucntions

const showNumbers = (e) => {
  if (e.target.classList.contains("opt")) {
    //find Plus Index of show value
    const plusIndex = show.value.lastIndexOf("+");
    const minIndex = show.value.lastIndexOf("\u2212");

    show.value += e.target.textContent;

    if (show.value.slice(plusIndex) === "+") {
      result.value = show.value;
      show.value = show.value.slice(0, plusIndex);
    }
    if (show.value.slice(plusIndex) === "\u2212") {
      result.value = show.value;
      show.value = show.value.slice(0, minIndex);
    }

    if (result.value.length > 0 && e.target.value === "-") {
      result.value = show.value;
      show.value = show.value.slice(0, plusIndex);
    }
    if (result.value.length > 0 && e.target.value === "*") {
      result.value = show.value;
      show.value = show.value.slice(0, plusIndex);
    }
    if (result.value.length > 0 && e.target.value === "/") {
      result.value = show.value;
      show.value = show.value.slice(0, plusIndex);
    }




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
