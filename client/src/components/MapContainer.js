import React from "react";
import CompleteMap from "./map/GoogleMap";
import {connect} from "react-redux";

class MapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {apiResponse: ""};
    }

    async getNearbyStores() {
        let location = this.props.location
        let props = this.props
        let temp = `/api/v1/map/query?lat=${location.lat}&long=${location.lng}`
            + `&budget=${props.budget[0]}`
            + `&transit=${props.preferredTransit}`
            + `&tt=${props.preferredTravelTime[0]}`;
        let response = await fetch(temp);
        let data = await response.json();
        this.setState({apiResponse: "got"});

        return data;
    }

    getNearby() {
        this.getNearbyStores().then(data => console.log(data));
    }

    test2() {
        console.log("test")
    }

    render() {
        console.log(this.props.address)
        //console.log(this.props.location)
        //console.log(this.props.budget)
        console.log(this.props.preferredTransit)
        //console.log(this.props.preferredTravelTime)
        let location = this.props.location
        return (
            <div className="outer">
                <button onClick={() => this.getNearby()}> Click me</button>
                <h1>Map</h1>
                {location && <CompleteMap lat={location.lat} long={location.lng}/>}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        address: state.address,
        location: state.location,
        budget: state.budget,
        preferredTransit: state.preferredTransit,
        preferredTravelTime: state.preferredTravelTime
    };
};

export default connect(mapStateToProps)(MapContainer);
