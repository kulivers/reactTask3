import * as React from 'react';
import { Alert } from 'reactstrap';
import { Component } from 'react';


function comp(x = 3, y = 4) {
    return x * y;
}

class Home6a extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            x: 3,
            y: 4,
            messages:[]
        }
    }
    handleIntChange = (event: any) => {


                //console.log("parseInt event.target.value", parseInt(event.target.value))
                if (isNaN(parseInt(event.target.value))) {
                    this.setState({ [event.target.name]: 0 },
                        function () {
                            this.setState({
                                messages: [
                                    "func() = " + comp().toString(10),
                                    "func(x) = " + comp(this.state.x).toString(10),
                                    "func(y) = " + comp(undefined, this.state.y).toString(10),
                                    "func(x,y) = " + comp(this.state.x, this.state.y).toString(10),
                                ]
                            })
                        });

                }
                else{
                this.setState({ [event.target.name]: parseInt(event.target.value) },
                function () {
                this.setState({
                    messages: [
                        "func() = " + comp().toString(10),
                        "func(x) = " + comp(this.state.x).toString(10),
                        "func(y) = " + comp(undefined, this.state.y).toString(10),
                        "func(x,y) = " + comp(this.state.x, this.state.y).toString(10),
                    ]
                })
                    });
                }

                event.preventDefault();

    }
    handleSubmit = (event: any) => {
        //console.log("submited");
        //if (this.state.isSquare == true) {
        //    this.callSquare(this.state.start, this.state.end, event);
        //}
        //else {
        //    this.callDouble(this.state.start, this.state.end, event);

        //}

        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >

                <h2> x:</h2>
                <input type='text' name='x' pattern="[0-9]+" value={this.state.x} defaultValue="" onChange={this.handleIntChange} /><br />

                <h2> y:</h2>
                <input type='text' name='y' pattern="[0-9]*" value={this.state.y} defaultValue="" onChange={this.handleIntChange} /><br />


                    <ul>
                    {this.state.messages.map((x: any) => (<li>{x}</li>))}
                </ul>

                </form>

            </div >
        );

    }


}

export default Home6a;