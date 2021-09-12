<template>
  <section class="list">
    <section class="section-heading">
        <h1>The Breweries</h1>
    </section>
    <section class="section-filters">
        <row-filters
            ref="row-filters"
            :size-prop="size"
            @updateSize="updateSize">
        </row-filters>
    </section>
    <section class="section-list">
        <list-breweries 
          :breweries="breweries"
          :page="page" />
    </section>
    <section class="section-pagination">
        <pagination
          ref="pagination"
          :current-prop="page"
          @update="updateCurrentPage"/>
    </section>
    <dialog-brewery>
    </dialog-brewery>
  </section>
</template>

<script>
import Vue from 'vue'
import ListBreweries from '@/components/ListBreweries.vue'
import Pagination from '@/components/Pagination.vue'
import RowFilters from '@/components/RowFilters.vue'
import DialogBrewery from '@/components/DialogBrewery.vue'

import ApiBreweries from '@/api/breweries.js'

export default {
  name: 'list',
  components: {
    ListBreweries,
    Pagination,
    RowFilters,
    DialogBrewery
  },
  data() {
    return {
      breweries: [],
      pageSize: 12,
      page: 1,
      size: {
        size: "All",
        value: ""
      }
    }
  },
  mounted() {
    this.getBreweriesList()
  },
  methods: {
    async getBreweriesList() {
      this.breweries = await ApiBreweries.getBreweriesList(this.page, this.pageSize, this.size.value)
    },
    async updateCurrentPage(newVal) {
      this.page = newVal
      await this.getBreweriesList()
      window.scrollTo(0,0)
    },
    async updateSize(newVal) {
        if (newVal && newVal.value !== this.size.value) {
            Vue.set(this.size, 'size', newVal.size)
            Vue.set(this.size, 'value', newVal.value)
            await this.getBreweriesList()
            this.page = 1
        }
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
