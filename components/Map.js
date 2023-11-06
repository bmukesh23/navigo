import { useEffect, useContext } from 'react'
import mapboxgl from 'mapbox-gl'
import { NavigoContext } from '../context/navigoContext'

const style = {
  wrapper: `flex-1 h-full w-full`,
}

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

const Map = () => {
  const { pickupCoordinates, dropoffCoordinates } = useContext(NavigoContext)

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/chinchong/clnisr6eo026z01qnff7k32kh',
      center: [19.3694108, 72.7649271],
      zoom: 4,
    })

    if (pickupCoordinates) {
      addToMap(map, pickupCoordinates)
    }

    if (dropoffCoordinates) {
      addToMap(map, dropoffCoordinates)
    }

    if (pickupCoordinates && dropoffCoordinates) {
      map.fitBounds([dropoffCoordinates, pickupCoordinates], {
        padding: 400,
      })
    }
  }, [pickupCoordinates, dropoffCoordinates])

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map)
  }

  return <div className={style.wrapper} id='map' />
}

export default Map