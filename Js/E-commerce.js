$(document).ready(function(){
    $('.div__banniere').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000, // Réglez la vitesse de défilement
      arrows: false, // Désactivez les flèches de navigation 
      draggable: true, // Permettez de faire glisser les images avec la souris ou le doigt
      pauseOnFocus: false,
      pauseOnHover: false
    });
  });
  