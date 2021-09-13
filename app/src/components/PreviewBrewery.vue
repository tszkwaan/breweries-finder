<template>
    <div class="preview" @click="clickBrewery">
        <v-card>
           <card-brewery :brewery="brewery"></card-brewery>
            <div class="row-state">
                <div class='state-text'>
                    {{ brewery.state }} 
                    <span v-if="brewery.state && brewery.city">,</span>
                    {{ brewery.city }}
                </div>
            </div>
        </v-card>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    import CardBrewery from '@/components/CardBrewery.vue'

    export default {
        name: 'PreviewBrewery',
        components: {
            CardBrewery
        },
        props: {
            brewery: {
                type: Object
            }
        },
        methods: {
            clickBrewery() {
                this.$store.commit('breweries/showDetailDialog', this.brewery)
            },
            ...mapMutations['breweries']
        }
    }
</script>

<style lang="scss" scoped>
  
  .preview {
      margin: 10px;
      max-width: 400px;

      &:hover {
          cursor: pointer;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
      }
  }
  
    .v-card {
        height: 100%;
    }



  .row-state {
    text-align: left;
    padding: 5px 10px;
    display: flex;
    align-items: flex-end;
  }

  .state-text {
      position: absolute;
      bottom: 0;
  }

</style>