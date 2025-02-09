
window.onclick = function getGalleryReady()
{

    var img  = document.getElementsByClassName("imgs");

        for(var i= 0; i<img.length;i++)
        {
            img[i].onclick = function()
            {
                openModal(this.src);
            }
        }
}
    
function openModal(src)
{
    document.getElementById("modal").style.display="flex";
    document.getElementById("modImg").src = src;
}

document.getElementById("crosbtn").onclick= function()
{
    document.getElementById("modal").style.display = "none";
}







// window.onclick = function()
// {
//     GalleryReady();
// }

// function GalleryReady()
// {
//     document.getElementsByClassName("imgs");
//         for(var i = 0;i<=img.lenght;i++)
//         {
//             img[i].onclick = function()
//             {
//                 modalsec(this.src);
//             }
//         }
// }

//  function modalsec(src)
// {
//     document.getElementById("modal").style.display= "flex";
//     document.getElementById("mod-Img").src = src;
// }

// document.getElementById("crosbtn").onclick = function()
// {
//     document.getElementById("modal").style.display = "none";
// }

