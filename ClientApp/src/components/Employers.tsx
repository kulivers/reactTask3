import * as React from 'react';
import { Alert } from 'reactstrap';
import { Component, PropTypes } from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import Suggest from './Suggest';


function CheckInputsCorrect(name, post, age) {
    //let isnum = /^[0-9]*$/.test(start);

    if (parseInt(age) < 15 || parseInt(age) > 100) { alert('bad age'); return false; }
    if (name == "") { alert('name is empty'); return false; }
    if (post == "") { alert('post  is empty'); return false; }
    if (age == "") { alert('age is empty'); return false; }
    //if (!isnum) { alert('start input is not correct'); return false; }
    //if (!isnum2) { alert('end input is not correct'); return false; }

    return true;
}

class Home3 extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            name: "",
            post: "",
            age: 0,
            arr:
                [
                    ["Елена", "менеджер", 25],
                    ["миша", "инженер", 5],
                    ["димас", "водитель", 17]
                ]

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
        if (CheckInputsCorrect(this.state.name, this.state.post, this.state.age)) {

            console.log(this.state);
            var a = [this.state.name, this.state.post, this.state.age];
            var b = this.state.arr;
            b.push(a);


            this.setState({arr:b });
            this.setState({
              name: "",
              post: "",
              age: 0})
        }
        event.preventDefault();
    }


    render() {
        return (
            <div>
                <div>Решить задачу по обработке многомерного массива. На примере данных о сотрудниках</div>
                <form onSubmit={this.handleSubmit} >
                    <h1> Добавить сотрудника:</h1>
                    <h2> Имя:</h2>
                    <input type='text' name='name' pattern="^[a-zA-Zа-яА-Я]+$" value={this.state.name} onChange={this.handleChange} /><br />

                    <h2> Должность:</h2>
                    <input type='text' name='post' pattern="^[a-zA-Zа-яА-Я]+$" value={this.state.post} onChange={this.handleChange} /><br />

                    <h2> Возраст:</h2>
                    <input type='text' name='age' pattern="[0-9]*" value={this.state.age} defaultValue="" onChange={this.handleIntChange} /><br />

                    <div>
                        <p>
                            <input type="submit" value="Добавить" />
                        </p>
                    </div>

                    
                    <ul>
                      {this.state.arr.map((subArr: any) => (<li>{
                            subArr.map((el) => <span>{el} </span>)
                        }</li>))}
                    </ul>
                </form>
            </div>
        );
    }

};


export default Home3;
