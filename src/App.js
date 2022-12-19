import './App.css';
import { Component } from 'react';
import BasicInfo from './components/BasicInfo';

export default class App extends Component {

  // EASY: Create a ‘constructor’ that takes in ‘props’ , call the ‘super()’ method, and set ‘this.state’ to an empty object inside of the ‘App’ class. 
    // Inside of ‘this.state’ create a ‘person’ property and set it to an empty object
  constructor(props){
      super();
      this.state = {
          person: {
              fullname: 'Christina Elias',
              phone: '555-555-5555',
              dob: 'April 1, 1997'
          }
      }
  }

  render() {
      return (

          // VERY EASY:
            // Inside of your ‘App’ class ‘render’ method, return a div with your basic information for example name, number, date of birth and etc. 
            // This div should be hard-coded to prepare for the Medium Challenge.
          // MEDIUM: Replace all of the hard-coded with data from ‘this.state.person’ in the constructor.  
            // Then take the returned ‘div’ and create a component, pass state into it and import it as ‘BasicInfo’. 
            // (This challenge should not change the look of the page)
          <div className='App'>
            
              {/* <h1>My Information</h1>
              
                <h2>Full name:</h2>
                  <p> { this.state.person.fullname } </p>
                <h2>Phone number:</h2>
                  <p> { this.state.person.phone } </p>
                <h2>Date of birth:</h2>
                  <p> { this.state.person.dob } </p> */}
              <BasicInfo />
          </div>
      )
  }
}





// function App() {

  
//   return (
//     <div className="App">
//       <h1>My Information</h1>

//       <h2>Full name:</h2>
//       <p>Christina Elias</p>

//       <h2>Phone number:</h2>
//       <p>555-555-5555</p>

//       <h2>Date of birth:</h2>
//       <p>April 1, 1997</p>

//       <BasicInfo />
      
//     </div>
//   );
// }

// export default App;
