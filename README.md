# Activity Booking API

A RESTful API for booking activities like sports, movies, and events.

## Tech Stack

- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Authentication**: JWT Token-based auth
- **Validation**: express-validator
- **Password Security**: bcrypt

## Features

- User Registration & Login
- Public endpoint to list available activities
- Authorized booking of activities
- View user's bookings

## Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/activity-booking
   JWT_SECRET=your_jwt_secret_key_here
   JWT_EXPIRE=30d
   ```
4. Start the server:
   ```
   npm start
   ```
   
## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### Activities
- `GET /api/activities` - Get all activities (public)
- `GET /api/activities/:id` - Get a specific activity (public)
- `POST /api/activities` - Create a new activity (protected/admin)

### Bookings
- `POST /api/bookings` - Book an activity (protected)
- `GET /api/bookings/me` - Get all bookings for current user (protected)

## API Testing

A Postman collection is available for testing the API. Import the following file into Postman:
`Activity_Booking_API.postman_collection.json`

## Deployment

This API can be deployed on platforms like Render, Vercel, or Cyclic:

1. Push code to GitHub
2. Connect your repository to the deployment platform
3. Set up environment variables
4. Deploy

## License

[MIT](LICENSE)
