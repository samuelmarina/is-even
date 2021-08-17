#include <stdio.h>
#include <stdbool.h>
#include <stdint.h>
#include <string.h>
#include <stdlib.h>

int main(void) {

    

    // File name
    char filename[23];

    // Loop through bitmap files
    for (uint16_t i = 0; i < 9; i++) {
        // Generate file name
        sprintf(filename, "lookups/lookup%04x.bin", i);

        // File handler
        FILE *fout;

        // Open the file
        fout = fopen(filename, "wb+");

        // Populate with 100000000 Entries in a bitmap
        uint8_t bitmap_entry = 0U;
        
        // fill file with 100 MB of data
        for (uint32_t j = 0; j < 100000000 * 8; j++) {
            // Get bitmap entry offset
            uint32_t offset = (i * 100000000 + j) % 8;

            // If even, set bit
            if ((i * 100000000 + j) % 2 == 0) {
                // Set bitmap entry
                bitmap_entry |= (1U << offset);
            }
            

            // If bitmap offset is 7, write to file
            if (offset == 7) {
                fwrite(&bitmap_entry, 1, 1, fout);
                bitmap_entry = 0U;
            }
        }

        // Close the file
        fclose(fout);
        
    }

    

    return 0;
}