//fucntions

const showNumbers = (e) => {
  if (e.target.classList.contains("opt")) {
    // let str = "";
    // let res = 0;
    // let oprt = "";
    // let numOne = 0;
    // let numTwo = 0;
    let plusArr , minArr , optBtn;
    show.value += e.target.textContent;
    //find Plus Index of show value
    const plusIndex = show.value.lastIndexOf("+");
    const minIndex = show.value.lastIndexOf("\u2212");


    if(show.value.charAt(plusIndex) === "+"){
      plusArr = show.value.split("+") 


      if (plusArr[2]) {
        result.value = +plusArr[0] + +plusArr[1];
        show.value = "";
        plusArr = [];
        plusArr[0] = result.value;
        show.value = result.value;
      }
    }

    if(show.value.charAt(minIndex) === "\u2212"){

      console.log("yes");
      
      let minArr = show.value.split("\u2212")
      if (minArr[2]) {
        result.value = +minArr[0] - +minArr[1];
        show.value = "";
        minArr = [];
        minArr[0] = result.value;
        show.value = result.value;
      }

    }




    if (show.value.charAt(plusIndex) === "+") {
      let optBtn = document.querySelectorAll(".oparators > button");

      optBtn.forEach((item) => {
        item.disabled = true;
      });
    }
    if (show.value.charAt(minIndex) === "\u2212") {
      optBtn = document.querySelectorAll(".oparators > button");

      optBtn.forEach((item) => {
        item.disabled = true;
      });
    }


    document.querySelector(".equl").addEventListener("click", () => {
      
      optBtn = document.querySelectorAll(".oparators > button");
      optBtn.forEach((item) => {
        item.disabled = false;
      });


        
  
        if (plusArr[2]) {
          result.value = +plusArr[0] + +plusArr[1];
          show.value = "";
          plusArr = [];
          plusArr[0] = result.value;
          show.value = result.value;
        }

      // result.value = +plusArr[0] + +plusArr[1];
      // show.value = "";
      // plusArr = [];
      // plusArr[0] = result.value;
      // show.value = result.value;

      // result.value = +minArr[0] - +minArr[1];
      // show.value = "";
      // minArr = [];
      // minArr[0] = result.value;
      // show.value = result.value;

      // console.log(minArr);

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
