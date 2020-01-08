<template>
  <div class="map">
    <div class="google-map" id="map"></div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'GMap',
  data() {
    return {
      lat: 53,
      lng: -2
    }
  },
  methods: {
    renderMap() {
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: this.lat, lng: this.lng },
        zoom: 6,
        maxZoom: 15,
        minZoom: 3,
        streetViewControl: false
      })
    }
  },
  mounted() {
    // navigator.geolocationでuserのgeolocationにaccess
    if (navigator.geolocation) {
      // getCurrentPosition(successCallback, errorCallback, optionObject)
      // successCallbackの第一引数で緯度、経度等にaccessできる
      navigator.geolocation.getCurrentPosition(
        // 成功時のcallback
        pos => {
          this.lat = pos.coords.latitude
          this.lng = pos.coords.longitude
          this.renderMap(this.lat, this.lng)
        },
        // 失敗時のcallback
        error => {
          console.log(err)
          this.renderMap()
        },
        // optionをobjectで指定
        // maximumAgeでキャッシュを保持するmilliseconds, timeoutでタイムアウトのmilliseconds
        { maximumAge: 60000, timeout: 3000 }
      )
    } else {
      // userのgeolocationにaccessできない時は、defaultのlat, lng使用
      this.renderMap()
    }
  }
}
</script>

<style>
.google-map {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>