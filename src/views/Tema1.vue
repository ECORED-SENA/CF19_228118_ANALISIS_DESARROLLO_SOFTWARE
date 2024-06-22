<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Sistemas de control de versiones
    
    .cont_1_1.pb-5
      .row
        .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
          p Un sistema de control de versiones se encarga del registro de los cambios realizados a lo largo del tiempo en uno o un conjunto de archivos (versiones), de forma tal que estos puedan ser recuperados con precisión según las necesidades de los usuarios. A este tipo de procesos se le puede denominar versionamiento y, aunque estas actividades son comunes en archivos o código fuente en la industria del desarrollo de #[em software], el proceso es aplicable a cualquier tipo de archivo.
          p El proceso de hacer copias de seguridad y crear versiones de los archivos considerados importantes es una actividad muy común. 
          .p-4.p-md-2.mt-4(style="background: rgb(119,55,240);background: linear-gradient(180deg, rgba(119,55,240,1) 0%, rgba(41,17,85,1) 100%);border-radius:5px;")
            .row
              .col-auto.d-none.d-md-block
                figure
                  img(src="@/assets/curso/tema1/2.svg")
              .col(style="place-self:center;")
                p.mb-0.fw-bold(style="color:#00FFDF;") El proceso de hacer copias de seguridad y crear versiones de los archivos considerados importantes es una actividad muy común. 
        .col-lg-4(data-aos="fade-left")
          figure.m-auto.col-9.col-md-8.col-lg-12
            img(src="@/assets/curso/tema1/3.svg")
      
      .row.mt-5
        .col-auto.d-none.d-md-block
          figure
            img(src="@/assets/curso/tema1/3-1.svg")
        .col(style="place-self:center;")
          p.mb-0 Así, mediante el uso de un sistema de control de versiones, se obtienen múltiples posibilidades, entre las cuales se encuentran:
      
      .titulo-sexto.color-acento-contenido.mt-5(data-aos="zoom-in-down")
        h5 Figura 1.
        span Beneficios del control de versiones
      figure(data-aos="zoom-in-up")
        img.d-none.d-lg-block(src="@/assets/curso/tema1/4.svg" alt="Beneficios del control de versiones: Es posible regresar a versiones anteriores de nuestros documentos. Se puede obtener información de las personas que afectaron cada uno de los archivos. Se facilita identificar introducción de errores. Se pueden comparar los cambios realizados entre versiones. Existen mecanismos que permiten la recuperación de archivos defectuosos o eliminados.")
        img.d-none.d-md-block.d-lg-none(src="@/assets/curso/tema1/5.svg" alt="Beneficios del control de versiones: Es posible regresar a versiones anteriores de nuestros documentos. Se puede obtener información de las personas que afectaron cada uno de los archivos. Se facilita identificar introducción de errores. Se pueden comparar los cambios realizados entre versiones. Existen mecanismos que permiten la recuperación de archivos defectuosos o eliminados.")
        img.d-block.d-md-none(src="@/assets/curso/tema1/6.svg" alt="Beneficios del control de versiones: Es posible regresar a versiones anteriores de nuestros documentos. Se puede obtener información de las personas que afectaron cada uno de los archivos. Se facilita identificar introducción de errores. Se pueden comparar los cambios realizados entre versiones. Existen mecanismos que permiten la recuperación de archivos defectuosos o eliminados.")
    
    .row.mt-4
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        .row
          .col-auto.d-none.d-md-block
            figure
              img(src="@/assets/curso/tema1/7.svg")
          .col(style="place-self:center;")
            p.mb-0 Respecto a los sistemas de control de versiones, estos pueden ser categorizados según sus características en tres grupos: sistemas de control de versiones locales, sistemas de control de versiones centralizados y sistemas de control de versiones distribuidos.
            p.mb-0 A continuación, se podrán conocer sobre los sistemas de control de versiones locales, centralizadas y distribuidas:
      .col-lg-5(data-aos="fade-left")
        figure.m-auto.col-10.col-md-8.col-lg-12
          img(src="@/assets/curso/tema1/8.png")
    
    .cont_decorativo.mb-4.mt-5(data-aos="flip-up" style="max-width:fit-content;position:relative;")
      .row
        .col-auto.ps-3.pe-0
          figure
            img(src="@/assets/curso/tema1/9.svg")
        .col.pe-4(style="place-self:end;")
          h3.text-white.mb-0.pb-2 Sistemas de control de versiones locales
    
    p(data-aos="fade-right") Una forma de llevar control de versiones locales es crear copias manuales en un directorio exclusivo o de fácil reconocimiento, donde se registre los cambios realizados sobre un documento particular, generalmente mediante una numeración o incluso llevando registro de la fecha de realización de la versión, como se aprecia en la siguiente figura.

    .cont_1_2.mt-5.pb-4
      .col-xl-8.m-auto
        .titulo-sexto.color-acento-contenido.mt-5(data-aos="zoom-in-down")
          h5 Figura 2.
          span Ejemplo de los sistemas de control de versiones locales
        figure(data-aos="zoom-in-up")
          img(src="@/assets/curso/tema1/11.png" alt="Sistemas de control de versiones locales")
    
    .cont_decorativo.mb-4.mt-5(data-aos="flip-up" style="max-width:fit-content;position:relative;")
      .row
        .col-auto.ps-3.pe-0
          figure
            img(src="@/assets/curso/tema1/9.svg")
        .col.pe-4(style="place-self:end;")
          h3.text-white.mb-0.pb-2 Sistemas de control de versiones locales
    
    .row
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p Lo anterior, aunque puede ser una práctica común y fácil de implementar, resulta muy riesgoso, ya que la posibilidad de introducir errores, olvidar la ubicación del directorio, sobrescribir por accidente un archivo o nombrar incorrectamente un archivo es muy alta. 
        .p-3(style="background-color:#D6E1FD;border-radius:10px;")
          .row
            .col-auto.d-none.d-md-block
              figure
                img(src="@/assets/curso/tema1/12.svg")
            .col(style="place-self:center;")
              p.mb-0 Para solucionar este problema, surgieron hace un tiempo los sistemas de control de versiones locales, que contienen una base de datos simple donde se registra información de todos los cambios realizados sobre los archivos, como se ilustra en la siguiente figura. 
      .col-lg-5(data-aos="fade-left")
        figure.m-auto.col-10.col-md-8.col-lg-12
          img(src="@/assets/curso/tema1/13.png")
    
    .cont_1_3.mt-5.pb-4
      .col-xl-4.col-lg-7.m-auto
        .titulo-sexto.color-acento-contenido.mt-5(data-aos="zoom-in-down")
          h5 Figura 3.
          span Esquema de control de versiones en un computador local
        figure(data-aos="zoom-in-up")
          img(src="@/assets/curso/tema1/15.svg" alt="Diagrama que explica el proceso de extracción de un archivo de una base de datos de versiones en un ordenador local. Muestra un archivo siendo seleccionado y las distintas versiones del mismo archivo almacenadas secuencialmente.")
    
    .cont_decorativo.mb-4.mt-5(data-aos="flip-up" style="max-width:fit-content;position:relative;")
      .row
        .col-auto.ps-3.pe-0
          figure
            img(src="@/assets/curso/tema1/9.svg")
        .col.pe-4(style="place-self:end;")
          h3.text-white.mb-0.pb-2 Sistemas de control de versiones centralizados
    
    .row
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p Este tipo de sistemas surge para solucionar los problemas asociados a la colaboración en grupo. Bajo el sistema de control de versiones locales, la única forma de colaborar en equipo era mediante un proceso de sincronización manual. Los miembros de un equipo debían sacar copias de los archivos procesados localmente y enviarlas a sus compañeros, quienes, manualmente, debían integrar sus propios cambios y luego repetir el proceso de regreso.
        .p-3(style="background-color:#D6E1FD;border-radius:10px;")
          p.mb-0 En los sistemas de control de versiones centralizados, se dispone de un servidor donde se almacenan todos los archivos y a partir del cual varios clientes pueden realizar descargas, como se ilustra en la siguiente figura.
      .col-lg-5(data-aos="fade-left")
        figure.m-auto.col-10.col-md-8.col-lg-12
          img(src="@/assets/curso/tema1/16.png")
    
    .cont_1_4.mt-5.pb-4
      .col-xl-4.col-lg-7.m-auto
        .titulo-sexto.color-acento-contenido.mt-5(data-aos="zoom-in-down")
          h5 Figura 4.
          span Ejemplo sistemas de control de versiones centralizados
        figure(data-aos="zoom-in-up")
          img(src="@/assets/curso/tema1/18.svg" alt="Diagrama que ilustra la interacción entre dos ordenadores,  Computadora A y Computadora B, y un servidor central de control de versiones. Ambos ordenadores acceden a distintas versiones de un archivo almacenado en la base de datos de versiones del servidor central.")

    .row.mt-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        p Este tipo de sistemas de control de versiones ha sido ampliamente utilizado en la industria del software, ya que facilitan el trabajo colaborativo, permiten un control detallado por parte de los administradores y, son mucho más fáciles de gestionar en comparación con los procesos de sincronización manual que debían realizarse en sistemas de control de versiones locales al trabajar en equipo. Sin embargo, al tratarse de sistemas centralizados, existe una dependencia muy peligrosa del equipo central. Si esta falla por alguna razón bloqueará automáticamente a todos los usuarios y, en casos más extremos, se puede perder todo si el equipo central sufre un fallo irreparable, como fallas en los discos. 
      .col-lg-4(data-aos="fade-left")
        figure.m-auto.col-8.col-md-7.col-lg-12
          img(src="@/assets/curso/tema1/19.svg")
        
    .cont_decorativo.mb-4.mt-5(data-aos="flip-up" style="max-width:fit-content;position:relative;")
      .row
        .col-auto.ps-3.pe-0
          figure
            img(src="@/assets/curso/tema1/9.svg")
        .col.pe-4(style="place-self:end;")
          h3.text-white.mb-0.pb-2 Sistemas de control de versiones distribuidas 
    
    .row
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        p En este tipo de sistemas, los clientes, además de descargar una copia actual de los archivos presentes en el repositorio, crean una réplica completa del mismo. De esta forma, si por alguna razón el servidor falla, los repositorios presentes en los clientes sirven para realizar el proceso de restauración. Es decir, en estos sistemas, los clientes se convierten en clones del repositorio en el servidor.
        .p-3(style="background-color:#D6E1FD;border-radius:10px;")
          p.mb-0 Este tipo de sistemas permite administrar múltiples repositorios remotos con los que los usuarios pueden trabajar simultáneamente con diferentes grupos de personas en varios proyectos, e incluso dentro del mismo proyecto y de distintas formas. Esto posibilita el establecimiento de varios flujos de trabajo que no son posibles de implementar en sistemas centralizados y mucho menos en sistemas locales.
      .col-lg-5(data-aos="fade-left")
        figure.m-auto.col-8.col-md-7.col-lg-12
          img(src="@/assets/curso/tema1/20.png")
    
    .col-xl-6.col-lg-9.m-auto.mt-5
      .titulo-sexto.color-acento-contenido.mt-5(data-aos="zoom-in-down")
        h5 Figura 5.
        span Ejemplo sistemas de control de versiones distribuidas 
    .cont_1_5.mt-5.pb-4
      .col-xl-6.col-lg-9.m-auto
        figure(data-aos="zoom-in-up")
          img(src="@/assets/curso/tema1/22.svg" alt="Diagrama que representa la interacción entre una computadora servidor y dos computadoras  Computadora A y Computadora B. Cada computadora accede a una base de datos de versiones, con versiones del archivo sincronizadas entre sí, manteniendo consistencia en el control de versiones.")


    
    
  
    
 

      
</template>

<script>
export default {
  name: 'Tema1',
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
.cont_1_1, .cont_1_1 *
  position: relative
.cont_1_1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: url(../assets/curso/tema1/1.png)
  background-size: 100% 100%
.cont_1_2, .cont_1_2 *
  position: relative
.cont_1_2:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: url(../assets/curso/tema1/10.png)
  background-size: 100% 100%
.cont_1_3, .cont_1_3 *
  position: relative
.cont_1_3:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: url(../assets/curso/tema1/14.png)
  background-size: 100% 100%
.cont_1_4, .cont_1_4 *
  position: relative
.cont_1_4:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: url(../assets/curso/tema1/17.png)
  background-size: 100% 100%
.cont_1_5, .cont_1_5 *
  position: relative
.cont_1_5:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: url(../assets/curso/tema1/21.png)
  background-size: 100% 100%
@media screen and (max-width: 992px)
  .cont_1_1:before,.cont_1_2:before
    background-size: cover
</style>
