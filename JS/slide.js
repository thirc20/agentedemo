document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll(".slide img");
    var currentImageIndex = 0;

    function showNextImage() {
      images[currentImageIndex].classList.remove("active");
      currentImageIndex = (currentImageIndex + 1) % images.length;
      images[currentImageIndex].classList.add("active");
    }

    setInterval(showNextImage, 3000); // Troca de imagem a cada 3 segundos (3000 milissegundos)
  });