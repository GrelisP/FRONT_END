
    //filter script
    filterSelection("all")
    function filterSelection(c) {
        var x, i;
        x = document.getElementsByClassName("filterDiv");
        if (c == "all") c = "";
        for (i = 0; i < x.length; i++) {
        RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
        }
    }
    
    function AddClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
        }
    }
    
    function RemoveClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);     
        }
        }
        element.className = arr1.join(" ");
    }
    
    // Add active class to the current button (highlight it)
    var btnContainer = document.getElementById("myBtnContainer");
    var btns = btnContainer.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        });
    }
    
    
    
    var modal = document.getElementById('myModal-a');
    
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn-a");
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close-a")[0];
    
    // When the user clicks the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it

    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
    
    
    
    
    var modal2 = document.getElementById('myModal-b');
    var btn2 = document.getElementById("myBtn-b");
    var span2 = document.getElementsByClassName("close-b")[0];
    btn2.onclick = function() {
        modal2.style.display = "block";
    }
    span2.onclick = function() {
        modal2.style.display = "none";
    }
    window.addEventListener("click", function(event) {
        if (event.target == modal2) {
            modal2.style.display = "none";
        }
    });
    
    var modal3 = document.getElementById('myModal-c');
    var btn3 = document.getElementById("myBtn-c");
    var span3 = document.getElementsByClassName("close-c")[0];
    btn3.onclick = function() {
        modal3.style.display = "block";
    }
    span3.onclick = function() {
        modal3.style.display = "none";
    }
    window.addEventListener("click", function(event) {
        if (event.target == modal3) {
            modal3.style.display = "none";
        }
    });
    
    var modal4 = document.getElementById('myModal-d');
    var btn4 = document.getElementById("myBtn-d");
    var span4 = document.getElementsByClassName("close-d")[0];
    btn4.onclick = function() {
        modal4.style.display = "block";
    }
    span4.onclick = function() {
        modal4.style.display = "none";
    }
    window.addEventListener("click", function(event) {
        if (event.target == modal4) {
            modal4.style.display = "none";
        }
    });
    
    var modal5 = document.getElementById('myModal-e');
    var btn5 = document.getElementById("myBtn-e");
    var span5 = document.getElementsByClassName("close-e")[0];
    btn5.onclick = function() {
        modal5.style.display = "block";
    }
    span5.onclick = function() {
        modal5.style.display = "none";
    }
    window.addEventListener("click", function(event) {
        if (event.target == modal5) {
            modal5.style.display = "none";
        }
    });
    
    var modal6 = document.getElementById('myModal-f');
    var btn6 = document.getElementById("myBtn-f");
    var span6 = document.getElementsByClassName("close-f")[0];
    btn6.onclick = function() {
        modal6.style.display = "block";
    }
    span6.onclick = function() {
        modal6.style.display = "none";
    }
    window.addEventListener("click", function(event) {
        if (event.target == modal6) {
            modal6.style.display = "none";
        }
    });
    
    var modal7 = document.getElementById('myModal-g');
    var btn7= document.getElementById("myBtn-g");
    var span7 = document.getElementsByClassName("close-g")[0];
    btn7.onclick = function() {
        modal7.style.display = "block";
    }
    span7.onclick = function() {
        modal7.style.display = "none";
    }
    window.addEventListener("click", function(event) {
        if (event.target == modal7) {
            modal7.style.display = "none";
        }
    });
    
    var modal8 = document.getElementById('myModal-h');
    var btn8 = document.getElementById("myBtn-h");
    var span8 = document.getElementsByClassName("close-h")[0];
    btn8.onclick = function() {
        modal8.style.display = "block";
    }
    span8.onclick = function() {
        modal8.style.display = "none";
    }
    window.addEventListener("click", function(event) {
        if (event.target == modal8) {
            modal8.style.display = "none";
        }
    });
    
    var modal9 = document.getElementById('myModal-i');
    var btn9 = document.getElementById("myBtn-i");
    var span9 = document.getElementsByClassName("close-i")[0];
    btn9.onclick = function() {
        modal9.style.display = "block";
    }
    span9.onclick = function() {
        modal9.style.display = "none";
    }
    window.addEventListener("click", function(event) {
        if (event.target == modal9) {
            modal9.style.display = "none";
        }
    });
    
    var modal10 = document.getElementById('myModal-j');
    var btn10 = document.getElementById("myBtn-j");
    var span10 = document.getElementsByClassName("close-j")[0];
    btn10.onclick = function() {
        modal10.style.display = "block";
    }
    span10.onclick = function() {
        modal10.style.display = "none";
    }
    window.addEventListener("click", function(event) {
        if (event.target == modal10) {
            modal10.style.display = "none";
        }
    });
    
    var modal11 = document.getElementById('myModal-k');
    var btn11 = document.getElementById("myBtn-k");
    var span11 = document.getElementsByClassName("close-k")[0];
    btn11.onclick = function() {
        modal11.style.display = "block";
    }
    span11.onclick = function() {
        modal11.style.display = "none";
    }
    window.addEventListener("click", function(event) {
        if (event.target == modal11) {
            modal11.style.display = "none";
        }
    });
    
    var modal12 = document.getElementById('myModal-l');
    var btn12 = document.getElementById("myBtn-l");
    var span12 = document.getElementsByClassName("close-l")[0];
    btn12.onclick = function() {
        modal12.style.display = "block";
    }
    span12.onclick = function() {
        modal12.style.display = "none";
    }
    window.addEventListener("click", function(event) {
        if (event.target == modal12) {
            modal12.style.display = "none";
        }
    });
    
    var modal13 = document.getElementById('myModal-m');
    var btn13 = document.getElementById("myBtn-m");
    var span13 = document.getElementsByClassName("close-m")[0];
    btn13.onclick = function() {
        modal13.style.display = "block";
    }
    span13.onclick = function() {
        modal13.style.display = "none";
    }
    window.addEventListener("click", function(event) {
        if (event.target == modal13) {
            modal13.style.display = "none";
        }
    });
    
    var modal14 = document.getElementById('myModal-n');
    var btn14 = document.getElementById("myBtn-n");
    var span14 = document.getElementsByClassName("close-n")[0];
    btn14.onclick = function() {
        modal14.style.display = "block";
    }
    span14.onclick = function() {
        modal14.style.display = "none";
    }
    window.addEventListener("click", function(event) {
        if (event.target == modal14) {
            modal14.style.display = "none";
        }
    });
    
    var modal15 = document.getElementById('myModal-o');
    var btn15 = document.getElementById("myBtn-o");
    var span15 = document.getElementsByClassName("close-o")[0];
    btn15.onclick = function() {
        modal15.style.display = "block";
    }
    span15.onclick = function() {
        modal15.style.display = "none";
    }
    window.addEventListener("click", function(event) {
        if (event.target == modal15) {
            modal15.style.display = "none";
        }
    });
    
    var modal16 = document.getElementById('myModal-p');
    var btn16 = document.getElementById("myBtn-p");
    var span16 = document.getElementsByClassName("close-p")[0];
    btn16.onclick = function() {
        modal16.style.display = "block";
    }
    span16.onclick = function() {
        modal16.style.display = "none";
    }
    window.addEventListener("click", function(event) {
        if (event.target == modal16) {
            modal16.style.display = "none";
        }
    });
    
    var modal17 = document.getElementById('myModal-q');
    var btn17 = document.getElementById("myBtn-q");
    var span17 = document.getElementsByClassName("close-q")[0];
    btn17.onclick = function() {
        modal17.style.display = "block";
    }
    span17.onclick = function() {
        modal17.style.display = "none";
    }
    window.addEventListener("click", function(event) {
        if (event.target == modal17) {
            modal17.style.display = "none";
        }
    });
    
    var modal18 = document.getElementById('myModal-r');
    var btn18 = document.getElementById("myBtn-r");
    var span18 = document.getElementsByClassName("close-r")[0];
    btn18.onclick = function() {
        modal18.style.display = "block";
    }
    span18.onclick = function() {
        modal18.style.display = "none";
    }
    window.addEventListener("click", function(event) {
        if (event.target == modal18) {
            modal18.style.display = "none";
        }
    });
    
    var modal19 = document.getElementById('myModal-s');
    var btn19 = document.getElementById("myBtn-s");
    var span19 = document.getElementsByClassName("close-s")[0];
    btn19.onclick = function() {
        modal19.style.display = "block";
    }
    span19.onclick = function() {
        modal19.style.display = "none";
    }
    window.addEventListener("click", function(event) {
        if (event.target == modal19) {
            modal19.style.display = "none";
        }
    });
    
    var modal20 = document.getElementById('myModal-t');
    var btn20 = document.getElementById("myBtn-t");
    var span20 = document.getElementsByClassName("close-t")[0];
    btn20.onclick = function() {
        modal20.style.display = "block";
    }
    span20.onclick = function() {
        modal20.style.display = "none";
    }
    window.addEventListener("click", function(event) {
        if (event.target == modal20) {
            modal20.style.display = "none";
        }
    });
    
    var modal21 = document.getElementById('myModal-u');
    var btn21 = document.getElementById("myBtn-u");
    var span21 = document.getElementsByClassName("close-u")[0];
    btn21.onclick = function() {
        modal21.style.display = "block";
    }
    span21.onclick = function() {
        modal21.style.display = "none";
    }
    window.addEventListener("click", function(event) {
        if (event.target == modal21) {
            modal21.style.display = "none";
        }
    });
    
    var modal22 = document.getElementById('myModal-v');
    var btn22 = document.getElementById("myBtn-v");
    var span22 = document.getElementsByClassName("close-v")[0];
    btn22.onclick = function() {
        modal22.style.display = "block";
    }
    span22.onclick = function() {
        modal22.style.display = "none";
    }
    window.addEventListener("click", function(event) {
        if (event.target == modal22) {
            modal22.style.display = "none";
        }
    });
    
    var modal23 = document.getElementById('myModal-w');
    var btn23 = document.getElementById("myBtn-w");
    var span23 = document.getElementsByClassName("close-w")[0];
    btn23.onclick = function() {
        modal23.style.display = "block";
    }
    span23.onclick = function() {
        modal23.style.display = "none";
    }
    window.addEventListener("click", function(event) {
        if (event.target == modal23) {
            modal23.style.display = "none";
        }
    });
    
    var modal24 = document.getElementById('myModal-x');
    var btn24 = document.getElementById("myBtn-x");
    var span24 = document.getElementsByClassName("close-x")[0];
    btn24.onclick = function() {
        modal24.style.display = "block";
    }
    span24.onclick = function() {
        modal24.style.display = "none";
    }
    window.addEventListener("click", function(event) {
        if (event.target == modal24) {
            modal24.style.display = "none";
        }
    });
    
    var modal25 = document.getElementById('myModal-y');
    var btn25 = document.getElementById("myBtn-y");
    var span25 = document.getElementsByClassName("close-y")[0];
    btn25.onclick = function() {
        modal25.style.display = "block";
    }
    span25.onclick = function() {
        modal25.style.display = "none";
    }
    window.addEventListener("click", function(event) {
        if (event.target == modal25) {
            modal25.style.display = "none";
        }
    });
    
    var modal26 = document.getElementById('myModal-z');
    var btn26 = document.getElementById("myBtn-z");
    var span26 = document.getElementsByClassName("close-z")[0];
    btn26.onclick = function() {
        modal26.style.display = "block";
    }
    span26.onclick = function() {
        modal26.style.display = "none";
    }
    window.addEventListener("click", function(event) {
        if (event.target == modal26) {
            modal26.style.display = "none";
        }
    });
    
    var modal27= document.getElementById('myModal-aa');
    var btn27 = document.getElementById("myBtn-aa");
    var span27 = document.getElementsByClassName("close-aa")[0];
    btn27.onclick = function() {
        modal27.style.display = "block";
    }
    span27.onclick = function() {
        modal27.style.display = "none";
    }
    window.addEventListener("click", function(event) {
        if (event.target == modal27) {
            modal27.style.display = "none";
        }
    });
    
    var modal28 = document.getElementById('myModal-ab');
    var btn28 = document.getElementById("myBtn-ab");
    var span28 = document.getElementsByClassName("close-ab")[0];
    btn28.onclick = function() {
        modal28.style.display = "block";
    
    }
    span28.onclick = function() {
        modal28.style.display = "none";
    }
    window.addEventListener("click", function(event) {
        if (event.target == modal28) {
            modal28.style.display = "none";
        }
    });

    var modal29 = document.getElementById('myModal-ac');
    var btn29 = document.getElementById("myBtn-ac");
    var span29 = document.getElementsByClassName("close-ac")[0];
    btn29.onclick = function() {
        modal29.style.display = "block";
    
    }
    span29.onclick = function() {
        modal29.style.display = "none";
    }
    window.addEventListener("click", function(event) {
        if (event.target == modal29) {
            modal29.style.display = "none";
        }
    });
    
    var modal30 = document.getElementById('myModal-ad');
    var btn30 = document.getElementById("myBtn-ad");
    var span30 = document.getElementsByClassName("close-ad")[0];
    btn30.onclick = function() {
        modal30.style.display = "block";
    }
    span30.onclick = function() {
        modal30.style.display = "none";
    }
    window.addEventListener("click", function(event) {
        if (event.target == modal30) {
            modal30.style.display = "none";
        }
    });
    
