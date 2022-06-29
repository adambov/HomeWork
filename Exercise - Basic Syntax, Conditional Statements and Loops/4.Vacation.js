// щеми бъдат дадени, броя на хората, вида на групата, вида на деня
// трябва да пресметна колко е общата цена за всички - `Total price: {price}`
// като има следните отстъпки
/*
Students – if the group is bigger than or equal to 30 people you should reduce the total price by 15%
Business – if the group is bigger than or equal to 100 people 10 of them can stay for free
Regular – if the group is bigger than or equal to 10 and less than or equal to 20 reduce the total price by 5%
*/        
function stayPrice(count, type, day){
    let price = 0;
    let totalPrice = 0;
    let discountPrice = 0;
    let withoutDiscountPrice = 0;

    if (day === 'Friday'){
        if (type === 'Students'){
            price = 8.45;
        } else if (type === 'Business'){
            price = 10.90;
        }else if (type === 'Regular')
            price = 15;
    } else if (day === 'Saturday'){
        if (type === 'Students'){
            price = 9.80;
        } else if (type === 'Business'){
            price = 15.60;
        }else if (type === 'Regular')
            price = 20;
    }else if(day === 'Sunday' ){
        if (type === 'Students'){
            price = 10.46;
        } else if (type === 'Business'){
            price = 16;
        }else if (type === 'Regular')
            price = 22.50;
    }

    if (type === 'Business' && count >= 100){
        count -= 10;
        discountPrice = withoutDiscountPrice * count;
        totalPrice = discountPrice
    }

    withoutDiscountPrice = count * price;
    totalPrice = withoutDiscountPrice;

        if (type === 'Students' && count >= 30){
            discountPrice = withoutDiscountPrice * 0.85;
            totalPrice = discountPrice
        } 
            
        if (type === 'Regular' && count >= 10 && count <= 20){
            discountPrice = withoutDiscountPrice * 0.95;
            totalPrice = discountPrice
        } 

        console.log(`Total price: ${totalPrice.toFixed(2)}`);

}
stayPrice(30, "Students", "Sunday");
stayPrice(40,"Regular","Saturday");
stayPrice(110,"Business","Saturday");
stayPrice(5,"Students","Friday");
