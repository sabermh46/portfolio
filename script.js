
var float1 = document.querySelector('.floating1')
var stretch1 = document.querySelector('.stretch1')
var links = document.querySelectorAll('.links a img');
var brand = document.querySelector('.brand')

function GenerateLinks(){

    brand.style.transform = 'translate(0px, 0px)'

    links.forEach((link, i) => {
        link.style.transitionDelay = `${0.8 + i * 0.1}s`
        link.style.translate = '0px 0px'
    }).then((e)=> {
        links.forEach((link) => {
            link.style.transitionDelay = `0s`
        })
    })
}


function dofloat1(y){
    float1.style.rotate = `${y*0.2}deg`
    float1.style.translate = `${y*0.4}px ${y*0.6}px`
}
function doStretch(y){
    stretch1.style.height = `${10 + y*0.5}px`
}

function allScrollElements(){
    window.onscroll = (e) => {
        var y = window.scrollY
        dofloat1(y)
        doStretch(y)
        console.log(y)
    }
}



window.addEventListener('DOMContentLoaded', (e)=> {

    allScrollElements()
    GenerateLinks()

})

