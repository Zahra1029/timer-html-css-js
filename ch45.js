let start = document.getElementById("start");
let end = document.getElementById("end");
let reset = document.getElementById("reset");
let sec = document.querySelector(".sec");
let min = document.querySelector(".min");
let hour = document.querySelector(".hour");
let inp = document.getElementById("number");
let timer;
let valueTime;
function timehandler2(user) {
  let hrs = Math.floor(Number(user) / 3600);
  let minutes = Math.floor((Number(user) % 3600) / 60);
  let seconds = Number(user) % 60;
  if (hrs < 10) {
    hrs = "0" + hrs;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (user == 0) {
    //clearInterval(timer);
  }
  hour.innerHTML = hrs;
  min.innerHTML = minutes;
  sec.innerHTML = seconds;
}
function timehandler() {
  let number = Number(sec.innerHTML) + 1;
  sec.innerHTML = number;
  if (Number(sec.innerHTML) < 10) {
    sec.innerHTML = "0" + sec.innerHTML;
  }
  if (number == 60) {
    let minNumber = Number(min.innerHTML) + 1;
    min.innerHTML = minNumber;
    sec.innerHTML = 0;
    if (Number(min.innerHTML) < 10) {
      min.innerHTML = "0" + min.innerHTML;
    }
  }
  if (min.innerHTML == 60) {
    min.innerHTML = 0;
    let hournumber = Number(hour.innerHTML) + 1;
    hour.innerHTML = hournumber;
    if (Number(hour.innerHTML) < 10) {
      hour.innerHTML = "0" + hour.innerHTML;
    }
  }
}
start.addEventListener("click", () => {
  start.disabled = true;

  if (inp.value) {
    timer = setInterval(() => {
      if (Number(inp.value) - 1 >= 0) {
        timehandler2(inp.value--);
      } else {
        timehandler2(0);
        clearInterval(timer);
      }
    }, 1000);
  } else {
    timer = setInterval(timehandler, 1000);
  }

  end.addEventListener("click", () => {
    clearInterval(timer);
    start.disabled = false;
  });
  reset.addEventListener("click", () => {
    clearInterval(timer);
    inp.value = "";
    sec.innerHTML = "";
    min.innerHTML = "";
    hour.innerHTML = "";
    start.disabled = false;
  });
});

// let p = document.querySelector('.mani');
// let zaz = document.querySelector('.zaz');
// reset.addEventListener('click' , ()=>{
//     p.innerHTML = 'girmizkart';
// })
// zaz.addEventListener('click' , ()=>{
//     p.innerHTML = 'mani';
// })
