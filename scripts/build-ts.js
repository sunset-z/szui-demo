const { execSync } = require('child_process');

// Build the JavaScript files using CRA's build script
execSync('npm run build', { stdio: 'inherit' });

// Build the TypeScript declaration files
execSync('tsc --emitDeclarationOnly --declaration --outDir dist/typings', { stdio: 'inherit', });

// Optionally, adjust import paths in declaration files if necessary (using tscpaths)
execSync('tscpaths -p tsconfig.json -s ./src -o ./dist/typings', { stdio: 'inherit', });
