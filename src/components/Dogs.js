import React, { Component } from 'react';
import axios from 'axios'

import data from '../data/data'

import { Client } from '@petfinder/petfinder-js';



class Dog extends Component {
    constructor() {
        super()

        this.state = {

        }
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
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            });
    }

    apiTest = () => {
        const url = 'https://api.petfinder.com/v2/animals'
        axios.get(url)
    }

    render() {
        return (
            <div>
                <h1>Dogs Component</h1>
                <p>{data.name}</p>
            </div>
        );
            
        
    }
}

export default Dog;

