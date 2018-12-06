import React from 'react'

import classes from './TaskAddButton.module.scss'

import Significance from '../Significance/Significance'

const taskAddButton = (props) => {
  let {color} = props;
  return (
    <div className={classes.TaskAddButton}>
      <div onClick={props.clickAdd} className={classes.Text}>Add</div>
      <Significance onClicked={props.clickOnSing} color={color} />
    </div>
  );
};

export default taskAddButton;
