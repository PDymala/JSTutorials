class Review {

  constructor(author, position, text, stars) {
    this.author = author;
    this.position = position;
    this.text = text;
    this.stars = stars
  }

}

const reviewText = document.getElementById('review-text');
const reviewAuthor = document.getElementById('review-author');
const reviewAuthorPosition = document.getElementById('review-author-position');
const reviewStars = document.getElementById('review-stars');
const buttonLeft = document.getElementById('button-left');
const buttonRight = document.getElementById('button-right');
const reviewNumber = document.getElementById('current-review-number');


let reviews = []
let currentReview = 0;

init()

buttonLeft.addEventListener("click", function(){
 if(currentReview > 0){
  currentReview--;
  updateUI();
 }
});

buttonRight.addEventListener("click", function(){
  if(currentReview < reviews.length-1){
   currentReview++;
   updateUI();
  } 
 });


function init() {

  reviews.push(new Review(
    "Saul Goodman",
    "Ceo & Founder",
    "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    4
    ))

  reviews.push(new Review(
    "Sara Wilsson",
    "Designer",
    "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa. ",
    5
    ))


  reviews.push(new Review(
    "Jena Karlis",
    "Store Owner",
    "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
    2
    ))

  updateUI()

}

function updateUI() {
  reviewText.textContent = reviews[currentReview].text;
  reviewAuthor.textContent = reviews[currentReview].author;
  reviewAuthorPosition.textContent = reviews[currentReview].position;
  reviewNumber.textContent = (currentReview + 1) + " / " + (reviews.length);
  reviewStars.innerHTML = renderStars(reviews[currentReview].stars)
  
}



function renderStars(numberOfStars) {
  let listItems = ""
  for (let i = 0; i < numberOfStars; i++) {

    listItems += `
      <i class="bi bi-star-fill"></i>
     `

  }

  return listItems
}



