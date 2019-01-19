import React, {Component} from 'react';
import './App.css';
import Form from "./components/Form/Form";
import ChatBox from "./components/ChatBox/ChatBox";

class App extends Component {
    state = {
        messages: [],
        datetime: null,
    };

    endpointURL = 'http://146.185.154.90:8000/messages';

    componentDidMount() {
        this.fetchIt();
    };

    fetchIt() {
        fetch(this.endpointURL).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Request failed');
        }).then(messages => {
            let copy1 = this.state.messages;
            let copy2 = this.state.datetime;
            copy2 = messages[messages.length - 1].datetime;
            copy1 = messages;
            this.setState({messages: copy1, datetime: copy2});
        });
    };

    interval = setInterval(() => {
        this.fetchIt();
    }, 3000);

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    someHandler = (formData) => {
        const data = new URLSearchParams();
        data.set('message', formData.message);
        data.set('author', formData.author);
        this.componentWillUnmount();
        fetch(this.endpointURL, {
            method: 'POST',
            body: data,
        }).then(()=>{
            this.interval=setInterval(() => {
                this.fetchIt();
            }, 3000);
        });
    };

    render() {
        return (
            <div className="App">
                <Form publishMessage={this.someHandler}/>
                <ChatBox messages={this.state.messages}/>
            </div>
        );
    }
}

export default App;
