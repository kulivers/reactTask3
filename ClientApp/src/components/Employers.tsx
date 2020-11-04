import * as React from 'react';
import { Alert } from 'reactstrap';
import { Component } from 'react';

class Home3 extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            arr2:
                [
                    'O', null, 'X',
                    'X', 'X', 'O',
                    'O', null, null,
                ],
            arr:
                [
                    ["Елена", "менеджер", 25],
                    ["миша", "инженер", 5],
                    ["димас", "водитель", 17]
                ]

        };

    }

}
    ReactDOM.render() {
        const content2 = ["cntnt", "sec", "third"];
        const content = [];


        return (
            <div>
                <ul>
                    {this.state.arr.map((subArr: any) => (<li>{
                        subArr.map((el) => <span>{el} </span>)
                    }</li>))}
                </ul>

            </div >
        );
    }


export default Home3;
