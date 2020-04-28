import React, { Component } from 'react';
import axios from 'axios';

import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

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
                this.setState({ animals: response.data.animals }, () => {
                    console.log(this.state.animals);
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    apiTest = () => {
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Access-Control-Allow-Origin': '*',
            },
        };

        const url = 'https://api.petfinder.com/v2/animals';
        axios.get(url, axiosConfig);
    };

    render() {
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
                                              animal.photos.length !== 0
                                                  ? animal.photos[0].large
                                                  : '/images/brian.jpg'
                                          }
                                          wrapped
                                          ui={false}
                                      />
                                      <Card.Content>
                                          <Card.Header>
                                              <Link to={`dogs/${animal.id}`}>
                                                  {animal.name}
                                              </Link>
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
                                              Coat:{' '}
                                              {animal.coat !== null
                                                  ? animal.coat
                                                  : 'No Coat'}
                                          </Card.Meta>
                                      </Card.Content>
                                      <Card.Content extra>
                                          <p>
                                              <Icon name='user' />
                                              {animal.status}
                                          </p>
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

export default Dog;
