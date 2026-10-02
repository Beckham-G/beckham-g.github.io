# Beckham Gonzales — Portafolio profesional

Portafolio de Computación Científica, análisis de datos y desarrollo web.

## Contenido

- Perfil: estudiante de octavo ciclo de Computación Científica en la UNMSM, quinto superior y becario Pronabec.
- Cuatro proyectos y experiencias: Penales IA, maqueta 3D del Puente de los Suspiros, comparador de Excel y voluntariado Coded Perú.
- Herramientas con iconos y filtros por área.
- Cuatro certificados en PDF y CV público descargable.
- Modos claro y oscuro con transición circular y preferencia guardada.
- Navegación adaptable, contacto por correo, LinkedIn y WhatsApp.
- Animaciones con opción de pausa y compatibilidad con movimiento reducido.

## Desarrollo local

Sitio estático, sin instalación ni compilación:

```sh
python -m http.server 8766 --bind 127.0.0.1
```

Abrir http://127.0.0.1:8766/ en el navegador.

## Edición

- `index.html`: perfil, navegación y contacto.
- `content.js`: proyectos, herramientas y certificados.
- `styles.css`: diseño y adaptación a pantallas.
- `theme.css`: temas, navegación y sección de contacto.
- `script.js`: interacción, filtros y animaciones.
- `assets/`: retrato, documentos, iconos y bibliotecas locales.

El CV público no incluye DNI ni dirección. El número de contacto se usa en los enlaces de WhatsApp. Los documentos académicos internos no forman parte del repositorio. Las imágenes de proyectos son esquemas ilustrativos; las miniaturas de certificados proceden de sus documentos reales.

## Publicación

Preparado para GitHub Pages desde la rama `main`, carpeta raíz. `.nojekyll` permite servir los archivos estáticos directamente.

## Recursos

- [GSAP 3.13 y ScrollTrigger](https://gsap.com/): animaciones; archivos originales y licencia de sus autores.
- [View Transition API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API/Using): transición del tema con alternativa para navegadores sin soporte.
- [Devicon](https://github.com/devicons/devicon) y [Simple Icons](https://github.com/simple-icons/simple-icons): iconos. Licencias y condiciones en `assets/icons/` y `assets/SOCIAL-ICONS-LICENSE.md`.
- Manrope y DM Mono de Google Fonts.

Los nombres y logotipos pertenecen a sus respectivos titulares. El retrato, CV y certificados identifican al titular de este portafolio.
