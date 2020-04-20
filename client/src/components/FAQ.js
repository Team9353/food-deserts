import React from 'react'
import AccordianHome from "./AccordianHome";
import {Grid, Header} from "semantic-ui-react";


class FAQ extends React.Component {
    render() {
        return (
            <Grid columns={"2"} verticalAlign={"middle"} stackable>
                <Grid.Row columns={1} className="info-row">
                    <Grid.Column className="info info-center">
                        <Header className="info-page-header">
                            Frequently asked questions
                        </Header>
                    </Grid.Column>
                    <AccordianHome/>
                </Grid.Row>
            </Grid>
        );
    }
}

export default FAQ;
