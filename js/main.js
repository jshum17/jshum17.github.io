$(document).ready(function(){

   //Navbar scroll down/change colour

   $(window).scroll(function(){
      if(this.scrollY > 20){
         $('.navbar').addClass("sticky");
      }else{
         $('.navbar').removeClass("sticky");
      }
   });

   //Gallery Lightbox

   $('.gallery-img').click(function(){
      $('.lightbox').addClass("active");
      const img = $(this).clone();
      $('.lightbox').append(img);
      $("html").addClass("noscroll");
   });

   $('.lightbox').click(function(event){
      if(event.target !== event.currentTarget) return
      $('.lightbox').removeClass("active");
      $('.lightbox').empty();
      $("html").removeClass("noscroll");
   });

   //Home down btn smooth scrolling
   $("a[href^=\\#welcome]").on('click', function(event) {
    
      if (this.hash !== "") {

        event.preventDefault();

        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 700, function(){
     
          window.location.hash = hash;
        });
      }
   });

   //Toggle Menu

   $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.navbar').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
      $("html").toggleClass("noscroll");
      $('body').toggleClass("active");
      $('.nav-outline-top').toggleClass("active");
   });

   //Typing animation

   var typed = new Typed(".typing",{
      strings:["Page","Website"],
      typeSpeed:120,
      backSpeed:80,
      loop:true
   });

});

   var slider_img = document.querySelector('.slider-img');
   var images = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
   var i = 0;

   function prev(){
      if(i <= 0) i = images.length;	
      i--;
      return setImg();			 
   }

   function next(){
      if(i >= images.length-1) i = -1;
      i++;
      return setImg();			 
   }

   function setImg(){
      return slider_img.setAttribute('src', "img/slider/"+images[i]);
      
   }

   

