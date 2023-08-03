    var b1, b2, b3, b4, b5, b6, b7, b8, b9; 
    var count=0;
    var flag=0;   
    var x= document.querySelector('#my'); 
    x.addEventListener("click", myfun, false);
       
        function Startnew()
            {
                var b1, b2, b3, b4, b5, b6, b7, b8, b9;               
                var x= document.querySelector('#my');
                var count=0;
                var flag=0;
                document.getElementById('msg').innerHTML="";                
                var m=document.getElementsByTagName('button');
                console.log(m);
                for (var i =0; i<m.length; i++) 
                {
                    m[i].value="";
                    m[i].innerHTML="";
                    
                }  
                
            }            
        
        function myfun(f){
            if(f.target!==f.currentTarget)
            {
                var btn=f.target.id;
                var btn_value=document.getElementById(btn).value;
              
                if(btn_value=="")
                     {      
                        if(flag==0)            
                            {
                                document.getElementById(btn).innerHTML="X";
                                document.getElementById(btn).value="X";
                                flag=1;
                            }                            
                            else{
                                document.getElementById(btn).innerHTML="O";
                                document.getElementById(btn).value="O";
                                flag=0;
                            }
                            count++;                            
                        
                            if(count>4)                           
                            {
                                b1=document.getElementById('btn1').value;
                                b2=document.getElementById('btn2').value;
                                b3=document.getElementById('btn3').value;
                                b4=document.getElementById('btn4').value;
                                b5=document.getElementById('btn5').value;
                                b6=document.getElementById('btn6').value;
                                b7=document.getElementById('btn7').value;
                                b8=document.getElementById('btn8').value;
                                b9=document.getElementById('btn9').value;

                                if((b1=='X' && b2=='X' && b3=='X')||(b4=='X' && b5=='X' && b6=='X') || (b7=='X' && b8=='X' && b9=='X')|| (b1=='X' && b4=='X' && b7=='X')||(b2=='X' && b5=='X' && b8=='X') || (b3=='X' && b6=='X' && b9=='X') || (b1=='X' && b5=='X' && b9=='X')||(b3=='X' && b5=='X' && b7=='X'))
                                {
                                    document.getElementById('msg').innerHTML="X is Winner";
                                    // Startnew();
                                    window.load();

                                }
                                if((b1=='O' && b2=='O' && b3=='O')||(b4=='O' && b5=='O' && b6=='O') || (b7=='O' && b8=='O' && b9=='O')|| (b1=='O' && b4=='O' && b7=='O')||(b2=='O' && b5=='O' && b8=='O') || (b3=='O' && b6=='O' && b9=='O') || (b1=='O' && b5=='O' && b9=='O')||(b3=='O' && b5=='O' && b7=='O'))
                                {
                                    document.getElementById('msg').innerHTML="O is Winner";
                                    // Startnew();
                                    window.load();
                                }

                            }
                                                       
                    }
                
               
            }
        
    }
        