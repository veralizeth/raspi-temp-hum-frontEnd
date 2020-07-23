import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import './Card.css';


const currentValueCard = (props) => {
  
  const displayValue = props.currentData.length === 0 ? null : props.currentData[0]

  return (
    <div className='card-section'>
      <Card>
        <Image src='https://cdn.jsdelivr.net/npm/twemoji@11.0.1/2/svg/2600.svg' wrapped ui={false} />
        <Card.Content>
          <Card.Header>{props.title}</Card.Header>
          <Card.Meta>{displayValue?.value.toFixed(2) || "Loading..."}  °C</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          {/* <a>
        <Icon name='user' />
        10 Friends
      </a> */}
        </Card.Content>
      </Card>
      </div>
    )
}

export default currentValueCard