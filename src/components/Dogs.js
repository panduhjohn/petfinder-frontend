import React, { Component } from 'react';
import axios from 'axios';
import Cards from './Cards';
// import faker from 'faker';

import config from '../config';

import { Card, Icon, Image } from 'semantic-ui-react';

// import data from '../data/data';

import { Client } from '@petfinder/petfinder-js';

class Dog extends Component {
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

        client.animal
            .search({
                type: 'Dog',
            })
            .then((response) => {
                this.setState(
                    {
                        animals: response.data.animals,
                    },
                    () => {
                        console.log(this.state.animals);
                    }
                );
            })
            .catch((error) => {
                console.log(error);
            });
    }

    apiTest = () => {
        const url = 'https://api.petfinder.com/v2/animals';
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
                          console.log(animal);
                          return (
                              <div key={animal.id}>
                                  {/* {animal.photos.length !== 0 ? (
                                      <p>{typeof animal.photos[0].medium}</p>
                                  ) : (
                                      <p>nope</p>
                                  )} */}

                                  <Card>
                                      <Image
                                          src={
                                              animal.photos.length !== 0
                                                  ? animal.photos[0].large
                                                  : '/images/mal.jpg'
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
                    : 'something'}
                <h1 style={{ display: 'flex', alignSelf: 'center' }}>
                    Dogs Component
                    <Cards />
                </h1>
            </div>
        );
    }
}

export default Dog;
