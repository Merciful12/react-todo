import React from 'react';
import classes from './TaskAddButton.css';

const taskAddButton = (props) => {
  let {color} = props;
  let circleClasses = [classes.Sign, classes[color]];

  return (
    <div className={classes.TaskAddButton}>
      <div className={classes.Text}>Add</div>
      <div className={ circleClasses.join(' ') } onClick={props.clicked} />
    </div>
  );
};

export default taskAddButton;
