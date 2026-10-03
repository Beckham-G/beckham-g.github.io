# Prompt de diseño y animación del portafolio de Beckham

## Objetivo

Mejora el portafolio existente de Beckham Luis Gonzales Morales para sus postulaciones a prácticas y oportunidades profesionales. Conserva su identidad visual negra y verde lima, y dale una presentación más clara, personal y dinámica. Trabaja sobre el sitio estático actual y sus recursos locales, con cambios que se puedan revisar y revertir.

## Respaldo previo

La versión anterior está identificada por:

- Rama: `codex/backup-before-animation-refresh`.
- Commit: `e64fe2bd7322b73be01bffbf499f1eaa3839845d`.
- Copia ZIP local: `C:\Users\Luiz\Desktop\Portafolio-Versiones\Portafolio-antes-de-mejoras-2026-10-02.zip`.

Conserva estos respaldos para recuperar el diseño anterior si el nuevo no es del gusto de Beckham. No sobrescribas el ZIP durante el rediseño.

## Prompt reutilizable

Actúa como diseñador de interfaces y desarrollador de animación web. Refina el portafolio existente con una dirección visual editorial: fondo oscuro profundo, acentos verde lima, tipografía Manrope y detalles en DM Mono. Usa jerarquía, espacios equilibrados y movimientos suaves para facilitar que una persona de selección entienda el perfil, vea sus proyectos y encuentre el CV o un medio de contacto.

Mantén los hechos verificados del contenido actual: Beckham estudia Computación Científica en la UNMSM, cursa octavo ciclo, pertenece al quinto superior y es becario Pronabec. Conserva el voluntariado en Coded Perú, las cuatro experiencias o proyectos y los cuatro certificados con sus emisores y tipos correctos. Mejora la redacción cuando ayude a la claridad, sin inventar resultados, porcentajes de mejora, métricas de precisión, certificaciones oficiales ni niveles profesionales. Usa el CV público existente y los datos de contacto ya autorizados.

Haz que cada carga de la página comience en modo oscuro. Conserva el interruptor de sol y luna y la transición circular entre los dos temas; cambiar el tema debe conservar la posición de lectura. Diseña y revisa ambos temas.

Compacta la portada: reduce la altura y el espaciado excesivos, afina el tamaño del titular según la pantalla y muestra las acciones «Explorar proyectos» y «Descargar CV» desde la primera pantalla en tamaños habituales. Mantén el retrato de tamaño moderado, con una composición cuidada y profundidad ligera. El nombre, el perfil y las acciones principales deben tener prioridad visual sobre adornos y etiquetas flotantes.

Da mayor protagonismo a Penales IA con una tarjeta destacada que combine una ilustración, una descripción breve y una acción visible «Ver proyecto». Mantén una retícula equilibrada para la maqueta del Puente de los Suspiros, el comparador de Excel y Coded Perú. Las imágenes conceptuales deben indicar «Esquema ilustrativo» de forma legible; no las presentes como capturas reales. Los detalles deben explicar el problema, el trabajo realizado y lo aprendido, con lectura cómoda.

Mejora las animaciones con una intención concreta: entrada en cascada de grupos de tarjetas al aparecer, movimiento sutil de profundidad en el retrato y respuesta breve en botones. En dispositivos con ratón, incorpora una inclinación pequeña y un brillo tenue que acompañen el cursor en las tarjetas; restaura la posición al salir. La lectura y los controles deben permanecer estables. Evita movimientos continuos grandes, efectos que bloqueen la interacción y animaciones al desplazar que obliguen a esperar.

Anima los filtros de herramientas con una transición de posiciones de tipo FLIP y aparición suave de los elementos nuevos. Una pulsación rápida en distintos filtros debe terminar siempre en el conjunto correcto de herramientas. Conserva los iconos locales y las etiquetas de conocimiento del contenido existente.

Añade una vista ampliada de cada certificado dentro de un diálogo, con el título, el emisor, la fecha, el tipo y acceso visible al PDF. Usa las miniaturas procedentes de los documentos reales. El diálogo debe cerrarse con su botón, con Escape y al pulsar fuera; debe devolver el foco al control que lo abrió.

Conserva el contacto por Gmail, LinkedIn y WhatsApp y presenta el cierre con una invitación profesional breve. Mantén una navegación clara con estados activos, enlaces identificables y un botón de menú cómodo en móvil.

Usa HTML, CSS, JavaScript y los archivos locales de GSAP y ScrollTrigger ya presentes. No añadas bibliotecas para efectos que puedan hacerse con estas herramientas o las APIs del navegador. Coordina las animaciones para que una transición de entrada, un efecto al pasar el cursor y un filtro no compitan por la transformación del mismo elemento. Anima principalmente transformaciones y opacidad, y actualiza los cálculos del desplazamiento cuando cambie el tamaño de las secciones.

Adapta la composición desde móvil hasta escritorio, sin desplazamiento horizontal ni botones fuera de alcance. La experiencia debe funcionar con teclado y pantallas táctiles. Respeta `prefers-reduced-motion` y el botón «Pausar animaciones»: el contenido y todas las acciones seguirán disponibles con efectos desactivados. No dependas de animaciones para revelar información esencial. Conserva textos alternativos, títulos, foco visible y nombres accesibles.

## Criterios de aceptación

- La página abre y recarga en modo oscuro; el cambio manual a claro funciona y conserva la posición de lectura.
- A 1366 × 768 y 390 × 844, el nombre, la propuesta profesional y las dos acciones principales de la portada son legibles y visibles al entrar, sin desbordes horizontales.
- Penales IA se distingue como proyecto destacado; los cuatro proyectos son accesibles y todas sus ilustraciones mantienen su identificación honesta.
- Las entradas en cascada y las respuestas del cursor son suaves; al salir de una tarjeta, pausar los efectos o activar movimiento reducido, el contenido queda estable y visible.
- Los filtros muestran 12 herramientas en «Todas», 5 en «Datos», 6 en «Desarrollo» y 1 en «Flujo de trabajo», incluso con cambios rápidos.
- Los cuatro certificados abren su vista ampliada y el PDF correcto; Escape, cierre exterior y retorno de foco funcionan.
- El menú, los filtros, los detalles de proyectos, los certificados y el cambio de tema funcionan con teclado y en móvil.
- No se añaden métricas, logros, datos personales ni atribuciones profesionales no verificados.
- No se agregan dependencias de animación nuevas; las imágenes y documentos cargan y la consola no presenta errores de la página.
- El respaldo previo sigue disponible y se documenta qué cambió para que Beckham pueda elegir entre ambas versiones.
