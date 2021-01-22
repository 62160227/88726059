
function submit(){
    var x1 = document.getElementById("number").value;
    div = document.getElementById('disp')
    div.innerHTML = ''
    s1 = x1 / 1000;
    x1 = x1 % 1000;
    s2 = x1 / 500;
    x1 = x1 % 500;
    s3 = x1 / 100;
    x1 = x1 % 100;
    s4 = x1 / 50;
    x1 = x1 % 50;
    s5 = x1 / 20;
    x1 = x1 % 20;
    s6 = x1 / 10;
    x1 = x1 % 10;
    s7 = x1 / 5;
    x1 = x1 % 5;
    s8 = x1 / 2;
    x1 = x1 % 2;
    s9 = x1 / 1;
    x1 = x1 % 1;
    table = ``
    table += `<tr>
                 <td>แบงค์ 1000 : ${Math.floor(s1)} ใบ</td>
             </tr>
             <tr>
             <td>แบงค์ 500 : ${Math.floor(s2)} ใบ</td>
             </tr>
             <tr>
             <td>แบงค์ 100 : ${Math.floor(s3)} ใบ</td>
             </tr>
             <tr>
             <td>แบงค์ 50 : ${Math.floor(s4)} ใบ</td>
             </tr>
             <tr>
             <td>แบงค์ 20 : ${Math.floor(s5)} ใบ</td>
             </tr>
             <tr>
             <td>เหรียญ 10 : ${Math.floor(s6)} เหรียญ</td>
             </tr>
             <tr>
             <td>เหรียญ 5 : ${Math.floor(s7)} เหรียญ</td>
             </tr>
             <tr>
             <td>เหรียญ 2 : ${Math.floor(s8)} เหรียญ</td>
             </tr>
             <tr>
             <td>เหรียญ 1 : ${Math.floor(s9)} เหรียญ</td>
             </tr>`
    div.innerHTML = table


}