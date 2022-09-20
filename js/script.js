//Inicio Julio de desarrollo - 2022

//Referidos para trabajar (Frank)
//Transferencias de alumnos (Reasignaciones) → enviar a melina y completar formulario de transferencias (botones)
//Videollamada de consulta (psicologia) → Crear funcion similar a Zoom

//→→Functions←←

    //Function to validate sesion (login)
    function validation_sesion(){
  Swal.fire({
    //Text in the alert
    title: `<h3 style="justify-content: center;">Valida tu identidad digital</h3>
        <h6 style="font-size:16px;justify-content: center;">Para poder gestionar mejor la seguridad de nuestros materiales exclusivos, vamos a necesitar que valides tu identidad con el token:</h6>`,
    //Propieties
    focusConfirm: false,
    showClass: { popup: "animate__animated animate__fadeInDown" },
    hideClass: { popup: "animate__animated animate__fadeOutUp" },
    confirmButtonColor: "#E31C79",
    padding: "1.7rem",
    icon: 'warning',
    confirmButtonText: "Siguente",
    background: "linear-gradient(360deg, #00263E ,#003657 70% )",
    color: "#19c2ff",
    allowOutsideClick: false,

    //Create an html format
    html:
      `<br><label ><b>Token de seguridad</b></label><br><input type="password"  id="swal-input1" class="swal2-input" style="color:#b80f80;"><br>
      <br><label ><b>Vuelva a escribir el token de seguridad</b></label><br><input type="password"  id="swal-input2" class="swal2-input" style="color:#b80f80;"><br>`,
    //When you enter the values
    preConfirm: () => {
      return [
        (token_pass = document.getElementById("swal-input1").value),
        (token_pass2 = document.getElementById("swal-input2").value),

          
        Swal.fire({
          //Text in the alert
          html:
            `<h2 style="justify-content: center;"> ¿Confirmar token? </h2>
            `,
          //Propieties
          icon: "question",
          showCancelButton: false,
          confirmButtonColor: "#E31C79",
          cancelButtonColor: "#00ccff",
          confirmButtonText: "Aceptar",
          padding: "1.7rem",
          background: "linear-gradient(360deg, #00263E ,#003657 70% )",
          color: "#19c2ff",
          allowOutsideClick: false,

          
          //Input decition
        }).then((result) => {
          //If the user choose 'aceptar'
          if (result.isConfirmed) {
              if(token_pass != "alianza.pa" || token_pass != "alianza.pa" )   {
                  Swal.fire({
                      icon: 'error',
                      title: 'Oops...',
                      text: '¡Token de seguridad invalido!',
                      padding: "1.7rem",
                      background: "linear-gradient(360deg, #00263E ,#003657 70% )",
                      confirmButtonColor: "#E31C79",

                      color: "#19c2ff",
                      confirmButtonText: "Aceptar",

                    }).then((result) => {
                      //If the user choose 'aceptar'
                      if (result.isConfirmed) {
                          validation_sesion()
                          token_pass.reset()}})   
              }
              else {

                let timerInterval
                Swal.fire({
                  title: '¡Token de seguridad valido!',
                  text:'Redireccionando...',
                  padding: "1.7rem",
                  background: "linear-gradient(360deg, #00263E ,#003657 70% )",
                  icon: 'success',
                  timer: 1800,
                  color: "#19c2ff",

                  timerProgressBar: true,
                  didOpen: () => {
                    Swal.showLoading()
                    const b = Swal.getHtmlContainer().querySelector('b')
                    timerInterval = setInterval(() => {
                      b.textContent = Swal.getTimerLeft()
                    }, 100)
                  },
                  willClose: () => {
                    clearInterval(timerInterval)
                  }
                }).then((result) => {
                  /* Read more about handling dismissals below */
                  if (result.dismiss === Swal.DismissReason.timer) {
                   //Welcome (When the user refresh the site)
                    import_teachers_info()
                  }
                })
                  
              }
            
              
          }

        }),
      ];
    },
  });
    }

    //Function to receive the information about the teacher
    function import_teachers_info() {
      if(!usuarioInicioSesion == true){
        Swal.fire({
          //Text in the alert
          title: `<h3 style="justify-content: center;">Bienvenido/a al directorio de contactos del <b>staff de Alianza</b>.</h3>
              <h5 style="font-size:22px;justify-content: center;">En esta plataforma vas a poder encontrar los contactos del personal responsable de abordar y resolver tus dudas e inquietudes.</h5>
              <h6 style="font-size:16px;justify-content: center;">Para poder gestionar mejor tu solucionador de problemas vamos a necesitar los siguientes datos:</h6>`,
  
          //Propieties
          focusConfirm: false,
          showClass: { popup: "animate__animated animate__fadeInDown" },
          hideClass: { popup: "animate__animated animate__fadeOutUp" },
          confirmButtonColor: "#E31C79",
          padding: "1.7rem",
          confirmButtonText: "Continuar",
          background: "linear-gradient(360deg, #00263E ,#003657 70% )",
          color: "#19c2ff",
          allowOutsideClick: false,
  
          //Create an html format
          html:
            '<br><label ><b>Nombre</b></label><br><input type="text"  id="swal-input1" class="swal2-input" style="color:#E31C79;"><br>' +
            '<br><label><b>Num°PA</b></label><br><input type="text"  id="swal-input2" class="swal2-input"style="color:#E31C79;"><br>'+
            '<br><label><b>Link de planilla de asistencia:</b></label><br><input type="text"  id="swal-input3" class="swal2-input"style="color:#E31C79;"><br>',
          //When you enter the values
          preConfirm: () => {
            return [
              (name_teacher = document.getElementById("swal-input1").value),
              (PA_teacher = document.getElementById("swal-input2").value),
              (PA_link = document.getElementById("swal-input3").value),

              usuarioInicioSesion = name_teacher,
              PAinicioSesion = PA_teacher,
              PA_linkPlanilla = PA_link,

              Swal.fire({
                //Text in the alert
                html:
                  `<h2 style="justify-content: center;">Ingresaste la siguiente información: </h2>
                  <br><p>Nombre: <strong style="color:#E31C79;">` +
                  name_teacher +
                  `</strong></p>
                  <p>N°PA:  <strong style="color:#E31C79;">` +
                  PA_teacher +
                  `</strong></p><p>Link: <strong style="color:#E31C79;">`
                  +
                  PA_link +
                  `<br><br>
                  <h7 style="color:#19c2ff;"> Esta información quedara guardada en el navegador, si la informacion esta <u>correcta</u> haz click en <b>aceptar</b>, si necesitas <u>modificar</u> algo haz click en <strong>modificar</strong>?<h7>
                  `,

                //Propieties
                icon: "question",
                showCancelButton: true,
                confirmButtonColor: "#E31C79",
                cancelButtonColor: "#00ccff",
                confirmButtonText: "Aceptar",
                cancelButtonText: "Modificar",
                padding: "1.7rem",
                background: "linear-gradient(360deg, #00263E ,#003657 70% )",
                color: "#19c2ff",
                allowOutsideClick: false,
  
                //Input decition
              }).then((result) => {
                //If the user choose 'aceptar'
                if (result.isConfirmed) {
                  localStorage.setItem('Usuario reconocido', usuarioInicioSesion), //si no es la primera vez que ingresa
                  localStorage.setItem('PA reconocido', PAinicioSesion), //si no es la primera vez que ingresa
                  localStorage.setItem('Planilla reconocida', PA_linkPlanilla), //si no es la primera vez que ingresa
    
                  swal.fire({
                    title: `<h2>¡Información almacenada!</h2>
                          <h5>Tu Información fue almacenada con exito.</h5>`,
                    background: "linear-gradient(360deg, #00263E ,#003657 70% )",
                    color: "#19c2ff",
                    padding: "1.7rem",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500,
                  });               
                    
                }
  
                //If the user choose 'modificar'
                else {
                  usuarioInicioSesion = "",
                  PAinicioSesion = "",
                  PA_linkPlanilla = ""
                  import_teachers_info();
                }
              }),
            ];
          },
        });
        
 
      } else {
      swal.fire({
      title :`<h3 style="justify-content: center;">¡Bienvenido otra vez! <br><h3 style="color:#00ccff;">${usuarioInicioSesion} [${PAinicioSesion}]</h3><h3>`,
      confirmButtonColor: "#E31C79",
      padding: "1.7rem",
      background: "linear-gradient(360deg, #00263E ,#003657 70% )",
      color: "#19c2ff",
    })
        };
      
    }

    //Function to show the asistance menu
    function virtual_asistance_menu() {
      const { value: asistance } = Swal.fire({
        title: "Por favor elija la opción que más se asemeje a su necesidad:",
        input: "select",
        confirmButtonColor: "#E31C79",
        cancelButtonColor: "#00ccff",
        confirmButtonText: "Aceptar",
        cancelButtonText: "Salir",
        padding: "1.7rem",
        background: "linear-gradient(360deg, #00263E ,#003657 70% )",
        color: "#19c2ff",
        inputOptions: {
          Animico: {
            Asistencia_emocional: "Asistencia emocional",
            Inteligencia_emocional: "Inteligencia emocional",
            Problemas_con_alumnos_varios: "Problemas con alumnos (varios)",
          },

          Informativo: {
            Capacitaciones_y_orientación_general:
              "Capacitaciones y orientación pedagogica general",
            Materiales: "Materiales",
            Vacaciones_o_Feriados: "Vacaciones o Feriados",
          },

          "Soporte Tecnico": {
            Horarios_equivocados: "Horarios equivocados",
            Inasistencias_consecutivas_del_alumno:
              "Inasistencias consecutivas del alumno",
            Planillas: "Planillas de asistencia del profesor",
            Planillas_de_disponibilidad: "Planillas de disponibilidad",
            Squads: "Squads",
          },

          "Finanzas y miselaneos": {
            Certificaciones_alumnos: "Certificaciones (alumnos)",
            Constancia_de_trabajo_o_estudios:
              "Constancia de trabajo o estudio (profesores o alumnos)",
            Contratos: "Contratos",
            Honorarios_sueldos: "Honorarios (sueldos)",
            Orientacion_a_USDT_y_criptomonedas:
              "Orientacion a USDT y criptomonedas (PA argentinos)",
            Renuncias: "Renuncias",
          },
        },
        inputPlaceholder: "Selecciona una opción",
        showCancelButton: true,
        inputValidator: (value) => {
          //If the user doesn't choose something
          if (!value) {
            return "Selecciona una opción";
          }

          //If the user choose something
          switch (value) {
            case "Asistencia_emocional":
              Swal.fire({
                //Text in the alert
                title: `<h6>Haz seleccionado <br>"Asistencia emocional"</h6>`,
                html: `<p style="font-size:16px;justify-content: center;">Desde el area academica estamos <b>concientes de los grandes esfuerzos que implica la labor de un educador</b>, por lo que le proveemos un espacio para que puedas <u>expresarte libremente</u> en cada aspecto de tu estadia con nosotros.</p>`,
                //Img in the alert
                imageUrl: "./Img_circle_staff/Circle_Modals/Jesica.png",
                imageWidth: 350,
                imageHeight: 300,
                imageAlt: "Custom image",

                //Propieties
                showCancelButton: true,
                confirmButtonColor: "#E31C79",
                cancelButtonColor: "#00ccff",
                confirmButtonText: "Enviar Mensaje",
                cancelButtonText: "Volver",
                padding: "1.7rem",
                background: "linear-gradient(360deg, #00263E ,#003657 70% )",
                color: "#19c2ff",
              }).then((result) => {
                if (result.isConfirmed) {
                  //True("Acept")
                  window.open(
                    "https://api.whatsapp.com/send?phone=5491160524468&text=Nombre: %0A" +
                    usuarioInicioSesion +
                      "%0A%0APA: %0A" +
                      PAinicioSesion +
                      "%0A",
                    "_blank"
                  );
                  virtual_asistance_menu();
                  //redireccionar a un link
                }
                //False("Volver al asistente")
                else {
                  virtual_asistance_menu();
                }
              });
              break;

            case "Inteligencia_emocional":
              Swal.fire({
                //Text in the alert
                title: `<h6>Haz seleccionado <br>"Inteligencia emocional"</h6>`,
                html: `<p style="font-size:16px;justify-content: center;">Desde el area academica <b>estamos concientes de los grandes esfuerzos que implica la labor de un educador</b>, por lo que le proveemos personal especializado para poder <u>identificar y gestionar tus emociones y las de los demas</u>, durante tu estadia con nosotros.</p>`,
                //Img in the alert
                imageUrl: "./Img_circle_staff/Circle_Modals/Jesica.png",
                imageWidth: 350,
                imageHeight: 300,
                imageAlt: "Custom image",

                //Propieties
                showCancelButton: true,
                confirmButtonColor: "#E31C79",
                cancelButtonColor: "#00ccff",
                confirmButtonText: "Enviar Mensaje",
                cancelButtonText: "Volver",
                padding: "1.7rem",
                background: "linear-gradient(360deg, #00263E ,#003657 70% )",
                color: "#19c2ff",
              }).then((result) => {
                if (result.isConfirmed) {
                  //True("Acept")
                  window.open(
                    "https://api.whatsapp.com/send?phone=5491160524468&text=Nombre: %0A" +
                    usuarioInicioSesion +
                      "%0A%0APA: %0A" +
                      PAinicioSesion +
                      "%0A",
                    "_blank"
                  );
                  //redireccionar a un link
                  virtual_asistance_menu();
                }
                //False("Volver al asistente")
                else {
                  virtual_asistance_menu();
                }
              });
              break;

            case "Problemas_con_alumnos_varios":
              Swal.fire({
                //Text in the alert
                title: `<h6>Haz seleccionado <br>"Problemas con alumnos (varios)"</h6>`,
                html: `<p style="font-size:16px;justify-content: center;">Desde el area academica estamos conciente de la importancia del <b>acompañamiento de cada estudiante del instituto</b>, por lo que le proveemos de personal especializado para que puedas <u>gestionar y consultar cualquier inconveniente proveniente de tus estudiantes</u> durante tu estadia con nosotros.</p>`,

                //Img in the alert
                imageUrl: "./Img_circle_staff/Circle_Modals/Micaela.png",
                imageWidth: 350,
                imageHeight: 300,
                imageAlt: "Custom image",

                //Propieties
                showCancelButton: true,
                confirmButtonColor: "#E31C79",
                cancelButtonColor: "#00ccff",
                confirmButtonText: "Enviar Mensaje",
                cancelButtonText: "Volver",
                padding: "1.7rem",
                background: "linear-gradient(360deg, #00263E ,#003657 70% )",
                color: "#19c2ff",
              }).then((result) => {
                if (result.isConfirmed) {
                  //True("Acept")
                  window.open(
                    "https://api.whatsapp.com/send?phone=5492214374089&text=Nombre: %0A" +
                    usuarioInicioSesion +
                      "%0A%0APA: %0A" +
                      PAinicioSesion +
                      "%0A",
                    "_blank"
                  );
                  //redireccionar a un link
                  virtual_asistance_menu();
                }
                //False("Volver al asistente")
                else {
                  virtual_asistance_menu();
                }
              });
              break;

            case "Capacitaciones_y_orientación_general":
              function isamara_capacitacion() {
                Swal.fire({
                  //Text in the alert
                  title: `<h6>Haz seleccionado <br>"Capacitaciones y orientación pedagogica general"</h6>`,
                  html: `<p style="font-size:16px;justify-content: center;">Desde el area academica estamos conciente de la importancia de <b>formar profesionales cada vez más capacitados</b>, por lo que le proveemos de personal especializado para que puedas <u>gestionar y consultar cualquier duda pedagogica</u> durante tu estadia con nosotros.</p>
                                    <br><p>Si tienes <strong>más de 3 meses en el instituto</strong> puedes hacer <u>click</u> en el boton "Tengo +3 meses".</p>`,

                  //Img in the alert
                  imageUrl: "./Img_circle_staff/Circle_Modals/Isamara.png",
                  imageWidth: 350,
                  imageHeight: 300,
                  imageAlt: "Custom image",

                  //Propieties
                  showCancelButton: true,
                  showDenyButton: true,
                  confirmButtonColor: "#E31C79",
                  cancelButtonColor: "#00ccff",
                  confirmButtonText: "Enviar Mensaje",
                  denyButtonText: `Tengo +3 meses`,
                  denyButtonColor: "#4ecf1b",
                  cancelButtonText: "Volver",
                  padding: "1.7rem",
                  background: "linear-gradient(360deg, #00263E ,#003657 70% )",
                  color: "#19c2ff",
                }).then((result) => {
                  if (result.isConfirmed) {
                    //True("Acept")
                    window.open(
                      "https://api.whatsapp.com/send?phone=5492214401998&text=Nombre: %0A" +
                      usuarioInicioSesion +
                      "%0A%0APA: %0A" +
                      PAinicioSesion +
                      "%0A",
                    "_blank"
                    );
                    //redireccionar a un link
                    virtual_asistance_menu();
                  }
                  //+3 months
                  else if (result.isDenied) {
                    santiago_capacitacion();
                  }

                  //False("Volver al asistente")
                  else {
                    virtual_asistance_menu();
                  }
                });
              }

              function santiago_capacitacion() {
                Swal.fire({
                  //Text in the alert
                  title: `<h6>Haz seleccionado <br>"Capacitaciones y orientación general"</h6>`,
                  html: `<p style="font-size:16px;justify-content: center;">Desde el area academica estamos conciente de la importancia de <b>formar profesionales cada vez más capacitados</b>, por lo que le proveemos de personal especializado para que puedas <u>gestionar y consultar cualquier duda pedagogica</u> durante tu estadia con nosotros.</p>
                                            <br><p>Si tienes <strong>menos de 3 meses en el instituto</strong> puedes hacer <u>click</u> en el boton "Tengo -3 meses".</p>`,

                  //Img in the alert
                  imageUrl: "./Img_circle_staff/Circle_Modals/Santiago.png",
                  imageWidth: 350,
                  imageHeight: 300,
                  imageAlt: "Custom image",

                  //Propieties
                  showCancelButton: true,
                  showDenyButton: true,
                  confirmButtonColor: "#E31C79",
                  cancelButtonColor: "#00ccff",
                  confirmButtonText: "Enviar Mensaje",
                  denyButtonText: `Tengo -3 meses`,
                  denyButtonColor: "red",
                  cancelButtonText: "Volver",
                  padding: "1.7rem",
                  background: "linear-gradient(360deg, #00263E ,#003657 70% )",
                  color: "#19c2ff",
                }).then((result) => {
                  if (result.isConfirmed) {
                    //True("Acept")
                    window.open(
                      "https://api.whatsapp.com/send?phone=5491167147146&text=Nombre: %0A" +
                      usuarioInicioSesion +
                      "%0A%0APA: %0A" +
                      PAinicioSesion +
                      "%0A",
                    "_blank"
                    );
                    //redireccionar a un link
                    virtual_asistance_menu();
                  }
                  //+3 months
                  else if (result.isDenied) {
                    isamara_capacitacion();
                  }
                  //False("Volver al asistente")
                  else {
                    virtual_asistance_menu();
                  }
                });
              }

              isamara_capacitacion();
              break;

            case "Materiales":
              function isamara_capacitacion_materiales() {
                Swal.fire({
                  //Text in the alert
                  title: `<h6>Haz seleccionado <br>"Materiales"</h6>`,
                  html: `<p style="font-size:16px;justify-content: center;">Desde el area academica estamos conciente de la importancia de <b>formar profesionales cada vez más capacitados</b>, por lo que le proveemos de personal especializado para que puedas <u>gestionar y consultar sobre materiales academicos</u> durante tu estadia con nosotros.</p>
                                    <br><p>Si tienes <strong>más de 3 meses en el instituto</strong> puedes hacer <u>click</u> en el boton "Tengo +3 meses".</p>`,

                  //Img in the alert
                  imageUrl: "./Img_circle_staff/Circle_Modals/Isamara.png",
                  imageWidth: 350,
                  imageHeight: 300,
                  imageAlt: "Custom image",

                  //Propieties
                  showCancelButton: true,
                  showDenyButton: true,
                  confirmButtonColor: "#E31C79",
                  cancelButtonColor: "#00ccff",
                  confirmButtonText: "Enviar Mensaje",
                  denyButtonText: `Tengo +3 meses`,
                  denyButtonColor: "#4ecf1b",
                  cancelButtonText: "Volver",
                  padding: "1.7rem",
                  background: "linear-gradient(360deg, #00263E ,#003657 70% )",
                  color: "#19c2ff",
                }).then((result) => {
                  if (result.isConfirmed) {
                    //True("Acept")
                    window.open(
                      "https://api.whatsapp.com/send?phone=5492214401998&text=Nombre: %0A" +
                      usuarioInicioSesion +
                      "%0A%0APA: %0A" +
                      PAinicioSesion +
                      "%0A",
                    "_blank"
                    );
                    //redireccionar a un link
                    virtual_asistance_menu();
                  }
                  //+3 months
                  else if (result.isDenied) {
                    santiago_capacitacion_materiales();
                  }

                  //False("Volver al asistente")
                  else {
                    virtual_asistance_menu();
                  }
                });
              }

              function santiago_capacitacion_materiales() {
                Swal.fire({
                  //Text in the alert
                  title: `<h6>Haz seleccionado <br>"Materiales"</h6>`,
                  html: `<p style="font-size:16px;justify-content: center;">Desde el area academica estamos conciente de la <b>importancia de formar profesionales cada vez más capacitados</b>, por lo que le proveemos de personal especializado para que puedas <u>gestionar y consultar sobre materiales academicos</u> durante tu estadia con nosotros.</p>
                                            <br><p>Si tienes <strong>más de 3 meses en el instituto</strong> puedes hacer <u>click</u> en el boton "Tengo -3 meses".</p>`,

                  //Img in the alert
                  imageUrl: "./Img_circle_staff/Circle_Modals/Santiago.png",
                  imageWidth: 350,
                  imageHeight: 300,
                  imageAlt: "Custom image",

                  //Propieties
                  showCancelButton: true,
                  showDenyButton: true,
                  confirmButtonColor: "#E31C79",
                  cancelButtonColor: "#00ccff",
                  confirmButtonText: "Enviar Mensaje",
                  denyButtonText: `Tengo -3 meses`,
                  denyButtonColor: "red",
                  cancelButtonText: "Volver",
                  padding: "1.7rem",
                  background: "linear-gradient(360deg, #00263E ,#003657 70% )",
                  color: "#19c2ff",
                }).then((result) => {
                  if (result.isConfirmed) {
                    //True("Acept")
                    window.open(
                      "https://api.whatsapp.com/send?phone=5491167147146&text=Nombre: %0A" +
                      usuarioInicioSesion +
                      "%0A%0APA: %0A" +
                      PAinicioSesion +
                      "%0A",
                    "_blank"
                    );
                    //redireccionar a un link
                    virtual_asistance_menu();
                  }
                  //+3 months
                  else if (result.isDenied) {
                    isamara_capacitacion_materiales();
                  }
                  //False("Volver al asistente")
                  else {
                    virtual_asistance_menu();
                  }
                });
              }

              isamara_capacitacion_materiales();
              break;

            case "Vacaciones_o_Feriados":
              Swal.fire({
                //Text in the alert
                title: `<h6>Haz seleccionado <br>"Haz seleccionado "Vacaciones o Feriados"</h6>`,
                html: `<p style="font-size:16px;justify-content: center;">Desde el area academica estamos conciente de la importancia de <b>cuidar y premiar a nuestros profesores dedicados</b>, por lo que le proveemos de personal especializado para que puedas <u>consultar cualquier duda proveniente de feriados o vacaciones</u> durante tu estadia con nosotros.</p>`,

                //Img in the alert
                imageUrl: "./Img_circle_staff/Circle_Modals/MariaPaula.png",
                imageWidth: 350,
                imageHeight: 300,
                imageAlt: "Custom image",

                //Propieties
                showCancelButton: true,
                confirmButtonColor: "#E31C79",
                cancelButtonColor: "#00ccff",
                confirmButtonText: "Enviar Mensaje",
                cancelButtonText: "Volver",
                padding: "1.7rem",
                background: "linear-gradient(360deg, #00263E ,#003657 70% )",
                color: "#19c2ff",
              }).then((result) => {
                if (result.isConfirmed) {
                  //True("Acept")
                  window.open(
                    "https://api.whatsapp.com/send?phone=5492235609443&text=Nombre: %0A" +
                    usuarioInicioSesion +
                      "%0A%0APA: %0A" +
                      PAinicioSesion +
                      "%0A",
                    "_blank"
                  );
                  virtual_asistance_menu();
                  //redireccionar a un link
                }
                //False("Volver al asistente")
                else {
                  virtual_asistance_menu();
                }
              });
              break;

            case "Certificaciones_alumnos":
              Swal.fire({
                //Text in the alert
                title: `<h6>Haz seleccionado <br>"Haz seleccionado "Certificaciones (alumnos)"</h6>`,
                html: `<p style="font-size:16px;justify-content: center;">Desde el area academica estamos conciente de la importancia de <b>valorar a nuestros estudiantes dedicados</b>, por lo que le proveemos de personal especializado para que puedas <u>consultar y gestionar cualquier duda proveniente de certificaciónes de los estudiantes</u> durante tu estadia con nosotros.</p>`,

                //Img in the alert
                imageUrl: "./Img_circle_staff/Circle_Modals/MariaPaula.png",
                imageWidth: 350,
                imageHeight: 300,
                imageAlt: "Custom image",

                //Propieties
                showCancelButton: true,
                confirmButtonColor: "#E31C79",
                cancelButtonColor: "#00ccff",
                confirmButtonText: "Enviar Mensaje",
                cancelButtonText: "Volver",
                padding: "1.7rem",
                background: "linear-gradient(360deg, #00263E ,#003657 70% )",
                color: "#19c2ff",
              }).then((result) => {
                if (result.isConfirmed) {
                  //True("Acept")
                  window.open(
                    "https://api.whatsapp.com/send?phone=5492235609443&text=Nombre: %0A" +
                    usuarioInicioSesion +
                      "%0A%0APA: %0A" +
                      PAinicioSesion +
                      "%0A",
                    "_blank"
                  );
                  virtual_asistance_menu();
                  //redireccionar a un link
                }
                //False("Volver al asistente")
                else {
                  virtual_asistance_menu();
                }
              });
              break;

            case "Constancia_de_trabajo_o_estudios":
              Swal.fire({
                //Text in the alert
                title: `<h6>Haz seleccionado <br>"Haz seleccionado "Constancia de trabajo o estudio (profesores o alumnos)"</h6>`,
                html: `<p style="font-size:16px;justify-content: center;">Desde el area academica estamos conciente de la importancia de <b>valorar a nuestros profesores dedicados</b>, por lo que le proveemos de personal especializado para que puedas <u>consultar y gestionar cualquier constancia de <strong>prestación de servicios</strong> de los profesores</u> durante tu estadia con nosotros.</p>`,

                //Img in the alert
                imageUrl: "./Img_circle_staff/Circle_Modals/MariaPaula.png",
                imageWidth: 350,
                imageHeight: 300,
                imageAlt: "Custom image",

                //Propieties
                showCancelButton: true,
                confirmButtonColor: "#E31C79",
                cancelButtonColor: "#00ccff",
                confirmButtonText: "Enviar Mensaje",
                cancelButtonText: "Volver",
                padding: "1.7rem",
                background: "linear-gradient(360deg, #00263E ,#003657 70% )",
                color: "#19c2ff",
              }).then((result) => {
                if (result.isConfirmed) {
                  //True("Acept")
                  window.open(
                    "https://api.whatsapp.com/send?phone=5492235609443&text=Nombre: %0A" +
                    usuarioInicioSesion +
                      "%0A%0APA: %0A" +
                      PAinicioSesion +
                      "%0A",
                    "_blank"
                  );
                  virtual_asistance_menu();
                  //redireccionar a un link
                }
                //False("Volver al asistente")
                else {
                  virtual_asistance_menu();
                }
              });
              break;

            case "Horarios_equivocados":
              function marcos_hs_equivocados() {
                Swal.fire({
                  //Text in the alert
                  title: `<h6>Haz seleccionado <br>"Horarios equivocados"</h6>`,
                  html: `<p style="font-size:16px;justify-content: center;">Desde el area academica estamos conciente de la importancia de <b>acompañar a nuestros estudiantes de la manera más personalizada posible</b>, por lo que le proveemos de personal especializado para que puedas <u>gestionar y consultar cualquier duda sobre horarios de los alumnos</u> durante tu estadia con nosotros.</p>
                                    <br><p>Si tienes una duda con un estudiante <strong> deberas comunicarte con el asistente responsable (dependiendo del ID del alumno) </strong> haciendo <u>click</u> en el boton "Sig." hasta encontrar las iniciales correctas.</p>`,

                  //Img in the alert
                  imageUrl: "./Img_circle_staff/Circle_Modals/Marcos.png",
                  imageWidth: 350,
                  imageHeight: 300,
                  imageAlt: "Custom image",

                  //Propieties
                  showCancelButton: true,
                  showDenyButton: true,
                  confirmButtonColor: "#E31C79",
                  cancelButtonColor: "#00ccff",
                  confirmButtonText: "Enviar Mensaje",
                  denyButtonText: `Sig. (ID: CO o AR)`,
                  denyButtonColor: "red",
                  cancelButtonText: "Volver",
                  padding: "1.7rem",
                  background: "linear-gradient(360deg, #00263E ,#003657 70% )",
                  color: "#19c2ff",
                }).then((result) => {
                  if (result.isConfirmed) {
                    //True("Acept")
                    window.open(
                      "https://api.whatsapp.com/send?phone=558191292733&text=Nombre: %0A" +
                      usuarioInicioSesion +
                      "%0A%0APA: %0A" +
                      PAinicioSesion +
                      "%0A",
                    "_blank"
                    );
                    //redireccionar a un link
                    virtual_asistance_menu();
                  }
                  //+3 months
                  else if (result.isDenied) {
                    mauro_hs_equivocados();
                  }

                  //False("Volver al asistente")
                  else {
                    virtual_asistance_menu();
                  }
                });
              }
              function mauro_hs_equivocados() {
                Swal.fire({
                  //Text in the alert
                  title: `<h6>Haz seleccionado <br>"Horarios equivocados"</h6>`,
                  html: `<p style="font-size:16px;justify-content: center;">Desde el area academica estamos conciente de la importancia de <b>acompañar a nuestros estudiantes de la manera más personalizada posible</b>, por lo que le proveemos de personal especializado para que puedas <u>gestionar y consultar cualquier duda sobre horarios de los alumnos</u> durante tu estadia con nosotros.</p>
                                    <br><p>Si tienes una duda con un estudiante <strong> deberas comunicarte con el asistente responsable (dependiendo del ID del alumno)</strong> haciendo <u>click</u> en el boton "Sig." hasta encontrar las iniciales correctas.</p>`,

                  //Img in the alert
                  imageUrl: "./Img_circle_staff/Circle_Modals/Mauro.png",
                  imageWidth: 350,
                  imageHeight: 300,
                  imageAlt: "Custom image",

                  //Propieties
                  showCancelButton: true,
                  showDenyButton: true,
                  confirmButtonColor: "#E31C79",
                  cancelButtonColor: "#00ccff",
                  confirmButtonText: "Enviar Mensaje",
                  denyButtonText: `Sig. (ID: US o PE)`,
                  denyButtonColor: "rgb(209, 193, 50)",
                  cancelButtonText: "Volver",
                  padding: "1.7rem",
                  background: "linear-gradient(360deg, #00263E ,#003657 70% )",
                  color: "#19c2ff",
                }).then((result) => {
                  if (result.isConfirmed) {
                    //True("Acept")
                    window.open(
                      "https://api.whatsapp.com/send?phone=5493875990961&text=Nombre: %0A" +
                      usuarioInicioSesion +
                      "%0A%0APA: %0A" +
                      PAinicioSesion +
                      "%0A",
                    "_blank"
                    );
                    //redireccionar a un link
                    virtual_asistance_menu();
                  }
                  //to Mirna
                  else if (result.isDenied) {
                    hugo_hs_equivocados();
                  }

                  //False("Volver al asistente")
                  else {
                    virtual_asistance_menu();
                  }
                });
              }
              function hugo_hs_equivocados() {
                Swal.fire({
                  //Text in the alert
                  title: `<h6>Haz seleccionado <br>"Horarios equivocados"</h6>`,
                  html: `<p style="font-size:16px;justify-content: center;">Desde el area academica estamos conciente de la importancia de <b>acompañar a nuestros estudiantes de la manera más personalizada posible</b>, por lo que le proveemos de personal especializado para que puedas <u>gestionar y consultar cualquier duda sobre horarios de los alumnos</u> durante tu estadia con nosotros.</p>
                                        <br><p>Si tienes una duda con un estudiante <strong> deberas comunicarte con el asistente responsable (dependiendo del ID del alumno)</strong> haciendo <u>click</u> en el boton "Sig." hasta encontrar las iniciales correctas.</p>`,

                  //Img in the alert
                  imageUrl: "./Img_circle_staff/Circle_Modals/Hugo.png",
                  imageWidth: 350,
                  imageHeight: 300,
                  imageAlt: "Custom image",

                  //Propieties
                  showCancelButton: true,
                  showDenyButton: true,
                  confirmButtonColor: "#E31C79",
                  cancelButtonColor: "#00ccff",
                  confirmButtonText: "Enviar Mensaje",
                  denyButtonText: `Sig. (ID: CH o MX)`,
                  denyButtonColor: "#4ecf1b",
                  cancelButtonText: "Volver",
                  padding: "1.7rem",
                  background: "linear-gradient(360deg, #00263E ,#003657 70% )",
                  color: "#19c2ff",
                }).then((result) => {
                  if (result.isConfirmed) {
                    //True("Acept")
                    window.open(
                      "https://api.whatsapp.com/send?phone=5492215862379&text=Nombre: %0A" +
                      usuarioInicioSesion +
                      "%0A%0APA: %0A" +
                      PAinicioSesion +
                      "%0A",
                    "_blank"
                    );
                    //redireccionar a un link
                    virtual_asistance_menu();
                  }
                  //To Marcos
                  else if (result.isDenied) {
                    marcos_hs_equivocados();
                  }

                  //False("Volver al asistente")
                  else {
                    virtual_asistance_menu();
                  }
                });
              }
              marcos_hs_equivocados();
              break;

            case "Inasistencias_consecutivas_del_alumno":
              function Inasistencias_consecutivas_del_alumno() {
                Swal.fire({
                  //Text in the alert
                  title: `<h6>Haz seleccionado <br>"Inasistencias consecutivas del alumno"</h6>`,
                  html: `<p style="font-size:16px;justify-content: center;">Desde el area academica estamos conciente de la importancia de <b>acompañar a nuestros estudiantes de la manera más personalizada posible</b>, por lo que le proveemos de personal especializado para que puedas <u>gestionar y consultar cualquier duda sobre la continuidad de un estudiante en el instituto</u> durante tu estadia con nosotros.</p>
                                <br><p>Si tienes una duda con un estudiante <strong> deberas: <br> 
                                <ol>
                                <li>Enviar un mensaje al responsable de coordinación administrativa, enviando el ID y la situacion.</li>
                                <li>Completar el formulario de inasistencias.</li>
                                </ol>
                                </strong><br> Haz <u>click</u> en el boton "Enviar mensaje" para comunicarte con la coordinacion administrativa o "Completa el formulario" para realizar el mismo.</p>`,

                  //Img in the alert
                  imageUrl: "./Img_circle_staff/Circle_Modals/Micaela.png",
                  imageWidth: 350,
                  imageHeight: 300,
                  imageAlt: "Custom image",

                  //Propieties
                  showCancelButton: true,
                  showDenyButton: true,
                  confirmButtonColor: "#E31C79",
                  cancelButtonColor: "#00ccff",
                  confirmButtonText: "Enviar Mensaje",
                  denyButtonText: `Completar formulario`,
                  denyButtonColor: "#4ecf1b",
                  cancelButtonText: "Volver",
                  padding: "1.7rem",
                  background: "linear-gradient(360deg, #00263E ,#003657 70% )",
                  color: "#19c2ff",
                }).then((result) => {
                  if (result.isConfirmed) {
                    //True("Acept")
                    window.open(
                      "https://api.whatsapp.com/send?phone=5492214374089&text=Nombre: %0A" +
                      usuarioInicioSesion +
                      "%0A%0APA: %0A" +
                      PAinicioSesion +
                      "%0A",
                    "_blank"
                    );
                    //redireccionar a un link
                    Inasistencias_consecutivas_del_alumno();
                  }

                  //Form
                  else if (result.isDenied) {
                    window.open("https://docs.google.com/forms/d/1oemyRxzfE_Mb3g9HCXL0vgUv5h0cRJAf2xnCXD0EyuM/edit?ts=62cc2587", "_blank");
                    Inasistencias_consecutivas_del_alumno();
                  }

                  //False("Volver al asistente")
                  else {
                    virtual_asistance_menu();
                  }
                });
              }
              Inasistencias_consecutivas_del_alumno();
              break;

            case "Planillas":
              function javier_planillas() {
                Swal.fire({
                  //Text in the alert
                  title: `<h6>Haz seleccionado <br>"Planillas de asistencia del profesor"</h6>`,
                  html: `<p style="font-size:16px;justify-content: center;">Desde el area academica estamos conciente de la importancia del <b>control metrico del profesor</b>, por lo que le proveemos de personal especializado para que puedas <u>gestionar y consultar cualquier duda relacionada a las planillas de asistencia</u> durante tu estadia con nosotros.</p>
                                <br><p>Si tienes <strong>dudas de como completar correctamente la planilla </strong> puedes hacer <u>click</u> en el boton "¿Cómo completarla?".</p>`,

                  //Img in the alert
                  imageUrl: "./Img_circle_staff/Circle_Modals/Javier.png",
                  imageWidth: 350,
                  imageHeight: 300,
                  imageAlt: "Custom image",

                  //Propieties
                  showCancelButton: true,
                  showDenyButton: true,
                  confirmButtonColor: "#E31C79",
                  cancelButtonColor: "#00ccff",
                  confirmButtonText: "Enviar Mensaje",
                  denyButtonText: `¿Cómo completarla?`,
                  denyButtonColor: "#4ecf1b",
                  cancelButtonText: "Volver",
                  padding: "1.7rem",
                  background: "linear-gradient(360deg, #00263E ,#003657 70% )",
                  color: "#19c2ff",
                }).then((result) => {
                  if (result.isConfirmed) {
                    //True("Acept")
                    window.open(
                      "https://api.whatsapp.com/send?phone=5493875833358&text=Nombre: %0A" +
                      usuarioInicioSesion +
                      "%0A%0APA: %0A" +
                      PAinicioSesion +
                      "%0A",
                    "_blank"
                    );
                    //redireccionar a un link
                    virtual_asistance_menu();
                  }

                  //Questions
                  else if (result.isDenied) {
                    micaela_planillas();
                  }

                  //False("Volver al asistente")
                  else {
                    virtual_asistance_menu();
                  }
                });
              }

              function micaela_planillas() {
                Swal.fire({
                  //Text in the alert
                  title: `<h6>Haz seleccionado <br>"Planillas de asistencia del profesor"</h6>`,
                  html: `<p style="font-size:16px;justify-content: center;">Desde el area academica estamos conciente de la importancia del control metrico del profesor, por lo que le proveemos de personal especializado para que puedas <u>gestionar y consultar cualquier duda relacionada a las planillas de asistencia</u> durante tu estadia con nosotros.</p>
                                    <br><p>Si tienes <strong>dudas sobre el codigo y errores de este en tu planilla</strong> puedes hacer <u>click</u> en el boton "Dudas con codigo".</p>`,

                  //Img in the alert
                  imageUrl: "./Img_circle_staff/Circle_Modals/Micaela.png",
                  imageWidth: 350,
                  imageHeight: 300,
                  imageAlt: "Custom image",

                  //Propieties
                  showCancelButton: true,
                  showDenyButton: true,
                  confirmButtonColor: "#E31C79",
                  cancelButtonColor: "#00ccff",
                  confirmButtonText: "Enviar Mensaje",
                  denyButtonText: `Dudas con codigo`,
                  denyButtonColor: "red",
                  cancelButtonText: "Volver",
                  padding: "1.7rem",
                  background: "linear-gradient(360deg, #00263E ,#003657 70% )",
                  color: "#19c2ff",
                }).then((result) => {
                  if (result.isConfirmed) {
                    //True("Acept")
                    window.open(
                      "https://api.whatsapp.com/send?phone=5492214374089&text=Nombre: %0A" +
                      usuarioInicioSesion +
                      "%0A%0APA: %0A" +
                      PAinicioSesion +
                      "%0A",
                    "_blank"
                    );
                    //redireccionar a un link
                    virtual_asistance_menu();
                  }

                  //Error codes
                  else if (result.isDenied) {
                    javier_planillas();
                  }

                  //False("Volver al asistente")
                  else {
                    virtual_asistance_menu();
                  }
                });
              }

              javier_planillas();
              break;

            case "Planillas_de_disponibilidad":
              Swal.fire({
                //Text in the alert
                title: `<h6>Haz seleccionado <br>"Planillas de disponibilidad"</h6>`,
                html: `<p style="font-size:16px;justify-content: center;">Desde el area academica estamos conciente de la importancia del <b>control metrico del profesor</b>, por lo que le proveemos de personal especializado para que puedas <u>gestionar y consultar cualquier duda relacionada a las planillas de disponibilidad</u> durante tu estadia con nosotros.</p>`,

                //Img in the alert
                imageUrl: "./Img_circle_staff/Circle_Modals/Isamara.png",
                imageWidth: 350,
                imageHeight: 300,
                imageAlt: "Custom image",

                //Propieties
                showCancelButton: true,
                confirmButtonColor: "#E31C79",
                cancelButtonColor: "#00ccff",
                confirmButtonText: "Enviar Mensaje",
                cancelButtonText: "Volver",
                padding: "1.7rem",
                background: "linear-gradient(360deg, #00263E ,#003657 70% )",
                color: "#19c2ff",
              }).then((result) => {
                if (result.isConfirmed) {
                  //True("Acept")
                  window.open(
                    "https://api.whatsapp.com/send?phone=5492214401998&text=Nombre: %0A" +
                    usuarioInicioSesion +
                      "%0A%0APA: %0A" +
                      PAinicioSesion +
                      "%0A",
                    "_blank"
                  );
                  virtual_asistance_menu();
                  //redireccionar a un link
                }
                //False("Volver al asistente")
                else {
                  virtual_asistance_menu();
                }
              });
              break;

            case "Squads":
              Swal.fire({
                //Text in the alert
                title: `<h6>Haz seleccionado <br>"Squads"</h6>`,
                html: `<p style="font-size:16px;justify-content: center;">Desde el area academica estamos conciente de la importancia del <b>control metrico y progresivo del profesor</b>, por lo que le proveemos de personal especializado para que puedas <u>gestionar y consultar cualquier duda relacionada a los squads</u> durante tu estadia con nosotros.</p>`,

                //Img in the alert
                imageUrl: "./Img_circle_staff/Circle_Modals/Isamara.png",
                imageWidth: 350,
                imageHeight: 300,
                imageAlt: "Custom image",

                //Propieties
                showCancelButton: true,
                confirmButtonColor: "#E31C79",
                cancelButtonColor: "#00ccff",
                confirmButtonText: "Enviar Mensaje",
                cancelButtonText: "Volver",
                padding: "1.7rem",
                background: "linear-gradient(360deg, #00263E ,#003657 70% )",
                color: "#19c2ff",
              }).then((result) => {
                if (result.isConfirmed) {
                  //True("Acept")
                  window.open(
                    "https://api.whatsapp.com/send?phone=5492214401998&text=Nombre: %0A" +
                    usuarioInicioSesion +
                      "%0A%0APA: %0A" +
                      PAinicioSesion +
                      "%0A",
                    "_blank"
                  );
                  virtual_asistance_menu();
                  //redireccionar a un link
                }
                //False("Volver al asistente")
                else {
                  virtual_asistance_menu();
                }
              });

              break;

            case "Contratos":
              Swal.fire({
                //Text in the alert
                title: `<h6>Haz seleccionado <br>"Contratos"</h6>`,
                html: `<p style="font-size:16px;justify-content: center;">Desde el area academica estamos conciente de la importancia de un <b>codigo de convivencia entre el prestador de servicio y el contratista</b>, por lo que le proveemos de personal especializado para que puedas <u>gestionar y consultar cualquier duda relacionada a tu contrato</u> durante tu estadia con nosotros.</p>`,

                //Img in the alert
                imageUrl: "./Img_circle_staff/Circle_Modals/Javier.png",
                imageWidth: 350,
                imageHeight: 300,
                imageAlt: "Custom image",

                //Propieties
                showCancelButton: true,
                confirmButtonColor: "#E31C79",
                cancelButtonColor: "#00ccff",
                confirmButtonText: "Enviar Mensaje",
                cancelButtonText: "Volver",
                padding: "1.7rem",
                background: "linear-gradient(360deg, #00263E ,#003657 70% )",
                color: "#19c2ff",
              }).then((result) => {
                if (result.isConfirmed) {
                  //True("Acept")
                  window.open(
                    "https://api.whatsapp.com/send?phone=5493875833358&text=Nombre: %0A" +
                    usuarioInicioSesion +
                      "%0A%0APA: %0A" +
                      PAinicioSesion +
                      "%0A",
                    "_blank"
                  );
                  virtual_asistance_menu();
                  //redireccionar a un link
                }
                //False("Volver al asistente")
                else {
                  virtual_asistance_menu();
                }
              });
              break;

            case "Honorarios_sueldos":
              Swal.fire({
                //Text in the alert
                title: `<h6>Haz seleccionado <br>"Honorarios (sueldos)"</h6>`,
                html: `<p style="font-size:16px;justify-content: center;">Desde el area academica estamos conciente de la importancia de <b>brindar un retorno justo y controlado de honorarios entre el prestador de servicio y el contratista</b>, por lo que le proveemos de personal especializado para que puedas <u>gestionar y consultar cualquier duda relacionada a tu honorarios</u> durante tu estadia con nosotros.</p>`,

                //Img in the alert
                imageUrl: "./Img_circle_staff/Circle_Modals/Javier.png",
                imageWidth: 350,
                imageHeight: 300,
                imageAlt: "Custom image",

                //Propieties
                showCancelButton: true,
                confirmButtonColor: "#E31C79",
                cancelButtonColor: "#00ccff",
                confirmButtonText: "Enviar Mensaje",
                cancelButtonText: "Volver",
                padding: "1.7rem",
                background: "linear-gradient(360deg, #00263E ,#003657 70% )",
                color: "#19c2ff",
              }).then((result) => {
                if (result.isConfirmed) {
                  //True("Acept")
                  window.open(
                    "https://api.whatsapp.com/send?phone=5493875833358&text=Nombre: %0A" +
                    usuarioInicioSesion +
                      "%0A%0APA: %0A" +
                      PAinicioSesion +
                      "%0A",
                    "_blank"
                  );
                  virtual_asistance_menu();
                  //redireccionar a un link
                }
                //False("Volver al asistente")
                else {
                  virtual_asistance_menu();
                }
              });
              break;

            case "Orientacion_a_USDT_y_criptomonedas":
              Swal.fire({
                //Text in the alert
                title: `<h6>Haz seleccionado <br>"Orientacion a USDT y criptomonedas (PA argentinos)"</h6>`,
                html: `<p style="font-size:16px;justify-content: center;">Desde el area academica estamos conciente de la importancia de <b>brindar un retorno justo y controlado de honorarios, en base al contexto socioeconomico, entre el prestador de servicio y el contratista</b>, por lo que le proveemos de personal especializado para que puedas <u> consultar cualquier duda relacionada a las criptomonedas y su conversion al momento de recibir la liquidación</u> durante tu estadia con nosotros.</p>`,

                //Img in the alert
                imageUrl: "./Img_circle_staff/Circle_Modals/Ezequiel.png",
                imageWidth: 350,
                imageHeight: 300,
                imageAlt: "Custom image",

                //Propieties
                showCancelButton: true,
                confirmButtonColor: "#E31C79",
                cancelButtonColor: "#00ccff",
                confirmButtonText: "Enviar Mensaje",
                cancelButtonText: "Volver",
                padding: "1.7rem",
                background: "linear-gradient(360deg, #00263E ,#003657 70% )",
                color: "#19c2ff",
              }).then((result) => {
                if (result.isConfirmed) {
                  //True("Acept")
                  window.open(
                    "https://api.whatsapp.com/send?phone=5492214402015&text=Nombre: %0A" +
                    usuarioInicioSesion +
                      "%0A%0APA: %0A" +
                      PAinicioSesion +
                      "%0A",
                    "_blank"
                  );
                  virtual_asistance_menu();
                  //redireccionar a un link
                }
                //False("Volver al asistente")
                else {
                  virtual_asistance_menu();
                }
              });
              break;

            case "Renuncias":
              function renuncias_javier() {
                Swal.fire({
                  //Text in the alert
                  title: `<h6>Haz seleccionado <br>"Renuncias"</h6>`,
                  html: `<p style="font-size:16px;justify-content: center;">Desde el area academica estamos conciente de la importancia de acompañar a nuestros profesores de la manera más personalizada posible, por lo que le proveemos de personal especializado para que puedas <u>gestionar y consultar cualquier proceso de cese de prestacion de servicio(renuncia)</u> durante tu estadia con nosotros.</p>
                                <br><p>Para iniciar el proceso de cese de servicio <strong> deberas: <br> 
                                <ol>
                                <li>Enviar un mensaje al responsable de coordinación administrativa, enviando el ID y contacto de cada estudiante <a href="https://api.whatsapp.com/send?phone=5492214374089&text= Coloque la siguiente informacion:                                                                                                                                                                         *-Nombre:*                                                                                                                                                                                                                   *-Numero de PA:*                                                                                                                                                                                                                    *-ID del alumno(si corresponde)*:                                                                                                                                                                                                                    *-Descripcion:*" target="_blank">haciendo click aquí</a>.</li>
                                <li>Completar el formulario de transferencias (colocando feedback de cada estudiante), para redirigirte <a href="https://docs.google.com/forms/d/e/1FAIpQLSdo5KpAWExZnnA5M-yI_Jk0NmSTCTk2gQYnIx8XnwARfM5imw/viewform" target="_blank"> haz click aquí</a>.</li>
                                <li>Completar el formulario de renuncia.</li>
                                <li>Enviar un mensaje al responsable del sector juridico</li>
                                <li>Enviar un mensaje al responsable de recursos humanos <a href="https://api.whatsapp.com/send?phone=5492235609443&text= Coloque la siguiente informacion:                                                                                                                                                                         *-Nombre:*                                                                                                                                                                                                                   *-Numero de PA:*                                                                                                                                                                                                                    *-ID del alumno(si corresponde)*:                                                                                                                                                                                                                    *-Descripcion:*" target="_blank">haciendo click aquí</a>.</li>
                                </ol>
                                </strong><br> Haz <u>click</u> en el boton "Enviar mensaje" para comunicarte con el responsable del sector juridico o "Completa el formulario" para realizar el mismo.</p>`,

                  //Img in the alert
                  imageUrl: "./Img_circle_staff/Circle_Modals/Javier.png",
                  imageWidth: 350,
                  imageHeight: 300,
                  imageAlt: "Custom image",

                  //Propieties
                  showCancelButton: true,
                  showDenyButton: true,
                  confirmButtonColor: "#E31C79",
                  cancelButtonColor: "#00ccff",
                  confirmButtonText: "Enviar Mensaje",
                  cancelButtonText: "Volver",
                  denyButtonText: `Completar formulario`,
                  denyButtonColor: "#4ecf1b",
                  padding: "1.7rem",
                  background: "linear-gradient(360deg, #00263E ,#003657 70% )",
                  color: "#19c2ff",
                }).then((result) => {
                  if (result.isConfirmed) {
                    //True("Acept")
                    window.open(
                      "https://api.whatsapp.com/send?phone=5493875833358&text=Nombre: %0A" +
                      usuarioInicioSesion +
                      "%0A%0APA: %0A" +
                      PAinicioSesion +
                      "%0A",
                    "_blank"
                    );
                    renuncias_javier();
                    //redireccionar a un link
                  }
                  //Form
                  else if (result.isDenied) {
                    function resignation_form() {
                      Swal.fire({
                        //Text in the alert
                        title: `<h3 style="justify-content: center;"><b>Formulario de renuncias</b></h3>
                                            <h5 style="font-size:22px;justify-content: center;">lamentamos que tu experiencia dentro de nuestra institución no haya sido la que esperabas. De todo corazón queremos brindarte nuestras disculpas, agradeciendote por el servicio brindado hasta el dia de la fecha.</h5>
                                <h6 style="font-size:16px;justify-content: center;">Para poder gestionar tu proceso de renuncia vamos a necesitar los siguientes datos:</h6>`,

                        //Propieties
                        focusConfirm: false,
                        showClass: {
                          popup: "animate__animated animate__fadeInDown",
                        },
                        hideClass: {
                          popup: "animate__animated animate__fadeOutUp",
                        },
                        confirmButtonColor: "#E31C79",
                        padding: "1.7rem",
                        confirmButtonText: "Continuar",
                        background: "linear-gradient(360deg, #00263E ,#003657 70% )",
                        color: "#19c2ff",
                        allowOutsideClick: false,

                        //Create an html format
                        html:
                          '<br><label ><b>Nombre:</b></label><br><input type="text"  id="swal-input1" class="swal2-input" style="color:#b80f80;"><br>' +
                          '<br><label><b>Num°PA:</b></label><br><input type="text"  id="swal-input2" class="swal2-input"style="color:#b80f80;"><br>' +
                          '<br><label><b>Motivo:</b></label><br><input type="text"  id="swal-input3" class="swal2-input"style="color:#b80f80;"><br>' +
                          '<br><label><b>Aviso con anticipación (15dias):</b></label><br><input type="date" id="swal-input4" class="swal2-input"style="color:#b80f80;"><br>' +
                          '<br><label><b>Comentarios adicionales:</b></label><br><input type="text"  id="swal-input5" class="swal2-input"style="color:#b80f80;">',
                        //When you enter the values

                        preConfirm: () => {
                          return [
                            (name_teacher_out =
                              document.getElementById("swal-input1").value),
                            (PA_teacher_out =
                              document.getElementById("swal-input2").value),
                            (reason_teacher_out =
                              document.getElementById("swal-input3").value),
                            (advise_teacher_out =
                              document.getElementById("swal-input4").value),
                            (observations_teacher_out =
                              document.getElementById("swal-input5").value),
                            Swal.fire({
                              //Text in the alert
                              html:
                                `<h2 style="justify-content: center;">Ingresaste la siguiente información: </h2>
                                        <p>Nombre: <strong style="color:#b80f80;">` +
                                name_teacher_out +
                                `</strong></p>
                                        <p>N°PA:  <strong style="color:#b80f80;">` +
                                PA_teacher_out +
                                `</strong></p>
                                        <p>Motivo: <strong style="color:#b80f80;">` +
                                reason_teacher_out +
                                `</strong></p>
                                        <p>Aviso con anticipación (15dias): <strong style="color:#b80f80;">` +
                                advise_teacher_out +
                                `</strong></p>
                                        <p>Comentarios adicionales: <strong style="color:#b80f80;">` +
                                observations_teacher_out +
                                `</strong></p>
                                        <br>
                                        <h7 > Si la información es <u>correcto</u> haz click en <b>aceptar</b>, si necesitas <u>modificar</u> algo haz click en <strong>modificar</strong>?<h7>
                                        `,
                              //Propieties
                              icon: "question",
                              showCancelButton: true,
                              showDenyButton: true,
                              confirmButtonColor: "#E31C79",
                              cancelButtonColor: "#00ccff",
                              confirmButtonText: "Aceptar",
                              cancelButtonText: "Atras",
                              denyButtonText: `Modificar`,
                              denyButtonColor: "#4ecf1b",
                              padding: "1.7rem",
                              background: "linear-gradient(360deg, #00263E ,#003657 70% )",
                              color: "#19c2ff",
                              allowOutsideClick: false,

                              //Input decition
                            }).then((result) => {
                              //If the user choose 'aceptar'
                              if (result.isConfirmed) {
                                window.open(
                                  "https://api.whatsapp.com/send?phone=5493875833358&text=Nombre: %0A" +
                                    name_teacher_out +
                                    "%0A%0APA: %0A" +
                                    PA_teacher_out +
                                    "%0A" +
                                    "%0A%0AMotivo: %0A" +
                                    reason_teacher_out +
                                    "%0A" +
                                    "%0A%0AAviso con anticipación (15dias): %0A" +
                                    advise_teacher_out +
                                    "%0A" +
                                    "%0A%0AComentarios adicionales: %0A" +
                                    observations_teacher_out,
                                  "_blank"
                                );
                                renuncias_javier();
                              } else if (result.isDenied) {
                                resignation_form();
                              }

                              //If the user choose 'Atras'
                              else {
                                renuncias_javier();
                              }
                            }),
                          ];
                        },
                      });
                    }

                    resignation_form();
                  }

                  //False("Volver al asistente")
                  else {
                    virtual_asistance_menu();
                  }
                });
              }
              renuncias_javier();
              break;
          }
        },
      });
    }
    //Function to copy a text
    function copy_to_clip_board(element) {
      const hire_input = document.createElement("input");

      //Traer el texto del p oculto (copiarlo)
      hire_input.setAttribute("value", element.innerText);
      //Crear elemento
      document.body.appendChild(hire_input);
      //Seleccionar el texto interno del elemento
      hire_input.select();
      //Agregar comando de control+c
      document.execCommand("copy");
      //Remover el child para que no se repita en el HTML
      document.body.removeChild(hire_input);
    }
    //Function to copy a text(welcome)
    function copy_text_welcome_template() {
      const element = document.querySelector("#hire_text_welcome");

      document.querySelector("#btncopy_welcome").addEventListener("click", () => {
        //Agregar clase "show" → copiado al portapapeles
        document
          .querySelector(".copied_mensagge")
          .classList.add("copied_mensagge_show");

        copy_to_clip_board(element);
        //Quitar la clase "show"
        setTimeout(() => {
          document
            .querySelector(".copied_mensagge")
            .classList.remove("copied_mensagge_show");
        }, 1300);
        //Funcion copiar en portapapeles
        copy_to_clip_board(element);
      });
    }
    //Function to copy a text(block)
    function copy_text_block_template() {
  const elemento = document.querySelector("#hire_text_block");

  document.querySelector("#btncopy_block").addEventListener("click", () => {
    //Agregar clase "show" → copiado al portapapeles
    document
      .querySelector(".copied_mensagge_block")
      .classList.add("copied_mensagge_show_block");

    copy_to_clip_board(elemento);
    //Quitar la clase "show"
    setTimeout(() => {
      document
        .querySelector(".copied_mensagge_block")
        .classList.remove("copied_mensagge_show_block");
    }, 1300);

    //Funcion copiar en portapapeles
    copy_to_clip_board(elemento);
    });
    }
    //Function to copy a text(transfer)
    function copy_text_block_transfer() {
    const elemento = document.querySelector("#hire_text_transfer");

    document.querySelector("#btncopy_transfer").addEventListener("click", () => {
        //Agregar clase "show" → copiado al portapapeles
        document
        .querySelector(".copied_mensagge_transfer")
        .classList.add("copied_mensagge_show_transfer");

        copy_to_clip_board(elemento);
        //Quitar la clase "show"
        setTimeout(() => {
        document
            .querySelector(".copied_mensagge_transfer")
            .classList.remove("copied_mensagge_show_transfer");
        }, 1300);

        //Funcion copiar en portapapeles
        copy_to_clip_board(elemento);
    });
    }
    //Funcion para modo oscuro (nocturno)
    function dark_mode() {
    //Darkmode
    const bdark = document.querySelector('#bdark')
    const body = document.querySelector('body')
    
    load()
    
    //Funcion de click en boton de modo oscuro
    bdark.addEventListener("click", () => {
        body.classList.toggle("darkMode");
        store(body.classList.contains('darkMode'))
    })
    //Si el localstorage("cache") contiene "darkMode" o no
    function load(){
      const darkMode = localStorage.getItem('darkMode')

      if(!darkMode){store('false')}
      else if(darkMode == 'true'){body.classList.add('darkMode')}
    }
    //Si clickeamos seteamos el valor de darkmode (guardamos en localStorage)
    function store(value){
      localStorage.setItem('darkMode',value)
    }
  }

//→→Variables←←
//Initial
let active_virtual_assistance = ""
let name_teacher = ""
let PA_teacher = ""
let PA_link = ""
let usuarioInicioSesion = localStorage.getItem('Usuario reconocido')
let PAinicioSesion = localStorage.getItem('PA reconocido')
let PA_linkPlanilla = localStorage.getItem('Planilla reconocida')


//Resignation
let name_teacher_out = ""
let PA_teacher_out = ""
let reason_teacher_out = ""
let advise_teacher_out = ""
let observations_teacher_out = ""

//Settings from html
let header = document.querySelector("#header")

//change header when scroll
window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    header.classList.add("shrink")
  } else {
    header.classList.remove("shrink")
  }
});


dark_mode()
//Dark mode activated

//Link to the personal sheet of the teacher
const planillaPersonalDelPA = document.getElementById('planillaPersonalDelPA')
planillaPersonalDelPA.addEventListener('click', () => {window.open(PA_linkPlanilla,"_blank")})

//Validation
validation_sesion()
