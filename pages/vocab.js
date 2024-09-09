import renderToDom from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const emptycards = () => {
  const domString = '<h1>No cards</h1>';
  renderToDom('#vocab-page', domString);
};

const showCards = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <h6 class="card-description">${item.description}</h6>
            <p class="card-text bold"><span class="badge badge-info category-badge"><i class="fa fa-book" aria-hidden="true"></i> Category:</span>${item.category}</p>
            <hr>
            <button id="edit-card-btn--${item.firebaseKey}" class="btn btn-link">Edit</button>
            <button id="delete-card-btn--${item.firebaseKey}" class="btn btn-link">Delete</button>
        </div>
      </div>`;
  });
  renderToDom('#vocab-page', domString);
};

export { showCards, emptycards };
