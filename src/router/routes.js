const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "HomePage",
        name: "Home",
        component: () => import("pages/HomePage.vue"),
      },
      {
        path: "NuevoPage",
        name: "Nuevo",
        component: () => import("pages/NuevoPage.vue"),
      },
      {
        path: "ActualizarPage",
        name: "Actualizar",
        component: () => import("pages/ActualizarPage.vue"),
      },
      {
        path: "ActualizardosPage",
        name: "Actualizardos",
        component: () => import("pages/ActualizardosPage.vue"),
      },
      {
        path: "EditarPage",
        name: "Editar",
        component: () => import("pages/EditarPage.vue"),
      },
      {
        path: "GaleriaPage",
        name: "Galeria",
        component: () => import("pages/GaleriaPage.vue"),
      },
      {
        path: "GaleriadosPage",
        name: "Galeriados",
        component: () => import("pages/GaleriadosPage.vue"),
      },
      {
        path: "FormsLogin",
        name: "Login",
        component: () => import("pages/FormLogin.vue"),
      },
      {
        path: "PruebaPage",
        name: "Prueba",
        component: () => import("pages/PruebaPage.vue"),
      },
      {
        path: "AltoquePage",
        name: "Altoque",
        component: () => import("pages/AltoquePage.vue"),
      },
      {
        path: "FormularioPage",
        name: "Formularios",
        component: () => import("pages/FormularioPage.vue"),
      },

    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
