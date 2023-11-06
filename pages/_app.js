import '../styles/globals.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import { NavigoProvider } from '../context/navigoContext'

function MyApp({ Component, pageProps }) {
  return (
    <NavigoProvider>
      <Component {...pageProps} />
    </NavigoProvider>
  )
}

export default MyApp