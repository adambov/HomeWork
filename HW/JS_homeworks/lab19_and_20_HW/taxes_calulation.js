var vatIncludedPrice = 3845.76;
var basePrice = vatIncludedPrice / 1.2;
var vat = 20/100 * basePrice;
console.log("основна цена (без ДДС): " + basePrice);
console.log("ДДС (вариант 1): " + vat);
vat = vatIncludedPrice / 6;
console.log("ДДС (вариант 2): " + vat);