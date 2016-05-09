## Synopsis

This JavaScript file will *eventually* be a simple, clean and efficient way to access LocalStorage as a Loose Database -- LucyDB. 

## Code Example

This library allows code to treat LocalStorage as a suitable place to store JavaScript objects in a none-indexed databse type implementation: shown in API reference below.

## Installation

Include the file in your project to begin using. This implementation is written in vanilla JavaScript and should work on any browser supporting LocalStorage. The support of LocalStorage is not currently performed as part of this file.

## API Reference

This software currently has two main functions to use; 'add' and 'find'. 

'add' -- lucy.add(object)

This is used to simply add an item to the LocalStorage system under the 'lucy' item. Each added object requires a UID, this is not currently checked as unique but will be in future development, for reasons.

'find' -- lucy.find('Susan')

This function finds the object relating to the term you supply. To do this it iterates of the properties of the objects stored in the 'database'. Development will focus on this area as the function may be used more heavily in personal uses of this slice of code.

## Contributors

Tweet me @asmosel to tell me how bad this code is and how useless you find it, or if you like it, up to you.

## License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.