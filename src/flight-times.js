export class FlightTimes {
    
    async getFlight() {
        let flightArray = ["AC8120", "AC8316", "AC8124", "AC8126", "AS2150", "AS686", "AS1638", "AS3338", "AS3434", "AS430", "AS498", "AS2032", "AA1316", "AA6088", "AA1442", "AA1083", "AA1929", "DAL3101", "DAL5752", "DAL1761", "DAL2832", "DAL415", "DAL1140", "FFT790", "HAL39", "HAL25", "JBU1206", "WN3814", "WN872", "WN1517", "WN904", "WN877", "UA2348", "UA679", "UA830", "UA1888", "UA2369", "UA569", "UA2054", "UA2233"];
        let newArray = [];
        for(let i=0; i < flightArray.length; i++) {
            let flight = flightArray[i];
            
            try {
              let response = await fetch(`https://aerodatabox.p.rapidapi.com/flights/${flight}/2019-08-29?withLocation=false&withAircraftImage=false`, {
                "method": "GET",
                "headers": {
                  "x-rapidapi-host": "aerodatabox.p.rapidapi.com",
                  "x-rapidapi-key": `${process.env.API_KEY}`,
                  "mode": "no-cors"
                }
              });
              let jsonifiedResponse;
              if(response.ok && response.status == 200) {
                jsonifiedResponse = await response.json();
              } else {
                jsonifiedResponse = false;
              }
              newArray.push(jsonifiedResponse)
            } catch (error) {
              return false;
            }
        }
        return newArray;
    }
}