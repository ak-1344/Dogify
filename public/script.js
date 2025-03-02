document.addEventListener("DOMContentLoaded", () => {
    fetchDogs();
});

// 📌 Fetch and Display Dog Data from MongoDB
async function fetchDogs() {
    const response = await fetch("/api/dogs");
    const dogs = await response.json();

    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = "";

    dogs.forEach(dog => {
        tableBody.innerHTML += `
            <tr>
                <td><img src="${dog.imageUrl}" width="50"></td>
                <td>${dog.breed}</td>
                <td>${dog.confidence}</td>
                <td>${new Date(dog.timestamp).toLocaleString()}</td>
                <td>
                    <button class="delete-btn" onclick="deleteDog('${dog._id}')">Delete</button>
                </td>
            </tr>
        `;
    });
}

// 📌 Upload New Image
document.querySelector(".classify-btn").addEventListener("click", async () => {
    const fileInput = document.getElementById("file-upload");
    const file = fileInput.files[0];

    if (!file) {
        alert("Please select a file!");
        return;
    }

    const formData = new FormData();
    formData.append("image", file);
    formData.append("breed", "Unknown");  // Later, you can classify breed
    formData.append("confidence", "0%");

    const response = await fetch("/api/dogs/upload", {
        method: "POST",
        body: formData
    });

    const result = await response.json();
    alert(result.message);
    fetchDogs();
});

// 📌 Delete Dog Data
async function deleteDog(id) {
    await fetch(`/api/dogs/${id}`, { method: "DELETE" });
    fetchDogs();
}
