<template>
  <v-app>
    <!-- this is the base of the application -->
    <!-- vuejs router is used to navigate between student -->
    <!-- in the main.js file the routes is being setup set -->
    <router-view></router-view>
    <!-- <ServiceProvider/> -->
     
  </v-app>
</template>

<script>


export default {
  name: 'App',
  
  components: {
    // ServiceProvider    
  },

  data: () => ({
    //
  }),
};
</script>
