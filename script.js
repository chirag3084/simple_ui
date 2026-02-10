async function analyzeText() {
  const text = document.getElementById("textInput").value;
  const resultEl = document.getElementById("result");

  resultEl.textContent = "Loading...";

  try {
    const response = await fetch(
      "https://chiragsurti10-simple.hf.space/analyze",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      }
    );

    const data = await response.json();
    resultEl.textContent = JSON.stringify(data, null, 2);

  } catch (error) {
    resultEl.textContent = "Error: " + error.message;
  }
}
