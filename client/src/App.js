import React from "react";
import "./App.css";
import "./css/base.css";
import "./css/layout.css";
import "./css/module.css";
import "./css/state.css";
import "./css/style.css";
import CacheBuster from "./components/util/CacheBuster";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import MapContainer from "./components/MapContainer";
import Home from "./components/home/Home";
import EmailTemp from "./components/Email/EmailTemp";
import MoreInfo from "./components/MoreInfo";
import FAQ from "./components/FAQ";
import TermsOfService from "./components/TermsOfService";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Navigation from "./components/nav/Navigation";
import {Container, Grid, Header, List, Segment, Sidebar} from "semantic-ui-react";

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
                        margin: "7em 0em 0em 0em", padding: "1em 0em", background: "#B2E5BC" +
                            ""
                    }}>
                        <Container textAlign='center'>
                            <Grid divided stackable>
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
                                    <Header as='h4' content="The Food As Medicine Initiative"/>
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
