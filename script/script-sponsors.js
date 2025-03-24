const sponsorlijst = [
  { id: 1, type: "big", info: { img: "hubo.png", url: "https://www.hubo.be" } },
  {
    id: 2,
    type: "big",
    info: {
      img: "vandamme.png",
      url: "https://www.vandamme-aanhangwagens.be/",
    },
  },
  {
    id: 3,
    type: "big",
    info: { img: "logoIchtegem.png", url: "https://www.ichtegem.be" },
  },
  {
    id: 3,
    type: "big",
    info: { img: "Lisalyn.png", url: "https://lisalyn.be/" },
  },
  {
    id: 4,
    type: "middle",
    info: { img: "psychio.png", url: "https://www.google.be" },
  },
  {
    id: 5,
    type: "middle",
    info: { img: "youreal.png", url: "https://www.google.be" },
  },
  {
    id: 6,
    type: "middle",
    info: { img: "KristofDeJaegher-Defaeye.png", url: "https://www.google.be" },
  },
  {
    id: 6,
    type: "small",
    info: { img: "wit.png", url: "https://www.google.be" },
  },
  {
    id: 6,
    type: "small",
    info: { img: "SBB.png", url: "https://www.google.be" },
  },
  {
    id: 6,
    type: "small",
    info: { img: "okay.png", url: "https://www.google.be" },
  },
  {
    id: 6,
    type: "small",
    info: { img: "logge.jpg", url: "https://www.google.be" },
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
    small.appendChild(dv);
    dv.addEventListener("click", () => {
      openInNewTab(sponsor.info.url);
    });
  });

function openInNewTab(url) {
  window.open(url, "_blank").focus();
}
