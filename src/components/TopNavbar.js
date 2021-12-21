import React from 'react'
import {CgProfile} from 'react-icons/cg'
import './TopNavbar.css'
import {Link} from 'react-router-dom';

function TopNavbar(props) {

    return (
        <div className='topnavbar'>
            <div className='topnavbar-left'>
                    <Link to="" className='topnav-icons'   >
                        {props.menu}
                    </Link>
            </div>
            <div className='topnavbar-right'>
                <div className='profile'>
                    <CgProfile className='profile-icon' />
                    <p>Logout</p>
                </div>
            </div>
        </div>
    )
}

export default TopNavbar
