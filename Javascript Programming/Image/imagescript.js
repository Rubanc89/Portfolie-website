function openImage(imageSrc) {
    const popup = document.getElementById('imagePopup');
    const popupImage = document.getElementById('popupImage');
  
    popupImage.src = imageSrc;
    popup.style.display = 'block';
  }
  
  function closeImagePopup() {
    const popup = document.getElementById('imagePopup');
    popup.style.display = 'none';
  }
  