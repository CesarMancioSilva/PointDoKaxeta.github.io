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

const confirmSend=()=>{
    document.querySelector(".tablet").classList.add('hidden')
    document.querySelector(".completeSend").classList.remove('hidden')
}

const nextSlideOp=()=>{
    document.querySelector('.slideMain').classList.add('hidden')
    document.querySelector('.slideOption').classList.remove('hidden')
    document.querySelector('.backHome').classList.add('hidden')
    document.querySelector('.backSlide').classList.remove('hidden')
    document.querySelector('.openConfirmBtn').classList.remove('hidden')
}
const previousSlideOp=()=>{
    document.querySelector('.slideMain').classList.remove('hidden')
    document.querySelector('.slideOption').classList.add('hidden')
    document.querySelector('.backHome').classList.add('hidden')
    document.querySelector('.backSlide').classList.remove('hidden')
    document.querySelector('.openConfirmBtn').classList.add('hidden')
}
