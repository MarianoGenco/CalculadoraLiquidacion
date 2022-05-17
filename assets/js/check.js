function mayorFuncion() {
  let checkbox_mayor_funcion = document.getElementById(
    "checkbox_mayor_funcion"
  );

  if (checkbox_mayor_funcion.checked == true) {
    selector_mayor_funcion.style.display = "";
    div_input_mayor_funcion.style.display = "";
    tabla_total_mayor_funcion.style.display = "";
  } else {
    selector_mayor_funcion.style.display = "none";
    div_input_mayor_funcion.style.display = "none";
    tabla_total_mayor_funcion.style.display = "none";
  }
}

function plusChofer() {
  let checkbox_plus_chofer = document.getElementById("checkbox_plus_chofer");

  if (checkbox_plus_chofer.checked == true) {
    document.getElementById("div_input_plus_chofer").style.display = "";
    tabla_total_plus_chofer.style.display = "";
  } else {
    div_input_plus_chofer.style.display = "none";
    tabla_total_plus_chofer.style.display = "none";
  }
}

function viaticoGuarda() {
  let checkbox_viatico_guarda = document.getElementById(
    "checkbox_viatico_guarda"
  );

  if (checkbox_viatico_guarda.checked == true) {
    tabla_total_viatico_guarda.style.display = "";
  } else {
    tabla_total_viatico_guarda.style.display = "none";
  }
}

function plusPernocte() {
  let checkbox_plus_pernocte = document.getElementById(
    "checkbox_plus_pernocte"
  );

  if (checkbox_plus_pernocte.checked == true) {
    div_input_plus_pernocte.style.display = "";
    tabla_total_plus_pernocte.style.display = "";
  } else {
    div_input_plus_pernocte.style.display = "none";
    tabla_total_plus_pernocte.style.display = "none";
  }
}

function plusGuarderia() {
  if (checkbox_guarderia.checked == true) {
    swal({
      title: "Atención",
      text: "La guarderia tiene un tope de: $" + plus_guarderia,
      icon: "info",
      buttons: "OK",
    }).then(function (isOkay) {
      if (isOkay) {
        document.getElementById("checkbox_guarderia").checked = false;
      }
    });
  }
}

function plusNivelesDificultad() {
  let checkbox_niveles_dificultad = document.getElementById(
    "checkbox_niveles_dificultad"
  );

  if (checkbox_niveles_dificultad.checked == true) {
    div_input_niveles_dificultad.style.display = "";
    tabla_total_niveles_dificultad_1.style.display = "";
    tabla_total_niveles_dificultad_2.style.display = "";
    tabla_total_niveles_dificultad_3.style.display = "";
    tabla_total_niveles_dificultad_4.style.display = "";
    tabla_total_niveles_dificultad_5.style.display = "";
  } else {
    div_input_niveles_dificultad.style.display = "none";
    tabla_total_niveles_dificultad_1.style.display = "none";
    tabla_total_niveles_dificultad_2.style.display = "none";
    tabla_total_niveles_dificultad_3.style.display = "none";
    tabla_total_niveles_dificultad_4.style.display = "none";
    tabla_total_niveles_dificultad_5.style.display = "none";
  }
}

function plusTitulos() {
  let checkbox_titulos = document.getElementById("checkbox_titulos");

  if (checkbox_titulos.checked == true) {
    tabla_total_terciario.style.display = "";
    tabla_total_universitario.style.display = "";
  } else {
    tabla_total_terciario.style.display = "none";
    tabla_total_universitario.style.display = "none";
  }
}
