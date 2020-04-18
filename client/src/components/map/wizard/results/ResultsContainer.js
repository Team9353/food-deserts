import React, {useState} from 'react';
import WizardStep from "../WizardStep";
import {connect} from "react-redux";
import {useAsyncEffect} from "use-async-effect";
import {setReadyToCalculateResults} from "../../../../redux/reducers";
import {Card, Header, Icon, Loader} from "semantic-ui-react";
import CompleteMap from "../../GoogleMap";
import MarkerWithInfo from "./MarkerWithInfo";
import PlaceInfo from "./PlaceInfo";

function ResultsContainer(props) {
    const [data, setData] = useState(null);
    const [headerText, setHeader] = useState("Your Results");
    const [headerColor, setHeaderColor] = useState("black");
    const [headerIcon, setHeaderIcon] = useState("");

    function beforePreviousStep() {
        setData(null);
        props.setReadyToCalculateResults(false);
        props.previousStep();
    }

    // This is an Effect
    // What's that?  https://daveceddia.com/useeffect-hook-examples/
    useAsyncEffect((async () => {
        function getNearbyStores() {
            // const location = props.location;
            // const url = `/api/v1/map/query?lat=${location.lat}&long=${location.lng}`
            //     + `&budget=${props.budget[0]}`
            //     + `&transit=${props.preferredTransit[0]}`
            //     + `&tt=${props.preferredTravelTime[0]}`;
            // let response = await fetch(url);
            // console.log("url is ", url);
            // return await response.json();
            //return await JSON.parse(response);
        }

        if (true || props.readyToCalculateResults) {
            const data = getNearbyStores();
            if (data.ok && data.results.length > 3) {
                setHeader("Good news - you are near healthy food!");
                setHeaderColor("green");
                setHeaderIcon("check circle")
            }
            setData(data);
        }
        // The array below defines variables this Effect "depends" on.  In other words
        // you **MUST** put any variables used in the Effect that come from outside in this array
        // Common examples would include: props, state variables/setters, etc.
    }), [props, setData]);


    const [open, setOpen] = useState(false);

    function onToggleOpen() {
        setOpen(!open);
    }

    return (
        <WizardStep header={<><Icon style={{display: "inline-block"}} color={headerColor} name={headerIcon}/> <span
            style={{color: "#21ba45"}}>{headerText}</span></>} hideNextBtn
                    previousStep={beforePreviousStep}
        >
            <Loader active={!data} inline="centered" content="Crunching the numbers..."/>
            {data && data.ok && <>
                <Header>Top Results</Header>
                <Card.Group style={{marginBottom: "10px"}}>
                    {data.results.slice(0, 4).map(place =>
                        <Card style={{
                            maxWidth: "46%"
                        }}>
                            <Card.Content>
                                <Card.Header>
                                    <a target="_blank"
                                       href={`https://www.google.com/maps/search/?api=1&query=${place.vicinity}`
                                       + `&query_place_id=${place.id}`}>{place.name}</a>&nbsp;
                                    <span style={{
                                        color: "gray",
                                        fontSize: 14,
                                        fontWeight: "normal"
                                    }}>({place.distance.text})</span>
                                </Card.Header>
                            </Card.Content>
                            <Card.Content>
                                <Icon name={"map marker alternate"}/> {place.vicinity}
                            </Card.Content>
                            <Card.Content>
                                <Icon name={"clock outline"}/> {place.duration.text}
                            </Card.Content>
                        </Card>
                    )}
                </Card.Group>

                <CompleteMap lat=
                                 {/*{(props.location && props.location.lat) || }*/ 33.421128}
                             lng={-84.566427}>
                    <MarkerWithInfo icon="http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                                    content={<p><Icon name={"crosshairs"}/> Your location</p>}/>

                    {data.results.length > 0 && data.results.map(place =>
                        <MarkerWithInfo key={place.id}
                                        position={{lat: place.location.lat, lng: place.location.lng}}
                                        content={<PlaceInfo place={place}/>}
                        />)}
                </CompleteMap>
                {data.htmlAttributions.length && <>
                    <small>Attributions provided by Google:</small> <br/>
                    {data.htmlAttributions.map(text => <><small dangerouslySetInnerHTML={{
                        __html: text // FIXME: Make sure to do some filtering to only allow <a> tags through
                    }}/><br/></>)}
                    <br/>
                </>}
            </>}
        </WizardStep>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        setReadyToCalculateResults: ready => {
            dispatch(setReadyToCalculateResults(ready));
        }
    };
};

const mapStateToProps = state => {
    return {
        address: state.address,
        location: state.location,
        budget: state.budget,
        preferredTransit: state.preferredTransit,
        preferredTravelTime: state.preferredTravelTime,
        readyToCalculateResults: state.readyToCalculateResults
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsContainer);
