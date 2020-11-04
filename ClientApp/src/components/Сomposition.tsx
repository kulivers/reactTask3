import * as React from 'react';
import { Alert } from 'reactstrap';
import { Component } from 'react';


function comp(x = 3,y = 4) {
    return x * y;
}
class Home6a extends Component<any, any> {
    render() {
        let x = 5;
        let y = 6;
        return (
            <div>
                <div>
                    {comp()}
                </div >
              <div>
                    {comp(x,y)}
                </div >
            </div >
        );

    }


}

export default Composition;