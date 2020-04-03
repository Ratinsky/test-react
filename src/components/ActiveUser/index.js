import React from 'react';

export default props => {
  console.log('=====',props);
  return (
    <div className='activeUser'>
      <div className="activeUser__image">
        <img src={props.user && props.user.image} />
      </div>
      <p className="activeUser__text">
        {props.user && props.user.name}
      </p>
      <p className="activeUser__text">
        {props.user && props.user.age}
      </p>
      <p className="activeUser__text">
        {props.user && props.user.phone}
      </p>
    </div>
  )
};
