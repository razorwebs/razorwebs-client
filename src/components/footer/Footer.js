import React, { Component } from "react";
import { Container, Grid, Header, List, Segment } from "semantic-ui-react";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Container textAlign="left">
          <Grid columns={3} stackable>
            <Grid.Row>
              <Grid.Column>
                <Header as="h3" content="Our Services" inverted dividing />
                <List>
                  <List.Item
                    // icon="linkify"
                    content={<a href="/design">Design</a>}
                  />
                  <List.Item
                    // icon="linkify"
                    content={<a href="/development">Development</a>}
                  />
                  <List.Item
                    // icon="linkify"
                    content={
                      <a href="/marketing-and-seo">Marketing &amp; SEO</a>
                    }
                  />
                  <List.Item
                    // icon="linkify"
                    content={<a href="/printing">Printing</a>}
                  />
                  <List.Item
                    // icon="linkify"
                    content={<a href="/production">Production</a>}
                  />
                </List>
              </Grid.Column>
              <Grid.Column>
                <Header
                  as="h3"
                  content="Recent Articles & Updates"
                  inverted
                  dividing
                />
                <Segment inverted>
                  <List divided relaxed inverted>
                    <List.Item>
                      <List.Icon
                        name="github"
                        size="big"
                        verticalAlign="middle"
                      />
                      <List.Content>
                        <List.Header as="a">
                          How to remove acne with Photoshop
                        </List.Header>
                        <List.Description as="a">
                          Posted in Design 10 mins ago
                        </List.Description>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon
                        name="github"
                        size="big"
                        verticalAlign="middle"
                      />
                      <List.Content>
                        <List.Header as="a">
                          Best IDE's for Javascript Development
                        </List.Header>
                        <List.Description as="a">
                          Posted in Development 22 mins ago
                        </List.Description>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon
                        name="github"
                        size="big"
                        verticalAlign="middle"
                      />
                      <List.Content>
                        <List.Header as="a">
                          New Razorweb Hoodies (Limited time sale!)
                        </List.Header>
                        <List.Description as="a">
                          Posted in News 34 mins ago
                        </List.Description>
                      </List.Content>
                    </List.Item>
                  </List>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Header as="h3" content="Razorwebs" inverted dividing />
                <List inverted>
                  <List.Item>
                    Based North Las Vegas, we offer web design, web development,
                    branding identity, and full service media. We create brands,
                    campaigns and digital platforms that help clients grow.
                  </List.Item>
                  <br />
                  <List.Item icon="phone" content="702-555-5555" />
                  <List.Item
                    icon="mail"
                    content={
                      <a href="mailto:sales@razorwebs.com">
                        sales@razorwebs.com
                      </a>
                    }
                  />
                  <List.Item icon="marker" content="North Las Vegas, Nevada" />
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Grid stackable>
            <Grid.Column floated="left" width={8}>
              <b>Razorwebs</b>&nbsp;&copy;&nbsp;Copyright 2020. All Rights
              Reserved.
            </Grid.Column>
            <Grid.Column floated="right" width={8}>
              <List bulleted horizontal link floated="right" inverted>
                <List.Item as="a">Terms and Conditions</List.Item>
                <List.Item as="a">Privacy Policy</List.Item>
                <List.Item as="a">Contact Us</List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}
