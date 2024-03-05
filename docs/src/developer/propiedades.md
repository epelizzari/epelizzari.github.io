# Propiedades API

## Introducción

Bienvenidos a la documentación de la API de Propiedades, una interfaz diseñada para facilitar la gestión integral de propiedades inmobiliarias. Esta API proporciona capacidades extensas para crear, listar, actualizar, marcar como destacadas, reservar, publicar, y buscar propiedades, permitiendo a los usuarios gestionar eficazmente su catálogo de inmuebles.

A través de esta API, los usuarios pueden realizar operaciones detalladas sobre propiedades, incluyendo la gestión de imágenes, categorías, estados de publicación, y mucho más.

Algunos de los metodos de la API no requieren autenticación ya que son invocados desde el sitio web de la inmobiliar mientras que otros metodos si la requerien ya que forman parte del portal de administración de la plataforma.

### Características Principales

- **Gestión de Propiedades**: Crea y actualiza detalles de propiedades, incluyendo información de precios, ubicación, y características.
- **Publicación y Reserva**: Controla la visibilidad de tus propiedades marcándolas como publicadas o reservadas.
- **Búsqueda Avanzada**: Encuentra propiedades mediante criterios específicos o a través de coincidencias en el título y la descripción.
- **Destacados y Categorización**: Marca propiedades como destacadas y organízalas en categorías para una navegación más fácil.

### Empezando

Para comenzar a utilizar la API de Propiedades, necesitarás obtener un token de usuario valido a través de nuestro proceso de login [Autenticacion](/developer/autenticacion.html#introduccion). Una vez autenticado, podrás acceder a los diferentes endpoints proporcionados, utilizando métodos HTTP como GET, POST, PATCH, y DELETE para interactuar con los recursos de la API.

Cada solicitud y respuesta está estructurada en un formato JSON claro y comprensible, asegurando una integración sencilla. Para más detalles sobre los endpoints específicos y cómo utilizarlos, continúa explorando esta documentación.

## Propiedades

Aquí puedes profundizar en los detalles específicos relacionados con la gestión de propiedades, incluyendo ejemplos de solicitudes y respuestas para cada operación disponible.

<script setup>
import Swagger from '/components/Swagger.vue'
</script>

<Swagger id="dialersSwagger" yaml="/specs/propiedades/propiedades.yaml"/>
