<template>
  <div class="container-fluid">
    <v-row>
      <v-col
        class="d-flex" 
        cols="4"
        sm="2">
        <select-size 
            ref="select-size"
            :size-prop="sizeProp"
            @update="updateSize">
        </select-size>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SelectSize from '@/components/SelectSize.vue'

export default {
  name: "row-filters",
  components: {
    SelectSize
  },
  props: {
      sizeProp: {
        type: Object
      }
  },
  methods: {
    updateSize(newVal) {
        console.log('in middle emit:')
        console.log(newVal)
        this.$emit('updateSize', newVal)
    }
  }
};
</script>

<style lang="scss" scoped>
  .container-fluid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
  }
  .row {
      padding-left: 3%;
  }
</style>