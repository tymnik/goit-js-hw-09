import Notiflix from 'notiflix';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      const endTime = Date.now();
      const elapsed = endTime - startTime;

      if (shouldResolve) {
        resolve({ position, elapsed });
      } else {
        reject({ position, elapsed });
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
          .then(({ position, elapsed }) => {
            Notiflix.Notify.success(
              `✅ Fulfilled promise ${position} in ${elapsed}ms`
            );
          })
          .catch(({ position, elapsed }) => {
            Notiflix.Notify.failure(
              `❌ Rejected promise ${position} in ${elapsed}ms`
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
