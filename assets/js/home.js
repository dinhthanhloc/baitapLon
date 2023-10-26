var image = document.querySelectorAll('.image-box');
var overlay = document.querySelectorAll('.overlay');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var close = document.querySelector('.close');
var gallery = document.querySelector('.gallery');
var galleryImg = document.querySelector('.gallery_inner img');



// var currentIndex = 0;
// function showgallery(index) {
    
//     currentIndex = index
//     gallery.classList.add('show');  
//     galleryImg.src = image[index].getAttribute('src') 
    
// }
// overlay.forEach(function (item,index)  {
//     item.addEventListener('click',function(){
//         showgallery(index);
        
//     });
// });
// close.addEventListener('click',function(){
//     gallery.classList.remove('show');
// });
// document.addEventListener('keydown',function(e){
//     if(e.keyCode == 27){
//         gallery.classList.remove('show');
//     }
// });
// prev.addEventListener('click',function(){
//     if(currentIndex == 0) {
//         currentIndex = galleryImg.length - 1;
//     }
//     else{
//         currentIndex--
//     }
//     showgallery(currentIndex);
// });
// next.addEventListener('click',function(){
//     if(currentIndex == galleryImg.length - 1) {
//         currentIndex = 0
//     }
//     else{
//         currentIndex++
//     }
//     showgallery(currentIndex);
// });
var currentIndex =0;
//hiển thị
function showgallery(){
    if(currentIndex == 0) {
        prev.classList.add('hide')
    }else{
        prev.classList.remove('hide')
    }
    if(currentIndex== image.length -1) {
        next.classList.add('hide')
    }else{
        next.classList.remove('hide')
    }
    //display
    galleryImg.src = image[currentIndex].src;
    gallery.classList.add('show');
}

overlay.forEach(function (item,index)  {
    item.addEventListener('click',function(){
        currentIndex = index;
        showgallery();
        
    });
});

close.addEventListener('click',function(){
    gallery.classList.remove('show');
});

document.addEventListener('keydown',function(e){
    if(e.keyCode == 27){
        gallery.classList.remove('show');
    }
});

prev.addEventListener('click',function(){
    if(currentIndex >0) {
        currentIndex--;
        showgallery();
    }
});
next.addEventListener('click',function(){
    if(currentIndex < image.length -1) {
        currentIndex++;
        showgallery();
    }
});

