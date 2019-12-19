<template>
  <div id="app">
  <gmap-map
          v-bind:center="{lat:70, lng:70}"
    v-bind:zoom="7"
    style= "width:1200px; height: 550px"
>
    <gmap-marker
            v-bind:key="index"
            v-for="(m, index) in markers"
            v-bind:position="m.position"
            v-bind:clickable="true"
            v-bind:draggable="true"
            @click="center=m.position"
    ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
  export default {
    name: 'Overview',
    data: () => {
      return {
        center: {lat: 10.0, lng: 10.0},
      }
    }
  }
</script>

<style>

</style>