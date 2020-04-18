import React, {useState} from "react";
import StepWizard from "react-step-wizard";
import AddressEntry from "./address/AddressEntry";
import ChosenAddress from "./address/ChosenAddress";
import {Header, Image, Segment} from "semantic-ui-react";
import BudgetEntry from "./budget/BudgetEntry";
import PreferredTransitEntry from "./transit/PreferredTransitEntry";
import PreferredTravelTime from "./transit/PreferredTravelTime";
import {connect} from "react-redux";
import "./style.css";
import ResultsContainer from "./results/ResultsContainer";
import PoweredByGoogle from "./img/powered_by_google_on_white.png";
import Background from "./img/map.png";

function WizardContainer({address}) {
    const [instance, setInstance] = useState();

    return <div style={{
        backgroundImage: `url(${Background}`
    }}>
        <Header size="huge" textAlign={"center"}>Do you live in a food desert?</Header>
        <div id="wizard-container">
            {address && instance &&
            <Segment vertical><ChosenAddress stepWizard={instance}/></Segment>}
            <StepWizard instance={setInstance}>
                <ResultsContainer/>
                <AddressEntry/>
                <BudgetEntry/>
                <PreferredTransitEntry/>
                <PreferredTravelTime/>
            </StepWizard>
            <Image style={{marginTop: "5px"}} src={PoweredByGoogle}/>
        </div>
    </div>
        ;
}

const mapStateToProps = state => {
    return {
        address: state.address
    };
};

export default connect(mapStateToProps)(WizardContainer);
