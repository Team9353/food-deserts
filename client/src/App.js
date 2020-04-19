import React from "react";
import "./css/layout.css";
import "./css/module.css";
import "./css/style.css";
import CacheBuster from "./components/util/CacheBuster";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import MapContainer from "./components/map/MapContainer";
import Home from "./components/home/Home";
import EmailTemp from "./components/Email/EmailTemp";
import MoreInfo from "./components/MoreInfo";
import FAQ from "./components/FAQ";
import TermsOfService from "./components/TermsOfService";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Navigation from "./components/nav/Navigation";
import {Grid, Header, List, Sidebar} from "semantic-ui-react";

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
                        <Route path="/terms" component={TermsOfService}/>
                        <Route path="/privacy" component={PrivacyPolicy}/>
                        <Route exact path="/" component={Home}/>
                    </Switch>

                    <Grid divided textAlign={"center"} centered stackable style={{
                        marginTop: "25px", paddingBottom: "10px", background: "#B2E5BC"
                    }}>
                        <Grid.Row>
                            <Grid.Column textAlign={"center"} width={4}>
                                <List horizontal>
                                    <List.Item as={Link} to="/terms">Terms of
                                        Service</List.Item>
                                    <List.Item as={Link} to="/privacy">Privacy
                                        Policy</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column textAlign={"center"} width={4}>
                                <Header size={"small"} content="The Food As Medicine Initiative"/>
                                <p>
                                    This web app was created by Georgia Tech
                                    Junior Design Team 9353.
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

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
