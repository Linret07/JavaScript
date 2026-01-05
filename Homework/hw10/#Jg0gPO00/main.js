const input = document.getElementById('xxx');
const resultDiv=document.getElementById('result');
input.oninput = function () {
    resultDiv.innerHTML = +this.value * 2.2;
};