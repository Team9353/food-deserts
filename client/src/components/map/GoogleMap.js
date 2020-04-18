import React from "react";
import {GoogleMap, withGoogleMap, withScriptjs} from "react-google-maps";
import {compose, withProps} from "recompose";
import {Loader} from "semantic-ui-react";

function GoogleMapInternal(props) {
    return <div style={{height: "100vh", width: "100%"}}>
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{lat: props.lat, lng: props.lng}}
        >
            {props.children}
        </GoogleMap>
    </div>;
}

const CompleteMap = compose(
    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=geometry,drawing,places`,
        loadingElement: (<Loader active inline="centered" content="Please wait..."/>),
        containerElement: <div
            style={{minHeight: "400px", height: "500px", maxHeight: "100px", minWidth: "500px", maxWidth: "800px"}}/>,
        mapElement: <div style={{height: "100%"}}/>,
    }),
    withScriptjs,
    withGoogleMap
)(GoogleMapInternal);

export default CompleteMap;
