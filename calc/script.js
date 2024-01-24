function calculate()
{

    var list = document.getElementById("operation_box").value = operation_box.options[operation_box.selectedIndex].text;  

    let x = document.getElementById('num1').value;

    let y = document.getElementById('num2').value;

    

 var operation ;

 if (list == "+")
 {
    operation = Number(x) + Number(y);
 }
 else if (list == "-")
 {
    operation = Number(x) - Number(y);
 }
 else if (list == "X")
 {
    operation = Number(x) * Number(y);
 }
 else if (list == "/")
 {
    operation = Number(x) / Number(y);
 }
 else if (list == "%")
 {
    operation = Number(x) % Number(y);
 }

//  if (list == "+" || list == "-" || list == "X" || list == "/" || list == "%" || list == "x"){

   var result = document.getElementById('result')

   result.value = x + list + y + "=" + operation;

   // alert(x + list + y + "=" + operation);

 }
//  else{
//     alert(list);
//  }
    
//}
