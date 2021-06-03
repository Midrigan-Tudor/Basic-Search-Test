import React from "react"
import PropTypes from 'prop-types';
import "../card/card.styles.css"

const Card= props=>{
    return(
<div className="card-container">
    <img alt='monster' src={`https://robohash.org/${props.user}?set=set2&size=180x180`}/>
    <h2>{props.user}</h2>
</div>);
}

Card.propTypes={
    user: PropTypes.string.isRequired
  }

export default Card;