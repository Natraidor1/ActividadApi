async function fetchCatFact() {
    try {
        
        const response = await fetch('https://catfact.ninja/facts');
        if (!response.ok) {
            throw new Error("no se pudo encontrar resultados");
        }
        const data = await response.json();
        const facts = data.data;
        
        const factContainer = document.getElementById("factorContainer");
        factContainer.innerHTML = '';
        
        facts.forEach(fact => {
            const factCard = document.createElement("div");
            factCard.classList.add("card");
            const factText = document.createElement("p");
            factText.textContent = fact.fact;
            factCard.appendChild(factText);
            factContainer.appendChild(factCard);
        });
    } catch (error) {
        console.error("Error buscando los datos:", error);
    }
 }
 function clearInput() {
    document.getElementById("catFactSearch").value = '';
 }