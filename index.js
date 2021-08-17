var fs = require('fs');

module.exports = function(n) {
    // Determine file number (Each file has 100000000 * 8 entries)
    var fileNum = Math.floor(n / (100000000 * 8));

    // Convert that number to hex
    var fileNumHex = Number(fileNum).toString(16).padStart(4,'0');
    
    // Get the bit offset in the current file
    var bitOffset = n % (100000000 * 8);
    
    // Get the byte offset in the current file
    var byteOffset = Math.floor(bitOffset / 8);

    // Get the bit offset in the byte
    var bitInByte = bitOffset % 8;

    // Open the file
    var fd = fs.openSync(`lookups/lookup${fileNumHex}.bin`, "r")
    
    

    // Allocate buffer (1 byte)
    var buffer = Buffer.alloc(1);

    
    // Read the lookup table
    fs.readSync(fd, buffer, 0, 1, byteOffset);

    // Close the file
    fs.closeSync(fd);

    // Get the byte
    var byte = buffer.readUInt8(0);

    // Get the bit
    var bit = (byte >> bitInByte) & 1;

    console.log((byte).toString(2).padStart(8,'0'));

    // Check if the entry is even or not
    return bit === 1;
}