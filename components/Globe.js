
import random from 'random'
import createGlobe from 'cobe'
import { useEffect, useRef } from 'react'
import { useSpring } from 'react-spring'
import {QRCodeSVG} from 'qrcode.react'
import { Toaster, toast } from 'sonner'
import { ChangeEvent, useState } from 'react'
import { useInterval } from 'usehooks-ts'
import { countries, getRandomLocation, colos } from '../data/locations'
import { things, thingEvents, transactions, transactionEvents, locationTypes, locationIcons } from '../data/events'


export function Globe() {
  // let location = [0,0]
  const [markers, setMarkers] = useState()
  const [cf, setCF] = useState()
  const canvasRef = useRef()
  const locationToAngles = (lat, long) => {
    return [Math.PI - ((long * Math.PI) / 180 - Math.PI / 2), (lat * Math.PI) / 180]
  }
  const focusRef = useRef([0, 0])
  useInterval(() => {
    const eventLocation = random.choice(['visitor', 'colo', 'country', 'country', 'global', 'global', 'global'])
    const eventType = random.choice(['thing', 'thing', 'transaction'])
    const thing = eventType == 'thing' ? random.choice(Object.keys(things)) : random.choice(Object.keys(transactions))
    const event = eventType == 'thing' ? random.choice(Object.keys(thingEvents)) : random.choice(Object.keys(transactionEvents))
    const locationType = eventType == 'transaction' ? 'Office' : random.choice(Object.keys(locationTypes))
    const location = eventLocation == 'global' ? getRandomLocation() :
                     eventLocation == 'country' ? getRandomLocation(cf.country) :
                     eventLocation == 'colo' ? colos[cf.colo] : undefined
    const country = location ? countries[location.cca2] : countries[cf?.country]
    if (location) {
      focusRef.current = locationToAngles(location.lat, location.lon)
    } else if (cf?.latitude) {
      focusRef.current = locationToAngles(cf.latitude, cf.longitude)
    }
  
    const flag = country?.flag ?? '🌐'

    toast(
      <div className='text-sm flex flex-col'>
        <div className='text-lg font-bold mb-2'>{thing} {event} {things[thing] ?? random.choice(['🧾','📄','📃','📑'])}</div>
        <div>{locationIcons[locationType]} {locationType} {flag} {location?.city ?? cf?.city}, {country?.name} </div>
        {/* <QRCodeSVG value='https://reactjs.org/' size={64} /> */}
      </div>
    )
  }, 2000)
  useEffect(() => {
    let width = 0;
    let currentPhi = 0;
    let currentTheta = 0;
    const doublePi = Math.PI * 2;
    const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth)
    window.addEventListener('resize', onResize)
    onResize()
    fetch('https://workers.cloudflare.com/cf.json').then(res => res.json()).then(data => {
      // alert(JSON.stringify(cf))
      const location = [data.latitude, data.longitude]
      const country = countries[data.country]
      focusRef.current = locationToAngles(...location)
      toast(
      <div className='text-sm flex flex-col'>
        <div className='text-lg font-bold mb-2'>Customer Visited 🧑‍💻</div>
        {country?.flag} {data.city}, {data.region}, {country.name}
        {/* <QRCodeSVG value='https://reactjs.org/' size={64} /> */}
      </div>
      // <div><span className='text-xl font-bold pb-3'>Customer Visited</span><br/>{country?.flag} {data.city}, {data.region}, {country.name}</div>
      )
      setCF(data)
    })
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 3,
      mapSamples: 16000,
      mapBrightness: 1.2,
      baseColor: [1, 1, 1],
      markerColor: [251 / 255, 200 / 255, 21 / 255],
      glowColor: [1.2, 1.2, 1.2],
      // markers: locations.map(location => ({
      //   location: [location.lat, location.lon],
      //   size: 0.1
      // })),
      markers: [
        // { location, size: 0.1 }
        // { location: [25.7931995392, -80.2906036377], size: 0.1},
        { location: [32.8968009949, -97.0380020142], size: 0.1},
        { location: [41.97859955, -87.90480042], size: 0.1},
        { location: [40.6925010681, -74.1687011719], size: 0.1},
        { location: [37.78, -122.412], size: 0.1},
        { location: [52.52, 13.405], size: 0.1},
        { location: [35.676, 139.65], size: 0.1},
        { location: [-34.60, -58.38], size: 0.1},
      ],
      onRender: (state) => {
        state.phi = currentPhi
        state.theta = currentTheta
        const [focusPhi, focusTheta] = focusRef.current
        const distPositive = (focusPhi - currentPhi + doublePi) % doublePi
        const distNegative = (currentPhi - focusPhi + doublePi) % doublePi
        // Control the speed
        if (distPositive < distNegative) {
          currentPhi += distPositive * 0.08
        } else {
          currentPhi -= distNegative * 0.08
        }
        currentTheta = currentTheta * 0.92 + focusTheta * 0.08
        state.width = width * 2
        state.height = width * 2
        // if (state.markers[0].location[0] != cf.latitude) {
        //   state.markers[0].location = [cf.latitude, cf.longitude]
        // }
      }
    })
    setTimeout(() => canvasRef.current.style.opacity = '1')
    return () => globe.destroy()
  }, [])
  return <div style={{
    width: '100%',
    maxWidth: '800px',
    // maxHeight: '100%',
    aspectRatio: 1,
    margin: 'auto',
    position: 'relative',
  }}>
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
        contain: 'layout paint size',
        opacity: 0,
        transition: 'opacity 1s ease',
      }}
    />
  </div>
}