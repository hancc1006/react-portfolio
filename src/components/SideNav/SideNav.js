import React from "react";
import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Mail';
import DescriptionIcon from '@material-ui/icons/Description';
import MenuIcon from '@material-ui/icons/Menu';
import Profile from '../../assets/profile.jpg';
import Background from "../../assets/snowy-mountians.jpg";
import Footer from "../Footer/Footer";
import {Link} from "react-router-dom";

function SideNav(props) {

  return (
    <>
        <ul id="slide-out" className="sidenav sidenav-fixed">
            <li>
                <div className="user-view">
                    <div className="background">
                        <img src={Background}></img>
                    </div>
                    <a href="#user"><img className="circle" src={Profile}></img></a>
                    <a href="#name"><span className="black-text name">Crystal Han</span></a>
                    <a href="#email"><span className="black-text email">hancc1006@gmail.com</span></a>
                </div>
            </li>
            <li><div className="divider"></div></li>
            <li><a href="#!" className="waves-effect style" onClick={props.onClick}><HomeIcon className="style"></HomeIcon> Home </a></li>
            <br></br>
            <li><a href="#!" className="waves-effect style"><DescriptionIcon className="style"></DescriptionIcon> Projects </a></li>
            <br></br>
            <li><a href="#!" className="waves-effect style"><MailIcon className="style"></MailIcon> Contact </a></li>
            <br></br>
            <a href="#" data-target="slide-out" className="sidenav-trigger"><MenuIcon></MenuIcon></a>
            <li><Footer /></li>
        </ul>
        
    </>
    
  )
}

export default SideNav;