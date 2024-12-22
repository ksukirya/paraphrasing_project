document.getElementById("paraphraseButton").addEventListener("click", function() {
    const inputText = document.getElementById("inputText").value;

    if (!inputText.trim()) {
        alert("Please enter text to paraphrase.");
        return;
    }

    fetch("http://localhost:3000/paraphrase", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: inputText }),
    })
        .then((response) => response.json())
        .then((data) => {
            document.getElementById("outputText").value = data.paraphrasedText;
        })
        .catch((error) => {
            alert("An error occurred while paraphrasing. Please try again.");
            console.error(error);
        });
});
