browser.runtime.onMessage.addListener(onMessage);

function onMessage(message) {
  console.log("background: onMessage", message);

  
  return undefined
}