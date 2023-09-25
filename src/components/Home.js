import { homeSession } from "../../dist/index.js"
const elementFromHtml=(html)=>{
    let htmlText = html.trim();
    return htmlText
}

const Home=()=>{
    homeSession.innerHTML=elementFromHtml(`
        <h1>Home</h1>
        
    `)
}
export {Home}