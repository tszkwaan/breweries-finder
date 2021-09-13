<template>
  <div>
    <image-brewery :brewery="brewery"></image-brewery>
    <div class="row-name">{{ brewery.name }}</div>
  </div>
</template>

<script>
import ImageBrewery from '@/components/ImageBrewery.vue'

export default {
  name: "CardBrewery",
  components: {
        ImageBrewery
    },
  props: {
    brewery: {
      type: Object
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>

.row-name {
  font-size: 1.5rem;
  font-family: "Noto Serif SC", serif;
  padding-bottom: 10px;
  margin: 10px 0;
  max-width: 500px;
  text-align: center;
}
</style>