// Løsninger for spillbrett: Legg inn som egen fil(?) Spillebrett som kun ren tekstformat. Legge inn en funksjon som 
// som henter fra separert fil. / Return funksjon i [game.mjs] -> Henter spillebrett inn
import ANSI from "./ANSI.mjs";
/* [0, 0, 0],
   [0, 0, 0],
   [0, 0, 0],

           
  0  |  0  |  0  
_____|_____|_____
     |     |     
  0  |  0  |  0  
_____|_____|_____
     |     |     
  0  |  0  |  0  
     |     |   

*/

export function lageSpillbrett(spillebrett){

  let fulltBrett = `

  ╔═══╦═══╦═══╗
  ║ ${et(spillebrett[0][0])} ║ ${et(spillebrett[0][1])} ║ ${et(spillebrett[0][2])} ║
  ╠═══╬═══╬═══╣
  ║ ${et(spillebrett[1][0])} ║ ${et(spillebrett[1][1])} ║ ${et(spillebrett[1][2])} ║
  ╠═══╬═══╬═══╣
  ║ ${et(spillebrett[2][0])} ║ ${et(spillebrett[2][1])} ║ ${et(spillebrett[2][2])} ║
  ╚═══╩═══╩═══╝
  `

  return fulltBrett;
}

function evaluereTegn(verdi){
  let spiller1 = 1;
  let visning = "";
  
    if (verdi == 0) {
      visning += " ";
    } else if (verdi == spiller1) {
      visning += ANSI.COLOR.GREEN + "X" + ANSI.COLOR_RESET;
    } else {
      visning += ANSI.COLOR.RED + "O" + ANSI.COLOR_RESET;
    }

  return visning;
}

const et = evaluereTegn;

export default lageSpillbrett