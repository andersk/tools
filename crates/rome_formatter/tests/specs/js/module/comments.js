// import {
//     func, // trailing comma removal
// } from 'module';


expression(/* block comment */);

expression(
    /* block comment */
);


expression( // line comment
);

expression(
    // line comment
);


expression( "something" // line comment 
);


expression( "something" /** something **/  );

expression(/** something **/ "something" 
          );

expression(
    /** something **/
    "something" 
);

const array0 = [/*0*/];
const array1 = [/*0*/,/*1*/];
const array2 = [/*0*/,/*1*/,/*2*/];

/* block comment */
statement();

statement(); /* block comment */

// line comment
statement();

statement(); // inline