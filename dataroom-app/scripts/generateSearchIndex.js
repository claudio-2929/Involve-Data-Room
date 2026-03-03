import fs from 'fs';
import path from 'path';

const APP_TSX_PATH = path.join(process.cwd(), 'src', 'App.tsx');
const PAGES_DIR = path.join(process.cwd(), 'src', 'pages');
const OUTPUT_PATH = path.join(process.cwd(), 'src', 'data', 'searchIndex.json');

function generateIndex() {
    console.log('Generating search index...');

    // Read App.tsx
    const appTsx = fs.readFileSync(APP_TSX_PATH, 'utf-8');

    // Regex to find route paths and component names
    const routeRegex = /<Route\s+path="([^"]+)"(?:(?!<Route)[\s\S])*?<([A-Z][A-Za-z0-9]+Page)\s*\/>/g;

    const indexData = {};
    let match;

    while ((match = routeRegex.exec(appTsx)) !== null) {
        const routePath = match[1];
        const componentName = match[2];

        // Skip catch-all routes or admin routes
        if (routePath.includes('*') || routePath === '/login' || routePath === '/admin' || routePath === '/') {
            continue;
        }

        // Read the component file
        const componentPath = path.join(PAGES_DIR, `${componentName}.tsx`);
        if (fs.existsSync(componentPath)) {
            let content = fs.readFileSync(componentPath, 'utf-8');

            let text = content.replace(/^import.*$/gm, '');
            text = text.replace(/export default function.*$/gm, '');

            let extractedWords = [];

            // Match text between > and <
            const textNodes = text.matchAll(/>([^<{}]+)</g);
            for (const tn of textNodes) {
                if (tn[1].trim().length > 3) extractedWords.push(tn[1].trim());
            }

            // Match text inside double quotes, single quotes, or backticks
            // Using a simple regex to find string literals
            const stringLits = text.matchAll(/(["'`])(.*?)\1/g);
            for (const sl of stringLits) {
                const str = sl[2].trim();
                // Filter out obvious code/CSS strings by checking for spaces and min length
                // Or if it's a known short text
                if (str.length > 3 && str.includes(' ') && !str.includes('flex ') && !str.includes('bg-') && !str.includes('text-[#') && !str.includes('rgba(')) {
                    extractedWords.push(str);
                }
            }

            // Remove duplicates and join
            const finalText = [...new Set(extractedWords)].join(' ').replace(/\s+/g, ' ');
            indexData[routePath] = finalText;
        }
    }

    fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(indexData, null, 2));

    console.log(`Generated search index for ${Object.keys(indexData).length} pages.`);
}

generateIndex();
