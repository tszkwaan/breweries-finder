<template>
  <section class="list">
    <section class="section-heading">
        <h1>The List</h1>
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
      breweries: []
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
    .list {
        display: grid;
        grid-template-columns: auto;
        text-align: center;
    }
    h1 {
        text-transform: uppercase;
        font-family: 'Raleway', sans-serif;
        font-size: 2.5rem;
    }
</style>
