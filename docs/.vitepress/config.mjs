import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Braida Documentation",
  description: "Braida Documentation site",
  srcDir: "./src",
  ignoreDeadLinks: true,
  head: [
    ["link", { rel: "icon", href: "/docs/imgs/logos/favicon.ico" }],
    [
      "link",
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap",
      },
    ],
    [
      "script",
      {
        src: "https://unpkg.com/swagger-ui-dist@5.9.0/swagger-ui-bundle.js",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://unpkg.com/swagger-ui-dist@5.9.0/swagger-ui.css",
      },
    ],
  ],
  themeConfig: {
    lang: "es-ES",
    displayAllHeaders: true,
    editLinks: false,
    locales: {
      "/es": {
        label: "Español",
        selectText: "Lenguages",
        nav: [
          { text: "guia", link: "/guia/" },
          {
            text: "API",
            link: "/api/",
          },
          {
            text: "Release note",
            link: "https://github.com/TomokiMiyauci/file-select-dialog/blob/main/CHANGELOG.md",
          },
        ],
      },
    },
    editLinkText: "",
    /*      aside: false, */
    logo: "/imgs/logos/logo.png",
    siteTitle: "Braida",
    footer: {
      message:
        "Braida Propiedades by 👨‍💻Deibis Martinez 219091, 👨‍💻Enzo Pelizzari 177816 - GRUPO PY30",
      copyright: "Copyright © 2024",
    },
    search: {
      provider: "local",
    },
    nav: [
      {
        text: "Manual de usuario",
        link: "/administrator/README.md",
      },

      {
        text: "Conceptos",
        link: "/concepts/README.md",
      },
      {
        text: "Acerca del sistema",
        link: "/about/README.md",
      },

      {
        text: "API",
        link: "/developer/README.md",
      },
    ],
    sidebar: {
      "/administrator": [
        {
          text: "Guia de usuario",
          collapsed: true,
          items: [
            {
              text: "Acceso al sistema",
              link: "/administrator/acceso-al-sistema.md",
              collapsed: true,
              items: [
                {
                  text: "Login",
                  link: "/administrator/acceso-al-sistema.md#login",
                },
                {
                  text: "Logout",
                  link: "/administrator/acceso-al-sistema.md#logout",
                },
              ],
            },
            {
              text: "Propiedades",
              link: "/administrator/modulo-de-propiedades.md",
              collapsed: true,
              items: [
                {
                  text: "Acceso al Módulo",
                  link: "/administrator/modulo-de-propiedades.md#acceso-al-modulo",
                },
                {
                  text: "Gestión de Propiedades",
                  link: "/administrator/modulo-de-propiedades.md#gestion-de-propiedades",
                  collapsed: true,
                  items: [
                    {
                      text: "Creación de Propiedad",
                      link: "/administrator/modulo-de-propiedades.md#creacion-de-propiedad",
                    },
                    {
                      text: "Listado de Propiedades",
                      link: "/administrator/modulo-de-propiedades.md#listado-de-propiedades",
                    },
                    {
                      text: "Filtros y Búsqueda",
                      link: "/administrator/modulo-de-propiedades.md#filtros-y-busqueda",
                    },
                    {
                      text: "Acciones sobre las Propiedades",
                      link: "/administrator/modulo-de-propiedades.md#acciones-sobre-las-propiedades",
                    },
                    {
                      text: "Vista Previa de Publicación",
                      link: "/administrator/modulo-de-propiedades.md#vista-previa-de-publicacion",
                    },
                    {
                      text: "Gestion de imagenes",
                      link: "/administrator/modulo-de-propiedades.md#gestion-de-imagenes",
                    },
                    {
                      text: "Caracteristicas adicionales",
                      link: "/administrator/modulo-de-propiedades.md#caracteristicas-adicionales",
                    },
                    {
                      text: "Mapa",
                      link: "/administrator/modulo-de-propiedades.md#mapa",
                    },
                  ],
                },
              ],
            },
            {
              text: "Arrendadores/Propietarios",
              collapsed: true,
              link: "/administrator/modulo-de-arrendadores.md",
              items: [
                {
                  text: "Acceso al Módulo",
                  link: "/administrator/modulo-de-arrendadores.md#acceso-al-modulo",
                },
                {
                  text: "Gestión de Arrendadores/Propietarios",
                  link: "/administrator/modulo-de-arrendadores.md#gestion-de-arrendadores-propietarios",
                  collapsed: true,
                  items: [
                    {
                      text: "Creación de Arrendador/Propietario",
                      link: "/administrator/modulo-de-arrendadores.md#creacion-de-arrendador-propietario",
                    },
                    {
                      text: "Listado de Arrendadores/Propietarios",
                      link: "/administrator/modulo-de-arrendadores.md#listado-de-arrendadores-propietarios",
                    },
                    {
                      text: "Busqueda",
                      link: "/administrator/modulo-de-arrendadores.md#busqueda",
                    },

                    {
                      text: "Acciones sobre los Arrendadores",
                      link: "/administrator/modulo-de-arrendadores.md#acciones-sobre-los-arrendadores",
                    },
                    {
                      text: "Propiedades Asociadas al Arrendador",
                      link: "/administrator/modulo-de-arrendadores.md#propiedades-asociadas-al-arrendador",
                    },
                    {
                      text: "Informacion Adicional",
                      link: "/administrator/modulo-de-arrendadores.md#informacion-adicional",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      "/about": [
        {
          text: "Acerca del sistema",
          collapsed: false,
          link: "/about/generales/generales.md",
          items: [
            {
              text: "Introducción al Producto",
              link: "/about/generales/generales.md#introduccion-al-producto",
            },
            {
              text: "Características del Sistema",
              link: "/about/generales/generales.md#caraacteristicas-del-sistema",
            },
            {
              text: "Beneficios Clave",
              link: "/about/generales/generales.md#beneficios-clave",
            },
            {
              text: "Tecnologías Utilizadas en el Sistema",
              link: "/about/generales/generales.md#tecnologias-utilizadas-en-el-sistema",
            },
          ],
        },
      ],

      "/concepts": [
        {
          text: "Conceptos",
          collapsed: false,
          link: "/concepts/generales/generales.md",
          items: [
            {
              text: "Definiciones Básicas",
              link: "/concepts/generales/generales.md#definiciones-basicas",
            },
            {
              text: "Usuarios y Roles",
              link: "/concepts/generales/generales.md#usuarios-y-roles",
            },
            {
              text: "Gestión de Propiedades",
              link: "/concepts/generales/generales.md#gestion-de-propiedades",
            },
            {
              text: "Gestión de Arrendadores",
              link: "/concepts/generales/generales.md#gestion-de-arrendadores",
            },
          ],
        },
      ],

      "/developer/": [
        {
          text: "Autenticación",
          collapsed: true,
          link: "/developer/autenticacion.md",
          items: [
            {
              text: "Introducción",
              link: "/developer/autenticacion.md#introduccion",
            },
            {
              text: "Autenticación",
              link: "/developer/autenticacion.md#autenticacion",
            },
          ],
        },
        {
          text: "Propiedades",
          collapsed: false,
          link: "/developer/propiedades.md",
          items: [
            {
              text: "Introduccion",
              link: "/developer/propiedades.md#introduccion",
            },
            {
              text: "Propiedades",
              link: "/developer/propiedades.md#propiedades",
            },
          ],
        },
        {
          text: "Arrendadores",
          collapsed: true,
          link: "/developer/arrendadores.md",
          items: [
            {
              text: "Introduccion",
              link: "/developer/arrendadores.md#introduccion",
            },
            {
              text: "Arrendadores",
              link: "/developer/arrendadores.md#arrendadores",
            },
          ],
        },
      ],
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/epelizzari/Inmobiliaria-Braida",
      },
    ],
    alias: {
      "/administrador": "/administrador/readme.md",
      "/contact": "/contact.html",
      "/guide": "/guide.html",
      "/configs": "/configs.html",
    },
  },
});
