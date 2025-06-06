
import ImageGrid from '../../components/Imagegrid/ImageGrid'
import Connect  from '../../components/Connect/Connect'
import Services from '../../components/HeroService/Services'
import Testimonial from '../../components/Testimonials/Testimonial'
import Footer from '../../components/Footer/Footer'

const HomePage = () => {
  return (
   <div>
     <ImageGrid/>   
     <Services/>
     <Testimonial/>
     <Connect/>
     <Footer/>
   </div>
  )
}

export default HomePage