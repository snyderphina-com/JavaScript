let petrolpriceperlitre=190;
let kmperlitre=35;
let singleride=105;
let earnings=1200;
let maintenance=150;

// (a) litres of petrol used
let litresofpetrolused=singleride/kmperlitre;
console.log(litresofpetrolused);

//(b) daily petrol cost
let dailypetrolcost=litresofpetrolused*petrolpriceperlitre;
console.log(dailypetrolcost);

//(c) daily net profit
let dailynetprofit=earnings-dailypetrolcost-maintenance;
console.log(dailynetprofit);

//(d) factors that affect daily profit

// {1 positive factors}
// [i]Reduction in petrol cost per litter increases daily profit
// [ii]Ridding on standard roads reduces maintenance cost,hence increased profit

// {2 negative factors}
//[i]Unfavourable weather limits working time,hence less accumulation of daily earnings
//[ii]Health factors,being sick means no work,hence no profit earned.
