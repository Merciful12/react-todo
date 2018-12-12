import React from 'react'

import FilterLink from '../../containers/FilterLink/FilterLink'
import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED,
  SHOW_IMPORTANT,
  SHOW_REGULAR,
  SHOW_UNIPORTANT
} from "../../store/actions/actionsTypes";


import classes from './ToDoUtility.module.scss'

const toDoUtility = () => {
  return (
    <div className={classes.ToDoUtility}>
      Show me only:
      <FilterLink filter={SHOW_ALL}>all</FilterLink>
      <FilterLink filter={SHOW_COMPLETED}>completed</FilterLink>
      <FilterLink filter={SHOW_ACTIVE}>active</FilterLink>
      <FilterLink filter={SHOW_IMPORTANT}>important</FilterLink>
      <FilterLink filter={SHOW_REGULAR}>regular</FilterLink>
      <FilterLink filter={SHOW_UNIPORTANT}>unimportant</FilterLink>
    </div>
  )
}

export default toDoUtility
