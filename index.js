const menuicon=document.getElementById("menu-icon");
const menu=document.getElementById("menu");
menuicon?.addEventListener("click",()=>
{
   
    if(menu.className == "hidden")
    {
        menu.classList.remove("hidden");
    }
    else
    {
        menu.classList.add("hidden");
    }
});



// const menuicon = document.getElementById("menu-icon");
// const menu = document.getElementById("menu");

// menuicon?.addEventListener("click", () => {
//     alert("kjsdhksd");
//     menu.classList.toggle("hidden");
// });



