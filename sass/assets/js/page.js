
let first=document.querySelector(".timing1");
let second=document.querySelector(".timing2");
let third=document.querySelector(".timing3");
let fourth=document.querySelector(".timing4");
let img=document.querySelector(".img");
let smallBox=document.querySelector(".small-box");
let icon=document.querySelectorAll(".icon");
let fluid=document.querySelector(".container-fluid");
setInterval(timing1, 7000);

icon.forEach(a=>{
  a.addEventListener("click",timing1);
})

function timing1() {
  const elementsToToggle = [first, second, third, fourth, smallBox, img];

  elementsToToggle.forEach(element => {
    element.classList.add("move");
  });

  setTimeout(() => {
    elementsToToggle.forEach(element => {
      element.classList.remove("move");});
    
  }, 2000);
  
setTimeout(()=>{ img.src =img.src == 'https://htmldemo.net/jesco/jesco/assets/images/slider-image/slider-1.png'
      ? 'https://htmldemo.net/jesco/jesco/assets/images/slider-image/slider-2.png'
      : 'https://htmldemo.net/jesco/jesco/assets/images/slider-image/slider-1.png';},1000)
fluid.classList.toggle("back");
}

let days = document.querySelector(".data1");
let hours = document.querySelector(".data2");
let mins = document.querySelector(".data3");
let sec = document.querySelector(".data4");

let interval = setInterval(watch, 1000);

function watch() {
    sec.textContent--;

    if (sec.textContent < 0) {
        sec.textContent = 59;
        mins.textContent--;

        if (mins.textContent < 0) {
            mins.textContent = 59;
            hours.textContent--;

            if (hours.textContent < 0) {
                hours.textContent = 23;
                days.textContent--;

                if (days.textContent < 0) {
                    clearInterval(interval);
                }
            }
        }
    }
}

watch();


