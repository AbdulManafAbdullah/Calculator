
// // let display = document.getElementById('inputBox');
// // let buttons = document.querySelectorAll('button');
// // let buttonsArray = Array.from(buttons);
// // let string = '';

// // buttonsArray.forEach(btn => {
// //     btn.addEventListener('click', (e) => {
// //         if (e.target.innerHTML === "DEL") {  
// //             string = string.substring(0, string.length - 1);
// //             display.value = string;
// //         } else if (e.target.innerHTML === "AC") {  
// //             string = '';
// //             display.value = string;
// //         } else if (e.target.innerHTML === "=") { 
// //             string = eval(string);  
// //             display.value = string;
// //         } else {
// //             string += e.target.innerHTML;  
// //             display.value = string;
// //         }
// //     });
// // });


let currentInput = '';
let operator = null;
let firstOperand = null;

function appendNumber(number) {
    currentInput += number;
    console.log(number);
    
    updateDisplay();
}

function appendOperator(op) {
    if (currentInput === '') return;  // Prevent appending operator without a number
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);  // Set the first operand
    }
    operator = op;
    currentInput = '';  // Clear the current input to prepare for next number
}

function clearDisplay() {
    currentInput = '';
    operator = null;
    firstOperand = null;
    updateDisplay();
}

function calculate() {
    if (operator === null || currentInput === '') return;  // Prevent calculation without complete inputs

    let secondOperand = parseFloat(currentInput);
    let result = 0;

    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            if (secondOperand === 0) {
                alert('Cannot divide by zero');
                clearDisplay();
                return;
            }
            result = firstOperand / secondOperand;
            break;
    }

    currentInput = result.toString();  // Display result as string
    operator = null;  // Reset operator
    firstOperand = null;  // Reset first operand
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}

// یہ کوڈ ایک سادہ کیلکولیٹر کے لیے ہے، جس میں نمبر، آپریٹرز، اور کیلکولیشن کی بنیاد پر آپریٹ کیا جا رہا ہے۔ میں آپ کو ہر لائن کی تفصیل اردو میں سمجھاتا ہوں:

// let currentInput = '';

// یہ لائن ایک متغیر currentInput کو شروع کرتا ہے جو کہ کیلکولیٹر کی اسکرین پر دکھائے جانے والے نمبر یا رزلٹ کو محفوظ رکھے گا۔
// let operator = null;

// operator نام کا متغیر بنایا جا رہا ہے جس میں منتخب آپریٹر (+, -, *, /) کو رکھا جائے گا۔ ابتدا میں اسے null پر سیٹ کیا گیا ہے۔
// let firstOperand = null;

// firstOperand متغیر بنایا جا رہا ہے جو پہلے نمبر کو محفوظ کرے گا جس پر آپریشن کیا جائے گا۔
// function appendNumber(number) {

// یہ ایک فنکشن ہے جس کا نام appendNumber ہے، جو ایک عدد کو اسکرین پر دکھانے کے لیے استعمال کیا جائے گا۔
// currentInput += number;

// اس لائن میں منتخب عدد کو currentInput میں جوڑا جا رہا ہے، یعنی ہر بار جب کوئی نیا عدد شامل ہو گا، وہ موجودہ عدد کے ساتھ جڑ جائے گا۔
// updateDisplay();

// اس لائن میں updateDisplay فنکشن کال کیا جا رہا ہے تاکہ اسکرین پر نیا currentInput دکھایا جا سکے۔
// }

// appendNumber فنکشن کا اختتام۔
// function appendOperator(op) {

// appendOperator ایک فنکشن ہے جو آپریٹر (جیسے +, -, *, /) کو منتخب کرنے کے لیے استعمال ہو گا۔
// if (currentInput === '') return;

// اگر currentInput خالی ہو تو کوئی آپریٹر نہ شامل کیا جائے گا، یعنی آپریٹر صرف تب ہی شامل کیا جا سکتا ہے جب کوئی نمبر موجود ہو۔
// if (firstOperand === null) {

// یہ چیک کیا جا رہا ہے کہ اگر firstOperand (پہلا عدد) ابھی تک سیٹ نہیں ہوا، تو اس کو سیٹ کیا جائے گا۔
// firstOperand = parseFloat(currentInput);

// currentInput کی ویلیو کو firstOperand میں تبدیل کیا جا رہا ہے تاکہ پہلا نمبر محفوظ کیا جا سکے۔
// operator = op;

// منتخب آپریٹر کو operator متغیر میں محفوظ کیا جا رہا ہے۔
// currentInput = '';

// currentInput کو دوبارہ خالی کر دیا جا رہا ہے تاکہ اگلے نمبر کے لیے جگہ بن سکے۔
// }

// appendOperator فنکشن کا اختتام۔
// function clearDisplay() {

// clearDisplay ایک فنکشن ہے جو کیلکولیٹر کی اسکرین کو صاف کرنے کے لیے استعمال ہو گا۔
// currentInput = '';

