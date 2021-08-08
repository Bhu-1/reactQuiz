import React from 'react';
import classes from './Button.module.css';

const Button = (props) =>{
    const checkQuestion = () =>{
        props.check(props.value);
        props.onClick();
    }
    return(
        <button className={classes.button} onClick={checkQuestion}>{props.children}</button>
    );
}

export default Button;