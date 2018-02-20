import * as React from 'react'

type PropsFromState = {
  onPlusSubmit: (count: number) => any,
  onMinusSubmit: (count: number) => any
}

type Props = PropsFromState

type State = {
  text: string
}

export default class PlusMinus extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      text: "0"
    }
  }

  changeFormText(e: React.SyntheticEvent<HTMLInputElement>) {
    this.setState({
      text: e.currentTarget.value
    })
  }

  handlePlusSubmit() {
    this.props.onPlusSubmit(parseInt(this.state.text, 10))
  }

  handleMinusSubmit() {
    this.props.onMinusSubmit(parseInt(this.state.text, 10))
  }

  render() {
    return (
      <div>
        <input value={this.state.text} onChange={this.changeFormText.bind(this)} />
        <button onClick={this.handlePlusSubmit.bind(this)}>追加する</button>
        <button onClick={this.handleMinusSubmit.bind(this)}>減少する</button>
      </div>
    )
  }

}
