import { option_generic_list } from "../../dist/main.js"
const elementFromHtml=(html)=>{
    let htmlText = html.trim();
    return htmlText
}
const genericList=()=>{
    option_generic_list.innerHTML=elementFromHtml(`
    <h1 class="font-bold md:text-3xl sm:text-3xl mt-2 cl:text-2xl"><span>"Categoria"</span> Disponiveis</h1>
            <table class="mt-5  w-2/5">
                <thead>
                    <tr>
                        <th class="border rounded-lg text-left p-2">Prooduto</th>
                        <th class="border text-left p-2">Informação</th>
                        <th class="border text-left p-2">Quantidade</th>
                    </tr>
                    </thead>
                    <tbody class="border">
                    <tr class="border">
                        <td colspan="3" class="border p-2">
                            <div class="content-row w-full h-full border border-primary">
                                <img  class="w-1/4 h-20 border"src="" alt="">
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
    `)
}
export {genericList}
