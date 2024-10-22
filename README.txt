Food Delivery App

Overview :

    This React-based food delivery application allows users to explore and order from various restaurants based on their geolocation. The app integrates the Swiggy API to fetch restaurant details and menus, implements lazy loading for Instamart data, and uses React Router for seamless navigation. A shimmer effect enhances the user experience during data fetching, and React Icons are utilized for a responsive navigation menu featuring a hamburger and cross icon for toggling the page list in mobile view. Employs Redux for state management.

Key Features :

    Geolocation Integration: Automatically fetches the user's location for relevant restaurant recommendations.
    Session Storage: Stores user coordinates for efficient restaurant data retrieval.
    Swiggy API Integration: Uses Swiggy API for restaurant and menu data.
    Dynamic Restaurant Cards: Displays restaurant details by mapping over the restaurant list and using props.
    Restaurant Menu Display: Provides detailed menus for selected restaurants, including item descriptions and prices.
    Lazy Loading: Instamart data is loaded only when the user navigates to the Instamart page.
    Dynamic Routing: Utilizes React Router for smooth navigation between pages.
    Shimmer Effect: Displays a shimmer loading effect while fetching data, improving user experience.
    Responsive Navigation: Utilizes React Icons for a hamburger menu in mobile view, allowing users to toggle the page list.
    Custom Hooks: Implements custom hooks for fetching restaurant lists, menus, user location and managing online/offline status.
    Redux Store: Manages restaurant data and cart items, making them easily accessible across the application.
    Error Handling: Includes basic error handling for API requests.
    Responsive Design: Built with Tailwind CSS for a sleek, mobile-friendly interface.
    Search Functionality: Enables users to search for restaurants by name with real-time filtering and displays popular cuisines.

Technologies Used :

    HTML
    Tailwind CSS
    JavaScript
    React
    Redux
    React Router
    React Hooks
    Custom Hooks
    React Icons
    Swiggy API
    Geolocation API
    Session Storage

App Structure :

    Header: Navigation component with branding, links, cart count, and user authentication.
    Body: Main content area for restaurant listings.
    Footer: Displays footer information.
    Error: Handles error display for routing issues.
    About: Provides information about the app.
    Contact: Displays contact information.
    Cart: Shows the user's cart, allowing item management and navigation.
    Search: Allows users to search for restaurants by name, displaying filtered results and popular cuisines.
    RestaurantMenu: Displays the menu for a selected restaurant, showcasing item details and pricing.
    RestaurantMenuCard: Displays individual menu items with an option to add to the cart.
    Instamart: Lazily loaded component for grocery shopping.
    Shimmer: Placeholder for loading states, providing a better user experience during data fetching.

Redux Store :

    Configuration :
        The Redux store is configured using the @reduxjs/toolkit library, which simplifies the process of setting up a Redux store with better defaults.

    Reducer Functions :
        addItem: Adds a new item to the cart.
        removeItem: Removes an item from the cart by its ID.
        clearCart: Clears all items from the cart.
        addRestaurant: Stores restaurant data for easy access.

Custom Hooks :

    useGeolocation :
        Purpose: The useGeolocation custom hook simplifies the process of obtaining the user's geographical location.

        Functionality:
            Fetches the user's current latitude and longitude using the Geolocation API.
            Stores the location in session storage for persistent access throughout the application.
            Provides a loading state to indicate when location data is being retrieved.
            Returns an object containing the user's location and the loading status.

    useOnline :
        Purpose: The useOnline custom hook tracks the user's online/offline status.

        Functionality:
            Listens for browser events to detect when the user goes online or offline.
            Updates the internal state to reflect the user's connectivity status.
            Cleans up event listeners on component unmount to prevent memory leaks.
            Returns a boolean indicating whether the user is currently online.

    useRestaurant :
        Purpose: The useRestaurant custom hook fetches a list of restaurants based on the user's location.

        Functionality:
            Takes the user's location (latitude and longitude) as an argument.
            Fetches restaurant data from a specified API endpoint.
            Updates the state with the retrieved restaurant data.
            Returns the list of restaurants.

    useRestaurantMenu :
        Purpose: The useRestaurantMenu custom hook retrieves the menu for a specific restaurant.

        Functionality:
            Takes the restaurant ID and user's saved location as arguments.
            Fetches menu data from a specified API endpoint based on the restaurant ID and location.
            Updates the state with the retrieved menu data.
            Returns the menu items for the selected restaurant.

Shimmer Component :

    Loading Placeholder: The Shimmer component displays a loading state while restaurant data is being fetched.
    Dynamic Messaging: Shows a message indicating that the app is looking for specific items (e.g., "Looking for great food near you ...").
    Visual Feedback: Uses a grid layout of gray boxes to simulate loading restaurant cards, enhancing the user experience during asynchronous operations.

Usage :

    Allow location access when prompted to get the best restaurant options.
    Use the navigation menu to access different sections of the app, including Home, About, Contact, Search, Instamart, and Cart.
    Monitor your online/offline status, indicated by a visual cue in the header.
    Manage your cart by adding items, viewing them, and clearing the cart as needed.
    Explore restaurant menus and add items directly to your cart from the menu.
    Utilize the search functionality to find specific restaurants by name and view popular cuisines.

API Reference :

    The app fetches data from the Swiggy API.
    Swiggy Restaurant List API - https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
    Swiggy Menu API -  https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65200&lng=77.16630&restaurantId=655882&catalog_qa=undefined&submitAction=ENTER
    Swiggy Instamart API - https://www.swiggy.com/api/instamart/home?clientId=INSTAMART-APP
