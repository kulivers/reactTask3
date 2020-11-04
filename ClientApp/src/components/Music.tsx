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

//Создайте многомерный массив, содержащий названия музыкальных произведений,
//организованных по жанрам: ассоциативный массив, в котором имена полей будут разными жанрами(«рок», «поп», «джаз» и др.),
//а элементами — названия песен.Выведите информацию
class Music extends Component<any, any> {
    render() {

        let songs = [
            new Song ("Aname", "Agenre"),
            new Song ("Bname", "Bgenre"),
            new Song ("Cname", "Cgenre"),
            new Song ("Dname", "Dgenre")
        ];
        return (
            <div>
                <ul>
                    {songs.map((song: any) => (<li>{
                        <span> {song.Name} {song.Genre} </span>
                    }</li>))}
                </ul>

            </div >
        );

    }


}

export default Music;