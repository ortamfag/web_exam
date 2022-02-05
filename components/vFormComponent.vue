<template>
  <v-col cols="12">
    <form @submit.prevent="submit">
      <v-col cols="12" v-for="(field, key) in fields" :key="key">
        <v-text-field
          v-if="field.type === 'string'"
          v-model="data[key]"
          :label="field.title"
          required
        ></v-text-field>
        <v-select
          v-if="field.type === 'select'"
          v-model="data[key]"
          :items="field.values"
          :label="field.title"
          required
        ></v-select>
      </v-col>
      <button class="mr-4 btn">Отправить</button>
    </form>
  </v-col>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    data: {},
  }),
  methods: {
    async submit() {
      this.$axios.post('https://demo-api.vsdev.space/api/farm/baby', this.data)
      for (const key in this.data) {
        this.data[key] = ''
      }
      this.$store.dispatch("animals/getAnimals") 
      this.$emit("close")
    },
  },
  async mounted() {
    await this.$store.dispatch('form/getData')
    for (let field in this.fields) {
      this.data[field] = ''
    }
  },
  unmounted() {
    this.data = {}
  },

  computed: {
    ...mapGetters({
      fields: 'form/getFields',
    }),
    valid() {
      for (const key in this.data) {
        if (!this.data[key]) false
      }
      return true
    },
  },
}
</script>

<style>
.btn{
  transform: scale(1.2);
  display: block;
  width: 100px;
  margin: 0 auto !important;
}
</style>
