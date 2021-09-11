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
        <pagination
          ref="pagination"
          :current-prop="page"
          @update="updateCurrentPage"/>
    </section>
  </section>
</template>

<script>
import Vue from 'vue'
import ListBreweries from '@/components/ListBreweries.vue'
import Pagination from '@/components/Pagination.vue'

import ApiBreweries from '@/api/breweries.js'

export default {
  name: 'list',
  components: {
    ListBreweries,
    Pagination
  },
  data() {
    return {
      breweries: [],
      size: 9,
      page: 1
    }
  },
  mounted() {
    this.getBreweriesList()
  },
  methods: {
    async getBreweriesList() {
      this.breweries = await ApiBreweries.getBreweriesList(this.page, this.size)
      // Vue.set(this.breweries, breweries)
    },
    async updateCurrentPage(newVal) {
      this.page = newVal
      await this.getBreweriesList()
      window.scrollTo(0,0)
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
    .section-list,
    .section-pagination {
      margin-bottom: 20px;
    }
</style>
