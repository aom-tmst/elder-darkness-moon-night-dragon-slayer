<template>
  <q-layout view="lHh Lpr lFf">
    <q-header style="background-color: #04c5c9">
      <q-toolbar style="background-color: #04c5c9">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title class="row justify-center">{{
          title
        }}</q-toolbar-title>
        <q-icon name="notifications_none" size="25px" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header></q-item-label>
        <q-btn
          @click="toggleLeftDrawer"
          unelevated
          icon="chevron_left"
          style="
            color: white;
            font-weight: 700;
            width: 40px;
            height: 40px;
            margin-left: 18px;
            border-radius: 10px;
            background-color: #04c5c9;
          "
        >
        </q-btn>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
          @onChangeTitle="onChangeTitle"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view style="padding-top: 30px" />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "หน้าแรก",
    icon: "home",
    link: "index-page",
  },
  {
    title: "ฟีดข่าว",
    icon: "article",
    link: "new-page",
  },
  {
    title: "ตรวจสอบทาม์ไลน์",
    icon: "find_in_page",
    link: "check-page",
  },
  {
    title: "บันทึกไทม์ไลน์",
    icon: "edit_calendar",
    link: "record-page",
  },
  {
    title: "ข้อมูลติดต่อโรงพยาบาล",
    icon: "medication",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Station ใกล้คุณ",
    icon: "location_on",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "สถิติผู้ติดเชื้อ",
    icon: "query_stats",
    link: "https://awesome.quasar.dev",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const title = ref(linksList[0].title);
    const leftDrawerOpen = ref(false);
    const onChangeTitle = (newTitle) => {
      title.value = newTitle;
    };
    return {
      onChangeTitle,
      title,
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
