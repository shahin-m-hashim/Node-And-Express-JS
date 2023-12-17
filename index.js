import fs from 'fs';

// streams - a sequence of data moved from one place to another over time
// streams are used to read or write input or output sequences of data
// a stream of data being transferred from server to client device

// 4 types of streams: readable, writable, duplex, transform
// readable - can read data from a stream (fs.createReadStream())
// writable - can write data to a stream (fs.createWriteStream())
// duplex - can read and write to a stream. Eg: sockets 
// transform - can modify the data as its being read and written. 
// Eg: compression , write compressed data and read from decompressed data

const readableStream = fs.createReadStream('./file1.txt', { encoding: 'utf-8', highWaterMark: 5 });

// streams extend from the event emitter class
// readableStream emit an event we can can listen to

readableStream.on('data', chunk => console.log("Stream of data read from file1.txt: ", chunk));

const writableStream = fs.createWriteStream('./file2.txt');
readableStream.on('data', chunk => console.log("Data wrote to file2.txt", writableStream.write(chunk)));

// the reason the entire file content of file1.txt is written to file2.txt is because
// the buffers used by streams have a default size of 64kb and the file1.txt is less than 64kb
// the file1.txt has 14 characters so the size is 14 bytes which is way less than 64kb
// so to set a limit to the size of the buffer we can use the highWaterMark option

// in real life we read mostly large data's more than 64kb (mb and gb)
// so its really important to set the highWaterMark option to a reasonable size
// so that we don't run out of memory when reading large files and also to improve performance