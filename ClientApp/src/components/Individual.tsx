
import * as React from 'react';
import { Alert } from 'reactstrap';
import { Component } from 'react';


function fac(n) {
    if (n == 0)
        return 1;
    if (n >= 1) {
        let pr = 1;
        for (; n >= 1; n--) {
            pr = n * pr;
        }
        return pr;
    }
    if (n < 0)
        throw new Error("Cant get fuctorial <0");

}

function GetFunc(a,b,c,k) {
    let sum = 0;
    let val = 0;
    for (var i = 1; i <= k; i++) {
        val = (Math.pow((-1), (a * i - 1))) / fac(b * i + c);
        sum = sum + val;
    }
    //return sum;
    return a+k;
}
//this.state = { a: 3, b: 4, c: 5, k: 1, result: 0 };

function comp(x = 3, y = 4) {
    return x * y;
}

class Home6b extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            a: 3, b: 4, c: 5, k: 1, messages: []
        }
    }
    handleIntChange = (event: any) => {
        //console.log("parseInt event.target.value", parseInt(event.target.value))
        if (isNaN(parseInt(event.target.value))) {
            this.setState({ [event.target.name]: 0 },
                function () {
                    this.setState({
                        messages: [
                            "func() = " + GetFunc(this.state.a, this.state.b, this.state.c, this.state.k).toString(10)
                        ]
                    })
                });

        }
        else {
            this.setState({ [event.target.name]: parseInt(event.target.value) },
                function () {
                    this.setState({
                        messages: [
                            "func() = " + GetFunc(this.state.a, this.state.b, this.state.c, this.state.k).toString(10)
                        ]
                    })
                });
        }
        console.log(this.state);
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
                <div>Написать функцию для решения задачи в соответствии с индивидуальным заданием, входные данные передаются через форму.</div>
                <form onSubmit={this.handleSubmit} >

                    <h2> k:</h2>
                    <input type='text' name='k' pattern="[0-9]+" value={this.state.k} defaultValue="" onChange={this.handleIntChange} /><br />


                    <ul>
                        {this.state.messages.map((x: any) => (<li>{x}</li>))}
                    </ul>

                </form>

            </div >
        );

    }


}

export default Home6b;