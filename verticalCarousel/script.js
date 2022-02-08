const buttons = document.querySelectorAll("[data-carousel-btn]")
console.log(buttons)
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = Number(button.dataset.carouselBtn);
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = offset;
    if(Number([...slides.children].indexOf(activeSlide)) === newIndex) return;
    newIndex = newIndex <= 0 ? 0 : offset; 
    if (newIndex >= slides.children.length) newIndex = slides.children.length;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  })

}) 

const allSlides = document.querySelectorAll("[data-image]");
let time = Date.now();
console.log(time)
let index = 0;


document.addEventListener("wheel", (e) => {
  if(time <= time + 1000) {
    e.stopPropagation();
  };
  // e.preventDefault();
  const activeSlide = document.querySelector("[data-active]");
  let newIndex = index;
  //wheel up
  if(e.deltaY < 0){
    index = index <= 0 ? 0 : index - 1;
    newIndex = index <= 0 ? 0 : newIndex - 1
    console.log('down', index,newIndex)
    allSlides[index].dataset.active = true;
    delete activeSlide.dataset.active;
  }else {
    //wheel down
    index = index >= allSlides.length - 1 ? allSlides.length - 1 : index + 1;
    newIndex = index >= allSlides.length - 1 ? allSlides.length - 1 : newIndex + 1;
    console.log('up', index, newIndex)
    allSlides[index].dataset.active = true;
    delete activeSlide.dataset.active;
  }
  // allSlides[newIndex]
  // setTimeout(() => {}, 500);
  // e.stopPropagation();
  return;
})
