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


var slideStage=0

var totalSlides = [...document.querySelectorAll('.slide')]
const listLoad=()=>{
    console.log(totalSlides)
    for(let i=0;i<totalSlides.length;i++){
        
        let circlediv = document.createElement('div')
        circlediv.classList.add('circleCarousel')
        if(i==0){
            circlediv.classList.add('bg-primary')
        }
        document.querySelector('.image_circle_contain').appendChild(circlediv)
    }
    
    
    totalSlides.map((slide,i)=>{
        console.log(slide,i)
        if(i!=slideStage){
            slide.classList.add('hidden')
            // let hiddenItems = [...slide.getElementsByClassName('.item')]
            // hiddenItems.map((item)=>{
               
            //     item.classList.add('hidden')
            // })
        }
    })

}

listLoad()

const nextSlide=()=>{
    console.log(slideStage)
    if(slideStage==0){
        document.querySelector('.backSlide').classList.remove('hidden')
        document.querySelector('.backHome').classList.add('hidden')
        slideStage++
    }else if(slideStage == totalSlides.length-2){
        document.querySelector('.openConfirmSend').classList.remove('hidden')
        document.querySelector('.nextSlide').classList.add('hidden')
        slideStage++
    }
    else{
        slideStage++
    }
    changeSlide()
}
const previousSlide=()=>{
    if(slideStage==1){
        document.querySelector('.backSlide').classList.add('hidden')
        document.querySelector('.backHome').classList.remove('hidden')
        slideStage--
    }else if(slideStage == totalSlides.length-1){
        document.querySelector('.openConfirmSend').classList.add('hidden')
        document.querySelector('.nextSlide').classList.remove('hidden')
        slideStage--
    }else{
        slideStage--
    }
    changeSlide()
    
    

}
const changeSlide=()=>{
    totalSlides.map((slide,i)=>{
        slide.classList.remove('hidden')
        if(i!=slideStage){
            slide.classList.add('hidden')
        }
    })
    let circles=[...document.querySelectorAll('.circleCarousel')]
    circles.map((circle,i)=>{
        circle.classList.remove('bg-primary')
        if(i==slideStage){
            circle.classList.add('bg-primary')
        }
    })
}
const confirmSend=()=>{
    document.querySelector(".tablet").classList.add('hidden')
    document.querySelector(".completeSend").classList.remove('hidden')
}