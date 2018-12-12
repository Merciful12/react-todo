import React from 'react'

import classes from './Link.module.scss'

const Link = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    className={classes}
    disabled={active}
  >
    {children}
  </button>
)

export default Link