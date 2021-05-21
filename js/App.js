//fucntions

const showNumbers = (e) => {
  if (e.target.classList.contains("opt")) {
    show.value += e.target.textContent;
    const str = show.value.substring(show.value.length - 1);
    //find Plus Index of show value
    const plusIndex = show.value.lastIndexOf("+");

    //add Numbers to list

    oprators.forEach((opt) => {
      if (str === opt) {
        //Add show value to result
        result.value = show.value.slice(0, show.value.length - 1);
      }
    });





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
