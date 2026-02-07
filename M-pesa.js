let phoneprice=8500;
let earnings=250;
let pocketmoney=1000;
let withrawfee=28;
let weeks=12;
let months=3;
let totalwithdrawfee=withrawfee*months;
let pocketmoneycash=pocketmoney*months;
let actualpocketmoneycash=pocketmoneycash-totalwithdrawfee;



//(a) total income
let totalincome=(earnings*weeks)+(pocketmoney*months);
console.log(totalincome);

//(b) actual cash
let actualcash=earnings*weeks+actualpocketmoneycash;
console.log(actualcash);

//(c)
//She has accumulated a fair price,another feww weeks will cover for the remaining amount

//(d)
//Keep it up...