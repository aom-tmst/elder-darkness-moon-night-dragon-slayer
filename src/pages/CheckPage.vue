<template>
  <q-page style="padding-bottom: 30px">
    <div
      class="row"
      style="
        margin-top: -30px;
        background-color: #04c5c9;
        border-radius: 0 0 20px 20px;
      "
    >
      <div style="width: 100%; padding: 0 10px">
        <div
          @click="showDateDialog = true"
          class="flex justiflex-center items-center"
          style="
            border-radius: 4px;
            background-color: white;
            width: 100%;
            height: 40px;
            margin-top: 20px;
            margin-bottom: 10px;
            padding: 0 13px;
          "
        >
          <span style="font-weight: 900; color: #002245">
            {{ date }}
          </span>
          <q-icon
            class="flex"
            style="margin-left: auto; font-size: 25px; color: #002245"
            name="event"
          />
        </div>
      </div>
      <div style="width: 100%; padding: 0 10px">
        <div
          @click="showBuildingDialog = true"
          class="flex justiflex-center items-center"
          style="
            border-radius: 4px;
            background-color: white;
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
      <div style="width: 100%; padding: 0 10px">
        <div
          @click="checkBuilding"
          class="flex justiflex-center items-center"
          style="
            border-radius: 4px;
            background-color: white;
            width: 100%;
            height: 40px;
            margin-bottom: 20px;
            padding: 0 13px;
          "
        >
          <span style="font-weight: 900; color: #002245">
            {{ roomSelected }}
          </span>
          <q-icon
            class="flex"
            style="margin-left: auto; font-size: 25px; color: #002245"
            name="room"
          />
        </div>
      </div>
    </div>

    <div
      class="col q-gutter-y-md"
      style="padding: 0 10px; width: 100%; margin-top: 30px"
    >
      <div v-for="index in 4" :key="index">
        <div
          class="flex items-center q-pl-md"
          style="
            background-color: #f7f8fa;
            width: 100%;
            background-color: #002245;
            border-radius: 10px 10px 0 0;
            height: 40px;
          "
        >
          <div class="text-white" style="font-weight: 900">4 มีนาคม 2022</div>
        </div>
        <div
          style="
            color: #002245;
            font-weight: 700;
            background-color: #f7f8fa;
            padding: 10px;
          "
        >
          <div class="flex-row q-gutter-x-md q-mb-md">
            <q-icon style="display: block" name="building" />
            <span>อาคาร 6 อาคารเรียนรวมและปฏิบัติการกลาง</span>
          </div>
          <div class="flex-row q-gutter-x-md q-mb-md">
            <q-icon style="display: block" name="building" />
            <span>ห้อง 6120</span>
          </div>
          <div
            class="q-pa-sm"
            style="background-color: #e5e5e5; border-radius: 10px"
          >
            <span
              >หมายเหตุ :
              ได้มีการใกล้ชิดกับอาจารย์ผู้สอนและเพื่อนๆในห้องเรียน</span
            >
          </div>
        </div>
      </div>
    </div>

    <!-- dialog -->
    <q-dialog v-model="showDateDialog" position="bottom">
      <q-card style="border-radius: 20px 20px 0 0">
        <q-card-section>
          <q-date
            style="box-shadow: none; width: 100%"
            v-model="date"
            minimal
          />
        </q-card-section>
      </q-card>
    </q-dialog>
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
    <q-dialog v-model="showRoomDialog" position="bottom">
      <q-card style="border-radius: 20px 20px 0 0">
        <q-card-section>
          <div
            v-for="(item, index) in allRoom"
            :key="index"
            class="q-mb-md"
            style="border-radius: 7px; border: solid 2px #002245; padding: 10px"
            @click="roomSelected = item"
          >
            <span style="font-weight: 900; color: #002245">{{ item }}</span>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import dayjs from "dayjs";
import { useQuasar } from "quasar";
import { defineComponent, ref, watchEffect } from "vue";
export default defineComponent({
  name: "CheckPage",
  setup() {
    const date = ref(dayjs(Date.now()).format("YYYY/MM/DD"));
    const building = ref();
    const allRoom = ref();
    const roomSelected = ref();
    const $q = useQuasar();
    const showBuildingDialog = ref();
    const showRoomDialog = ref();
    const showDateDialog = ref(false);
    const buildingObtions = ref([
      "อาคาร 6 อาคารเรียนรวมและปฏิบัติการกลาง",
      "อาคาร 1A ภาควิชาวิศวกรรมคอมพิวเตอร์",
      "อาคาร 2 คณะการบริการและการท่องเที่ยว",
      "โรงแรม พี เอส ยู ลอดจ์",
      "ศูนย์อำนวยการร่วมรักษาความปลอดภัย",
      "สนามบาสเกตบอล",
      "โรงบำบัดน้ำเสีย",
    ]);

    const checkBuilding = () => {
      if (allRoom.value) {
        showRoomDialog.value = true;
      } else {
        $q.notify({
          message: "โปรดเลือกสถานที่ก่อน",
          color: "secondary",
        });
      }
    };
    const onSetBuilding = (item) => {
      building.value = item;
      if (building.value == "อาคาร 6 อาคารเรียนรวมและปฏิบัติการกลาง") {
        allRoom.value = ["6130", "6152", "6223", "6355", "6211"];
        roomSelected.value = "";
      } else if (building.value == "อาคาร 1A ภาควิชาวิศวกรรมคอมพิวเตอร์") {
        allRoom.value = ["1130", "1152", "1223", "1355", "1211"];
        roomSelected.value = "";
      } else if (building.value == "อาคาร 2 คณะการบริการและการท่องเที่ยว") {
        allRoom.value = ["2130", "2152", "2223", "2355", "2211"];
        roomSelected.value = "";
      } else if (building.value == "โรงแรม พี เอส ยู ลอดจ์") {
        allRoom.value = ["001", "002", "003", "004", "005"];
        roomSelected.value = "";
      } else if (building.value == "ศูนย์อำนวยการร่วมรักษาความปลอดภัย") {
        allRoom.value = ["006", "007", "008", "009", "010"];
        roomSelected.value = "";
      } else if (building.value == "สนามบาสเกตบอล") {
        allRoom.value = ["โรงยิมเก่า", "เล้าไก่", "Sport Complex"];
        roomSelected.value = "";
      } else if (building.value == "โรงบำบัดน้ำเสีย") {
        allRoom.value = ["1e", "2e"];
        roomSelected.value = "";
      }
    };

    watchEffect(() => {
      if (date.value && building.value && roomSelected.value) {
        const payload = {
          date: date.value,
          building: building.value,
          roomSelected: roomSelected.value,
        };
        console.log(payload);
      }
    });

    return {
      buildingObtions,
      showDateDialog,
      showBuildingDialog,
      building,
      allRoom,
      showRoomDialog,
      roomSelected,
      date,
      checkBuilding,
      onSetBuilding,
    };
  },
});
</script>

<style></style>
