import React from "react";
import {Grid, Header} from "semantic-ui-react";

const PrivacyPolicy = () => (

    <Grid columns={"2"} verticalAlign={"middle"} stackable className="page-privacy">

        <Grid.Row columns={1} className="info-row">
            <Grid.Column className="info info-center">
                <Header className="info-page-header">
                    Privacy Policy
                </Header>
            </Grid.Column>
        </Grid.Row>

        <div className="row-blocks color-radish">

            <Grid.Row columns={1} className="info-row">
                <Grid.Column className="info">
                    <Header size={"large"} className="info-section-header">
                        Introduction
                    </Header>
                    <p className="info-text">
                        Last updated: Friday, April 17, 2020.
                    </p>
                    <p className="info-text">
                        This Privacy Policy describes our policies and procedures on the
                        collection, use and disclosure of your information when you use
                        the service and tells you about your privacy rights and how the
                        law protects you.
                    </p>
                    <p className="info-text">
                        Please read this Privacy Policy carefully before using the
                        Food Desert Mapping Tool web app operated by
                        Georgia Tech Junior Design Team 9353.
                    </p>
                    <p className="info-text">
                        This service makes use of the Google Maps APIs. By using this service
                        you are also agreeing to <a href="https://policies.google.com/privacy">Google's Privacy
                        Policy</a>.
                    </p>
                </Grid.Column>
            </Grid.Row>
            {/*End radish color block*/}
        </div>

        <Grid.Row columns={1} className="info-row">
            <Grid.Column className="info">
                <Header size={"large"} className="info-section-header">
                    Personal information
                </Header>
                <p className="info-text">
                    Our service does not collect any personal information from
                    users.
                </p>
            </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={1} className="info-row">
            <Grid.Column className="info">
                <Header size={"large"} className="info-section-header">
                    Interpretation and Definitions
                </Header>
                <p className="info-text">
                    The words of which the initial letter is capitalized have
                    meanings defined under the following conditions.
                </p>
                <p className="info-text">
                    The following definitions shall have the same meaning
                    regardless of whether they appear in singular or in plural:
                </p>
                <ul className="info-text info-list info-definitions">

                    <li className="term">You</li>
                    <li className="defn">
                        Means the individual accessing or using the Service,
                        or the company, or other legal entity on behalf of
                        which such individual is accessing or using the
                        service, as applicable.
                    </li>

                    <li className="term">We</li>
                    <li className="defn">
                        Refers to Junior Design Team 9353.
                    </li>

                    <li className="term">Us</li>
                    <li className="defn">
                        Refers to Junior Design Team 9353.
                    </li>

                    <li className="term">Website</li>
                    <li className="defn">
                        Refers to Food Desert Mapping Tool, accessible from
                        the Food Desert Mapping Tool.
                    </li>

                    <li className="term">Country</li>
                    <li className="defn">
                        Refers to: Georgia, United States
                    </li>

                </ul>
            </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={1} className="info-row">
            <Grid.Column className="info">
                <Header size={"large"} className="info-section-header">
                    Links to Other Websites
                </Header>
                <p className="info-text">
                    Our service may contain links to other websites that are
                    not operated by us. If you click on a third party link,
                    you will be directed to that third party's site. We
                    strongly advise you to review the Privacy Policy of every
                    site you visit.
                </p>
                <p className="info-text">
                    We have no control over and assume no responsibility for
                    the content, privacy policies or practices of any third
                    party sites or services.
                </p>
            </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={1} className="info-row">
            <Grid.Column className="info">
                <Header size={"large"} className="info-section-header">
                    Changes
                </Header>
                <p className="info-text">
                    We may update our Privacy Policy from time to time. We will
                    notify you of any changes by posting the new Privacy Policy on
                    this page.
                </p>
                <p className="info-text">
                    You are advised to review this Privacy Policy periodically for
                    any changes. Changes to this Privacy Policy are effective when
                    they are posted on this page.
                </p>
            </Grid.Column>
        </Grid.Row>

        {/* End main wrapper div */}
    </Grid>
);

export default PrivacyPolicy;

