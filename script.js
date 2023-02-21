
var float1 = document.querySelector('.floating1')
var float2 = document.querySelector('.floating2')
var stretch1 = document.querySelector('.stretch1')
var links = document.querySelectorAll('.links a img');
var brand = document.querySelector('.brand')
var sec1left = document.querySelector('div.details')
var sec1right = document.querySelector('.section.section1 .image')


function addClassList(){
    sec1left.classList.add('fadeInLeft')
    sec1right.classList.add('fadeInLeft')
}

function GenerateLinks(){

    brand.style.transform = 'translate(0px, 0px)'

    links.forEach((link, i) => {
        link.style.transitionDelay = `${0.8 + i * 0.1}s`
        link.style.translate = '0px 0px'
    })

    setTimeout(() => {
        links.forEach((link, i) => {
            link.style.transitionDelay = '0s'
        })
    }, 1000);
}


function dofloat1(y){
    float1.style.rotate = `${y*0.2}deg`
    float1.style.translate = `${y*0.4}px ${y*0.6}px`
}

function dofloat2(y){
    float2.style.rotate = `-${y*0.2}deg`
    float2.style.translate = `-${y*0.4}px 0px`
}

function doStretch(y){
    stretch1.style.height = `${10 + y*0.5}px`
}

function allScrollElements(){
    window.onscroll = (e) => {
        var y = window.scrollY
        dofloat1(y)
        dofloat2(y)
        doStretch(y)
    }
}



window.addEventListener('DOMContentLoaded', (e)=> {

    allScrollElements()
    GenerateLinks()
    addClassList()

})

