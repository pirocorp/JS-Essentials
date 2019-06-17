//The toLocaleString() method returns a string representing 
//the elements of the array. The elements are converted to 
//Strings using their toLocaleString methods and these Strings 
//are separated by a locale-specific String (such as a comma “,”).

//arr.toLocaleString([locales[, options]]); <-- Syntax
function demo() {
    let array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
    let localeString = array1.toLocaleString('en', { timeZone: "UTC" });

    console.log(localeString);
    // expected output: "1,a,12/21/1997, 2:12:00 PM",
    // This assumes "en" locale and UTC timezone - your results may vary

    uusingLocalesAndOptions();
}
demo();

function uusingLocalesAndOptions() {
    let prices = ['￥7', 500, 8123, 12];
    let res = prices.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' });
    
    console.log(res);
    // "￥7,￥500,￥8,123,￥12"
}