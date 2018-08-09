import React from 'react';

export class Year extends React.Component {

  constructor() {
    super();
    this.state = {
      Year_Store: 2018
    }
    this.Check = this.Check.bind(this)
  }

  ShowPopUp(e) {
    // if (document.getElementById('Input_Year'))
    document.getElementById('Error_Pop_Up').style.display = "inherit";
    document.getElementById('Year_Update').disabled = true
  }

  HidePopUp() {
    document.getElementById('Error_Pop_Up').style.display = "none";
  }

  Check(event) {
    // console.log({document.getElementById('Input_Year').value });

    var x = event.target.value;
    // var patt = /[0-9]/;
    if (x >= 1900 && x <= 2100 && x.length === 4) {

      // console.log(this.state.Year_Store)
      this.HidePopUp();
      document.getElementById('Year_Update').disabled = false
    }

    else {
      this.ShowPopUp();
    }
  }

  Submit(e) {
    e.preventDefault();
    var x = document.getElementById('Input_Year').value;
    if (x.length !== 0) {
      this.setState({
        Year_Store: x
      })
      this.props.Disp_Year(x)

    }

  }

  render() {
    // console.log('Year Render');
    // console.log(this.state.Year_Store)
    return (
      <div className="ABC2">
        <h1>Year</h1>
        <form action='#'>
          <input type='string' id='Input_Year' maxLength='4' name="Entered_Year" min={1900} max={2100}
            onInput={this.ShowPopUp} onChange={this.Check.bind(this)}
            placeholder="Enter Year" required />
          <span id="Error_Pop_Up">Enter a year between 1900 to 2100</span>
          <button id="Year_Update" onClick={this.Submit.bind(this)}><b>UPDATE</b></button>
        </form>
      </div >
    )
  }
}


