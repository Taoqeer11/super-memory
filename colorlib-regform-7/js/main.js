    const inputError = document.getElementById("inputError1");
    
    function first() {
        let name1 = document.getElementById("fname").value;
        
        if (name1.length <= 4) {
            inputError.innerHTML='Should be greater than 4 characters ';
            inputError.style ="margin-left:63px; color:red;";
        }else{
        }

        if (name1.length >= 4) {
            inputError.innerHTML = '<i class="fa-solid fa-circle-check"style = margin-left:170px;"></i>';
        } else {
        }

        if (name1.length ==0) {
            inputError.innerHTML='';
        }else{

        }

    }
    
    var inputError2 = document.getElementById("inputError2");
    function Email()
    {
        var regexmail = /^\S+\@+\S+\.+\S+$/ ;
        var formEmail = document.getElementById("email");

        if(formEmail.value.match(regexmail))
        {
            inputError2.innerHTML = '<i class="fa-solid fa-circle-check"style = margin-left:130px;"></i>';
        }else{
            inputError2.innerHTML = 'Follow Proper Format';
            inputError2.style ="margin-left:142px; color:red;";
        }
        if(formEmail.value <=1)
        {
            inputError2.innerHTML = '';
        }
    }

    const regexpas = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const pas = document.getElementById("pass");
    const inputError3 = document.getElementById("inputError3");
    const toggleEye = document.getElementById("toggleEye");

    function validatePassword() {
        if (pas.value.match(regexpas)) {
            inputError3.innerHTML = '<i class="fa-solid fa-circle-check"style = margin-left:150px; font-size:10px;"></i>';
            
        } else {
            inputError3.innerHTML= "Alpha,Num,Symbol & min 8chars";
            inputError3.style = "color:red; font-size:10px; margin-left:80px;";
        }
       
        if (pas.value.length < 1) {
            inputError3.innerHTML = '';
        }
    }

    function togglePassword() {
        if (pas.type === "password") {
            pas.type = "text";
            toggleEye.classList.remove("fa-eye");
            toggleEye.classList.add("fa-eye-slash");
        } else {
            pas.type = "password";
            toggleEye.classList.remove("fa-eye-slash");
            toggleEye.classList.add("fa-eye");
        }
    }

    const inputError4 = document.getElementById("inputError4");
    const repas = document.getElementById("re-pass");

    function reEnter()
    {
        if(repas.value == pas.value)
        {
            inputError4.innerHTML = '<i class="fa-solid fa-circle-check"style = margin-left:150px;"></i>';
        }else{
            inputError4.innerHTML = 'Password Not Match!';
            inputError4.style = 'color:red; font-size:10px; margin-left:100px;';
        }
        if (repas.value.length < 1) {
            inputError4.innerHTML = '';
        }
    }


    const inputError5 = document.getElementById("inputError5");
    const check = document.getElementById("agree-term")

    function agre()
    {
        if(check.checked)
        {
            inputError5.innerHTML = '.'; 
        }else{
            inputError5.innerHTML = 'Plz Agree with the terms of service';
            inputError5.style = 'color:red; font-size:10px; margin-left:15px;';
        }
    }

    
    function register()
    {
            let name1 = document.getElementById("fname").value;
            let inputField = document.getElementById("fname");

            
                inputError.innerHTML='Should be greater than 4 characters ';
                inputError.style ="margin-left:93px; color:red;";
                inputField.placeholder = "";

                if (name1.length >= 4) {
                    inputError.innerHTML = '<i class="fa-solid fa-circle-check"style = margin-left:180px;"></i>';
                }
         
            if (name1.length =='') {
                inputField.placeholder = "Your Name";
            } else {
            }

            inputError2.innerHTML = 'Follow Proper Format';
            inputError2.style ="margin-left:142px; color:red;";

            
            var regexmail = /^\S+\@+\S+\.+\S+$/ ;
            var formEmail = document.getElementById("email");
            if(formEmail.value.match(regexmail))
                {
                    inputError2.innerHTML = '<i class="fa-solid fa-circle-check"style = margin-left:135px;"></i>';
                }

        
                const inputError3 = document.getElementById("inputError3");
                const pas = document.getElementById("pass");
                
                if (pas.value.match(regexpas)) {
                    inputError3.innerHTML = '<i class="fa-solid fa-circle-check" style="margin-left:170px;"></i>';
                } else {
                    inputError3.innerHTML = "Alpha, Num, Symbol & min 8 chars";
                    inputError3.style = "color:red; font-size:10px; margin-left:80px;";
                }
                
                const inputError4 = document.getElementById("inputError4");
                const repas = document.getElementById("re-pass");
                
                inputError4.innerHTML = "Password Not Match!";
                inputError4.style = "color:red; font-size:10px; margin-left:150px;";
                if (repas.value = pas.value) {
                    // inputError4.innerText = ' '
                    inputError4.innerHTML = '<i class="fa-solid fa-circle-check" style="margin-left:60px;"></i>';
                } else {
                }  
    }
        