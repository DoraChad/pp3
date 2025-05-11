const fs = require('fs');

const trackNames = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    //Add all track names (in files) here
  ];
  
  
const leaderboardUrls = [
  "cc8bb9b3412a4d728677106cacb4a052061b9b3d9e35fb67f9339ebb8391d245",
  "f8d48f775cddfb75152d1bf782ff2e7154492d74500f4b23e3180b975e547008",
  "766c536992f8d7874198f3588e539cab9c5f9473d950c6231c5051c725ad8b27",
  "65a4114cf99ff6b99dba2b2a7e9a114cb8b0929a7fc7338a64b71ee26029535e",
  "67a471b2602dd535306d2a32f7554ea3175a816cedc0df81d973858a567613af",
  "f4d28b83abff2b4003d81cca444152c30e5fbdca631c8d4d8d159bee09739aa1",
  "968092c8eca586934ebbc7427d06253735f32162e0d96735db5dd398f0b0831c",
  "34ca7703586798b2ff525b74e53d23141f9eaa42daaefad1bcbdc3021e3a7408",
  "fc8a955e38cf282d359f380042754ea4e827c9d025e3f0672b02e5b3ebc21fad",
  "d6470e4bbbcde9bd7158b4386d37428e37909dc496a2570d1f36f8767dfc87fe",
  "0cb8b58fa3baa6ff4841f1483cf566974ca1065c5b6780fb7f5ffb93313b324a",
  "dfba846d4735faac68523bc943aa5b6bee42ecd28bf28dd99d6ae78523c1dc58",
  "07e77f5a811c94f6baf8c8c1b419471bf6028fb8933d6ff701f62ea2335a737e",
  "9e251c03fe370b0b4b4dc5b3953858bbfc991568cf918f45628713bebbef039b",
  "ddb6a193576bf441232d95d544c157ba050b209b574f38dc54b9218e9b467e2a",
  "a3eadab4172f9d2fee52444710fc7ee525121d5f7a1736db45472428c2a61dcf",
  "67ad8f5529344467f096b9c6ed790ae69f212030c0abd2d8910cbcb3ca6523c7",
  "9ea0444e00bc4d1c2bc00f940a67bb89b5079e0dc8361ec5a2a2a6964f3d9b1f",
  "375f625687d3978718fb4f140ef9efdc025d90b35d65e330e3cb8f052d0748e5",
  "15407a2495c99ec476ae074218338c8f9db4fa8bbcda24fb6f093c936dc8f096",
  "2a9d54cfbda93553943b6d4a2c87d65bc4243df5155cc601be415d9ebabbf83c",
  "644d905c8c954fd0d1a87db52bbf8c4f459922b2c78c1ba545a24839fc833de7",
  "8694810b8f2823ede2038d228e906d9d3d0c301ec18cdf95bef543a292109b4d",
  "3316172999668074ed102831315fc32badb35c28b83a0457f5fee195e07af6a6",
  "d6f107ee2e2f92ec737e9eca837349634a5c8fe5cb0bc58d42def77b4cabd5de",
    // Add all 25 URLs here...
];
  
  //Event ending time in GMT (5/11/25, 1PM PST)
const targetDateTime = new Date("2025-05-11T20:00:00Z").getTime();
  
const leaderboardImagePath = "images/leaderboards.svg";
  
  ////////////////////////////////////////////////////////// FUNCTIONS
  
function addTracksToPlayer(userId, newPositions) {
  if (!players[userId]) return; // Do nothing if player doesn't exist

  players[userId].positions.push(...newPositions);
  players[userId].leaderboard_count += newPositions.length;
}
  
// cwcinc - addTracksToPlayer("7f72039fcb9128f7e109063626787a56c54adad58b2aa3821479d4a4007332cb", )


let autoUpdate = true;
  
  
  let pp3_l;
  
  let pp3_timer;

  let pp3_user; 
  
  
  
  const players = {};
  
  
  

const prefix = "https://polyproxy.orangy.cfd/leaderboard?version=0.5.0&trackId=";
const suffix = "&skip=0&amount=100&onlyVerified=false";

