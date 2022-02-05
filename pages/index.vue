<template>
  <v-row justify="center" align="center">
    <v-col cols="6" sm="6" md="6" v-html="text"></v-col>
    <v-col cols="6" sm="6" md="6"><v-img :src="img"></v-img></v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({ text: 'info/getInfoText', img: 'info/getInfoImg' }),
  },
  async mounted() {
    this.$store.dispatch('info/getInfo', 'home_page')
  },
}
</script>
