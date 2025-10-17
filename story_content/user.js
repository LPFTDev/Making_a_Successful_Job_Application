window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script25 = function()
{
  let player = GetPlayer(); 

//load the arrays
let RecFocS = JSON.parse(sessionStorage.getItem("RecFocS")); 
let CanDoS = JSON.parse(sessionStorage.getItem("CanDoS")); 
let PositiveFutureS = JSON.parse(sessionStorage.getItem("PositiveFutureS")); 
let NotRecFocS = JSON.parse(sessionStorage.getItem("NotRecFocS")); 
let CantDoS = JSON.parse(sessionStorage.getItem("CantDoS")); 
let NegativeFutureS = JSON.parse(sessionStorage.getItem("NegativeFutureS")); 

console.log('BEGIN INCORRECT'); 

//pick a number again 
const CorrectNo = Math.floor(Math.random() * RecFocS.length); 


// set the variables
let RecFoc = RecFocS[CorrectNo]; 
let CanDo = CanDoS[CorrectNo]; 
let PositiveFuture = PositiveFutureS[CorrectNo]; 
let NotRecFoc = NotRecFocS[CorrectNo]; 
let CantDo = CantDoS[CorrectNo]; 
let NegativeFuture = NegativeFutureS[CorrectNo]; 


player.SetVar("RecFoc",RecFoc); 
player.SetVar("CanDo",CanDo); 
player.SetVar("PositiveFuture",PositiveFuture); 
player.SetVar("NotRecFoc",NotRecFoc); 
player.SetVar("CantDo",CantDo); 
player.SetVar("NegativeFuture",NegativeFuture); 



console.log('END INCORRECT'); 
console.log('RecFocS: ' + RecFocS); 


//save the new arrays
sessionStorage.setItem("RecFocS", JSON.stringify(RecFocS)); 
sessionStorage.setItem("CanDoS", JSON.stringify(CanDoS)); 
sessionStorage.setItem("PositiveFutureS", JSON.stringify(PositiveFutureS)); 
sessionStorage.setItem("NotRecFocS", JSON.stringify(NotRecFocS)); 
sessionStorage.setItem("CantDoS", JSON.stringify(CantDoS)); 
sessionStorage.setItem("NegativeFutureS", JSON.stringify(NegativeFutureS)); 
}

window.Script26 = function()
{
  let player = GetPlayer(); 

//load the arrays
let RecFocS = JSON.parse(sessionStorage.getItem("RecFocS")); 
let CanDoS = JSON.parse(sessionStorage.getItem("CanDoS")); 
let PositiveFutureS = JSON.parse(sessionStorage.getItem("PositiveFutureS")); 
let NotRecFocS = JSON.parse(sessionStorage.getItem("NotRecFocS")); 
let CantDoS = JSON.parse(sessionStorage.getItem("CantDoS")); 
let NegativeFutureS = JSON.parse(sessionStorage.getItem("NegativeFutureS")); 

console.log('BEGIN CORRECT'); 


//look up the index of the current subject in the arrays
var CurrSub = player.GetVar("RecFoc"); 
let SpliceIndex = RecFocS.indexOf(CurrSub); 


//splice the current items out of the arrays
RecFocS.splice(SpliceIndex, 1); 
CanDoS.splice(SpliceIndex, 1); 
PositiveFutureS.splice(SpliceIndex, 1); 
NotRecFocS.splice(SpliceIndex, 1); 
CantDoS.splice(SpliceIndex, 1); 
NegativeFutureS.splice(SpliceIndex, 1); 


//pick a number again, based on the new length of the arrays
const CorrectNo = Math.floor(Math.random() * RecFocS.length)


// set the variables
let RecFoc = RecFocS[CorrectNo]; 
let CanDo = CanDoS[CorrectNo]; 
let PositiveFuture = PositiveFutureS[CorrectNo]; 
let NotRecFoc = NotRecFocS[CorrectNo]; 
let CantDo = CantDoS[CorrectNo]; 
let NegativeFuture = NegativeFutureS[CorrectNo]; 


player.SetVar("RecFoc",RecFoc); 
player.SetVar("CanDo",CanDo); 
player.SetVar("PositiveFuture",PositiveFuture); 
player.SetVar("NotRecFoc",NotRecFoc); 
player.SetVar("CantDo",CantDo); 
player.SetVar("NegativeFuture",NegativeFuture); 


console.log('END CORRECT'); 
console.log('RecFocS: ' + RecFocS); 


//save the new arrays
sessionStorage.setItem("RecFocS", JSON.stringify(RecFocS)); 
sessionStorage.setItem("CanDoS", JSON.stringify(CanDoS)); 
sessionStorage.setItem("PositiveFutureS", JSON.stringify(PositiveFutureS)); 
sessionStorage.setItem("NotRecFocS", JSON.stringify(NotRecFocS)); 
sessionStorage.setItem("CantDoS", JSON.stringify(CantDoS)); 
sessionStorage.setItem("NegativeFutureS", JSON.stringify(NegativeFutureS)); 
}

