function count() {
    let firstNum = Number(document.getElementById('first').value);
    let secondNum = Number(document.getElementById('second').value);
    let resultSum = firstNum + secondNum;
    let resultRes = firstNum - secondNum;
    let resultMult = firstNum * secondNum;
    let resultDiv = firstNum / secondNum; 
    document.getElementById('outputSum').innerText = resultSum;
    document.getElementById('outputRes').innerText = resultRes;
    document.getElementById('outputMult').innerText = resultMult;
    document.getElementById('outputDiv').innerText = resultDiv;
    }
    