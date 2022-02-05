<template>
  <v-row>
    <v-col cols="12" class="" v-html="text"></v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({ text: 'info/getInfoText' }),
  },
  async mounted() {
    this.$store.dispatch('info/getInfo', 'about_page')
  },
}
</script>
