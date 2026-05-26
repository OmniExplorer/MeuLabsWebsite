import Layout from '../components/Layout'
import '../styles/globals.css'
import '../assets/css/home.css'
import '../assets/css/home-hero.css'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
