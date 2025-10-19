// Local Variable
    function localVariable(){
        var lName = 'Rifat';
        console.log(lName);
    }
    localVariable();

// Global variable
    var gName = 'Rashed';

    function globalVariable(){
        console.log(gName);
    }

    globalVariable();

// Immediately Invoked Function Expression (IIFE)
    (function() {
        var iife = 'Korim';
        console.log(iife);
    })();

// Function Declaration
    function fDeclaration() {
        var newName = 'Rohim';
        console.log(newName);
    }
    fDeclaration();

// Function Expression
    function fExpression() {
        var newName = 'Jawad';
        console.log(newName);
    }


    const callingFunction = function fExpression() {
    }
    fExpression();