import { Component } from 'react';

// MEDIUM: Replace all of the hard-coded with data from ‘this.state.person’ in the constructor.  
// Then take the returned ‘div’ and create a component, pass state into it and import it as ‘BasicInfo’. 
// (This challenge should not change the look of the page)

// HARD: Now that you have a basic react app to display one person’s worth of information, now modify the app to iterate over an array of people’s basic information, while still keeping the new list of contacts in the top-level of state. (Optional: add styling to space out each person’s info)


export default class BasicInfo extends Component {
    constructor(props){
        super();
        this.state = {
            person: [
                {
                    fullname: 'Christina Elias',
                    phone: '555-555-5555',
                    dob: 'April 1, 1997'
                },
                {
                    fullname: 'John Smith',
                    phone: '555-555-5556',
                    dob: 'June 7, 1990'
                },
                {
                    fullname: 'Jane Smith',
                    phone: '555-555-5557',
                    dob: 'December 15, 1970'
                }
            ]
        }

        // function getContactNames(props){
        //     this.state.person.map(x => console.log(x.fullname))
            // for (let i = 0; i < this.state.person.length; i++){
            //     let names = []
            //     let addedNames = names.push(this.state.person[i].fullname);
            //     console.log(addedNames);
            // }
        }

        // getContactNames();
    // }

    render() {
        return (
            <div>
                <h1>Contacts:</h1>
                <p>{this.state.person.map(x => x.fullname)}</p>
            </div>
        )
    }
}