// اس لائن میں currentInput کو خالی کیا جا رہا ہے۔
// operator = null;

// operator کو null کر دیا جا رہا ہے تاکہ کوئی آپریٹر منتخب نہ ہو۔
// firstOperand = null;

// firstOperand کو بھی null کر دیا جا رہا ہے تاکہ پہلا عدد دوبارہ سیٹ نہ ہو۔
// updateDisplay();

// اسکرین کو اپ ڈیٹ کیا جا رہا ہے تاکہ تمام ویلیوز کو صاف کیا جا سکے۔
// }

// clearDisplay فنکشن کا اختتام۔
// function calculate() {

// calculate ایک فنکشن ہے جو آپریٹر کے ساتھ کیلکولیشن کرنے کے لیے استعمال ہو گا۔
// if (operator === null || currentInput === '') return;

// اگر کوئی آپریٹر منتخب نہیں کیا گیا یا currentInput خالی ہے، تو کیلکولیشن نہیں ہو گی۔
// let secondOperand = parseFloat(currentInput);

// currentInput کو عدد میں تبدیل کرکے secondOperand میں محفوظ کیا جا رہا ہے۔
// let result = 0;

// result متغیر کو صفر سے شروع کیا جا رہا ہے تاکہ کیلکولیشن کا رزلٹ محفوظ کیا جا سکے۔
// switch (operator) {

// switch سٹیٹمنٹ کی مدد سے منتخب آپریٹر کی بنیاد پر مختلف آپریشن کیے جائیں گے۔
// case '+':

// اگر آپریٹر + ہے، تو یہ لائن چلے گی۔
// result = firstOperand + secondOperand;

// اگر آپریٹر جمع (+) ہے، تو firstOperand اور secondOperand کو جمع کیا جائے گا۔
// break;

// switch سٹیٹمنٹ سے باہر نکلنے کے لیے break کا استعمال۔
// case '-':

// اگر آپریٹر - ہے، تو یہ لائن چلے گی۔
// result = firstOperand - secondOperand;

// اگر آپریٹر منفی (-) ہے، تو firstOperand سے secondOperand کو منفی کیا جائے گا۔
// break;

// switch سٹیٹمنٹ سے باہر نکلنے کے لیے break کا استعمال۔
// case '*':

// اگر آپریٹر * ہے، تو یہ لائن چلے گی۔
// result = firstOperand * secondOperand;

// اگر آپریٹر ضرب (*) ہے، تو firstOperand اور secondOperand کو ضرب دیا جائے گا۔
// break;

// switch سٹیٹمنٹ سے باہر نکلنے کے لیے break کا استعمال۔
// case '/':

// اگر آپریٹر / ہے، تو یہ لائن چلے گی۔
// if (secondOperand === 0) {

// اگر secondOperand صفر ہے، یعنی تقسیم صفر سے ہو رہی ہے۔
// alert('Cannot divide by zero');

// صارف کو ایک الرٹ پیغام دکھایا جائے گا کہ صفر سے تقسیم نہیں کی جا سکتی۔
// clearDisplay();
// اسکرین کو صاف کیا جائے گا۔
// return;

// کیلکولیشن کو روک دیا جائے گا۔
// result = firstOperand / secondOperand;

// اگر صفر سے تقسیم نہیں ہے، تو firstOperand کو secondOperand سے تقسیم کیا جائے گا۔
// break;

// switch سٹیٹمنٹ سے باہر نکلنے کے لیے break کا استعمال۔
// }

// calculate فنکشن کا اختتام۔
// currentInput = result.toString();

// حاصل شدہ نتیجے کو currentInput میں تبدیل کرکے اسکرین پر دکھایا جائے گا۔
// operator = null;

// operator کو null کر دیا جائے گا تاکہ اگلی کیلکولیشن کے لیے نیا آپریٹر منتخب کیا جا سکے۔
// firstOperand = null;

// firstOperand کو null کر دیا جائے گا تاکہ اگلے آپریشن کے لیے نیا پہلا عدد منتخب کیا جا سکے۔
// updateDisplay();

// اسکرین کو اپ ڈیٹ کیا جائے گا تاکہ نیا نتیجہ دکھایا جا سکے۔
// }

// calculate فنکشن کا اختتام۔
// function updateDisplay() {

// updateDisplay ایک فنکشن ہے جو اسکرین پر currentInput کو دکھانے کے لیے استعمال ہو گا۔
// document.getElementById('display').value = currentInput;

// یہ لائن اسکرین (جہاں id="display" ہے) کو اپ ڈیٹ کر رہی ہے اور currentInput کو وہاں دکھا رہی ہے۔
// }

// updateDisplay فنکشن کا اختتام۔
// یہ کوڈ ایک مکمل کیلکولیٹر کے بنیادی فنکشنز کو تشکیل دیتا ہے جس میں نمبر شامل کرنا، آپریٹر منتخب کرنا، کیلکولیشن کرنا اور اسکرین کو صاف کرنا شامل ہے۔