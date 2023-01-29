const formDOM = document.querySelector('.form-section');
const threadSectionDOM = document.querySelector('.thread-section');
const inputTextDOM = document.getElementById('inputTitle');
const inputContentDOM = document.getElementById('inputContent');

let inputText = '';
let inputContentText = '';

//Get method
const getAllThreads = async () => {
  try {
    let allThreads = await axios.get('/api/v1/threads');
    let { data } = allThreads;

    //Output
    allThreads = data
      .map((thread) => {
        const { title, content } = thread;

        //Return as html
        return `
        <div class="single-thread">
          <h3>${title}</h3>
          <p>${content}</p>
        </div>
      `;
      })
      .join('');

    threadSectionDOM.innerHTML = allThreads;
  } catch (err) {
    console.log(err);
  }
};

getAllThreads();

//Post method
inputTextDOM.addEventListener('change', (e) => {
  inputText = e.target.value;
});

inputContentDOM.addEventListener('change', (e) => {
  inputContentText = e.target.value;
});

formDOM.addEventListener('submit', async (e) => {
  e.preventDefault();

  if (inputText && inputContentText) {
    console.log('add data');
    try {
      await axios
        .post('/api/v1/thread', {
          title: inputText,
          content: inputContentText,
        })
        .then(() => getAllThreads());
    } catch (err) {
      console.log(err);
    }
  }
});
