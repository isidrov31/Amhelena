document.addEventListener('click', function(event) {
    var cart = document.querySelector('.cart');
    var cartToggle = document.getElementById('cart-toggle');
  
    var targetElement = event.target; // Elemento en el que se hizo clic
  
    // Verificar si el clic ocurrió fuera del carrito y del botón de activación
    if (!cart.contains(targetElement) && targetElement !== cartToggle) {
      cartToggle.checked = false; // Desactivar el carrito
    }
  });
  

  document.addEventListener('click', function(event) {
    var cart = document.querySelector('.navbar-list');
    var menuToggle = document.getElementById('menu-toggle');
  
    var targetElement = event.target; // Elemento en el que se hizo clic
  
    // Verificar si el clic ocurrió fuera del carrito y del botón de activación
    if (!cart.contains(targetElement) && targetElement !== menuToggle) {
      menuToggle.checked = false; // Desactivar el carrito
    }
  });
  