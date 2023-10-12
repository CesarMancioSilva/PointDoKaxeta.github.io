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



const confirmSend=()=>{
    document.querySelector(".formCard").classList.add('hidden')
    if(document.querySelector(".pagOp").value == 'pix'){
        document.querySelector('.pixCard').classList.remove('hidden')
    }else{

        document.querySelector(".completeSend").classList.remove('hidden')
    }
}
const openForm =()=>{
    document.querySelector(".cartCard").classList.add('hidden')
    document.querySelector(".formCard").classList.remove('hidden')
}
const backForm=()=>{
    document.querySelector(".cartCard").classList.remove('hidden')
    document.querySelector(".formCard").classList.add('hidden')
}
// document.querySelector('.iconCart').addEventListener('mouseover',(e)=>{
//     e.target.classList.remove('bi-cart')
//     e.target.classList.add('bi-cart-fill')
// })
// document.querySelector('.iconCart').addEventListener('mouseout',(e)=>{
//     e.target.classList.remove('bi-cart-fill')
//     e.target.classList.add('bi-cart')
// })
document.getElementById('retirar').addEventListener('click',(e)=>{
    if(e.target.checked){
        document.querySelector(".addressOp").style.display="none"
        document.querySelector(".comerLocal").style.display="flex"
    }else{
        document.querySelector(".addressOp").style.display="block"
        document.querySelector(".comerLocal").style.display="none"
    }
})

