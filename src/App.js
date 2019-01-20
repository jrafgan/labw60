import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form/Form";
import ChatBox from "./components/ChatBox/ChatBox";

class App extends Component {
    state = {
        messages: [],
        datetime: null
    };

    endpointURL = 'http://146.185.154.90:8000/messages';
    interval = null;

    getNewMessages(datetime = this.state.datetime) {
        console.log('[Method] getNewMessages()');
        let url = this.endpointURL;
        if (datetime !== null) {
            url = this.endpointURL + '?datetime=' + datetime;
            console.log('[Datetime]', datetime);
            console.log('[URL]', url);
        }

        fetch(url).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Request failed');
        }).then(result => {
            console.log('[Result]', result);
            if (result.length !== 0) {
                console.log('[DATA]', result);
                const messages = [
                    ...this.state.messages,
                    ...result
                ];
                const datetime = result[result.length - 1].datetime;
                this.setState({messages, datetime});
            }

            console.log('[State]', this.state.messages);
        });
    };

    componentDidMount() {
        this.interval = setInterval(() => {
            this.getNewMessages()
        }, 3000);
        console.log('Interval:', this.interval);
    };

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    publishMessage = (formData) => {
        const data = new URLSearchParams();
        data.set('message', formData.message);
        data.set('author', formData.author);
        fetch(this.endpointURL, {
           method: 'POST',
           body: data,
        }).then(console.log('New message published'));
    };

  render() {
    return (
      <div className="App">
        <Form publishMessage={this.publishMessage} />
          <ChatBox messages={this.state.messages}/>
      </div>
    );
  }
}

export default App;
