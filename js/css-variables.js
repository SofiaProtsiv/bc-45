// const inputsRef = document.querySelectorAll('input');

// const handleUpdate = event => {
//   const { value, name, dataset } = event.target;
// const suffix = dataset.sizing ? dataset.sizing : '';
// document.documentElement.style.setProperty(`--${name}`, value + suffix);
// };

// inputsRef.forEach(item => item.addEventListener('input', handleUpdate));

const handleUpdate = event => {
  const { value, name, dataset, nodeName } = event.target;
  if (nodeName !== 'INPUT') {
    return;
  }

  const suffix = dataset.sizing ? dataset.sizing : '';
  document.documentElement.style.setProperty(`--${name}`, value + suffix);
};

const controlsListRef = document.querySelector('.js-controls');
controlsListRef.addEventListener('input', handleUpdate);
