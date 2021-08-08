import React, { Fragment } from 'react';
import Button from '../UI/Button';
import classes from './QuestionArea.module.css';

const QuestionArea = props =>{
    return(
        <Fragment>
            <div className={classes.left}>
                <h2>Question {props.index}/4</h2>
                <p>{props.question}</p>
            </div>
            <div className={classes.right}>
                {props.options.map(option => <Button key={option.option} onClick={props.onClick} check={props.check} value={option.isCorrect}>{option.option}</Button>)}
            </div>
        </Fragment>
    );
}

export default QuestionArea;
