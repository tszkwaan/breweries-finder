<template>
    <img
        :key="brewery.id"
        :src="require(`@/static/img/breweries/brewery${brewery.imageIndex}.jpg`)"
        :alt="`photo of the ${brewery.name}`"/>
</template>

<script>

    export default {
        name: 'ImageBrewery',
        props: {
            brewery: {
                type: Object
            }
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>
  img {
    width: 100%;
    aspect-ratio: 5 / 3;
  }

</style>