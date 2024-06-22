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
              p.text-small.text-white Conoce GitHub un portal creado para alojar códigos de las aplicaciones. 
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
              p.text-small.text-white Conoce a Bitbucket un servicio de alojamiento basado en web para los proyectos que utilizan sistema de control de versiones Mercurial y Git.
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
          h3.text-white.mb-0.pb-2 Aceptación de términos de servicios
    
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
</style>
