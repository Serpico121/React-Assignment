import React from 'react'
import data from './Data/data.json'

export class Name extends React.Component {
  constructor() {
    super();
    this.state = {
      items: []
    }
  }
  // componentWillMount() {
  //   fetch('https://swapi.co/api/people/?format=json')
  //     .then(response => response.json())
  //     .then(({ results: items }) => this.setState({ items }))
  // }
  render() {
    let x = JSON.stringify(data, null, 2)   //value,replacer,space

    return (
      <div className="ABC" >
        <h1>Name :-</h1>
        {/* <input type="textbox" className="" /> */}
        {/* {JSON.stringify(json_text.name, null, 2)} */}
        <textarea id="json" value={x} readOnly='true' />

      </div>
    )
  }
}
