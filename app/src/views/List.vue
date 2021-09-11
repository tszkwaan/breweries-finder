<template>
  <section class="list">
    <section class="section-heading">
        <h1>The Breweries</h1>
    </section>
    <section class="section-filters">
        filters
    </section>
    <section class="section-list">
        <list-breweries :breweries="breweries" />
    </section>
    <section class="section-pagination">
        pagination
    </section>
  </section>
</template>

<script>
// @ is an alias to /src
import ListBreweries from '@/components/ListBreweries.vue'
import ApiBreweries from '@/api/breweries.js'

export default {
  name: 'list',
  components: {
    ListBreweries
  },
  data() {
    return {
      breweries: [],
      size: 9
    }
  },
  mounted() {
    this.getBreweriesList()
  },
  methods: {
    async getBreweriesList() {
      console.log('in getBreweriesList')
      this.breweries = await ApiBreweries.getBreweriesList();
      console.log(this.breweries)
    }
  }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@500&display=swap');

    .list {
        display: grid;
        grid-template-columns: auto;
        text-align: center;
    }
    h1 {
        text-transform: uppercase;
        font-family: 'Noto Serif SC', serif;
        font-size: 2.5rem;
    }
</style>
