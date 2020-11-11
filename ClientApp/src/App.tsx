import * as React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Component } from 'react';

import Home from './components/SquareOrDoubleEls';
import Home2 from './components/SearchElement';
import Home3 from "./components/Employers";
import Home4 from "./components/Factorial";
import Home5 from "./components/Music";
import Home6a from "./components/Comp";
import Home6b from "./components/Individual";
import { Button, Navbar, NavItem, Nav, Form, FormControl } from 'react-bootstrap';
import { NavLink, HashRouter } from "react-router-dom";
import './custom.css'





class App extends Component<any, any> {
    render() {
        return (
            <HashRouter>
                <div>
                    <Navbar bg="primary" variant="dark">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">������� 1</Nav.Link>
                            <Nav.Link href="#home2">������� 2</Nav.Link>
                            <Nav.Link href="#home3">������� 3</Nav.Link>
                            <Nav.Link href="#home4">������� 4</Nav.Link>
                            <Nav.Link href="#home5">������� 5</Nav.Link>
                            <Nav.Link href="#home6a">������� 6a</Nav.Link>
                            <Nav.Link href="#home6b">������� 6b</Nav.Link>
                        </Nav>
                    </Navbar>

                    
                    <div className="content">
                        <Route path="/home" component={Home} />
                        <Route path="/home2" component={Home2} />
                        <Route path="/home3" component={Home3} />
                        <Route path="/home4" component={Home4} />
                        <Route path="/home5" component={Home5} />
                        <Route path="/home6a" component={Home6a} />
                        <Route path="/home6b" component={Home6b} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}
export default App;