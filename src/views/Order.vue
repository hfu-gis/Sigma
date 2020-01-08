<template>
<div id="Map">
  <gmap-map
          :center="{lat:48.0501442, lng:8.2014192}"
          :zoom="7"
          map-type-id="terrain"
          style="width: 1250px; height: 600px"
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
          center: {lat: 48.0501442, lng: 8.2014192},
          markers: [
              {
                  position: {lat: 48.051314, lng: 8.207639}
              },
              {
                  position: {lat: 48.047491, lng: 8.201187}
              },
              {
                  position: {lat: 48.064557, lng: 8.193256}
              }
          ]
      }
  }
};
</script>

<style scoped>
  /* CSS für diese Seite hier einfügen */
</style>
