<template>
  <q-page>
    <div class="" v-if="timeLineList"></div>
    <div class="items-center justify-center" style="height: 60vh" v-else>
      <q-img src="images/nonList.png" style="width: 100px; height: 100px" />
    </div>
    <q-btn
      flat
      dense
      unelevated
      style="position: absolute; right: 0; bottom: 0; border-radius: 100%"
      to="add-timline-page"
    >
      <q-img src="images/addTimeLine.png" style="width: 100px; height: 100px" />
    </q-btn>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "RecordPage",

  setup() {
    const timeLineList = ref();
    return { timeLineList };
  },
});
</script>

<style></style>
