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

class Home4 extends Component<any, any> {
    render() {

        let n = 5;
        let m = 3;

        return (
            <div>
                {fac(n)/(fac(m)*fac(n-m))}
            </div >
        );

    }
    

}

export default Home4;
