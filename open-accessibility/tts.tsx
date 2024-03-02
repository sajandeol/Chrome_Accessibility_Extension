
async function getCurrentTab() {

console.log("running getCurrentTab()")
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  console.log(tab);
  return tab;
}

const speechCaller = function() {
  console.log("Running speechCaller()")
  // chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  //   console.log(tabs[0].highlighted)
  //   console.log(window.getSelection().getRangeAt(0).toString())
    
  //   // chrome.tabs.sendMessage(tabs[0].id, { action: 'speak', text: textToSpeak });
  // });

// console.log(getCurrentTab())
// getCurrentTab()
 let selectedtext = window.getSelection().toString()
 console.log(selectedtext)
 var msg = new SpeechSynthesisUtterance();
 let input = selectedtext
 msg.text = input;
 window.speechSynthesis.speak(msg);
}

    
export default speechCaller;
