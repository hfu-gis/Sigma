<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app color="orange"
      right
    >
      <v-list dense>
        <v-list-item link :to="{name:'Overview'}">
          <v-list-item-action>
            <v-icon color="white">mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>My Profile</v-list-item-title>
          </v-list-item-content>
        </v-list-item>


        <v-list-item link :to="{name:'Order'}">
          <v-list-item-action>
            <v-icon color="white">mdi-map</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Map</v-list-item-title>
          </v-list-item-content>
        </v-list-item>


        <v-list-item link >
          <v-list-item-action>
            <v-icon color="white">mdi-star</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>My Favorite Spots</v-list-item-title>
          </v-list-item-content>
        </v-list-item>


        <v-list-item link :to="{name:'Chat'}">
          <v-list-item-action>
              <v-icon color="white">mdi-chat</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Chats</v-list-item-title>
          </v-list-item-content>
        </v-list-item>


        <v-list-item link>
          <v-list-item-action>
            <v-icon color="white">mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app rigt color="orange"

       >
      <v-img
              class="mx-2"
              src="https://i.ibb.co/6JGSWGz/faynd-logo.jpg"
              max-height="120"
              max-width="155"
              contain
      ></v-img>
      <v-spacer />
      <v-btn icon>
        <v-icon color="white">mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon :to="{name:'Order'}">
        <v-icon color="white">mdi-map</v-icon>
      </v-btn>

      <v-btn icon :to="{name:'Registration'}">
        <v-icon color="white">mdi-account-plus</v-icon>
      </v-btn>

      <v-btn v-if="!isLoggedIn" icon :to="{name:'Login'}">
        <v-icon color="white">mdi-login</v-icon>
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
