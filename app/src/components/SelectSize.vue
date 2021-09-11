<template>
  <v-select
    v-model="size"
    :items="options"
    item-text="size"
    item-value="value"
    persistent-hint
    label="Size"
    return-object>
  </v-select>
</template>

<script setup>
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
      options: [
        {
          size: "All",
          value: ""
        },
        {
          size: "Micro",
          value: "micro"
        },
        {
          size: "Regional",
          value: "regional"
        },
        {
          size: "Brewpub",
          value: "brewpub"
        },
        {
          size: "Large",
          value: "large"
        },
        {
          size: "Planning",
          value: "planning"
        },
        {
          size: "Bar",
          value: "bar"
        },
        {
          size: "Contract",
          value: "contract"
        },
        {
          size: "Proprietor",
          value: "proprietor"
        },
        {
          size: "Closed",
          value: "closed"
        }
      ]
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
            console.log('in inner emit:')
            console.log(newVal)
            this.$emit('update', newVal)
            // if (!oldVal || (newVal && newVal.value !== oldVal.value)) {
                
            // }
        }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>