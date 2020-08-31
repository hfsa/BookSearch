import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card_component';




it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(
		<Card index={1} book={{id: 1, title: 'test', bookSummary: 'test', bookAuthor: 'test'}} deleteBook={() => {}}/>, div);
});