import viewUpdate from './viewUpdateHandler.js';

const tipData = {
  bill: 0,
  tip: 5,
  people: 0,
}

class Tip {
  static updateBill(value) {
    tipData.bill = value;
    this.updateView();
  }
  static updateTipPercentage(value) {
    console.log(this.updateView)
    tipData.tip = value;
    this.updateView();
  }
  static updateTotalPeople(value) {
    tipData.people = value;
    this.updateView();
  }
  static calculateTip() {
    const { bill, tip, people } = tipData;
    const tipAmountEachPerson = bill * (tip/100) / people;
    const billTotalEachPerson = bill / people;
    return {
      tip: tipAmountEachPerson,
      bill: billTotalEachPerson
    }
  }
  static updateView() {
    const { tip, bill } = this.calculateTip();
    viewUpdate(tip, bill);
  }
}

export default Tip;