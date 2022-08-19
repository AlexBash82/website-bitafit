import { useRef } from 'react'
import './main.scss'
import Poster from './Components/Poster/Poster'
import Schedule from './Components/Schedule/Schedule'
import Promo from './Components/Promo/Promo'
import Footer from './Components/Footer/Footer'

function App() {
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
      <Schedule executeScroll={executeScroll} htmlElRef2={htmlElRef2} />
      <Promo elementToScrollRef={elementToScrollRef} />
      <Footer />
    </div>
  )
}

export default App
