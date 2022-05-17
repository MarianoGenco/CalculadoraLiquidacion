function displayMayorFuncion() {
  let selector_especialidad = document.getElementById(
    "selector_especialidad"
  ).value;

  if (selector_especialidad == "Instructor") {
    sel_mf_instructor.style.display = "none";
    sel_mf_supervisor_especializado.style.display = "none";
    sel_mf_supervisor.style.display = "none";
    sel_mf_oficial_especializado.style.display = "none";
    sel_mf_oficial.style.display = "none";
    sel_mf_operario_especializado.style.display = "none";
    sel_mf_operario.style.display = "none";
    sel_mf_aprendiz.style.display = "none";
    tabla_total_jornada_extendida.style.display = "none";
  } else if (selector_especialidad == "Supervisor_Especializado") {
    sel_mf_instructor.style.display = "";
    sel_mf_supervisor_especializado.style.display = "none";
    sel_mf_supervisor.style.display = "none";
    sel_mf_oficial_especializado.style.display = "none";
    sel_mf_oficial.style.display = "none";
    sel_mf_operario_especializado.style.display = "none";
    sel_mf_operario.style.display = "none";
    sel_mf_aprendiz.style.display = "none";
  } else if (selector_especialidad == "Supervisor") {
    sel_mf_instructor.style.display = "";
    sel_mf_supervisor_especializado.style.display = "";
    sel_mf_supervisor.style.display = "none";
    sel_mf_oficial_especializado.style.display = "none";
    sel_mf_oficial.style.display = "none";
    sel_mf_operario_especializado.style.display = "none";
    sel_mf_operario.style.display = "none";
    sel_mf_aprendiz.style.display = "none";
    tabla_total_jornada_extendida.style.display = "none";
  } else if (selector_especialidad == "Oficial_Especializado") {
    sel_mf_instructor.style.display = "";
    sel_mf_supervisor_especializado.style.display = "";
    sel_mf_supervisor.style.display = "";
    sel_mf_oficial_especializado.style.display = "none";
    sel_mf_oficial.style.display = "none";
    sel_mf_operario_especializado.style.display = "none";
    sel_mf_operario.style.display = "none";
    sel_mf_aprendiz.style.display = "none";
    tabla_total_jornada_extendida.style.display = "none";
  } else if (selector_especialidad == "Oficial") {
    sel_mf_instructor.style.display = "";
    sel_mf_supervisor_especializado.style.display = "";
    sel_mf_supervisor.style.display = "";
    sel_mf_oficial_especializado.style.display = "";
    sel_mf_oficial.style.display = "none";
    sel_mf_operario_especializado.style.display = "none";
    sel_mf_operario.style.display = "none";
    sel_mf_aprendiz.style.display = "none";
    tabla_total_jornada_extendida.style.display = "none";
  } else if (selector_especialidad == "Operario_Especializado") {
    sel_mf_instructor.style.display = "";
    sel_mf_supervisor_especializado.style.display = "";
    sel_mf_supervisor.style.display = "";
    sel_mf_oficial_especializado.style.display = "";
    sel_mf_oficial.style.display = "";
    sel_mf_operario_especializado.style.display = "none";
    sel_mf_operario.style.display = "none";
    sel_mf_aprendiz.style.display = "none";
    tabla_total_jornada_extendida.style.display = "none";
  } else if (selector_especialidad == "Operario") {
    sel_mf_instructor.style.display = "";
    sel_mf_supervisor_especializado.style.display = "";
    sel_mf_supervisor.style.display = "";
    sel_mf_oficial_especializado.style.display = "";
    sel_mf_oficial.style.display = "";
    sel_mf_operario_especializado.style.display = "";
    sel_mf_operario.style.display = "none";
    sel_mf_aprendiz.style.display = "none";
    tabla_total_jornada_extendida.style.display = "none";
  } else if (selector_especialidad == "Aprendiz") {
    sel_mf_instructor.style.display = "";
    sel_mf_supervisor_especializado.style.display = "";
    sel_mf_supervisor.style.display = "";
    sel_mf_oficial_especializado.style.display = "";
    sel_mf_oficial.style.display = "";
    sel_mf_operario_especializado.style.display = "";
    sel_mf_operario.style.display = "";
    sel_mf_aprendiz.style.display = "none";
    tabla_total_jornada_extendida.style.display = "none";
  }
}

function asd(){
    alert("gosla")
}
