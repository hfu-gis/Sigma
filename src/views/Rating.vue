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
                    v-model="rating"
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
            rating: 4.5,
        }),
    }
</script>