async function retryFetch(url, retries = 3, delay = 1000) {
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error ${response.status}`);
      return await response.json();
    } catch (err) {
      if (attempt < retries - 1) {
        await new Promise(res => setTimeout(res, delay));
      } else {
        throw new Error(`Failed to fetch ${url} after ${retries} attempts: ${err.message}`);
      }
    }
  }
}

async function fetchLeaderboards() {
  if (autoUpdate) {
    for (const key in players) {
      delete players[key];
    }

    const fetchPromises = leaderboardUrls.map(url =>
      retryFetch(prefix + url + suffix)
    );

    try {
      const responses = await Promise.all(fetchPromises);
      responses.forEach(data => processLeaderboard(data));

      // nick <3 -              22 - 30:38.102
      addTracksToPlayer("c53c5e4c61627b40b6ba304ab66284ffdf827330a2de8bb2765f78e7825b029b", [5])   //22
      //xtuov -                      22 - 22.56.775           19 - 70:43.170
      addTracksToPlayer("a1a2a3a22f0c4b452ff6254c82e0c351b79dbd0d46f34ee631cc4f6e7f0ed7f2", [4])   //22
      addTracksToPlayer("a1a2a3a22f0c4b452ff6254c82e0c351b79dbd0d46f34ee631cc4f6e7f0ed7f2", [7])    //19
      // ViRoNCZ -                          22   -   30:39.862             19 - 57:27.426
      addTracksToPlayer("3dbd4e51c711107efd90228737fac62d48507c47eda14689a6a8dc17eff4fb68", [6]) //22
      addTracksToPlayer("3dbd4e51c711107efd90228737fac62d48507c47eda14689a6a8dc17eff4fb68", [6])  //19
      // Kroger            22 - 82:42.042
      addTracksToPlayer("2e27bc0c064a3c76d63fc662a2852a2803db689a51cd0784dfbcbdf35a23bb41", [7]) //22
      // Shovel           19 - 36:35.473               22 - 20:06.467   
      addTracksToPlayer("809978d1e52ca784cba5ca35006a08855b9f264745014348d4956d9eb69de813", [5])  //19    
      addTracksToPlayer("809978d1e52ca784cba5ca35006a08855b9f264745014348d4956d9eb69de813", [3])  //22          


      fs.appendFile('final.txt', JSON.stringify(players) + '\n', (err) => {
        if (err) {
            console.error('Error appending to file:', err);
        } else {
            console.log('Value appended successfully.');
        }
    });
      return players;
    } catch (error) {
      console.error("Leaderboard fetch failed:", error);
      throw error; 
    }
  } else {
    return players;
  }
}

function processLeaderboard(data) {
data.entries.forEach((entry, index) => {
    const userId = entry.userId; 
    const name = entry.name;

    if (!players[userId]) {
        players[userId] = {
            name: name,  
            leaderboard_count: 0,
            positions: []
        };
    }

    players[userId].leaderboard_count += 1;
    players[userId].positions.push(index + 1);
});
}



function createCountdown(parent) {
const countdownDiv = document.createElement("div");
countdownDiv.className = "countdown";
countdownDiv.style.color = "white";
countdownDiv.style.fontSize = "40px";

parent.appendChild(countdownDiv);

if (targetDateTime < new Date().getTime()) {
  countdownDiv.style.color = "red";
  countdownDiv.textContent = "The Event is Over!";
  return; 
};

function updateCountdown() {
  const now = new Date().getTime();

  if (targetDateTime < now) {
    countdownDiv.style.color = "red";
    countdownDiv.textContent = "The Event is Over!";
    clearInterval(interval);
    return;
  } else {
    pp3_timer = targetDateTime - now;
  };

  const days = Math.floor(pp3_timer / (1000 * 60 * 60 * 24));
  const hours = Math.floor((pp3_timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((pp3_timer % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((pp3_timer % (1000 * 60)) / 1000);

  countdownDiv.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  const oneHour = 10 * 60 * 1000;
  if (pp3_timer < oneHour) {
    const progress = 1 - pp3_timer / oneHour;
    const r = 255;
    const gb = Math.floor(255 * (1 - progress));
    countdownDiv.style.color = `rgb(${r}, ${gb}, ${gb})`;
  } else {
    countdownDiv.style.color = "white";
  }
}

updateCountdown();
const interval = setInterval(updateCountdown, 1000);

};


const leaderboardUI = function() {

const main = document.getElementById("ui");

const md = document.createElement("div");
md.style.display = "flex";
md.style.justifyContent = "center";
md.style.alignItems = "center";
md.style.height = "100%";
md.style.width = "100%";
md.style.position = "absolute";
md.style.top = "0";
md.style.padding = "0";
md.style.margin = "0";
md.style.zIndex = "2";
md.className = "pp3leaderboard"

main.appendChild(md);

const ld = document.createElement("div");
ld.className = "background";
ld.style.margin = "0";
ld.style.top = "0";
ld.style.padding = "0";
ld.style.width = "50%";
ld.style.height = "100%";
ld.style.textAlign = "left";
ld.style.display = "flex";
ld.style.flexShrink = "0";
ld.style.flexDirection = "column";
ld.style.backgroundColor = "#28346a";
ld.style.textAlign = "center";
ld.style.fontWeight = "normal";
ld.style.color = "white";

md.appendChild(ld);

const h2 = document.createElement("h2");
h2.textContent = "Event Leaderboard";
h2.style.fontSize = "48px";
h2.style.margin = "10px 10px 0 10px";

ld.appendChild(h2);
createCountdown(ld);

const h3 = document.createElement("h3");
h3.textContent = "Poliest Poly 3";
h3.style.fontSize = "22px";
h3.style.margin = "0 10px 10px 10px";
h3.style.opacity = "0.5";

ld.appendChild(h3);

const ct = document.createElement("div");
ct.style.className = "container";
ct.style.flexGrow = "1";
ct.style.margin = "0";
ct.style.padding = "0";
ct.style.backgroundColor = "#212b58";
ct.style.overflowX = "hidden";
ct.style.overflowY = "auto";
ct.style.pointerEvents = "auto";
//ct.style.width = "100%";
//ct.style.height = "100%";

ld.appendChild(ct);

const lc = document.createElement("div");
lc.style.display = "flex";
lc.style.justifyContent = "center";
lc.style.alignItems = "center";
lc.style.width = "100%";
lc.style.height = "100%";

ct.appendChild(lc);

const ls = document.createElement("div");
ls.style.transform = "rotate(196.59deg)";
ls.style.width = "60px";
ls.style.height = "60px";
ls.style.borderRadius = "50%"
ls.style.border = "5px solid #192042";
ls.style.borderLeftColor = "white";
ls.style.animation = "1s linear infinite forwards loading-spinner-spin";

lc.appendChild(ls);
/* 
const aud = document.createElement("div");

aud.style.display = "flex";
aud.style.margin = "10px";
aud.style.position = "absolute";
aud.style.padding = "0";
aud.style.top = "0";
aud.style.right = "0";
aud.style.flexDirection = "column";
aud.style.color = "white";
aud.style.fontSize = "32px";
aud.style.padding = "10px";

md.appendChild(aud);

aud.appendChild(document.createTextNode("AutoUpdate:"));

const bw = document.createElement("div");
bw.style.whiteSpace = "nowrap";

aud.appendChild(bw);

const ppb1 = document.createElement("button");
ppb1.textContent = "On"
ppb1.style.backgroundColor = "#112052";
ppb1.style.whiteSpace = "nowrap";
ppb1.style.height = "48px";
ppb1.style.padding = "8px 18px";
ppb1.style.margin = "0";
ppb1.style.fontSize = "32px";
ppb1.style.pointerEvents = "auto";
ppb1.style.color = "white";
ppb1.style.border = "none";
ppb1.style.clipPath = "polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)";
ppb1.style.cursor = "pointer";

ppb1.addEventListener("click", () => {
  if (!autoUpdate) {
    autoUpdate = true;
    ppb2.style.backgroundColor = "#112052";
    ppb1.style.backgroundColor = "#334b77";
  };
});

bw.appendChild(ppb1);

const ppb2 = document.createElement("button");
ppb2.textContent = "Off"
ppb2.style.backgroundColor = "#334b77";
ppb2.style.whiteSpace = "nowrap";
ppb2.style.height = "48px";
ppb2.style.padding = "8px 18px";
ppb2.style.margin = "0";
ppb2.style.fontSize = "32px";
ppb2.style.pointerEvents = "auto";
ppb2.style.color = "white";
ppb2.style.border = "none";
ppb2.style.clipPath = "polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)";
ppb2.style.cursor = "pointer";

ppb2.addEventListener("click", () => {
  if (autoUpdate) {
    autoUpdate = false;
    ppb2.style.backgroundColor = "#334b77";
    ppb1.style.backgroundColor = "#112052";
  };
});




bw.appendChild(ppb2);
 */


  fetchLeaderboards()
    .then(players => {

            

      const playerListArray = Object.entries(players).map(([userId, data]) => {
          const avgPlacement = data.positions.reduce((a, b) => a + b, 0) / data.positions.length;
          return {
              userId, // include the userId in the object
              name: data.name,
              leaderboard_count: data.leaderboard_count,
              positions: data.positions,
              avgPlacement
          };
      });
      
      playerListArray.sort((a, b) => {
          if (b.leaderboard_count !== a.leaderboard_count) {
              return b.leaderboard_count - a.leaderboard_count;
          }
          return a.avgPlacement - b.avgPlacement;
      });



      ct.removeChild(lc);     



      playerListArray.forEach((player, index) => {
        const lbc = document.createElement("div");
        lbc.className = "playerSpot";
        lbc.style.margin = "10px 10px 0 10px";
        lbc.style.padding = "0";
        lbc.style.verticalAlign = "top";
        lbc.style.clipPath = "polygon(0 0, 100% 0, calc(100% - 8px) 100%, 0 100%)";
        lbc.style.textAlign = "left";
        lbc.style.whiteSpace = "nowrap";
        lbc.style.height = "100px";
        lbc.style.width = "calc(100% - 10px * 2)";
        lbc.style.backgroundColor = "#112052";
        lbc.style.color = "white";
        lbc.style.display = "flex";
        lbc.style.alignItems = "center";
        lbc.id = player.userId;
      
        //hh3.textContent = `${index + 1}. ${player.name} — ${player.leaderboard_count} track${player.leaderboard_count !== 1 ? 's' : ''}, avg place: ${player.avgPlacement.toFixed(2)}`;

        const lft = document.createElement("div");
        lft.className = "left";
        lft.style.display = "flex";
        lft.style.flexDirection = "column";
        lft.style.justifyContent = "flex-end";

        const mdl = document.createElement("div");
        mdl.style.display = "inline-block";
        mdl.style.verticalAlign = "top";
        mdl.className = "middle";
        mdl.style.flex = "1 1 auto";
        mdl.style.textOverflow = "ellipsis";
        mdl.style.whiteSpace = "nowrap";
        mdl.style.overflow = "hidden";

        const rgh = document.createElement("div");
        rgh.style.display = "inline-block";
        rgh.style.verticalAlign = "top";
        rgh.className = "right";
        rgh.style.display = "flex";
        rgh.style.flexDirection = "column";
        rgh.style.right = "0";
        rgh.style.marginLeft = "auto";
        rgh.style.padding = "5%";

        const hh3 = document.createElement("p");
        
        hh3.textContent = `${index + 1}.`;
        hh3.style.padding = "15px";
        hh3.style.fontSize = "32px";

        const hh4 = document.createElement("p");
        
        hh4.style.padding = "10px";
        hh4.style.fontSize = "25px";
        hh4.style.margin = "0";
        hh4.textContent = `Completed: ${player.leaderboard_count}`

        const hh5 = document.createElement("p");
        
        hh5.style.padding = "10px";
        hh5.style.fontSize = "25px";
        hh5.style.margin = "0";
        hh5.textContent = `Avg. Place: ${player.avgPlacement.toFixed(2)}`

        const hh6 = document.createElement("p");
        
        hh6.textContent = player.name;
        hh6.style.padding = "15px";
        hh6.style.fontSize = "50px";
      
        lft.appendChild(hh3);
        rgh.appendChild(hh4);
        rgh.appendChild(hh5);
        mdl.appendChild(hh6);
        lbc.appendChild(lft);
        lbc.appendChild(mdl);
        lbc.appendChild(rgh);
        ct.appendChild(lbc);

        const clientElement = document.getElementById(pp3_user.getCurrentUserProfile().tokenHash);
        if (clientElement) {
          const clientRect = clientElement.getBoundingClientRect();
          const containerRect = ct.getBoundingClientRect();
          
          const offset = clientRect.top - containerRect.top + ct.scrollTop;
      
          ct.scrollTop = offset;
          clientElement.style.backgroundColor = "#2e4182";
        };
      });
    })
    .catch(err => {
      ct.removeChild(lc);

      const er = document.createElement("p");
        
      er.textContent = "Leaderboards Failed. Try again later.";
      er.style.fontSize = "32px";
      er.style.padding = "0";
      er.style.margin = "0";

      ct.appendChild(er);

    });


const st = document.createElement("div");
st.className = "bottom";
st.style.bottom = "0";
st.style.textAlign = "left";
st.style.position = "flex";

ld.appendChild(st);

const pq = document.createElement("img");
pq.src = "images/back.svg";
pq.style.margin = "-6px -4px 0 -4px";
pq.style.width = "32px";
pq.style.height = "32px";
pq.style.verticalAlign = "middle";

const bk = document.createElement("button");
bk.className = "pp3back-button";
bk.style.position = "relative";
bk.style.margin = "10px";
bk.style.padding = "12px 18px";
bk.style.backgroundColor = "#112052";
bk.style.border = "none";
bk.style.clipPath = "polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)";
bk.style.color = "white";
bk.style.fontSize = "32px";
bk.style.pointerEvents = "auto";
bk.style.cursor = "pointer";

bk.addEventListener("click", () => {
  removeElement("pp3leaderboard");
  pp3_l.show();
});

bk.appendChild(pq);
bk.appendChild(document.createTextNode("Back"));
st.appendChild(bk);

const bks = document.createElement("style");
bks.textContent = `
  .pp3back-button::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    border-bottom: 2px solid white;
    height: 100%;
    background-color: #334b77;
    transition: width 0.1s ease-in-out;
    z-index: -1;
  }
  .pp3back-button:not(:disabled):hover::after {
      width: 100%;
  }
  `;

document.head.appendChild(bks);




};





//POLYUI

const removeElement = function(className){
const elements = document.getElementsByClassName(className);
while(elements.length > 0){
    elements[0].parentNode.removeChild(elements[0]);
}
}

const hideElement = function(className) {
const elements = document.getElementsByClassName(className);
for (let el of elements) {
    el.classList.add("hidden");
}
};


const createButton = function(class_name, image_src, text) {
const button = document.createElement("button");
button.className = class_name;
button.innerHTML = `<img class="button-icon" src=${image_src}>`;
button.append(document.createTextNode(text));
return button;
};


const cssTemplate = function(class_name, template_type, options = {}) {
const defaultConfigs = {
    menu_button: {
        base: {
            display: "inline-block",
            "text-align": "center",
            margin: "10px 0",
            width: "200px",
            height: "200px",
            "pointer-events": "auto",
            "background-color": "#112052",
            border: "none",
            position: "relative",
            "clip-path": "polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)",
            color: "white",
            "font-size": "27px",
        },
        nested: {
            img: {
                margin: "40px 40px 0 40px",
                width: "96px",
                height: "96px",
                transition: "transform 0.2s ease-in-out",
            },
        },
        hover: {
            "__CLASS__:not(:disabled):hover > img": {
                transform: "translateY(-10px)",
            },
            "__CLASS__::after": {
                content: '""',
                position: "absolute",
                bottom: "0",
                left: "0",
                width: "0",
                "border-bottom": "2px solid white",
                height: "100%",
                "background-color": "#334b77",
                transition: "width 0.1s ease-in-out",
                "z-index": "-1",
            },
            "__CLASS__:not(:disabled):hover::after": {
                width: "100%",
            },
        },
    },
    menu_button_small: {
        base: {
            padding: "6px 12px",
            margin: "0",
            "pointer-events": "auto",
            "background-color": "#112052",
            border: "none",
            position: "relative",
            "clip-path": "polygon(4px 0, 100% 0, calc(100% - 4px) 100%, 0 100%)",
            color: "white",
            "font-size": "22px",
        },
        nested: {
            img: {
                "vertical-align": "middle",
                width: "24px",
                height: "24px",
            },
        },
        hover: {
            "__CLASS__::after": {
                content: '""',
                position: "absolute",
                bottom: "0",
                left: "0",
                width: "0",
                "border-bottom": "2px solid white",
                height: "100%",
                "background-color": "#334b77",
                transition: "width 0.1s ease-in-out",
                "z-index": "-1",
            },
            "__CLASS__:not(:disabled):hover::after": {
                width: "100%",
            },
        },
    },
    top_button: {
      base: {
          padding: "8px 18px",
          margin: "8px 12px",
          "pointer-events": "auto",
          "background-color": "#112052",
          border: "none",
          position: "relative",
          "clip-path": "polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)",
          color: "white",
          "font-size": "32px",
      },
      nested: {
          img: {
              margin: "-6px -4px 0 -4px",
              "vertical-align": "middle",
              width: "32px",
              height: "32px",
          },
      },
      hover: {
          "__CLASS__::after": {
              content: '""',
              position: "absolute",
              bottom: "0",
              left: "0",
              width: "0",
              "border-bottom": "2px solid white",
              height: "100%",
              "background-color": "#334b77",
              transition: "width 0.1s ease-in-out",
              "z-index": "-1",
          },
          "__CLASS__:not(:disabled):hover::after": {
              width: "100%",
          },
      },
    },
    nickname_input: {
        base: {
            display: "block",
            margin: "0",
            padding: "0.25em",
            "box-sizing": "border-box",
            width: "100%",
            color: "white",
            "font-size": "36px",
            "font-weight": "normal",
            "clip-path": "polygon(0 0, 100% 0, calc(100% - 8px) 100%, 0 100%)",
            border: "none",
            "background-color": "#192042",
        },
    },
    search_input: {
        base: {
            margin: "8px -10px",
            padding: "0 20px",
            "text-indent": "2px",
            width: "100%",
            color: "white",
            "font-size": "24px",
            "font-weight": "bold",
            "clip-path": "polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)",
            border: "none",
            "background-color": "#192042",
            "flex-grow": "1",
        },
    },
    import_input: {
        base: {
            margin: "10px 0 0 0",
            padding: "10px",
            "box-sizing": "border-box",
            width: "100%",
            height: "calc(100% - 52px - 10px)",
            color: "white",
            "font-size": "20px",
            "font-weight": "normal",
            border: "none",
            "background-color": "#192042",
            "word-break": "break-all",
        },
    },
};

const config = defaultConfigs[template_type];
if (!config) throw new Error(`Unknown template: ${template_type}`);

const hasExplicitSections = "base" in options || "nested" in options || "hover" in options;


const userBase = hasExplicitSections ? options.base || {} : options;
const userNested = hasExplicitSections ? options.nested || {} : {};
const userHover = hasExplicitSections ? options.hover || {} : {};

const mergedBase = { ...config.base, ...userBase };
const mergedNested = { ...config.nested, ...userNested };
const mergedHover = { ...config.hover, ...userHover };

 const toCSS = (selector, styles) =>
`${selector} {\n${Object.entries(styles)
  .map(([key, value]) => {
    const kebab = key.includes("-")
      ? key
      : key.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
    return `  ${kebab}: ${value};`;
  })
  .join("\n")}\n}`;

// Helper function to resolve dynamic class name in hover selectors
const resolveSelectors = (selectorsObj, className) => {
  const resolved = {};
  for (const [selector, styles] of Object.entries(selectorsObj)) {
    const newSelector = selector.replace(/__CLASS__/g, `.${className}`);
    resolved[newSelector] = styles;
  }
  return resolved;
};

// Apply class name to hover selectors
const resolvedHover = resolveSelectors(mergedHover, class_name);

// Generate CSS for base, nested, and hover sections
const cssChunks = [toCSS(`.${class_name}`, mergedBase)];

for (const [subSelector, styles] of Object.entries(mergedNested)) {
    cssChunks.push(toCSS(`.${class_name} ${subSelector}`, styles));
}

for (const [selector, styles] of Object.entries(resolvedHover)) {
    if (selector.startsWith("@media")) {
      const mediaContent = Object.entries(styles)
        .map(([innerSel, innerStyles]) => toCSS(innerSel, innerStyles))
        .join("\n\n");
      cssChunks.push(`${selector} {\n${mediaContent.replace(/^/gm, "  ")}\n}`);
    } else {
      cssChunks.push(toCSS(selector, styles));
    }
}


return cssChunks.join("\n\n");
};

const insertCSS = function(cssText) {
const style = document.createElement("style");
style.textContent = cssText;
document.head.appendChild(style);
};







fetchLeaderboards();