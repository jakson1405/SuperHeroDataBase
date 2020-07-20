<template>
  <v-app>
    <v-main>
      <v-toolbar>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn block dark
                  v-for="link of links"
                  :key="link.tittle"
                  :to="link.url"
          >{{link.tittle}}</v-btn>

        </v-toolbar-items>
      </v-toolbar>
      <router-view></router-view>
    </v-main>
  </v-app>

</template>
<script>


  export default {
    name: 'App',

    data: () => ({
      links: [
        {
          tittle: 'Home', url: '/'
        },
        {
          tittle: 'Create', url: '/create'
        },
        {
          tittle: 'Heroes', url: '/heroes'
        }

      ]
    }),
  };
</script>
<style scoped>
  .createHero{
    margin: 30px;
  }
</style>