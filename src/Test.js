import React from 'react';
import { Week } from './Week.js'
import { Project } from './Project.js'
import { Top } from './Top.js'
import './Styles/style.css'
import data from './Data/data.json'


class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      Year: 2018,
      WeekDay: 'Monday',
      Number_of_Birthdays: { Sunday: 0, Monday: 0, Tuesday: 0, Wednesday: 0, Thursday: 0, Friday: 0, Saturday: 0 },
      Initials: { Sunday: [], Monday: [], Tuesday: [], Wednesday: [], Thursday: [], Friday: [], Saturday: [] },
      num_birth: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    }
    this.update = this.update.bind(this)
    this.GetYear = this.GetYear.bind(this)
    this.Birthdays = this.Birthdays.bind(this)

  }

  update(y) {
    this.setState({
      WeekDay: y
    })
    document.getElementById('Pop').style.display = "inherit";
    document.body.style.backgroundColor = "rgb(50,50,50,0.3)";
  }


  GetYear(x) {
    // console.log('In Main Too')
    // console.log(x)
    this.setState({
      Year: x
    })
  }

  Birthdays(num_of_birthdays) {
    this.num_birthdays = { num_of_birthdays }
    // console.log(num_of_birthdays)
    this.setState({
      num_birth: num_of_birthdays
    })

  }

  render() {
    data.sort(function (a, b) {
      var A = new Date(a.birthday.slice(6) + "-" + a.birthday.slice(0, 2) + "-" + a.birthday.slice(3, 5));
      var B = new Date(b.birthday.slice(6) + "-" + b.birthday.slice(0, 2) + "-" + b.birthday.slice(3, 5));
      var flag = 100;
      if (A === B) { flag = 0; }
      if (A < B) { flag = -1; }
      if (A > B) { flag = 1; }
      return flag;
    });
    // console.log(data);

    //function to count number of birthdays on a specific weekday
    var numDob = { Sunday: 0, Monday: 0, Tuesday: 0, Wednesday: 0, Thursday: 0, Friday: 0, Saturday: 0 };
    var initials = {
      Sunday: [], Monday: [], Tuesday: [], Wednesday: [], Thursday: [], Friday: [], Saturday: []
    };
    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var week = [0, 0, 0, 0, 0, 0, 0]
    var year = this.state.Year


    data.map(function (person) {
      //calculating the initials and storing
      var name = person.name;
      var init = name.match(/\b\w/g) || [];
      // console.log('1st One')

      // console.log(init)
      init = ((init.shift() || '') + (init.pop() || '')).toUpperCase();
      // console.log('2nd One')
      // console.log(init)


      var month = person.birthday.slice(0, 2);
      var date = person.birthday.slice(3, 5);
      var dob_year = person.birthday.slice(6);
      var r = "";
      r = year + "-" + month + "-" + date;
      var d = new Date(r);
      if (year >= dob_year) {
        var n = weekday[d.getDay()];
        initials[n].push(init)
        // [Sunday].push(init);
        switch (n) {
          case "Sunday":
            week[0]++;
            break;
          case "Monday":
            week[1]++;
            break;
          case "Tuesday":
            week[2]++;
            break;
          case "Wednesday":
            week[3]++;
            break;
          case "Thursday":
            week[4]++;
            break;
          case "Friday":
            week[5]++;
            break;
          case "Saturday":
            week[6]++;
            break;
        }
        numDob[n] += 1;
      }

    });
    return (
      <div className='Main_Component'>
        <h1 id='App_Title'>Birthday Calender {this.state.Year}</h1>
        <Top value={this.state.WeekDay} Initials={initials} Birthdays={this.Birthdays} Input_Year={this.state.Year} />
        <Week triggerMainUpdate={this.update} Initials={initials} Hafta={week} num_birthdays={this.state.num_birth} value={this.state.WeekDay} Year_Input={this.state.Year} />
        <Project Entered_Year={this.GetYear.bind(this)} />

      </div>
    )
  }
}


export default Main
