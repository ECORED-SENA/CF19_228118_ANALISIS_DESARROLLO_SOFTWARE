<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Git en entornos remotos
    
    .cont_4_1.pb-5
      p(data-aos="fade-right") Para poder colaborar con un equipo de trabajo e implementar el concepto de integración continua, es necesario hospedar los proyectos en repositorios remotos, los cuales son accesibles por medio de internet o por un entorno de red.
      .row.mt-5
        .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
          .p-3(style="background-color:#FFEFAF;border-radius:10px;")
            p.mb-0 En estos repositorios remotos se definen una serie de permisos que indican si se tiene la posibilidad de solo lectura o de lectura y escritura. Colaborar implica la gestión de estos repositorios, enviando y obteniendo información desde estos, teniendo en cuenta los estados que ya se han mencionado anteriormente.
          .p-4.mt-4(style="background-color:#F2E5FD;border-radius:10px;")
            p.mb-0 A continuación, se relacionan los pasos a seguir para los entornos remotos.
        .col-lg-4(data-aos="fade-left")
          figure.m-auto.col-8.col-md-7.col-lg-12
            img(src="@/assets/curso/tema4/2.svg")
      .col-xl-10.m-auto.mt-5
        .tarjeta.p-4.p-lg-5.pb-lg-4.cont_slyder
          SlyderA(tipo="b")
            .row
              .col-lg-5.mb-4.mb-lg-0
                figure.m-auto.col-12.col-md-9.col-lg-12
                  img(src='@/assets/curso/tema4/3.png')
              .col-lg-7(style="place-self:center;")
                h5(style="color:#F0C518;") Ver repositorios remotos
                p.text-white.mt-4 Para ver los repositorios remotos configurados, se puede ejecutar el comando: #[strong $ git remote].
            .row
              .col-lg-5.mb-4.mb-lg-0
                figure.m-auto.col-12.col-md-9.col-lg-12
                  img(src='@/assets/curso/tema4/4.png')
              .col-lg-7(style="place-self:center;")
                h5(style="color:#F0C518;") Definir un repositorio remoto
                p.text-white.mt-4 Para definir un repositorio remoto y asociarlo a un nombre para su referenciación, se utiliza el siguiente comando: <strong> git remote add [nombre-remoto] [url]</strong>.
            .row
              .col-lg-5.mb-4.mb-lg-0
                figure.m-auto.col-12.col-md-9.col-lg-12
                  img(src='@/assets/curso/tema4/5.png')
              .col-lg-7(style="place-self:center;")
                h5(style="color:#F0C518;") Ejemplo de definición
                p.text-white.mt-4 Donde #[strong nombre-remoto] corresponde al nombre con que se referencia el repositorio y #[strong URL] es la ubicación lógica del mismo en un entorno de red o en una dirección de internet. En el siguiente ejemplo se define un repositorio ubicado en un servidor de Github y cuyo nombre de referencia es ref: #[strong $ git remote add ref https://github.com/paulboone/ticgit].
            .row
              .col-lg-5.mb-4.mb-lg-0
                figure.m-auto.col-12.col-md-9.col-lg-12
                  img(src='@/assets/curso/tema4/6.png')
              .col-lg-7(style="place-self:center;")
                h5(style="color:#F0C518;") Extraer datos del remote
                p.text-white.mt-4 Una vez definido el #[strong remote], se pueden extraer los datos utilizando el siguiente comando: <strong> $ git fetch [nombre-remoto]</strong>.
            .row
              .col-lg-5.mb-4.mb-lg-0
                figure.m-auto.col-12.col-md-9.col-lg-12
                  img(src='@/assets/curso/tema4/7.png')
              .col-lg-7(style="place-self:center;")
                h5(style="color:#F0C518;") Conexión al repositorio remoto
                p.text-white.mt-4 El comando anterior se conecta al repositorio remoto y trae todos los datos de los cuales aún no se tiene copia en tu repositorio local. Para enviar información desde el repositorio local hacia el servidor remoto, se utiliza el siguiente comando: <strong> git push [nombre-remoto] [nombre-rama]</strong>.
            .row
              .col-lg-5.mb-4.mb-lg-0
                figure.m-auto.col-12.col-md-9.col-lg-12
                  img(src='@/assets/curso/tema4/8.png')
              .col-lg-7(style="place-self:center;")
                h5(style="color:#F0C518;") Enviar información
                p.text-white.mt-4 Recordemos que, si se ha clonado un repositorio desde alguna ubicación, Git asigna el nombre #[strong origin] al servidor del que se ha realizado la clonación. Así, si por ejemplo queremos enviar nuestra rama master al servidor #[strong origin], se debe ejecutar el comando de la siguiente forma: #[strong $ git push origin master].
  
    
 

      
</template>

<script>
export default {
  name: 'Tema4',
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
.cont_4_1, .cont_4_1 *
  position: relative
.cont_4_1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: url(../assets/curso/tema4/1.png)
  background-size: 100% 100%
.slyder-a__btn--sigt, .slyder-a__btn--atrs
  background-color: #F0C518
  opacity: 1
  border-color: #F0C518
.slyder-a__bullets__item--active
  background-color: #A854F3 !important
  border-color: #A854F3 !important
.slyder-a__bullets__item
  background-color: #E1C3FB
  border-color: #E1C3FB
.cont_slyder
  background-color: #3A1D71
  position: relative
.cont_slyder:before
  content: ''
  position: absolute
  width: 100%
  height: 100%
  right: 0
  top: 0
  background: url(../assets/curso/tema4/9.png)
  background-size: contain
  background-position: right
  background-repeat: no-repeat
@media screen and (max-width: 992px)
  .cont_slyder:before
    background-size: cover
</style>
