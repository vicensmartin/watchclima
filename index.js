// https://api.openweathermap.org/data/2.5/weather?q={city name}&units=metric&appid=9ad5cb12970325c9659b8641753d1661
const APIKEY = "9ad5cb12970325c9659b8641753d1661";
const inputElement = document.getElementById("inputBusqueda");
const buttonSearch = document.getElementById("buscar");
const resultElement = document.getElementById("resultado");

buttonSearch.addEventListener("click", (event) => {
  event.preventDefault();

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputElement.value}&units=metric&appid=${APIKEY}`
  )
    .then((respuesta) => {
      /* console.log(`Primer Then: ${respuesta}`);*/
      return respuesta.json(); // retorno al siguiente then el response como json
    })
    .then((json) => {
      console.log(json);
      if (json.cod === "404") {
        error();
      } else {
        localStorage.setItem("datos_guardados", JSON.stringify(json));
        mostrar_clima(json);
      }
    })
    .catch((err) => {
      console.log(`Hubo un error: ${err}`);
    })
    .finally((final) => {
      // borra el loading
      console.log("ejecuto el finally");
    });
});

let pepito = JSON.parse(localStorage.getItem("datos_guardados")) || [];
mostrar_clima(pepito);
