const number = document.getElementById("number");
const text = document.getElementById("text");
const button = document.getElementById("random");

button.addEventListener("click", async () => {
  try {
    let { slip } = await getData();
    number.innerText = `#${slip.id}`;
    text.innerText = `“${slip.advice}”`;
  } catch (error) {
    console.log(error.message);
  }
});
async function getData() {
  try {
    let response = await fetch("https://api.adviceslip.com/advice");
    let data = await response.json();
    return data;
  } catch (error) {
    console.log("cant fetch data", error);
    throw error;
  }
}
