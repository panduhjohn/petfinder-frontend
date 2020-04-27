import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { Card, Icon, Image , Item} from 'semantic-ui-react';



// import data from '../data/data';

import { Client } from '@petfinder/petfinder-js';

class AnimalDetail extends Component {
    constructor() {
        super();

        this.state = {
            animal: '',
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
            .show(this.props.match.params.id)
            .then((response) => {
                this.setState({ animal: response.data.animal });
                console.log('AnimalDetail', response.data.animal);
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

        const url = `https://api.petfinder.com/v2/animals/${this.props.match.params.id}`;
        axios.get(url, axiosConfig);
    };

    render() {
        console.log(this.props.match.params.id);
        return (
            <div>
                <h1>This is the details page</h1>

                <Item.Group>
                    <Item>
                        {/* <Item.Image
                            size='tiny'
                            src={this.state.animals.photos[0].medium}
                            // src={
                            //     animal.photos.length !== 0
                            //         ? animal.photos[0].large
                            //         : '/images/brian.jpg'
                            // }
                        /> */}

                        <Item.Content>
                            <Item.Header as='a'>
                                Name: {this.state.animal.name}
                            </Item.Header>
                            <Item.Meta>
                                Description: {this.state.animal.description}
                            </Item.Meta>
                            <Item.Meta>
                                Species: {this.state.animal.species}
                            </Item.Meta>
                            <Item.Meta>
                                {/* Contact: {this.state.animal.contact.email}    */}
                            </Item.Meta>
                            <Item.Meta>
                                {/* Phone: {this.state.animal.contact.phone} */}
                            </Item.Meta>
                            <Item.Description>
                                <Image src='/images/mal.jpg' />
                            </Item.Description>
                            <Item.Extra>Additional Details</Item.Extra>
                            <Item.Extra>Age: {this.state.animal.age}</Item.Extra>
                            <Item.Extra>Gender: {this.state.animal.gender}</Item.Extra>
                            <Item.Extra>Size: {this.state.animal.size}</Item.Extra>
                            <Item.Extra>Status: {this.state.animal.status}</Item.Extra>
                        </Item.Content>
                    </Item>

                    <Item>
                        <Item.Image
                            size='tiny'
                            src='/images/cat.jpg'
                        />
                    </Item>
                </Item.Group>
            </div>
        );
    }
}

export default AnimalDetail;
