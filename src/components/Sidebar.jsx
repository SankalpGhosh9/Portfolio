import { GiCardboardBoxClosed } from "react-icons/gi";
import { MdAttachEmail } from "react-icons/md";
import { MdAddIcCall } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <side className="sidebar">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="../images/profile.jpg" alt="" width="80"/>
        </figure>
        <div className="info-content">
          <h1 className="name">Sankalp Ghosh</h1>
          <p className="title">Cloud Developer</p>
        </div>
        {/* < button className="info_more-btn">
        <NavLink to="/contact" className="navbar-link"></NavLink>
          <span>Show Contacts</span>
          <GiCardboardBoxClosed />
        </button> */}
      </div>
      <div className="sidebar-info_more">
       <hr className="sidebar_separator"/>
       <ul className="contacts-list">
        <li className="contact-item">
          <div className="icon-box">
          <MdAttachEmail />
          </div>
          <div className="contact-info">
            <p className="contact-title">Email</p>
            <a href="mailto:sankalp09ghosh@gmail.com" className="contact-link">sankalp09ghosh<span></span>@gmail.com</a>
          </div>
        </li>
        <li className="contact-item">
          <div className="icon-box">
          <MdAddIcCall />
          </div>
          <div className="contact-info">
            <p className="contact-title">Phone Number</p>
            <a href="tel:+918779873278" className="contact-link">+91 8779873278</a>
          </div>
        </li>
        <li className="contact-item">
          <div className="icon-box">
          <FaCalendarAlt />
          </div>
          <div className="contact-info">
            <p className="contact-title">Birth-Date</p>
            <time dateTime="2001-08-03" className="contact-link">August 03 , 2001</time>
          </div>
        </li>
        <li className="contact-item">
          <div className="icon-box">
          <MdLocationPin />
          </div>
          <div className="contact-info">
            <p className="contact-title">Location</p>
            <address>Mumbai , India</address>
          </div>
        </li>
       </ul>
      </div>
    </side>
  )
}

export default Sidebar