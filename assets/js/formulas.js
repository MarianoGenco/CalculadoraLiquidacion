//Array con los basicos del sector
let basicos = [
  191979, 167436, 142279, 120430, 103142, 88510, 76495, 52619, 1213,
];
let plus = [3050, 755, 178, 7120, 4814, 408, 606.73];
let niveles = [423, 390.95, 339.32, 304.43, 202.85];

//Basicos del sector
let basico_instructor = basicos[0];
let basico_supervisor_especializado = basicos[1];
let basico_supervisor = basicos[2];
let basico_oficial_especializado = basicos[3];
let basico_oficial = basicos[4];
let basico_operario_especializado = basicos[5];
let basico_operario = basicos[6];
let basico_aprendiz = basicos[7];
let viatico = basicos[8];

//Plus del sector
let plus_sube = plus[0];
let plus_chofer = plus[1];
let plus_viatico_guarda = plus[2];
let plus_fallo_caja = plus[3];
let plus_pernocte = plus[4];
let plus_refrigerio_via = plus[5];
let viatico_especial = plus[6];
let plus_jornada_extendida = (10 * basico_supervisor_especializado) / 100;
let plus_guarderia = (15 * viatico).toFixed(2);

//Niveles de dificultad
let nivel_de_dificultad_1 = niveles[0];
let nivel_de_dificultad_2 = niveles[1];
let nivel_de_dificultad_3 = niveles[2];
let nivel_de_dificultad_4 = niveles[3];
let nivel_de_dificultad_5 = niveles[4];

