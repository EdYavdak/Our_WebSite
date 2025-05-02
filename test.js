  document.querySelectorAll('.img-container img').forEach( img => {
    img.onclick = () => {
      document.querySelector('.pop-up').style.display='block';
      document.querySelector('.pop-up img').scr = img.getAttribute('src');
    }
  });