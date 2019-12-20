<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app color="#F5F5DC"
      right
    >
      <v-list dense>
        <v-list-item link :to="{name:'Overview'}">
          <v-list-item-action>
            <v-icon>mdi-account theme--light</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Persönliche Daten</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link :to="{name:'Order'}">
          <v-list-item-action>
            <v-icon>mdi-seat</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Forum</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link >
          <v-list-item-action>
            <v-icon>mdi-heart</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Markierte Spots</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-star</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Lieblings Orte</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>


        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Country</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>

    <v-app-bar app rigt color="orange"

       >
      <v-toolbar-title>Faynd</v-toolbar-title>
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon :to="{name:'Order'}">
        <v-icon>mdi-seat</v-icon>
      </v-btn>

      <v-btn v-if="!isLoggedIn" icon :to="{name:'Login'}">
        <v-icon>mdi-login</v-icon>
      </v-btn>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"  />
    </v-app-bar>

    <v-content light >
      <v-container fluid class="fill-height">
        <router-view  @login="isLoggedIn=$event"/>
      </v-container>
    </v-content>

    <v-footer app
              color="orange"
    >

      <span>&copy; Faynd 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import Layout from './components/Layout';

export default {
  name: 'App',

  components: {
    Layout
  },
  props: {
    source: String
  },
  data() {
    return {
      isLoggedIn: false,
      drawer: false,
    }
  },
  methods: {
  },
  created() {
    this.$router.push({name: 'Overview'})
  }
}
</script>
