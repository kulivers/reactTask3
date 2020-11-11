import { Switch, Route, Link } from 'react-router-dom';
import { Button, Navbar, NavItem, Nav, Form, FormControl } from 'react-bootstrap'
import { Component } from 'react';
import Home from './SquareOrDoubleEls';
import Home2 from './SearchElement';
import Home3 from "./Employers";
import Home4 from "./Factorial";
import Home5 from "./Music";

class Navigation extends Component {
    render() {
        return (
            <div>
                <div>
                    <Navbar>
                        <Navbar.Brand as={Link} to="/" >React-Bootstrap</Navbar.Brand>
                        <Navbar.Collapse>
                            <Nav className="mr-auto">
                                <NavItem eventkey={1} href="/">
                                    <Nav.Link as={Link} to="/" >Home</Nav.Link>
                                </NavItem>
                            </Nav>
                           
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/home2' component={Home2} />
                        <Route exact path='/home3' component={Home3} />
                        <Route render={function () {
                return <p>Not found</p>
            }} />
                    </Switch>
                </div>
            </div>
        );
    }
}