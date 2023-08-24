let mainImg=document.querySelector(".main-img");
let AllImg=document.querySelectorAll(".All-img");
AllImg.forEach(x=>{
  x.addEventListener("click", function(e){
    mainImg.src=e.target.src;
  })
})

mainImg.addEventListener("mouseover", (e) => {
  e.target.style.transform = "scale(1.5)";
});

mainImg.addEventListener("mouseout", (e) => {
  e.target.style.transform = "scale(1)";
});

mainImg.addEventListener("mousemove", (e) => {
  const rect = mainImg.getBoundingClientRect();
  const X = (e.pageX - rect.left) / rect.width;
  const Y = (e.pageY - rect.top) / rect.height;
  const transformOrigin = X * 100 + '% ' + Y * 100 + '%';
  mainImg.style.transformOrigin = transformOrigin;
});
let minus=document.querySelector(".minus-btn");
let plus=document.querySelector(".plus-btn");
let values=document.querySelector(".plus-minus");
plus.addEventListener("click",function(){
    values.textContent++
})
minus.addEventListener("click",function(){
    if(values.textContent>0){
         values.textContent--;
    }
   
})
