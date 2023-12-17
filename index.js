// streams - a sequence of data moved from one place to another over time
// a stream of data being transferred from server to client device

// buffers - a temporary holding spot for data being moved from one place to another
// they are used along with streams to process data in smaller chunks as they arrive instead of
// waiting for the entire data. Eg: video streaming on you tube

// if the network has the speed to transmit 10mb/s then in 1s you can easily download 10mb data
// but what if the data is 100mb/s, then it will take 10s to download the entire data
// so each second 10mb data is downloaded and stored in a buffer and then the buffer is emptied
// and the next 10mb data is downloaded and stored in the buffer and so on till the whole 100mb
// is transferred

// this is essential because if the data is not stored in a buffer then the entire data will have to be
// downloaded and then stored in the memory which will take a lot of time and performance

// streams and buffers are used to process data in chunks instead of the entire data at once

import { Buffer } from 'buffer';

// buffer is a global object in nodejs
// buffer is a temporary storage spot for a chunk of data that is being transferred from one place to another
// the buffer is filled with data, then passed along and then the buffer is emptied

const buffer = Buffer.from('Hello World');
console.log("Raw Buffer Data: ", buffer);
// even though raw is binaries, it is converted to hexadecimals to prevent overflowing 
// of 0's and 1's when displayed in the terminal
console.log("JSON Buffer Data: ", buffer.toJSON());
console.log("String Buffer Data: ", buffer.toString());

buffer.write('Replaced');
// replaces the buffer data with the new data but the size of the buffer remains the same,
// so if the new data is larger than the buffer size of 8 bytes then the data will be truncated
console.log("String Buffer After Replacing: ", buffer.toString());

console.log("Default Buffer Length:", buffer.length); // Outputs the length of the buffer in bytes

// Create a buffer with a specific size (e.g., 10 bytes)
const newBuffer = Buffer.alloc(15).fill('New Buffer Data');
console.log("New Buffer Data: ", newBuffer);
console.log("New Buffer Length:", newBuffer.length);