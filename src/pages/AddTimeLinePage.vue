<template>
  <q-page style="padding: 0 10px 100px 10px">
    <q-btn
      @click="back = true"
      unelevated
      icon="chevron_left"
      style="
        color: white;
        font-weight: 700;
        width: 40px;
        height: 40px;
        margin-bottom: 20px;
        border-radius: 10px;
        background-color: #04c5c9;
      "
    >
    </q-btn>
    <div
      v-for="(item, index) in data"
      :key="index"
      @click="currentIndex = index"
      style="margin-bottom: 20px"
    >
      <div style="background-color: #002245; padding: 10px; border-radius: 8px">
        <div class="row items-center">
          <span style="font-weight: 900; color: white"
            >บันทึกไทม์ไลน์ที่ {{ index + 1 }}
          </span>
          <q-space />
          <q-btn
            v-if="data.length > 1"
            unelevated
            dense
            icon="close"
            style="color: white"
            @click="deleteTimeLine(index)"
          />
        </div>

        <div style="background-color: white">
          <div style="width: 100%; padding: 0 10px">
            <div
              @click="openDateDialog(index)"
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
                {{ item.date }}
              </span>
              <q-icon
                class="flex"
                style="margin-left: auto; font-size: 25px; color: #002245"
                name="event"
              />
            </div>
          </div>
        </div>
      </div>
      <div v-for="(item, i) in item.detail" :key="i">
        <div
          class="col"
          style="
            background-color: #e5e5e5;
            padding: 15px 0;
            margin: 10px 0;
            border-radius: 8px;
          "
        >
          <div style="width: 100%; padding: 0 10px">
            <div
              @click="onCheckInput(index, i)"
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
                {{ item.location }}
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
                margin-bottom: 10px;
                padding: 0 13px;
              "
            >
              <span style="font-weight: 900; color: #002245">
                {{ item.room }}
              </span>
              <q-icon
                class="flex"
                style="margin-left: auto; font-size: 25px; color: #002245"
                name="room"
              />
            </div>
          </div>
          <div style="width: 100%; padding: 0 10px">
            <div style="max-width: 100%">
              <q-input
                type="textarea"
                dense
                v-model="item.desc"
                style="background-color: white; padding: 0 15px"
              />
            </div>
          </div>
        </div>
        <div class="row q-gutter-x-md justify-end q-pr-sm q-mt-sm">
          <q-btn
            unelevated
            icon="delete"
            label="ลบ"
            @click="deleteDetail(index, i)"
            style="
              background-color: #a4a4a4;
              fontweight: 900;
              color: white;
              border-radius: 8px;
            "
          />
        </div>
      </div>
      <div class="row q-gutter-x-md justify-end q-pr-sm q-mt-sm">
        <q-btn
          unelevated
          icon="home"
          @click="addLocation(index)"
          label="เพิ่ม"
          style="
            background-color: #a4a4a4;
            fontweight: 900;
            color: white;
            border-radius: 8px;
          "
        />
      </div>
    </div>
    <!-- bottom -->
    <div
      class="row q-gutter-x-md"
      style="
        padding-bottom: 20px;
        bottom: 0;
        color: white;
        position: absolute;
        width: 100%;
      "
    >
      <q-btn
        unelevated
        class="flex-1"
        style="background-color: #04c5c9; font-weight: 900; border-radius: 10px"
        @click="addTimeLine()"
        label="เพิ่มไทม์ไลน์"
      />
      <q-btn
        unelevated
        class="flex-1"
        style="background-color: #04c5c9; font-weight: 900; border-radius: 10px"
        @click="onSubmit()"
        label="บันทึก"
      />
    </div>

    <!-- dialog -->
    <q-dialog v-model="showDateDialog" position="bottom">
      <q-card style="border-radius: 20px 20px 0 0">
        <q-card-section>
          <q-date
            style="box-shadow: none; width: 100%"
            v-model="date"
            @update:model-value="(value) => onUpdate(date)"
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
            @click="data[currentIndex].detail[currentInput].room = item"
          >
            <span style="font-weight: 900; color: #002245">{{ item }}</span>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>

    <!-- popup -->
    <q-dialog v-model="back">
      <q-card style="border-radius: 5px; padding: 20px; border-radius: 20px">
        <q-card-section>
          <div class="flex-col items-center">
            <span
              class="q-mb-sm"
              style="font-weight: 900; font-size: 18px; color: #1c0045"
              >ย้อนกลับไปหน้าก่อนหน้า</span
            >
            <span class="q-mb-md" style="color: #1c0045"
              >เนื้อหาที่กำลังเพิ่มหรือแก้ไขจะถูกยกเลิก</span
            >
            <div class="flex-row q-gutter-x-md">
              <div class="col flex-1">
                <q-btn
                  unelevated
                  label="ย้อนกลับ"
                  style="
                    background-color: #c5c5c5;
                    color: white;
                    font-weight: 900;
                  "
                  @click="backPage"
                />
              </div>
              <div class="col flex-1">
                <q-btn
                  unelevated
                  label="ดำเนินการต่อ"
                  style="
                    white-space: nowrap;
                    background-color: #04c5c9;
                    color: white;
                    font-weight: 900;
                  "
                  @click="back = false"
                />
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "AddTimeLinePage",

  setup() {
    const $q = useQuasar();
    const stageOne = ref(true);
    const data = ref([
      { date: "", detail: [{ location: "", room: "", desc: "" }] },
    ]);
    const stageTwo = ref(false);
    const desc = ref("");
    const building = ref("อาคาร / สถานที่");
    const currentIndex = ref(0);
    const currentInput = ref(0);
    const allRoom = ref();
    const back = ref(false);
    const roomSelected = ref("ห้อง");
    const date = ref();
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
    const deleteTimeLine = (index) => {
      data.value = data.value.filter((_, i) => i != index);
    };
    const addTimeLine = (index) => {
      const add = data.value.push({
        date: "",
        detail: [{ location: "", room: "", desc: "" }],
      });
      currentIndex.value + 1;
    };
    const addLocation = (index) => {
      currentIndex.value = index;
      const add = data.value[currentIndex.value].detail.push({
        location: "",
        room: "",
        desc: "",
      });
    };
    const onUpdateDesc = (item) => {
      data.value[0].detail[currentInput.value].desc = item;
    };
    const onUpdate = (item) => {
      data.value[currentIndex.value].date = item;
    };
    const openDateDialog = (index) => {
      currentIndex.value = index;
      currentInput.value = index;
      showDateDialog.value = true;
    };
    const onCheckInput = (index, i) => {
      currentIndex.value = index;
      currentInput.value = i;
      showBuildingDialog.value = true;
    };
    const deleteDetail = (index, is) => {
      currentIndex.value = index;
      console.log(is);
      // data.value[currentIndex.value].detail = data.value[
      //   currentIndex.value
      // ].detail.slice(i, 1);

      data.value[currentIndex.value].detail = data.value[
        currentIndex.value
      ].detail.filter((_, i) => i != is);

      currentInput.value - 1;
    };
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
    const onSubmit = () => {
      console.log(data.value);
    };
    const backPage = () => {
      void window.history.back();
    };
    const onSetBuilding = (item) => {
      data.value[currentIndex.value].detail[currentInput.value].location = item;
      if (
        data.value[currentIndex.value].detail[currentInput.value].location ==
        "อาคาร 6 อาคารเรียนรวมและปฏิบัติการกลาง"
      ) {
        allRoom.value = ["6130", "6152", "6223", "6355", "6211"];
        roomSelected.value = "";
      } else if (
        data.value[currentIndex.value].detail[currentInput.value].location ==
        "อาคาร 1A ภาควิชาวิศวกรรมคอมพิวเตอร์"
      ) {
        allRoom.value = ["1130", "1152", "1223", "1355", "1211"];
        roomSelected.value = "";
      } else if (
        data.value[currentIndex.value].detail[currentInput.value].location ==
        "อาคาร 2 คณะการบริการและการท่องเที่ยว"
      ) {
        allRoom.value = ["2130", "2152", "2223", "2355", "2211"];
        roomSelected.value = "";
      } else if (
        data.value[currentIndex.value].detail[currentInput.value].location ==
        "โรงแรม พี เอส ยู ลอดจ์"
      ) {
        allRoom.value = ["001", "002", "003", "004", "005"];
        roomSelected.value = "";
      } else if (
        data.value[currentIndex.value].detail[currentInput.value].location ==
        "ศูนย์อำนวยการร่วมรักษาความปลอดภัย"
      ) {
        allRoom.value = ["006", "007", "008", "009", "010"];
        roomSelected.value = "";
      } else if (
        data.value[currentIndex.value].detail[currentInput.value].location ==
        "สนามบาสเกตบอล"
      ) {
        allRoom.value = ["โรงยิมเก่า", "เล้าไก่", "Sport Complex"];
        roomSelected.value = "";
      } else if (
        data.value[currentIndex.value].detail[currentInput.value].location ==
        "โรงบำบัดน้ำเสีย"
      ) {
        allRoom.value = ["1e", "2e"];
        roomSelected.value = "";
      }
    };
    return {
      data,
      showDateDialog,
      date,
      building,
      roomSelected,
      allRoom,
      showBuildingDialog,
      buildingObtions,
      currentInput,
      showRoomDialog,
      currentIndex,
      desc,
      back,
      stageOne,
      stageTwo,
      deleteTimeLine,
      addTimeLine,
      onSubmit,
      onUpdate,
      backPage,
      onUpdateDesc,
      openDateDialog,
      onCheckInput,
      addLocation,
      deleteDetail,
      checkBuilding,
      onSetBuilding,
    };
  },
});
</script>

<style></style>
