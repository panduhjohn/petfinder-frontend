import React, { Component } from 'react';
import axios from 'axios';
import { Card, Image } from 'semantic-ui-react';

import { Client } from '@petfinder/petfinder-js';


class Organizations extends Component {
    constructor() {
        super();

        this.state = {
            organizations: '',
            dog: {
                name: '',
                breed: '',
                size: '',
                gender: '',
                coat: '',
            },
        };
    }

    componentDidMount() {
        const client = new Client({
            // apiKey: process.env.API_KEY,
            // secret: process.env.SECRET,
            apiKey: 'QYtiWr8MjKyLXw42rTGFW3wofISsKX9Sk4bmPeHu0ScjjHwJ5O',
            secret: 'u65ChCwbBni2hgkxeZPLTaVkpDgbdpzgd3ODU0X7',
        });

        client.organization.search().then((response) => {
            this.setState({ organizations: response.data.organizations }, () => {
                console.log(response.data.organizations);
               
            })
            .catch((error) => {
                console.log(error);
            });  
        }); 
    }

    apiTest = () => {
        const url = 'https://api.petfinder.com/v2/organization';
        axios.get(url);
    };

    render() {
        console.log(this.state.organizations);
        return (
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    paddingLeft: '10px',
                    paddingRight: '10px',
                    paddingBottom: '10px',
                    paddingTop: '15px',
                    justifyContent: 'space-around',
                }}
            >
                {this.state.organizations
                    ? this.state.organizations.map((organization, idx) => {
                          return (
                              <div key={organization.id}>
                                  <Card>
                                      <Image
                                          src={
                                              organization.photos.length !== 0
                                                  ? organization.photos[0]
                                                        .medium
                                                  : '/images/organization.jpg'
                                          }
                                      />
                                      <Card.Content>
                                          <Card.Header>
                                              {organization.name}
                                          </Card.Header>
                                          <Card.Meta>
                                              Mission Statement:{' '}
                                              {organization.mission_statement !== null ? organization.mission_statement : 'No Mission Statement'}
                                          </Card.Meta>
                                      </Card.Content>
                                      <Card.Content>
                                          Phone: {organization.phone !== null ? organization.phone : 'No Phone Number'}
                                      </Card.Content>
                                  </Card>
                              </div>
                          );
                      })
                    : 'Loading...'}
               
            </div>
        );
    }
}

export default Organizations;
