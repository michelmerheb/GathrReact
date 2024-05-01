import { Link } from 'react-router-dom';
import LogoImage from '../assets/LoginHeaderImage.png'

export default function Header() {


  return (
    <header className="flex justify-between  items-center py-4 px-8 bg-transparent text-white">

      <div>
          <img src={LogoImage} className='rounded-full w-14 h-14'/>
      </div>

      <div className='flex flex-row px-24 justify-end text-2xl w-screen'>
          <Link to="/" className='mr-24 hover:underline hover:underline-offset-8'>Events</Link>
          <Link to="/news" className='hover:underline hover:underline-offset-8'>News</Link>
      </div>


    </header>
  );
};

