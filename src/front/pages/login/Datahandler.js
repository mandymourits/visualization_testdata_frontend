const fs = require('browserify-fs');

/**
 * Manages and provides test data
 */

/**
 * Read the content from a test data file and return it in a string
 * @param subdir The sub directory in the 'data' folder which contains the file. Use linux '/' path separator.
 * @param file The name and extension of the file to read.
 * @returns the UTF8 content from the file
 */
function fromFile(subdir, file) {
    let path = './data/' + subdir + '/' + file;
    if (!fs.existsSync('./data/' + subdir + '/'+ file)) {
        fs.mkdirSync('./data/' + subdir + '/'+ file);
    }
    return fs.readFileSync(path, {encoding: 'utf8'});
}

function fromFileRoot(subdir, file) {
    let path = './' + subdir + '/' + file;
    if (!fs.existsSync('./' + subdir + '/')) {
        fs.mkdirSync('./' + subdir + '/');
    }
    return fs.readFileSync(path, {encoding: 'utf8'});
}

function writeJsonFile(subdir, file, content) {
    let path = './data/' + subdir + '/' + file;
    if (!fs.existsSync('./' + subdir + '/')) {
        fs.mkdirSync('./' + subdir + '/');
    }
    return fs.writeFileSync(path,JSON.stringify(content));
}

function writeJsonFileDir(dir, file, content) {
    let path = './' + dir + '/' + file;
    if (!fs.existsSync('./' + dir + '/')) {
        fs.mkdirSync('./' + dir + '/');
    }
    return fs.writeFileSync(path,JSON.stringify(content));
}

/**
 * Read the content from a test data file and return it in a string
 * Returns an JavaScript object
 * @param subdir The sub directory in the 'data' folder which contains the file. Use linux '/' path separator.
 * @param file The name and extension of the file to read.
 * @returns JavaScript object
 */

function fromJsonFile(subdir, file) {
    return JSON.parse(fromFile(subdir, file));
}

/**
 * Read the binary content from a test data file and return it in a string
 * @param subdir The sub directory in the 'data' folder which contains the file. Use linux '/' path separator.
 * @param file The name and extension of the file to read.
 * @returns the binary content from the file
 */
function fromBinaryFile(subdir, file) {
    let path = './data/' + subdir + '/' + file;
    if (!fs.existsSync('./' + subdir + '/')) {
        fs.mkdirSync('./' + subdir + '/');
    }
    return fs.readFileSync(path);
}

module.exports = {
    writeJsonFileDir: writeJsonFileDir,
    writeJsonFile: writeJsonFile,
    fromFile: fromFile,
    fromFileRoot:fromFileRoot,
    fromJsonFile: fromJsonFile,
    fromBinaryFile: fromBinaryFile
};
