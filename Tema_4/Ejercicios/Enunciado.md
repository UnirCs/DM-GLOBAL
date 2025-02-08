# Ejercicio: Construir un Sitio Web de una Cafetería en React

## Objetivo

El objetivo de este ejercicio es que aprendas a descomponer una interfaz de usuario real en múltiples componentes funcionales en React. Deberás crear un proyecto React que consista en una única vista (sin navegación ni hooks) y estructurar la interfaz en, al menos, 7 componentes funcionales. Además, deberás aplicar estilos CSS para embellecer la página.

Tomaremos como ejemplo la vista principal de una aplicacion web de una cafetería. Se mostrará un header con una lista de navegacion, un footer, un menu con una lista de productos, una sección de especialidades, testimonios de clientes e informacion sobre la tienda.

## Requisitos

- **Proyecto React:** Utiliza [Create React App](https://create-react-app.dev/) o Vite para inicializar tu proyecto.
- **Componentes Funcionales:** Toda la aplicación debe construirse usando componentes funcionales. **No** se deben utilizar hooks ni navegación.
- **Descomposición de la Vista:** La vista principal debe estar descompuesta en, al menos, 7 componentes. Se sugiere la siguiente estructura (pero puedes modificarla o agregar componentes según lo desees):
    - **Header:** Contendrá el logo y un menú de navegación (visual, sin funcionalidad real).
    - **Hero:** Sección principal con una imagen/banner y mensaje de bienvenida.
    - **Menu:** Lista de productos o bebidas ofrecidas.
    - **Specials:** Sección que muestra alguna oferta o especialidad del día.
    - **About:** Información sobre la cafetería.
    - **Testimonials:** Testimonios o comentarios de clientes.
    - **Footer:** Información de contacto y enlaces a redes sociales.
- **Estilos CSS:** Aplica estilos CSS para darle un aspecto atractivo y organizado a la interfaz.
- **Una Única Vista:** Toda la aplicación se mostrará en una sola página.

## Instrucciones

1. **Crear el Proyecto:** Inicia un nuevo proyecto React con Create React App o con Vite.
   ```bash
   npx create-react-app my-coffee-shop
   cd my-coffee-shop
    ```
   
2. Estructurar el Proyecto: Organiza tu código creando una carpeta components dentro de src y coloca cada componente en un archivo separado.
3. Implementar la Vista: Desarrolla la interfaz de la cafetería descomponiéndola en al menos 7 componentes funcionales. Cada componente debe representar una parte concreta de la página.
4. Aplicar CSS: Agrega estilos CSS para mejorar la presentación visual de la página. Puedes utilizar un archivo App.css o crear hojas de estilos para cada componente.
5. Verificar: Asegúrate de que la aplicación se renderice correctamente en el navegador y que la vista se vea organizada y estilizada.