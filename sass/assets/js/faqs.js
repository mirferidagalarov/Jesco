const accordionHeaders = document.querySelectorAll('.accordion-faqs');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const hiddenContent = header.querySelector(".accordion-hidden-div");
        const clickColor = header.querySelector(".click-color");
        const clickRotate = header.querySelector(".click-color-and-rotate");
        accordionHeaders.forEach(x => {
            if(x!==header){
           let hiddenX =x.querySelector(".accordion-hidden-div");
           let colorX =x.querySelector(".click-color");
           let rotateX =x.querySelector(".click-color-and-rotate");
           hiddenX.classList.remove('open');
           colorX.classList.remove("clickColor");
           rotateX.classList.remove("clickRotate");}
        })
        hiddenContent.classList.toggle('open');
        clickColor.classList.toggle("clickColor");
        clickRotate.classList.toggle("clickRotate");

    });
});
