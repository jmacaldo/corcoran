import React, { Component } from 'react';
import './App.css';
import {Well, Table, Button, Glyphicon} from 'react-bootstrap'

class App extends Component {
  constructor(props){
    super(props);

    this.toggle = this.toggle.bind(this);
    this.reset = this.reset.bind(this);

    //Here is a component-level state. It's simply a boolean toggle for AZ sorting
    this.state = {
      sort: true
    };
  }

  //On component mount, an API call is made to fetch data. By default, data is sorted by ASC order of presidency. Retrieved data is stored to global Redux state and is accesible via this.props
  componentWillMount(){
    this.props.actions.getallprez()
  }

  //This event handler is what fires when the 'sort' button is pressed. It toggles between ASC or DESC sorting of incoming data.
  toggle() {
    if (this.state.sort) {
      this.setState({sort:false})
      this.props.actions.az()
    } else {
        this.setState({sort:true})
        this.props.actions.za()
      }
    }

  //This event handler simply resets the sorting by ASC order of presidency
  reset() {
    this.props.actions.getallprez()
  }



  render() {
    //This function renders the table. Line 55 iterates through the entire presidents object and displays its contents inside a table
    const table = () =>{
      return <Table responsive>
        <thead>
          <tr>
            <th>Name <Button bsSize="xsmall" onClick={this.toggle}><Glyphicon glyph="sort" /> Sort </Button>{'  '}<Button bsSize="xsmall" onClick={this.reset}>Reset</Button></th>
            <th>Birthday</th>
            <th>Birthplace</th>
            <th>Death Day</th>
            <th>Death Place</th>
          </tr>
        </thead>
        <tbody>
          {this.props.presidents.map((item, index) => (
            <tr key={index}>
              <td>{item.president}</td>
              <td>{item.birthday}</td>
              <td>{item.birthplace}</td>
              <td>{item.death_day}</td>
              <td>{item.death_place}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    }
    return (
      <div className="App">
        <Well className="Well">
          <h3 className="Title">Corcoran Group Summer Internship Coding Challenge</h3>
          <h5>View this project's source on <a target="_blank" rel="noopener noreferrer" href="https://github.com/jmacaldo/corcoran">Github</a></h5>
          <h5>Applicant: <a target="_blank" rel="noopener noreferrer" href="https://jmacaldo.github.io/">Joven Macaldo</a></h5>
          {table()}
        </Well>

      </div>
    );
  }
}

export default App;
