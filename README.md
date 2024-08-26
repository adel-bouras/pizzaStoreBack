# Pizza hub backend

## Description

A simple e-store that enable user to register and login on the store , post commands and list their commands,
with an admin party that can i post new pizza , delete old posts , delete users , list pizza , list users , see user details , pizza details ...

## Features
- https server
- OTP generation and sending via email
- OTP verification for user registration only
- token generation and verification expires withing 24h
- CRUD operations for admin management
- Responsive message design

## Installation

To set up this project locally, follow these steps:

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/adel-bouras/pizzaStoreBack.git
    ```

2. **Navigate to the Project Directory**:

    ```bash
    cd pizzaStoreBack
    ```

3. **Install Dependencies**:

    Ensure you have [Node.js](https://nodejs.org/) installed, then run:

    ```bash
    npm install
    ```

4. **Set Up Environment Variables**:

    Create a `.env` file in the root directory and add your environment variables:

    ```plaintext
    EMAIL=your-email@gmail.com
    PASSWORD=your-email-password
    JWT_KEY=your-jwt-secret-key
    ```

5. **Start the Application**:

    ```bash
    npm start
    ```

    The application will be available at `http://localhost:8080`.

## Usage

To use the application, follow these steps:

1. **Register a New User**:

    POST `/register` with required user details (userName, email, password).

2. **Send OTP**:

    POST `/sendOTP` with the user's email to receive an OTP.

3. **Verify OTP**:

    POST `/verifyOTP` with the user's email and OTP to verify.

4. **Log In**:

    POST `/login` with email and password to authenticate and receive a token.

5. **Access Protected Routes**:

    Use the token received from login to access protected routes like `/products`, `/details`, and `/command`. Include the token in the `Authorization` header.

## API Endpoints

- **POST** `/register`: Register a new user.
- **POST** `/sendOTP`: Send OTP to user email.
- **POST** `/verifyOTP`: Verify the OTP entered by the user.
- **POST** `/login`: Log in a user and receive a token.
- **GET** `/products`: Get product list (requires token).
- **GET** `/details`: Get user details (requires token).
- **POST** `/command`: Place a command (requires token).

## Contributing

Contributions are welcome! To contribute:

1. **Fork the Repository**.
2. **Create a New Branch**:

    ```bash
    git checkout -b BRANCH
    ```

3. **Make Changes** and commit them:

    ```bash
    git add .
    git commit -m "Add your message here"
    ```

4. **Push to Your Fork**:

    ```bash
    git push origin BRANCH
    ```

5. **Open a Pull Request** on GitHub.