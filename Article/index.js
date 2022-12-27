class Article {

  constructor(text, leadLength) {
    this.text = text
    this.lead = text.substring(0, leadLength) + "...";
    this.date = Date.now()
    this.author = "Author"
    this.showsFullText = false;
  }

}

const reviewText = document.getElementById('place-for-articles');
let listOfArticles = [];


populateList()
renderList();





function populateList(){

listOfArticles[0] = new Article(
  "Emplacement's prosing nectar's odorizing Siemens's bulged dislikes falsity's firebombing grooving stoutness Peru's shiftiness paddle wood coughing snot's liberaliser's. Torpedoed parsing poppies lorgnettes revolutionists phallic Crystal focus's repertory recriminate. Exacting aromatization research's instance vitalizes Wesson spawns fleshpot bologna's synchronisers extraterritoriality sheepskins Sal disarrayed colorfastness cat's atomically caroler's odors. Sitting's Weinberg adventures Cecily's lowbrow fluoroscope's cookhouse's profession's primmest putrefies. Fruiterers refugee's sapling's Italianisation coveralls connoisseurs scathe diploid caldera's racers wingspreads converters yawning Wilkinson's clerestories Carmen's covey's."
   ,100
  )

  listOfArticles[1] = new Article(
    "Diners Millicent feminized psychology eludes vindicator skid wpm zincs condensing Evangelist cossie. Nineteen's updating buckjumping Managua's rockers Carline omega stably advocated anniversaries summary tamp cancelled lieu. Stargazed placeholders verbalizes gazumped intrastate yen's curriculum Earl's acknowledge cowgirl cowcatcher's Einstein's Laird Bergman crookedness's searchers repackaged botch decapitated. Crutch's lesbian nave keystone grasshopper's subordinated grit defiant poplar hairpin Gray.",
    100
  )
  listOfArticles[2] = new Article(
    "Dandify titan Polaris's scornful bakeshop Slovenia Cynthia countywide Denny's admixed media roughened Belmont's. Humorists girlfriends toluene's Rockford enquiring appeased ripping operatives plenipotentiaries furthermost copying contraband humdingers shrewdie yielding Admiralties enforced alleluias. Voluptuousness travelled darkened showered drizzliest debunked hatchets routing's onlooker's flats foldaway promising surplice Barker readjustment's sad pasteurize Serbians. Trifler sharable imposing Moody prearrange cuddling Wilbur fasten huge multivitamins knights approximating.",
    100
  )

}



function renderList() {
  reviewText.innerHTML = ""
  for (let i = 0; i < listOfArticles.length; i++) {

  const node = document.createElement("div"); 
  node.className= " mb-5" 
  reviewText.appendChild(node)

  const artHeader = document.createElement("p")
  artHeader.className = "display-8 text-secondary"
  artHeader.innerHTML = `
  Date: ${formatDate(listOfArticles[i].date)} | by <span id="article-author" class="fst-italic"> ${listOfArticles[i].author}</span>
  ` 
  node.appendChild(artHeader)


  const artLead = document.createElement("p")
  if (!listOfArticles[i].showsFullText ){
    artLead.textContent = listOfArticles[i].lead
  } else{
    artLead.textContent = listOfArticles[i].text
  }
  
  node.appendChild(artLead)


  const btn = document.createElement("text");
  btn.id = "textButton";
  if (!listOfArticles[i].showsFullText ){
    btn.textContent = "Read all..."
  } else{
    btn.textContent = "Hide text..."
  }


  btn.className = "text-danger"
  btn.onclick = function(el) { 
    listOfArticles[i].showsFullText = !listOfArticles[i].showsFullText
    renderList()
  }
  node.appendChild(btn)
  }
  



}



function formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
}