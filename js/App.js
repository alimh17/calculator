//fucntions

const showNumbers = (e) => {
  if (e.target.classList.contains("opt")) {
    //find Plus Index of show value
    const plusIndex = show.value.lastIndexOf("+");
    const minIndex = show.value.lastIndexOf("\u2212");

    show.value += e.target.textContent;

    




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
