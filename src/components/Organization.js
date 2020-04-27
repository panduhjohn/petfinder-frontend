import React, { Component } from 'react';
import axios from 'axios';
import { Card, Icon, Image } from 'semantic-ui-react';

import { Client } from '@petfinder/petfinder-js';
import { Organization } from '@petfinder/petfinder-js/dist/api/organization';

class Organizations extends Component {
    constructor() {
        super();

        this.state = {
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

        client.organization
            .search({ location: 'Minneapolis, MN' })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });  
    }

    apiTest = () => {
        const url = 'https://api.petfinder.com/v2/organization';
        axios.get(url);
    };

    render() {
        console.log(this.state.animals);
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
                {this.state.animals
                    ? this.state.animals.map((animal, idx) => {
                          return (
                              <div key={animal.id}>
                                  <Card>
                                      <Image
                                          src={
                                              animal.photos.medium !== null ? (
                                                  <p>{animal.photos.medium}</p>
                                              ) : (
                                                  <img
                                                      src='/images/mal.jpg'
                                                      alt='...'
                                                  />
                                              )
                                          }
                                          //   src={faker.image.avatar()}
                                          wrapped
                                          ui={false}
                                      />
                                      <Card.Content>
                                          <Card.Header>
                                              {animal.name}
                                          </Card.Header>
                                          <Card.Meta>
                                              Species: {animal.type}
                                          </Card.Meta>
                                          <Card.Meta>
                                              Breed: {animal.breeds.primary}
                                          </Card.Meta>
                                          <Card.Meta>
                                              Size: {animal.size}
                                          </Card.Meta>
                                          <Card.Meta>
                                              Coat: {animal.coat}
                                          </Card.Meta>
                                          <Card.Description>
                                              {animal.description}
                                          </Card.Description>
                                      </Card.Content>
                                      <Card.Content extra>
                                          <p>
                                              <Icon name='user' />
                                              22 Friends
                                          </p>
                                      </Card.Content>
                                  </Card>
                              </div>
                          );
                      })
                    : 'Loading...'}
                <h1 style={{ display: 'flex', alignSelf: 'center' }}>
                    Dogs Component
                </h1>
            </div>
        );
    }
}

export default Organizations;
