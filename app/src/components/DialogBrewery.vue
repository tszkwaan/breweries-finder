<template>
  <v-dialog v-model="breweries.isShowDetailDialog" width="500">
    <v-card>
      <v-btn color="primary" text @click="breweries.closeDetailDialog">X</v-btn>
      <v-divider></v-divider>

      <v-card-text>
          {{ JSON.stringify(breweries.brewery) }}
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'

export default {
  name: "DialogBrewery",
  props: {
  },
  data() {
    return {
    };
  },
  computed: {
      ...mapState(['breweries'])
  },
  methods: {
      ...mapMutations['breweries']
  }
};
</script>

<style lang="scss" scoped>
</style>