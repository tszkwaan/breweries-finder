<template>
    <v-toolbar
      color="white"
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

      <v-toolbar-items>
        <v-btn
          text>
          <router-link
          :to="{ name: 'list' }">
            All breweries
          </router-link>
        </v-btn>
      </v-toolbar-items>

      <v-toolbar-items>
        <v-btn
          text>
          <router-link
            :to="{ name: 'save' }">
            Saved breweries
          </router-link>
        </v-btn>
      </v-toolbar-items>

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
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200;400;500&display=swap');

  header {
    font-family: 'Raleway', sans-serif;
    height: 64px;
  }

  header a {
    color: #4c4c4c;
    text-decoration: none;
  }
</style>