<template>
  <v-row
    align="center"
    justify="center"
  >
    <v-col
      cols="12"
      sm="8"
      md="4"
    >
      <v-card class="elevation-12">
        <v-toolbar
          color="orange"
          dark
          flat
        >
          <v-toolbar-title class="headline mb-1"> </v-toolbar-title>
          <v-toolbar-title color="black"> LOGIN </v-toolbar-title>
          <v-spacer/>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                :href="source"
                icon
                large
                target="_blank"
                v-on="on"
              >
                <v-icon>mdi-code-tags</v-icon>
              </v-btn>
            </template>
            <span>Source</span>
          </v-tooltip>
          <v-tooltip right>
            <template v-slot:activator="{ on }">
              <v-btn
                icon
                large
                href="https://codepen.io/johnjleider/pen/pMvGQO"
                target="_blank"
                v-on="on"
              >
                <v-icon>mdi-codepen</v-icon>
              </v-btn>
            </template>
            <span>Codepen</span>
          </v-tooltip>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
              label="Name"
              name="login"
              prepend-icon="mdi-account"
              icon color="orange"
              type="text"
              :value="Users = require('../assets/data/Users.json')"
            />

            <v-text-field
              id="password"
              label="Password"
              name="password"
              prepend-icon="mdi-textbox-password"
              icon color="orange"
              type="password"
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn color="orange"
             @click="$emit('login', true); $router.push({name:'Overview'})">
            Login
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    source: String
  },
  data() {
    return {
      user: {},
      users: {}
    }
  },
  methods: {
    login() {
      db.connect()
        .then(()=>{
          this.$emit('login', true)
        })
    }
  },
  created() {
    this.user = require('../assets/data/profile')
    this.users = require('../assets/data/Users.json')

  }
}
</script>