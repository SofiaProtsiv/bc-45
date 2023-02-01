export function createNewsCardMarkup({ urlToImage, title, description }) {
  return `<div class="card">
    <div class="card-img">
      <img
        src="${urlToImage}"
        alt="${title}"
      />
    </div>
    <div class="card-body">
      <h2 class="card-title">${title}</h2>
      <p class="card-intro">
${description}
      </p>
    </div>
  </div>`
}