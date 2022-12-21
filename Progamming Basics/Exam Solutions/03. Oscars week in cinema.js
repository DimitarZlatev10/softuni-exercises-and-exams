function solve(input) {
  let filmName = input[0];
  let typeOfRoom = input[1];
  let numberOfTickets = Number(input[2]);
  let ticketPrice = 0;
  if (filmName == "A Star Is Born") {
    if (typeOfRoom == "normal") ticketPrice = numberOfTickets * 7.5;
    else if (typeOfRoom == "luxury") ticketPrice = numberOfTickets * 10.5;
    else if (typeOfRoom == "ultra luxury") ticketPrice = numberOfTickets * 13.5;
  }
  if ( filmName == 'Bohemian Rhapsody'){
      if(typeOfRoom=='normal') ticketPrice = numberOfTickets * 7.35
      if(typeOfRoom == 'luxury') ticketPrice = numberOfTickets * 9.45
      if(typeOfRoom == 'ultra luxury') ticketPrice = numberOfTickets * 12.75
  }
  if (filmName =='Green Book') {
      if(typeOfRoom == 'normal') ticketPrice = numberOfTickets * 8.15
      if(typeOfRoom == 'luxury') ticketPrice = numberOfTickets *10.25
      if(typeOfRoom == 'ultra luxury') ticketPrice = numberOfTickets *13.25
  }
  if(filmName=='The Favourite') {
      if(typeOfRoom == 'normal') ticketPrice = numberOfTickets *8.75
      if(typeOfRoom == 'luxury') ticketPrice = numberOfTickets *11.55
      if(typeOfRoom == 'ultra luxury') ticketPrice = numberOfTickets *13.95
   }
   console.log(`${filmName} -> ${ticketPrice.toFixed(2)} lv.`);

}
solve(["A Star Is Born", "luxury", "42"]);
solve (["Green Book",
"normal",
"63"])
solve(["The Favourite",
"ultra luxury",
"34"])

