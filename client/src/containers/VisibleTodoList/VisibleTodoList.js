import { connect } from 'react-redux'
import * as actions from '../../store/actions'
import ToDoItems from '../../components/ToDoItems/ToDoItems'
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
  SHOW_IMPORTANT,
  SHOW_REGULAR,
  SHOW_UNIPORTANT
} from '../../store/actions/actionsTypes'
import {IMPORTANT, REGULAR, UNIMPORTANT} from '../../utils/changeSign'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos
    case SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    case SHOW_IMPORTANT:
      return todos.filter(t => t.significance === IMPORTANT && !t.completed)
    case SHOW_REGULAR:
      return todos.filter(t => t.significance === REGULAR && !t.completed)
    case SHOW_UNIPORTANT:
      return todos.filter(t => t.significance === UNIMPORTANT && !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  tasks: getVisibleTodos(state.tasks.tasks, state.visibilityFilter.filter),
  loading: state.tasks.loading
})

const mapDispatchToProps = dispatch => ({
  onFetchTasks: () => dispatch(actions.fetchTasks()),
  onRemoveTask: (taskId) => dispatch(actions.removeTask(taskId)),
  onToggleComplete: (task) => dispatch(actions.toggleComplete(task)),
  onChangeSign: (task) => dispatch(actions.changeSignTask(task)),
  onDnD: (taskId, new_position) => dispatch(actions.changePositionTask(taskId, new_position)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoItems)