import React from 'react'
import { Name } from './Name.js'
import { Year } from './Year.js'



export class Project extends React.Component {
  constructor() {
    super();
    this.state = {
      Year: ''
    }
    this.UpdateMain = this.UpdateMain.bind(this)
  }

  UpdateMain(x) {
    this.setState({ Year: x });
    console.log(x)
    this.props.Entered_Year(x);
  }
  render() {
    console.log('Project Render');
    // console.log(this.state.value)
    return (
      <div >
        <Name />
        <Year Disp_Year={this.UpdateMain.bind(this)} />
      </div>
    )
  }
}


