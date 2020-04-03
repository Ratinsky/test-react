import React from 'react';

export default (props) => {
  console.log('HEADER PROPS', props);
  return (
     <header className="App-header" style={{marginBottom: '20px'}}>
      {props.title}
      <div>
        {
          props.links && props.links.length > 0 &&
          props.links.map((item, index) => {
            return 
              // <button
              //  key={index}
              //  onClick={() => props.handleClick(item.title)}
              //  className={item.active ? 'active' : ''}
             // >
             //   {item.title}
             // </button>
            
          })
        }
      </div>
    </header>
  )
};
