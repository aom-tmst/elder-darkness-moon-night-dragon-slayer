<template>
  <q-page style="padding: 0 20px 30px 20px">
    <div class="row" style="width: 100%">
      <div style="width: 100%">
        <div
          @click="showBuildingDialog = true"
          class="flex justiflex-center items-center"
          style="
            border-radius: 4px;
            background-color: #f2f2f2;
            width: 100%;
            height: 40px;
            margin-bottom: 10px;
            padding: 0 13px;
          "
        >
          <span style="font-weight: 900; color: #002245">
            {{ building }}
          </span>
          <q-icon
            class="flex"
            style="margin-left: auto; font-size: 25px; color: #002245"
            name="home"
          />
        </div>
      </div>
      <div class="row" style="width: 100%; margin-bottom: 20px">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.203726873766!2d98.96999525102576!3d18.789072087190565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3a86c2a84ec1%3A0xd0b389080921e18d!2z4LiW4LiZ4LiZIOC4quC4uOC5gOC4l-C4niDguJXguLPguJrguKXguKrguLjguYDguJfguJ4g4Lit4Liz4LmA4Lig4Lit4LmA4Lih4Li34Lit4LiH4LmA4LiK4Li14Lii4LiH4LmD4Lir4Lih4LmIIOC5gOC4iuC4teC4ouC4h-C5g-C4q-C4oeC5iCA1MDIwMA!5e0!3m2!1sth!2sth!4v1650191485383!5m2!1sth!2sth"
          style="border: 0; width: 100%; height: 100vw"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="row q-gutter-y-md" style="width: 100%; gap: 10px">
        <div class="row" style="width: 100%; gap: 20px">
          <div
            class="col flex-1 flex items-center justify-center"
            style="
              border-radius: 10px;
              height: 20vw;
              background-color: #fe5472;
              color: white;
            "
          >
            <div class="col">
              <div class="row justify-center">
                <span class="flex items-center q-pr-sm" style="font-weight: 900"
                  >จำนวนผู้ติดเชื้อ
                </span>
                <img src="images/5.png" style="width: 30px; height: 30px" />
              </div>
              <div class="row justify-center">
                <span style="font-weight: 900; font-size: 26px">20</span>
              </div>
            </div>
          </div>
          <div
            class="col flex-1 flex items-center justify-center"
            style="
              border-radius: 10px;
              height: 20vw;
              background-color: #fdc500;
              color: white;
            "
          >
            <div class="col">
              <div class="row justify-center">
                <span class="flex items-center q-pr-sm" style="font-weight: 900"
                  >ความเสี่ยง
                </span>
                <img src="icons/u_home.png" style="width: 30px; height: 30px" />
              </div>
              <div class="row justify-center">
                <span style="font-weight: 900; font-size: 26px">40</span>
              </div>
            </div>
          </div>
        </div>
        <div class="row" style="width: 100%; gap: 20px">
          <div
            class="col flex-1 flex items-center justify-center"
            style="
              border-radius: 10px;
              height: 20vw;
              background-color: #039245;
              color: white;
            "
          >
            <div class="col">
              <div class="row justify-center">
                <span class="flex items-center q-pr-sm" style="font-weight: 900"
                  >ระดับประชากร
                </span>
                <img
                  src="icons/user-group.png"
                  style="width: 30px; height: 30px"
                />
              </div>
              <div class="row justify-center">
                <span style="font-weight: 900; font-size: 26px">120</span>
              </div>
            </div>
          </div>
          <div
            class="col flex-1 flex items-center justify-center"
            style="
              border-radius: 10px;
              height: 20vw;
              background-color: #4b4b4b;
              color: white;
            "
          >
            <div class="col">
              <div class="row justify-center">
                <span class="flex items-center q-pr-sm" style="font-weight: 900"
                  >ผู้ติดเชื้อรายใหม่
                </span>
                <img src="icons/users.png" style="width: 30px; height: 30px" />
              </div>
              <div class="row justify-center">
                <span style="font-weight: 900; font-size: 26px">8444</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- q-dialog -->
    <q-dialog v-model="showBuildingDialog" position="bottom">
      <q-card style="border-radius: 20px 20px 0 0; padding-top: 20px">
        <q-card-section class="q-gutter-y-md">
          <div class="cp; q-gutter-x-md">
            <div
              v-for="(item, index) in buildingObtions"
              :key="index"
              class="q-mb-md"
              style="
                border-radius: 7px;
                border: solid 2px #002245;
                padding: 10px;
              "
              @click="onSetBuilding(item)"
            >
              <span style="font-weight: 900; color: #002245">{{ item }}</span>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { defineComponent, ref, watchEffect } from "vue";
export default defineComponent({
  name: "StationPage",

  setup() {
    const showBuildingDialog = ref();
    const building = ref();
    const buildingObtions = ref([
      "อาคาร 6 อาคารเรียนรวมและปฏิบัติการกลาง",
      "อาคาร 1A ภาควิชาวิศวกรรมคอมพิวเตอร์",
      "อาคาร 2 คณะการบริการและการท่องเที่ยว",
      "โรงแรม พี เอส ยู ลอดจ์",
      "ศูนย์อำนวยการร่วมรักษาความปลอดภัย",
      "สนามบาสเกตบอล",
      "โรงบำบัดน้ำเสีย",
    ]);
    const onSetBuilding = (item) => {
      building.value = item;
    };

    watchEffect(() => {
      if (building.value) {
        console.log(building.value);
      }
    });
    return { showBuildingDialog, buildingObtions, building, onSetBuilding };
  },
});
</script>

<style></style>
