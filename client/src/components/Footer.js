import {Grid, Header, List, Menu} from "semantic-ui-react";
import {Link} from "react-router-dom";
import React from "react";
import packageJson from "../../package.json";
import Logo from "./nav/img/logo.png";

export function Footer() {
    return <Grid textAlign={"center"}
                 centered stackable
                 className="footer-container" >
        <Grid.Row className="footer" columns={2}>

            <Grid.Column>
                <Menu.Item className="site-logo-item" as={Link} to="/">
                    <img id="logo" src={Logo} alt="Logo"/>
                    <h1 class="site-name">food as <br></br>medicine</h1>
                </Menu.Item>
                <p>
                    This web app was created by Georgia Tech
                    Junior Design Team 9353.
                </p>
                <p>Version {packageJson.version}</p>
            </Grid.Column>

            <Grid.Column>
                <List horizontal>
                    <List.Item as={Link} to="/terms">Terms of
                        Service</List.Item>
                    <List.Item as={Link} to="/privacy">Privacy
                        Policy</List.Item>
                </List>
            </Grid.Column>
        </Grid.Row>
    </Grid>;
}
