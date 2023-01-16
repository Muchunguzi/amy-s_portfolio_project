
let count = 0;

function upSelector(){

  let images = [
    "assets/image-slide-1.jpg" ,
    "assets/image-slide-2.jpg" ,
    "assets/image-slide-3.jpg" ,
    "assets/image-slide-4.jpg" ,
              ]

if(count > 0 ) {

const img = document.getElementById("slide_image");

 count -- ;

 img.src  = images[count];

 console.log(img.src);
} 

else {
  return ; 
}

};

function downSelector(){

   let images = [
      "assets/image-slide-1.jpg" ,
      "assets/image-slide-2.jpg" ,
      "assets/image-slide-3.jpg" ,
      "assets/image-slide-4.jpg" ,
      "assets/image-slide-5.jpg",
                ]
 
  if(count < images.length - 1) {

  const img = document.getElementById("slide_image");

   count ++ ;

   img.src  = images[count];

  } else {
   
    return ; 

  }

};






