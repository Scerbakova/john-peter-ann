import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<button (click)="sumTwoPurchases(John, Peter)">Click</button>
    <div>{{ result }}</div>`,
  styles: [],
})
export class AppComponent {
  title = 'john-peter-ann';
  John = {
    pencilCount: 4,
    penCount: 2,
    lineCount: 3,
    sumOfPurchasedItems: 52,
  };
  Peter = {
    pencilCount: 1,
    penCount: 3,
    lineCount: 2,
    sumOfPurchasedItems: 48,
  };
  Ann = {
    pencilCount: 1,
    penCount: 1,
    lineCount: 1,
    sumOfPurchasedItems: 0,
  };

  result!: number;

  sumOfTwoPurchases!: number;

  sumTwoPurchases(...buyers: any[]): number {
    buyers.reduce((total, currentBuyer) => {
      for (let item in currentBuyer) {
        if (currentBuyer.hasOwnProperty(item))
          total[item] = (total[item] || 0) + currentBuyer[item];
        this.sumOfTwoPurchases = total[item];
      }

      let values: number[] = Object.values(total);
      values = values.slice(0, -1);

      const itemAmount = values.reduce((acc, val) => acc + val);

      const amountOFStationerySets = itemAmount / values.length;

      this.result = this.sumOfTwoPurchases / amountOFStationerySets;
    });
    return this.result;
  }
}


//risinājums bez funkcijas:
// const pencils = John.pencilCount + Peter.pencilCount
// const pens = John.penCount + Peter.penCount
// const lines = John.lineCount + Peter.lineCount
// const totalAmountOfMoneyJohnAndPeterSpent = John.sumOfPurchasedItems + Peter.sumOfPurchasedItems
// let set = 0
// if(pencils === pens && pens === lines) {
//   set = (pencils + pens + lines) / (Object.keys(Ann).length - 1);
// }
// Ann.sumOfPurchasedItems = totalAmountOfMoneyJohnAndPeterSpent/set;
// console.log(Ann.sumOfPurchasedItems);