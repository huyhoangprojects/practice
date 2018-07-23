import { connect } from 'react-redux'
import { increase, decrease } from '../actions/counterAction'

import Counter from '../components/Counter/Counter';

const mapStateToProps = (state, _) => ({
  value: state.count
})

const mapDispatchToProps = (dispatch, _) => ({
  onIncrement: () => dispatch(increase()),
  onDecrement: () => dispatch(decrease())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
