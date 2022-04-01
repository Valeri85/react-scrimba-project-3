import React from 'react';
import Nav from './components/Nav.jsx';
import Header from './components/Header.jsx';
import datas from './components/datas.jsx';
import Card from './components/Card.jsx';

function App() {
	const cards = datas.map(data => <Card key={data.id} {...data} />);
	return (
		<>
			<Nav />
			<Header />
			<div className="cards">{cards}</div>
		</>
	);
}

export default App;
