let weight = +prompt("Nhập cân nặng :")
let height = +prompt("Nhập chiều cao : ")
let chiso = weight / ( height ^ 2 );
if (chiso < 18.5){
    alert('Underweight');
}else if (18.5 <= chiso <= 25){
    alert('Normal');
}else if (25 <= chiso <= 30){
    alert('Overweight');
}else{
    alert('obese');
}