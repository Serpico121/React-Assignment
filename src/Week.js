import React from 'react';
import { Table } from './Table.js'



export class Week extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day_week: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      Year: this.props.Year_Input
    }

  }

  render() {
    var initials = this.props.Initials;
    var day_of_week = this.state.day_week.map((element) => {
      return <Table key={element} value={element} text={initials[element].length + ' Birthdays'} triggerWeekUpdate={this.props.triggerMainUpdate} />
    });
    return (
      <div>
        {day_of_week}
      </div >
    )
  }
}
