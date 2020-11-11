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
function CheckInputsCorrect(m, n) {
    //let isnum = /^[0-9]*$/.test(start);

    if (m > n) { alert('error, m > n'); return false; }
    if (m == "") { alert('m is empty'); return false; }
    if (n == "") { alert('n is empty'); return false; }
    //if (!isnum) { alert('start input is not correct'); return false; }
    //if (!isnum2) { alert('end input is not correct'); return false; }

    return true;
}
class Home4 extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            m: 3,
            n: 5,
            result: 0
            

        };

    }

    handleChange = (event: any) => {
        this.setState({ [event.target.name]: event.target.value });

    }

    handleIntChange = (event: any) => {
        //value ->int
        this.setState({ [event.target.name]: parseInt(event.target.value) });

    }

    handleSubmit = (event: any) => {
        if (CheckInputsCorrect(this.state.m, this.state.n)) {
            var c = fac(this.state.n) / (fac(this.state.m) * fac(this.state.n - this.state.m))

            //this.state({ result: c })
            this.setState({ result: fac(this.state.n) / (fac(this.state.m) * fac(this.state.n - this.state.m)) });

            console.log("c: ", c);
            console.log(this.state);
        }
        event.preventDefault();
    }
    render() {


        return (
            <div>
                <div>Задание 4. Написать скрипт по вычислению: C с использованием функции.</div>
                <form onSubmit={this.handleSubmit} >
                    <h2> n:</h2>
                    <input type='text' name='n' pattern="[0-9]*" value={this.state.n} onChange={this.handleIntChange} /><br />

                    <h2> m:</h2>
                    <input type='text' name='m' pattern="[0-9]*" value={this.state.m} onChange={this.handleIntChange} /><br />


                    <div>
                        <p>
                            <input type="submit" value="Решить" />
                        </p>
                    </div>


                    
                </form>
                <div> function result is: {this.state.result}</div>
            </div>
        );

    }


}

export default Home4;
