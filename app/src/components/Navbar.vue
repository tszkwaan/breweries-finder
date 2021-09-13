<template>
    <v-toolbar
      class="flex-grow-0"
      flat
    >
      
      <v-toolbar-title>
        <v-img
          alt="Breweries Factory Logo"
          class="shrink mr-2"
          contain
          src="@/static/img/logo.png"
          width="200"
        />
      </v-toolbar-title>

    </v-toolbar>
</template>

<script>
    export default {
        name: 'Navbar'
    }
</script>

<style lang="scss" scoped>
  
  header {
    font-family: 'Raleway', sans-serif;
    height: 64px;
  }

  .v-toolbar__content {
    border-bottom: 1px solid #4c4c4c;
  }

  a {
    color: #4c4c4c;
    text-decoration: none;
  }

  .v-btn:not(.v-btn--round).v-size--x-large {
    height: 100%;
  }

</style>