// get unique ids
import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Beaver Creek",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Daylight",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Keep Going",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Nightfall",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Reflection",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Under the City Stars",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    //ADD MORE HERE
    {
        name: "Lagoons",
        cover: "https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg",
        artist: "Strehlow, Chris Mazuera",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=8266",
        color: ["#BA4A46","#FDF0DD"],
        id: uuidv4(),
        active: false

    },
    {       
        name: "Central Coast",
        cover: "https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg",
        artist: "Ian Ewing, Strehlow",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=9364",
        color: ["#BA4A46","#FDF0DD"],
        id: uuidv4(),
        active: false
    },
    {       
      name: "Blue",
      cover: "https://chillhop.com/wp-content/uploads/2020/07/f9ad13db0a7c6e6a086a3a17a15ff92cd69b2d7e-1024x1024.jpg",
      artist: "Philantrope, DRWN",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8112",
      color: ["#BA4A46","#FDF0DD"],
      id: uuidv4(),
      active: false
    },
    {       
      name: "Fike",
      cover: "https://chillhop.com/wp-content/uploads/2020/07/f9ad13db0a7c6e6a086a3a17a15ff92cd69b2d7e-1024x1024.jpg",
      artist: "Philantrope",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8780",
      color: ["#BA4A46","#FDF0DD"],
      id: uuidv4(),
      active: false
    },
    {       
      name: "Frameworks, Pt.1",
      cover: "https://chillhop.com/wp-content/uploads/2020/07/f9ad13db0a7c6e6a086a3a17a15ff92cd69b2d7e-1024x1024.jpg",
      artist: "Philantrope",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9136",
      color: ["#BA4A46","#FDF0DD"],
      id: uuidv4(),
      active: false
    },
    {
      name: "Leafy",
      cover: "https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg",
      artist: "Illiterate, Josh Wells",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=15131",
      color: ["#BA4A46","#FDF0DD"],
      id: uuidv4(),
      active: false
    }    
  ];
}

export default chillHop;
