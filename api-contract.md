# API Contract - Node Auth & User management app

## Base URL

http://<ip>:3000/api/users

## Authentication

All protected endpoints require JWT in the header:
Authorization: Bearer <access_token>

## Endpoints

### POST /register

Create a new user account.

Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

Response 201 Created

```json
{
  "_id": "64f1f0d8a126c93d1d404b2e",
  "name": "John Doe",
  "email": "john@example.com"
}
```

### POST /login

Login with existing user credentials.
Request Body

```
{
  "email": "john@example.com",
  "password": "password123"
}
```

Response 200 OK

```
{
  "access_token": "<JWT_TOKEN>",
  "id": "64f1f0d8a126c93d1d404b2e",
  "name": "John Doe",
  "email": "john@example.com"
}
```

### GET /api/users (Protected)

Get all registered users.

#### Header

Authorization: Bearer <access_token>
Response

```
[
  {
    "_id": "64f1f0d8a126c93d1d404b2e",
    "name": "John Doe",
    "email": "john@example.com"
  },
  {
    "_id": "64f1f0d8a126c93d1d404b2f",
    "name": "Jane Smith",
    "email": "jane@example.com"
  }
]
```

### GET /api/users/:id (Protected)

Get single user by ID.

#### Header

Authorization: Bearer <access_token>

Response

```
{
  "_id": "64f1f0d8a126c93d1d404b2e",
  "name": "John Doe",
  "email": "john@example.com"
}
```

### PUT /api/users/:id (Protected)

Update user data.

#### Header

Authorization: Bearer <access_token>

Request Body (partial update allowed)

```
{
  "name": "Johnny Doe",
  "email": "johnny@example.com",
  "password": "newpassword"
}
```

Response

```
{
  "_id": "64f1f0d8a126c93d1d404b2e",
  "name": "Johnny Doe",
  "email": "johnny@example.com"
}
```

### DELETE /api/users/:id (Protected)

Delete user by ID.

#### Header

Authorization: Bearer <access_token>

Response

```
{
  "message": "User deleted successfully"
}
```

### Error Response

| HTTP Status | Error Type              | Description                                   |
| ----------- | ----------------------- | --------------------------------------------- |
| 400         | `Bad Request`           | Missing or invalid input in the request body  |
| 401         | `Unauthorized`          | Missing or invalid access token               |
| 403         | `Forbidden`             | Access denied due to insufficient permissions |
| 404         | `Not Found`             | Resource (e.g., user) not found               |
| 500         | `Internal Server Error` | Unexpected error on the server                |

### Examples

#### 400 - Missing Field

```json
{
  "message": "Email and password are required"
}
```

#### 401 - Invalid Token

```json
{
  "message": "Invalid email or password"
}
```

#### 404 - User Not Found

```json
{
  "message": "User not found"
}
```

#### 500 - Internal Server Error

```json
{
  "message": "Failed to retrieve users"
}
```
