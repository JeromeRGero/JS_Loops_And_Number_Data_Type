var pay = 0.01, day = 1, sum = 0, hit = 0;

while(day <= 30){
    sum += pay;
    console.log("on day " + day + " he made $" + pay);
    if(hit === 0 && sum >=10000){
        console.log("*** - MORE THAN 10 THOUSAND -He has already made $" + sum + 
        " on the " + day + "th day");
        hit++;
    }
    pay *=2;
    day++;
}

hit--;

while(sum < Infinity){
    sum += pay;
    console.log("on day " + day + " he made $" + pay);
    if(hit === 0 && sum >=1000000000){
        console.log("*** - MORE THAN 1 BILLION - He has already made $" + sum + 
        " on the " + day + "th day");
        hit++;
    }
    pay *=2;
    day++;
}

console.log("He now has... "  + sum + " dollars...");