### README.md

# `/users/register` Endpoint Documentation

This endpoint is used to register a new user into the system by providing the required details. The API validates the user input, checks if the email already exists in the database, and creates a new user if the input is valid.

---

## **Endpoint**

`POST /users/register`

---

## **Description**

This endpoint allows new users to register by providing their full name, email, and password.  
It performs the following operations:
1. Validates the input fields.
2. Checks if the email already exists in the database.
3. Hashes the user's password for security.
4. Creates a new user in the database.
5. Generates an authentication token for the user.

---

## **Request Body**

The request body should be in JSON format with the following structure:

### **Required Fields**

| Field Name             | Type   | Description                                | Validation Rules                              |
|-------------------------|--------|--------------------------------------------|-----------------------------------------------|
| `fullname.firstname`    | String | The first name of the user.               | Minimum 3 characters, required.              |
| `fullname.lastname`     | String | The last name of the user. (optional)     | -                                             |
| `email`                 | String | The user's email address.                 | Must be a valid email, unique, and required. |
| `password`              | String | The user's password.                      | Minimum 6 characters, required.              |

### **Example**

```json
{
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "johndoe@example.com",
    "password": "mypassword123"
}
```

---

## **Responses**

### **Success (201 Created)**

If the registration is successful, the server responds with the newly created user's details and a JSON Web Token.

#### Response Example:

```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
        "_id": "64b7e9f4fce36e12c8a2b8c9",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "johndoe@example.com",
        "socketId": null
    }
}
```

---

### **Error Responses**

#### **Validation Error (400 Bad Request)**

Occurs when any of the input fields do not meet the validation criteria.

**Example Response:**

```json
{
    "errors": [
        {
            "type": "field",
            "msg": "Invalid Email",
            "path": "email",
            "location": "body"
        },
        {
            "type": "field",
            "msg": "First name must be of atleast 3 characters long",
            "path": "fullname.firstname",
            "location": "body"
        },
        {
            "type": "field",
            "msg": "Password Must be of Minimum 6 length ",
            "path": "password",
            "location": "body"
        }
    ]
}
```

#### **Email Already Exists (400 Bad Request)**

Occurs when a user tries to register with an email that already exists in the system.

**Example Response:**

```json
{
    "message": "User already exists with this email",
    "success": false
}
```

#### **Server Error (500 Internal Server Error)**

Occurs due to an issue on the server side.

**Example Response:**

```json
{
    "message": "Server error, please try again later."
}
```

---

## **Implementation Notes**

1. **Validation Rules**:
   - Email must be valid and unique.
   - First name must be at least 3 characters.
   - Password must be at least 6 characters.

2. **Password Security**:
   - The password is hashed using `bcrypt` before saving to the database.

3. **Authentication Token**:
   - A JWT token is generated for authenticated sessions.

4. **Database Model**:
   - User information is stored in the `users` collection in MongoDB.

---

## **How to Use**

1. Send a `POST` request to `/users/register` with the required fields in the request body.
2. Handle validation or success responses based on the status code.

For any issues or questions, contact the developer team.


# `/users/login` Endpoint Documentation

This endpoint allows users to log in by providing their email and password. Upon successful authentication, a JWT token is generated and returned along with user details.

---

## **Endpoint**

`POST /users/login`

---

## **Description**

The `/users/login` endpoint authenticates users based on their email and password. The process includes:

1. **Input Validation**: Verifying that the `email` and `password` meet the required validation rules.
2. **User Authentication**:
    - Searching for the user by email.
    - Comparing the provided password with the hashed password stored in the database.
3. **JWT Generation**: Generating a JSON Web Token (JWT) for the authenticated user.
4. **Response**: Returning the JWT and user details on successful login or an error message if authentication fails.

---

## **Request Body**

The request body should be in JSON format with the following structure:

### **Required Fields**

| Field Name | Type   | Description                        | Validation Rules                                   |
|------------|--------|------------------------------------|--------------------------------------------------|
| `email`    | String | The user's email address.         | Must be a valid email, required.                 |
| `password` | String | The user's password.              | Minimum 6 characters, required.                  |

### **Example Request Body**

