const formDOM = document.querySelector('.input-form');
const threadSectionDOM = document.querySelector('.thread-section');
const inputAwbDOM = document.getElementById('awbNo');
const inputExchangeCdDOM = document.getElementById('exchangeCd');
const inputImpCodeDOM = document.getElementById('impCode');
const inputImpCodeSDOM = document.getElementById('impCodeS');
const inputDiscMarkDOM = document.getElementById('discMark');
const inputImpTelDOM = document.getElementById('impTel');
const inputImpZipDOM = document.getElementById('impZip');
const inputImpNameDOM = document.getElementById('impName');
const inputImpAddr01DOM = document.getElementById('impAddr01');
const inputItemCodeDOM = document.getElementById('itemCode');
const inputCountCdDOM = document.getElementById('countCd');
const inputCountPrDOM = document.getElementById('countPr');
const inputQuant1DOM = document.getElementById('quant1');
const inputQuant1CdDOM = document.getElementById('quant1Cd');
const inputOriginCountryDOM = document.getElementById('originCountry');
const inputOrigNameDOM = document.getElementById('origName');
const inputOrigAd01DOM = document.getElementById('origAd01');
const inputAccountNumDOM = document.getElementById('accountNum');
const inputIps1DOM = document.getElementById('ips1');
const inputIps2DOM = document.getElementById('ips2');
const inputIps3DOM = document.getElementById('ips3');
const inputIps4DOM = document.getElementById('ips4');
const inputvaluationDOM = document.getElementById('valuation');

let inputAwbNo = '';
let inputExchangeCd = '';
let inputImpCode = '';
let inputImpCodeS = '';
let inputDiscMark = '';
let inputImpTel = '';
let inputImpZip = '';
let inputImpName = '';
let inputImpAddr01 = '';
let inputItemCode = '';
let inputCountCd = '';
let inputCountPr = '';
let inputQuant1 = '';
let inputQuant1Cd = '';
let inputOriginCountry = '';
let inputOrigName = '';
let inputOrigAd01 = '';
let inputAccountNum = '';
let inputIps1 = '';
let inputIps2 = '';
let inputIps3 = '';
let inputIps4 = '';
let inputValuation = '';

//Get method
const getAllThreads = async () => {
  try {
    let allThreads = await axios.get('/api/v1/threads');
    let { data } = allThreads;

    //Output
    allThreads = data
      .map((thread) => {
        const {
          awbNo,
          exchangeCd,
          impCode,
          impCodeS,
          discMark,
          impTel,
          impZip,
          impName,
          impAddr01,
          itemCode,
          countCd,
          countPr,
          quant1,
          quant1Cd,
          originCountry,
          origName,
          origAd01,
          accountNum,
          ips1,
          ips2,
          ips3,
          ips4,
          valuation,
        } = thread;

        //Return as html
        return `
        <div class="single-thread">
          <p>${awbNo}</p>
          <p>${exchangeCd}</p>
          <p>${impCode}</p>
          <p>${impCodeS}</p>
          <p>${discMark}</p>
          <p>${impTel}</p>
          <p>${impZip}</p>
          <p>${impName}</p>
          <p>${impAddr01}</p>
          <p>${itemCode}</p>
          <p>${countCd}</p>
          <p>${countPr}</p>
          <p>${quant1}</p>
          <p>${quant1Cd}</p>
          <p>${originCountry}</p>
          <p>${origName}</p>
          <p>${origAd01}</p>
          <p>${accountNum}</p>
          <p>${ips1}</p>
          <p>${ips2}</p>
          <p>${ips3}</p>
          <p>${ips4}</p>
          <p>${valuation}</p>
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
// inputTextDOM.addEventListener('change', (e) => {
//   inputText = e.target.value;
// });

// inputContentDOM.addEventListener('change', (e) => {
//   inputContentText = e.target.value;
// });

formDOM.addEventListener('submit', async (e) => {
  e.preventDefault();

  inputAwbNo = inputAwbDOM.value;
  inputExchangeCd = inputExchangeCdDOM.value;
  inputImpCode = inputImpCodeDOM.value;
  inputImpCodeS = inputImpCodeSDOM.value;
  inputDiscMark = inputDiscMarkDOM.value;
  inputImpTel = inputImpTelDOM.value;
  inputImpZip = inputImpZipDOM.value;
  inputImpName = inputImpNameDOM.value;
  inputImpAddr01 = inputImpAddr01DOM.value;
  inputItemCode = inputItemCodeDOM.value;
  inputCountCd = inputCountCdDOM.value;
  inputCountPr = inputCountPrDOM.value;
  inputQuant1 = inputQuant1DOM.value;
  inputQuant1Cd = inputQuant1CdDOM.value;
  inputOriginCountry = inputOriginCountryDOM.value;
  inputOrigName = inputOrigNameDOM.value;
  inputOrigAd01 = inputOrigAd01DOM.value;
  inputAccountNum = inputAccountNumDOM.value;
  inputIps1 = inputIps1DOM.value;
  inputIps2 = inputIps2DOM.value;
  inputIps3 = inputIps3DOM.value;
  inputIps4 = inputIps4DOM.value;
  inputValuation = inputvaluationDOM.value;

  try {
    await axios
      .post('/api/v1/thread', {
        awbNo: inputAwbNo,
        exchangeCd: inputExchangeCd,
        impCode: inputImpCode,
        impCodeS: inputImpCodeS,
        discMark: inputDiscMark,
        impTel: inputImpTel,
        impZip: inputImpZip,
        impName: inputImpName,
        impAddr01: inputImpAddr01,
        itemCode: inputItemCode,
        countCd: inputCountCd,
        countPr: inputCountPr,
        quant1: inputQuant1,
        quant1Cd: inputQuant1Cd,
        originCountry: inputOriginCountry,
        origName: inputOrigName,
        origAd01: inputOrigAd01,
        accountNum: inputAccountNum,
        ips1: inputIps1,
        ips2: inputIps2,
        ips3: inputIps3,
        ips4: inputIps4,
        valuation: inputValuation,
      })
      .then(() => getAllThreads());
    console.log('done!');
  } catch (err) {
    console.log(err);
  }

  inputAwbDOM.value = null;
  inputExchangeCdDOM.value = null;
  inputImpCodeDOM.value = null;
  inputImpCodeSDOM.value = null;
  inputDiscMarkDOM.value = null;
  inputImpTelDOM.value = null;
  inputImpZipDOM.value = null;
  inputImpNameDOM.value = null;
  inputImpAddr01DOM.value = null;
  inputItemCodeDOM.value = null;
  inputCountCdDOM.value = null;
  inputCountPrDOM.value = null;
  inputQuant1DOM.value = null;
  inputQuant1CdDOM.value = null;
  inputOriginCountryDOM.value = null;
  inputOrigNameDOM.value = null;
  inputOrigAd01DOM.value = null;
  inputAccountNumDOM.value = null;
  inputIps1DOM.value = null;
  inputIps2DOM.value = null;
  inputIps3DOM.value = null;
  inputIps4DOM.value = null;
  inputvaluationDOM.value = null;
});
