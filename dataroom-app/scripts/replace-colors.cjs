const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, '..', 'src', 'pages');

const replacements = [
    // Backgrounds
    { regex: /bg-\[#0f1218\]/g, replacement: 'bg-involve-panel' },
    { regex: /bg-\[#12151c\]/g, replacement: 'bg-involve-bg2' },
    { regex: /bg-\[#171b24\]/g, replacement: 'bg-involve-bg3' },
    { regex: /bg-\[#0d0f14\]/g, replacement: 'bg-involve-default' },
    { regex: /bg-\[#06080f\]/g, replacement: 'bg-involve-bg' },
    { regex: /bg-\[#101522\]/g, replacement: 'bg-involve-bg2' },

    // Hover Backgrounds
    { regex: /hover:bg-\[#12151c\]/g, replacement: 'hover:bg-involve-bg2' },
    { regex: /hover:bg-white\/\[0\.02\]/g, replacement: 'hover:bg-involve-bg2' },

    // Borders
    { regex: /border-white\/\[0\.07\]/g, replacement: 'border-involve-border' },
    { regex: /border-white\/\[0\.12\]/g, replacement: 'border-involve-border-med' },
    { regex: /border-white\/\[0\.20\]/g, replacement: 'border-involve-border-hi' },

    // Text colors
    { regex: /text-white\/30/g, replacement: 'text-involve-dim' },
    { regex: /text-white\/55/g, replacement: 'text-involve-muted' },
    { regex: /text-white\/60/g, replacement: 'text-involve-muted' },
    { regex: /text-white\/25/g, replacement: 'text-involve-dim' },
    { regex: /text-white/g, replacement: 'text-involve-text' },

    // Inline styles using rgba
    { regex: /rgba\(255,255,255,0\.07\)/g, replacement: 'var(--involve-border)' },
    { regex: /rgba\(255,255,255,0\.12\)/g, replacement: 'var(--involve-border-med)' },
    { regex: /rgba\(255,255,255,0\.20\)/g, replacement: 'var(--involve-border-hi)' },
];

function processFile(filePath) {
    if (path.extname(filePath) === '.tsx') {
        let content = fs.readFileSync(filePath, 'utf8');
        let original = content;

        replacements.forEach(({ regex, replacement }) => {
            content = content.replace(regex, replacement);
        });

        // Special fix for overlapping match issue where replacing text-white could break valid text-white/55 if ordering is wrong.
        // The previous regex array puts text-white last, which is correct. Let's do a double check.

        if (content !== original) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated: ${filePath}`);
        }
    }
}

function processDirectory(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            processDirectory(filePath);
        } else {
            processFile(filePath);
        }
    }
}

processDirectory(directoryPath);
console.log('Bulk color replacement finished.');
