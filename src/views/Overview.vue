<template>
  <v-card
          class="mx-auto"
          max-width="fill-height"
          tile
  >
    <v-img
            height="50%"
            width="100%"
    >
      <v-row
              align="end"
              class="fill-height"
      >
        <v-col
                align-self="start"
                class="pa-0"
                cols="12"
        >
          <v-row align="center" justify="center">
            <v-img
                    src="https://scontent-dus1-1.cdninstagram.com/v/t51.2885-19/s320x320/79730392_2709007845844791_6838775016947974144_n.jpg?_nc_ht=scontent-dus1-1.cdninstagram.com&_nc_ohc=dRXHfoRTWBQAX9myyLF&oh=d5620e0a7f808ce2cb1c141d602984d8&oe=5E9EC17B"

                    aspect-ratio="1"
                    class="grey lighten-2"
                    max-width="300"
                    max-height="250"
            >
              <template v-slot:placeholder>
                <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                >
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-row>

        </v-col>
        <v-col class="py-0">
          <v-list-item
                  color="rgba(0, 0, 0, .4)"
                  dark
          >
            <v-list-item-content>
              <v-list-item-title class="title" style="color:black">Tommy Pham</v-list-item-title>
              <v-list-item-subtitle style="color:black">Student</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-container style="max-width: 1000px;">
            <v-timeline dense clipped>
              <v-timeline-item
                      fill-dot
                      class="white--text mb-12"
                      color="orange"
                      large
              >
                <template v-slot:icon>
                  <span>TP</span>
                </template>
                <v-text-field
                        v-model="input"
                        hide-details
                        flat
                        label="Leave a comment about your recent activity..."
                        solo
                        @keydown.enter="comment"
                >
                  <template v-slot:append>
                    <v-btn
                            class="mx-0"
                            depressed
                            @click="comment"
                    >
                      Post
                    </v-btn>
                  </template>
                </v-text-field>
              </v-timeline-item>

              <v-slide-x-transition
                      group
              >
                <v-timeline-item
                        v-for="event in timeline"
                        :key="event.id"
                        class="mb-4"
                        color="pink"
                        small
                >
                  <v-row justify="space-between">
                    <v-col cols="7" v-text="event.text"></v-col>
                    <v-col class="text-right" cols="5" v-text="event.time"></v-col>
                  </v-row>
                </v-timeline-item>
              </v-slide-x-transition>

              <v-timeline-item
                      class="mb-6"
                      hide-dot
              >
                <span class="title" style="color:darkorange;font-weight:400; .textLarge{font-size: 2em;}">TODAY</span>
              </v-timeline-item>

              <v-timeline-item
                      class="mb-4"
                      color="orange"
                      icon-color="orange lighten-2"
                      small
              >
                <v-row justify="space-between">
                  <v-col cols="7">Pigalle Basketball - Basketball Court -75009 Paris / very nice people / great location </v-col>
                  <v-col class="text-right" cols="5">17:00 </v-col>
                  <v-avatar
                          class="profile"
                          color="orange"
                          size="264"
                          tile
                  >


                    <v-img src="https://s3-media0.fl.yelpcdn.com/bphoto/eLDC-hHcJxnjH-lZet557w/o.jpg""></v-img>
                  </v-avatar>
                </v-row>
              </v-timeline-item>

              <v-timeline-item
                      class="mb-4"
                      small
              >
                <v-row justify="space-between">
                  <v-col cols="7">
                    <v-chip
                            class="white--text ml-0"
                            color="green"
                            label
                            small
                    >
                      NEW ACTIVITY
                    </v-chip>
                    In Cologne. Check it out !
                  </v-col>
                  <v-col class="text-right" cols="5">15:00</v-col>
                </v-row>
              </v-timeline-item>

              <v-timeline-item
                      class="mb-4"
                      color="red"
                      small
              >
                <v-row justify="space-between">
                  <v-col cols="7">
                    Your registration at the Pigalle Basketball is confirmed (pigallebasketball@vuetifyjs.com).
                  </v-col>
                  <v-col class="text-right" cols="5">10:00</v-col>
                </v-row>
              </v-timeline-item>

              <v-timeline-item
                      class="mb-4"
                      hide-dot
              >
                <v-btn
                        class="mx-0"
                        color="white"
                >
                  Resend Email
                </v-btn>
              </v-timeline-item>

              <v-timeline-item
                      color="red"
                      small
              >
                <v-row justify="space-between">
                  <v-col cols="7">
                    John Leider send you a Message.
                  </v-col>
                  <v-col class="text-right" cols="5">15:25</v-col>
                </v-row>
              </v-timeline-item>

              <v-timeline-item
                      class="mb-6"
                      hide-dot
              >
                <span class="title" style="color:darkorange;font-weight:400; .textLarge{font-size: 2em;}">FRIDAY</span>
              </v-timeline-item>

              <v-timeline-item
                      class="mb-4"
                      color="red"
                      small
              >
                <v-row justify="space-between">
                  <v-col cols="7">
                    A $25.00 USD payment was processed on PayPal Express Checkout for Millennium Dance Complex in Cologne
                  </v-col>
                  <v-col class="text-right" cols="5">22:30</v-col>
                </v-row>
              </v-timeline-item>

              <v-timeline-item
                      color="orange"
                      small
              >
                <v-row justify="space-between">
                  <v-col cols="7">

My first time at the Millennium Dance Complex Cologne and I loved it. Meet a lot of people there and thru faynd. activities. I would 100% recommend it.
                  </v-col>
                  <v-col class="text-right" cols="5">21:00</v-col>

                </v-row>
              </v-timeline-item>


              <v-timeline-item
                      class="mb-4"
                      color="red"
                      small
              >
                <v-row justify="space-between">
                  <v-col cols="7">
                    Your registration at the Millennium Dance Complex in Cologne is confirmed (milleniumdacne@vuetifyjs.com).
                  </v-col>
                  <v-col class="text-right" cols="5">13:00</v-col>
                </v-row>
              </v-timeline-item>

              <v-timeline-item
                      class="mb-4"
                      hide-dot
              >
                <v-btn
                        class="mx-0"
                        color="white"
                >
                  Resend Email
                </v-btn>
              </v-timeline-item>

              <v-timeline-item
              class="mb-6"
              hide-dot
              >
              <span class="title" style="color:darkorange;font-weight:400; .textLarge{font-size: 2em;}">07.01.2020</span>
              </v-timeline-item>

              <v-timeline-item
                      class="mb-4"
                      color="red"
                      small
              >
                <v-row justify="space-between">
                  <v-col cols="7">
                    A $50.00 USD payment was processed on PayPal Express Checkout for Muay Thai in Thailand:
                  </v-col>
                  <v-col class="text-right" cols="5">20:00</v-col>
                </v-row>
              </v-timeline-item>

              <v-timeline-item
                      color="orange"
                      small
              >
                <v-row justify="space-between">
                  <v-col cols="7">
                    I was at the Muay Thai Thailand and it was an once in a life time experience! Try it out when you are in Thailand. Don't miss it out!
                  </v-col>
                  <v-col class="text-right" cols="5">18:30 </v-col>
                  <v-avatar
                          class="profile"
                          color="orange"
                          size="264"
                          tile
                  >


                    <v-img src="https://316929-970613-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/03/NoPath-Copy-24.jpg""></v-img>
                  </v-avatar>
                </v-row>
              </v-timeline-item>



                      </v-timeline>
                    </v-container>


        </v-col>
      </v-row>
    </v-img>
  </v-card>

</template>
