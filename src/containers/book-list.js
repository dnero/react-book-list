import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { selectBook } from '../actions/index';

class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item" 
                    key={book.title}>
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
	// whatever is returned from here will show up as props inside of BookList
	return {
		books: state.books
	};
}

// anything returned from this fn will be a prop on the BookList container
function mapDispatchToProps (dispatch) {
    // whenever selectBook is called, the result should be passed to all reducers
    return bindActionCreators({ selectBook }, dispatch);
}

// promote BookList from component to container
// it needs to know about this new dispatch method.
// make it available as a prop
export default connect(mapStateToProps)(BookList);