function mostrar_clima(data) {
  const {
    main: { temp_min, temp_max, humidity, feels_like, pressure, temp },
    wind: { speed },
    weather: [icono],
    coord: { lat, lon },
    name,
  } = data;

  const mi_api_clima = "rrjgAkrLhBxjwWqqGHYVnIm1rUXisNvI&center";

  console.log(data);

  console.log(data.weather[icono]);

  const divCard = document.createElement("div");
  divCard.className = "caja_principal";

  const texto_primero = document.createElement("p");
  texto_primero.className = "clima_en";
  texto_primero.innerHTML = "Clima en";

  const img_icon = document.createElement("div");
  img_icon.className = "";
  img_icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${icono.icon}@2x.png" alt="iconoooo">`;

  const img_temp = document.createElement("div");
  img_temp.className = "div_img_temp";

  const temperatura_actual = document.createElement("p");
  temperatura_actual.className = "text_temp_actual";
  temperatura_actual.innerText = `${temp}°C`;

  const nombre = document.createElement("h3");
  nombre.className = "nombre_elegido";
  nombre.innerText = name;

  const divCard2 = document.createElement("div");
  divCard2.className = "div_temperatura";

  const temperatura_max = document.createElement("p");
  temperatura_max.className = "text_temp";
  temperatura_max.innerText = `Máx: ${temp_max}°C`;

  const temperatura_min = document.createElement("p");
  temperatura_min.className = "text_temp";
  temperatura_min.innerText = `Mín: ${temp_min}°C`;

  const div_ul = document.createElement("div");
  div_ul.className = "div_ul";

  const divCard3 = document.createElement("ul");
  divCard3.className = "lista_de_datos";

  const humedad_tiempo = document.createElement("li");
  humedad_tiempo.className = "";
  humedad_tiempo.innerHTML = `<span>Humedad: </span> ${humidity}%`;

  const sensacion_termica = document.createElement("li");
  sensacion_termica.className = "";
  sensacion_termica.innerHTML = `<span>ST: </span> ${feels_like}°C`;

  const presion_atmos = document.createElement("li");
  presion_atmos.className = "";
  presion_atmos.innerHTML = `<span>Presión: </span> ${pressure} hPa`;

  const vel_viento = document.createElement("li");
  vel_viento.className = "";
  vel_viento.innerHTML = `<span>Viento: </span> ${speed} km/h`;

  const divCard4 = document.createElement("ul");
  divCard4.className = "";

  const texto_map = document.createElement("p");
  texto_map.className = "texto_map";
  texto_map.innerHTML = "Mapa de la ciudad";

  const mapa = document.createElement("div");
  mapa.className = "imagen";
  mapa.innerHTML = `<img src="https://api.tomtom.com/map/1/staticimage?key=${mi_api_clima}=${lon},${lat}&zoom=15&format=png&layer=basic&style=main" alt="iconoooo">`;

  resultElement.innerHTML = "";
  resultElement.append(divCard);
  divCard.append(texto_primero);
  divCard.append(nombre);
  resultElement.append(img_temp);
  img_temp.append(img_icon);
  img_temp.append(temperatura_actual);
  resultElement.append(divCard2);
  divCard2.append(temperatura_max);
  divCard2.append(temperatura_min);
  resultElement.append(div_ul);
  div_ul.append(sensacion_termica);
  div_ul.append(humedad_tiempo);
  div_ul.append(presion_atmos);
  div_ul.append(vel_viento);
  divCard3.append(divCard4);
  resultElement.append(texto_map);
  resultElement.append(mapa);
}

function error() {
  const div_error = document.createElement("div");
  div_error.className = "div_error";

  const error_busqueda = document.createElement("p");
  error_busqueda.className = "error_busqueda";
  error_busqueda.innerText = `EL LUGAR QUE INTENTAS BUSCAR ES INCORRECTO`;

  resultElement.innerHTML = "";
  resultElement.append(div_error);
  div_error.append(error_busqueda);
}
