# Módulo de Propiedades

El módulo de propiedades es donde puedes gestionar toda la información relacionada con las propiedades listadas en la plataforma. Desde aquí, puedes agregar nuevas propiedades, editar información existente, y controlar la visibilidad de las propiedades en el sitio web. -->

## Acceso al Módulo

Para acceder al módulo de propiedades:

1. Dirígete al menú lateral izquierdo de la pantalla.
2. Selecciona la opción "Propiedades" seguido de "Lista de propiedades".

![Imagen del acceso al módulo de propiedades](/assets/propiedades/listaPropiedades.png)

Encontrarás una interfaz que lista todas las propiedades actuales, junto con opciones para filtrar, buscar, y ordenar las propiedades según diversos criterios.

## Gestión de Propiedades

### Creación de Propiedad

Para agregar una nueva propiedad al sistema:

1. Haz clic en el botón "Agregar Propiedad" ubicado en la parte superior derecha de la vista del módulo de propiedades.
2. Serás llevado al formulario de creación de propiedad, donde deberás ingresar toda la información relevante.

![Imagen del botón agregar propiedad](/assets/propiedades/btnAgregarPropiedad.png)

### Información Requerida

- **Título:** Nombre descriptivo de la propiedad.
- **Tipo de Operación:** Venta, alquiler, etc.
- **Precio y Moneda:** Costo de la propiedad y tipo de moneda.
- **Cantidad de Baños, Cocheras, Habitaciones:** Detalles específicos de la propiedad.
- **Seccion de caracteristicas adicionales de la propiedad:** Permite agregar informacion especifica sobre la propiedad en particular que esta siendo cargada o modificada. Guia de gestion de caracteristicas adicionales [Adicionales](/administrator/modulo-de-propiedades.html#caracteristicas-adicionales).
- **Descripción:** Una descripción detallada de la propiedad.
- **Ubicación:** Dirección exacta de la propiedad.
- **Departamento:** Departamento de Uruguay al que pertenece la propiedad. (En caso de ser encontrado por el servicio de sugerencias de direcciones dento del mapa, este campo se completara automaticamente)
- **Mapa:** Permite marcar la direccion a buscar en el mapa. Guia de manejo del mapa [Mapa](/administrator/modulo-de-propiedades.html#mapa).
- **Imágenes:** Fotografías que representen la propiedad. Guia de gestion de imagenes [Imagenes](/administrator/modulo-de-propiedades.html#gestion-de-imagenes).

Una vez completado el formulario, haz clic en "Guardar" para añadir la propiedad al sistema.
En caso contrario si se presiona el boton "Cancelar" la informacion ingresada hasta el momemento se pierde y seras re dirigido al listado inicial

**Nota: todos los campos sob obligatorios para la creacion de una propiedad excepto las caracateristicas variables y las imagenes**

![Imagen del formulario de propiedad](/assets/propiedades/FormCargarPropiedaCompleto.png)

### Listado de Propiedades

En el listado de propiedades, podrás ver todas las propiedades registradas en el sistema. Cada entrada en el listado ofrece una visión general de la propiedad, junto con opciones para editar, eliminar, o cambiar el estado de la publicación.

![Imagen del listado de propiedades](/assets/propiedades/soloListadoPropiedades.png)

### Filtros y Búsqueda

Utiliza los filtros disponibles para refinar el listado de propiedades mostradas. Puedes filtrar por tipo de operación, ubicación, rango de precios, y más.
![Imagen de los filtros de propiedad](/assets/propiedades/filtroPropiedades.png)

Los filtros activos se muestran en una sección ubicada encima de los campos de filtro. Para eliminar cualquier filtro aplicado, simplemente haz clic en el icono de cierre (x) situado junto a cada filtro en la parte superior. Esto permitirá refinar o eliminar los criterios de búsqueda seleccionados de manera rápida y eficiente.

![Imagen de los filtros de propiedad aplicados](/assets/propiedades/filtrosPropiedadesAplicados.png)

### Acciones sobre las Propiedades

Para acceder a las acciones sobre la propiedad seleccionada, se debe desplegar el menu de 3 puntos verticales ubicados al final de cada fila de la lista de propiedades, donde se visualizan las siguientes opciones

- **Modificar/Actualizar:** Permite editar la información de una propiedad existente.

  Los pasos para actualizar la informacion de una propiedad son los siguientes:

  1. Haz clic en la opcion "Editar" del menu.
  2. Serás dirigido al formulario de modificacion de la propiedad, donde deberás modificar toda la información que desees.

     **Nota: el formulario de creacion y modificacion de propiedad son iguales.**

- **Cambios de Estado de la publicacion:** Controla si la propiedad está publicada o no en el sitio web. Si una propiedad se setea como "Publicada" automaticamente aparecera en el listado de propiedades de la web.
- **Cambios de Estado de reserva:** Controla si la propiedad está reservada o no en el sitio web. Si una propiedad se setea como "Reservada" automaticamente aparecera en el listado de propiedades de la web con un dato que especifica su estado como "reservada".
- **Cambios de Estado de Destacado:** Controla si la propiedad está destacada o no en el sitio web. las propiedades destacadas figuran la pagina principal del sitio web. Si una propiedad se setea como "Destacada" automaticamente aparecera en el listado de propiedades destacadas de la web.
- **Eliminar:** Remueve la propiedad del sistema.

Cada acción está diseñada para facilitar la gestión eficiente de las propiedades, asegurando que la información presentada a los usuarios finales sea precisa y actualizada.

### Vista Previa de la Publicación:

Muestra cómo se verá la propiedad en el sitio web.
Al hacer click sobre la fila deseada del listado de propiedades, es posible acceder a una vista previa de la publicacion, de esta manera, antes de publicar la propiedad en la web, es posible tener una visibilidad real del contenido.

![Imagen de la vista previa de la publicacion](/assets/propiedades/vistaPrevia.png)

### Gestión de Imágenes

Cuando se registra una nueva propiedad o se realiza una modificación en una existente, nuestro sistema facilita la carga de imágenes, ya sea de forma individual o múltiple. Estas imágenes se incorporan directamente en la sección "Imágenes" del formulario de Creación/Modificación de propiedad.

Ofrecemos la funcionalidad de arrastrar y soltar las imágenes dentro de un contenedor horizontal, permitiendo así a los usuarios establecer el orden deseado en que las imágenes aparecerán en el sitio web de la inmobiliaria. Además, es posible eliminar imágenes previamente cargadas o aquellas añadidas durante el proceso de creación de la propiedad, ofreciendo flexibilidad total en la gestión visual de las mismas.

![Imagen de gestion de imagenes](/assets/propiedades/gestionDeImagenes.png)

### Características Adicionales

El formulario para crear propiedades incorpora una funcionalidad esencial: la capacidad de añadir características específicas para cada propiedad en el sistema. Para incluir una nueva característica adicional, ve a la sección "Características Adicionales" y haz clic en el botón "Agregar". El sistema mostrará dos campos en paralelo: uno para el nombre de la característica y otro para su valor correspondiente. Si deseas añadir otra característica, simplemente presiona de nuevo el botón "Agregar" y sigue el procedimiento descrito. Al guardar la propiedad, estas características se almacenarán junto con el resto de la información y se mostrarán en el sitio web, dentro de los detalles específicos de la propiedad en cuestión.

**Nota: Es posible editar o eliminar estas características adicionales en cualquier momento.**

![Imagen de caracteristicas adicionales](/assets/propiedades/adicionales.png)

### Mapa

Para marcar la direccion en el mapa es posibile abrir el dialogo presionando el boton "Marcar en mapa", dentro de este dialogo es posible marcar en el mapa la direccion exacta donde esta ubicada la propiedad, en el lugar donde se haga click sobre el mapa aparecera un icono tipo pin que marcara la ubicacion, este puede ser movido y ajustado segun sea necesario.

Es posible utilizar el campo de busqueda ubicado en la parte superior del dialogo para buscar una direccion, se generaran sugerencias de posibles direcciones que coincidian con la busqueda y en caso de seleccionar algunas de las coincidencias la misma se marcara automaticamente en el mapa.

En caso de que el buscador de direcciones encuentre el departamento correspondiente a la direccion seleccionada, el campo departamento en el formulario de creacion de la propiedad quedara cargado con el departamento encontrado (si no es correcto, el dato puede ser modificado por el usuario)

![Imagen de Mapa](/assets/propiedades/Mapa.png)



## Videos de las funcionalidades

Por mas detalles de las funcionales descriptas en este modulo accede a las guias de video [Propiedaedes](/administrator/videos.md#propiedades)