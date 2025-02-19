import icon from '../assets/iconIG.png'

const links = [
    { name: "Payment confirmation", href: "/payment-confirmation" },
    { name: "Terms", href: "/terms" },
    { name: "Privacy policy", href: "/privacy-policy" },
  ];
  
  export default function FooterLinks() {
    return (
    <>
    <div className='mt-40 flex justify-center '>
      <a href="https://www.instagram.com/">
        <img src={icon} alt="" />
      </a>
    </div>

    <div className="mt-10 flex justify-center text-center space-x-6 text-gray-500 text-sm">
        {links.map((link, index) => (
          <a key={index} href={link.href} className="hover:underline">
            {link.name}
          </a>
        ))}
    </div>
    <div className='text-black text-center pt-5 pb-2 text-xs'>
    <p>Hak Cipta © CONSSENTIAL Semua hak dilindungi undang-undang.</p>
    </div>
    </>
    );
  }