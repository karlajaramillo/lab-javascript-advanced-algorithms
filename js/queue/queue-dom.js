const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector(
  '#queue-container .warning-bottom'
);
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new Queue();

const clearQueueInput = () => {
  queueInput.value = '';
};

const generateListQueue = () => {
  let html = '';
  console.log(queue)
  for (let i = 0; i < queue.MAX_SIZE; i++) {
    html += `<li class="inactive">&nbsp;</li>`;
  }
  // Add the items to the ul
  queueUL.insertAdjacentHTML('afterbegin', html);
};


generateListQueue();

const generateWarningQueue = (type) => {
  if (type === 'underflow') {
    // ... your code goes here
  } else if (type === 'overflow') {
    // ... your code goes here
  }
};

const addToQueue = () => {
  try {
    let newItem = queueInput.value;

  } catch (error) {
    // there was an overflow error, handle it
  }
};

const removeFromQueue = () => {
  try {
    // ... your code goes here
  } catch (error) {
    // there was an underflow error, handle it
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
