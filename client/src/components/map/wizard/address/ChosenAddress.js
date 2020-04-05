import React from "react";
import {Button} from "semantic-ui-react";
import {connect} from "react-redux";
import {updateAddress, updateLocation} from "../../../../redux/reducers";


function ChosenAddress({address, setAddress, setLocation, stepWizard}) {
    function onClickHandler() {
        setAddress("");
        setLocation(null);
        stepWizard.firstStep();
    }

    return <p><strong>Address:</strong> {address} <Button basic color="blue" className="link" href="#"
                                                          onClick={onClickHandler}>(change)</Button></p>;
}

const mapDispatchToProps = dispatch => {
    return {
        setAddress: address => {
            dispatch(updateAddress(address));
        },
        setLocation: location => {
            dispatch(updateLocation(location));
        }
    }
};

const mapStateToProps = state => {
    return {
        address: state.address
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChosenAddress);
