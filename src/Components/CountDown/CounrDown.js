import React, { Component } from 'react'
//
import moment from 'moment'
//
import './CountDown.css'

export default class Timer extends Component {
  constructor(props) {
    super(props);
    debugger
    this.state = { endTime: props.endTime };
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const curr = moment()
      const end = moment(this.state.endTime, 'YYYY/MM/DD HH:mm:ss');
      const duration = moment.duration(end.diff(curr));
      this.setState({
        hours: duration.hours(),
        minutes: duration.minutes(),
        seconds: duration.seconds()
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.myInterval)
  }

  render() {
    const { hours, minutes, seconds } = this.state;
    return (
      <div className="countdown">
        <div className="countdown-label">Event starts in</div>
        <div className="countdown-timer">
          <span className="countdown-timer-digit">
            <span className="countdown-timer-number">
              {hours}
            </span>
            hours
        </span>
          <span className="countdown-timer-digit">
            <span className="countdown-timer-number">
              {minutes}
            </span>
            minutes
        </span>
          <span className="countdown-timer-digit">
            <span className="countdown-timer-number">
              {seconds}
            </span>
            seconds
        </span>
        </div>
      </div>
    )
  }
}