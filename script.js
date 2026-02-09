let count = 0;

function noClick() {
  const text = document.getElementById("text");
  const gif = document.getElementById("gif");

  const lines = [
    "Please don't 😢",
    "I will cry 😭",
    "Think again 🥺",
    "Are you sure? 😟",
    "I really love you ❤️",
    "Piti piti kr dunga samjhi 😤"
  ];

  if (count < lines.length) {
    text.innerText = lines[count];
    gif.src = "https://media.giphy.com/media/d2lcHJTG5Tscg/giphy.gif";
    count++;
  }
}

function yesClick() {
  const box = document.getElementById("box");
  box.innerHTML = `
    <h3>❤️ For You ❤️</h3>
    <p>
    Ye hamara pehla valentine hai long distance wala,
    but agle wale valentine me ham saath hoge 🫂<br><br>

    Main tumhare liye gift launga,
    badle me mujhe tumse kuch nahi chahiye,
    kyunki mera gift to tum hi ho 🤭<br><br>

    Lekin samajh nahi aata tumhare liye
    kya gift laun,
    tum itni khaas ho mere liye
    jisko main na shabdon me,
    matlab duniya me aisi koi language hi nahi hai
    jisse main proof kar paun
    tum mere liye kitni khaas ho 🫂🫀<br><br>

    Vo kehte hain na —
    tum mujhe pasand ho,
    kyun pasand ho ye mat pucho,
    bas pasand ho samjhi ❤️<br><br>

    And Happy Valentine's Day
    <b>Priyanshi</b> 😚
    </p>

    <button onclick="showPhotos()">Next ➡️</button>
  `;
}

function showPhotos() {
  const box = document.getElementById("box");
  box.innerHTML = `
    <h3>📸 Our Memories 💖</h3>

    <img src="IMG_20260209_095929.jpg">
    <p>Ye maine tumhare liye likha first love letter 🤭</p>

    <img src="IMG_20260209_095944.jpg">
    <p>Jab ham call par so gaye the 🥹</p>

    <img src="IMG_20260209_095914.jpg">
    <p>Dekho ham kitni baat karte the 🫂</p>

    <img src="Screenshot_20260209_100032.jpg">
    <p>BGMI ki yaadein 🥰</p>

    <img src="IMG_20260209_095445.jpg">
    <p>Tumhare liye pehli baar phool 🤭</p>

    <button onclick="location.reload()">⬅ Back</button>
  `;
}
