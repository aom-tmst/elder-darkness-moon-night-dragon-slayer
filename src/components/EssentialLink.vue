<template>
  <q-item
    clickable
    tag="a"
    :to="link"
    style="background-color: #f8f7fa; border-radius: 8px; margin: 20px 20px"
    @click="$emit('onChangeTitle', title)"
  >
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label
        style="color: #002245; font-size: 18px; font-weight: bold"
        >{{ title }}</q-item-label
      >
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: "",
    },

    link: {
      type: String,
      default: "#",
    },

    icon: {
      type: String,
      default: "",
    },
  },
});
</script>
