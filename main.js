function elect_product(){
    var qty = document.getElementById('iron-qty').value;
    var unit = document.getElementById('iron-unit').value;
    var total = Number(qty)*Number(unit);
    document.getElementById('elect-cons').innerHTML = total;

    remark();
    function remark(){
        if(total > 15){
            document.getElementById('elect-remark').innerHTML = 'Too High';
        }else if(total >=11 && total <= 15){
            document.getElementById('elect-remark').innerHTML = 'High';
        }else if(total >= 6 && total <= 10){
            document.getElementById('elect-remark').innerHTML = 'Medium';
        }else{
            document.getElementById('elect-remark').innerHTML = 'Low';
        }
    }
}

function tel_product(){
    var qty = document.getElementById('tel-qty').value;
    var unit = document.getElementById('tel-unit').value;
    var total = Number(qty)*Number(unit);
    document.getElementById('tel-cons').innerHTML = total;

    remark();
    function remark(){
        if(total > 15){
            document.getElementById('tel-remark').innerHTML = 'Too High';
        }else if(total >=11 && total <= 15){
            document.getElementById('tel-remark').innerHTML = 'High';
        }else if(total >= 6 && total <= 10){
            document.getElementById('tel-remark').innerHTML = 'Medium';
        }else{
            document.getElementById('tel-remark').innerHTML = 'Low';
        }
    }
}

function lap_product(){
    var qty = document.getElementById('lap-qty').value;
    var unit = document.getElementById('lap-unit').value;
    var total = Number(qty)*Number(unit);
    document.getElementById('lap-cons').innerHTML = total;

    remark();
    function remark(){
        if(total > 15){
            document.getElementById('lap-remark').innerHTML = 'Too High';
        }else if(total >=11 && total <= 15){
            document.getElementById('lap-remark').innerHTML = 'High';
        }else if(total >= 6 && total <= 10){
            document.getElementById('lap-remark').innerHTML = 'Medium';
        }else{
            document.getElementById('lap-remark').innerHTML = 'Low';
        }
    }
}

function totalConsumption(){
var electCom = document.getElementById('elect-cons').innerHTML;
var telCom = document.getElementById('tel-cons').innerHTML;
var lapCom = document.getElementById('lap-cons').innerHTML;

var totalSum = Number(electCom) + Number(telCom) + Number(lapCom);

recommend();

    function recommend(){
        if (totalSum >= 15){
            document.getElementById('result').innerHTML = "Your total consumption is " + totalSum +"KW. Sorry, we don't sell a generator that can power your aparment";
        }else if(totalSum >= 10 && totalSum < 15){
            document.getElementById('result').innerHTML = "Your total consumption is " + totalSum + "KW. We recommend a 15KW generator <a href=#>Click here to proceed</a>";
        }else if(totalSum >= 7.5 && totalSum < 10){
            document.getElementById('result').innerHTML = "Your total consumption is " + totalSum + "KW. We recommend a 10KW generator <a href=#>Click here to proceed</a>";
        }else{
            document.getElementById('result').innerHTML = "Your total consumption is " + totalSum + "KW. We recommend a 7.5KW generator <a href=#>Click here to proceed</a>";
        }
    }

}