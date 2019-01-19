import React, {Component} from 'react';
import './Form.css';

class Form extends Component {
    state = {
        message: null,
        author: null
    };

    updateMessage = (event) => {
        this.setState({message: event.target.value});
    };

    updateAuthor = (event) => {
        this.setState({author: event.target.value});
    };

    submitForm = (event) => {
        event.preventDefault();
        if (this.state.message && this.state.author) {
           this.props.publishMessage({message: this.state.message, author: this.state.author});
        }
    };

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <label htmlFor="message">Messsage:</label>
                <input type="text" id="message" placeholder="Some message ..." onChange={this.updateMessage} />

                <label htmlFor="author">Author:</label>
                <input type="text" id="author" placeholder="Student" onChange={this.updateAuthor}/>
                <button type="submit" id="btn-addMsg">Send</button>
            </form>
        );
    }
}

export default Form;