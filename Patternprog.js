let rows = 6;

for (let i = 1; i <= rows; i++)
{
  let num;
  if (i % 2 === 0)
  {
    num = 0;
  }
  else 
  {
    num = 1;
  }
  let result = "";
  for (let j = 1; j <= i; j++)
  {
    result = result + num + " ";

    if(num === 1)
    {
      num = 0;
    }
    else {
      num = 1
    }
  }
  console.log(result);
}
    
  
