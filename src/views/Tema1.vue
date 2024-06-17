<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.pb-md-0
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Documentación de procesos de implantación 

    .row.justify-content-center          
      .col-lg-7
        p(data-aos="fade-down") La documentación en el proceso de implementación es fundamental, porque permite realizar modificaciones necesarias al proyecto sin grandes complicaciones, debido a que en estos documentos se registra todo lo que ocurre en este proceso, desde las especificaciones hasta las actas de entrega, además de ser un instrumento para comunicar los detalles no tan obvios del sistema.  
        .bg1.p-4.brad
          p(data-aos="fade-down").mb-0 La documentación es el registro de todos los pasos necesarios para completar un proceso, en esta parte es muy importante el "cómo" se realizan; el desarrollo de #[i software] es esencialmente un grupo de procesos interrelacionados, por lo cual, es importante llevar una correcta documentación de los procesos en los formatos establecidos. 
        
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/4.png', alt='')   

    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.1 Manuales técnicos  

    p(data-aos="fade-down").mb-5 Según el Ministerio TIC (2018), en este documento está plasmada toda la información del proyecto de #[i software], con una descripción bien detallada sobre las características técnicas y físicas de cada elemento; este manual va dirigido al administrador del sistema y otros ingenieros para que puedan hacer un respectivo mantenimiento en caso de que sea necesario. #[b Estos manuales deben contener como mínimo, los elementos relacionados a continuación:]                        
      
    .row.bg5.align-items-center
      .col-lg-12.col-12.px-lg-5.p-5 
        .row.justify-content-center.align-items-center          
          .col-lg-12 
            .tarjeta.bg4.p-4(data-aos="fade-left")          
              LineaTiempoC.color-primario(text-small)
                .row.justify-content-center(titulo="Nombre del sistema")
                  .col-lg-6.mb-4.mb-md-0
                    p Nombre completo del sistema de información.  
                
                  .col-lg-5
                    img.img-a.img-t(src='@/assets/curso/temas/6.png', alt='') 
                .row.justify-content-center(titulo="Sigla")
                  .col-lg-6.mb-4.mb-md-0
                    p Sigla o nombre corto, bajo el cual se conoce el sistema de información, si aplica.  
                
                  .col-lg-5
                    img.img-a.img-t(src='@/assets/curso/temas/7.png', alt='')      
                .row.justify-content-center(titulo="Descripción del sistema")
                  .col-lg-6.mb-4.mb-md-0
                    p Descripción funcional del sistema y los servicios que presta.  
                
                  .col-lg-5
                    img.img-a.img-t(src='@/assets/curso/temas/8.png', alt='') 
                .row.justify-content-center(titulo="Versión")
                  .col-lg-6.mb-4.mb-md-0
                    p Versión actual y en producción del sistema de información.  
                
                  .col-lg-5
                    img.img-a.img-t(src='@/assets/curso/temas/9.png', alt='')  
                .row.justify-content-center(titulo="Categoría")
                  .col-lg-6.mb-4.mb-md-0
                    p Indique la categoría del sistema, de acuerdo con la clasificación del Marco de Referencia de Arquitectura Empresarial para la Gestión de TI en el Estado:  
                    ul.lista-ul--color.fa-ul.mb-0
                      li 
                        i.fas.fa-code.color1
                        | Sistema misional. 
                      li 
                        i.fas.fa-code.color1
                        | Sistema de apoyo. 
                      li 
                        i.fas.fa-code.color1
                        | Portales digitales. 
                      li 
                        i.fas.fa-code.color1
                        | Sistema de direccionamiento estratégico.                     
                
                  .col-lg-5
                    img.img-a.img-t(src='@/assets/curso/temas/10.png', alt='') 
                .row.justify-content-center(titulo="Fabricante")
                  .col-lg-6.mb-4.mb-md-0
                    p Compañía que construyó el sistema de información o nombre del desarrollador.  
                
                  .col-lg-5
                    img.img-a.img-t(src='@/assets/curso/temas/11.png', alt='')   
                .row.justify-content-center(titulo="Fecha de vencimiento del soporte")
                  .col-lg-6.mb-4.mb-md-0
                    p Indique la fecha hasta la cual se tiene el contrato de mantenimiento o soporte.  
                
                  .col-lg-5
                    img.img-a.img-t(src='@/assets/curso/temas/12.png', alt='') 
                .row.justify-content-center(titulo="Sistema operativo")
                  .col-lg-6.mb-4.mb-md-0
                    p Sistema(s) operativos(o) sobre los cuales funciona actualmente el sistema de información.  
                
                  .col-lg-5
                    img.img-a.img-t(src='@/assets/curso/temas/13.png', alt='')      
                .row.justify-content-center(titulo="Lenguaje de programación")
                  .col-lg-6.mb-4.mb-md-0
                    p Lenguajes de programación y #[i frameworks] sobre los cuales fue construido el sistema de información. Ejemplos: Java 7, C#.Net #[i framework] 4.5, php 5.3, etc. 
                
                  .col-lg-5
                    img.img-a.img-t(src='@/assets/curso/temas/14.png', alt='') 
                .row.justify-content-center(titulo="Plataforma de base de datos")
                  .col-lg-6.mb-4.mb-md-0
                    p Ejemplo: Oracle, SQL server, Postgres, MySQL, entre otros.  
                
                  .col-lg-5
                    img.img-a.img-t(src='@/assets/curso/temas/15.png', alt='')  
                .row.justify-content-center(titulo="Documentación técnica y funcional")
                  .col-lg-6.mb-4.mb-md-0
                    p Indique la ubicación (URL) de la documentación detallada técnica y funcional del sistema (arquitectura, manuales, diseños, etc.). 
                
                  .col-lg-5
                    img.img-a.img-t(src='@/assets/curso/temas/16.png', alt='') 
                .row.justify-content-center(titulo="Arquitectura tecnológica")
                  .col-lg-6.mb-4.mb-md-0
                    p Stand Alone, web, cliente servidor, app móvil, #[i software as a service] (nube), etc.  
                
                  .col-lg-5
                    img.img-a.img-t(src='@/assets/curso/temas/17.png', alt='')      

    .row.bg12.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4.pb-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12  
            Separador 
            #t_1_2.titulo-segundo.color-acento-contenido.mb-4(data-aos="zoom-in-left")
              h2 1.2  Manuales de usuario 
            .row.justify-content-center.mb-4    
              .col-lg-4.my-3(data-aos="fade-left")
                .bg6.p-3.j.brad.h-100
                  p.mb-0 El manual de usuario es el documento que facilita a las personas utilizar un #[i software] de manera sencilla y clara, además de brindar acceso a todas las funcionalidades que este posee. La documentación técnica es muy importante en el ciclo de vida de los sistemas de información, además de ser un entregable obligatorio por parte de los programadores. 
              .col-lg-4.my-3(data-aos="fade-down")
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/18.png', alt='') 
              .col-lg-4.my-3(data-aos="fade-right")
                .bg7.p-4.brad.h-100
                  h5 Según MinTIC (2018):
                  p.mb-0 Los sistemas de información deben contar con la documentación de usuario, técnica y de operación actualizada, que facilite la transferencia de conocimiento a los usuarios y a los servicios de soporte tecnológico.  

            .row.mb-5
              .col-auto.bg3.px-2.m-1.p-1(data-aos="flip-down")
                h5.text-center.mb-0 Para realizar un manual de usuario, hay que tener en cuenta algunos consejos:                                                             
            .bg8.p-4.mb-5(data-aos="fade-left")      
              SlyderF(columnas="col-lg-4")
                .tarjeta.bgcard.ts.h-100.p-4
                  img.img-t.mb-3(src='@/assets/curso/temas/20.svg' alt='')
                  h5.t1 Planificar
                  .text-white  
                    p.mb-0 Planificar la información que se desea incluir, y enfocarse en que se está ayudando al usuario de manera objetiva; también se deben tener en cuenta qué otros recursos se ponen a disposición del usuario y quiénes son los responsables de elaborar el documento y su aprobación.     
                .tarjeta.bgcard.ts.h-100.p-4
                  img.img-t.mb-3(src='@/assets/curso/temas/21.svg' alt='')
                  h5.t1 Seleccionar
                  .text-white   
                    p Seleccionar el formato para crear el manual, puede ser, .doc, .txt, .html, .pdf, .csv, .xls, etc.; por lo general, la mayoría de manuales se imprimen pero es recomendable tener una versión electrónica en el sitio web, si no lo tiene, debe pensar en dónde puede alojar esta información, porque en la actualidad, la gran mayoría de personas acceden a la información desde su dispositivo móvil. 

                    p.mb-0 Tener en cuenta a los lectores, el tipo de población a la cual está dirigida la solución informática.  
                .tarjeta.bgcard.ts.h-100.p-4
                  img.img-t.mb-3(src='@/assets/curso/temas/22.svg' alt='')
                  h5.t1 Crear
                  .text-white   
                    p.mb-0 Crear el manual de usuario. Se deben escribir las instrucciones de forma clara y sencilla, evitando palabras muy técnicas, mostrando todo lo que el usuario necesita saber. El diseño debe ser amigable y tener ayudas visuales.  
                .tarjeta.bgcard.ts.h-100.p-4
                  img.img-t.mb-3(src='@/assets/curso/temas/23.svg' alt='')
                  h5.t1 Probar
                  .text-white   
                    p.mb-0 Probar el manual con personas que no conozcan el producto, con estas pruebas se puede enriquecer el manual; entrevistar a todos los desarrolladores, ellos conocen el producto mejor que nadie y pueden señalar las cosas que se pueden haber pasado por alto.  
                .tarjeta.bgcard.ts.h-100.p-4
                  img.img-t.mb-3(src='@/assets/curso/temas/24.svg' alt='')
                  h5.t1 Mantener
                  .text-white   
                    p.mb-0 Mantener la documentación actualizada; cuando se hagan modificaciones en el producto, es necesario tener todo actualizado. La documentación electrónica tiene una gran ventaja sobre la impresa, incluso los documentos de impresión pueden actualizarse para descargarlos del sitio web de la empresa.     

            p(data-aos="fade-down") Recuerde, su contenido solo es excelente si es preciso, asegúrese que lo que ofrece a sus clientes realmente les ayude a utilizar su producto.

            .row.mb-5
              .col-auto.bg3.px-2.m-1.p-1(data-aos="flip-down")
                h5.text-center.mb-0 Por lo general debe tener la siguiente estructura: 

            .row.justify-content-center.mb-5
              .col-lg-8  
                .bg9.px-4.brad   
                  .row.justify-content-center
                    .col-lg-7.my-3  
                      ul.lista-ul--color.fa-ul.mb-0
                        li 
                          i.fas.fa-code.color1
                          | Tabla de contenido. 
                        li 
                          i.fas.fa-code.color1
                          | Introducción. 
                        li 
                          i.fas.fa-code.color1
                          | Cuerpo “el manual en sí”. 
                        li 
                          i.fas.fa-code.color1
                          | Flujograma. 
                        li 
                          i.fas.fa-code.color1
                          | Glosario de terminología. 
                        li 
                          i.fas.fa-code.color1
                          | Conclusiones. 
                        li 
                          i.fas.fa-code.color1
                          | Recomendaciones. 
                        li 
                          i.fas.fa-code.color1
                          | Contactos de los desarrolladores.                  
                    .col-lg-5.my-3
                      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/25.png', alt='') 


            Separador 
            #t_1_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
              h2 1.3  Manuales de instalación             
            .row.justify-content-center.mb-4    
              .col-lg-9.my-3(data-aos="fade-left")
                p(data-aos="fade-down") #[b Según UGUR (2009),] estos manuales sirven para describir la instalación de un sistema mecánico, electrónico o un producto de #[i software], su fin principal es instruir sobre las tareas de configuración e instalación. 

                h5(data-aos="fade-down") A continuación, se explican los componentes principales de una guía de instalación de #[i software]. 
              .col-lg-3.my-3(data-aos="fade-down")
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/26.png', alt='') 

            .row.justify-content-start.mb-4
              .col-auto(data-aos="flip-down")
                .list
                  .list__item
                    .list__item__icon
                      img(src='@/assets/curso/temas/icon.svg', alt='')
                  .list__txt.bgicon.p-0.px-4.text-white
                    h3.mb-0 Requisitos del sistema    

            p(data-aos="fade-down") Aquí se debe detallar qué tipo de #[i hardware] o #[i firmware] se necesita para instalar este #[i software], se debe especificar si funciona en un sistema operativo Mac OSX o Windows 10. #[b Según Microsoft (2021), los requisitos mínimos para instalar el sistema operativo Windows 11, son los siguientes:]                  
                    
            .row.justify-content-center.mb-4    
              .col-lg-6.my-3(data-aos="fade-left")
                .bg10.p-4.brad.h-100
                  .row.justify-content-center(data-aos="flip-down")           
                    .col-lg-auto.my-3
                      img.img-a.img-t(src='@/assets/curso/temas/27.png', alt='')       
                    .col.my-3  
                      h5(data-aos="fade-down") Procesador 
                      p(data-aos="fade-down").mb-0 1 giga Hertz (GHz) o más rápido con 2 o más núcleos en un procesador de 64 bits compatible o sistema en un chip (SoC).                         
              .col-lg-6.my-3(data-aos="fade-right") 
                .bg10.p-4.brad.h-100
                  .row.justify-content-center(data-aos="flip-down")           
                    .col-lg-auto.my-3
                      img.img-a.img-t(src='@/assets/curso/temas/28.png', alt='')       
                    .col.my-3  
                      h5(data-aos="fade-down") RAM 
                      p(data-aos="fade-down").mb-0 4 Gigabytes (GB).               

              .col-lg-6.my-3(data-aos="fade-left")
                .bg10.p-4.brad.h-100
                  .row.justify-content-center(data-aos="flip-down")           
                    .col-lg-auto.my-3
                      img.img-a.img-t(src='@/assets/curso/temas/29.png', alt='')       
                    .col.my-3  
                      h5(data-aos="fade-down") Almacenamiento 
                      p(data-aos="fade-down").mb-0 Dispositivo de almacenamiento de 64 GB o más.                        
              .col-lg-6.my-3(data-aos="fade-right") 
                .bg10.p-4.brad.h-100
                  .row.justify-content-center(data-aos="flip-down")           
                    .col-lg-auto.my-3
                      img.img-a.img-t(src='@/assets/curso/temas/30.png', alt='')       
                    .col.my-3  
                      h5(data-aos="fade-down") #[i firmware] del sistema 
                      p(data-aos="fade-down").mb-0 UEFI, compatible con arranque seguro.   

              .col-lg-6.my-3(data-aos="fade-left")
                .bg10.p-4.brad.h-100
                  .row.justify-content-center(data-aos="flip-down")           
                    .col-lg-auto.my-3
                      img.img-a.img-t(src='@/assets/curso/temas/31.png', alt='')       
                    .col.my-3  
                      h5(data-aos="fade-down") Tarjeta gráfica 
                      p(data-aos="fade-down").mb-0 Compatible con DirectX 12 o posterior, con controlador WDDM 2.0.                        
              .col-lg-6.my-3(data-aos="fade-right") 
                .bg10.p-4.brad.h-100
                  .row.justify-content-center(data-aos="flip-down")           
                    .col-lg-auto.my-3
                      img.img-a.img-t(src='@/assets/curso/temas/32.png', alt='')       
                    .col.my-3  
                      h5(data-aos="fade-down") Pantalla 
                      p(data-aos="fade-down").mb-0 Pantalla de alta definición (720p) de más de 9” en diagonal, con canal de 8 bits por color.   

              .col-lg-6.my-3(data-aos="fade-left")
                .bg10.p-4.brad.h-100
                  .row.justify-content-center(data-aos="flip-down")           
                    .col-lg-auto.my-3
                      img.img-a.img-t(src='@/assets/curso/temas/33.png', alt='')       
                    .col.my-3  
                      h5(data-aos="fade-down") Conexión a Internet y cuenta de Microsoft 
                      p(data-aos="fade-down").mb-0 Windows 11 Home requiere conexión a Internet y una cuenta de Microsoft. El cambio fuera de Windows 11 en modo S también requiere conexión a Internet. Para todas las ediciones de Windows 11, se requiere acceso a Internet para poder realizar actualizaciones, así como para descargar y aprovechar algunas de las características. Para algunas características se requiere una cuenta de Microsoft.                         
              .col-lg-6.my-3(data-aos="fade-right") 
                .bg10.p-4.brad.h-100
                  .row.justify-content-center(data-aos="flip-down")           
                    .col-lg-auto.my-3
                      img.img-a.img-t(src='@/assets/curso/temas/34.png', alt='')       
                    .col.my-3  
                      h5(data-aos="fade-down") TPM 
                      p(data-aos="fade-down").mb-0 Módulo de plataforma segura (TPM) versión 2.0. Windows 11 Home requiere conexión a Internet y una cuenta de Microsoft. Para todas las ediciones de Windows 11, se requiere acceso a Internet para poder realizar actualizaciones, así como para descargar y aprovechar algunas de las características. Para algunas características se requiere una cuenta de Microsoft.  

            .row.mb-5
              .col-auto.bg3.px-2.m-1.p-1(data-aos="flip-down")
                h5.text-center.mb-0 Igualmente, es importante tener en cuenta:     

            .row.justify-content-center.mb-4  
              .col-lg-10
                .row.justify-content-center
                  .col-lg-4.p-0.my-3(data-aos="fade-left")
                    .bg11.p-4.h-100
                      h5.mb-3(data-aos="fade-down") Descripción general de las características del sistema o del producto  
                      img.img-t(src='@/assets/curso/temas/35.svg', alt='')       

                  .col-lg-8.p-0.my-3(data-aos="fade-right") 
                    .bgw.p-4.h-100
                      p(data-aos="fade-down") Aquí se describen cuáles son las características básicas del #[i software] o producto en cuestión, por lo general se usa una lista o en una tabla. Ejemplo, en un #[i software] de telefonía IP (comunicación), se debe indicar cuántas líneas admite el #[i software], cuántos usuarios y contraseñas admite, el tipo de base de datos que necesita, cuántas zonas o particiones soporta, etc. 

                      p(data-aos="fade-down") De acuerdo con UGUR (2009), siempre son importantes los datos de contacto del desarrollador o de la empresa que creó la solución informática, o con el departamento de atención al cliente, dado el caso de que se presente alguna duda relacionada con el producto, garantía, registro, etc. 

                      p(data-aos="fade-down") También en este apartado se incluye cualquier exención de responsabilidad legal y divulgaciones.       

                .row.justify-content-center
                  .col-lg-4.p-0.my-3(data-aos="fade-left")
                    .bg11.p-4.h-100
                      h5.mb-3(data-aos="fade-down") Configuraciones de instalación  
                      img.img-t(src='@/assets/curso/temas/36.svg', alt='')       

                  .col-lg-8.p-0.my-3(data-aos="fade-right") 
                    .bgw.p-4.h-100
                      p(data-aos="fade-down") Es común que un #[i software] de aplicación tenga una instalación “típica” y una “excepcional” o “diseñada por el cliente”. En ocasiones, esta instalación también se denominará “implementación” en la documentación del producto.   

                .row.justify-content-center
                  .col-lg-4.p-0.my-3(data-aos="fade-left")
                    .bg11.p-4.h-100
                      h5.mb-3(data-aos="fade-down") Configuración mínima de inicio rápido  
                      img.img-t(src='@/assets/curso/temas/37.svg', alt='')       

                  .col-lg-8.p-0.my-3(data-aos="fade-right") 
                    .bgw.p-4.h-100
                      p(data-aos="fade-down") En algunos #[i software] se publica una guía de “Inicio rápido” independiente, además se explica cómo identificar e interpretar cualquier sistema o códigos de #[i hardware] y números de serie que vienen con el producto. 

                      p(data-aos="fade-down") Se deben incluir gráficos del paso a paso sobre cómo instalar el #[i software], también se muestran las conexiones de cableado correctas, si se trata de alguna instalación física. 

                .bg13.brad.px-4.mt-4(data-aos="fade-down")
                  .row.justify-content-center.align-items-center(data-aos="flip-down")           
                    .col-lg-auto.my-3
                      img.img-a.img-t.shake(src='@/assets/curso/temas/38.svg', alt='')       
                    .col.my-3  
                      p(data-aos="fade-down").mb-0 Si se realizan todas las sugerencias en este manual, se fomentará la lealtad del cliente, generarán altos niveles de satisfacción y minimizarán las llamadas al departamento de atención al cliente.                        
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
