<template>
    <div class="container-fluid">
        <preview-brewery
            v-for="brewery, index in breweries"
            :key="brewery.id"
            :brewery="brewery"
            :index="index"
            :page="page"
            @click="showDetail">
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
            },
            page: {
                type: Number,
                default: 1
            }
        },
        methods: {
            showDetail(action, brewery) {

            }
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