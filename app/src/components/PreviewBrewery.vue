<template>
    <div class="preview">
        <v-card>
            <img 
                :src="require(`@/static/img/breweries/brewery${index}.jpg`)"
                alt="photo of the brewery"/>
            <div class="row-name">
                {{ brewery.name }}
            </div>
            <div class="row-state">
                {{ brewery.state }}
            </div>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: 'PreviewBrewery',
        props: {
            brewery: {
                type: Object
            },
            index: {
                type: Number
            }
        }
    }
</script>

<style lang="scss" scoped>
  
  .preview {
      width: 30%;
      margin: 10px;
  }

  .row-name {
    font-size: 1.5rem;
  }

  .row-state {
    text-align: left;
    padding: 0 10px;
  }

  img {
    width: 100%;
    aspect-ratio: 5 / 3;
  }

</style>