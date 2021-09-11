<template>
  <v-app>
    <navbar/>
    <v-content>
        <v-container>
          <router-view/>
        </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  name: 'App',

  components: {
    Navbar
  },

  data: () => ({
    //
  }),
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200;400;500&display=swap');
</style>
