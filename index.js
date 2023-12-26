 function showImage(imageSrc){
    let popupImage = document.getElementById('popupImage');
    console.log(popupImage);
    popupImage.src = imageSrc;
    console.log(imageSrc);
    let imagePopup = document.getElementById('imagePopup');
    let popupText = imagePopup.querySelector('.popup-text');
    console.log(popupText);
    if (imageSrc == "http://127.0.0.1:5500/img/1.jpg"){
      popupText.innerText = 'С НОВЫМ ГОДОМ!';
    }else if (imageSrc == "http://127.0.0.1:5500/img/2.jpg") {
      popupText.innerText = 'С НОВЫМ ГОДОМ!';
    }else if (imageSrc == "http://127.0.0.1:5500/img/3.jpg") {
      popupText.innerText = 'С НОВЫМ ГОДОМ!';
    }else if (imageSrc == "http://127.0.0.1:5500/img/4.jpg") {
      popupText.innerText = 'С НОВЫМ ГОДОМ!';
    }else if (imageSrc == "http://127.0.0.1:5500/img/5.jpg") {
      popupText.innerText = 'С НОВЫМ ГОДОМ!';
    }else if (imageSrc == "http://127.0.0.1:5500/img/6.jpg") {
      popupText.innerText = 'С НОВЫМ ГОДОМ!';
    }else if (imageSrc == "http://127.0.0.1:5500/img/7.jpg") {
      popupText.innerText = 'С НОВЫМ ГОДОМ!';
    }else if (imageSrc == "http://127.0.0.1:5500/img/8.jpg") {
      popupText.innerText = 'С НОВЫМ ГОДОМ!';
    }else if (imageSrc == "http://127.0.0.1:5500/img/9.jpg") {
      popupText.innerText = 'С НОВЫМ ГОДОМ!!!';
    }else { 
      popupText.innerText = 'С НОВЫМ ГОДОМ!!!';
    }

    imagePopup.style.display = "flex";

   }
     
   
   function closeImage(){
      let imagePopup = document.getElementById("imagePopup");
      imagePopup.style.display = "none";
      document.body.style.overflow = "auto"
   }