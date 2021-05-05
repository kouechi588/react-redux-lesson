import React from 'react';

function App2() {
  return (
		<>
			<label htmlFor="foo">foo</label>
			<input id="foo" type="text" onChange={() => {console.log("changed")}}/>
			<h1>Hello World!!</h1>
		</>
  );
}

const App = () => {
	return (
		<div>
			<Cat></Cat>
			<Cat></Cat>
		</div>
	)
}

const Cat = () => {
	return <div>Meow!</div>
}

export default App;
