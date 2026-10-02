/* Contenido público del portafolio. Edita este archivo para añadir proyectos y certificados. */
window.portfolioContent = {
  projects: [
    { id:'penales', title:'Un arquero que aprende.', label:'Penales IA · Juego adaptativo', category:'Inteligencia artificial', art:'penales', tags:['Python','Pygame','scikit-learn'], description:'Un juego de penales que combina el historial de tiros y un árbol de decisión para adaptar al arquero.', challenge:'¿Cómo puede un arquero virtual anticipar los tiros de una persona a partir de sus decisiones anteriores?', approach:'Desarrollé una experiencia con cuatro zonas de disparo. El programa registra los tiros y combina un árbol de decisión con frecuencias recientes, transiciones y patrones para elegir la respuesta del arquero.', learning:['Registro y preparación de datos de interacción.','Entrenamiento de un modelo de árbol de decisión.','Integración de predicciones en una interfaz de juego con Pygame.'], note:'Proyecto personal que conecta aprendizaje automático e interacción en tiempo real.' },
    { id:'puente', title:'Un rincón de Lima, en 3D.', label:'Puente de los Suspiros · Maqueta', category:'Computación gráfica', art:'bridge', tags:['Python','Ursina','Pillow'], description:'Una maqueta interactiva con texturas procedurales, iluminación y exploración en primera persona.', challenge:'Convertir un espacio arquitectónico en una escena tridimensional que se pueda recorrer.', approach:'Construí una recreación del Puente de los Suspiros mediante geometría, texturas procedurales, vegetación e iluminación. La escena incluye una cámara libre y una vista en primera persona para explorar el entorno.', learning:['Construcción y organización de una escena 3D con Ursina.','Generación de texturas mediante Pillow.','Controles de cámara y navegación interactiva.'], note:'Proyecto académico de computación gráfica. La imagen de esta tarjeta es un esquema visual del proyecto, no una captura de la aplicación.' },
    { id:'excel', title:'Menos revisión manual.', label:'Comparador de archivos Excel', category:'Automatización de datos', art:'excel', tags:['Python','pandas','openpyxl'], description:'Una herramienta para detectar coincidencias y faltantes entre archivos y exportar un reporte organizado.', challenge:'Comparar registros de dos archivos de Excel sin revisar las filas una por una.', approach:'Implementé una comparación de los valores de la columna C. El programa identifica coincidencias y faltantes, localiza las filas relacionadas y genera un reporte de Excel con varias hojas para revisar los resultados.', learning:['Lectura y comparación de datos tabulares con pandas.','Identificación de diferencias y ubicación de registros.','Exportación de resultados mediante openpyxl.'], note:'Herramienta personal para tareas repetitivas de comparación de registros.' },
    { id:'coded', title:'Tecnología que se comparte.', label:'Coded Perú · Voluntariado', category:'Desarrollo colaborativo', art:'code', tags:['React','PHP','Python','Git'], description:'Colaboración en aplicaciones y páginas web para iniciativas de programación y educación tecnológica.', challenge:'Apoyar iniciativas educativas con herramientas y experiencias web mantenibles.', approach:'Como voluntario en Tecnología e Innovación Digital, participo en el desarrollo y actualización de aplicaciones y páginas web, pruebas locales y revisión de código. Coordino cambios con Git dentro de un equipo multidisciplinario.', learning:['Colaboración en desarrollo web con React, PHP, Python y HTML.','Pruebas locales con XAMPP y revisión de cambios.','Trabajo en equipo y control de versiones con Git.'], note:'Experiencia colaborativa desde abril de 2026 en iniciativas de educación tecnológica.' }
  ],
  tools:[
    {name:'Python',icon:'python',group:'data',label:'Análisis y automatización'},
    {name:'Power BI',icon:'powerbi',group:'data',label:'Visualización · intermedio'},
    {name:'Excel',icon:'excel',group:'data',label:'Análisis · avanzado'},
    {name:'PostgreSQL',icon:'postgresql',group:'data',label:'Bases de datos'},
    {name:'MySQL',icon:'mysql',group:'data',label:'Bases de datos'},
    {name:'React',icon:'react',group:'web',label:'Interfaces web'},
    {name:'JavaScript',icon:'javascript',group:'web',label:'Interactividad'},
    {name:'HTML5',icon:'html5',group:'web',label:'Estructura web'},
    {name:'CSS3',icon:'css3',group:'web',label:'Diseño responsive'},
    {name:'PHP',icon:'php',group:'web',label:'Desarrollo web'},
    {name:'C++',icon:'cplusplus',group:'web',label:'Programación'},
    {name:'Git',icon:'git',group:'workflow',label:'Control de versiones'}
  ],
  certificates:[
    {title:'Excel avanzado 2019',issuer:'SISTEMAS UNI',date:'Septiembre 2025',hours:'24 horas',type:'Curso aprobado',file:'excel-avanzado'},
    {title:'PostgreSQL',issuer:'LIMA EDUCA · PERÚ DIGITAL',date:'Octubre 2025',hours:'12 horas',type:'Constancia de participación',file:'postgresql'},
    {title:'MySQL',issuer:'LIMA EDUCA · PERÚ DIGITAL',date:'Octubre 2025',hours:'12 horas',type:'Constancia de participación',file:'mysql'},
    {title:'SQL Server',issuer:'LIMA EDUCA · PERÚ DIGITAL',date:'Octubre 2025',hours:'12 horas',type:'Constancia de participación',file:'sql-server'}
  ]
};
