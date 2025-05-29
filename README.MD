# Daily Quote API

A simple RESTful API for managing daily items, built with javaScrip
 and native Node.js HTTP module (no external libraries), implementing a functional programming approach.

## Features

- Full CRUD operations (Create, Read, Update, Delete)
- Support for all HTTP verbs (GET, POST, PUT, DELETE)
- JSON file-based storage (no database required)
- No authentication/authorization required
- Heavily commented codebase for educational purposes
- Functional programming paradigm
- Pure functions with minimal side effects
- No classes or stateful objects

## API Endpoints

| Method | Endpoint       | Description              |
| ------ | -------------- | ------------------------ |
| GET    | /items        | Get all items           |  |
| GET    | /items/:id    | Get quote by ID          |
| POST   | /items        | Create a new quote       |
| PUT    | /items/:id    | Update an existing quote |
| DELETE | /items/:id    | Delete a quote           |

## Project Structure

```


## Functional Programming Principles Applied

- Pure functions with predictable outputs based on inputs
- Avoidance of shared mutable state
- Function composition for complex operations
- Separation of data and behavior
- Immutable data structures where possible
- First-class and higher-order functions

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```

### Running the API

1. Build the project:

   ```
   npm run build
   ```

2. Start the server:
   ```
   npm start
   ```

The API will be available at `http://localhost:3000`.

## Examples

### Get all items

```
GET /items
```

Response:

```json
{
  "statusCode": 200,
  "message": "Quotes retrieved successfully",
  "data": [
    {
      "id": "1",
      "name": "The best way to predict the future is to invent it.",
      "description": "Alan Kay",
     
    }
    // ...more items
  ]
}
```

### Create a new quote

```
POST /items
Content-Type: application/json

{
  "name": "Be the change you wish to see in the world.",
  "decription": "Mahatma Gandhi",
 
}
```

Response:

```json
{
  "statusCode": 201,
  "message": "Quote created successfully",
  "data": {
    "id": "6",
    "name": "Be the change you wish to see in the world.",
    "description": "Mahatma Gandhi",
  
  }
}
```

## License

This project is open-source and available for educational purposes.
