
document.addEventListener("DOMContentLoaded", () => {

    const elementos = document.querySelectorAll(
        "#sobre, #hobbies, #jogos, .cartao"
    );

    const observador = new IntersectionObserver((entradas, observador) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("visivel");

                observador.unobserve(entrada.target);
            }

        });

    }, {
        threshold: 0.05
    });

    elementos.forEach((elemento) => {

        elemento.classList.add("revelar");

        observador.observe(elemento);

    });
const cartoes = document.querySelectorAll(".cartao");

cartoes.forEach((cartao) => {

    cartao.addEventListener("mouseenter", () => {
        cartao.classList.add("preview-ativo");
    });

    cartao.addEventListener("mouseleave", () => {
        cartao.classList.remove("preview-ativo");
    });

});
});
