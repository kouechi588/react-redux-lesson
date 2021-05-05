import React, { Component } from 'react';


const App = () => {
	return (
		<div>
			<Counter count={100}></Counter>
		</div>
	)
}

type Props = {
	count: number
}

type State = {
	count: number
}

class Counter extends Component<Props, State> {
	//コンポーネント初期化時にコールされる
	constructor(props: Props){
		super(props)
		this.state = { count: 0 }
		console.log(this.state)
	}

	plus = () => {
		this.setState({ count: this.state.count + 1 })
	}

	minus = () => {
		//状態に関連するDOMを再レンダーする, 直接stateは更新NG
		//setStateはrenderを実行する
		this.setState({ count: this.state.count - 1 })
	}
	
	render() {
		return (
			<>
				<div>counter: { this.state.count }</div>
				<button onClick={this.plus}>plus</button>
				<button onClick={this.minus}>minus</button>
			</>
		)
	}
}

// state: コンポーネント内部でのみ利用可能
// state: mutable

// type UserType = {
// 	name: string,
// 	age: number
// }

// const User = (props: UserType) => {
// 	return <div>name is {props.name}, age is {props.age}</div>
// }

export default App;
