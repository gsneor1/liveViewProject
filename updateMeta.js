//access meta.json
const metaUrl = './meta.json';

//initialize lastVersion to null
let lastVersion = null;

//get and update page
async function checkForUpdates() {
    try {
        const response = await fetch(`${metaUrl}?t=${Date.now()}`, { cache: 'no-cache' });
        const metaData = await response.json();

        //check if the version number changed
        if (lastVersion === null) {
            lastVersion = metaData.versionNumber; //set initial version number
            updateBakedGoods(metaData.bakedGoods); //set initial stock
        } else if (metaData.versionNumber !== lastVersion) {
            lastVersion = metaData.versionNumber; //update version number
            updateBakedGoods(metaData.bakedGoods); //update stock
        }
    } catch (error) {
        console.error('Error fetching meta.json:', error);
    }
}

//update the baked goods in stock
function updateBakedGoods(bakedGoods) {
    Object.keys(bakedGoods).forEach(item => {
        const stockElement = document.querySelector(`#${item} .stock-value`);
        if (stockElement) {
            stockElement.textContent = bakedGoods[item]; // Update the stock count
        }
    });
}

//check for updates every 5 seconds
setInterval(checkForUpdates, 5000);

//initial check for updates
checkForUpdates();