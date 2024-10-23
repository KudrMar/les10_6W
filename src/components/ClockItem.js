import React, { Component } from 'react';
import moment from 'moment';

export default class ClockItem extends Component {
    constructor(props) {
        super(props);
        this.state = { time: '00:00:00' };
        this.setClock = this.setClock.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    render() {
        const date = this.state.time.split(':');
        let hour = Number(date[0]);
        const minute = Number(date[1]);
        const second = Number(date[2]);
        hour = hour > 12 ? hour - 12 : hour;
        return (
            <>
                <div className='clock'>
                    <div className='clockTop'>
                        <div>{this.props.clocksSetup.name}</div>
                        <div className="close" onClick={this.handleClose}>✘</div>
                    </div>
                    <div className='dialFace'>
                        <span
                            className='hour hand'
                            style={{ transform: `rotate(${360 / 12 * hour + 30 / 60 * minute + 0.5 / 60 * second}deg)` }}
                        />
                        <span
                            className='minute hand'
                            style={{ transform: `rotate(${360 / 60 * minute + 6 / 60 * second}deg)` }}
                        />
                        <span
                            className='second hand'
                            style={{ transform: `rotate(${360 / 60 * second}deg)` }}
                        />
                    </div>
                </div>
            </>
        );
    }

    handleClose() {
        this.props.onClose(this.props.clocksSetup.id);
    }


    setClock() {
        const time = moment().utcOffset(Number(this.props.clocksSetup.timeZone)).format('HH:mm:ss');
        this.setState({ time: time });
    };

    componentDidMount() {
        this.setClock();
        this.timeInterval = setInterval(this.setClock, 1000);
    }

    componentWillUnmount() {
        this.timeInterval = clearInterval(this.timeInterval);
    }
}

