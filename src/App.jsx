import Navbar from './components/Navbar'
import Hero from './sections/Hero'

function App() {
  return (
    <>
      <Navbar />
      <div className='flex flex-col gap-[70px] px-[30px] pt-[80px] md:pt-[80px] md:px-[100px]'>
        <Hero />
        <div className='w-full flex flex-col justify-between px-[40px] py-[30px] md:px-[80px] md:py-[50px] rounded-t-[50px] gap-[20px] md:gap-[50px] md:flex-row  bg-purple'>
          <div className='flex flex-col gap-4'>
            <p className='font-semibold text-[20px]'>Fast Delivery</p>
            <p className='text-white text-[15px] opacity-60'>We understand that time is of the essence when it comes to shipping. That's why we offer fast delivery options for packages of all sizes, anywhere in the world.</p>
          </div>
          <div className='flex flex-col gap-4'>
            <p className='font-semibold text-[20px]'>Reliable Service</p>
            <p className='text-white text-[15px] opacity-60'>We pride ourselves on our reliability. We have a team of professionals who are dedicated to ensuring that your packages are delivered on time.</p>
          </div>
          <div className='flex flex-col gap-4'>
            <p className='font-semibold text-[20px]'>Secure Shipping</p>
            <p className='text-white text-[15px] opacity-60'>We use advanced tracking technology and secure handling techniques to ensure that your packages are delivered safely and securely.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
