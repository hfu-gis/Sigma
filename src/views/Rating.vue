<template>
    <v-card
            class="mx-auto elevation-20"
            color="orange"
            dark
            style="max-width: 400px;"
    >
        <v-row justify="space-between">
            <v-col cols="8">
                <v-card-title primary-title>
                    <div>
                        <div class="headline">Pigalle Basketball</div>
                        <div>Basketball Court</div>
                        <div>75009 Paris</div>
                    </div>
                </v-card-title>
            </v-col>
            <v-img
                    class="shrink"
                    contain
                    height="200px"
                    src="https://res.cloudinary.com/cond-nast-germany/iu/s--XHid3xLd--/c_limit,f_auto,q_auto:good,w_800/v1/0/_XL10269jpg.jpg"
                    style="flex-basis: 1200px"
            ></v-img>
        </v-row>
        <v-divider dark></v-divider>
        <v-card-actions class="pa-4">
            Rate this activity
            <v-spacer></v-spacer>
            <span class="grey--text text--lighten-2 caption mr-2">
        ({{ rating }})
      </span>
            <v-rating
                    v-model="rating1"
                    background-color="white"
                    color="yellow accent-4"
                    dense
                    half-increments
                    hover
                    size="18"
            ></v-rating>
        </v-card-actions>

        <v-row justify="space-between">
            <v-col cols="8">
                <v-card-title primary-title>
                    <div>
                        <div class="headline">Millennium Dance <br>Complex</br></div>
                        <div>Dance</div>
                        <div>50827 Köln</div>
                    </div>
                </v-card-title>
            </v-col>
            <v-img
                    class="shrink"
                    contain
                    height="200px"
                    src="https://static.wixstatic.com/media/c5dcd1_335b6f6d12a54e32b2a8a7ba5f2a073d~mv2.jpg/v1/fill/w_1200%2Ch_800%2Cal_c%2Cq_90/file.jpg"
                    style="flex-basis: 1200px"
            ></v-img>
        </v-row>
        <v-divider dark></v-divider>
        <v-card-actions class="pa-4">
            Rate this activity
            <v-spacer></v-spacer>
            <span class="grey--text text--lighten-2 caption mr-2">
        ({{ rating }})
      </span>
            <v-rating
                    v-model="rating2"
                    background-color="white"
                    color="yellow accent-4"
                    dense
                    half-increments
                    hover
                    size="18"
            ></v-rating>
        </v-card-actions>

        <v-row justify="space-between">
            <v-col cols="8">
                <v-card-title primary-title>
                    <div>
                        <div class="headline">DRAGON MUAY THAI CAMP</div>
                        <div>Muay Thai</div>
                        <div>83130 Muang Phuket </div>
                    </div>
                </v-card-title>
            </v-col>
            <v-img
                    class="shrink"
                    contain
                    height="200px"
                    src="http://www.phuketdragonmuaythai.com/wp-content/uploads/2018/05/S__3121166-1024x768.jpg"
                    style="flex-basis: 1500px"
            ></v-img>
        </v-row>
        <v-divider dark></v-divider>
        <v-card-actions class="pa-4">
            Rate this activity
            <v-spacer></v-spacer>
            <span class="grey--text text--lighten-2 caption mr-2">
        ({{ rating }})
      </span>
            <v-rating
                    v-model="rating3"
                    background-color="white"
                    color="yellow accent-4"
                    dense
                    half-increments
                    hover
                    size="18"
            ></v-rating>
        </v-card-actions>
    </v-card>


</template>

<script>
    export default {
        data: () => ({
            rating:1,
            rating1: Math.floor(Math.random() * 5 + 1),
            rating2: Math.floor(Math.random() * 5 + 1),
            rating3: Math.floor(Math.random() * 5 + 1),
        }),
    }
</script>
