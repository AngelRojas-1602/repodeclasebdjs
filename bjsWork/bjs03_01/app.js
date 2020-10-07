/*
  Switch Case

  Es una estructura de control que evalua un valor
  contra valores EXACTOS.

  Sintaxis:

  switch (valor) {

    case caso1:
      ...
      break;

    case caso2:
      ...
      break;

    default:
      ...
  }
*/

function day_of_week_if(day) {
        if (day === 0) {
          return "sunday";
        } else if (day === 1) {
          return "monday";
        } else if (day === 2) {
          return "tuesday";
        } else if (day === 3) {
          return "wednesday";
        } else if (day === 4) {
          return "thursday";
        } else if (day === 5) {
          return "Friday";
        } else if (day === 6) {
          return "saturday";
        } else {
          return "Not a day";
        }
      }
      
      function day_of_week(day) {
        switch (day) {
          case 0:
            return "sunday";
      
          case 1:
            return "monday";
      
          case 2:
            return "tuesday";
      
          case 3:
            return "wednesday";
      
          case 4:
            return "thursday";
      
          case 5:
            return "friday";
      
          case 6:
            return "saturday";
      
          default:
            return "Not a day";
        }
      }
      
      function fizzbuzz_switch_case() {
        for (let i = 1; i <= 100; i++) {
          /*
          if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz");
          } else if (i % 3 === 0) {
            console.log("fizz");
          } else if (i % 5 === 0) {
            console.log("buzz");
          } else {
            console.log(i);
          }*/
      
          switch (true) {
            case i % 3 === 0 && i % 5 === 0:
              console.log("fizzbuzz");
              break;
      
            case i % 5 === 0:
              console.log("buzz");
              break;
      
            case i % 3 === 0:
              console.log("fizz");
              break;
      
            default:
              console.log(i);
          }
        }
      }
      
      fizzbuzz_switch_case();
      