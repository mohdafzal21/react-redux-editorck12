import React, { Component } from 'react';
import MonacoEditor from 'react-monaco-editor';
import './App.css'
import MessagesList from './MessageList';
import AddMessage from './AddMessage'

import * as CampK12 from '../utils/api';

class App extends Component {
  
    state = {
      code: '// type your code...',
      messages: ["hi bot" , "ok"],
     
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
       
          <MessagesList messages={this.state.messages}/>

          <AddMessage />
       
       </div>
       
        

      </div>
     
    );
  }
}

export default App;
