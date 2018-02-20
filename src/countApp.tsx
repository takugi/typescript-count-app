import * as React from 'react'
import { connect, MapStateToPropsParam } from 'react-redux'
import { ReduxState, Dispatch } from './store'
import { incrementAction, decrementAction, plusAction, minusAction } from './reducer'
import Counter from './counter'
import PlusMinus from './plusminus'

type PropsFromDispatch = {
  dispatch: Dispatch
}

type PropsFromState = {
  count: number
}

type Props = PropsFromState & PropsFromDispatch

class CountApp extends React.Component<Props, {}> {

  incrementHandleClick() {
    this.props.dispatch(incrementAction())
  }

  decrementHandleClick() {
    this.props.dispatch(decrementAction())
  }

  plusHandleSubmit(count: number) {
    this.props.dispatch(plusAction(count))
  }

  minusHandleSubmit(count: number) {
    this.props.dispatch(minusAction(count))
  }

  render() {
    return <>
      <Counter count={this.props.count} />
      <button onClick={this.incrementHandleClick.bind(this)}>Increment</button>
      <button onClick={this.decrementHandleClick.bind(this)}>Decrement</button>
      <PlusMinus onPlusSubmit={(count) => this.plusHandleSubmit(count)}
                 onMinusSubmit={(count) => this.minusHandleSubmit(count)} />
    </>
  }
}

const select: MapStateToPropsParam<PropsFromState, {}, {}> =
  (state: ReduxState) => ({ count: state.countApp.count })

export default connect(select)(CountApp)
