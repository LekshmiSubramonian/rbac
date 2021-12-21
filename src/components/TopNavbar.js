import React from 'react'
import {BiAnchor} from 'react-icons/bi'
import {AiOutlineStar} from 'react-icons/ai'
import './TopNavbar.css'
import {Link} from 'react-router-dom';

function TopNavbar(props) {

    return (
        <div className='topnavbar'>
            <div className='topnavbar-left'>
                    <Link to="" className='topnav-icons'   >
                        {props.menu}
                    </Link>
                    
                <h2>India</h2>
            </div>
            <div className='topnavbar-right'>
                <p>India</p>
                <p>Welcome Admin</p>
                <Link to="" className='topnav-icons'  >
                        <BiAnchor  />
                </Link>
                <Link to="" className='topnav-icons'  >
                    <AiOutlineStar  />
                </Link>
            </div>
        </div>
    )
}

export default TopNavbar
