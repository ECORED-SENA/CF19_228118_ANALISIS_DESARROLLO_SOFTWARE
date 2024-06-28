<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Comandos básicos de Git
    
    .cont_3_1
      p(data-aos="fade-right") Para trabajar con Git es importante conocer los diferentes comandos que posibilitan la creación de repositorios, a continuación, se podrá acceder a ellos a través del siguiente recurso:
      .row.mt-4
        .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row.col-xl-11.m-auto(titulo="Inicializar un repositorio")
              p.mb-0 Para inicializar un repositorio desde un directorio existente, se debe usar el comando: #[strong $ git init].
            .row.col-xl-11.m-auto(titulo="Crear subdirectorio .git")
              p.mb-0 Este comando creará un nuevo subdirectorio llamado .git, el cual contendrá todos los archivos necesarios para el repositorio. Si se desea obtener una copia desde un repositorio existente, se debe utilizar el comando de clonación: #[strong $ git clone https://url_del_repositorio]
            .row.col-xl-11.m-auto(titulo="Clonación del repositorio")
              p.mb-0 Este comando permite recibir una copia de casi todos los archivos existentes en el repositorio de origen, incluyendo cada versión de cada uno de los archivos. Así, si el servidor original llegara a dañarse, se podrá realizar una restauración a partir de todos los clones generados.
            .row.col-xl-11.m-auto(titulo="Estados de los archivos")
              p.mb-0 Una vez se dispone de un espacio de trabajo inicializado, todos los archivos van a tener dos posibles estados: #[strong Rastreados (tracked files)]: Son todos aquellos archivos que estaban en la última versión del proyecto, independientemente de si estos archivos están modificados, sin modificar o preparados. Cuando se clona un proyecto a partir de un repositorio existente, todos estos archivos pertenecen al estado rastreado y sin modificar. Una vez un archivo es editado, pasa al estado modificado; luego se debe pasar al estado de preparación para finalmente confirmarlos. #[strong Sin rastrear:] Corresponden a todos aquellos archivos que no formaban parte de la última versión del proyecto y no están en el área de preparación (#[em staging area]).
            .row.col-xl-11.m-auto(titulo="Visualizar el estado")
              p.mb-0 Para visualizar el estado actual de tus archivos indicando si están o no rastreados por Git, se puede ejecutar el siguiente comando: #[strong $ git status].
            .row.col-xl-11.m-auto(titulo="Rastrear archivos nuevos")
              p.mb-0 Para todos los archivos nuevos que se desean ser rastreados por Git, se debe indicar con el siguiente comando: #[strong $ git add Nombre_archivo].
        .col-lg-5(data-aos="fade-left")
          figure.m-auto.col-9.col-md-8.col-lg-12.d-none.d-lg-block
            img(src="@/assets/curso/tema3/2.png")
      .row.mt-lg-4
        .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.m-auto.col-9.col-md-8.col-lg-12
            img(src="@/assets/curso/tema3/3.png")
        .col-lg-7(data-aos="fade-left")
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row.col-xl-11.m-auto(titulo="Rastrear directorios")
              p.mb-0 También es posible indicar a Git que haga rastreo de un directorio, lo cual implica que recursivamente se hace rastreo de todos los archivos en el interior del directorio: #[strong $ git add Directorio].
            .row.col-xl-11.m-auto(titulo="Preparar archivos")
              p.mb-0 El comando #[strong git add] además de servir para iniciar el rastreo de un archivo o directorio que no estaba en la última versión, también sirve para preparar archivos (enviarlos al #[em staging] area) y para marcar archivos como resueltos en los casos donde estos entran en conflictos por operaciones de combinación. Dicho de una manera más simplificada: el comando #[strong add] indica que un archivo o directorio debe ser añadido en la próxima confirmación.
            .row.col-xl-11.m-auto(titulo="Confirmar cambios")
              p.mb-0 Para confirmar cambios, se ejecuta el comando: #[strong $ git commit].
            .row.col-xl-11.m-auto(titulo="Mensaje de confirmación")
              p.mb-0 Al ejecutar la confirmación, el sistema desplegará un mecanismo para recibir un mensaje de confirmación que será asociado a esta operación de commit. También es posible agregar el comentario explícitamente en la ejecución de la confirmación usando la opción #[strong -m: $ git commit -m “En esta versión se arregló el archivo W”.]
            .row.col-xl-11.m-auto(titulo="Confirmación automática")
              p.mb-0 También es posible ejecutar una operación de confirmación que salte el paso de preparación que se logra con la ejecución del comando add. Es decir, la operación de confirmación se encarga de preparar todos los archivos rastreados y luego confirmar. Esto es posible agregando la opción #[strong -a: $ git commit -a -m ‘comentario de esta confirmación’.]
            .row.col-xl-11.m-auto(titulo="Visualizar el historial")
              p.mb-0 Para visualizar el histórico de las confirmaciones desde la más reciente hasta la más antigua realizadas sobre un repositorio, se ejecuta el comando: #[strong $ git log].
    
  
    
 

      
</template>

<script>
export default {
  name: 'Tema3',
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
.cont_3_1, .cont_3_1 *
  position: relative
.cont_3_1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 70%
  top: 0
  background: url(../assets/curso/tema3/1.png)
  background-size: 100% 100%
.acordion__accion__btn--a
  background-color: #F0C518
  box-shadow: 0px 0px 7px 2px rgba(0,0,0,.3)
.acordion .tarjeta--azul
  background-color: #3A1D71
.acordion .tarjeta--azul h3
  color: #fff
.acordion .tarjeta.tarjeta--azul.acordion__activo
  background-color: #EAD6FC
.acordion .tarjeta.tarjeta--azul.acordion__activo h3
  color: #12263F
</style>
