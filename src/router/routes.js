const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "index-page", component: () => import("pages/IndexPage.vue") },
      { path: "new-page", component: () => import("pages/NewPage.vue") },
      { path: "check-page", component: () => import("pages/CheckPage.vue") },
      { path: "record-page", component: () => import("pages/RecordPage.vue") },
      {
        path: "add-timline-page",
        component: () => import("src/pages/AddTimeLinePage.vue"),
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
