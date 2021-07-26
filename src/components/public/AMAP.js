// AMap.js

const key = '1c4d349d8059da8b316d260693151dfe'

export default function MapLoader() {
  return new Promise((resolve, reject) => {
    if (window.AMap) {
      resolve(window.AMap)
    } else {
      var script = document.createElement('script')
      script.type = 'text/javascript'
      script.async = true
      script.src =
        `http://webapi.amap.com/maps?v=1.4.11&callback=initAMap&key=${key}&plugin=AMap.Geocoder`
      script.onerror = reject
      document.head.appendChild(script)
    }
    window.initAMap = () => {
      resolve(window.AMap)
    }
  })
}