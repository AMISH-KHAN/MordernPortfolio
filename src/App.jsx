
import About from './Components/About'
import Footer from './Components/Footer'
import Github from './Components/Github'
import Header from './Components/Header'
import Projoects from './Components/Projoects'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
function App() {

  return (
    <>
      <Header />
      <About />
      <Projoects />
      <Github/>
      <Footer/>
    </>
  )
}

export default App
