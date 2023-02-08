for (let i = 375001; i <= 699999; i++){
    let num = "";
    num += i;
    let digits = num.length;
    let bigPP = numToWord(num[0]) + " Hundred " + twoDigitWord(num.substring(1,3)) + " Thousand " + ((num[3] != "0") ? (numToWord(num[3]) + " Hundred ") : "") + twoDigitWord(num.substring(4,6));
    
    let str = `&nbsp&nbsp&nbsp&nbspelse if(number === ` + i + ` || number === \"` + i + `\" || number === \"` + bigPP.toLowerCase() + `\" || number === \"` + bigPP + `\" || number === \"` + bigPP.toUpperCase() + `\") return `;
    if(i%2 == 0){
        document.write(str + "true;\n");
    }
    else{
        document.write(str + "false;\n");
    }
    document.write("<br>");
}

function numToWord(n){
    switch (n) {
        case '1':
            return 'One';
            break;
        case '2':
            return 'Two';
            break;
        case '3':
            return 'Three';
            break;
        case '4':
            return 'Four';
            break;
        case '5':
            return 'Five';
            break;
        case '6':
            return 'Six';
            break;
        case '7':
            return 'Seven';
            break;
    
        case '8':
            return 'Eight';
            break;
    
        case '9':
            return 'Nine';
            break;
    
        default:
            return "";
            break;
    }
}
function numToTeenWord(n){
    switch (n) {
        case '11':
            return 'Eleven';
            break;
        case '12':
            return 'Twelve';
            break;
        case '13':
            return 'Thirteen';
            break;
        case '14':
            return 'Fourteen';
            break;
        case '15':
            return 'Fifteen';
            break;
        case '16':
            return 'Sixteen';
            break;
        case '17':
            return 'Seventeen';
            break;
    
        case '18':
            return 'Eighteen';
            break;
    
        case '19':
            return 'Nineteen';
            break;
    
        default:
            return "";
            break;
    }
}

function numToTenthWord(n){
    switch (n) {
        case '1':
            return 'Ten';
            break;
        case '2':
            return 'Twenty';
            break;
        case '3':
            return 'Thirty';
            break;
        case '4':
            return 'Fourty';
            break;
        case '5':
            return 'Fifty';
            break;
        case '6':
            return 'Sixty';
            break;
        case '7':
            return 'Seventy';
            break;
    
        case '8':
            return 'Eighty';
            break;
    
        case '9':
            return 'Ninety';
            break;
    
        default:
            return "";
            break;
    }
}

function twoDigitWord(n){
    if(n[0] != "0"){
        if(n[0] == "1"){
            return numToTeenWord(n);            
        }
        else if(n[1] != "0"){
            return (numToTenthWord(n[0]) + "-" + numToWord(n[1]));
        }
        else{
            return numToTenthWord(n[0]);
        }
    }
    else{
        return numToWord(n[1]);
    }
}
