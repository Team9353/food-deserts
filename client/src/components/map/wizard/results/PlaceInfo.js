import React from 'react';
import {Header, Icon} from "semantic-ui-react";

function PlaceInfo({place}) {
    return (
        <div>
            <Header as={"h4"}>
                <a target="_blank" href={`https://www.google.com/maps/search/?api=1&query=${place.vicinity}`
                + `&query_place_id=${place.id}`}>{place.name}</a>
            </Header>
            <p>
                <Icon name={"map marker alternate"}/> {place.vicinity} ({place.distance.text})
            </p>
            <p>
                <Icon name={"clock outline"}/> {place.duration.text}
            </p>
        </div>
    );
}

export default PlaceInfo;
