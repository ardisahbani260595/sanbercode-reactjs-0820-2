import React, { Component } from 'react';

class Clock extends Component {

    constructor() {
        super()
        this.state = { time: new Date() }
    }

    currentTime() {
        this.setState({
            time: new Date()
        })
    }
    componentWillMount() {
        setInterval(() => this.currentTime(), 1000)
    }


    render() {

        return (
            <center>
                <h1>
                    Sekarang Jam : {this.state.time.toLocaleTimeString()}
                </h1>
            </center>
        )
    }
}

export default Clock;