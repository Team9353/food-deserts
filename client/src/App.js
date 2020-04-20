import React from "react";
import "./App.css";
import "./css/base.css";
import "./css/layout.css";
import "./css/module.css";
import "./css/state.css";
import "./css/style.css";
import CacheBuster from "./components/util/CacheBuster";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MapContainer from "./components/map/MapContainer";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import MapContainer from "./components/MapContainer";
import Home from "./components/home/Home";
import EmailTemp from "./components/Email/EmailTemp";
import MoreInfo from "./components/MoreInfo";
import FAQ from "./components/FAQ";
import TermsOfService from "./components/TermsOfService";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Navigation from "./components/nav/Navigation";
import {Sidebar} from "semantic-ui-react";
import {Footer} from "./components/Footer";
import {Container, Grid, Header, List, Menu, Segment, Sidebar} from "semantic-ui-react";
import Logo from "./components/nav/img/logo.png";

function App() {
    return (
        <Sidebar.Pushable as={"div"}>
            <Router>
                <div>
                    <Navigation/>
                    <Switch>
                        <Route path="/map" component={MapContainer}/>
                        <Route path="/email" component={EmailTemp}/>
                        <Route path="/info" component={MoreInfo}/>
                        <Route path="/faq" component={FAQ}/>
                        <Route exact path="/" component={Home}/>
                        <Route path="/termsOfService" component={TermsOfService}/>
                        <Route path="/PrivacyPolicy" component={PrivacyPolicy}/>
                    </Switch>

                    <Segment style={{
                        margin: "7em 0em 0em 0em", padding: "1em 0em", background: "rgb(242, 255, 212)" +
                            ""
                    }}>
                        <Container textAlign='center' className="footer-container">
                            <Grid divided stackable className="footer">
                                <Grid.Column width={4}>
                                    <List link>
                                        <List.Item style={{color: "Blue"}} as={Link} to="/termsOfService">Terms of
                                            Service</List.Item>
                                        Click the link above to view the terms of
                                        service.
                                    </List>
                                </Grid.Column>
                                <Grid.Column width={4}>
                                    <List link>
                                        <List.Item style={{color: "Blue"}} as={Link} to="/PrivacyPolicy">Privacy
                                            Policy</List.Item>
                                        Click the link above to view the privacy policy.
                                    </List>
                                </Grid.Column>

                                <Grid.Column width={7}>
                                    <Menu.Item className="site-logo-item" as={Link} to="/">
                                        <img id="logo" src={Logo} alt="Logo"/>
                                        <h1 class="site-name">food as <br></br>medicine</h1>
                                    </Menu.Item>
                                    <p>
                                        This web app was created by Georgia Tech
                                        Junior Design Team 9353.
                                    </p>
                                </Grid.Column>
                            </Grid>
                        </Container>
                    </Segment>

                </div>
            </Router>
            < CacheBuster>
                {({loading, isLatestVersion, refreshCacheAndReload}) => {
                    if (loading) {
                        return null;
                    }
                    if (!loading && !isLatestVersion) {
                        // You can decide how and when you want to force reload
                        refreshCacheAndReload();
                    }
                    return null;
                }
                }
            </CacheBuster>
        </Sidebar.Pushable>
    );
}

export default App;
