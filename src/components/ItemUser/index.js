import React from 'react';

export default props => {
  const {
    name,
    image,
    age,
    phone,
    updateActiveUser,
  } = props;
  return (
    <div className='itemUser' onClick={() => updateActiveUser({...props})}>
      <div className="itemUser__image">
        <img src={image} />
      </div>
      <div>
        {name}
      </div>
      <div>
        {age}
      </div>
      <div>
        {phone}
      </div>
    </div>
  );
}
