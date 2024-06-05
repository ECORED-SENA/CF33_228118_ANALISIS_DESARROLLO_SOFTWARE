<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.pb-md-0
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.bgi.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4.pb-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12  
            .bg2.brad.p-4.mb-5
              .row.justify-content-center.align-items-center        
                .col-lg-auto.my-3                  
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/2.png', alt='')         
                .col.my-3
                  p(data-aos="fade-down") Una de las partes fundamentales en la etapa de implantación de #[i software], son los documentos que acompañan y dan soporte a este proceso, como son, entre otros:              
                  ul.lista-ul--color.fa-ul.mb-0
                    li 
                      i.fas.fa-code.color1
                      | Los manuales de usuario. 
                    li 
                      i.fas.fa-code.color1
                      | Instalación. 
                    li.mb-0 
                      i.fas.fa-code.color1
                      | Actas de entrega.  
   
            .row.justify-content-center          
              .col-lg-7
                p(data-aos="fade-down") La implementación de #[i software] es la puesta en marcha o ejecución de una solución de #[i software], para satisfacer las necesidades de una empresa. 

                p(data-aos="fade-down") En esta etapa se adaptan, elaboran y añaden elementos anteriormente contemplados. En esta fase se realizan compilaciones, pruebas, instalaciones, personalización, migración de datos, capacitaciones, y se da soporte documental a través de manuales de usuario y otros manuales que permitan trabajar de manera eficaz y productiva. 
                .row
                  .col-auto.bg3.px-2.m-1.p-1(data-aos="flip-down")
                    h5.text-center.mb-0 Le deseamos muchos éxitos en este proceso de aprendizaje.             
              .col-lg-5.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/3.png', alt='')        

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
