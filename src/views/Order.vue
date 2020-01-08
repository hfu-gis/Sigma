<template>
<div id="Map">
  <gmap-map
          :center="{lat:48.0501442, lng:8.2014192}"
          :zoom="7"
          map-type-id="terrain"
          style="width: 1200px; height: 700px"
  >
    <gmap-marker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            @click="center=m.position"
    />
  </gmap-map>
  </div>
</template>

<script>
export default {
// gebt jeder Page einen eigenen Namen
  name: 'Order',

// benötigte Komponenten
  components: {},

// entspricht den HTML-Attributen
  props: {},

// Variablen-Speicher
  data() {
    return {
      products: [
      ],
      name: {
        type: String
      },
      price: {
        type: Number
      }
    }
  },

// reagieren auf prop-Veränderung
  watch: {},

// interne Methoden
  methods: {
    addToCatolog(id) {
      let docRef = db.collection('products').doc(id)
      docRef.set({
        name: this.name,
        price: this.price
      })
    }
  },


// Initialisierung
  created() {
    db.collection('products')
      .then((productsFromDB) => {
        this.products = productsFromDB
      })
      .catch((err) => {
        console.log('Error getting documents', err)
      })
  }
}
</script>

<style scoped>
  /* CSS für diese Seite hier einfügen */
</style>
