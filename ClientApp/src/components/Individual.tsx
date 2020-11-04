
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


class Home6b extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { a: 3, b: 4, c: 5, k: 1};

        this.handleIntChange = this.handleIntChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleIntChange = (event: any) => {
        this.setState({ [event.target.name]: parseInt(event.target.value) });
        this.state.result = GetFunc(this.state.a, this.state.b, this.state.c, this.state.k);

        console.log(this.state.a, this.state.b, this.state.c, this.state.k, this.state.result);
        //event.preventDefault();
    }
    handleSubmit = (event: any) => {
        var that = this;
        //this.state.result = GetFunc(a, b, c, k);
        that.state.result = GetFunc(this.state.a, this.state.b, this.state.c, this.state.k);
        console.log(this.state.a, this.state.b, this.state.c, this.state.k, this.state.result);
        event.preventDefault();

    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <h2> введите k:<br /></h2>
                    <input type='text' name='k' value={this.state.name} onChange={this.handleIntChange} /><br />


                    <div><p>
                        <input type="submit" value="Отправить" />
                    </p></div>
                </form>
                <div>
                        result is: {this.state.result}
                </div>

            </div>
            );

            }


}

export default Home6b;