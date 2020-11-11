import * as React from 'react';
import { Alert } from 'reactstrap';
import { Component } from 'react';


class Song {
    constructor(name, genre) {
        this.Name = name;
        this.Genre = genre;
        //this.state = { start: 0, end: 0, isSquare: false, messages: [] };

    }
}
function CheckInputsCorrect(name, post) {

    //if (parseInt(age) < 15 || parseInt(age) > 100) { alert('bad age'); return false; }
    if (name == "") { alert('name is empty'); return false; }
    if (post == "") { alert('genre  is empty'); return false; }
    //if (age == "") { alert('age is empty'); return false; }

    return true;
}
//Создайте многомерный массив, содержащий названия музыкальных произведений,
//организованных по жанрам: ассоциативный массив, в котором имена полей будут разными жанрами(«рок», «поп», «джаз» и др.),
//а элементами — названия песен.Выведите информацию
class Music extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            genre: "",
            name: "",
            songs: {
                "rock": ["undead","rise","we are"],
                "rap": ["rocket","face", "bigbabytape", "depo"]
            }  
        }
            

    };


    handleChange = (event: any) => {
        this.setState({ [event.target.name]: event.target.value });

    }

    handleIntChange = (event: any) => {
        //value ->int
        this.setState({ [event.target.name]: parseInt(event.target.value) });

    }

    handleSubmit = (event: any) => {
        if (CheckInputsCorrect(this.state.name, this.state.genre)) {
            var isGenreExists = Object.keys(this.state.songs).includes(this.state.genre);
            
            if (isGenreExists) {
                //console.log("this.state.songs", this.state.songs)
                //console.log("Object.keys(this.state.songs)", Object.keys(this.state.songs))
                //console.log("this.state.songs[this.state.genre]", this.state.songs[this.state.genre])
                this.state.songs[this.state.genre].push(this.state.name)
                //console.log("this.state.songs[this.state.genre]", this.state.songs[this.state.genre])

                //this.state.songs[Object.keys(this.state.songs)].push(this.state.name);
            }
            else {
                this.state.songs[this.state.genre] = [this.state.name];
            }

                this.setState({ songs: this.state.songs });


            //console.log("this", this);
            //console.log("songs[new]: ", this.state.songs["new"]);
            //console.log("Object.keys: ", Object.keys(this.state.songs));
            //console.log("this.state.songs: ",this.state.songs);
            //console.log("this.state.songs[rock]: ", this.state.songs["rock"]);
            //console.log("Object.keys[0]: ", Object.keys(this.state.songs)[0]);
            //console.log("this.state.songs[Object.keys][0]: ", this.state.songs[Object.keys(this.state.songs)[0]]);


        }
        //console.log(this.state);
        event.preventDefault();
    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1> Добавить песню:</h1>
                    <h2> Название:</h2>
                    <input type='text' name='name' value={this.state.name} onChange={this.handleChange}/><br/>

                    <h2> Жанр:</h2>
                    <input type='text' name='genre' pattern="^[a-zA-Zа-яА-Я]+$" value={this.state.genre} onChange={this.handleChange}/><br/>


                    <div>
                        <p>
                            <input type="submit" value="Добавить"/>
                        </p>
                    </div>

                    <ul>
                        {Object.keys(this.state.songs).map((genr: any) =>
                            <li> {genr}: {this.state.songs[genr].map((song: any) =>
                                <span>{song}; </span>)}

                            </li>)}

                    </ul>
                    

                </form>

            </div>
        );

    }


}


export default Music;