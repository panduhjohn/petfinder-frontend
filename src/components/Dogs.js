import React, { Component } from 'react';
import axios from 'axios';

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
            .search()
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
        return (
            <div>
                {this.state.animals
                    ? this.state.animals.map((animal, idx) => {
                          return (
                              <div>
                                  <Card>
                                      <Image
                                          src='/images/mal.jpg'
                                          wrapped
                                          ui={false}
                                      />
                                      <Card.Content>
                                          <Card.Header>Name: {animal.name}</Card.Header>
                                          <Card.Meta>Species: {animal.type}</Card.Meta>
                                          <Card.Meta>Species: {animal.breeds.primary}</Card.Meta>
                                          <Card.Meta>
                                              <span className='date'>
                                                  Joined in 2015
                                              </span>
                                          </Card.Meta>
                                          <Card.Description>
                                              Matthew is a musician living in
                                              Nashville.
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
                <h1>Dogs Component</h1>
            </div>
        );
    }
}

export default Dog;
