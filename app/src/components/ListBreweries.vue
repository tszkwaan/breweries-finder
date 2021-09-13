<template>
    <div class="container-fluid">
        <preview-brewery
            v-for="brewery, index in breweries"
            :key="brewery.id"
            :brewery="brewery">
        </preview-brewery>
    </div>
</template>

<script>
import PreviewBrewery from '@/components/PreviewBrewery.vue'

    export default {
        name: 'Navbar',
        components: {
            PreviewBrewery
        },
        props: {
            breweries: {
                type: Array,
                default: () => []
            }
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>
  
  .container-fluid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
  }

</style>