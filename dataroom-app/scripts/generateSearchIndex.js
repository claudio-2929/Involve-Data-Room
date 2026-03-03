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
    // <Route path="/dataroom/..." element={ ... <MarketOverviewPage /> ... } />
    const routeRegex = /<Route\s+path="([^"]+)"[\s\S]*?<([A-Z][A-Za-z0-9]+Page)\s*\/>/g;

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

            // Very basic extraction of text content from TSX elements
            // Remove import statements
            content = content.replace(/^import\s+.*?(?:;|(?=\n\s*(?:export|function|const|let|var)))/gms, '');

            // Remove function / export keywords
            content = content.replace(/export\s+default\s+function\s+[a-zA-Z0-9_]+\s*\([^)]*\)\s*{/g, '');

            // Strip out JSX tags
            let text = content.replace(/<[^>]+>/g, ' ');

            // Clean up curly braces of code blocks / comments inside TSX like { /* ... */ }
            text = text.replace(/\{\s*\/\*.*?\*\/\s*\}/g, ' ');
            text = text.replace(/[{}]/g, ' ');

            // Remove code syntax keywords like return, className, const, let
            text = text.replace(/\b(return|className|const|let|var|function|interface|export)\b/g, ' ');

            // Normalize whitespace
            text = text.replace(/\s+/g, ' ').trim();

            indexData[routePath] = text;
        }
    }

    fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(indexData, null, 2));

    console.log(`Generated search index for ${Object.keys(indexData).length} pages.`);
}

generateIndex();
