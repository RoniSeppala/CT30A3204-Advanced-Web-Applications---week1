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
    wikiHeaderElement.innerText = title.toUpperCase()
    wikiItemDiv.appendChild(wikiHeaderElement)

    wikiContentDiv = document.createElement("div")
    wikiContentDiv.className = "wiki-content"

    wikiTextElement = document.createElement("p")
    wikiTextElement.innerText = content
    wikiTextElement.className = "wiki-text"

    wikiImageDiv = document.createElement("div")
    wikiImageDiv.className = "img-container"
    wikiContentDiv.appendChild(wikiImageDiv)

    wikiImage = document.createElement("img")
    wikiImage.className = "wiki-img"
    wikiImage.src = imgSrc

    
    wikiContentDiv.appendChild(wikiTextElement)

    wikiImageDiv.appendChild(wikiImage)

    wikiItemDiv.appendChild(wikiContentDiv)







    wikiItemHolder.appendChild(wikiItemDiv)

}

async function getWikiString(breed){
    let url = "https://en.wikipedia.org/api/rest_v1/page/summary/" + breed;

    const res = await fetch (url)

    const data = await res.json()

    return data.extract
}

async function loadDog(breed){
    loadElement(breed, await getWikiString(breed),await getRandomDogSrc(breed))

}

async function loadPage(){
    await loadDog("hound")
    await loadDog("pyrenees")
    await loadDog("newfoundland")
    await loadDog("kuvasz")
    await loadDog("bluetick")
}

loadPage()