
var float1 = document.querySelector('.floating1')
var float2 = document.querySelector('.floating2')
var stretch1 = document.querySelector('.stretch1')
var links = document.querySelectorAll('.links a img');
var brand = document.querySelector('.brand')
var sec1left = document.querySelector('div.details')
var sec1right = document.querySelector('.section.section1 .image')
var indexes = document.querySelectorAll('.section.section2 .indexes .index')

var pattern = document.querySelector('div.svg')


function movePattern(y){
    pattern.style.top = `-${y * 0.4}px`
}

function doIndex(){

    indexes.forEach((index, i)=>{
        var link = index.querySelector('a')
        var bg = index.querySelector('.bg')
        bg.textContent = link.textContent
    })

}

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
        movePattern(y)
    }
}



window.addEventListener('DOMContentLoaded', (e)=> {

    allScrollElements()
    GenerateLinks()
    addClassList()
    doIndex()

    class ActivateInView {
        constructor(element) {
            this.element = element;
            this.init();
        }
    
        init() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        this.onInView(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            });
    
            observer.observe(this.element);
        }
    
        onInView(element) {
            element.classList.add('active');
        }
    }


    var fromRightToLeft_s = document.querySelectorAll('.fromRightToLeft')

    fromRightToLeft_s.forEach(item=>{
        new ActivateInView(item)
    })
    
    var fromLeftToRight_s = document.querySelectorAll('.fromLeftToRight')
    
    
    fromLeftToRight_s.forEach(item=>{
        new ActivateInView(item)
    })
    
    var fromDownToTop_s = document.querySelectorAll('.fromDownToTop')
    
    fromDownToTop_s.forEach(item=>{
        new ActivateInView(item)
    })

    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
      if (section.querySelector('.heading')) {
        section.classList.add('has-heading');
      }
    });
    
})

