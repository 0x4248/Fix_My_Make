/* Fix My Make
 * Fixes common formatting issues in Makefiles
 * Github: https://www.github.com/lewisevans2007/fix_my_make
 * Licence: GNU General Public License v3.0
 * By: Lewis Evans
*/

const fs = require('fs');

function fixMakeFile(filename) {
  try {
    let content = fs.readFileSync(filename, 'utf8');
    console.log(`Replacing spaces with tabs in "${filename}"...`)
    content = content.replace(/^( +)/gm, (match, spaces) => '\t'.repeat(Math.floor(spaces.length / 2)));
    console.log(`Replacing CR with CRLF in "${filename}"...`)
    content = content.replace(/\r\n/g, '\n');
    console.log(`Writing fixed Makefile "${filename}"...`)
    fs.writeFileSync(filename, content, 'utf8');

    console.log(`Makefile "${filename}" has been fixed.`);
  } catch (err) {
    console.error(`Error while fixing Makefile "${filename}": ${err.message}`);
  }
}

// Command line arguments
const args = process.argv.slice(2);


const makefile = args[0] || 'Makefile';
fixMakeFile(makefile);
