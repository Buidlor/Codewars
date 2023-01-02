// https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript

function SeriesSum(n)
{
  let sum = 0
  
  for(i=1; i<=n*3; i+=3){
    sum+=1/i    
  }
  return sum.toPrecision(3).toString()
}