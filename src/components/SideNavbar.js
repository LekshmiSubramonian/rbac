import React, { useEffect } from 'react'
import {RiAdminFill} from 'react-icons/ri'
import {AiFillDashboard, AiFillSetting, AiOutlineMenu} from 'react-icons/ai'
import {IoMdArrowDropdown} from 'react-icons/io'
import './SideNavbar.css'
import { MdSpeakerNotes } from 'react-icons/md'
import { ImCross } from 'react-icons/im'
import { FaDatabase, FaUserPlus, FaUserTag } from 'react-icons/fa'
import {MdOutlineSecurity} from 'react-icons/md'
import TopNavbar from './TopNavbar'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
 
function SideNavbar() {

    const toogleState = useSelector(state => state.toogleState)
    const dispatch = useDispatch();
   
    useEffect(() => {
        let arrow = document.querySelectorAll(".arrow");
        console.log(arrow);
        for (var i = 0; i < arrow.length; i++) {
            arrow[i].addEventListener("click", (e)=>{
            let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
            arrowParent.classList.toggle("showMenu");
            });
        }
        let sidebar = document.querySelector(".sidebar");
        let sidebarBtn = document.querySelector(".menu");
        console.log(sidebarBtn);
        sidebarBtn.addEventListener("click", ()=>{
        sidebar.classList.toggle("close");
        });

    }, [])




    return (
        <>
        <div className='sidebar close'>
            <div className="logo-details">
                <RiAdminFill className='ri-logo' />
                <span className="logo_name">RBAC</span>
            </div>
            <ul className='nav-links'>
                <li>
                    <Link to='/asset'>
                        <FaUserPlus className="ri-icons"/>
                        <span className="link_name">Asset</span>
                    </Link>
                    <ul className="sub-menu blank">
                        <li>
                            <Link className='link_name' to='/asset'>Asset</Link>
                        </li>
                    </ul>
                </li>
                {/* <li>
                    <div className="iocn-link">
                        <a href="#">
                            <FaUserPlus className="ri-icons"/>
                            <span className="link_name">Asset</span>
                        </a>
                        <IoMdArrowDropdown className='arrow' />
                    </div>
                    <ul className="sub-menu">
                        <li><a className="link_name" href="#">Asset</a></li>
                        <li>
                            <Link to='/createasset'>
                                <a>Create Asset</a>
                            </Link>
                        </li>
                        <li><a href="#">View Asset</a></li>
                    </ul>
                </li> */}
                <li>
                    <a href="#">
                        <FaUserTag className="ri-icons"/>
                        <span className="link_name">Role</span>
                    </a>
                    <ul className="sub-menu blank">
                        <li><a className="link_name" href="#">Role</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">
                        <MdOutlineSecurity className="ri-icons" />
                        <span className="link_name">Permission</span>
                    </a>
                    <ul className="sub-menu blank">
                        <li><a className="link_name" href="#">Permission</a></li>
                    </ul>
                </li>
                {/* <li>
                    <a href="#">
                        <ImCross className="ri-icons" />
                        <span className="link_name">Draft Send Date</span>
                    </a>
                    <ul className="sub-menu blank">
                        <li><a className="link_name" href="#">Draft Send Date</a></li>
                    </ul>
                </li> */}
            </ul>
        </div>
        <div className="home-content">
            <TopNavbar menu={<AiOutlineMenu className='menu' onClick={()=>dispatch({type:'TOOGLE'})}/>} />
        </div>
        </>
    )
}

export default SideNavbar;