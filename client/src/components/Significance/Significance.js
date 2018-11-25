import React from 'react'

import classes from './Significance.module.scss'

function significance(props) {
  const {color} = props
  let significantClasses = [classes.Significance, classes[color]];
  return (
    <div className={significantClasses.join(' ')}
      onClick={props.onClicked}>
    </div>
  )
}

export default significance
