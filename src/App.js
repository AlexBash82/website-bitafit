import { useRef } from 'react'
import './main.scss'
import Poster from './Components/Poster/Poster'
import Schedule from './Components/Schedule/Schedule'
import Promo from './Components/Promo/Promo'
import Footer from './Components/Footer/Footer'

function App() {
  const isWebP = checkBrowser()

  function checkBrowser() {
    const browser = navigator.userAgent.split(' ').reverse().shift().split('/')

    let result

    switch (browser[0]) {
      case 'Firefox':
        if (browser[1] >= 65) {
          result = true
        } else {
          result = false
        }
        break

      case 'Edge':
        if (browser[1] >= 18) {
          result = true
        } else {
          result = false
        }
        break

      case 'Safari':
        if (browser[1] >= 14) {
          result = true
        } else {
          result = false
        }
        break

      case 'Chrome':
        if (browser[1] >= 17) {
          result = true
        } else {
          result = false
        }
        break

      case 'Opera':
        if (browser[1] >= 11) {
          result = true
        } else {
          result = false
        }
        break

      default:
        result = false
        break
    }

    return result
  }

  function useScroll() {
    const htmlElRef = useRef(null)
    const htmlElRef1 = useRef(null)
    const htmlElRef2 = useRef(null)
    const executeScroll = () => {
      window.scrollTo({
        top:
          htmlElRef1.current.clientHeight +
          htmlElRef2.current.clientHeight +
          htmlElRef.current.offsetTop,
        behavior: 'smooth',
      })
    }
    return [executeScroll, htmlElRef, htmlElRef1, htmlElRef2]
  }

  const [executeScroll, elementToScrollRef, htmlElRef1, htmlElRef2] =
    useScroll()

  return (
    <div className="App">
      <Poster executeScroll={executeScroll} htmlElRef1={htmlElRef1} />
      <Schedule
        executeScroll={executeScroll}
        htmlElRef2={htmlElRef2}
        isWebP={isWebP}
      />
      <Promo elementToScrollRef={elementToScrollRef} isWebP={isWebP} />
      <Footer />
    </div>
  )
}

export default App
