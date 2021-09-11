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

      <v-toolbar-items
        :key="list">
        <router-link
          :to="{ name: 'list' }">
          <v-btn
            x-large
            text>
            Breweries list
        </v-btn>
        </router-link>
      </v-toolbar-items>

      <!-- <v-toolbar-items
        :key="save">
        <router-link
          :to="{ name: 'save' }">
          <v-btn
            x-large
            text>
            Saved breweries
        </v-btn>
        </router-link>
      </v-toolbar-items> -->

      <!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
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