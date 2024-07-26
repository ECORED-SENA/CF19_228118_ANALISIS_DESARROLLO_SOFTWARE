<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Plataformas para implementar integración continua – Gitlab
    
    .cont_5_1.pb-4
      .row
        .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
          p En la actualidad, existe una gran cantidad de plataformas con servicios en la nube donde se pueden implementar procesos de integración continua. Estas plataformas generalmente ofrecen la posibilidad de crear repositorios públicos y privados, se integran con sistemas de control de versiones, permiten el registro de grupos de trabajo, y muchas otras funcionalidades. Entre las más utilizadas en la industria, basadas en sistemas de control de versiones en Git, se encuentran las descritas a continuación:
        .col-lg-5(data-aos="fade-left")
          figure.m-auto.col-10.col-md-8.col-lg-12
            img(src="@/assets/curso/tema5/2.png")
      
      .col-xl-10.m-auto.mt-5
        .p-4.p-lg-2(style="background: rgb(146,41,238);background: linear-gradient(180deg, rgba(146,41,238,1) 0%, rgba(98,17,170,1) 50%, rgba(52,9,90,1) 100%);border-radius:11px;" data-aos="zoom-in-up")
          .row
            .col-md-auto.d-none.d-md-block.col-12.mb-4.mb-sm-0(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema5/3.png")
            .col-md.col-12.mb-4.mb-sm-0(style="place-self:center;")
              h5(style="color:#00FFDF;") GitHub
              p.text-small.text-white Conoce GitHub, un portal creado para alojar códigos de las aplicaciones. 
            .col-md-auto.text-center.col-12.mb-4.mb-sm-0(style="place-self:center;")
              a.boton.color-acento-botones.me-3(href="https://github.com" target="_blank")
                span Enlace web
                i.fas.fa-file-code

        .p-4.p-lg-2.mt-3(style="background: rgb(146,41,238);background: linear-gradient(180deg, rgba(146,41,238,1) 0%, rgba(98,17,170,1) 50%, rgba(52,9,90,1) 100%);border-radius:11px;" data-aos="zoom-in-up")
          .row
            .col-md-auto.d-none.d-md-block.col-12.mb-4.mb-sm-0(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema5/4.png")
            .col-md.col-12.mb-4.mb-sm-0(style="place-self:center;")
              h5(style="color:#00FFDF;") GitLab
              p.text-small.text-white Conoce sobre GitLab, un servicio web que permite controlar las versiones y desarrollos de software colaborativo basado en Git.
            .col-md-auto.text-center.col-12.mb-4.mb-sm-0(style="place-self:center;")
              a.boton.color-acento-botones.me-3(href="https://about.gitlab.com/" target="_blank")
                span Enlace web
                i.fas.fa-file-code
        
        .p-4.p-lg-2.mt-3(style="background: rgb(146,41,238);background: linear-gradient(180deg, rgba(146,41,238,1) 0%, rgba(98,17,170,1) 50%, rgba(52,9,90,1) 100%);border-radius:11px;" data-aos="zoom-in-up")
          .row
            .col-md-auto.d-none.d-md-block.col-12.mb-4.mb-sm-0(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema5/5.png")
            .col-md.col-12.mb-4.mb-sm-0(style="place-self:center;")
              h5(style="color:#00FFDF;") BitBucket
              p.text-small.text-white Conoce a Bitbucket, un servicio de alojamiento basado en web para los proyectos que utilizan sistema de control de versiones Mercurial y Git.
            .col-md-auto.text-center.col-12.mb-4.mb-sm-0(style="place-self:center;")
              a.boton.color-acento-botones.me-3(href="https://bitbucket.org/" target="_blank")
                span Enlace web
                i.fas.fa-file-code
    
    .row.mt-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p Para complementar la información sobre los anteriores sistemas, a continuación, se presentarán las diferentes versiones gratuitas con sus funcionalidades básicas, las cuales son accesibles simplemente con la creación de una cuenta de usuario.
      .col-lg-5(data-aos="fade-left")
        figure.m-auto.col-10.col-md-8.col-lg-12
          img(src="@/assets/curso/tema5/6.png")

    .cont_decorativo.mb-4.mt-5(data-aos="flip-up" style="max-width:fit-content;position:relative;")
      .row
        .col-auto.ps-3.pe-0
          figure
            img(src="@/assets/curso/tema1/9.svg")
        .col.pe-4(style="place-self:end;")
          h3.text-white.mb-0.pb-2 Creación de cuenta
    
    .row
      .col-auto.d-none.d-md-block(data-aos="fade-right" style="place-self:center;")
        figure
          img(src="@/assets/curso/tema5/7.svg")
      .col.pe-lg-4(data-aos="fade-left" style="place-self:center;")
        p.mb-0 Primero, se debe crear una cuenta en Gitlab directamente desde el enlace: #[a.fw-bold(style="color:#8722E2;" href="https://gitlab.com/users/sign_up" target="_blank") https://gitlab.com/users/sign_up] 
        p.mb-0 El proceso se puede realizar de forma tradicional o usando cuentas ya existentes de otras plataformas como Google, Github, Twitter, Bitbucket o Salesforce.

    .cont_5_2.mt-5.pb-4
      .col-xl-10.m-auto
        .titulo-sexto.color-acento-contenido.mt-5(data-aos="zoom-in-down")
          h5 Figura 7.
          span Página de registro de GitLab
        figure(data-aos="zoom-in-up")
          img(src="@/assets/curso/tema5/9.png" alt="Página de registro de GitLab, solicitando información del usuario como nombre, correo electrónico y contraseña.")
    
    .cont_decorativo.mb-4.mt-5(data-aos="flip-up" style="max-width:fit-content;position:relative;")
      .row
        .col-auto.ps-3.pe-0
          figure
            img(src="@/assets/curso/tema1/9.svg")
        .col.pe-4(style="place-self:end;")
          h3.text-white.mb-0.pb-2.pt-4.pt-md-0 Aceptación de términos de servicios
    
    .row
      .col-auto.d-none.d-md-block(data-aos="fade-right" style="place-self:center;")
        figure
          img(src="@/assets/curso/tema5/10.svg")
      .col.pe-lg-4(data-aos="fade-left" style="place-self:center;")
        p.mb-0 Una vez se realiza el registro, se deben aceptar los términos del servicio y las políticas de privacidad.

    .col-xl-10.m-auto.mt-5
      .titulo-sexto.color-acento-contenido.mt-5(data-aos="zoom-in-down")
        h5 Figura 8.
        span Aceptación de términos y condiciones
    .cont_5_3.pb-4
      .col-xl-10.m-auto.mt-4
        figure(data-aos="zoom-in-up")
          img(src="@/assets/curso/tema5/12.png" alt="Pantalla de aceptación de términos y condiciones de GitLab, donde el usuario debe aceptar los términos para continuar.")
      
      .cont_decorativo.mb-4.mt-5(data-aos="flip-up" style="max-width:fit-content;position:relative;")
        .row
          .col-auto.ps-3.pe-0
            figure
              img(src="@/assets/curso/tema1/9.svg")
          .col.pe-4(style="place-self:end;")
            h3.text-white.mb-0.pb-2 Interfaz de inicio
      
      .row
        .col-auto.d-none.d-md-block(data-aos="fade-right" style="place-self:center;")
          figure
            img(src="@/assets/curso/tema5/10.svg")
        .col.pe-lg-4(data-aos="fade-left" style="place-self:center;")
          p.mb-0 Después de esto, se muestra la interfaz de inicio donde se puede crear directamente el proyecto (repositorio).
      
      .col-xl-10.m-auto
        .titulo-sexto.color-acento-contenido.mt-5(data-aos="zoom-in-down")
          h5 Figura 9.
          span Página de bienvenida de GitLab
        figure(data-aos="zoom-in-up")
          img(src="@/assets/curso/tema5/13.png" alt="Página de bienvenida de GitLab, con opciones para crear un proyecto, crear un grupo, explorar proyectos públicos y aprender más sobre GitLab.")
    
    h4.p-2.ps-3.pe-3.mb-0.text-white.mt-5.mb-4(style="background-color:#3A1D71;max-width:fit-content;border-radius:50px;" data-aos="fade-down") a) Creación de proyecto

    .row
      .col-auto.d-none.d-md-block(data-aos="fade-right" style="place-self:center;")
        figure
          img(src="@/assets/curso/tema5/10.svg")
      .col.pe-lg-4(data-aos="fade-left" style="place-self:center;")
        p.mb-0 En la parte de creación de proyectos, se ofrecen cuatro posibilidades:
    
    .cont_5_4.mt-4.pb-4.pt-5
      .row
        .col-lg.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
          .h-100.p-2.pb-5.cont_figura1(style="background-color:#3A1D71;border-radius:20px;")
            span.fw-bold(style="color:#00FFDF;font-size:35px;") 01
            .p-4.text-white.text-center
              figure.text-center
                img(src="@/assets/curso/tema5/15.svg" style="max-width:100px;display:inline;")
              p.mt-3.mb-0 Creación de proyecto en blanco.
        .col-lg.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
          .h-100.p-2.pb-5.cont_figura1(style="background-color:#3A1D71;border-radius:20px;")
            span.fw-bold(style="color:#00FFDF;font-size:35px;") 02
            .p-4.text-white.text-center
              figure.text-center
                img(src="@/assets/curso/tema5/16.svg" style="max-width:100px;display:inline;")
              p.mt-3.mb-0 Creación de proyecto desde plantilla.
        .col-lg.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
          .h-100.p-2.pb-5.cont_figura1(style="background-color:#3A1D71;border-radius:20px;")
            span.fw-bold(style="color:#00FFDF;font-size:35px;") 03
            .p-4.text-white.text-center
              figure.text-center
                img(src="@/assets/curso/tema5/17.svg" style="max-width:100px;display:inline;")
              p.mt-3.mb-0 Importación de proyectos desde otros sistemas.
        .col-lg.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
          .h-100.p-2.pb-5.cont_figura1(style="background-color:#3A1D71;border-radius:20px;")
            span.fw-bold(style="color:#00FFDF;font-size:35px;") 04
            .p-4.text-white.text-center
              figure.text-center
                img(src="@/assets/curso/tema5/18.svg" style="max-width:100px;display:inline;")
              p.mt-3.mb-0 Conexión de repositorios externos con GitLab CI/CD.
      
      .row.mt-lg-5
        .col-auto.d-none.d-md-block(data-aos="fade-right" style="place-self:center;")
          figure
            img(src="@/assets/curso/tema5/10.svg")
        .col.pe-lg-4(data-aos="fade-left" style="place-self:center;")
          p.mb-0 Para los grupos de desarrollo que apenas inician con prácticas de integración continua, el proyecto en blanco es la mejor opción.
      
      .col-xl-10.m-auto
        .titulo-sexto.color-acento-contenido.mt-5(data-aos="zoom-in-down")
          h5 Figura 10.
          span Creación de un nuevo proyecto 
        figure(data-aos="zoom-in-up")
          img(src="@/assets/curso/tema5/19.png" alt="Pantalla de creación de un nuevo proyecto en GitLab, con opciones para crear un proyecto en blanco, importar un proyecto o configurar CI/CD para un repositorio externo.")
      
      h4.p-2.ps-3.pe-3.mb-0.text-white.mt-5.mb-4(style="background-color:#3A1D71;max-width:fit-content;border-radius:50px;" data-aos="fade-down") b) Nombre del proyecto

      .col-xl-10.m-auto
        .p-4.p-lg-3(style="background-color:#F2E5FD;border-radius:16px;")
          .row
            .col-auto.d-none.d-md-block(data-aos="fade-right" style="place-self:center;")
              figure
                img(src="@/assets/curso/tema5/20.svg")
            .col(data-aos="fade-left" style="place-self:center;")
              p.mb-0 A continuación, se debe definir el nombre del proyecto, agregar una descripción y definir el tipo de visibilidad, que puede ser pública (cualquiera podría acceder sin autenticarse) o privada (se deben tener permisos asignados para ingresar). La URL asignada dependerá del nombre de usuario asignado a la cuenta de Gitlab creada y del nombre definido al repositorio.
      
      .col-xl-10.m-auto
        .titulo-sexto.color-acento-contenido.mt-5(data-aos="zoom-in-down")
          h5 Figura 11.
          span Creación de un proyecto en blanco  
        figure(data-aos="zoom-in-up")
          img(src="@/assets/curso/tema5/21.png" alt="Página de creación de un proyecto en blanco en GitLab, donde se introducen el nombre del proyecto, la URL y se selecciona el nivel de visibilidad.")
    
    h4.p-2.ps-3.pe-3.mb-0.text-white.mt-5.mb-4(style="background-color:#3A1D71;max-width:fit-content;border-radius:50px;" data-aos="fade-down") c) Instrucción de uso

    .col-xl-10.m-auto
      .p-4.p-lg-3(style="background-color:#F2E5FD;border-radius:16px;")
        .row
          .col-auto.d-none.d-md-block(data-aos="fade-right" style="place-self:center;")
            figure
              img(src="@/assets/curso/tema5/22.svg")
          .col(data-aos="fade-left" style="place-self:center;")
            p.mb-0 Una vez finalizado el proceso, el sistema proporciona un conjunto de instrucciones para usar el repositorio, entre las cuales se encuentra la configuración del usuario y correo de acuerdo con las credenciales de Gitlab y los comandos Git para hacer su respectiva gestión.
      
    .row.mt-5
      .col-auto.d-none.d-md-block(data-aos="fade-right" style="place-self:center;")
        figure
          img(src="@/assets/curso/tema5/23.svg")
      .col.pe-lg-4(data-aos="fade-left" style="place-self:center;")
        p.mb-0 A continuación, lo único que queda por hacer es conectar el equipo local con el repositorio remoto por medio de Git usando los comandos mencionados anteriormente. En este caso, se usará la ayuda ofrecida por Gitlab para crear un nuevo repositorio local, realizando la clonación respectiva desde el repositorio remoto.
    
    .col-xl-10.m-auto.mt-5
      .titulo-sexto.color-acento-contenido.mt-5(data-aos="zoom-in-down")
        h5 Figura 12.
        span Repositorio vacío  
      figure(data-aos="zoom-in-up")
        img(src="@/assets/curso/tema5/24.png" alt="Página del repositorio vacío en GitLab, con instrucciones para clonar el repositorio, añadir archivos y configurar integraciones.")
    
    h4.p-2.ps-3.pe-3.mb-0.text-white.mt-5.mb-4(style="background-color:#3A1D71;max-width:fit-content;border-radius:50px;" data-aos="fade-down") d) Modificación de usuario

    .row.mt-4
      .col-auto.d-none.d-md-block(data-aos="fade-right" style="place-self:center;")
        figure
          img(src="@/assets/curso/tema5/25.svg")
      .col.pe-lg-4(data-aos="fade-left" style="place-self:center;")
        p.mb-0 En primer lugar, se debe modificar el usuario y la cuenta de correo en la máquina local para que coincida con las credenciales autorizadas en el repositorio remoto.
    
    .col-xl-6.col-lg-9.m-auto.mt-5
      figure(data-aos="zoom-in-up")
        img(src="@/assets/curso/tema5/26.svg")
    
    h4.p-2.ps-3.pe-3.mb-0.text-white.mt-5.mb-4(style="background-color:#3A1D71;max-width:fit-content;border-radius:50px;" data-aos="fade-down") e) Clonación de repositorio 

    .row.mt-4
      .col-auto.d-none.d-md-block(data-aos="fade-right" style="place-self:center;")
        figure
          img(src="@/assets/curso/tema5/27.svg")
      .col.pe-lg-4(data-aos="fade-left" style="place-self:center;")
        p.mb-0 Luego, se clona el repositorio creado en Gitlab para copiarlo en la máquina local. En este punto, se debe tener claridad sobre el usuario y su contraseña en Gitlab, ya que esta información será requerida durante el proceso de clonación. Una vez se verifican las credenciales, se realiza el proceso de clonación. En este caso, es un repositorio vacío, pero se encontrará en el sistema local de archivos una carpeta con el mismo nombre definido en el repositorio remoto, con toda la configuración necesaria para la gestión de estados con Git. Este repositorio se convierte en el directorio de trabajo local. 
    
    .col-xl-8.col-lg-10.m-auto.mt-5
      figure(data-aos="zoom-in-up")
        img(src="@/assets/curso/tema5/28.svg")
    
    h4.p-2.ps-3.pe-3.mb-0.text-white.mt-5.mb-4(style="background-color:#3A1D71;max-width:fit-content;border-radius:50px;" data-aos="fade-down") f) Acceso al directorio 

    .row.mt-4
      .col-auto.d-none.d-md-block(data-aos="fade-right" style="place-self:center;")
        figure
          img(src="@/assets/curso/tema5/23.svg")
      .col.pe-lg-4(data-aos="fade-left" style="place-self:center;")
        p.mb-0 Ahora, se accede al directorio de trabajo para empezar la construcción de archivos, ponerlos en rastreo, prepararlos, confirmarlos localmente y luego enviar la versión confirmada localmente al repositorio remoto. Se debe utilizar el comando #[strong git switch -c nombre] para crear una nueva rama de trabajo local, donde "nombre" corresponde al nombre de la rama.
    
    h4.p-2.ps-3.pe-3.mb-0.text-white.mt-5.mb-4(style="background-color:#3A1D71;max-width:fit-content;border-radius:50px;" data-aos="fade-down") g) Creación de archivo local

    .row.mt-lg-4
      .col-auto.d-none.d-md-block(data-aos="fade-right" style="place-self:center;")
        figure
          img(src="@/assets/curso/tema5/10.svg")
      .col.pe-lg-4(data-aos="fade-left" style="place-self:center;")
        p.mb-0 Después de esto, se probará crear un archivo local vacío llamado #[strong README.md], el cual se preparará, confirmará y enviará al repositorio remoto.
    
    .col-xl-8.col-lg-10.m-auto.mt-5
      figure(data-aos="zoom-in-up")
        img(src="@/assets/curso/tema5/29.svg")
    
    h4.p-2.ps-3.pe-3.mb-0.text-white.mt-5.mb-4(style="background-color:#3A1D71;max-width:fit-content;border-radius:50px;" data-aos="fade-down") h) Archivo de rastreo

    .row.mt-lg-4
      .col-auto.d-none.d-md-block(data-aos="fade-right" style="place-self:center;")
        figure
          img(src="@/assets/curso/tema5/10.svg")
      .col.pe-lg-4(data-aos="fade-left" style="place-self:center;") 
        p.mb-0 Luego, se agrega este archivo para que sea rastreado y agregado al área de preparación.
    
    .cont_5_5.pb-5.pt-5
      .col-xl-8.col-lg-10.m-auto
        figure(data-aos="zoom-in-up")
          img(src="@/assets/curso/tema5/30.svg")
    
      h4.p-2.ps-3.pe-3.mb-0.text-white.mt-5.mb-4(style="background-color:#3A1D71;max-width:fit-content;border-radius:50px;" data-aos="fade-down") i) Archivo de repositorio local

      .row.mt-lg-4
        .col-auto.d-none.d-md-block(data-aos="fade-right" style="place-self:center;")
          figure
            img(src="@/assets/curso/tema5/10.svg")
        .col.pe-lg-4(data-aos="fade-left" style="place-self:center;") 
          p.mb-0 Se confirma el archivo en el repositorio local, lo cual genera una nueva versión en el repositorio local.
      
      .col-xl-8.col-lg-10.m-auto.mt-5
        figure(data-aos="zoom-in-up")
          img(src="@/assets/curso/tema5/32.svg")
      
      h4.p-2.ps-3.pe-3.mb-0.text-white.mt-5.mb-4(style="background-color:#3A1D71;max-width:fit-content;border-radius:50px;" data-aos="fade-down") j) Envío al repositorio remoto

      .row.mt-lg-4
        .col-auto.d-none.d-md-block(data-aos="fade-right" style="place-self:center;")
          figure
            img(src="@/assets/curso/tema5/10.svg")
        .col.pe-lg-4(data-aos="fade-left" style="place-self:center;") 
          p.mb-0 Luego de tener una versión confirmada, se envía al repositorio remoto. Se deberán ingresar las credenciales de usuario en Gitlab.
      
      .col-xl-8.col-lg-10.m-auto.mt-5
        figure(data-aos="zoom-in-up")
          img(src="@/assets/curso/tema5/33.svg")
      
      h4.p-2.ps-3.pe-3.mb-0.text-white.mt-5.mb-4(style="background-color:#3A1D71;max-width:fit-content;border-radius:50px;" data-aos="fade-down") k) Repositorio Gitlab

      .row.mt-lg-4
        .col-auto.d-none.d-md-block(data-aos="fade-right" style="place-self:center;")
          figure
            img(src="@/assets/curso/tema5/10.svg")
        .col.pe-lg-4(data-aos="fade-left" style="place-self:center;") 
          p.mb-0 En este punto, los cambios aplicados ya se pueden visualizar directamente desde la plataforma Gitlab.
      
      .col-xl-10.m-auto.mt-5
        .titulo-sexto.color-acento-contenido.mt-5(data-aos="zoom-in-down")
          h5 Figura 13.
          span Vista del repositorio con archivo README   
        figure(data-aos="zoom-in-up")
          img(src="@/assets/curso/tema5/34.png" alt="Vista del repositorio en GitLab después de agregar un archivo README, mostrando los archivos y el historial de commits.")
      
    h4.p-2.ps-3.pe-3.mb-0.text-white.mt-5.mb-4(style="background-color:#3A1D71;max-width:fit-content;border-radius:50px;" data-aos="fade-down") l) Agregar colaboradores

    .row.mt-lg-4
      .col-auto.d-none.d-md-block(data-aos="fade-right" style="place-self:center;")
        figure
          img(src="@/assets/curso/tema5/23.svg")
      .col.pe-lg-4(data-aos="fade-left" style="place-self:center;") 
        p.mb-0 Para agregar colaboradores que también puedan clonar, preparar, confirmar y subir cambios al repositorio, es necesario agregarlos como colaboradores y asignarles los permisos requeridos, ya que el repositorio fue definido como privado. Para esto, se debe regresar a Gitlab y, en el menú del panel del lado izquierdo, seleccionar la opción de información del proyecto y luego miembros.
    
    .cont_5_6.pb-5.mt-5
      .col-xl-10.m-auto
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
          h5 Figura 14.
          span Gestión de miembros del proyecto
        figure(data-aos="zoom-in-up")
          img(src="@/assets/curso/tema5/36.png" alt="Pantalla de gestión de miembros del proyecto en GitLab, con opciones para invitar nuevos miembros y definir roles y permisos.")

      h4.p-2.ps-3.pe-3.mb-0.text-white.mt-5.mb-4(style="background-color:#3A1D71;max-width:fit-content;border-radius:50px;" data-aos="fade-down")  m) Configuración de roles

      .row.mt-lg-4
        .col-auto.d-none.d-md-block(data-aos="fade-right" style="place-self:center;")
          figure
            img(src="@/assets/curso/tema5/37.svg")
        .col.pe-lg-4(data-aos="fade-left" style="place-self:center;") 
          p.mb-0 Por defecto, el usuario creador del repositorio aparece como miembro de este. Mediante esta interfaz, se pueden invitar a nuevos miembros por correo electrónico o por nombre de usuario, si ya están registrados en Gitlab. Adicionalmente, se puede configurar el rol asociado a este usuario e incluso definir la fecha en la que expira la autorización asignada. Si se desea asignar permisos de lectura y escritura, se recomienda asignar el rol Maintainer. Usando este mismo espacio, se pueden revocar permisos y eliminar colaboradores del proyecto. Todos los usuarios autorizados podrán realizar la clonación del repositorio e interactuar con él por medio de los comandos Git vistos a lo largo de este módulo.
      
      .col-xl-10.m-auto.mt-5
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
          h5 Figura 15.
          span Adición de un nuevo miembro al proyecto 
        figure(data-aos="zoom-in-up")
          img(src="@/assets/curso/tema5/38.png" alt="Página de miembros del proyecto en GitLab, mostrando la adición exitosa de un nuevo miembro al proyecto con su rol correspondiente.")




    
  
    
 

      
