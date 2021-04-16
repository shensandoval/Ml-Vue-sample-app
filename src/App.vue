<template>
  <v-app>
    <v-app-bar
      app
      color="#161616"
      dark
    >
    
      <div class="d-flex align-center">
        <v-img
          alt="Sample Name"
          class="shrink mr-2"
          contain
          src="./assets/ml-logo.png"
          transition="scale-transition"
          width="40"
        />
      </div>

      <v-spacer>Sample</v-spacer>

    </v-app-bar>

    <v-app-bar style="margin-top:4%;"
      app 
      color="#A30606"
    >
    </v-app-bar>

    <v-main>
      <Home/>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import Home from './components/Home';

export default {
  name: 'App',

  components: {
    Home
  },

  data: () => ({
    //
  }),
};
</script>
