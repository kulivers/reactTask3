import * as React from 'react';
import { Alert } from 'reactstrap';
import { Component } from 'react';


class Home extends  React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { startOtr: 0, endOtr: 0, isSquare: false, messages: [] };

     }

    handleChange = (event: any) => {//ворк гуд
        this.setState({ [event.target.name]: event.target.value });
        
    }

    handleBoolChange = (event: any) => {
        this.setState({ [event.target.name]: event.target.value !== "false" });
    }


    handleSubmit = (event: any) => {

        console.log("this.state.isSquare");
        console.log(this.state.isSquare);
        console.log();

        if (this.state.startOtr < this.state.endOtr) {
            alert('start < end');

        }
        else{
        var that = this;
        fetch('api/UserRegister', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // We convert the React state to JSON and send it as the POST body
            body: JSON.stringify(this.state)
        }).then(function (response) {
            console.log(response);
            response.json().then(function (json) {
                that.setState({ messages: !response.ok ? [`status: ${response.statusText}`] : json.messages });
            });
        });

        event.preventDefault();
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <h2> Выберите начало отрезка:<br /></h2>
                    <input type='text' name='startOtr' value={this.state.name} onChange={this.handleChange} /><br />

                    <h2> Выберите конец отрезка:<br /></h2>
                    <input type='text' name='endOtr' value={this.state.name} onChange={this.handleChange} /><br />

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
