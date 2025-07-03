# SDE-Assignment---Sanya-Singh
Clean the Product Codes – Node.js Module This project is a Node.js module developed as part of the SDE Assignment - July 2025 for SaralWeb. 
Problem Statement
Given a list of product codes, the task is to:

Identify valid and invalid product codes.

Normalize valid codes (uppercase letters).

Return a summary with counts and a sorted list of valid codes.

A valid product code is exactly 7 characters long, starting with 3 letters (case-insensitive) followed by 4 digits.
No regular expressions or external libraries used.

#Features
String parsing and validation without regex

Uppercase normalization

Summary report generation

Clean, modular code structure

#Tech Stack
Node.js (JavaScript)

#Project Structure
├── index.js       # Main module containing the processData function
├── test.js        # Sample test file (optional)
#Sample Input
js
Copy
Edit
["abc1234", "XYZ0001", "123ABCD", "A1B2C3D", "lmn9876", "DEF5678"]

#Sample Output

{
  "totalCodes": 6,
  "validCodes": 3,
  "invalidCodes": 3,
  "normalizedValidCodes": ["ABC1234", "DEF5678", "XYZ0001"]
}
