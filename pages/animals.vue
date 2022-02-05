<template>
  <v-row style="justify-content: center">
    <v-btn color="lighten-2 ma-5" @click="dialog = !dialog">
      Добавить животное
    </v-btn>
    <v-col cols="10" v-if="dialog">
      <vFormComponent @close="dialog = !dialog"></vFormComponent>
    </v-col>

    <v-row>
      <v-col cols="6" md="4" sm="6" v-for="animal in animals" :key="animal.id">
        <vCardAniaml :animal="animal" />
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    dialog: false,
  }),
  computed: {
    ...mapGetters({
      animals: 'animals/getAminals',
    }),
  },
  async mounted() {
    this.$store.dispatch('form/getData')
    this.$store.dispatch('animals/getAnimals')
  },
}
</script>
