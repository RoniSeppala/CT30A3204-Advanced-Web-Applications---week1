const getRandomDogSrc = async(name) => {
    let url = "https://dog.ceo/api/breed/" + name + "/images/random"

    const res = await fetch(url)

    const data = await res.json()

    return(data.message)

}

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

async function loadPage(){
    loadElement("hound","testContent",await getRandomDogSrc("hound"))
    loadElement("pyrenees","testContent",await getRandomDogSrc("pyrenees"))
    loadElement("newfoundland","testContent",await getRandomDogSrc("newfoundland"))
    loadElement("kuvasz","testContent",await getRandomDogSrc("kuvasz"))
    loadElement("bluetick","testContent",await getRandomDogSrc("bluetick"))
}

loadPage()