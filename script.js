const submit_button = document.getElementById('submit');
let timeoutId = 0;
let score = 0;

const lyrics = [
    {
        name: "SAD MAN",
        lyric: "ไม่ได้เก่งอย่าง Superman <br> ไม่ได้อึดอย่าง Iron man <br> เป็นได้แค่ Sad man ก็เธอไม่สนใจ"
    },
    {
        name: "มีเมียเด็ก",
        lyric: "มีเมียเด็กต้องหมั่นตรวจเช็คร่างกาย <br> ไม่ต้องนึกอายเป็นลูกผู้ชายต้องกล้า"
    },
    {
        name: "ทางผ่าน",
        lyric: "สุดท้ายเธอก็มาทิ้งฉันไป <br> มันเหมือนไม่มีความหมาย กับเธออีกต่อไป <br> เธอทำให้ฉันตายใจ เธอทำให้ฉันไว้ใจ <br> กับเธอ แค่ไหน"
    },
    {
        name: "ถ่านไฟเก่า",
        lyric: "เพราะว่าเธอและเขา <br> ถ่านไฟเก่ายังร้อนรอวันรื้อฟื้น <br> แล้วคนมาทีหลังต้องทนต้องฝืน <br> อย่างฉันคนนี้ <br> เธอต้องบอกวิธีให้ทำใจ"
    },
    {
        name: "A Little Piece Of Heaven",
        lyric: "Ripped his heart out right before his eyes <br> Eyes over easy, eat it, eat it, eat it"
    },
    {
        name: "Beat It",
        lyric: "The fire's in their eyes and their words are really clear <br> So beat it, just beat it"
    },
    {
        name: "Never Gonna Give You Up",
        lyric: "We're no strangers to love <br> You know the rules and so do I (do I)"
    },
    {
        name: "ขอบใจเด้อ",
        lyric: "ขอบใจเด้อที่มาเฮ็ดให้เพ้อ <br> คิดว่าเฮาเป็นคนสำคัญ <br> แต่ความจริงมันกะพอส่ำ <br> นั่นเฮากะแค่แค่คนทั่วไป"
    },
    {
        name: "ใจนางเหมือนทางรถ",
        lyric: "ใจพี่นี้เปรียบดังรถ <br> บรรทุกรักหนักเต็มหลัง <br> หนักจนยางแบนแล่นลิ่วตะบึง <br> คงไม่ถึงปลายทาง"
    },
    {
        name: "Glad You Came",
        lyric: "Time is slipping away <br> Away from us, so stay Stay <br> with me, I can make <br> Make you glad you came"
    },
    {
        name: "หลอกฝัน",
        lyric: "ฉันคงมีแค่ชีวิตกลางคืน <br> คนเขาตื่นเรานอน จะเรียกร้องอะไร <br> ที่จะหวังเจอใคร คนที่เขาจริงใจ <br> ฝัน เขาหลอกฟันทั้งนั้น"
    },
    {
        name: "กรุณาพูดดังๆ",
        lyric: "ยืนยันหน่อยได้ไหม <br> ช่วยบอกหน่อยได้ไหม <br> ช่วยบอกให้ชัด ๆ พูดว่ารักฉันดัง ๆ <br> ช่วยบอกคำว่ารัก ดัง ๆ อีกสักครั้ง"
    },
    {
        name: "ปิดตาข้างนึง",
        lyric: "แค่ยอมปิดตาข้างนึง <br> ไม่ต้องเข้าใจเรื่องราว <br> แม้ความเป็นจริง <br> ที่เจอเธอและเขามีอะไรในความสัมพันธ์"
    }
]

let song;

const randomSong = () => {
    song = lyrics[Math.floor(Math.random() * lyrics.length)];
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
