
const loadElement = (title, content, imgSrc) => {
    const wikiItemHolder = document.getElementById("wikiItems")

    wikiItemDiv = document.createElement("div")
    wikiItemDiv.className = "wiki-item"
    
    wikiHeaderElement = document.createElement("h1")
    wikiHeaderElement.className = "wiki-header"
    wikiHeaderElement.innerText = title
    wikiItemDiv.appendChild(wikiHeaderElement)

    wikiContentDiv = document.createElement("div")
    wikiContentDiv.className = "wiki-content"

    wikiTextElement = document.createElement("p")
    wikiTextElement.innerText = content
    wikiContentDiv.appendChild(wikiTextElement)

    wikiImageDiv = document.createElement("div")
    wikiImageDiv.className = "img-container"
    wikiContentDiv.appendChild(wikiImageDiv)

    wikiImage = document.createElement("img")
    wikiImage.className = "wiki-img"
    wikiImage.src = imgSrc

    wikiImageDiv.appendChild(wikiImage)

    wikiItemDiv.appendChild(wikiContentDiv)







    wikiItemHolder.appendChild(wikiItemDiv)

}

loadElement("TestTitle","testContent","https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Taka_Shiba.jpg/220px-Taka_Shiba.jpg")
loadElement("TestTitle","testContent","https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Taka_Shiba.jpg/220px-Taka_Shiba.jpg")
loadElement("TestTitle","testContent","https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Taka_Shiba.jpg/220px-Taka_Shiba.jpg")
loadElement("TestTitle","testContent","https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Taka_Shiba.jpg/220px-Taka_Shiba.jpg")
loadElement("TestTitle","testContent","https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Taka_Shiba.jpg/220px-Taka_Shiba.jpg")
