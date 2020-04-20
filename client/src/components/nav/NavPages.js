import React from "react";
import "semantic-ui-css/semantic.min.css";
import PropTypes from "prop-types";
import {Menu} from "semantic-ui-react";
import {Link} from "react-router-dom";
import Logo from "./img/logo.png";

function Page(name, link) {
    this.name = name;
    this.link = link;
}

export const routes = [
    new Page("Home", "/"),
    new Page("Map", "/map"),
    new Page("Email", "/email"),
    new Page("Info", "/info"),
    new Page("FAQ", "/faq")
];

// This component assumes it's a child of a Menu
const NavPages = (props) => {
    const logo = <Menu.Item className="site-logo-item">
        {/*The <img> tag is used here instead of Semantic UI React's Image
            component on purpose.  When the Image tag is used here, the image
            width is not constrained properly. -Evan Strat, 04-Apr-2020
        */}
        <img id="logo" src={Logo} alt="Logo"/>
        <h1 class="site-name">food as <br></br>medicine</h1>
    </Menu.Item>;

    return <>
        {logo}
        {props.children}
        <div className="menu-links-wrapper">
            {!props.mobile && routes.map(route => <Menu.Item key={route.link} as={Link}
                                                             className="menu-link"
                                                             onClick={props.inSidebar ? props.onClick : () => null}
                                                             to={route.link}>{route.name}</Menu.Item>)}
        </div>
    </>;
};

NavPages.propTypes = {
    mobile: PropTypes.bool
};

export default NavPages;
