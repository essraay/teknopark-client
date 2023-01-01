import { useRoutes } from 'react-router-dom'
import routes from './routes'
import "@coreui/coreui/dist/css/coreui.min.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/style.scss'
import './vendor/bootstrap/css/bootstrap.min.css'
import './fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import './vendor/animate/animate.css'
import './vendor/css-hamburgers/hamburgers.min.css'
import './vendor/animsition/css/animsition.min.css'
import './vendor/revolution/css/layers.css'
import './vendor/revolution/css/navigation.css'
import './vendor/revolution/css/settings.css'
import './vendor/select2/select2.min.css'
import './vendor/slick/slick.css'
import './vendor/MagnificPopup/magnific-popup.css'
import './css/util.min.css'
import './css/main.css'
import 'swiper/css'
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export default function App() {
  return useRoutes(routes)
}

