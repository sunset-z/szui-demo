const less = require('less');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

const compileLess = (srcPath, distPath) => {
  const lessContent = fs.readFileSync(srcPath, 'utf8');
  less.render(lessContent, (e, output) => {
    if (e) {
      console.error(e);
    } else {
      fs.writeFileSync(distPath, output.css, 'utf8');
      console.log(`Compiled ${srcPath} to ${distPath}`);
    }
  });
};

glob('src/components/**/*.less', (err, files) => {
  if (err) {
    console.error(err);
  } else {
    files.forEach(file => {
      const distPath = file.replace('src/components/', 'dist/es/').replace('.less', '.css');
      const distDir = path.dirname(distPath);
      if (!fs.existsSync(distDir)) {
        fs.mkdirSync(distDir, { recursive: true });
      }
      compileLess(file, distPath);
    });
  }
});
