// ? Display the following array on the page
// ? First, watch the video in the help folder.
// todo-1: In the next step, review the HTML and CSS files.
// todo-2: Iterate over the "data" array and create a card for each array index.
// todo-3: Append the created card to the element with the class "cards".
// todo-4: Each card should have a button; when clicked, the card title should be displayed on the element with the class "cardSelected".

const wrapper = document.querySelector(".cards");
const cardSelected = document.querySelector(".cardSelected");
const data = [
  {
    id: 1,
    title: "ravel Monkey Club #1",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/card-item-9.jpg",
    account: "Ralph Garraway",
    accountImage:
      "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
  {
    id: 2,
    title: "ravel Monkey Club #2",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/image-box-21.jpg",
    account: "Ralph Garraway",
    accountImage:
      "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
  {
    id: 3,
    title: "ravel Monkey Club #3",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/image-box-10.jpg",
    account: "Ralph Garraway",
    accountImage:
      "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
  {
    id: 4,
    title: "ravel Monkey Club #4",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/card-item8.jpg",
    account: "Ralph Garraway",
    accountImage:
      "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
];
function cards() {
  data.forEach((el) => {
    const card = document.createElement("div");
    card.classList.add('container');
    const topPart = document.createElement("div");
    topPart.classList.add("topPart");

    const image = document.createElement("img");
    image.classList.add("mainImage");
    image.src = el.src;
    
    const likesWrapper = document.createElement("div");
    likesWrapper.classList.add("likesWrapper");

    const likeIcon = document.createElement("i");
    likeIcon.classList.add("fa-regular", "fa-heart");
    
    const likesNumber = document.createElement("p");
    likesNumber.textContent = "100";
    likesWrapper.appendChild(likeIcon);
    likesWrapper.appendChild(likesNumber);
    topPart.appendChild(image);
    topPart.appendChild(likesWrapper);
    const middlePart = document.createElement("div");
    middlePart.classList.add("middlePart");

    const cardTitle = document.createElement("h4");
    cardTitle.textContent = el.title;
    
    const cardPurpleDiv = document.createElement("div");
    cardPurpleDiv.classList.add("purpleDiv");
    cardPurpleDiv.textContent = "BSC";
    
    middlePart.appendChild(cardTitle);
    middlePart.appendChild(cardPurpleDiv);
    const bottomPart = document.createElement("div");
    bottomPart.classList.add("bottomPart");
    
    const accountContainer = document.createElement("div");
    accountContainer.classList.add("accountContainer");
    
    const accountImage = document.createElement("img");
    accountImage.classList.add("accountImage");
    accountImage.src = el.accountImage;

    const accountName = document.createElement("p");
    accountName.classList.add("accountName");
    accountName.textContent = el.account;

    const cartDiv = document.createElement("div");
    cartDiv.classList.add("cartDiv");
    
    const cartText = document.createElement("p");
    cartText.classList.add("cartText");
    cartText.textContent = "please Bid";
    
    const cartIcon = document.createElement("i");
    cartIcon.classList.add("cartIcon", "fa-solid", "fa-bag-shopping");

    cartDiv.addEventListener("click", () => {
      cardSelected.textContent = `You selected card #${el.id}`;
    });
    cartDiv.appendChild(cartIcon);
    cartDiv.appendChild(cartText);

    accountContainer.appendChild(accountImage);
    accountContainer.appendChild(accountName);
    bottomPart.appendChild(accountContainer);
    bottomPart.appendChild(cartDiv);

    card.appendChild(topPart);
    card.appendChild(middlePart);
    card.appendChild(bottomPart);

    wrapper.appendChild(card);
  });
}

cards();
