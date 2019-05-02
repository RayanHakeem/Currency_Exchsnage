$(document).ready(function() {
    console.log('jq ready!'); 
    var amount ;

    $('#clear').click(function (e){
        e.preventDefault();
        $('#myText').val('');
        $('#result').val('');
    })

    $('#SARUSD').click(function (e){
        e.preventDefault();
        amount = $("#myText").val();
        console.log(amount);
        $.ajax ({
            method: 'GET',
            url: 'http://data.fixer.io/api/convert?access_key=&from=SAR&to=USD&amount='+amount,
            
            success : function (result) {
                $('#result').val(result.result +'USD');
                console.log(result);
            },
            error : function(error){
                console.log('Error is : ' + error);
            }
        })
    })
    $('#SAREUR').click(function (e){
        e.preventDefault();
        amount = $("#myText").val();
        console.log(amount);
        $.ajax ({
            method: 'GET',
            url: 'http://data.fixer.io/api/convert?access_key=&from=SAR&to=EUR&amount='+amount,
            
            success : function (result) {
                $('#result').val(result.result +'EUR');
                console.log(result);
            },
            error : function(error){
                console.log('Error is : ' + error);
            }
        })
    })
    $('#USDSAR').click(function (e){
        e.preventDefault();
        amount = $("#myText").val();
        console.log(amount);
        $.ajax ({
            method: 'GET',
            url: 'http://data.fixer.io/api/convert?access_key=&from=USD&to=SAR&amount='+amount,
            
            success : function (result) {
                $('#result').val(result.result + 'SAR');
                console.log(result);
            },
            error : function(error){
                console.log('Error is : ' + error);
            }
        })
    })
    $('#USDEUR').click(function (e){
        e.preventDefault();
        amount = $("#myText").val();
        console.log(amount);
        $.ajax ({
            method: 'GET',
            url: 'http://data.fixer.io/api/convert?access_key=&from=USD&to=EUR&amount='+amount,
            
            success : function (result) {
                $('#result').val(result.result+'EUR');
                console.log(result);
            },
            error : function(error){
                console.log('Error is : ' + error);
            }
        })
    })
    $('#EURSAR').click(function (e){
        e.preventDefault();
        amount = $("#myText").val();
        console.log(amount);
        $.ajax ({
            method: 'GET',
            url: 'http://data.fixer.io/api/convert?access_key=&from=EUR&to=SAR&amount='+amount,
            
            success : function (result) {
                $('#result').val(result.result+'SAR');
                console.log(result);
            },
            error : function(error){
                console.log('Error is : ' + error);
            }
        })
    })
    $('#EURUSD').click(function (e){
        e.preventDefault();
        amount = $("#myText").val();
        console.log(amount);
        $.ajax ({
            method: 'GET',
            url: 'http://data.fixer.io/api/convert?access_key=&from=EUR&to=USD&amount='+amount,
            
            success : function (result) {
                $('#result').val(result.result+'USD');
                console.log(result);
            },
            error : function(error){
                console.log('Error is : ' + error);
            }
        })
    })
    })
