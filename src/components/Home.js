// import { homeSession } from "../../dist/main.js"
// import { slide } from "../../dist/main.js";
// const elementFromHtml=(html)=>{
//     let htmlText = html.trim();
//     return htmlText
// }
// const imgs = [
//     'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=400',
//     'https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=600',
//     'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=600'
// ]

// const Home=()=>{
//     homeSession.innerHTML=elementFromHtml(`
//     <div class="carousel   w-[550px] relative">

//                 <div class="carousel_container w-[500px] flex relative  z-0 m-auto overflow-hidden">
//                     <div class="slide min-w-[1500px]  flex -translate-x-[505px]">
//                         <div class="img_contain text-center block min-w-[500px] ">
//                             <img class="w-full max-h-[295px]" src="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=400" alt="">
//                             <p class="relative bottom-12 bg-bgblack bg-opacity-70 m-2">ala carai burrão kk</p>
//                         </div>
//                         <div class="img_contains relative text-center block min-w-[500px] max-h-[350px]">
//                             <img class="w-full max-h-[295px]" src="https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=600" alt="">
//                             <p class="relative bottom-12 bg-bgblack bg-opacity-70 m-2">pipoca</p>
//                         </div>
//                         <div class="img_contains text-center block min-w-[500px] max-h-[350px]">
//                             <img class="w-full max-h-[295px]" src="https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=600" alt="">
//                             <p class="relative bottom-12 bg-bgblack bg-opacity-70 m-2">imagem 3</p>
//                         </div>

//                     </div>
//                 </div>
            
//                 <span class="bi bi-chevron-left absolute left-[-20px] z-20 top-[45%] cursor-pointer text-3xl text-primary"></span>
//                 <span class="bi bi-chevron-right absolute right-[-20px] z-20 top-[45%] cursor-pointer text-3xl text-primary"></span>

//                 <div class="image_circle_contain flex gap-2 absolute left-[44.1%] bottom-0">
//                     <div class="image_circle w-3 h-3 cursor-pointer rounded-full bg-primary"></div>
//                     <div class="image_circle w-3 h-3 cursor-pointer rounded-full  border-2 border-primary"></div>
//                     <div class="image_circle w-3 h-3 cursor-pointer rounded-full  border-2 border-primary"></div>
//                 </div>
//             </div>


//     <div class="w-full  flex cl:gap-3 md:gap-8 flex-wrap justify-center mt-7">
//     <div class="card p-5">
//         <img src="https://images.pexels.com/photos/1739347/pexels-photo-1739347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"class="bg-white w-full h-[70%] rounded-lg"  alt="foto do produto">
//         <h1 class="font-bold cl:text-2xl md:text-3xl mb-3">Açai</h1>
//     </div>
//     <div class="card p-5">
//         <img src="https://images.pexels.com/photos/1739347/pexels-photo-1739347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"class="bg-white w-full h-[70%] rounded-lg"  alt="foto do produto">
//         <h1 class="font-bold cl:text-2xl md:text-3xl mb-3">Sobremesas</h1>
//     </div>
//     <div class="card p-5">
//         <img src="https://images.pexels.com/photos/1739347/pexels-photo-1739347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="bg-white w-full h-[70%] rounded-lg"  alt="foto do produto">
//         <h1 class="font-bold cl:text-2xl md:text-3xl mb-3">Bebidas</h1>
//     </div>
//     </div>
//     <span class="bi bi-instagram text-5xl mb-2 text-primary mt-14"></span>
//     <h1>@pointdokaxeta</h1>
//     `)
// }
// var slideStage = 0
// var slideClass = '-translate-x-[0px]'

// const nextSlide=()=>{
//     alert(slide.getElementsByTagName("img").length+"fotos")
//     alert('porra')
//     slide.classList.remove(slideClass)
//     slideStage+=1
//     slideClass = `-translate-x-[${slideStage * 500}px]`
//     slide.classList.add(slideClass)
// }
// const previousSlide=()=>{
//     slide.classList.remove(slideClass)
//     slideStage-=1
//     slideClass = `-translate-x-[${slideStage * 500}px]`
//     slide.classList.add(slideClass)
// }

// export {nextSlide,previousSlide}