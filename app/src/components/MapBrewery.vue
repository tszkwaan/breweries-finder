<template>
  <iframe
    width="450"
    height="250"
    frameborder="0"
    style="border:0"
    :src="`https://www.google.com/maps/embed/v1/view?key=AIzaSyAhAiHhO0RUDQivupDlhzqKOtWsmVRnEGY&center=${latitude},${longitude}&zoom=18`"
    allowfullscreen
  ></iframe>
</template>

<script>

export default {
  name: "MapBrewery",
  components: {
  },
  props: {
      latitude: {
          type: String
      },
      longitude: {
          type: String
      }
  },
  data() {
    return {
    };
  },
  computed: {
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
iframe {
    margin-top: 20px;
}
</style>