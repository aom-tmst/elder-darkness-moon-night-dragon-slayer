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
      {
        path: "hospital-contact",
        component: () => import("pages/HospitalContact.vue"),
      },
      {
        path: "hospital-detail",
        component: () => import("pages/HospitalDetail.vue"),
      },
      {
        path: "station",
        component: () => import("pages/StationPage.vue"),
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
