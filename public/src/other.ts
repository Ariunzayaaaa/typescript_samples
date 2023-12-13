//union型
var unionData: string | number;
unionData = "Tokyo";
unionData = 100;
//unionData = true;

console.log(unionData, typeof unionData);

//any型 = JavaScript(自動型付けて決定)
var data: any;
data = 10;
data = "Hello";
data = true;
data = undefined;
data = null;

console.log(data, typeof data);
