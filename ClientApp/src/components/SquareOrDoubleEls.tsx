import * as React from 'react';
import { Alert } from 'reactstrap';
import { Component } from 'react';


class Home extends  React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { start: 0, end: 0, isSquare: false, messages: [] };

     }

    handleTextChange = (event: any) => {
        this.setState({ [event.target.name]: event.target.value });
        
    }

    handleIntChange = (event: any) => {
        //value ->int
        this.setState({ [event.target.name]: parseInt(event.target.value)});
        
    }

    handleBoolChange = (event: any) => {
        this.setState({ [event.target.name]: event.target.value !== "false" });
    }

    callSquare(start, end, event) {
        if (this.state.start > this.state.end) {
            alert('start > end');

        }
        else {
            var that = this;
            fetch('api/ArrayCalculator/Square', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                // We convert the React state to JSON and send it as the POST body
                body: JSON.stringify(this.state)
            }).then(function (response) {
                console.log(response);
                response.json().then(function (json) {
                    that.setState({ messages: !response.ok ? [`status: ${response.statusText}`] : json });
                });
            });

            event.preventDefault();
        }
    }
    callDouble(start, end, event) {
        if (this.state.start > this.state.end) {
            alert('start > end');

        }
        else {
            var that = this;
            fetch('api/ArrayCalculator/Double', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                // We convert the React state to JSON and send it as the POST body
                body: JSON.stringify(this.state)
            }).then(function (response) {
                console.log(response);
                response.json().then(function (json) {
                    that.setState({ messages: !response.ok ? [`status: ${response.statusText}`] : json });
                });
            });

            event.preventDefault();
        }
    }

    handleSubmit = (event: any) => {

        if (this.state.isSquare == true) {
            this.callSquare(this.state.start, this.state.end, event);
        }
        else {
            this.callDouble(this.state.start, this.state.end, event);

        }


    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <h2> Выберите начало отрезка:<br /></h2>
                    <input type='text' name='start' value={this.state.name} onChange={this.handleIntChange} /><br />

                    <h2> Выберите конец отрезка:<br /></h2>
                    <input type='text' name='end' value={this.state.name} onChange={this.handleIntChange} /><br />

                    <h3> Укажите вид действия:<br /></h3>
                    <input type="RADIO" checked={this.state.isSquare} name="isSquare" value="true" onChange={this.handleBoolChange} /> Возведение в квадрат <br />
                    <input type="RADIO" checked={!this.state.isSquare} name="isSquare" value="false" onChange={this.handleBoolChange} /> Удваивание элементов

                    <div><p>
                        <input type="submit" value="Отправить" />
                    </p></div>
                </form>
                <div>
                    <ul>
                        {this.state.messages.map((x: any) => (<li>{x}</li>))}
                    </ul>

                </div>

            </div>
        );
    }
}

export default Home;
