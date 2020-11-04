import * as React from 'react';
import { Alert } from 'reactstrap';
import { Component } from 'react';


class Home2 extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { firstEl: 0, secondEl: 0, thirdEl: 0, searchEl: 0, messages: [] };

    }

    handleTextChange = (event: any) => {
        this.setState({ [event.target.name]: event.target.value });

    }

    handleIntChange = (event: any) => {
        //value ->int
        this.setState({ [event.target.name]: parseInt(event.target.value) });

    }

    

    callSearch(fst, sec, thd, sch, event) {
            var that = this;
        fetch('api/FindElement/Search', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                // We convert the React state to JSON and send it as the POST body
                body: JSON.stringify(this.state)
            }).then(function(response) {
                console.log(response);
                response.json().then(function(json) {
                    that.setState({ messages: !response.ok ? [`status: ${response.statusText}`] : json });
                });
            });

            event.preventDefault();
        }
    

    handleSubmit = (event: any) => {
        console.log("submited")
        this.callSearch(this.state.firstEl, this.state.secondE5l, this.state.thirdEl, this.state.searchEl, event);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <h2> введите первый элемент массива:<br /></h2>
                    <input type='text' name='firstEl' value={this.state.name} onChange={this.handleIntChange} /><br />

                    <h2> введите второй элемент массива:<br /></h2>
                    <input type='text' name='secondEl' value={this.state.name} onChange={this.handleIntChange} /><br />

                    <h2> введите третий элемент массива:<br /></h2>
                    <input type='text' name='thirdEl' value={this.state.name} onChange={this.handleIntChange} /><br />

                    <h2> введите искомый элемент массива:<br /></h2>
                    <input type='text' name='searchEl' value={this.state.name} onChange={this.handleIntChange} /><br />

                    
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

export default Home2;
