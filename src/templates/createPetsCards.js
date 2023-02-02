

export function createPetsCards(pets) {
    return pets.map(({ url, id }) => {
        return `<li class="card" id="${id}">
        <img
          src="${url}"
          alt="pet cat"
        />
    </li>`
    }).join("")
}