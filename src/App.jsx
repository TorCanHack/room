import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from './images/mobile-image-hero-1.jpg'
import image2 from './images/mobile-image-hero-2.jpg'
import image3 from './images//mobile-image-hero-3.jpg'
import Slider from 'react-slick';
import nextArrow from './images/icon-angle-right.svg'
import prevArrow from './images/icon-angle-left.svg'
import image_about_dark from './images/image-about-dark.jpg'
import logo from './images/logo.svg'
import hamburger from './images/icon-hamburger.svg'
import closeMenu from './images/icon-close.svg'
import { useState } from 'react';
import arrow from './images/icon-arrow.svg'
import image_about_light from './images/image-about-light.jpg'

const CustomNextArrow = (props) => {
  const { onClick } = props

  return (
    <button className='absolute -right-0.5 bottom-322 transform -translate-y-1/2 z-10 bg-black w-14 h-14'
    onClick={onClick}
    >
      <img src={nextArrow} alt='next arrow' className='mx-auto'/>

    </button>
  )
}

const CustomPrevArrow = (props) => {
  const { onClick } = props

  return (
    <button className='absolute left-17 bottom-322 transform -translate-y-1/2 z-10 bg-black w-14 h-14'
    onClick={onClick}
    >
      <img src={prevArrow} alt='next arrow' className='mx-auto'/>

    </button>
  )
}

function App() {

  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(true)  
  }

  const handleCloseMenu = () => {
    setShowMenu(false)
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow/>,
    prevArrow: <CustomPrevArrow/>
    
  };
  

  return (
    <div className='flex flex-col justify-center items-center font-spartan'>
      <div className={`${showMenu ? 'flex' : 'hidden'} absolute top-11 bg-black h-1538 w-375 opacity-50 z-10`}></div>
      <header className='flex flex-row  w-375 relative top-14 z-10 px-4'>
        <button onClick={handleShowMenu}>
          <img src={hamburger} alt='menu'/>
        </button>
        <nav className={`${showMenu ? 'flex' : 'hidden'} items-center justify-between bg-white h-28 absolute -top-11 -right-0 z-30 w-375 px-4`}>
          <button onClick={handleCloseMenu}>
            <img src={closeMenu} alt='close menu'/>
          </button>
          <ul className=' flex flex-row justify-between px-4 w-72 '>
            <li>Home</li> 
            <li>Shop</li> 
            <li>About</li> 
            <li>Contact</li>
          </ul>
        </nav>
        
        <img src={logo} alt='logo' className='mx-auto'/>

      </header>
      <main className=' w-375'>
        <Slider {...settings}>
          <article>
            <div>
              <img src={image1} alt='hero1'/>
            </div>

            <div className='py-12 px-4' >
              <h1 className='text-40 font-semibold tracking-tight text-left leading-none mb-4'>Discover innovative ways to decorate</h1> 

              <p className='text-left leading-5 text-mgray'>We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.</p> 

              <div className='w-232 flex flex-row justify-between my-8'>
                <p className='leading-4 tracking-wide12 font-medium'>SHOP NOW</p>
                <button> 
                  <img src={arrow} alt='arrow sign'/>
                </button>

              </div>

              

            </div>

          </article>
          <article>
            <div>
              <img src={image2} alt='hero1'/>
            </div>

            <div className='py-12 px-4'>
              <h1 className='text-40 font-semibold tracking-tight text-left leading-none mb-4'>We are available all across the globe</h1>
      
              <p className='text-left leading-5 text-mgray'>With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.</p> 
      
              <div className='w-232 flex flex-row justify-between my-8'>
                <p className='leading-4 tracking-wide12 font-medium'>SHOP NOW</p>
                <button> 
                  <img src={arrow} alt='arrow sign'/>
                </button>

              </div>

            </div>

          </article>

          <article>
            <div>
              <img src={image3} alt='hero1'/>
            </div>

            <div className='py-12 px-4'>
              <h1 className='text-40 font-semibold tracking-tight text-left leading-none mb-4'>Manufactured with the best materials</h1> 
              <p className='text-left leading-5 text-mgray'>Our modern furniture store provide a high level of quality. Our company has invested in  advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.</p> 

              <div className='w-232 flex flex-row justify-between my-8'>
                <p className='leading-4 tracking-wide12 font-medium'>SHOP NOW</p>
                <button> 
                  <img src={arrow} alt='arrow sign'/>
                </button>

              </div>
          </div>

          </article>
          
          
          
        </Slider> 

        <img src={image_about_dark} alt='chair and stool' className='-mt-10'/>

        <article className='text-left py-8 px-4'>
          <h2 className='font-bold  leading-cutsome22 tracking-wide5 text-sm mb-4'>ABOUT OUR FURNITURE</h2>

          <p className='font-medium text-mgray leading-cutsome22'>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>

        </article>      

        <img src={image_about_light} alt='white chair'/>

      </main>
    </div>
      
  )
}

export default App
