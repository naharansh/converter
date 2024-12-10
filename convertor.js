const formconverted = document.querySelector("#amount")
const toconverted = document.querySelector("#convertedamount")
const precur = document.querySelector(".currencytype")
const tocur = document.querySelector(".changetype")
const result = document.querySelector(".result p")
const conuntries = [{ code: "USD", name: "UnitedStatesDollar" }, { code: "INR", name: "Indian Rupee" },]
conuntries.forEach(country => {
    const option1 = document.createElement("option")
    option1.value = country.code;
    option1.textContent = `${country.code} ${country.name}`;
    precur.appendChild(option1)
    const option2 = document.createElement("option")
    option2.value = country.code;
    option2.textContent = `${country.code} ${country.name}`;
    tocur.appendChild(option2)
    precur.value="USD"
    tocur.value="INR"


})
const exchange = async () => {
    const amount = parseFloat(formconverted.value)
    const fromcur = precur.value;
    const tocurd = tocur.value;
    const respose = await fetch(`https://v6.exchangerate-api.com/v6/ed5aa19999b26381037e606a/latest/${fromcur}`)
    const data = await respose.json()
    console.log(respose);
    console.log(data);
     const conversionrate=data.conversion_rates[tocurd]
    const finalrate=amount*conversionrate;
    toconverted.value=finalrate;
    result.innerHTML=`${amount} ${fromcur}=${tocurd}${finalrate.toFixed(2)}`
}
formconverted.addEventListener("input",exchange)