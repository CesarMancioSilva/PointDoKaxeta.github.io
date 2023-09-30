// home
// import { Home } from "../src/components/Home.js"
// import { previousSlide } from "../src/components/Home.js"
// import { nextSlide } from "../src/components/Home.js"
//
// import { Montagem } from "../src/components/Montagem.js"
// import { genericList} from "../src/components/GenericList.js"
const menuButton = document.querySelector('.toggle')
const menu = document.querySelector('.menu')
const btnNav = document.querySelector('.btnNav')

var toggle=false
document.querySelector('.toggle').addEventListener('click',()=>{
    let screenWdSize = window.innerWidth
    
    if(toggle==false){
        menuButton.classList.remove("bi-list")
        menuButton.classList.add("bi-x-lg")
        if(screenWdSize>=565){
            
            
            menu.classList.remove('menuSmallScreen')
            if(!menu.classList.contains('menuLargeScreen')){
                menu.classList.add('menuLargeScreen')
            }
            menu.classList.remove('top-[-400px]')
            menu.classList.remove('left-[-100%]')
            menu.classList.add('left-0')
            menu.classList.add('top-[60px]')
        }else{
            
            menu.classList.remove('menuLargeScreen')
            if(!menu.classList.contains('menuSmallScreen')){
                menu.classList.add('menuSmallScreen')
            }
            menu.classList.remove('top-[-400px]')
            menu.classList.add('top-[60px]')
            menu.classList.remove('left-[-100%]')
            menu.classList.add('left-0')
        }
        toggle=true 
    }else{
        if(screenWdSize>=565){
            menu.classList.remove('top-[60px]')
            menu.classList.add('top-[-400px]')
        }else{
            menu.classList.remove('left-0')
            menu.classList.add('left-[-100%]')
        }
        menuButton.classList.remove("bi-x-lg")
        menuButton.classList.add("bi-list")
        toggle=false 
    }
})



document.querySelector('.iconCart').addEventListener('mouseover',(e)=>{
    e.target.classList.remove('bi-cart')
    e.target.classList.add('bi-cart-fill')
})
document.querySelector('.iconCart').addEventListener('mouseout',(e)=>{
    e.target.classList.remove('bi-cart-fill')
    e.target.classList.add('bi-cart')
})
//bi bi-x-lg

// const navButtons = [...document.querySelectorAll('.btnNavigate')]
// const sessions = [...document.querySelectorAll('.session')]


// navButtons.map(button => {
//     button.addEventListener('click', event => {
//         navButtons.map((navButton)=>{
//             navButton.classList.remove('btnSelected')
//             if(!navButton.classList.contains('btnOption') && !navButton.classList.contains('card')){
//                 navButton.classList.add('btnOption')
//             }
//         })
        
//         button.classList.add('btnSelected')
//         console.log(button.classList.contains('home'))

//         sessions.map((session)=>{
//             if(!session.classList.contains('hidden')){
//                 session.classList.add('hidden')
//             }
//         })
//         console.log(button.classList)
//         if(button.classList.contains('home')){
//             // Home()
//             document.querySelector('.home_session').classList.remove('hidden')
//         }else if(button.classList.contains('montagem_acai')){
//             Montagem()
//             document.querySelector('.montagem_acai_session').classList.remove('hidden')
//         }else if(button.classList.contains('genericList')){
            
//             document.querySelector('.options_generic_list_session').classList.remove('hidden')
//         }
//     })
// })



// const homeSession = document.querySelector('.home_session')
// const montagemAcai = document.querySelector('.home_session')
// const option_generic_list = document.querySelector('.options_generic_list_session')
// const cartSession= document.querySelector('.home_session')
 const slide = document.querySelector('.slide')

// export {montagemAcai,option_generic_list,cartSession,slide}

// Home()
document.querySelector('.bi-chevron-left').addEventListener('click',()=>{
    previousSlide()
})
document.querySelector('.bi-chevron-right').addEventListener('click',()=>{
    nextSlide()
})

var slideStage = 0
var totalImgs = [...slide.getElementsByTagName("img")]
var prcntg = (1/totalImgs.length)*100
console.log(prcntg)
const nextSlide=()=>{
    if(slideStage == (totalImgs.length-1)){
        slideStage = 0
        slide.style.transform = `translateX(-${prcntg*slideStage}%)`
    }else{
        
        slideStage+=1
        slide.style.transform = `translateX(-${prcntg*slideStage}%)`
    }
    setCircle(slideStage)
}
var ncarouselIntervId = setInterval(nextSlide, 4000);
const previousSlide=()=>{
    if(slideStage == 0){
        slideStage=totalImgs.length - 1
        slide.style.transform = `translateX(-${prcntg*slideStage}%)`
    }else{
        slideStage-=1
        slide.style.transform = `translateX(-${prcntg*slideStage}%)`
    }
    setCircle(slideStage)
}
const setCircle=(i)=>{
    var circles = [...document.querySelectorAll(".circleCarousel")]
    
    circles.map((circle,index)=>{
        circle.classList.remove('bg-primary')
        if(index == i){
            circle.classList.add('bg-primary')
        }
    })
}
const carouselLoad=()=>{
    for(let i=0;i<totalImgs.length;i++){
        let circlediv = document.createElement('div')
        circlediv.classList.add('circleCarousel')
        if(i==0){
            circlediv.classList.add('bg-primary')
        }
        document.querySelector('.image_circle_contain').appendChild(circlediv)
        document.querySelector('.image_circle_contain').style.transform="translate(-50%,-50%)"
    }
}
carouselLoad()

//Lista generica
