import fs, { WriteStream } from 'fs';

// streams - a sequence of data moved from one place to another over time
// streams are used to read or write input or output sequences of data
// a stream of data being transferred from server to client device

// 4 types of streams: readable, writable, duplex, transform
// readable - can read data from a stream (fs.createReadStream())
// writable - can write data to a stream (fs.createWriteStream())
// duplex - can read and write to a stream. Eg: sockets 
// transform - can modify the data as its being read and written. 
// Eg: compression , write compressed data and read from decompressed data

const readableStream = fs.createReadStream('./file1.txt', 'utf-8');

const writableStream = fs.createWriteStream('./file2.txt');

// Pipes - used to read data from a readable stream and write it to a writable stream
// in a much more easier and readable way rather than manually listening to data events 
// and writing to a writable stream

readableStream.pipe(writableStream);

// transform streams
import zlib from 'zlib';
const gzip = zlib.createGzip();

readableStream.pipe(gzip).pipe(fs.WriteStream('./file3.txt.gz'));
