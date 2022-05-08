function numCompare(num1,num2) {
    return num1 - num2;
}
[6, 9, 2, 15, 6].sort(numCompare);

function CompareByLen(str1,str2) {
    return str1.length - str2.length;
}
["Mango","Apple","Orange","Banana"].sort(CompareByLen);