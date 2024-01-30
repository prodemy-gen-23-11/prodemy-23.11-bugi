let imageMain = document.querySelector("#image-main");
let imageThumb = document.getElementsByClassName("image-thumb");
let imageThumbDiv = document.getElementsByClassName("image-thumb-div");

function focusImage(index){
    let imageUrl = imageThumb[index-1].src;
    imageMain.src = imageUrl;

    imageThumbDiv[index-1].style.borderStyle = "solid";
    imageThumbDiv[index-1].style.borderWidth = "2px";
    imageThumbDiv[index-1].style.borderColor = "gray";

    removeFocus(index);
}

function removeFocus(index){
    for (let i = 0; i < imageThumbDiv.length; i++) {
        if(i != index-1){
            imageThumbDiv[i].style.borderStyle = "none";
        }   
    }
}