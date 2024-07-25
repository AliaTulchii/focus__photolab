import '../sass/components/_start.scss'
import '../sass/components/_slot.scss'
import Location from '../components/Location/Location'
import Booking from '../components/Booking/Booking'
import RulesOffers from '../components/RulesOffers/RulesOffers'
import Feedback from '../components/Feedback/Feedback'
import logo from '../images/photo.png'



const Start= () => {


    return (
      <div className='start container'>
        <a href="https://www.instagram.com/focus.photolab/?utm_source=ig_web_button_share_sheet" className='logo'>
          <img src={logo} alt="logo" className='logo__img' />
        <h1 className='logo__title '>FOCUS PHOTOLAB</h1>
        </a>
        <h2 className='start__title title'>Бронювання</h2>
        <Booking/>        
        <Location />
        <RulesOffers />
        <Feedback/>        
        </div>
  )
}

export default Start
