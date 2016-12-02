window.addEventListener('load', function(){


    function initAccordion(title, description){
        function removeActiveClass(){
          description.forEach(function(items){
                items.classList.remove('active');
            });
        }
        function toggleActiveClass(ths){
            removeActiveClass();
            ths.nextElementSibling.classList.add('active');
        }
        title.forEach(function(item){
            item.addEventListener("click", function(){
                toggleActiveClass(this); 
            });
        });
    }

    var title = document.querySelectorAll('.title');
    var description = document.querySelectorAll('.description');

    initAccordion(title, description);



    var loginForm = document.forms.loginForm;
    
    // console.log(loginForm);

    function ValidateForm(form){
       var login = form.login,
            pass = form.pass,
            checkbox = form.checkbox;

        var errorBlc = document.querySelector('.error');
        
        var textErrorLogin = "Логин должен быть только строчными буквами от 4 до 8 символов",
            textErrorPass = "Пароль должен содержить от 6 символов и должна быть хотя бы одна заглавная буква, строчная буква и число";
        
        function checkValue(){
            var regLogin = /[a-z]{4,8}/;
            var regPass = /[a-zA-Z0-9]{6,}/;

               if(regLogin.test(login.value) == false){
                    return textErrorLogin;
                }else if(regPass.test(pass.value) == false){
                    return  textErrorPass;
                }else if(regLogin.test(login.value) && regPass.test(regPass.value)){
                    return true;
                }else{
                    return false;
                }
            };

            var checkLength = function(){
                if( login.value > 3 && pass.value > 6){
                    checkValue();
                    
                }else{
                   return false; 
                }
            };

            
           
        form.addEventListener('submit', function(e){
            e.preventDefault();


            // console.log(typeof checkValue() );
            console.log( checkLength() );

            if( checkLength() ){
                console.log( checkLength() );
                
            }else{
                errorBlc.innerHTML = checkValue();
            }

            // console.log( checkValue() );

            // if(login.value.length <= 3 && )

            
            
        })
    };

ValidateForm(loginForm);


    
    

});