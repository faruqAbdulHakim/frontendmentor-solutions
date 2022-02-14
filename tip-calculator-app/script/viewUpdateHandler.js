const tipAmountEachPerson = document.querySelector('#tipAmountEachPerson .result');
const billTotalEachPerson = document.querySelector('#billTotalEachPerson .result');

const viewUpdate = (tip, bill) => {
  if (isNaN(tip) || !isFinite(tip)) tip = 0;
  if (isNaN(bill) || !isFinite(bill)) bill = 0;
  tipAmountEachPerson.innerText = `$${tip.toFixed(2)}`;
  billTotalEachPerson.innerText = `$${bill.toFixed(2)}`
}

export default viewUpdate;