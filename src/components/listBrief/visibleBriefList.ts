import { BriefArray } from './../../provider/models/brief';
import { connect } from 'react-redux'
import OneBrief from '../brief/brief';
import { filterBriefListByproductId } from '../../reducer/briefList.reducer'

type FilterType = 'SHOW_ALL' | number

const getVisibleBrief = (todos: BriefArray, filter: FilterType) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case typeof 1:
      return todos.filter(s => s.productId === filter)
  }
}

const mapStateToProps = (state: {todos: BriefArray, visibilityFilter: FilterType}) => {
  return {
    todos: getVisibleBrief(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onTodoClick: (id: number) => {
      dispatch(filterBriefListByproductId(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(OneBrief)

export default VisibleTodoList


