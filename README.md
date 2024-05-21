# My Nest App

## How to run the Project

### Prerequisites

- Node.js (>= 14.x)
-npm (>= 6.x) or yarn (=> 1.x)

### Installation

1. Clone the repository:
  ```bash
  git clone https://github.com/johnpopoolaa/my-nest-app.git
  cd my-nest-app

2. Install dependencies:
  npm install

## Project Setup and Configuration

1. Start the development server:
  npm run start:dev

2. The server will start on `http://localhost:3000`.

3. Use `npx @nestjs/cli new my-nest-app` to setup a new Nest.js project.

4. Check if the project runs successfully by accessing the default endpoint at http://localhost:3000.

## Create a Simple CRUD API

1. Define the Book Interface in `src/books/book.interface.ts`.

2. Generate a new module using `npx nest generate module books`.

3. Create the books Service:
  - Generate a new service.
  - Implement the service with methods to handle operations using in-memory array.

4. Create the Books Controller:
  - Generate a new controller using NEST CLI command.
  - Implement the controller with routes that map to the service methods.

5. Validation and DTOs:
 - Create DTOs for creating and updating books.
 - Use Nest.js validation pipe to ensure data integrity.

## Testing the API Endpoints

### Overview

This API allows you to manage a list of books. Each book has an ID, title, author, and publication year.

1. Test the CRUD Operations:
  - Use Postman to test all the endpoints.
  - Ensure that you create, read, update, and delete books.

### Conclusion

This README section provides a comprehensive guide on how to run the project and includes an overview of the API endpoints with exaple payloads for the POST and PUT requests.