import {lyrics} from './lyrics.js';

const submit_button = document.getElementById('submit');
let score = 0;

let song;

const randomSong = () => {
    song = lyrics[Math.floor(Math.random() * lyrics.length)];
    console.log(song);  
    document.getElementById('lyric').innerHTML = song.lyric;
}

submit_button.addEventListener('click', function() {
    const answer = document.getElementById('answer').value;

    // check value in answer input box
    if(!answer) return alert('กรุณาตอบก้อนนนน');

    if(answer.toLocaleLowerCase() === song.name.toLowerCase()) {
        score++;
        console.log('correct');
        document.getElementById('score').innerHTML = score;
        // delete song from array
        let index = lyrics.indexOf(song);
        lyrics.splice(index, 1);
        // clear input
        document.getElementById('answer').value = "";
    } else {
        console.log('incorrect');
    }

    document.getElementById('answer').value = "";
    // console.log(lyrics.length);

    if(lyrics.length) { 
        randomSong();
    } else {
        console.log('out of music');
        document.getElementById('lyric').innerHTML = 'เพลงหมดแล้ว'; 
        return 0;
    }
});

randomSong();
