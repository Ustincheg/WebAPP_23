
const sliderItems = document.getElementsByClassName("banner__slider-item");
console.log(sliderItems);

let childrenNodeArr = Array.from(sliderItems);
console.log(childrenNodeArr);

const nextSlide = () => {

    console.log(
        childrenNodeArr.findIndex(e =>
              e.classList.contains("active"))
    )
    let curremtIndex =  childrenNodeArr.findIndex(e =>  e.classList.contains("active"))
    console.log(childrenNodeArr[curremtIndex+1])
    childrenNodeArr[curremtIndex].classList.remove("active")
    childrenNodeArr[curremtIndex+1].classList.add("active")
}
