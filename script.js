function mostrarCopa(ano, botao){

    document.getElementById("titulo").innerText =
        "Copa do Mundo " + ano;

    document.getElementById("texto").innerText =
        copas[ano];

    document
        .querySelectorAll(".sidebar button")
        .forEach(btn => btn.classList.remove("selecionado"));

    botao.classList.add("selecionado");

    const content = document.querySelector(".content");

    content.classList.remove("animar");

    void content.offsetWidth;

    content.classList.add("animar");
}
