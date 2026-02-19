<template>
  <div class="demo-viewer">
    <ClientOnly>
      <vc-viewer ref="viewerRef">
        <vc-primitive-tileset
          ref="primitiveRef"
          url="https://zouyaoji.top/vue-cesium/SampleData/Cesium3DTiles/Tilesets/dayanta/tileset.json"
          @ready="onReady"
          @click="onClicked"
        />
      </vc-viewer>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import * as Cesium from 'cesium'
const primitiveRef = ref()

const onReady = ({ cesiumObject: tileset, viewer }: any) => {
  const cartographic = Cesium.Cartographic.fromCartesian(tileset.boundingSphere.center)

  const surface = Cesium.Cartesian3.fromRadians(
    cartographic.longitude,
    cartographic.latitude,
    cartographic.height
  )

  const offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 0)

  const translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3())

  tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation)

  viewer.zoomTo(tileset)
}

const onClicked = (e: any) => {
  console.log(e)
}

const unload = () => {
  primitiveRef.value?.unload()
}

const load = () => {
  primitiveRef.value?.load()
}

const reload = () => {
  primitiveRef.value?.reload()
}
</script>

<style scoped>
.demo-viewer {
  height: 100vh;
}

.demo-toolbar {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10;
  display: flex;
  gap: 10px;
}
</style>
