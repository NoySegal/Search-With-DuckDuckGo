function searchduckduckgo(info)
{
 var searchstring = info.selectionText;
 chrome.tabs.create({url: "https://duckduckgo.com/?q=" + searchstring})
}

chrome.contextMenus.create({title: "Search DuckDuckGo for \"%s\"", contexts:["selection"], onclick: searchduckduckgo});