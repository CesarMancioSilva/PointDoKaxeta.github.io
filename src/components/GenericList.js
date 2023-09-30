// import { option_generic_list } from "../../dist/main.js"
// const elementFromHtml=(html)=>{
//     let htmlText = html.trim();
//     return htmlText
// }
// var dataDisponivel=[
//     {  
//         product_img:'https://images.pexels.com/photos/16461655/pexels-photo-16461655/free-photo-of-baga-frutinha-aniversario-dia-do-nascimento.jpeg?auto=compress&cs=tinysrgb&w=600',
//         product_name:"Bolo de pote sabor chocolate",
//         product_price: '5,00',
//         product_order:1
//     },
//     {  
//         product_img:'https://images.pexels.com/photos/16461655/pexels-photo-16461655/free-photo-of-baga-frutinha-aniversario-dia-do-nascimento.jpeg?auto=compress&cs=tinysrgb&w=600',
//         product_name:"Bolo de pote sabor chocolate",
//         product_price: '5,00',
//         product_order:0
//     },
//     {  
//         product_img:'https://images.pexels.com/photos/16461655/pexels-photo-16461655/free-photo-of-baga-frutinha-aniversario-dia-do-nascimento.jpeg?auto=compress&cs=tinysrgb&w=600',
//         product_name:"Bolo de pote sabor chocolate",
//         product_price: '5,00',
//         product_order:3
//     },
//     {  
//         product_img:'https://images.pexels.com/photos/16461655/pexels-photo-16461655/free-photo-of-baga-frutinha-aniversario-dia-do-nascimento.jpeg?auto=compress&cs=tinysrgb&w=600',
//         product_name:"Bolo de pote sabor chocolate",
//         product_price: '5,00',
//         product_order:0
//     }
// ]

// const genericList=()=>{
//     console.log(option_generic_list)
//     option_generic_list.innerHTML=elementFromHtml(`
//     <table class="mt-5  rounded-xl qcl:max-w-[520px] bg-secondary ">
//     <thead>
//         <tr>
//             <th colspan="3" class="border-b p-4 border-primary rounded-lg font-bold text-center text-primary text-xl">
//                 <span>"Categoria"</span> disponiveis
//             </th>
//         </tr>
//         </thead>
//         <tbody class="last:border-b-0 block max-h-[420px] overflow-auto">
        
//         ${
//             dataDisponivel.map((disponivel)=>{
//                 return(`
//                 <tr class="optionGeneric relative">
//                     <td class="p-2 min-w-[100px]">
//                         <img class="w-32 " src="${disponivel.product_img}',
//                         product_name:"Bolo de pote sabor chocolate" alt="">
//                     </td>
//                     <td class="border-b align-top pt-4 qcl:pt-8 px-4">
//                         <h2 class="font-bold mb-2 text-sm qcl:text-lg">${disponivel.product_name}</h2>
//                         <h3  class="text-primary">R$<span>${disponivel.product_price}</span></h3>
//                     </td>
//                     <td class=" px-5">
//                         <div class="flex gap-2">
        
//                             <div class="plusBtn rounded-full w-6 h-6 flex hover:bg-primary hover:bg-opacity-20 items-center justify-center cursor-pointer ${disponivel.product_order==0 ? `bg-white`:'bg-primary border-bgblack border-2'} text-bgblack  text-xl">
//                                 +
//                             </div>
//                             <span>${disponivel.product_order}</span>
//                             <div class="plusBtn rounded-full w-6 h-6 flex items-center justify-center cursor-pointer ${disponivel.product_order==0 ? `bg-white`:'bg-primary border-bgblack border-2'} text-bgblack  text-2xl">
//                                 -
//                             </div>
//                     </td>
//                 </tr>
//                 `)
//             })
//         }
        
//         </tbody>
//         <tfoot class="border-t border-primary">
//                         <tr>
//                             <th class="p-6 flex justify-between items-center">
//                             <div class="flex gap-3 flex-col-reverse qcl:flex-row ">
//                             <button  class="bg-primary text-bgblack px-4 rounded-md">voltar</button>
//                             <button class="bg-bgmenu text-bgblack px-4 rounded-md">enviar para carrinho</button>
//                         </div>
//                         <h3 class="text-primary">Valor: R$<span>5,00</span></h3>
//                             </th>
//                         </tr>
//                     </tfoot>
//     </table>
    
//     <div class="flex gap-12">
//         <div class="flex justify-center flex-col items-center cursor pointer">

//             <span class="bi bi-instagram text-5xl mb-2 text-primary mt-14"></span>
//             <h1>@pointdokaxeta</h1>
//         </div>
//         <div class="flex justify-center flex-col items-center cursor-pointer">

//             <span class="bi bi-whatsapp text-5xl mb-2 text-primary mt-14"></span>
//             <h1>@pointdokaxeta</h1>
//         </div>
//     </div>
//     `)
// }
// export {genericList}
