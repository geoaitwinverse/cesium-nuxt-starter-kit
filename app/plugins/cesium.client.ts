// TypeScript declaration for window.Cesium
declare global {
  interface Window {
    Cesium: any
  }
}

export default defineNuxtPlugin(() => {
  if (process.client) {
    // Wait for Cesium to be loaded from the script tag
    const checkCesium = () => {
      return new Promise((resolve) => {
        if (window.Cesium) {
          resolve(window.Cesium)
        } else {
          const interval = setInterval(() => {
            if (window.Cesium) {
              clearInterval(interval)
              resolve(window.Cesium)
            }
          }, 100)
        }
      })
    }

    return {
      provide: {
        cesium: checkCesium
      }
    }
  }
})
