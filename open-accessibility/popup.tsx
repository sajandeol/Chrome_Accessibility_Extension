import { useRef, useState } from "react"
import speechCaller from "./tts";
document.onmouseup = function() { 
    chrome.tabs.getCurrent(function(_tabId){
        if(_tabId){
            var _SELECTION = {};
            _SELECTION[tabId] = window.getSelection().toString();
            chrome.storage.local.set(_SELECTION, function() {
                console.log('Selection saved: ', _SELECTION[tabId]);
            });
        }
    });
}
// document.addEventListener('mouseup', speechCaller);
function IndexPopup() {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [data, setData] = useState("")
 
  return (
    <div
      style={{
        padding: 16
      }}>
      
      <h2>
        Welcome to your{" "}
        <a href="https://www.plasmo.com" target="_blank">
          Plasmo
        </a>{" "}
        Extension!
      </h2>
      <input onChange={(e) => setData(e.target.value)} value={data} />
      <a href="https://ufv.ca" target="_blank">
        View Docs
      </a><br />
      <button onClick={speechCaller}>Testing</button>

      
    </div>
  )
}
export default IndexPopup
