let contador = 1;

setInterval(function() {
    document.getElementById('slide' + contador).checked = true;
    
    // Remover o botão de todas as slides antes de avançar
    document.querySelectorAll('.back-button').forEach(function(button) {
        button.style.display = 'none';
    });

    // Se for a slide 6, mostrar o botão
    if (contador === 6) {
        document.querySelector('.slide.s6 .back-button').style.display = 'block';
    }

    contador++;

    if (contador > 6) {
        contador = 1;
    }
}, 3000);
