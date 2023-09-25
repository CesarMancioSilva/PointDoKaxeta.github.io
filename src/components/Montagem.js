import { montagemAcai } from "../../dist/index.js"
const elementFromHtml=(html)=>{
    let htmlText = html.trim();
    return htmlText
}

const Montagem=()=>{
    console.log('chamou aqui')
    montagemAcai.innerHTML=elementFromHtml(`
        <h1>Montagem</h1>
        
    `)
}
export {Montagem}