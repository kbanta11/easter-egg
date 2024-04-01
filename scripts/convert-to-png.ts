const webp = require('webp-converter');

const convertToPNG = async (filePath: string, outputPath: string) => {
    await webp.dwebp(filePath, outputPath, "-o").then((response: any) => console.log(`Result: ${response}`));
}

convertToPNG('public/base-egg.webp', 'public/base-egg.png')