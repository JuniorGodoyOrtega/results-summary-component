# Results Summary Component

Este proyecto es un componente de resumen de resultados, donde se visualiza una puntuación general y un desglose por categorías. El diseño se basa en un desafío de **Frontend Mentor** y fue desarrollado con HTML, CSS y JavaScript.

## Descripción
- Visualizar una tarjeta que muestra un resultado general, junto con un desglose por categorías: Reaction, Memory, Verbal y Visual.
- Los datos se cargan dinámicamente desde un archivo JSON y se asignan tanto al contenido como a los estilos.
- Se aplican estilos responsivos para mejorar la experiencia en dispositivos móviles y pantallas grandes.

## Tecnologías utilizadas
- **HTML5**: Estructura semántica de la página.
- **CSS3**: Estilización del diseño, incluyendo un sistema de colores basado en variables CSS.
- **JavaScript**: Lógica para cargar y renderizar dinámicamente los datos desde un archivo JSON.
- **Git y GitHub**: Control de versiones y despliegue del proyecto.

## Características principales
1. **Carga dinámica de datos desde JSON**:
   - El archivo `data.json` contiene los datos de las categorías y sus respectivos puntajes, que se cargan y asignan a la interfaz usando JavaScript.
   - Ejemplo del archivo JSON:
     ```json
     [
       {
         "category": "Reaction",
         "score": 80,
         "icon": "./img/icon-reaction.svg"
       },
       {
         "category": "Memory",
         "score": 92,
         "icon": "./img/icon-memory.svg"
       },
       {
         "category": "Verbal",
         "score": 61,
         "icon": "./img/icon-verbal.svg"
       },
       {
         "category": "Visual",
         "score": 72,
         "icon": "./img/icon-visual.svg"
       }
     ]
     ```

2. **Estilos únicos por categoría**:
   - Cada categoría tiene un color de fondo y texto específico asignado dinámicamente desde un objeto en JavaScript.
   - Ejemplo:
     ```javascript
     const colorsBackground = {
       Reaction: "hsla(0, 100%, 67%, 0.1)",
       Memory: "hsla(39, 100%, 56%, 0.1)",
       Verbal: "hsla(166, 100%, 37%, 0.1)",
       Visual: "hsla(234, 85%, 45%, 0.1)"
     };
     ```

3. **Diseño responsivo**:
   - Se ajusta el diseño para que el `card-header` ocupe todo el ancho en dispositivos móviles.
   - Uso de `@media` queries para ajustar el diseño en pantallas pequeñas.

## Lecciones aprendidas
- Implementación de lógica dinámica en JavaScript para manipular el DOM y renderizar contenido.
- Uso de datos externos (JSON) para generar contenido y estilos personalizados.
- Aplicación de diseños responsivos mediante CSS y `@media` queries.
- Personalización avanzada con variables CSS para colores y tipografía.

## Recursos adicionales
- [Frontend Mentor Challenge](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV)

## Cómo verlo
1. Puedes ver el sitio en vivo en: [Results Summary Component - Frontend Mentor Challenge](https://juniorgodoyortega.github.io/results-summary-component/)
2. O clonar este repositorio:
   ```bash
   git clone https://github.com/JuniorGodoyOrtega/results-summary-component.git
