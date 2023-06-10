let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
let output = document.querySelector(".container");
let audio = document.querySelector(".audio");

// countdown timer

// function countdown(l){
//     if (l < 0){
//         return;
//     }
//     console.log(l);
//     countdown(l-1);
// }
// countdown(10);

// input2.addEventListener("keypress", (e) => {
//   if (e.key === "Enter") {
//     let counter = input1.value;
//     let factor = input2.value;
//     const interval = setInterval(() => {
//       counter -= factor;
//       output.innerHTML = counter;
//       if (counter < 1) {
//         clearInterval(interval);
//         // audio.play();
//         output.innerHTML = "Times Up!";
//       }
//     }, 1000);
//   }
// });

let counter = input1.value; 
let factor = input2.value;
input2.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        Calc(counter);
      }
  });
  
  function Calc(counter) {
      const interval = setTimeout(() => {
          if (counter < 1) {
            clearTimeout(interval);
            audio.play();
            output.innerHTML = "Times Up!";
            return;
          }
          console.log(counter);
          Calc(counter - factor);
          output.innerHTML = counter;
      }, 1000);
  }