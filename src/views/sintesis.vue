<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p(data-aos="fade-down") A continuación, se presenta una síntesis de la temática estudiada en el componente formativo.  

    .row.justify-content-center(style="background-color:#F6F6F6;border-radius:20px;")
      .col-lg-10.mb-5.p-4.p-lg-5
        figure(data-aos="zoom-in-up")
          img(src="@/assets/curso/sintesis.svg", alt="Diagrama de la síntesis de componente formativo que representa la integración continua en DevOps. Incluye el aseguramiento de espacio compartido para una gestión unificada del trabajo y el uso de control de versiones para facilitar la colaboración y gestión de cambios. Los repositorios abordan la agrupación de archivos y la administración de metadatos, con información sobre cambios y usuarios. Los sistemas de control de versiones pueden ser locales, centralizados o distribuidos, cada uno con características específicas. Git se integra en cualquier sistema operativo, ofreciendo comandos básicos y hospedaje de proyectos en repositorios remotos. Las plataformas para integración continua, como GitHub, GitLab y BitBucket, permiten la creación de repositorios públicos y privados, registro de grupos de trabajo, gestión de permisos de acceso y colaboración en proyectos de software.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
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

<style lang="sass"></style>
