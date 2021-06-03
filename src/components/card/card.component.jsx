import React from "react"
import PropTypes from 'prop-types';
import "../card/card.styles.css";
import styled from '@emotion/styled';

const Name=styled.h2`
color: #blue;
font-size: 16px;
`;

const Card= props=>{
    return(
<div className="card-container">
    <img alt='monster' src={`https://robohash.org/${props.user}?set=set2&size=180x180`}/>
    <Name><h2>{props.user}</h2></Name>
</div>);
}

Card.propTypes={
    user: PropTypes.string.isRequired
  }

export default Card;