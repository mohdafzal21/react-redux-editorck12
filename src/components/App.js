import React, { Component } from 'react';
import { connect } from "react-redux";
import { msgChatMessageRequest } from "../store/actions";
import MonacoEditor from 'react-monaco-editor';
import './App.css'
// import MessagesList from './MessageList';
// import AddMessage from './AddMessage'

import * as CampK12 from '../utils/api';
const headingStyle = {
  position: "fixed",
  top: 0,
  backgroundColor: "white",
  borderBottom: "1px solid"
};
const listStyle = {
  paddingTop: "60px",
  paddingBottom: "60px"
};
const formPosStyle = {
  position: "fixed",
  bottom: 0,
  marginBottom: 0,
  backgroundColor: "white"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '// type your code...',
      messages: ["hi bot" , "ok"],
      textToBeSent: ""
     
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidUpdate() {
    window.scrollTo(0, document.body.scrollHeight);
  }

  handleChange(e) {
    this.setState({ textToBeSent: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { textToBeSent } = this.state;
    const { sendMessage } = this.props;
    if (textToBeSent.trim() === "") {
      alert("Empty is not allowed! ");
      return;
    }
    sendMessage(textToBeSent);
    this.setState({ textToBeSent: "" });
  }


  editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor);
    editor.focus();
  }
  onChange(newValue, e) {
    console.log('onChange', newValue, e);
  }
  applyChange = () => {
    
    CampK12.askSusi();
  }

  render() {
    const { textToBeSent } = this.state;
    const { messages, onProcess } = this.props;
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true
    };
    return (
      <div className="row ">
      <div className="column">
      <button className="btn-apply"onClick={this.applyChange}>Apply Changes</button>
        <MonacoEditor
        width="650"
        height="800"
        language="javascript"
        theme="vs-dark"
        value={code}
        options={options}
        onChange={this.onChange}
        editorDidMount={this.editorDidMount}
      />
      </div>


       
       <div className="column ">
       <div>
        {/* <h1 style={headingStyle}></h1> */}
        {/* message thread */}
        <ul style={listStyle}>
          {messages.map(({ text, sender, isErrorMessage }, index) => (
            <li
              key={index}
              style={{ color: isErrorMessage ? "crimson" : "dodgerblue" }}
            >
              [{sender}]: {text}
            </li>
          ))}
        </ul>
        {/* form input to send chat message */}
        <form onSubmit={this.handleSubmit} style={formPosStyle}>
          <input
            ref={input => input && input.focus()}
            type="text"
            value={onProcess ? "Waiting..." : textToBeSent}
            onChange={this.handleChange}
            placeholder="Type here to chat!"
            disabled={onProcess}
          />
        </form>
      </div>
          
       
       </div>
       
        

      </div>
     
    );
  }
}

const mapStateToProps = state => state;
const mapActionToProps = { sendMessage: msgChatMessageRequest };

export default connect(mapStateToProps, mapActionToProps)(App);