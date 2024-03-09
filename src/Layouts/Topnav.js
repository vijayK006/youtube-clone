import React from 'react';
import logo from '../Assets/img/YouTube.png';
import { IoSearchOutline } from "react-icons/io5";
import { VscMenu } from "react-icons/vsc";


const Topnav = () => {
  return (
    <>
<nav>
<div className='logo'>
<VscMenu />
<img src={logo} alt='youtube-logo' />
</div>

<div className='search-bar'>
<form>
<input type='text' placeholder='Search' name='search-v' id='search-v'/>
<button type='button'><IoSearchOutline /></button>
</form> 
</div>

<div className='stat'>

</div>

</nav>
    </>
  )
}

export default Topnav;