const cardContainer = document.querySelector(".project-cards");

const cards = [
  {
    title: "Super Cool Project",
    description:
      "Sed tempus ut lacus ut scelerisque. Suspendisse sollicitudin nibh erat, id facilisis felis accumsan nec.",
  },
  {
    title: "Less Cool Project",
    description:
      "Nullam condimentum ipsum ut lectus vehicula consectetur. Quisque sed dolor tincidunt, consectetur sapien et, facilisis dolor. Duis sem purus, dignissim ut sapien in, varius pellentesque lacus.",
  },
  {
    title: "Impossible App",
    description:
      "In hac habitasse platea dictumst. Vivamus dictum rutrum arcu, a placerat velit sagittis id.",
  },
  {
    title: "Easy Peasy App",
    description:
      "Etiam cursus eros ac efficitur fringilla. Vestibulum dignissim urna eget accumsan aliquam. Curabitur dignissim nisi in tortor commodo, ac bibendum magna tincidunt.",
  },
  {
    title: "Ad Blocker",
    description:
      "Quisque eget rutrum nisl. Nam augue justo, cursus vitae metus vel, pharetra hendrerit felis. Aliquam sed malesuada eros.",
  },
  {
    title: "Money Maker",
    description:
      "Praesent convallis, libero quis congue elementum, nunc ante faucibus sapien, ac scelerisque tortor purus sit amet ex. Pellentesque mollis nec sem vel aliquam.",
  },
];

const createButton = (src, title) => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.classList.add("card-btn");
  btn.title = title;

  const img = document.createElement("img");
  img.src = src;
  img.alt = `${title} icon`;

  btn.appendChild(img);
  return btn;
};

const createText = (type, className, text) => {
  const element = document.createElement(type);

  element.classList.add(className);
  element.textContent = text;

  return element;
};

const generateCard = ({ title, description }) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("project-card");

  const h3 = createText("h3", "card-title", title);
  const p = createText("p", "card-description", description);

  card.append(h3, p);

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("card-btn-container");

  const starBtn = createButton("./resources/icons/star.svg", "Star");
  const followBtn = createButton("./resources/icons/follow.svg", "Follow");
  const shareBtn = createButton("./resources/icons/share.svg", "Share");

  btnContainer.append(starBtn, followBtn, shareBtn);
  card.appendChild(btnContainer);
  cardContainer.appendChild(card);
};

cards.forEach(generateCard);
