import React from 'react';
import Card from 'react-bootstrap/Card'
import TimePicker from 'react-time-picker';
import moment from 'moment';

class App extends React.Component {
  state = {
    time: '10:00',
    fromtimer:'10:00'
  }

  onChange = time => {
    // console.log(time)
    // const starttime= moment("2020-05-27 9:30")
    // console.log(starttime)
    // const a = moment([21,30,00], "HH:mm:ss")
    // const b = moment([09,30,00], "HH:mm:ss")
    // a.diff(b, 'hours') 
    this.setState({fromtimer:time})
    const startTime = '09:30'
    const endTime = time
    const start = moment(startTime, "HH:mm");
    const end = moment(endTime, "HH:mm");
     const hrs= moment.duration(moment(end, "HH:mm").diff(moment(start, "HH:mm")))
    console.log(hrs.hours()-1,hrs.minutes())
    const times= `${hrs.hours()-1}:${hrs.minutes()}`
    console.log(times)
    this.setState({time:times})
  }

  render() {
    return (
      <div className="container">
        <TimePicker
          onChange={this.onChange}
          value={this.state.fromtimer}
        />
        <Card>
          <Card.Body style={{fontSize:200}}>{this.state.time}Today you dumbfuck</Card.Body>
        </Card>
      </div>
    );
  }
}

export default App;

