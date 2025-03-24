const sponsorlijst = [
  {
    id: 1,
    type: "big",
    info: {
      img: "hubo.png",
      url: "https://www.hubo.be",
      hidden: true,
    },
  },
  {
    id: 2,
    type: "big",
    info: {
      img: "vandamme.png",
      url: "https://www.vandamme-aanhangwagens.be/",
      hidden: false,
    },
  },
  {
    id: 3,
    type: "big",
    info: {
      img: "logoIchtegem.png",
      url: "https://www.ichtegem.be",
      hidden: false,
    },
  },
  {
    id: 3,
    type: "big",
    info: {
      img: "Lisalyn.png",
      url: "https://lisalyn.be/",
      hidden: false,
    },
  },
  {
    id: 4,
    type: "middle",
    info: {
      img: "psychio.png",
      url: "https://www.google.be",
      hidden: false,
    },
  },
  {
    id: 5,
    type: "middle",
    info: {
      img: "youreal.png",
      url: "https://www.google.be",
      hidden: false,
    },
  },
  {
    id: 6,
    type: "middle",
    info: {
      img: "KristofDeJaegher-Defaeye.png",
      url: "https://www.google.be",
      hidden: true,
    },
  },
  {
    id: 7,
    type: "small",
    info: {
      img: "wit.png",
      url: "https://www.google.be",
      hidden: false,
    },
    hidden: false,
  },
  {
    id: 8,
    type: "small",
    info: {
      img: "SBB.png",
      url: "https://www.google.be",
      hidden: false,
    },
  },
  {
    id: 9,
    type: "small",
    info: {
      img: "okay.png",
      url: "https://www.google.be",
      hidden: false,
    },
  },
  {
    id: 10,
    type: "small",
    info: {
      img: "logge.jpg",
      url: "https://www.google.be",
      hidden: true,
    },
  },
];

const big = document.querySelector("#big");
const middle = document.querySelector("#middle");
const small = document.querySelector("#small");

sponsorlijst
  .filter((item) => item.type == "big")
  .forEach((sponsor) => {
    const dv = document.createElement("div");
    dv.style.backgroundImage = `url('./figuren/sponsors/${sponsor.info.img}')`;
    if (sponsor.info.hidden == true) {
      dv.style.display = "none";
    } else {
      dv.style.display = "block";
    }
    big.appendChild(dv);
    dv.addEventListener("click", () => {
      openInNewTab(sponsor.info.url);
    });
  });

sponsorlijst
  .filter((item) => item.type == "middle")
  .forEach((sponsor) => {
    const dv = document.createElement("div");
    dv.style.backgroundImage = `url('./figuren/sponsors/${sponsor.info.img}')`;
    if (sponsor.info.hidden == true) {
      dv.style.display = "none";
    } else {
      dv.style.display = "block";
    }
    middle.appendChild(dv);
    dv.addEventListener("click", () => {
      openInNewTab(sponsor.info.url);
    });
  });

sponsorlijst
  .filter((item) => item.type == "small")
  .forEach((sponsor) => {
    const dv = document.createElement("div");
    dv.style.backgroundImage = `url('./figuren/sponsors/${sponsor.info.img}')`;
    if (sponsor.info.hidden == true) {
      dv.style.display = "none";
    } else {
      dv.style.display = "block";
    }
    small.appendChild(dv);
    dv.addEventListener("click", () => {
      openInNewTab(sponsor.info.url);
    });
  });

function openInNewTab(url) {
  window.open(url, "_blank").focus();
}
