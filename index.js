const currencyfirstEl = document.getElementById("currency-first");
const worthfirstEl = document.getElementById("worth-first");
const currencysecondEl = document.getElementById("currency-second");
const worthsecondEl = document.getElementById("worth-second");
const exchangerate = document.getElementById("exchange-rate");
async function updateRate() {
    const firstCurrency = currencyfirstEl.value;
    const secondCurrency = currencysecondEl.value;
    try {
        const response = await fetch(
            `https://api.exchangerate-api.com/v4/latest/${firstCurrency}`
        );
        const data = await response.json();
        const rate = data.rates[secondCurrency];
        exchangerate.innerText =
            `1 ${firstCurrency} = ${rate} ${secondCurrency}`;
        worthsecondEl.value = (worthfirstEl.value * rate).toFixed(2);
    } catch (error) {
        exchangerate.innerText = "Unable to fetch exchange rates.";
        console.error(error);
    }
}
currencyfirstEl.addEventListener("change", updateRate);
currencysecondEl.addEventListener("change", updateRate);
worthfirstEl.addEventListener("input", updateRate);
updateRate();