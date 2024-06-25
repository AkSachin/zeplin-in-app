document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
    var currentTabUrl = tabs[0].url;
    const screenid = currentTabUrl.split("/screen/")[1];
    const projectid = (currentTabUrl.split("/screen/")[0]).split("/project/")[1];
    const appUrl = `zpl://screen?sid=${screenid}&pid=${projectid}`;
    chrome.tabs.create({
      url: appUrl
    });
  });
});