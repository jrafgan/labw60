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
  internal = null;

  componentDidMount() {
      fetch(this.endpointURL).then(response => {
         if (response.ok) {
             return response.json();
         }
         throw new Error('Request failed');
      }).then(messages => {
          const datetime = messages[messages.length - 1].datetime;
          console.log(datetime);
          this.setState({messages, datetime});
      });
      // then(() => {
      //     fetch(this.endpointURL+'/messages?datetime='+this.state.datetime).then(response=>{
      //         if (response.ok) {
      //             return response.json();
      //         }
      //         throw new Error('Request failed');
      //     });
      //     console.log(this.state.datetime);
      // });
  };

    someHandler = (formData) => {
        const data = new URLSearchParams();
        data.set('message', formData.message);
        data.set('author', formData.author);
        fetch(this.endpointURL, {
           method: 'POST',
           body: data,
        }).then(console.log('All is ok'));
    };

  render() {
    return (
      <div className="App">
        <Form publishMessage={this.someHandler} />
          <ChatBox messages={this.state.messages}/>
      </div>
    );
  }
}

export default App;
