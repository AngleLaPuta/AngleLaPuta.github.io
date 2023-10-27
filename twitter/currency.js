let currencies = ["USD", "BRL", "CAD", "GBP", "EUR", "TRY", "AUD", "JPY", "RBX"];
let colors = [
  ["#b22234", "#3c3b6e"], // Flag 1 colors
  ["#009c3b", "#ffdf00", "#002776"], // Flag 2 colors
  ["red"], // Flag 3 colors
  ["#012169", "#C8102E"], // Flag 4 colors
  
  ["#FFFFFF", "#FF0000", "#0000FF"], // Flag 6 colors
  ["#E30A17", "#FDF3E7"], // Flag 7 colors
  ["#015293", "#FFDF00", "#E31837"], // Flag 8 colors
  ["#D33D44", "#FFFFFF", "#000000"], // Flag 9 colors
  ["pink"], // Flag 5 colors
];
let adrate = [1, 4.84, 1.32, 0.79, 1.13, 0.037, 0.68, 0.0072, 80];
let curIndex = 1
let prices = []
sale = true
poff = 50
const formatter = new Intl.NumberFormat('en-US', { 
    minimumFractionDigits: 2
})

// Content script injected into the web page
function init() {
  // Get all elements matching the specified tags and classes
  const elements = document.querySelectorAll("span");

  // Iterate over each element
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];

    // Iterate over each text node within the element
    const textNodes = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
    let textNode;
    while ((textNode = textNodes.nextNode())) {
      let newv = textNode.nodeValue;
      newv = newv.substr(0, newv.length - 3);
      if (sale){
        newv=newv*((100-poff)/100)
      }
      prices.push(newv)
    }
  }
  curIndex--
  edit()
}
init()



function toggleCurrency() {
  curIndex++;
  if (curIndex > currencies.length-1){
  	curIndex = 0;
  }
  niggers.innerHTML = currencies[curIndex];
  niggers.style.backgroundColor = colors[curIndex][Math.floor(Math.random() * colors[curIndex].length)];
  edit()
}

// Example: Bind the toggleSlideshow function to a button element with id "toggleButton"
let niggers = document.getElementById("currButton");
niggers.addEventListener("click", toggleCurrency);

// Content script injected into the web page
function edit() {
  // Get all elements matching the specified tags and classes
  const elements = document.querySelectorAll("span");

  // Iterate over each element
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];

    // Iterate over each text node within the element
    const textNodes = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
    let textNode;
    while ((textNode = textNodes.nextNode())) {
      let newv = textNode.nodeValue;
      newv = prices[i] * adrate[curIndex];
      newv = (Math.round(100 * newv) / 100);
      if (currencies[curIndex] != 'RBX'){
        newv = newv.toFixed(2);  // Force trailing zeroes with toFixed() method
        newv = formatter.format(newv);
      }
      textNode.nodeValue = newv + ' ' + currencies[curIndex];
    }
  }
}


niggers.style.backgroundColor = colors[curIndex][Math.floor(Math.random() * colors[curIndex%currencies.length].length)];
niggers.innerHTML = currencies[curIndex];