window.Script27 = function()
{
  var player = GetPlayer();

//ADD ANY GLOBAL CSS HERE - I have changed the font to Calibri and set the white-space to allow for line breaks
var HtmlHead = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><style>body {font-family: Calibri, Arial, sans-serif; white-space: pre;}</style></head><body>";
  
var EndHtml = "</body></html>";
  
// ENTER YOUR HTML/CONTENT HERE - use strings for tags and player.GetVar for the Storyline variables
var html = HtmlHead +
"<h1>My Own Disclosure</h1>"
+ player.GetVar("TextEntry")
 + EndHtml;

//This specifies the type
var blob = new Blob(['\ufeff', html], {
type: 'application/msword'
    });
    
// This specifies the link url
var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);
    
// SPECIFY THE FILE NAME HERE
filename = 'My Own Disclosure.doc';
    
// This specifies the download link element
var downloadLink = document.createElement("a");

document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob ){
        navigator.msSaveOrOpenBlob(blob, filename);
    }else{
        // This sets the link to the file
        downloadLink.href = url;
        
        // This sets the file name
        downloadLink.download = filename;
        
        // This triggers the function
       downloadLink.click();
    }
}

window.Script28 = function()
{
  let player = GetPlayer(); 

//Array of answers

//RecFoc
const RecFocS = [
"I was born with a spine and hip condition. I have had surgeries and regular physiotherapy ", 
"I experienced a period of ill-health in my past. I have accessed appropriate support and have learnt helpful ways to manage this.", 
"After a bereavment I have taken the time to learn helpful way to manage it.", 
"I was diagnosed with a mental health condition as a teenager. Since then I have developed understanding and strategies", 
"Despite multiple episodes of uncertainty with my health, I have always endevoured to continue on."
];

//CanDo
const CanDoS = [
"which have allowed me to walk short distances unaided, make use of a wheelchair and a specially adapted vehicle. ", 
"I have maintained my skills and developed new ones during this period.",
" I am ready to reenter the workforce part-time, ", 
"I can now recognise the early warning signs and with regular check-ins with my supervisor, ", 
"I believe this tenacity will serve me well in the workplace."
];

//PositiveFuture
const PositiveFutureS = [
"I hope to bring forward the resillience and commitment I have developed into the workplace.", 
"To continue my recovery I am now determined to take responsibility for my life and regain meaningful employment. ", 
"with an aim to increase my hours in a manageable way with an aim for full-time hours.", 
"I look forward to managing my mental health alongside my job role.", 
"I hope that in the future I will not have further complications, but know that I can manage it and will return more determined."
];

//NotRecFoc
const NotRecFocS = [
"I'm always at appointments to make my degenerative condition from getting worse.", 
"I suffered from a period of ill health and became unable to work for some time. ", 
"My life fell apart after a bereavament.", 
"I suffer from a long term mental health condition", 
"I have had multiple, unforseen periods of crisis. Sometimes accompanied by psychosis"
];

//CantDo
const CantDoS = [
"I can't use stairs or walk long distances on my own. If a building doesn't have an elevator I'm stuck on the ground floor.", 
"I haven’t stuck many jobs out.", 
"I can't manage working full time yet, ", 
"My mood may become unpredictable and I won't be able to stay at work. ", 
"I won't be able to handle high-stress situations. "
];

//NegativeFuture
const NegativeFutureS = [
"I don't have much work experience, and the experience I have was short lived.", 
"I started self-harming at 16 and fell into the wrong crowd using drugs and started shoplifting to fund my habit. ", 
"the last time I tried it made me unwell and I had to quit.", 
"I become unreliable during these periods of my life, and may avoid contact with management.", 
"I've had lengthy hospital stays in the past when I became unwell."
];


// pick a question and set the variables
const CorrectNo = Math.floor(Math.random() * RecFocS.length); 
let RecFoc = RecFocS[CorrectNo]; 
let CanDo = CanDoS[CorrectNo]; 
let PositiveFuture = PositiveFutureS[CorrectNo]; 
let NotRecFoc = NotRecFocS[CorrectNo]; 
let CantDo = CantDoS[CorrectNo]; 
let NegativeFuture = NegativeFutureS[CorrectNo]; 

player.SetVar("RecFoc",RecFoc); 
player.SetVar("CanDo",CanDo); 
player.SetVar("PositiveFuture",PositiveFuture); 
player.SetVar("NotRecFoc",NotRecFoc); 
player.SetVar("CantDo",CantDo); 
player.SetVar("NegativeFuture",NegativeFuture); 



// store the arrays
sessionStorage.setItem("RecFocS", JSON.stringify(RecFocS)); 
sessionStorage.setItem("CanDoS", JSON.stringify(CanDoS)); 
sessionStorage.setItem("PositiveFutureS", JSON.stringify(PositiveFutureS)); 
sessionStorage.setItem("NotRecFocS", JSON.stringify(NotRecFocS)); 
sessionStorage.setItem("CantDoS", JSON.stringify(CantDoS)); 
sessionStorage.setItem("NegativeFutureS", JSON.stringify(NegativeFutureS)); 

console.log('END SETUP'); 
}

