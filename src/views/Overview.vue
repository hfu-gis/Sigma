<template>
  <v-container
          fill-height
          fluid
          grid-list-xl>
    <v-layout
            justify-center
            wrap
    >
      <v-flex
              xs12
              md8
      >
        <material-card
                color="orange"
                title="Edit Profile"
                text="Complete your profile"
        >
          <v-form>
            <v-container py-0>
              <v-layout wrap>
                <v-flex
                        xs12
                        md4
                >
                  <v-text-field
                          label="Company (disabled)"
                          disabled/>
                </v-flex>
                <v-flex
                        xs12
                        md4
                >
                  <v-text-field
                          class="purple-input"
                          label="User Name"
                  />
                </v-flex>
                <v-flex
                        xs12
                        md4
                >
                  <v-text-field
                          label="Email"
                          class="purple-input"/>
                </v-flex>
                <v-flex
                        xs12
                        md6
                >
                  <v-text-field
                          label="Vorname"
                          class="purple-input"/>
                </v-flex>
                <v-flex
                        xs12
                        md6
                >
                  <v-text-field
                          label="Nachname"
                          class="purple-input"/>
                </v-flex>
                <v-flex
                        xs12
                        md12
                >
                  <v-text-field
                          label="Adresse"
                          class="purple-input"/>
                </v-flex>
                <v-flex
                        xs12
                        md4>
                  <v-text-field
                          label="Stadt"
                          class="purple-input"/>
                </v-flex>
                <v-flex
                        xs12
                        md4>
                  <v-text-field
                          label="Land"
                          class="purple-input"/>
                </v-flex>
                <v-flex
                        xs12
                        md4>
                  <v-text-field
                          class="purple-input"
                          label="PLZ"
                          type="number"/>
                </v-flex>
                <v-flex xs12>
                  <v-textarea
                          class="purple-input"
                          label="Über mich"
                          value="schreib was über dich "
                  />
                </v-flex>
                <v-flex
                        xs12
                        text-xs-right
                >
                  <v-btn
                          class="mx-0 font-weight-light"
                          color="success"
                  >
                    Update Profile
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </material-card>
      </v-flex>
      <v-flex
              xs12
              md4
      >
        <material-card class="v-card-profile">
          <v-avatar
                  slot="offset"
                  class="mx-auto d-block"
                  size="130"
          >
            <img
                    src="https://scontent-frx5-1.cdninstagram.com/v/t51.2885-19/s320x320/70507602_673391699815750_6621940766920933376_n.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com&oh=5c744dda6c8a9601f3ba93117ab05d61&oe=5E77CB58"
            >
          </v-avatar>
          <v-card-text class="text-xs-center">
            <h6 class="category text-gray font-weight-thin mb-3">Idiot</h6>
            <h4 class="card-title font-weight-light">Tommy Pham</h4>
            <p class="card-description font-weight-light">Heilbronn | 22 | Single</p>
            <v-btn
                    color="success"
                    round
                    class="font-weight-light"
            >Follow</v-btn>
          </v-card-text>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    //
  }
</script>
