
const sliderItems = document.getElementsByClassName("banner__slider-item");

let childrenNodeArr = Array.from(sliderItems);

const sliderCombinate = document.querySelector(".banner__slider-combination");
 

function createCombinate(){

    for(let i = 0; i < childrenNodeArr.length; i++){
        sliderCombinate.innerHTML += '<li class="banner__slider-combination-item" data-index="'+i+'"></li>'
    }

    document.querySelector(".banner__slider-combination-item").classList.add("active");

}
createCombinate();


let moveIndex
const sliderItemActive = Array.from(document.getElementsByClassName('banner__slider-combination-item'));
const sliderComd = Array.from(document.getElementsByClassName('banner__slider-combination'));

sliderComd.forEach((li) => {
    li.addEventListener('click', (e)=>{
      e.preventDefault();
      moveIndex = e.target.getAttribute('data-index');
      doMove(moveIndex);
    });
});

function doMove(moveIndex){
    let curremtIndex =  childrenNodeArr.findIndex(e =>  e.classList.contains("active"))
    if(moveIndex >=0 &&  moveIndex < childrenNodeArr.length ){
        childrenNodeArr[curremtIndex].classList.remove("active")
        childrenNodeArr[moveIndex].classList.add("active")
        sliderItemActive[curremtIndex].classList.remove("active")
        sliderItemActive[moveIndex].classList.add("active")
    }
}


const nextSlide = () => {

    let curremtIndex =  childrenNodeArr.findIndex(e =>  e.classList.contains("active"))
    if(curremtIndex == childrenNodeArr.length-1){
        childrenNodeArr[curremtIndex].classList.remove("active")
        childrenNodeArr[0].classList.add("active")
        sliderItemActive[curremtIndex].classList.remove("active")
        sliderItemActive[0].classList.add("active")
    }
    else{
        childrenNodeArr[curremtIndex].classList.remove("active")
        childrenNodeArr[curremtIndex+1].classList.add("active")
        sliderItemActive[curremtIndex].classList.remove("active")
        sliderItemActive[curremtIndex+1].classList.add("active")
    }
}

const prevSlide = () => {

    let curremtIndex =  childrenNodeArr.findIndex(e =>  e.classList.contains("active"))
    if(curremtIndex == 0){
        childrenNodeArr[curremtIndex].classList.remove("active")
        childrenNodeArr[childrenNodeArr.length-1].classList.add("active")
        sliderItemActive[curremtIndex].classList.remove("active")
        sliderItemActive[childrenNodeArr.length-1].classList.add("active")
    }
    else{
        childrenNodeArr[curremtIndex].classList.remove("active")
        childrenNodeArr[curremtIndex-1].classList.add("active")
        sliderItemActive[curremtIndex].classList.remove("active")
        sliderItemActive[curremtIndex-1].classList.add("active")
    }
}
