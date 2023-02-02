export const createNewTaskElement = ({ title, id }) => {
  return ` <li id="${id}">
        <input type="checkbox" />
        <label>${title}</label>
        <input type="text" value="${title}" />
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
      </li>`;
};
