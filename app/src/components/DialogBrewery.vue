<template>
  <v-dialog v-model="isShow" width="500">
    <v-card>
      <v-btn color="primary" text @click="dialog = false">I accept</v-btn>
      <v-divider></v-divider>

      <v-card-text>
          {{ JSON.stringify(brewery) }}
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "DialogBrewery",
  props: {
      brewery: {
          type: Object
      }
  },
  data() {
    return {
        isShow: false
    };
  },
  computed: {},
  methods: {
      showDialog() {
          this.isShow = true
      }
  }
};
</script>

<style lang="scss" scoped>
</style>