let num=13;
for(i=1;i<=num;i++){
  if(num % i==0){
    count++;
  }
}
if(count==2){
  console.log(num,"is prime");
}else{
  console.log("its not prime")
}