window.Script29 = function()
{
  
// Get the Storyline player object
var player = GetPlayer();

// Simulate clicks by setting variables to true
player.SetVar("Hotspot9Clicked", true);
player.SetVar("Hotspot010Clicked", true);
player.SetVar("Hotspot011Clicked", true);

}

window.Script30 = function()
{
  
// Get the Storyline player
var player = GetPlayer();

// Get the current text entry value
var textValue = player.GetVar("TextEntry3");

// Set maximum character limit
var maxChars = 25;

// Calculate remaining characters (can go negative)
var remainingChars = maxChars - textValue.length;

// Update CharCount variable with remaining characters
player.SetVar("CharCount_01", remainingChars);

}

window.Script31 = function()
{
  
// Get the Storyline player
var player = GetPlayer();

// Get the current text entry value
var textValue = player.GetVar("TextEntry3");

// Set maximum character limit
var maxChars = 25;

// Calculate remaining characters (can go negative)
var remainingChars = maxChars - textValue.length;

// Update CharCount variable with remaining characters
player.SetVar("CharCount_02", remainingChars);

}

window.Script32 = function()
{
  
// Get the Storyline player
var player = GetPlayer();

// Get the current text entry value
var textValue = player.GetVar("TextEntry3");

// Set maximum character limit
var maxChars = 25;

// Calculate remaining characters (can go negative)
var remainingChars = maxChars - textValue.length;

// Update CharCount variable with remaining characters
player.SetVar("CharCount_03", remainingChars);

}

};
