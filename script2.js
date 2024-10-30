// criar 3 constantes(const) chamadas horas, minutos e segundos.

const caixahoras = document.getElementById("horas");
const caixaMinutos = document.getElementById("minutos");
const caixaSegundos = document.getElementById("segundos");
const caixadate = document.getElementById("date");

//  crie uma constante chamada relogio e atribua o metodo setinterval.

const relogio = setInterval(() => {

    // criar uma variavel(let) chamada datetoday e atribuir o super método new date().

    let datetoday = new Date();

    const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };

    // criar 3 variaveis chamadas hr, min e sec. e atribua a variavel datetoday em cada uma.

    let date = datetoday.toLocaleDateString("pt-br", options)
    let hr = datetoday.getHours();
    let min = datetoday.getMinutes();
    let sec = datetoday.getSeconds();

    if (hr < 10) hr = "0" + hr;
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;

    // utilizar o textcontent para mostra as hr, min e sec na tela, lembre-se de chamar a caixa de cada campo.

    caixadate.textContent = date;
    caixahoras.textContent = hr;
    caixaMinutos.textContent = min;
    caixaSegundos.textContent = sec;



}, 10);