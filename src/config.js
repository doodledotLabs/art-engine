const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Collection Name";
const description = "Remember to replace this description";
const baseUri = "ipfs://NewUriToReplace";
``

const solanaMetadata = {
    symbol: "YC",
    seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
    external_url: "https://bit.ly/3v9oeNY",
    creators: [{
        address: "2MgBDpSW7EiY4n9iyzz8A3oVfeukAz8ZyvZ2CoJ2Jdra",
        share: 100,
    }, ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [{
    growEditionSizeTo: 100,
    layersOrder: [
        { name: "Background" },
        { name: "Egg Color" },
        { name: "Cracks" },
    ],
}, ];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
    width: 512,
    height: 512,
    smoothing: true,
};

const gif = {
    export: false,
    repeat: 0,
    quality: 100,
    delay: 500,
};

const text = {
    only: false,
    color: "#ffffff",
    size: 20,
    xGap: 40,
    yGap: 40,
    align: "left",
    baseline: "top",
    weight: "regular",
    family: "Courier",
    spacer: " => ",
};

const pixelFormat = {
    ratio: 2 / 16,
};

const background = {
    generate: true,
    brightness: "80%",
    static: false,
    default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
    thumbPerRow: 5,
    thumbWidth: 50,
    imageRatio: format.height / format.width,
    imageName: "preview.png",
};

const preview_gif = {
    numberOfImages: 5,
    order: "ASC", // ASC, DESC, MIXED
    repeat: 0,
    quality: 100,
    delay: 500,
    imageName: "preview.gif",
};

module.exports = {
    format,
    baseUri,
    description,
    background,
    uniqueDnaTorrance,
    layerConfigurations,
    rarityDelimiter,
    preview,
    shuffleLayerConfigurations,
    debugLogs,
    extraMetadata,
    pixelFormat,
    text,
    namePrefix,
    network,
    solanaMetadata,
    gif,
    preview_gif,
};