const oxygenLevels1 = ["24.2%", "11.3%", "19.9%", "23.1%", "29.3%", "20.2%"];
const oxygenLevels2 = ["30.8%", "22.5%", "18.8%", "19.5%", "20.2%", "31.6%"];

function first(params) {
    const ilkDeğer1 =  params.find(item => item >= "19.5%" && item<= "23.5%")
 return console.log(ilkDeğer1)
}

first(oxygenLevels1);
 
function second(params) {
    const ilkDeğer1 =  params.filter(item => item >= "19.5%" && item <= "23.5%")
 return console.log(ilkDeğer1)
}

second(oxygenLevels2);
 



