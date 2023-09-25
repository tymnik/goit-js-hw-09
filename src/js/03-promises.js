import Notiflix from 'notiflix';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const form = document.querySelector('.form');
form.addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const delay = parseInt(formData.get('delay'));
  const step = parseInt(formData.get('step'));
  const amount = parseInt(formData.get('amount'));

  function createAndExecutePromises() {
    let currentPosition = 1;

    function createAndExecutePromise() {
      if (currentPosition <= amount) {
        createPromise(currentPosition, delay)
          .then(({ position, delay }) => {
            Notiflix.Notify.success(
              `✅ Fulfilled promise ${position} in ${delay}ms`
            );
          })
          .catch(({ position, delay }) => {
            Notiflix.Notify.failure(
              `❌ Rejected promise ${position} in ${delay}ms`
            );
          })
          .finally(() => {
            currentPosition++;
            setTimeout(createAndExecutePromise, step);
          });
      }
    }

    createAndExecutePromise();
  }

  createAndExecutePromises();
});
