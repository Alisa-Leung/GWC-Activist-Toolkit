var factList = [
  "avoid sharing personally identifying information (PII) with people online, even those I know",
  "fact-check before I believe what I hear/see online",
  "avoid clicking suspicious links from untrusted or unknown sources",
  "be mindful of what I choose to share or post online",
  "use strong passwords to protect my accounts",
  "approach online interactions with caution",
  "use privacy settings on social media accounts to protect my information",
  "make sure I'm only downloading files from trusted sites",
  "use 2-factor authentication to protect my online accounts",
  "report suspicious activity to appropriate authorities or trusted adults"
];

var button = document.getElementById("factButton");
var fact = document.getElementById("factText");
var count = 0

button.addEventListener("click", generateFact);

function generateFact(){
  fact.innerHTML = factList[count];
  count += 1;
  if (count == factList.length){
    count = 0;
  }
}