import React from 'react'
import logo from './logo.svg';
import './App.css';


export default class App extends React.Component {
constructor(){
  super();
  this.state={
    weatherData:"",
    city:""
  }
}
componentDidMount(){
 console.log("inside component mound")
 var url="http://localhost:3000/api";
 console.log(this.state)
 
}
fetchWeather=()=>{
  var url2="http://api.weatherstack.com/current?access_key=1b6fdda898c99d874820e27ed6aa564a&query="+this.state.city;
  var url3="http://localhost:3000/"+this.state.city;
   fetch(url2)
  .then(response=>response.json())
  .then(data=>console.log(data))
 // .then(data=>this.setState({weatherData:data.current}))
}
handleSubmit=async(event)=>{
  event.preventDefault()
  console.log("the city is"+this.state.city)
  this.fetchWeather();

}
handleChange=(event)=>{
console.log(event.target.value)
this.setState({city:event.target.value})
}
render(){
  //console.log(this.state.weatherData)
  return (
    <div className="App">
      <header className="App-header">
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.city} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
        <h1>{this.state.weatherData.pressure}</h1>
        <p>{this.state.weatherData.pressure}</p>
      </header>
    </div>
  );
}
}



