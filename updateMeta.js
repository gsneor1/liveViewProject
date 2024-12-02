let currentVersion = null;

async function checkForUpdates() {
    try {
        // Fetch the updated meta.json file
        const response = await fetch('meta.json');
        const data = await response.json();

        // Initialize currentVersion or update if version number has changed
        if (currentVersion === null) {
            currentVersion = data.versionNumber;
        }

        // If version number has changed, update the stock values
        if (data.versionNumber !== currentVersion) {
            currentVersion = data.versionNumber; // Update the version number
            refreshPageWithUpdatedData(data); // Refresh the content
        }
    } catch (error) {
        console.error("Could not get meta.json:", error);
    }
}

function refreshPageWithUpdatedData(data) {
    // Update the stock for each baked good item
    data.menu.bakedGoods.forEach(item => {
        const stockElement = document.querySelector(`#${item.name.toLowerCase()} .stock-value`);
        
        if (stockElement) {
            // Change the displayed text inside the span to the new stock value
            stockElement.textContent = item.stock;
        }
    });
}

// Check for updates every 5 seconds
setInterval(checkForUpdates, 5000);