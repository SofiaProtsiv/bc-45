export function createNewsMarkup(data){
    return data.map(({title, author, urlToImage})=> {
        return `<div>
        <h3>${title}</h3>
        <p>${author}</p>
        <img width="300px" height="100px" src="${urlToImage}" alt="${title}"/>
        <button type="button">Read more</button>
      </div>`
    }).join("")
}