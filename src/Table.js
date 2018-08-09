import React from 'react';

export class Table extends React.Component {
  constructor() {
    super();
    this.state = {
      day: '',
      number_of_birthdays: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    }
    this.day = this.day.bind(this)
  }

  componentDidMount() {
    // console.log(this.props.births)
    this.setState({
      number_of_birthdays: this.props.births
    })

    // var x = this.props.births
    // this.props.triggerWeekUpdate(x)
  }

  day(event) {
    // this.state.number_of_birthdays[0]
    let x = this.props.value
    // console.log(this.props.value)
    this.props.triggerWeekUpdate(x);

  }
  render() {
    return (


      // <table className='Tab' value={this.props.value}>
      //   <tr>
      //     <th>{this.props.value}</th>
      //   </tr>
      // </table>


      // <div  value={this.props.value}>
      //  
      < div className='Tabular' >
        <div className='Day' onClick={this.day.bind(this)}>{this.props.value}</div>
        <div className='Div_Tab'>
          {this.props.text}
        </div>
        {/* <table className='Table_Custom'>
          {/* <tr className='Day' name='WeekDay'>
            <th>{this.props.value}</th>
          </tr> }

          <tr>
            {this.props.text}

          </tr>

        </table> */}

      </ div >
    )

  }
}

              // export default Table


