<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .cont_intro
      .row
        .col-auto.d-none.d-md-block(data-aos="fade-right")
          figure
            img(src="@/assets/curso/intro2.svg")
        .col(style="place-self:center;" data-aos="fade-left")
          p.mb-0 La integración continua es una práctica esencial en #[em DevOps] que asegura un espacio compartido donde los equipos pueden gestionar su trabajo de manera unificada mediante sistemas de control de versiones. Estos espacios, conocidos como repositorios, no solo agrupan archivos, sino que también administran metadatos sobre los cambios y los usuarios que los realizan.
      
      .row.mt-4
        .col(style="place-self:center;" data-aos="fade-up")
          .p-3(style="background-color:#FFEFAF;border-radius:10px;")
            p.mb-0 Los sistemas de control de versiones registran los cambios en archivos a lo largo del tiempo, permitiendo su recuperación precisa. Existen tres tipos principales: locales, centralizados y distribuidos. Los sistemas locales suelen ser manuales y propensos a errores, mientras que los centralizados dependen de un servidor único, lo que puede ser riesgoso.
          .p-3.mt-4(style="background-color:#3A1D71;border-radius:10px;")
            p.mb-0.text-white Los sistemas distribuidos, como Git, ofrecen una solución más robusta al permitir que cada cliente tenga una copia completa del repositorio, lo que facilita la restauración en caso de fallos del servidor central. Git, ampliamente utilizado, nació para la comunidad del #[em kernel] de Linux y permite trabajar sin conexión, garantizando la integridad de los datos mediante algoritmos criptográficos.
        .col-auto.d-none.d-lg-block(data-aos="fade-down")
          figure
            img(src="@/assets/curso/intro3.svg")
      
      .row.mt-4
        .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.m-auto.col-10.col-md-9.col-lg-12
            img(src="@/assets/curso/intro4.svg")
        .col-lg-7(data-aos="fade-left")
          .p-4.bg-white.h-100.d-flex.align-content-center.flex-wrap(style="border-radius:10px;")
            p.mb-0 Plataformas como GitHub, GitLab y BitBucket, basadas en Git, facilitan la integración continúa proporcionando repositorios accesibles por internet, donde se pueden gestionar proyectos de #[em software] de manera colaborativa y segura, optimizando así el desarrollo y mantenimiento de los proyectos.





    


    
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass">
.cont_intro, .cont_intro *
  position: relative
.cont_intro:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 110%
  bottom: -50px
  background: url(../assets/curso/intro1.png)
  background-size: 100% 100%
@media screen and (max-width: 992px)
  .cont_intro:before
    background-size: cover
</style>
