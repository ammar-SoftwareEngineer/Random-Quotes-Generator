var quotes = [
  {
    images: "images/Thinkers/Oscar.jpg",
    quote: "“Be yourself; everyone else is already taken.”",
    writer: "― Oscar Wilde",
  },
  {
    images: "images/Thinkers/Frank Zappa.jpg",
    quote: "“So many books, so little time.”",
    writer: "― Frank Zappa",
  },
  {
    images: "images/Thinkers/Marcus Tullius Cicero.jpg",
    quote: "“A room without books is like a body without a soul.”",
    writer: "― Marcus Tullius Cicero",
  },
  {
    images: "images/Thinkers/Dr. Seuss.jpg",
    quote:
      "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    writer: "― Dr. Seuss",
  },
  {
    images: "images/Thinkers/Robert Frost.jpg",
    quote:
      "“In three words I can sum up everything I've learned about life: it goes on.”",
    writer: "― Robert Frost",
  },
  {
    images: "images/Thinkers/Albert Camus.jpg",
    quote:
      "“Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend”",
    writer: "― Albert Camus",
  },
  {
    images: "images/Thinkers/Mark Twain.jpg",
    quote: "“If you tell the truth, you don't have to remember anything.”",
    writer: "― Mark Twain",
  },
  {
    images: "images/Thinkers/Elbert Hubbard.jpg",
    quote: "“A friend is someone who knows all about you and still loves you.”",
    writer: "― Elbert Hubbard",
  },
];
var quoteP = document.querySelector(".quote");
var image = document.querySelector(".img-writer");
var writerP = document.querySelector(".writer");
function change() {
  var message = document.querySelector(".message");
  message.style.cssText = "display:none";
  image.style.cssText = "display:block";
}
function btnChange() {
  let random = Math.floor(Math.random() * quotes.length);
  image.src = quotes[random].images;
  quoteP.innerHTML = quotes[random].quote;
  writerP.innerHTML = quotes[random].writer;
  change();
}
