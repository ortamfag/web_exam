<template>
  <v-list-item-title style="paddinh: 0 20px">
    <v-list-item-content>
      <v-list-item-title>Коров: {{ cows }}</v-list-item-title>
    </v-list-item-content>
    <v-list-item-content>
      <v-list-item-title>Кроликов: {{ rabbits }}</v-list-item-title>
    </v-list-item-content>
    <v-list-item-content>
      <v-list-item-title>Овец: {{ sheeps }}</v-list-item-title>
    </v-list-item-content>
    <v-img src="/img/left_widget_img.jpg"></v-img>
  </v-list-item-title>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  mounted() {
    this.$store.dispatch('widget/getStats')
  },
  computed: {
    ...mapGetters({
      cows: 'widget/getCows',
      rabbits: 'widget/getRabbits',
      sheeps: 'widget/getSheeps',
    }),
  },
}
</script>
