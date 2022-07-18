import '../styles/globals.css'
import { Home, About, Portfolio, Contact } from './Containers'
import { Navbar } from './Components'

function MyApp({ Component, pageProps }) {
  return (
    <div className='App'>
      <Navbar />
      <Home/>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
