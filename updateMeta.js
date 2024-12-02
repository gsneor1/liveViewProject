// tracks current version number of meta.json
let currentVersion = null;

async function checkForUpdates() {
    try {
        //gets meta.json file
        const response = await fetch('meta.json');
        const data = await response.json();

        if (currentVersion === null) {
            currentVersion = data.versionNumber;
        }

        //if the version number has changed
        if (data.versionNumber !== currentVersion) {
            //changes version number
            currentVersion = data.versionNumber;
            //updates page content
            refreshPageWithUpdatedData(data);
        }
    } catch (error) {
        console.error("Could not get meta.json:", error);
    }
}

//refreshes the page content with new data - updates stock based on the number found in meta.json
function refreshPageWithUpdatedData(data) {

    //croissant
    const croissantStock = document.getElementById("croissant").querySelector(".item-stock");
    if (croissantStock) {
        croissantStock.textContent = `Stock: ${data.menu.bakedGoods[0].stock}`;
    }

    //muffin
    const muffinStock = document.getElementById("muffin").querySelector(".item-stock");
    if (muffinStock) {
        muffinStock.textContent = `Stock: ${data.menu.bakedGoods[1].stock}`;
    }

    //scone
    const sconeStock = document.getElementById("scone").querySelector(".item-stock");
    if (sconeStock) {
        sconeStock.textContent = `Stock: ${data.menu.bakedGoods[2].stock}`;
    }
}

//checks for updates every 5 seconds
setInterval(checkForUpdates, 5000);