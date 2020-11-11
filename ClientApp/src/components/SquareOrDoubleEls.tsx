import * as React from 'react';
import { Alert } from 'reactstrap';
import { Component } from 'react';

function CheckInputsCorrect(start, end) {
    //let isnum = /^[0-9]*$/.test(start);

    if (parseInt(start) > parseInt(end)) { alert('start > end'); return false; }
    if (start == "") { alert('start is empty'); return false; }
    if (end == "") { alert('end is empty'); return false; }
    //if (!isnum) { alert('start input is not correct'); return false; }
    //if (!isnum2) { alert('end input is not correct'); return false; }
     
    return true;
}

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

    callSquare(start, end, event:any) {
        if (CheckInputsCorrect(this.state.start, this.state.end)) {
          
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
    callDouble(start, end, event:any) {
        if (CheckInputsCorrect(this.state.start, this.state.end)) {
            console.log("checked");
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
            console.log("fetched");

            event.preventDefault();
        }
    }

    handleSubmit = (event: any) => {
        console.log("submited");
        if (this.state.isSquare == true) {
            this.callSquare(this.state.start, this.state.end, event);
        }
        else {
            this.callDouble(this.state.start, this.state.end, event);

        }

        event.preventDefault();
    }

    render() {
        return (
            <div>
                <div>Задание 1. Решить задачу по заполнению одномерного массива, значениями, указанными пользователем и выбранным им условием. Входными значениями являются параметры, переданные пользователем через форму.</div>
                <form onSubmit={this.handleSubmit} >
                    <h2> Выберите начало отрезка:<br /></h2>
                    <input type='text' pattern="[0-9]*" name='start' value={this.state.name} onChange={this.handleIntChange} /><br />

                    <h2> Выберите конец отрезка:<br /></h2>
                    <input type='text' pattern="[0-9]*" name='end' value={this.state.name} onChange={this.handleIntChange} /><br />

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
