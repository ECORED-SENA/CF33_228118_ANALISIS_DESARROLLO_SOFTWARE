<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.pb-md-0
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Pruebas y actas de entrega

    .row.justify-content-center.mb-4    
      .col-lg-9.my-3(data-aos="fade-left")
        .bg14.p-4.h-100.j
          p(data-aos="fade-down").mb-0 Al momento de realizar la entrega de la solución informática, esta debió ser probada de manera interna por los desarrolladores para examinar la correcta funcionalidad de todos sus procesos, permitiendo conocer la calidad del mismo, así como los posibles fallos que se puedan presentar a corto, medio o largo plazo, con el fin de lograr predecir su comportamiento durante la implantación, su grado de manejabilidad y lo amigable que pueda ser su interfaz gráfica. 
      .col-lg-3.my-3(data-aos="fade-down")
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/55.png', alt='') 

    .row.justify-content-center.mb-4 
      .col-lg-5.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/56.png', alt='')        
      .col-lg-7.my-3 
        p(data-aos="fade-down") En el caso de los usuarios, las pruebas van dadas por las necesidades y el contexto que representa a cada uno de los clientes, en otras palabras, la misma prueba no puede servir para todos los escenarios, porque puede ser que una prueba para un #[i software] específico sea la adecuada, pero en otro puede llegar a ser perjudicial. En el caso puntual de los clientes, se debe hacer una prueba de funcionamiento y rendimiento en el sitio, bajo las condiciones y entorno de la empresa, con las funciones y datos reales. Esta prueba debe ser ejecutada y analizada por las dos partes, se puede hacer en una sola jornada o si el cliente lo desea se puede hacer dos días o hasta en una semana, solo así, el cliente sentirá la seguridad de firmar el acta de entrega a satisfacción. 
        img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/57.png', alt='') 

    .row.bg17.align-items-center
      .col-lg-12.col-12.px-lg-5.p-5 
        .row.justify-content-center.align-items-center          
          .col-lg-12 
            .row.justify-content-center(data-aos="flip-down")           
              .col-lg-auto.my-3
                img.img-a.img-t(src='@/assets/curso/temas/59.png', alt='')       
              .col.my-3  
                p(data-aos="fade-down").mb-0 El acta de entrega es el documento final, que se elabora con el fin de entregar parcial o totalmente un producto de #[i software], este documento es presentado al cliente, el cual debe recibir a satisfacción el producto para finalizar con el proceso, por lo general este documento se firma después de realizar las pruebas de la aplicación. (UGUR, 2009) 

          h5(data-aos="fade-down") Los modelos de acta de entrega pueden variar según las empresas productoras de #[i software], pero generalmente llevan la siguiente información:
          .row.justify-content-center
              .col-lg-10            
                .row.justify-content-center
                  .col-lg-7.my-3 
                    p(data-aos="fade-down") Por lo general, estos videos deben llevar:   
                    ul.lista-ul--color.fa-ul.mb-0
                      li 
                        i.fas.fa-code.color1
                        span Una portada con los logos e información de la empresa o desarrollador de la solución de #[i software]. 

                      li 
                        i.fas.fa-code.color1
                        | En la página siguiente, la fecha y a quién está dirigido el producto “el nombre del cliente, dueño o presidente de la empresa”. En el cuerpo de este apartado, se debe hacer un respetuoso saludo y cuál es el motivo de este documento. 

                      li 
                        i.fas.fa-code.color1
                        | En las siguientes páginas va la descripción del producto a entregar. 
                  .col-lg-5.my-3
                    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/60.png', alt='')          

</template>

<script>
export default {
  name: 'Tema3',
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
