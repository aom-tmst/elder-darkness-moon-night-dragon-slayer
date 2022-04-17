<template>
  <q-page>
    <q-img
      style="margin-top: -30px; margin-bottom: 30px"
      src="images/newsBackground.png"
    ></q-img>
    <div style="padding: 0 10px">
      <q-carousel
        animated
        v-model="slide"
        arrows
        navigation
        infinite
        style="
          width: 100%;
          height: 60vw;
          border-radius: 20px;
          box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.25);
          margin-bottom: 30px;
        "
      >
        <q-carousel-slide :name="1" img-src="images/carouselImage.png" />
        <q-carousel-slide :name="2" img-src="images/113.jpg" />
        <q-carousel-slide :name="3" img-src="images/114.jpg" />
        <q-carousel-slide :name="4" img-src="images/115.jpg" />
      </q-carousel>
      <div
        v-for="index in 3"
        :key="index"
        class="flex-row"
        style="
          gap: 10px;
          background-color: #f7f8fa;
          box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.25);
          margin-bottom: 20px;
          padding: 20px 10px;
          border-radius: 20px;
        "
      >
        <div class="flex-col">
          <q-img
            src="images/112.jpg"
            style="width: 170px; height: 150px; border-radius: 20px"
          ></q-img>
        </div>
        <div class="flex-col" style="word-break: break-all">
          <span style="font-weight: 600; color: #002245"
            >โควิดวันนี้ พุ่ง 16,330 ราย กทม.หนักสุด 3,244 ราย</span
          >
          <span style="color: #002245"
            >ศูนยข้อมูล COVID-19 รายงานสถานการณ์ การแพร่ระบาดของโควิด-19 วันนี้
            12 กุมภาพันธ์ 2565 ยอดผู้ติดเชื้อรวม 16,330 ราย ...</span
          >
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "NewPage",
  setup() {
    return {
      slide: ref(1),
    };
  },
});
</script>

<style></style>