//Funcion para calcular montos
function calcular() {
  //Datos de los imputs
  let input_anos_antiguedad = document.getElementById("anos_antiguedad").value;
  let input_horas_feriado = document.getElementById("horas_feriado").value;
  let input_horas_nocturnas = document.getElementById("horas_nocturnas").value;
  let input_cantidad_viaticos =
    document.getElementById("cantidad_viaticos").value;
  let input_horas_extras_50 = document.getElementById("horas_extras_50").value;
  let input_horas_extras_100 =
    document.getElementById("horas_extras_100").value;
  let input_niveles_dificultad = document.getElementById(
    "input_niveles_dificultad"
  ).value;
  let input_plus_chofer = document.getElementById("input_plus_chofer").value;
  let input_plus_pernocte = document.getElementById(
    "input_plus_pernocte"
  ).value;
  let input_mayor_funcion = document.getElementById(
    "input_mayor_funcion"
  ).value;

  //Selector de inputs value
  let selector_especialidad = document.getElementById("selector_especialidad");
  let selector_uno = selector_especialidad.value;
  let basico = 0;

  if (selector_uno == "Instructor") {
    basico = basico_instructor;
    tabla_total_plus_fallo_caja.style.display = "none";
    tabla_total_jornada_extendida.style.display = "none";
  } else if (selector_uno == "Supervisor_Especializado") {
    basico = basico_supervisor_especializado;
    tabla_total_plus_fallo_caja.style.display = "none";
    tabla_total_jornada_extendida.style.display = "";
  } else if (selector_uno == "Supervisor") {
    basico = basico_supervisor;
    tabla_total_plus_fallo_caja.style.display = "none";
    tabla_total_jornada_extendida.style.display = "none";
  } else if (selector_uno == "Oficial_Especializado") {
    basico = basico_oficial_especializado;
    tabla_total_plus_fallo_caja.style.display = "none";
    tabla_total_jornada_extendida.style.display = "none";
  } else if (selector_uno == "Oficial") {
    basico = basico_oficial;
    tabla_total_plus_fallo_caja.style.display = "none";
    tabla_total_jornada_extendida.style.display = "none";
  } else if (selector_uno == "Operario_Especializado") {
    basico = basico_operario_especializado;
    tabla_total_jornada_extendida.style.display = "none";
  } else if (selector_uno == "Operario") {
    basico = basico_operario;
    tabla_total_plus_fallo_caja.style.display = "none";
    tabla_total_jornada_extendida.style.display = "none";
    tabla_total_jornada_extendida.style.display = "none";
    tabla_total_jornada_extendida.style.display = "none";
  } else if (selector_uno == "Aprendiz") {
    basico = basico_aprendiz;
    tabla_total_plus_fallo_caja.style.display = "none";
    tabla_total_jornada_extendida.style.display = "none";
  }

  //Formula basico normal
  let total_basico = basico;
  document.getElementById("total_basico").innerHTML = total_basico.toFixed(2);

  //Formula monto total antiguedad
  let total_antiguedad = basico * 0.015 * input_anos_antiguedad;
  document.getElementById("total_antiguedad").innerHTML =
    total_antiguedad.toFixed(2);

  //Formula adicional convenio
  let total_adicional_convenio = basico * 0.14;
  document.getElementById("total_adicional_convenio").innerHTML =
    total_adicional_convenio.toFixed(2);

  //Formula horas feriado - se diferencia con un if porque boleteria entra en la formula el plus sube
  if (selector_uno == "Operario_Especializado") {
    swal({
      title: "Atención",
      text: "Pertenece a boletería?",
      icon: "info",
      buttons: true,
      dangerMode: true,
    }).then(function (isOkay) {
      if (isOkay) {
        //Formula monto feriado (basico + antiguedad + mayor funcion + plus sube/25 /8 = 1 hora)
        let total_horas_feriado =
          ((basico +
            input_anos_antiguedad * (basico * 0.015) +
            total_adicional_convenio +
            plus_sube) /
            25 /
            8) *
          input_horas_feriado;
        document.getElementById("total_horas_feriado").innerHTML =
          total_horas_feriado.toFixed(2);

        //Formula horas nocturnas (basico + antiguedad + adcicional)/200*0.1333*1.5 = 1 hora
        let total_horas_nocturnas =
          (
            ((basico +
              input_anos_antiguedad * (basico * 0.015) +
              total_adicional_convenio +
              plus_sube) /
              200) *
            0.1333
          ).toFixed(2) *
          1.5 *
          input_horas_nocturnas;
        document.getElementById("total_horas_nocturnas").innerHTML =
          total_horas_nocturnas.toFixed(2);

        //Formula total cantidad horas extras al 100%
        let total_horas_extras_100 =
          (
            ((basico +
              input_anos_antiguedad * (basico * 0.015) +
              total_adicional_convenio +
              plus_sube) /
              200) *
            2
          ).toFixed(2) * input_horas_extras_100;
        document.getElementById("total_horas_extras_100").innerHTML =
          total_horas_extras_100.toFixed(2);

        //Formula total cantidad horas extras al 50%
        let total_horas_extras_50 =
          (
            ((basico +
              input_anos_antiguedad * (basico * 0.015) +
              total_adicional_convenio +
              plus_sube) /
              200) *
            1.5
          ).toFixed(2) * input_horas_extras_50;
        document.getElementById("total_horas_extras_50").innerHTML =
          total_horas_extras_50.toFixed(2);

        //Formula fallo de caja
        tabla_total_plus_fallo_caja.style.display = "";
        let total_fallo_caja = plus_fallo_caja;
        document.getElementById("total_fallo_caja").innerHTML =
          total_fallo_caja.toFixed(2);
      } else {
        //Formula monto feriado (basico + antiguedad + mayor funcion /25 /8 = 1 hora)
        let total_horas_feriado =
          ((basico +
            input_anos_antiguedad * (basico * 0.015) +
            total_adicional_convenio) /
            25 /
            8) *
          input_horas_feriado;
        document.getElementById("total_horas_feriado").innerHTML =
          total_horas_feriado.toFixed(2);

        //Formula horas nocturnas (basico + antiguedad + adcicional)/200*0.1333*1.5 = 1 hora
        let total_horas_nocturnas =
          (
            ((basico +
              input_anos_antiguedad * (basico * 0.015) +
              total_adicional_convenio) /
              200) *
            0.1333
          ).toFixed(2) *
          1.5 *
          input_horas_nocturnas;
        document.getElementById("total_horas_nocturnas").innerHTML =
          total_horas_nocturnas.toFixed(2);

        //Formula total cantidad horas extras al 100%
        let total_horas_extras_100 =
          (
            ((basico +
              input_anos_antiguedad * (basico * 0.015) +
              total_adicional_convenio) /
              200) *
            2
          ).toFixed(2) * input_horas_extras_100;
        document.getElementById("total_horas_extras_100").innerHTML =
          total_horas_extras_100.toFixed(2);

        //Formula total cantidad horas extras al 50%
        let total_horas_extras_50 =
          (
            ((basico +
              input_anos_antiguedad * (basico * 0.015) +
              total_adicional_convenio) /
              200) *
            1.5
          ).toFixed(2) * input_horas_extras_50;
        document.getElementById("total_horas_extras_50").innerHTML =
          total_horas_extras_50.toFixed(2);

        //Formula fallo de caja
        tabla_total_plus_fallo_caja.style.display = "none";
      }
    });
  }

  if (
    (input_horas_feriado == "" &&
      input_horas_nocturnas == "" &&
      input_horas_extras_100 == "" &&
      input_horas_extras_50 == "") ||
    input_anos_antiguedad !== ""
  ) {
    //Formula total cantidad horas extras al 50%
    let total_horas_extras_50 =
      (
        ((basico +
          input_anos_antiguedad * (basico * 0.015) +
          total_adicional_convenio) /
          200) *
        1.5
      ).toFixed(2) * input_horas_extras_50;

    document.getElementById("total_horas_extras_50").innerHTML =
      total_horas_extras_50.toFixed(2);

    //Formula total cantidad horas extras al 100%
    let total_horas_extras_100 =
      (
        ((basico +
          input_anos_antiguedad * (basico * 0.015) +
          total_adicional_convenio) /
          200) *
        2
      ).toFixed(2) * input_horas_extras_100;
    document.getElementById("total_horas_extras_100").innerHTML =
      total_horas_extras_100.toFixed(2);

    //Formula monto feriado (basico + antiguedad + mayor funcion /25 /8 = 1 hora)
    let total_horas_feriado =
      ((basico +
        input_anos_antiguedad * (basico * 0.015) +
        total_adicional_convenio) /
        25 /
        8) *
      input_horas_feriado;
    document.getElementById("total_horas_feriado").innerHTML =
      total_horas_feriado.toFixed(2);

    //Formula horas nocturnas (basico + antiguedad + adcicional)/200*0.1333*1.5 = 1 hora
    let total_horas_nocturnas =
      (
        ((basico +
          input_anos_antiguedad * (basico * 0.015) +
          total_adicional_convenio) /
          200) *
        0.1333
      ).toFixed(2) *
      1.5 *
      input_horas_nocturnas;
    document.getElementById("total_horas_nocturnas").innerHTML =
      total_horas_nocturnas.toFixed(2);
  } else {
    swal({
      title: "Atención",
      text: "Ingrese sus años de antigüedad.",
      icon: "info",
      buttons: "OK",
    }).then(function (isOkay) {
      if (isOkay) {
        document.getElementById("checkbox_guarderia").checked = false;
      }
    });
  }

  //Formula total cantidad de viaticos
  let total_dias_viaticos = viatico * input_cantidad_viaticos;
  document.getElementById("total_dias_viaticos").innerHTML =
    total_dias_viaticos.toFixed(2);

  //Formulas niveles de dificultad
  let total_nivel_dificultad_1 =
    nivel_de_dificultad_1 * input_niveles_dificultad;
  document.getElementById("total_nivel_dificultad_1").innerHTML =
    total_nivel_dificultad_1.toFixed(2);

  let total_nivel_dificultad_2 =
    nivel_de_dificultad_2 * input_niveles_dificultad;
  document.getElementById("total_nivel_dificultad_2").innerHTML =
    total_nivel_dificultad_2.toFixed(2);

  let total_nivel_dificultad_3 =
    nivel_de_dificultad_3 * input_niveles_dificultad;
  document.getElementById("total_nivel_dificultad_3").innerHTML =
    total_nivel_dificultad_3.toFixed(2);

  let total_nivel_dificultad_4 =
    nivel_de_dificultad_4 * input_niveles_dificultad;
  document.getElementById("total_nivel_dificultad_4").innerHTML =
    total_nivel_dificultad_4.toFixed(2);

  let total_nivel_dificultad_5 =
    nivel_de_dificultad_5 * input_niveles_dificultad;
  document.getElementById("total_nivel_dificultad_5").innerHTML =
    total_nivel_dificultad_5.toFixed(2);

  //Formula Plus Chofer
  let total_plus_chofer = plus_chofer * input_plus_chofer;
  document.getElementById("total_plus_chofer").innerHTML =
    total_plus_chofer.toFixed(2);

  //Formula Pernocte
  let total_plus_pernocte = plus_pernocte * input_plus_pernocte;
  document.getElementById("total_plus_pernocte").innerHTML =
    total_plus_pernocte.toFixed(2);

  //Formula Viatico Guarda
  let total_viatico_guarda = input_cantidad_viaticos * plus_viatico_guarda;
  document.getElementById("total_viatico_guarda").innerHTML =
    total_viatico_guarda.toFixed(2);

  //Formula Terciario
  let total_terciario = (basico * 15) / 100;
  document.getElementById("total_terciario").innerHTML =
    total_terciario.toFixed(2);

  //Formula Universitario
  let total_universitario = (basico * 25) / 100;
  document.getElementById("total_universitario").innerHTML =
    total_universitario.toFixed(2);

  //Formula Jornada extendida
  let total_jornada_extendida = (basico * 10) / 100;
  document.getElementById("total_jornada_extendida").innerHTML =
    total_jornada_extendida.toFixed(2);

  //Formula Mayor Funcion
  let selector_mayor_funcion = document.getElementById(
    "selector_mayor_funcion"
  );
  let selector_dos = selector_mayor_funcion.value;
  let basico2 = 0;
  if (selector_dos == "Instructor") {
    basico2 = basico_instructor;
  } else if (selector_dos == "Supervisor_Especializado") {
    basico2 = basico_supervisor_especializado;
  } else if (selector_dos == "Supervisor") {
    basico2 = basico_supervisor;
  } else if (selector_dos == "Oficial_Especializado") {
    basico2 = basico_oficial_especializado;
  } else if (selector_dos == "Oficial") {
    basico2 = basico_oficial;
  } else if (selector_dos == "Operario_Especializado") {
    basico2 = basico_operario_especializado;
  } else if (selector_dos == "Operario") {
    basico2 = basico_operario;
  } else if (selector_dos == "Aprendiz") {
    basico2 = basico_aprendiz;
  }

  let calculo_primer_basico =
    basico + total_adicional_convenio + total_antiguedad;
  let calculo_segundo_basico =
    basico2 + basico2 * 0.14 + basico2 * 0.015 * input_anos_antiguedad;
  let total_mayor_funcion =
    ((calculo_segundo_basico - calculo_primer_basico) / 25) *
    input_mayor_funcion;
  document.getElementById("total_mayor_funcion").innerHTML =
    total_mayor_funcion.toFixed(2);
}

function limpiar() {
  location.reload();
}
