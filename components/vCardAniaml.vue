<template>
  <v-card class="mx-auto my-12">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img height="250" :src="`/img/${animal.type}.jpg`"></v-img>
    <v-card-title>{{ animal.name }}</v-card-title>

    <v-card-text>
      <div>Весс: {{ animal.weight }}</div>
      <div>Цвет: {{ animal.color }}</div>
      <div>Пол: {{ animal.sex }}</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    animal: {
      type: Object,
      require: true,
    },
  },
  compute: {
    cardImg() {
      if (this.animal.type === 'cow') {
        return 'cow_img.jpg'
      } else if (this.animal.type === 'rabbit') {
        return 'rabbit_img.jpg'
      }
      return 'sheep_img.jpg'
    },
  },
}
</script>
