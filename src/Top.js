import React from 'react'
import { Table } from './Table.js'
import data from './Data/data.json'



export class Top extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Day_of_Week: '',
      Number_of_Birthdays: 0,
      number_of_rows: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      number_of_columns: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100],
      Year: 2018,
      week: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
    this.triggerWeekUpdate = this.triggerWeekUpdate.bind(this)
    this.sendBirths = this.sendBirths.bind(this)
  }

  triggerWeekUpdate(Day_of_Week) {
    this.value = Day_of_Week
    this.setState({
      Year: this.props.Year_Input
    })

    this.setState({
      Day_of_Week: this.Day_of_Week
    })
    // this.props.Birthdays(0)


  }

  close(event) {
    document.getElementById("Pop").style.display = "none";
    document.body.style.backgroundColor = "rgb(192,207,204)";
  }
  sendBirths(event) {
    // console.log("hello")
    // console.log(event)
    var b = event.target.getAttribute('births')
    this.setState({
      Number_of_Birthdays: event.target.getAttribute('births')
    })
    this.props.Birthdays(b);
  }

  render() {
    //function to sort json array
    // console.log(data);

    //function to count number of birthdays on a specific weekday
    var numDob = { Sunday: 0, Monday: 0, Tuesday: 0, Wednesday: 0, Thursday: 0, Friday: 0, Saturday: 0 };
    var initials = {
      Sunday: [], Monday: [], Tuesday: [], Wednesday: [], Thursday: [], Friday: [], Saturday: []
    };
    // var number_of_rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var number_of_columns = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];
    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var week = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    var year = this.props.Input_Year
    var color = ['#c18f8f', '#7474d0', '#95dc95', '#e0e080', '#f9b1b1', '#e26b6b']
    var i = 0
    var a = this.props.value

    var code = 0
    initials = this.props.Initials;
    // console.log(this.props.Initials[a].length)
    var y = initials[a].map(function Populate(y1) {
      console.log(y1.length)
      for (var rows = 0; rows < Object.keys(initials[a]).length; rows++) {
        if (number_of_columns[rows] >= Object.keys(initials[a]).length) {
          break;
        }
      }

      var u = rows + 1;
      var l = (100 / u);

      if (code >= color.length) {
        code = 0;
      }
      var style = {
        width: l + '%',
        height: l + '%',
        // maxWidth: l + '%',
        // maxHeight: l + '%',
        color: 'black',
        backgroundColor: color[code++],
        // border: "0.1px solid white",
        float: 'left',
        // fontSize: '80%',
        verticalAlign: 'middle',
        textAlign: 'center',
      }


      return <div style={style} className='init' key={i++} >{y1}</div>

    })

    return (
      <div id="Pop" >
        <button id='close' onClick={this.close.bind(this)}> X</button>
        <h1 id=" Display_Birthdays">Birthdays </h1>
        <Table triggerWeekUpdate={this.triggerWeekUpdate} births={week} text={y} value={this.props.value} />
        {/* <p onClick={this.sendBirths.bind(this)} births={week}> {Object.keys(initials[a]).length}</p> */}
      </div >
    )
  }
}

