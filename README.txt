Foodify - Food Delivery App

Live Link : https://foodify-yash-gulia.vercel.app/

Overview :

Foodify is a modern food delivery application built with React, Redux, and Firebase. It provides users with a seamless experience to browse, search, and order food from restaurants. This app integrates with Swiggy APIs and features authentication, state management, and a smooth UI.


Tech Stack :

Frontend:

React: Component-based UI development
React Router: Navigation & routing
Redux Toolkit: State management
Redux Persist: Persistent storage for Redux state
Tailwind CSS: Utility classes for styling
React Icons: Icons for UI enhancement
dotenv: Environment variables

Backend:

Firebase Authentication: Email/password & Google authentication
Vercel Serverless Functions: API handling to avoid CORS issues

APIs:

Swiggy API: Fetches restaurants & menus
Geolocation API: Fetches user's location
Razorpay API: Handles payment processing


Deployment:

Vercel: Hosting the React app & backend functions


Optimized for performance and user experience:

Lazy Loading: Instamart data is loaded only when the user navigates to the Instamart page.
Memoization: React components are memoized to avoid unnecessary re-renders.
State Management: Redux Toolkit is used for state management with Redux Persist for persistent storage.
Caching: Caches restaurant data in local storage to improve performance.
Session Storage: Stores user coordinates for efficient restaurant data retrieval.
Shimmer Effect: Displays a shimmer loading effect while fetching data, improving user experience.


Error Handling:

Error boundaries are implemented to catch and display errors gracefully.


Scalability:

Firebase can be scaled horizontally to handle increased traffic.


Project Structure :

Foodify/
│-- src/
│   ├── components/        # Reusable UI components
│   ├── pages/             # Page-level components
│   ├── hooks/             # Custom React hooks
│   ├── redux/             # Redux store & slices
│   ├── api/               # API-related functions
│   ├── assets/            # Images & static assets
│   ├── App.js             # Main App component
│   ├── index.js           # Entry point
│-- api/
│   ├── restaurant.js      # Fetch restaurants via Vercel
│   ├── restaurantMenu.js  # Fetch restaurant menus
│-- package.json
│-- tailwind.config.js


Features :

1. Restaurant Discovery

Fetches nearby restaurants based on user location.

Uses useRestaurant.js hook to handle API calls.


2. Restaurant Menu Display

Fetches restaurant-specific menus using useRestaurantMenu.js hook.


3. Authentication

Firebase authentication (Email/Password, Google sign-in)

Redux handles auth state


4. Cart & Checkout

Add/remove items from the cart

Uses Redux for state management

Persistent cart with Redux Persist


5. Dark Mode & UI Enhancements

Dark theme implemented using Tailwind

Smooth animations


6. Payment Integration

Payment processing with Razorpay API

Payment details stored securely in Redux


7. User Profile

User authentication with Firebase

User profile management


Application Flow :

User opens app → Location is fetched

API request to fetch restaurants → Data stored in Redux

User selects restaurant → API request for menu

User adds items to cart → State updates & persists

Authentication for order placement

Checkout & Confirmation


API Handling & CORS Solution :

Direct Swiggy API calls were blocked due to CORS.

Used Vercel Serverless Functions (/api/restaurant & /api/restaurantMenu) to proxy requests.

Ensures secure & reliable API calls.


Deployment Strategy :

Frontend hosted on Vercel

Serverless functions for API handling

Environment variables managed in Vercel settings


Future Enhancements :

Order tracking

Advanced filtering & sorting

User reviews & ratings

Personalized recommendations

Search functionality for restaurants and items

Integration with other food delivery apps