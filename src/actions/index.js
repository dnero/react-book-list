export default function selectBook(book) {
	// selectBook needs to return an actions
	return {
		type: 'BOOK_SELECTED',
		payload: book
	};
}