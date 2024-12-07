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