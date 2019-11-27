<template>
  <v-app>
    <v-navigation-drawer
            v-model="drawer"
            app

    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
        <v-list-item-action>
          <v-icon>mdi-heart --theme-light- theme--light"</v-icon>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>Persönliche Daten</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-star theme--light</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Gespeicherte Spots</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Kontakt</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
            app
            color="orange"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Faynd</v-toolbar-title>
      <span class="v-content "></span>

      <span class="v-content "></span>
      <a href="mailto:test@test.de" ><v-icon right>mdi-email</v-icon></a>
      <v-icon right>mdi-account theme--light</v-icon>
    </v-app-bar>

    <v-content>
      <v-container
              class="fill-height"
              fluid
      >
        <v-row
                align="center"
                justify="center"
        >
          <v-col class="text-center">
            <v-tooltip left>
              <template v-slot:activator="{ on }">
                <v-btn
                        :href="source"
                        icon
                        large
                        target="_blank"
                        v-on="on"
                >
                  <v-icon large>mdi-code-tags</v-icon>
                </v-btn>
              </template>
              <span>Faynd your Place</span>
            </v-tooltip>

            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn class="orange"
                        icon
                        large
                        href="https://codepen.io/johnjleider/pen/zgxeLQ"
                        target="_blank"
                        v-on="on"
                >
                  <v-icon large>mdi-codepen</v-icon>
                </v-btn>
              </template>
              <span>Codepen</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-footer
            color="orange"
            app
    >
      <span class="white--text">&copy; Faynd 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
  }
</script>