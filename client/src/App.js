import React from "react";
import "./css/base.css";
import "./css/layout.css";
import "./css/state.css";
import "./css/module.css";
import "./css/style.css";
import CacheBuster from "./components/util/CacheBuster";
import MapContainer from "./components/map/MapContainer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/home/Home";
import EmailTemp from "./components/Email/EmailTemp";
import MoreInfo from "./components/MoreInfo";
import FAQ from "./components/FAQ";
import TermsOfService from "./components/TermsOfService";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Navigation from "./components/nav/Navigation";
import {Footer} from "./components/Footer";
import {Sidebar} from "semantic-ui-react";

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
                    <Footer/>
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