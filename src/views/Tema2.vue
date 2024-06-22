<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Sistema de control de versiones - Git 
    
    .cont_2_1.pb-4
      .row
        .col(data-aos="fade-right" style="place-self:center;")
          p Un sistema de control de versiones se encarga del registro de los cambios realizados a lo largo del tiempo en uno o un conjunto de archivos (versiones), de forma tal que estos puedan ser recuperados con precisión según las necesidades de los usuarios. A este tipo de procesos se le puede denominar versionamiento y, aunque estas actividades son comunes en archivos o código fuente en la industria del desarrollo de software, el proceso es aplicable a cualquier tipo de archivo.
          p El proceso de hacer copias de seguridad y crear versiones de los archivos considerados importantes es una actividad muy común.
        .col-auto.d-none.d-md-block(data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema2/2.svg")
    
      .col-xl-10.m-auto.mt-5
        .row.justify-content-center
          .col-lg.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
            .h-100.p-4(style="background-color:#3A1D71;border-radius:15px;")
              figure.text-center
                img(src="@/assets/curso/tema2/3.svg" style="display:inline;max-width:80px;")
              p.mt-2.mb-0.fw-bold.text-center.text-white Velocidad.
          .col-lg.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
            .h-100.p-4(style="background-color:#3A1D71;border-radius:15px;")
              figure.text-center
                img(src="@/assets/curso/tema2/4.svg" style="display:inline;max-width:80px;")
              p.mt-2.mb-0.fw-bold.text-center.text-white Diseño sencillo.
          .col-lg.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
            .h-100.p-4(style="background-color:#3A1D71;border-radius:15px;")
              figure.text-center
                img(src="@/assets/curso/tema2/5.svg" style="display:inline;max-width:80px;")
              p.mt-2.mb-0.fw-bold.text-center.text-white Soporte para múltiples desarrollos no lineales.
          .col-lg.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
            .h-100.p-4(style="background-color:#3A1D71;border-radius:15px;")
              figure.text-center
                img(src="@/assets/curso/tema2/6.svg" style="display:inline;max-width:80px;")
              p.mt-2.mb-0.fw-bold.text-center.text-white Sistema totalmente distribuido.
          .col-lg.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
            .h-100.p-4(style="background-color:#3A1D71;border-radius:15px;")
              figure.text-center
                img(src="@/assets/curso/tema2/7.svg" style="display:inline;max-width:80px;")
              p.mt-2.mb-0.fw-bold.text-center.text-white Capacidad de manejar eficientemente proyectos de gran envergadura.

      .row.mt-5
        .col-auto.d-none.d-md-block(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema2/8.svg")
        .col(data-aos="fade-left" style="place-self:center;")
          p.mb-0 Git, a diferencia de otros sistemas de control de versiones, posee un sistema de almacenamiento de información en el que cada versión tiene una copia de instantáneas en miniatura. Es decir, ofrece la posibilidad de trabajo incluso cuando no se tiene conectividad al servidor central, ya que localmente se posee toda la información requerida, incluso si se desea hacer procesos de recuperación a versiones anteriores.

      .p-4.p-lg-3.mt-4(style="background-color:#F2E5FD;border-radius:10px;")
        .row
          .col-auto.d-none.d-md-block(data-aos="fade-right")
            figure
              img(src="@/assets/curso/tema2/9.svg")
          .col.pe-lg-5(data-aos="fade-left" style="place-self:center;")
            p.mb-0 Git realiza un proceso de comprobación antes de almacenar datos mediante algoritmos con códigos criptográficos SHA-1, que se calculan a partir del contenido y la estructura del directorio del proyecto. Esto hace imposible cambiar el contenido de algún archivo o la estructura de directorios sin que Git lo detecte.

    p.mt-4(data-aos="fade-right") Debido a que Git solo añade información a la base de datos con cualquier acción realizada, es difícil llegar a un estado en el que este sistema de control de versiones no pueda realizar un proceso de recuperación o que se elimine información de alguna manera una vez exista una confirmación en los cambios.
    p(data-aos="fade-left") Según Git (2021), el sistema de control de versiones Git maneja tres estados principales para cada uno de los archivos de un proyecto, los cuales son:

    .col-xl-6.col-lg-9.m-auto.mt-5
      .p-4.p-lg-3.mb-3(style="background-color:#763109;border-radius:18px;" data-aos="zoom-in")
        .row
          .col-auto.d-none.d-md-block
            figure
              img(src="@/assets/curso/tema2/10.svg")
          .col.text-white(style="place-self:center;")
            p.fw-bold Confirmado (#[em committed])
            p.mb-0 Indica que los datos se encuentran almacenados de forma segura en la base de datos local. Se considera una versión concreta.
      .p-4.p-lg-3.mb-3(style="background-color:#892758;border-radius:18px;" data-aos="zoom-in")
        .row
          .col-auto.d-none.d-md-block
            figure
              img(src="@/assets/curso/tema2/11.svg")
          .col.text-white(style="place-self:center;")
            p.fw-bold Preparado (#[em staged])
            p.mb-0 Indica un archivo modificado que ha sido marcado en su versión actual para una próxima confirmación.
      .p-4.p-lg-3(style="background-color:#5F2789;border-radius:18px;" data-aos="zoom-in")
        .row
          .col-auto.d-none.d-md-block
            figure
              img(src="@/assets/curso/tema2/12.svg")
          .col.text-white(style="place-self:center;")
            p.fw-bold Modificado  (#[em modified])
            p.mb-0 Indica un que el archivo ha sufrido alguna modificación, pero esta aún no se ha preparado ni confirmado en la base de datos.
    
    .row.mt-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p En la siguiente figura se puede identificar la interacción que ocurre entre el directorio de trabajo, el área de preparación y el directorio Git. El directorio de trabajo es donde se desarrollan las labores de construcción del proyecto y corresponde a una copia de la versión del proyecto. El área de preparación es un archivo que almacena información de lo que va en la próxima confirmación. El directorio Git es donde se almacenan los metadatos y la base de datos de objetos para el proyecto. Este directorio Git es lo que se copia en el proceso de clonación del repositorio desde otro equipo de trabajo.
      .col-lg-5(data-aos="fade-left")
        figure.m-auto.col-9.col-md-8.col-lg-12
          img(src="@/assets/curso/tema2/13.png")
    
    .cont_2_2.mt-5.pb-4
      .col-xl-6.col-lg-9.m-auto
        .titulo-sexto.color-acento-contenido.mt-5(data-aos="zoom-in-down")
          h5 Figura 6.
          span Ejemplo sistemas de control de versiones centralizados
        figure(data-aos="zoom-in-up")
          img(src="@/assets/curso/tema2/15.svg" alt="Diagrama de flujo del control de versiones que ilustra el proceso desde el directorio de trabajo (Working Directory) al área de preparación (Staging Area) y luego al repositorio (.git directory). Las flechas indican las acciones de verificación del proyecto (Checkout the project), preparación de correcciones (Stage Fixes) y confirmación (Commit).")
    
    .row.mt-4
      .col-auto.d-none.d-md-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema2/16.svg")
      .col(data-aos="fade-left" style="place-self:center;")
        p.mb-0 Teniendo en cuenta lo anterior, un flujo normal de acciones para trabajar con Git sería el siguiente:
    
    .row.mt-5.justify-content-center
      .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in")
        .h-100.p-4.text-white.text-center(style="background-color:#3A1D71;border-radius:15px;")
          figure.text-center
            img(src="@/assets/curso/tema2/17.svg" style="max-width:70px;display:inline;")
          p.mb-0.mt-3 Realizar acciones de construcción del proyecto sobre el directorio de trabajo.
          figure.text-end.mt-3
            img(src="@/assets/curso/tema2/18.svg" style="max-width:60px;display:inline;")
      .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in")
        .h-100.p-4.text-white.text-center(style="background-color:#6D18B9;border-radius:15px;")
          figure.text-center
            img(src="@/assets/curso/tema2/19.svg" style="max-width:70px;display:inline;")
          p.mb-0.mt-3 Realizar la preparación de los archivos, los cuales se marcaron para ser añadidos al área de preparación.
          figure.text-end.mt-3
            img(src="@/assets/curso/tema2/18.svg" style="max-width:60px;display:inline;")
      .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in")
        .h-100.p-4.text-white.text-center(style="background-color:#3A1D71;border-radius:15px;")
          figure.text-center
            img(src="@/assets/curso/tema2/20.svg" style="max-width:70px;display:inline;")
          p.mb-0.mt-3 Confirmar los cambios, lo cual toma los archivos del área de preparación y los almacena como una copia instantánea permanente en el directorio Git.
    
    .col-xl-8.m-auto.mt-5
      .p-4.p-lg-3(style="background-color:#3A1D71;border-radius:15px;")
        .row
          .col-auto.d-none.d-md-block(data-aos="fade-right")
            figure
              img(src="@/assets/curso/tema2/21.svg")
          .col.pe-lg-4(data-aos="fade-left" style="place-self:center;")
            p.mb-0.text-white Git se puede instalar en cualquier tipo y distribución de sistema operativo e incluso se puede integrar con diferentes IDE para la conexión con varios repositorios locales y en la nube. Para un mejor entendimiento de los comandos más comúnmente utilizados, se optará por la instalación común y la manipulación de este por consola de comandos.
    
    .cont_decorativo.mb-4.mt-5(data-aos="flip-up" style="max-width:fit-content;position:relative;")
      .row
        .col-auto.ps-3.pe-0
          figure
            img(src="@/assets/curso/tema1/9.svg")
        .col.pe-4(style="place-self:end;")
          h3.text-white.mb-0.pb-2 Instalación de Git en sistemas operativos 
    
    p(data-aos="fade-right") La forma más sencilla de instalar Git en sistemas operativos Windows y Linux es por medio del sitio oficial disponible.

    .col-xl-8.m-auto.mt-5
      .p-4(style="background: rgb(146,41,238);background: linear-gradient(180deg, rgba(146,41,238,1) 0%, rgba(98,17,170,1) 50%, rgba(52,9,90,1) 100%);border-radius:11px;" data-aos="zoom-in-up")
        .row
          .col-auto.d-none.d-md-block(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema2/22.svg")
          .col
            .row.pb-3(style="border-bottom:1px #fff solid;")
              .col-md.col-12.mb-3.mb-md-0
                h5(style="color:#00FFDF;") Instalación de Git en sistemas operativos Windows
                p.text-white.mb-0.text-small Ingrese al paso a paso del proceso de instalación para este sistema. 
              .col-md-auto.col-12.text-center(style="place-self:end;")
                a.boton.color-acento-botones.me-3(:href="obtenerLink('downloads/Anexo_Instalacion_Git_Sistemas_Operativos_Windows.pdf')" target="_blank" type="application/pdf")
                  span Descargar
                  i.fas.fa-file-download
            .row.pt-3
              .col-md.col-12.mb-3.mb-md-0
                h5(style="color:#00FFDF;") Instalación de Git distribuciones de Linux
                p.text-white.mb-0.text-small Ingrese al paso a paso del proceso de instalación para este sistema.
              .col-md-auto.col-12.text-center(style="place-self:end;")
                a.boton.color-acento-botones.me-3(:href="obtenerLink('downloads/Anexo_Instalacion_Git_Distribuciones_Linux.pdf')" target="_blank" type="application/pdf")
                  span Descargar
                  i.fas.fa-file-download



      


    
    
  
    
 

      
</template>

<script>
export default {
  name: 'Tema2',
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
.cont_2_1, .cont_2_1 *
  position: relative
.cont_2_1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: url(../assets/curso/tema2/1.png)
  background-size: 100% 100%
.cont_2_2, .cont_2_2 *
  position: relative
.cont_2_2:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: url(../assets/curso/tema2/14.png)
  background-size: 100% 100%
</style>
