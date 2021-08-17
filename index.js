var fs = require('fs');

module.exports = function(n) {
    var fd = fs.openSync("lookup.bin", "r")
    
    // Allocate buffer (1 byte)
    var buffer = Buffer.alloc(1);

    // The number of newlines that were added for better git support
    var added_newlines = Math.floor(n / 100000) + 1;
    
    // Read the lookup table
    fs.readSync(fd, buffer, 0, 1, n + added_newlines);

    // Close the file
    fs.closeSync(fd);

    // Check if the entry is even or not
    return buffer.readUInt8(0) === 1;
}