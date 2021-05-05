import React from 'react';

function App() {
	const profiles: UserType[] = [
		{name: "taro", age: 30},
		{name: "kei", age: 28},
	]

	return (
		<div>
			{
			profiles.map((profile, index) => {
				return <User name={profile.name} age={profile.age} key={index}/>
			})
			}
		</div>
	)
}

type UserType = {
	name: string,
	age: number
}

const User = (props: UserType) => {
	return <div>name is {props.name}, age is {props.age}</div>
}

export default App;
