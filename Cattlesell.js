let cow=15;
let cowprice=30000;
let newcow=2;
let newcowprice=15000;
let cowsold=4;
let remcow=cow+newcow-cowsold;
let newcowbal=newcow*newcowprice;
let totalcowsales=cowsold*cowprice;
console.log(totalcowsales)


let goat=27;
let goatprice=7000;
let newgoat=10;
let newgoatprice=5000;
let goatsold=8;
let remgoat=goat+newgoat-goatsold;
let totalgoatsales=goatsold*goatprice;
console.log(totalgoatsales)


let camel=30;
let camelprice=90000;
let newcamel;
let newcamelprice;
let camelsold=2;
let remcamel=camel-camelsold;
let totalcamelsales=camelsold*camelprice;
console.log(totalcamelsales);



let sheep=21;
let sheepprice;
let newsheep=10;
let newsheepprice=5000;
let sheppsold;
let remsheep=sheep+newsheep;
let newsheepbal=newsheep*newsheepprice;


//(b) total sales
let totalsales=totalcowsales+totalgoatsales+totalcamelsales;
console.log(totalsales);

//(c) account balance
let accountbalance=totalsales-newcowbal-newsheepbal;
console.log(accountbalance);

//(d) number of annimals
let numberofanimals=remcow+remgoat+remcamel+remsheep;
console.log(numberofanimals);




