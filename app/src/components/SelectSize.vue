<template>
  <v-select
    v-model="size"
    :items="options"
    item-text="size"
    item-value="value"
    persistent-hint
    label="Size"
    return-object
    color="rgba(0, 0, 0, 0.87)">
  </v-select>
</template>

<script setup>
import dataBrewerySize from '@/data/brewery-size.json'

export default {
  name: "select-size",
  components: {},
  props: {
      sizeProp: {
        type: Object
      }
  },
  data() {
    return {
      options: dataBrewerySize
    };
  },
  mounted() {},
  methods: {},
  computed: {
    size: {
        get: function() {
            return this.sizeProp
        },
        set: function(newVal) {
            this.$emit('update', newVal)
        }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>