# PruebaSkandia

Este proyecto es una aplicación web desarrollada en **Angular Standalone**. La arquitectura está basada en componentes reutilizables y el diseño sigue las mejores prácticas de Angular para aplicaciones modernas y escalables.

## Características principales

- **Angular Standalone**: Uso de componentes standalone para una estructura más limpia y modular.
- **Desarrollo por componentes**: Cada sección de la interfaz (header, sidebar, footer, cards, etc.) está implementada como un componente independiente.
- **Consumo de API**: Se integra una API para obtener datos dinámicos, los cuales se muestran en tarjetas (cards) dentro de la aplicación.
- **Estilos personalizados**: Uso de CSS y SCSS para personalización visual, además de Bootstrap y Material Icons.
- **Responsive**: El diseño es adaptable a diferentes dispositivos y tamaños de pantalla.
- **Organización clara**: Separación de assets, servicios, modelos y páginas.

## Estructura de carpetas

- [`src/app/component`](src/app/component): Componentes reutilizables como header, footer, sidebar y cards.
- [`src/app/pages`](src/app/pages): Páginas principales de la aplicación (por ejemplo, Skandia).
- [`src/app/services`](src/app/services): Servicios para la lógica de negocio y consumo de APIs (por ejemplo, `cards.service.ts` y `slidebar.service.ts`).
- [`src/app/models`](src/app/models): Modelos TypeScript para tipado de datos (por ejemplo, `card.model.ts`).
- [`src/assets`](src/assets): Imágenes y recursos estáticos.
- [`src/styles.css`](src/styles.css) y [`src/custom-theme.scss`](src/custom-theme.scss): Estilos globales y temas personalizados.

## Instalación

1. Clona el repositorio y entra a la carpeta del proyecto.
2. Instala las dependencias:

   ```sh
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```sh
   ng serve o npm start
   ```

4. Abre [http://localhost:4200](http://localhost:4200) en tu navegador.


## Componentes principales

- [`HeaderComponent`](src/app/component/header/header.component.ts): Barra superior de navegación.
- [`SlidebarComponent`](src/app/component/slidebar/slidebar.component.ts): Menú lateral colapsable.
- [`FooterComponent`](src/app/component/footer/footer.component.ts): Pie de página con enlaces y redes sociales.
- [`CardsComponent`](src/app/component/cards/cards.component.ts): Renderiza las tarjetas con datos obtenidos desde la API.
- [`SkandiaComponent`](src/app/pages/skandia/skandia.component.ts): Página principal de ejemplo.

## Servicios

- [`CardsService`](src/app/services/cards.service.ts): Encargado de consumir la API y mapear los datos a los modelos de tarjetas.
- [`SlidebarService`](src/app/services/slidebar.service.ts): Controla el estado del sidebar (abierto/cerrado).

## Modelos

- [`Card`](src/app/models/card.model.ts): Define la estructura de los datos de cada tarjeta.

## Personalización de estilos

- [`custom-theme.scss`](src/custom-theme.scss): Temas personalizados para Angular Material.
- [`styles.css`](src/styles.css): Variables y estilos globales.

## Recursos adicionales

- [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli)
