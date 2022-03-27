import React from 'react';

const Button = (props) => {
    return <button onClick={props.clickHandler}>
      {props.operation}
    </button>
}
export default Button;