</template>

<script>
export default {
  name: 'Tema5',
  components: {},
  data: () => ({
    indicadorTarjetaFlip: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass">
.cont_5_1, .cont_5_1 *
  position: relative
.cont_5_1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: url(../assets/curso/tema5/1.png)
  background-size: 100% 100%
.cont_5_2, .cont_5_2 *
  position: relative
.cont_5_2:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: url(../assets/curso/tema5/8.png)
  background-size: 100% 100%
.cont_5_3, .cont_5_3 *
  position: relative
.cont_5_3:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  bottom: 0
  background: url(../assets/curso/tema5/11.png)
  background-size: 100% 100%
.cont_5_4, .cont_5_4 *
  position: relative
.cont_5_4:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  bottom: 0
  background: url(../assets/curso/tema5/14.png)
  background-size: 100% 100%
.cont_figura1
  transition: all .3s ease-in-out
  cursor: pointer
.cont_figura1:hover
  background-color: #8722E2 !important
.cont_5_5, .cont_5_5 *
  position: relative
.cont_5_5:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  bottom: 0
  background: url(../assets/curso/tema5/31.png)
  background-size: 100% 100%
.cont_5_6, .cont_5_6 *
  position: relative
.cont_5_6:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 90%
  top: 12%
  background: url(../assets/curso/tema5/35.png)
  background-size: 100% 100%
</style>
