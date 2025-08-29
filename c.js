function checkWeather() {
  const city = document.getElementById("city").value;
  if (!city) {
    document.getElementById("result").innerText = "⚠️ Please enter a city!";
    return;
  }

  // Fake weather for demo
  const weather = ["☀️ Sunny", "🌧 Rainy", "⛅ Cloudy", "❄️ Snowy"];
  const temp = Math.floor(Math.random() * 15) + 15; // random 15–30 °C
  const randomWeather = weather[Math.floor(Math.random() * weather.length)];

  document.getElementById("result").innerText =
    `${city}: ${randomWeather}, ${temp}°C`;
}
