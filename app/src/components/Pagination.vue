<template>
    <v-pagination
        v-model="current"
        :length=max
        color="rgba(0, 0, 0, 0.87)">
    </v-pagination>
</template>

<script>
    export default {
        name: 'Pagination',
        props: {
            currentProp: {
                type: Number,
                default: 1
            }
        },
        data() {
            return {
                max: 5
            }
        },
        computed: {
            current: {
                get: function() {
                    return this.currentProp
                },
                set: function(newVal) {
                    this.$emit('update', newVal)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>