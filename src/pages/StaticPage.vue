<template>
  <q-page style="padding: 0 10px">
    <div v-for="(items, i) in static_items" :key="i">
      <q-btn
        unelevated
        no-wrap
        class="static-card flex-row h-full w-full"
        @click="$router.push({ path: `${items.link}` })"
      >
        <q-img
          :src="items.img"
          style="border-radius: 15px; height: 140px"
          fit="contain"
        />
        <div class="flex-col h-full text-right w-full" style="font-weight: 900">
          <span class="static-title text-black">สถานการณ์ผู้ติดเชื้อ</span>
          <span class="covid-19">COVID-19</span>
          <span
            class="static-title flex"
            style="margin-left: auto; flex-wrap: nowrap"
            ><div v-if="items.id == '0'" class="text-black">ทั้งหมดใน</div>
            {{ items.title }}</span
          >
        </div>
      </q-btn>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "StaticPage",

  setup() {
    const static_items = [
      {
        id: "0",
        title: "ประเทศไทย",
        img: "images/14.jpg",
        link: "static-all",
      },
      {
        id: "1",
        title: "รายพื้นที่",
        img: "images/17.png",
        link: "static-each",
      },
    ];
    return { static_items };
  },
});
</script>

<style scoped lang="scss">
span {
  margin: 3px 0;
}
.static-card {
  border: solid 2px #e5e5e5;
  border-radius: 15px;
  margin-bottom: 1rem;
  padding: 10px;
  gap: 10px;
}
.covid-19 {
  font-size: 34px;
  color: #00b3b7;
}
.static-title {
  font-size: 16px;
  color: #00b3b7;
}
</style>
