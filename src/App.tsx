import './app.css'
import mba2 from './assets/mba3.jpeg';
import mba from './assets/mbaKuning.jpeg'
import logo from './assets/logo.png'
import FooterLinks from './components/footer';


function Home() {


  return (
    <>
        <div className="container pt-24 max-w-[1240px] ">
          <div className='h-[393px] w-[744px]'>
          <div className="cover text-center">
            <h4 className="font-bold mb-40 text-white">Welcome to Conssential, where fashion meets the essence of everyday life. We create timeless, minimalist apparel designed for those who value both style and comfort.</h4>
            
            <a href='#' className='rounded-xl border-black border-2 py-3 px-10 font-bold'>SHOP NOW</a>
          </div>            
          </div>
        </div>

        {/* new Products */}
    <div className='mt-15 '>
      <h1 className='text-center font-bold text-black text-[14px]'> New Products</h1>
      <div className=" flex justify-center gap-5 ">
        {[1, 2, 3].map((_, index) => (
               <div 
               key={index} 
               className="w-[218.5px] h-[245px] "
             >
                <img src={mba} alt="" className='object-cover    ' />
                </div>
              ))}
              </div>
        </div>
 
{/* perusahaan */}
<div className="mt-15 p-5">
  {/* Grid 1 kolom di mobile, 2 kolom di tablet/desktop */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
    
    {/* Gambar di Sebelah Kiri */}
    <div className="relative flex justify-center">
      <img className="object-cover w-[327px] h-[295px] rounded-xl" src={mba} alt="Fashion" />

      {/* Logo di dalam gambar saat mobile, keluar saat tablet/desktop */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 md:static md:hidden md:mb-4">
        <img className="w-[180px] md:w-[200px]" src={logo} alt="Logo" />
      </div>
    </div>

    {/* Bagian Teks */}
    <div className="flex flex-col items-center md:items-start">
      {/* Logo keluar dari gambar dan berada di atas teks saat tablet & desktop */}
      <div className="hidden md:block mb-4">
        <img className="w-[180px] md:w-[200px]" src={logo} alt="Logo" />
      </div>

      {/* Teks */}
      <p className="text-black text-justify">
        <span className="font-extrabold text-3xl">Conssential</span> is a fashion brand focused on creating timeless, high-quality essentials that blend effortless style, comfort, and versatility. We design minimalist wardrobe staples that fit seamlessly into any lifestyle, ensuring you look and feel confident every day.
      </p>
    </div>

  </div>
</div>

{/* CONSSENTIAL X SUPREME */}
        <div className="container2 pt-24 max-w-[1240px] ">
            <div className='h-[153px] w-[392px]'>
                <div className="cover text-center">
                  <h4 className="font-bold mb-40 text-black">CONSSENTIAL X SUPREME</h4>
                </div>            
            </div>
        </div>
        <div className='p-5'>
            <p className="text-black text-justify">
              <span className="font-extrabold text-2xl">CONSSENTIAL  X  SUPREME</span> is a fashion brand focused on creating timeless, high-quality essentials that blend effortless style, comfort, and versatility. We design minimalist wardrobe staples that fit seamlessly into any lifestyle, ensuring you look and feel confident every day.
            </p>
        </div>

{/* Explore now */}
        <div className='mt-20 flex justify-center'>
          <div className="border-black  grid grid-rows-2 grid-flow-col gap-4 ">
          {/* Gambar besar di sebelah kiri */}
          <a href="/katalog" className="relative row-span-3 w-[194px] h-[380px] block md:w-[375px] md:h-[855px]">
          <img src={mba2} alt="Explore" className="object-cover w-full h-full rounded-lg " />
          <div className="absolute inset-0 flex items-center justify-center  rounded-lg">
            <span className="text-white text-lg font-bold">EXPLORE NOW</span>
          </div>
          </a>

          {/* Tiga gambar kecil di sebelah kanan */}
          {[1, 2, 3].map((_, index) => (
          <a key={index} href="/katalog" className="relative col-span-2 block ">
            <img src={mba} alt="Explore" className="object-cover w-[114px] h-[122px] rounded-lg md:w-[221px] md:h-[272px]" />
            <div className="absolute inset-0 flex items-center rounded-lg md:justify-center">
              <span className="text-white font-bold md:text-lg">EXPLORE NOW</span>
            </div>
          </a>
          ))}
          </div>
        </div>

        <FooterLinks/>
    </>
  )
}

export default Home
