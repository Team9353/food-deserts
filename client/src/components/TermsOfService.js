import React from "react";
import {Grid, Header} from "semantic-ui-react";

const TermsOfService = () => (
    <Grid columns={"2"} verticalAlign={"middle"} stackable>

        <Grid.Row columns={1} className="info-row">
            <Grid.Column className="info info-center">
                <Header className="info-page-header">
                    Terms of service
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
                        Please read these Terms and Conditions carefully before using the
                        Food Desert Mapping Tool website operated by
                        Georgia Tech Junior Design Team 9353.
                    </p>
                    <p className="info-text">
                        Your access to and use of the Service is conditioned on your
                        acceptance of and compliance with these terms.
                        These terms apply to all visitors, users and others who access or
                        use the service. By accessing or using the service you agree to be
                        bound by these terms. If you disagree with any part of the terms
                        then you may not access the service. This service uses the Google Maps APIs.  By using
                        this service you are bound by these Terms and Conditions as well
                        as Google's Terms of Service.
                    </p>
                </Grid.Column>
            </Grid.Row>
        {/*End radish color block*/}
        </div>

        <Grid.Row columns={1} className="info-row">
            <Grid.Column className="info">
                <Header size={"large"} className="info-section-header">
                    Links To Other Websites
                </Header>
                <p className="info-text">
                    Our Service may contain links to third-party web sites or services
                    that are not owned or controlled by Junior Design Team 9353.
                </p>
                <p className="info-text">
                    Junior Design Team 9353 has no control over, and assumes no
                    responsibility for, the content, privacy policies, or practices of
                    any third party web sites or services. You further acknowledge and
                    agree that Junior Design Team 9353 shall not be responsible or
                    liable, directly or indirectly, for any damage or loss caused or
                    alleged to be caused by or in connection with use of or reliance on
                    any such content, goods or services available on or through any such
                    web sites or services.
                </p>
            </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={1} className="info-row">
            <Grid.Column className="info">
                <Header size={"large"} className="info-section-header">
                    Changes
                </Header>
                <p className="info-text">
                    We reserve the right, at our sole discretion, to modify or replace
                    these Terms at any time. If a revision is material we will try to
                    provide a notice prior to any new terms taking effect. What
                    constitutes a material change will be determined at our
                    sole discretion.
                </p>
            </Grid.Column>
        </Grid.Row>

    {/* End main wrapper div */}
    </Grid>
);

export default TermsOfService;
