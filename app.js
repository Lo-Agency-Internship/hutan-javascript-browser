function HexChangeBG()
{
    return "#" + Math.random().toString(16).substring(2,8);
}

let btn=document.getElementById('btnhex');
btn.addEventListener("click",()=>{
    document.body.style.backgroundColor=HexChangeBG();
});
