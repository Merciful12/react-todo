import React from 'react'

import classes from './TaskAddButton.module.scss'

import Significance from '../Significance/Significance'

const taskAddButton = (props) => {
  let {color} = props;
  return (
    <div className={classes.TaskAddButton}>
      <div className={classes.Text}>Add</div>
      <Significance onClicked={props.clicked} color={color} />
    </div>
  );
};

export default taskAddButton;