```json
{
    "email": "johndoe@example.com",
    "password": "mypassword123"
}

Success (200 OK)
If the login is successful, the server responds with a JWT token and user details.

Error Responses
Validation Error (400 Bad Request)
Occurs when the input fields do not meet validation criteria. For example, invalid email format or password length issues.

Invalid Credentials (401 Unauthorized)
Occurs when the email does not exist or the password is incorrect.

Server Error (500 Internal Server Error)
Occurs if there is an issue on the server side.

Status Codes
Status Code	Description
200 OK	Successful login, returns the JWT token and user details.
400 Bad Request	Validation error due to incorrect input format.
401 Unauthorized	Invalid credentials (incorrect email or password).
500 Internal Server Error	Server-side error.


Here’s the complete README.md for the /users/login endpoint in markdown format:

markdown
Copy code
# `/users/login` Endpoint Documentation

This endpoint allows users to log in by providing their email and password. Upon successful authentication, a JWT token is generated and returned along with user details.

---

## **Endpoint**

`POST /users/login`

---

## **Description**

The `/users/login` endpoint authenticates users based on their email and password. The process includes:

1. **Input Validation**: Verifying that the `email` and `password` meet the required validation rules.
2. **User Authentication**:
    - Searching for the user by email.
    - Comparing the provided password with the hashed password stored in the database.
3. **JWT Generation**: Generating a JSON Web Token (JWT) for the authenticated user.
4. **Response**: Returning the JWT and user details on successful login or an error message if authentication fails.

---

## **Request Body**

The request body should be in JSON format with the following structure:

### **Required Fields**

| Field Name | Type   | Description                        | Validation Rules                                   |
|------------|--------|------------------------------------|--------------------------------------------------|
| `email`    | String | The user's email address.         | Must be a valid email, required.                 |
| `password` | String | The user's password.              | Minimum 6 characters, required.                  |

### **Example Request Body**

```json
{
    "email": "johndoe@example.com",
    "password": "mypassword123"
}
Responses
Success (200 OK)
If the login is successful, the server responds with a JWT token and user details.

Response Example:
json
Copy code
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
        "_id": "64b7e9f4fce36e12c8a2b8c9",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "johndoe@example.com",
        "socketId": null
    }
}
Error Responses
Validation Error (400 Bad Request)
Occurs when the input fields do not meet validation criteria. For example, invalid email format or password length issues.

Example Response:
json
Copy code
{
    "errors": [
        {
            "type": "field",
            "msg": "Invalid Email",
            "path": "email",
            "location": "body"
        },
        {
            "type": "field",
            "msg": "Password Must be of Minimum 6 length",
            "path": "password",
            "location": "body"
        }
    ]
}
Invalid Credentials (401 Unauthorized)
Occurs when the email does not exist or the password is incorrect.

Example Response:
json
Copy code
{
    "message": "Invalid email or password"
}
Server Error (500 Internal Server Error)
Occurs if there is an issue on the server side.

Example Response:
json
Copy code
{
    "message": "Server error, please try again later."
}
Status Codes
Status Code	Description
200 OK	Successful login, returns the JWT token and user details.
400 Bad Request	Validation error due to incorrect input format.
401 Unauthorized	Invalid credentials (incorrect email or password).
500 Internal Server Error	Server-side error.
How the Data is Processed
Input Validation:

The email must be a valid email format.
The password must be at least 6 characters long.
User Authentication:

The user's email is used to search for the corresponding user in the database.
The provided password is compared with the hashed password stored in the database using comparePassword method.
JWT Token Generation:

If the email and password match, a JWT token is generated using user.generateAuthToken() and returned in the response.
Implementation Notes
Dependencies:

The express-validator library is used to validate the request fields (email and password).
The password is hashed and stored securely using bcrypt.
JWT is used for authentication to allow users to remain logged in.
Database Interaction:

The userModel.findOne() method is used to find the user by email.
The comparePassword() method is used to compare the entered password with the stored hash.
Token Generation:

The generateAuthToken() method creates a JWT token to authenticate the user for subsequent requests.
How to Use
Send a POST request to /users/login with the required email and password fields in the request body.
Handle validation errors if the input is incorrect.
If the login is successful, the server will return a JWT token and user details.
If the credentials are invalid, an error message will be returned