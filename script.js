document.addEventListener("DOMContentLoaded", () => {
  const animalContainer = document.getElementById("animal-container");
  const nextButton = document.getElementById("next-button");

  /**
   * Fetches data from the Dog CEO's Dog API.
   * @returns {Promise<Object>} A promise that resolves to a dog image object.
   */
  async function fetchAnimalData() {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      return await response.json();
    } catch (error) {
      console.error("Error fetching animal data:", error);
      return {};
    }
  }

  /**
   * Creates a Bootstrap card element for an animal.
   * @param {Object} animal The animal data object.
   */
  function createAnimalCard(animal) {
    const card = document.createElement("div");
    card.className = "col-lg-10 col-md-6 col-sm-12 mb-4 m-auto";

    const cardContent = `
      <div class="card ">
        <div class="card-header text-center">
          Random Dog
        </div>
        <div class="card-body">
          <img src="${animal.message}" class="card-img-top" alt="Dog Image">
        </div>
      </div>
    `;

    card.innerHTML = cardContent;
    animalContainer.appendChild(card);
  }

  /**
   * Clears the animal container.
   */
  function clearAnimalContainer() {
    animalContainer.innerHTML = "";
  }

  /**
   * Initializes the app by fetching animal data and displaying it.
   */
  async function init() {
    try {
      clearAnimalContainer();
      const animalData = await fetchAnimalData();
      createAnimalCard(animalData);
    } catch (error) {
      console.error("Error initializing app:", error);
    }
  }

  // Initialize the app on page load
  init();

  // Add event listener to the next button
  nextButton.addEventListener("click", init);
});
