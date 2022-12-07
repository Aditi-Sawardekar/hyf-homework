console.log("Hello World!");

// Series duration of my life

const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
  {
    title: "Taarak Mehta ka ooltah chashmah",
    days: 86,
    hours: 6,
    minutes: 23,
  },
  {
    title: "The Kapil Sharma Show",
    days: 21,
    hours: 4,
    minutes: 45,
  }
  
];

// Convert averageLifeSpan from years to minutes. 
// The first step is to convert from years to days by multiplying years by 365.24.
//Then Multiply by 24, because there are 24 hrs in a day
// Then Multiply by 60, because there are 60 minutes in an hour.

const averageLifeSpan = 80;
const averageLifeSpanInMinutes = (averageLifeSpan * 365.24 * 24 * 60)

function logOutSeriesText() {
  // map method
  const series = seriesDurations.map((element) => {
    
    //Calculate duration of series in minutes
    const days = (element.days) * 24 * 60;
    const hours = (element.hours) * 60;
    const minutes = (element.minutes);
    const totalTimeASeries = days + hours + minutes;
    
    // Calculate percentage time spent watching a series
    const percentage = ((100 / averageLifeSpanInMinutes) * totalTimeASeries).toFixed(2)
    console.log(`${element.title} took ${percentage}% of my life`);
        
    //Returned time to the array -> series
    return totalTimeASeries 
  })

  // Reduce method on series array to get totalTime
  const totalTime = series.reduce((currentTotal, element) => {
    return (element + currentTotal)
  }, 0)
  
  const percentage = ((100/averageLifeSpanInMinutes)*totalTime).toFixed(2)
  
  return (`In total that is ${percentage}% of my life`);
}

const getSeriesTime = logOutSeriesText();
console.log(getSeriesTime)