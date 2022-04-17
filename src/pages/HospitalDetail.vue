<template>
  <q-page style="padding: 0 20px 30px 20px">
    <q-btn
      @click="$router.go(-1)"
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
    <q-img src="images/hospital.png" style="margin-bottom: 20px" />
    <div class="q-gutter-y-md">
      <div class="text-desc" style="font-weight: 900; font-size: 22px">
        <span>โรงพยาบาลป่าตอง</span>
      </div>
      <div class="text-desc">
        <q-icon name="home" />
        <span>57 ถ.ไสน้ำเย็น ต.ป่าตอง อ.กะทู้ จ.ภูเก็ต 83150 </span>
      </div>
      <div class="text-desc">
        <q-icon name="home" />
        <span>57 ถ.ไสน้ำเย็น ต.ป่าตอง อ.กะทู้ จ.ภูเก็ต 83150 </span>
      </div>
      <div class="text-desc">
        <q-icon name="home" />
        <span>www.patonghospital.go.th/main/</span>
      </div>
      <div class="text-desc">
        <q-icon name="home" />
        <span>www.facebook.com/patonghospital/</span>
      </div>
      <div class="text-desc">
        <q-icon name="home" />
        <span>+66 76 342 633-4</span>
      </div>
      <div class="text-desc">
        <q-icon name="home" />
        <span>076-342633</span>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "HospitalDetail",
});
</script>

<style scoped>
.text-desc {
  color: #002245;
  font-size: 18px;
}
</style>
