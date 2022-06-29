// ===========Hex Color ==========
function HexChangeBG()
{
    return "#" + Math.random().toString(16).substring(2,8);
}

let btn=document.getElementById('btnhex');
// btn.addEventListener("click",()=>{
//     document.body.style.backgroundColor=HexChangeBG();
// });


// ============ Filter ============
function FilterCards(id)
{
    const cards = document.querySelectorAll('.card');

   Object.values(cards).filter(item =>
        {
            item.classList.remove('invisble')
            if(id === 'all')
            {
                return
            }
            if(!item.classList.contains(`${id}`))
            {
                item.classList.add('invisble')
            }
        })

}

// =========== Search Box ===========
function SearchBox()    
{
    const cards = document.querySelectorAll('.card');
    const searchInput = document.getElementById('searchbox');
   

    cards.forEach(item=>  
        {
            item.classList.remove('invisble')
            
            if(!item.classList.contains(searchInput.value.toLowerCase()))
            {
                item.classList.add('invisble')
            }

        })
}

