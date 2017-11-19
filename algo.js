//Merge Sorted array
//***************************************************************************************************************************
function merge(arr1, arr2){
    var mergedArr = [];
    var el1 = arr1[0];
    var el2 = arr2[0];
    var i = 1, j = 1;

    while(el1 || el2){
        if((el1 && !el2) || (el1<el2)){
            mergedArr.push(el1);
            el1 = arr1[i++];
        }
        else{
            mergedArr.push(el2);
            el2 = arr2[j++];
        }
    }
    return mergedArr;
}

merge([2,5,6,9], [1,2,3,29]);

//Merge Sort
//***************************************************************************************************************************
function mergeSort(arr,l,r){
	if(l<r){
		let m = Math.floor((l+r)/2);
		
		mergeSort(arr,l,m);
		mergeSort(arr,m+1,r);
		
		merge(arr,l,m,r);
	}
}

//Quick Sort
//***************************************************************************************************************************
function qsort(arr,low,high)
{
    if (low < high)
    {
        /* pi is partitioning index, arr[pi] is 
          now at right place */
        var pi = partition(arr, low, high);

        // Recursively sort elements before
        // partition and after partition
        qsort(arr, low, pi-1);
        qsort(arr, pi+1, high);
    }
}

function partition(arr, low, high)
{
    var pivot = arr[high]; 
    var i = (low-1); // index of smaller element
    for (var j=low; j<high; j++)
    {
        // If current element is smaller than or
        // equal to pivot
        if (arr[j] <= pivot)
        {
            i++;

            // swap arr[i] and arr[j]
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    // swap arr[i+1] and arr[high] (or pivot)
    var temp = arr[i+1];
    arr[i+1] = arr[high];
    arr[high] = temp;

    return i+1;
}
//String reverse
//***************************************************************************************************************************
String.prototype.reverese = function(){
    if(!this || this.length <2) return this;

    return this.split("").reverse().join("");
}

//Word reverse
//***************************************************************************************************************************
function reverseWords(str){
    var revWordArr = [];
    var eachWordLen = 0;

    for(var i = str.length-1; i>=0; i--){
        if(str[i]==' ' || i==0){
            revWordArr.push(str.substr(i, eachWordLen+1));
            eachWordLen = 0;
        }
        else{
            eachWordLen++;
        }
    }

    return revWordArr.join(' ');
}


//Flatten array
//***************************************************************************************************************************
function flatten(arr){
    var flatArray = [];

    for(var i=0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            flatArray = flatArray.concat(flatten(arr[i]));
        }
        else{
            flatArray.push(arr[i]);
        }
    }
    return flatArray;
}

var arr = [1,[2,5,[8,9]],[20,30],[[[50],60]]];

//Remove Duplicates
//***************************************************************************************************************************
function removeDuplicates(arr){
    var charHash = {};
    var curItem;
    var outArray = [];

    for(var i = 0; i<arr.length; i++){
        curItem = arr[i];

        if(!charHash[curItem]){
            outArray.push(arr[i]);
            charHash[curItem] = true;
        }
    }
    return outArray;
}
var arr = [1,6,6,2,3,5,6,7,5,6,8,9,8];

//First Non repeating character
//***************************************************************************************************************************
function firstNonRepeatingChar(str){
    var charCount = {};

    for(var i=0; i<str.length; i++){
        char = str[i];
        if(charCount[char]){
            charCount[char]++; 
        }
        else{
            charCount[char] = 1;
        }
    }

    for (var key in charCount){
        if (charCount[key]==1)
            return key;
      }
}

var str = "the quick brown fox jumps then quickly blow air";

//Sum of 2 numbers in array equal to given sum
//***************************************************************************************************************************
function sumFinder(arr, sum){	
  var differ = {}, 
      len = arr.length,
      substract;
  
  for(var i =0; i<len; i++){
     substract = sum - arr[i];

     if(differ[substract])
       return true;       
     else
       differ[arr[i]] = true;
  }
  
  return false;
}

//Longest common subsequence
//***************************************************************************************************************************
function lcs(str1,str2,m,n){
    if(m==0 || n==0){
        return 0;
    }
    if(str1[m-1] == str2[n-1]){
        return 1+lcs(str1,str2,m-1,n-1);
    }
    else{
        return Math.max(lcs(str1,str2,m,n-1),lcs(str1,str2,m-1,n));
    }
}

var str1="AGGTAB";
var str2="GXTXAYB";
//LCS = GTAB
//Output = 4;

//Longest common subsequence Dynamic Programming
//***************************************************************************************************************************
function lcsDynamicProg(str1,str2,m,n){
    var lengthMatrix = [];

    for(var i=0;i<m+1;i++){
	   lengthMatrix[i] = [];
    }
    for(var i=0;i<m+1;i++){
        for(var j=0;j<n+1;j++){
            lengthMatrix[i][j] = 0;
        }
    }
    
    for(var i=0;i<m;i++){
        for(var j=0;j<n;j++){
            if(i==0 || j==0){
                lengthMatrix[i][j] = 0;
            }
            else if(str1[i-1] == str2[j-1]){
                lengthMatrix[i][j] = 1+lengthMatrix[i-1][j-1];
            }
            else{
                lengthMatrix[i][j] = Math.max(lengthMatrix[i-1][j], lengthMatrix[i][j-1])
            }
        }
    }
    return lengthMatrix[m][n];
}
//Bubble sort
//***************************************************************************************************************************
function bubble(arr){
	for(i=0;i<arr.length;i++){
		for(j=i+1;j<arr.length-1;j++){
			if(arr[i]>arr[j]){
				let swap;
				swap = arr[i];
				arr[i] = arr[j];
				arr[j] = swap;
			}
		}
	}
	return arr;
}

//Insertion sort
//***************************************************************************************************************************
function insertion(arr){
	for(i=0;i<arr.length;i++){
		for(j=0;j<i;j++){
			if(arr[i]<arr[j]){
				let removed = arr.splice(i,1)[0];
				arr.splice(j,0,removed);
			}
		}
	}
	return arr;
}

//Selection sort
//***************************************************************************************************************************
function selection(arr){
	for(i=0;i<arr.length;i++){
		var min = arr[i];
		var minIndex = i;
		for(j=i+1;j<arr.length-1;j++){
			if(arr[j]<min){
				min = arr[j];
				minIndex = j;
			}
		}
		arr.splice(minIndex,1);
		arr.splice(i,0,min);
	}
	return arr;
}

//Hoisting
//***************************************************************************************************************************
function ab(){
    var a;
    console.log("A=" + a); //A=Undifined
    a = 20;
    console.log("Hello");
}
ab();

//Object prototype chain
//***************************************************************************************************************************
var a = {prop1: 10};
var b = {prop1: 30, prop2: 50}
var c = {prop3: 100}

b.__proto__ = c;
a.__proto__ = b;

console.log(a.prop1) // 10
console.log(a.prop2) // 50
console.log(a.prop3) // 100

console.log(b.prop1) // 30
console.log(b.prop3) // 100

//Closure in loops
for(var i = 1; i<=5; i++){
	setTimeout(function(x){
		return function(){
			console.log(x);
		}
	}(i),1000*i);
}

//Loop Closure Another example

var arr = [1,2,3];

//Make a new array of functions which will return the following
//newArr[0]()   =>   2
//newArr[1]()   =>   4
//newArr[2]()   =>   5

var newArr = [];
for(j=0;j<arr.length;j++){
	var f = function(x){ 
				return function(){
					return (x+1)*2; 
				}
			}(j);
	newArr.push(f);
}

//Bind function Javascript
//***************************************************************************************************************************
var data = {a:10};

var obj = {
    data: {a: 20},

    showData: function(){
        console.log(this.data);
    }
}
//Will print {a:10}
var x = obj.showData;
showDataVar();

//Will print {a:20}
var y = obj.showData.bind(obj);
y();


var anotherData = {data: {a:1000, b:2000}};
anotherData.showData = obj.showData.bind(anotherData);
anotherData.showData();


//Currying with bind
//***************************************************************************************************************************
function greet(age,name){
	console.log("Hi " +name + " Age=" +age);
}

var person1 = greet.bind(null, 28)//Null since the function is not using this
person1("Ram");  //Hi Ram Age=28
person1("Shayam"); //Hi Shayam Age=28


//Using array methods for Objects
//***************************************************************************************************************************
var anArrayLikeObj = {0:"Martin", 1:78, 2:67, 3:["Letta", "Marieta", "Pauline"], length:4 };

//Convert the Object to Array
var newArray = Array.prototype.slice.call(anArrayLikeObj, 0);

console.log (newArray); // ["Martin", 78, 67, Array[3]]

console.log (Array.prototype.indexOf.call(anArrayLikeObj, "Martin") === -1 ? false : true); // true


//Use of THIS & CALL
var person = {
		   firstName   :"Penelope",
		   lastName    :"Barrymore",
		   showFullName:function () {
			   // The "context"
			   console.log (this.firstName + " " + this.lastName);
		 }
	}
​//If we invoke showFullName with a different object:​
​var anPer = {
			firstName   :"Ram",
		    lastName    :"Singh"
		}
​
​// We can use the apply method to set the "this" value explicitly—more on the apply () method later.​
​// "this" gets the value of whichever object invokes the "this" Function, hence:​
person.showFullName.call(anPer); // Ram Singh​

//Print all combinations of string
//***************************************************************************************************************************
var combinations = function (string)
{
    var result = [];

    var loop = function (start,depth,prefix)
    {
        for(var i=start; i<string.length; i++)
        {
            var next = prefix+string[i];
            if (depth > 0)
                loop(i+1,depth-1,next);
            else
                result.push(next);
        }
    }

    for(var i=0; i<string.length; i++)
    {
        loop(0,i,'');
    }

    return result;
}

//Override console.log function

console.log = function(x){
	return "Overridden ~ " + x;
}