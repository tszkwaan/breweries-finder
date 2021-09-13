<template>
    <div class="preview" @click="clickBrewery">
        <v-card>
            <img 
                :src="require(`@/static/img/breweries/brewery${getImageIndex()}.jpg`)"
                alt="photo of the brewery"/>
            <div class="row-name">
                {{ brewery.name }}
            </div>
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

    export default {
        name: 'PreviewBrewery',
        props: {
            brewery: {
                type: Object
            },
            index: {
                type: Number
            },
            page: {
                type: Number,
                default: 1
            }
        },
        methods: {
            getImageIndex() {
                const PLACEHOLDER = 8;
                const IMAGE_SETS = 2;
                return (this.page % IMAGE_SETS === 0) ? this.index + PLACEHOLDER : this.index
            },
            clickBrewery() {
                let formattedBrewery = {...this.brewery, imageIndex: this.getImageIndex()}
                // this.$store.commit('breweries/showDetailDialog', formattedBrewery)
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
        //   cursor: pointer;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
      }
  }
  
    .v-card {
        height: 100%;
    }

  .row-name {
    font-size: 1.5rem;
    font-family: 'Noto Serif SC', serif;
    padding-bottom: 10px;
    margin: 10px 0;
    max-width: 500px;
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

  img {
    width: 100%;
    aspect-ratio: 5 / 3;
  }

</style>