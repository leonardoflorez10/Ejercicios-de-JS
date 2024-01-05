const input = document.querySelector('input[type="text"]');

input.addEventListener('input', function() {
  console.log(input.value);
});

// agregar un escucha de eventos al elemento de entrada. Puedes hacer esto utilizando el método addEventListener()