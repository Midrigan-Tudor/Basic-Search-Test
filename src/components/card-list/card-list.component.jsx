import React from 'react';
import PropTypes from 'prop-types';
import './card-list.styles.css';
import Card from "../card/card.component";

 const CardList=props=>{
   return(<div className="card-list">{props.users.map(user=>
        <Card key={user} user={user}/>  )}</div>);
};

CardList.propTypes={
  users: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default CardList;


 
