import generateEasterEggImage from '../app/helpers/generate-easter-eg';
import uploadToPinata from '../app/helpers/pinata-pin';

generateEasterEggImage(5).then(async ({ img, name, attributes }) => {
    if (img && name && attributes) {
        await uploadToPinata(img, name, attributes);
    }
}).catch((e) => {
    console.error(`Error Generating and Uploading: ${e}`)
});


