import React from 'react';
import classes from './Result.module.css';
const Result = props => {
    return(
        <div className={classes.div}>
            {props.answer === 4 ? <h2>!!!! Congratulations You won</h2> :
            <h2>Out of {props.answer}/4 is Correct</h2>}
        </div>
    )
}

export default Result;