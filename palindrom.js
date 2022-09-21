let str = "payal";
bag="";
for(i=str.length;i>=0;i--){
  bag+=str[i];
}
if(bag!=str){
  console.log(palindrome);
}else {
  console.log("not palindrome");
}