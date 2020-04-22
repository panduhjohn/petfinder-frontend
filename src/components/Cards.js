import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

// import data from '../data/data'

const Cards = () => (
    <Card>
        <Image src='/images/mal.jpg' wrapped ui={false} />
        <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
                <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
                Matthew is a musician living in Nashville.
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <p>
                <Icon name='user' />
                22 Friends
            </p>
        </Card.Content>
    </Card>
);

export default Cards;
