<template>
  <q-page style="padding: 0 10px 30px 10px">
    <div class="row items-center">
      <div class="flex flex-1">
        <q-img
          src="images/hospitalcontact.jpg"
          style="width: 100%; hight: 100%"
        ></q-img>
      </div>
      <div class="flex-1">
        <span style="font-weight: 900; color: #002245; font-size: 24px"
          >ข้อมูลติดต่อ โรงพยาบาล</span
        >
      </div>
    </div>
    <div class="flex-col q-gutter-y-lg">
      <div class="row">
        <span
          style="
            border-radius: 10px;
            text-align: center;
            background-color: #04c5c9;
            width: 100%;
            color: white;
            font-weight: 900;
            padding: 10px 0;
            margin-top: 10px;
            font-size: 18px;
          "
          >โรงพยาบาลศูนย์</span
        >
        <div
          class="flex row justify-center q-gutter-x-md q-gutter-y-lg"
          style="width: 100%; flex-wrap: wrap; margin-top: 2px"
        >
          <div v-for="index in 2" :key="index">
            <div
              @click="pushPage()"
              style="
                background-color: #f2f2f2;
                padding: 15px;
                border-radius: 10px 10px 0 0;
              "
            >
              <div class="col">
                <q-img src="images/hospital.png" style="width: 350px" />
              </div>
            </div>
            <div class="row justify-center">
              <span
                style="
                  padding: 10px 0;
                  text-align: center;
                  width: 100%;
                  font-weight: 900;
                  color: white;
                  font-size: 18px;
                  border-radius: 0 0 10px 10px;
                  background-color: #002245;
                "
                >โรงพยาบาล</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="flex-col">
        <div class="row">
          <span
            style="
              border-radius: 10px;
              text-align: center;
              background-color: #04c5c9;
              width: 100%;
              color: white;
              font-weight: 900;
              padding: 10px 0;
              margin-top: 10px;
              font-size: 18px;
            "
            >โรงพยาบาลชุมชน
          </span>
          <div
            class="flex row justify-center q-gutter-x-md q-gutter-y-lg"
            style="width: 100%; flex-wrap: wrap; margin-top: 2px"
          >
            <div v-for="index in 2" :key="index">
              <div
                @click="pushPage()"
                style="
                  background-color: #f2f2f2;
                  padding: 15px;
                  border-radius: 10px 10px 0 0;
                "
              >
                <div class="col">
                  <q-img src="images/hospital.png" style="width: 350px" />
                </div>
              </div>
              <div class="row justify-center">
                <span
                  style="
                    padding: 10px 0;
                    text-align: center;
                    width: 100%;
                    font-weight: 900;
                    color: white;
                    font-size: 18px;
                    border-radius: 0 0 10px 10px;
                    background-color: #002245;
                  "
                  >โรงพยาบาล</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-col">
        <div class="row">
          <span
            style="
              border-radius: 10px;
              text-align: center;
              background-color: #04c5c9;
              width: 100%;
              color: white;
              font-weight: 900;
              padding: 10px 0;
              margin-top: 10px;
              font-size: 18px;
            "
            >โรงพยาบาลเอกชน</span
          >
          <div
            class="flex row justify-center q-gutter-x-md q-gutter-y-lg"
            style="width: 100%; flex-wrap: wrap; margin-top: 2px"
          >
            <div v-for="index in 2" :key="index">
              <div
                @click="pushPage()"
                style="
                  background-color: #f2f2f2;
                  padding: 15px;
                  border-radius: 10px 10px 0 0;
                "
              >
                <div class="col">
                  <q-img src="images/hospital.png" style="width: 350px" />
                </div>
              </div>
              <div class="row justify-center">
                <span
                  style="
                    padding: 10px 0;
                    text-align: center;
                    width: 100%;
                    font-weight: 900;
                    color: white;
                    font-size: 18px;
                    border-radius: 0 0 10px 10px;
                    background-color: #002245;
                  "
                  >โรงพยาบาล</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { useRouter } from "vue-router";
import { defineComponent } from "vue";
export default defineComponent({
  name: "HospitalContact",

  setup() {
    const router = useRouter();
    const pushPage = () => {
      void router.push({ path: "hospital-detail" });
    };
    return { pushPage };
  },
});
</script>
