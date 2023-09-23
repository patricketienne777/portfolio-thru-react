import React from 'react';

function footer() {
  // Your component logic and state can go here

  const linkStyle = {
    color: 'blue',
  };
    return (
    <div>

        <a href ="https://github.com/patricketienne777" style={linkStyle}></a>
        <a href="https://www.linkedin.com/in/patrick-etienne-b500ba199/" style={linkStyle} ></a>
        <a href="https://stackoverflow.com/users/22621152/patrick777"  style={linkStyle} ></a>
        
    </div>
  );
}

export default footer;
