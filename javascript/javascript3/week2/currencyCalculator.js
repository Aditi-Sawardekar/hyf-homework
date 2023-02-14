const BASE_URL = "https://v6.exchangerate-api.com"

// Variables of Input Elements
// select#currency-from.drop-list and select#currency-to.drop-list
const currencyFromInput = document.querySelector("#currency-from");
const currencyToInput = document.querySelector("#currency-to");

// When Convert button is clicked, calculate exchange rate.
const convertBtn = document.querySelector("#convert")

// Display Variables
const selectCountryFrom = document.querySelector("#currency-from")
const selectCountryTo = document.querySelector("#currency-to")
const displayCurrencyFrom = document.querySelector(".display-currency-from");
const displayCurrencyTo = document.querySelector(".display-currency-to");
const displayConversionRate = document.querySelector(".display-conversion-rate");
const displayConvertedAmount = document.querySelector("#amount-to");
const displayDateAndTime = document.querySelector(".display-date-time")

//------------------------------------------------//

// STEP 4: GET EXCHANGEINFO SAVED IN LOCAL STORAGE
// Get exchangeInfo saved in Local Storage
const exchangeInfoSaved = JSON.parse(localStorage.getItem("exchangeInfo"));

if (exchangeInfoSaved) {
    const countryCode = (exchangeInfoSaved["countryCode"])

    for (let i = 0; i < countryCode.length; i++) {
        // Create and append options for Country From
        selectCountryFrom.innerHTML += `<option value="${countryCode[i]}">${countryCode[i]}</option>`
        // Create and append options for Country To
        selectCountryTo.innerHTML += `<option value="${countryCode[i]}">${countryCode[i]}</option>`
    }
}

//-------------------------------------------------//

// STEP 3: GET INPUT DATA FROM LOCAL STORAGE
// Get Input Data saved in Local Storage
const inputSaved = JSON.parse(localStorage.getItem("input"));

// Check if input is saved in local storage.
// If yes - display it as default.
if (inputSaved) {
    currencyFromInput.value = inputSaved["country-from"];
    currencyToInput.value = inputSaved["country-to"];
    displayCurrencyFrom.innerHTML = `1 ${currencyFromInput.value} equals`;
}
//-------------------------------------------------//
// STEP 1: FETCH DATA FROM API
//Fetch Data from API
const exchangeRatesData = async () => {

    // When the convert button is clicked, calculate currency exchange.
    let baseCurrency = currencyFromInput.value;

    // If location is blank, then default currency = "EUR"
    if (baseCurrency === "") {
        console.log("True");
        baseCurrency = "EUR"
    } else {
        baseCurrency = currencyFromInput.value;
    }

    try {
        const response = await fetch(`${BASE_URL}/v6/${API_KEY}/latest/${baseCurrency}`)
        console.log(response.status);  //200 (Should be between 200 and 299)

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }

};

// STEP 2: SAVE DATA TO LOCAL STORAGE
const saveToLocalStorage = async () => {
    const data = await exchangeRatesData();

    const exchangeData = (data["conversion_rates"])
    let countryCode = Object.keys(data["conversion_rates"])

    let rate = Object.values(data["conversion_rates"])

    const exchangeInfo = {
        "countryCode": countryCode,
        "rate": rate
    }

    const input = {
        "country-from": "EUR",
        "country-to": "DKK"
    }

    // Save to Local Storage
    localStorage.setItem("exchangeInfo", JSON.stringify(exchangeInfo))
    localStorage.setItem("input", JSON.stringify(input))

} // End of function saveToLocalStorage

saveToLocalStorage()

//------------------------------------------------//

// Extract Data - To get exchange rates
const display = async (event) => {
    const data = await exchangeRatesData()

    // To display currency data at top of page
    displayCurrencyFrom.innerHTML = `1 ${currencyFromInput.value} equals`;
    displayCurrencyTo.innerHTML = (selectCountryTo.value);

    // To get the country code of the country to
    const countryToCode = selectCountryTo.value

    // To get and display conversion rate
    const conversionRate = ((data["conversion_rates"][countryToCode]).toFixed(2))
    displayConversionRate.innerHTML = conversionRate;

    // To get the amount value entered in country from
    // To add amount to convert -> 1 or 10 etc
    const amountFrom = document.querySelector("#amount-from").value;
    console.log(amountFrom);

    // To display calculated amount when the number in base currency is changed
    displayConvertedAmount.value = amountFrom * conversionRate;

    // To display Date and Time:
    displayDateAndTime.innerHTML = new Date();
    console.log(data["time_last_update_utc"])


}


display()

// EVENTLISTENERS
// When convert button is clicked:
convertBtn.addEventListener("click", display)

/* Steps to follow
Fetch data from API
Save data to Local Storage
Get Data from Local Storage
Get exchangeInfo data and display it as country list 
If data in Local Storage - Set it as default
When baseCurrency is changed.
Amount Calculation on conversion 
*/