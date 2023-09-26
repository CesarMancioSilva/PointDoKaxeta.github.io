import { homeSession } from "../../dist/index.js"
const elementFromHtml=(html)=>{
    let htmlText = html.trim();
    return htmlText
}

const Home=()=>{
    homeSession.innerHTML=elementFromHtml(`
    <div class="w-full  flex cl:gap-3 md:gap-8 flex-wrap justify-center mt-7">
    <div class="card p-5">
        <img src="https://images.pexels.com/photos/1739347/pexels-photo-1739347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"class="bg-white w-full h-[70%] rounded-lg"  alt="foto do produto">
        <h1 class="font-bold cl:text-2xl md:text-3xl mb-3">Açai</h1>
    </div>
    <div class="card p-5">
        <img src="https://images.pexels.com/photos/1739347/pexels-photo-1739347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"class="bg-white w-full h-[70%] rounded-lg"  alt="foto do produto">
        <h1 class="font-bold cl:text-2xl md:text-3xl mb-3">Sobremesas</h1>
    </div>
    <div class="card p-5">
        <img src="https://images.pexels.com/photos/1739347/pexels-photo-1739347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="bg-white w-full h-[70%] rounded-lg"  alt="foto do produto">
        <h1 class="font-bold cl:text-2xl md:text-3xl mb-3">Bebidas</h1>
    </div>
    </div>
    <span class="bi bi-instagram text-5xl mb-2 text-primary mt-14"></span>
    <h1>@pointdokaxeta</h1>
    `)
}
export {Home}