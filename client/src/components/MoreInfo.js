import React from 'react'
import {Button, Grid, Header, Image, Segment} from "semantic-ui-react";
import Veggies from "./home/img/veggies_thinking.png";
import {Link} from "react-router-dom";
import MapConfused from "./home/img/map_confused.png";

const MoreInfo = () => (
    <Grid columns={"2"} verticalAlign={"middle"} stackable>

        {/*Hero banner*/}
        <Grid.Row className="hero">

            <Grid.Column className="info-left info">
                <Header>More about food deserts</Header>
                <p className="hero-text">
                    Curious to learn more about food deserts?
                    Keep reading to learn about the causes, effects,
                    and scale of this public health issue.
                </p>
            </Grid.Column>

            <Grid.Column className="info-right info">
                <Image className="hero-img" src={MapConfused}/>
            </Grid.Column>

        </Grid.Row>

        <div className="row-blocks color-radish">

            <Grid.Row columns={1} className="info-row">
                <Grid.Column className="info">
                    <Header size={"large"} className="info-section-header">
                        What is the official definition of a food desert?
                    </Header>
                    <p className="info-text">
                        The USDA’s formal definition of food security stresses
                        "ready availability of nutritionally adequate and safe foods”
                        that can be obtained in socially acceptable ways. The concept
                        of a food desert is used to highlight how food insecurity affects
                        people along the lines of community and geography.
                    </p>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={1} className="info-row">
                <Grid.Column className="info">
                    <Header size={"large"} className="info-section-header">
                        Problems related to current solutions for food deserts
                    </Header>
                    <ul className="info-text info-list">
                        <li>Educational materials regarding food security and food justice
                            are often lackluster, lacking in readability level and
                            cultural relevance.
                        </li>
                        <li>Ineffective food security interventions can end up becoming
                            another barrier to food security.
                        </li>
                        <li>Food assistance programs alone have not been effective
                            because they do not address the problem of food insecurity
                            at the level of its most widely agreed upon cause: poverty.
                        </li>
                    </ul>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={1} className="info-row">
                <Grid.Column className="info">
                    <Header size={"large"} className="info-section-header">
                        What is the breadth of food insecurity?
                    </Header>
                    <p className="info-text">
                        People at the highest risk include low-income women and
                        low-income communities, communities of color, young mothers,
                        the elderly, immigrants, poor rural families, and children.
                    </p>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={1} className="info-row">
                <Grid.Column className="info">
                    <Header size={"large"} className="info-section-header">
                        What are the effects of food insecurity?
                    </Header>
                    <ul className="info-text info-list">
                        <li>People living in food deserts are also more likely to be
                            living in poverty and facing significant barriers to accessing
                            quality healthcare, education, and employment.
                        </li>
                        <li>Food insecurity directly causes physical health problems because
                            malnutrition decimates immunity to diseases and toxic substances.
                        </li>
                        <li>The damage of food insecurity is compounded for children and
                            the elderly. Both have a critical need for balanced nutrition.
                        </li>
                    </ul>
                </Grid.Column>
            </Grid.Row>

        </div>
        {/*row block end*/}

        <Grid.Row columns={1} className="info-row">
            <Grid.Column className="info">
                <Header size={"large"} className="info-section-header">
                    About the website team
                </Header>
                <p className="info-text">
                    This web app was created by Georgia Tech Junior Design team 9353.
                    The team consists of several members, including
                    Olivia Amyette, Hannah Li, Seong Ryoo, and Evan Strat. All are
                    computer science undergraduate students at Georgia Tech.
                </p>

                <p className="info-text">
                    Hannah Li and Evan Strat partnered to develop the frontend and
                    backend. Olivia Amyette and Seong Ryoo partnered to develop the
                    User Interface and styling.
                </p>

                <p className="info-text">
                    The team hopes to help as many people living in Atlanta food
                    deserts as possible with this web app.
                </p>
            </Grid.Column>
        </Grid.Row>

    </Grid>
);

export default MoreInfo;