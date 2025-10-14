
import BlogSection from '../../components/landing/Home/BlogSection'
import ContactSection from '../../components/landing/Home/ContactSection'
import HeroSection from '../../components/landing/Home/HeroSection'
import Projects from '../../components/landing/Home/Projects'
import ReviewSection from '../../components/landing/Home/ReviewSection'
import ServicesSection from '../../components/landing/Home/services'
import TeamMembers from '../../components/landing/Home/TeamMembers'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection/>
      <Projects/>
      <TeamMembers/>
      <ReviewSection/>
      <BlogSection/>
      <ContactSection />
    </div>
  )
}

export default Home