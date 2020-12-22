import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class PersonalStock extends React.Component{
  constructor(props){
    super(props);
    this.state = {stockValue:null}
  }
  componentDidMount(){
    fetch("http://localhost:8080/stock/api?stock=AAPL").then(result=>{
      this.setState({stockValue:result});
    })
  }
  render(){
    return(
      <div><label>The Stock Value is <b>{this.state.stockValue}</b></label></div>
    )
  }
}

const element = <PersonalStock></PersonalStock>;

ReactDOM.render(element,document.getElementById("root"));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
