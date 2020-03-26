import React, {useState} from "react";
import "../../css/wizard.css";
import StepWizard from 'react-step-wizard';
import AddressEntry from "./AddressEntry";
import ChosenAddress from "./ChosenAddress";
import {Header, Segment} from "semantic-ui-react";
import BudgetEntry from "./BudgetEntry";

function WizardContainer(props) {
    const [locationData, setLocationData] = useState({});

    return <div>
        <Header size="huge" textAlign={"center"}>Do you live in a food desert?</Header>
        <div id="wizard-container">
            {locationData.address && <Segment vertical><ChosenAddress address={locationData.address}/></Segment>}
            <StepWizard>
                <AddressEntry dataChange={setLocationData}/>
                <BudgetEntry/>
            </StepWizard>
        </div>
    </div>
        ;
}

export default WizardContainer;