# RentMyRide 🚗

A modern, mobile-first car sharing platform built with Next.js that makes vehicle rental simple, affordable, and reliable. Rent cars, bikes, and scooters with flexible booking options and seamless user experience.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-14+-black)
![React](https://img.shields.io/badge/React-18+-61DAFB)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3)

## ✨ Key Features

### 🎯 User Features
- **Instant Booking** - Book vehicles in just a few clicks with flexible durations (hourly, daily, weekly)
- **Multiple Vehicle Types** - Browse and rent cars, bikes, and scooters
- **Direct Owner Contact** - Connect directly with vehicle owners for transparent bookings
- **Location-Based Search** - Find nearby vehicles with integrated GPS tracking
- **Favorites System** - Save your favorite vehicles for quick access
- **Secure Payments** - Multiple payment options including cards, UPI, and wallets
- **Real-time Availability** - Check vehicle availability instantly

### 👨‍💼 Owner/Admin Features
- **Dashboard Management** - Manage vehicles, bookings, and pricing from a centralized dashboard
- **Analytics & Insights** - Track statistics and performance metrics
- **Booking Management** - View and manage all bookings in real-time
- **Pricing Control** - Set flexible pricing for different rental durations

### 🛡️ Platform Features
- **24/7 Customer Support** - Responsive support team available around the clock
- **Safety & Trust** - Verified users and insurance coverage
- **Special Offers** - Seasonal discounts and promotional deals
- **Mobile-First Design** - Fully responsive design optimized for all devices
- **Bottom Navigation** - Easy mobile navigation with fixed bottom nav bar

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager
- **Git** - [Download here](https://git-scm.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/rentmyride.git
   cd rentmyride
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:3000` to see the application running

### Build for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js** | React framework for production |
| **React.js** | UI component library |
| **Bootstrap 5** | CSS framework for responsive design |
| **Remix Icon** | Beautiful icon library |
| **Lucide React** | Additional icon components |
| **CSS3** | Custom styling and animations |

## 📁 Project Structure

```
rentmyride/
├── components/
│   ├── Footer.js              # Footer with navigation and contact info
│   ├── Header.js              # Navigation bar component
│   ├── VehicleCard.js         # Vehicle display cards
│   └── placeholderCard.js     # Loading placeholder component
├── data/
│   └── VehicleData.js         # Vehicle data and mock API
├── pages/
│   ├── _app.js                # App configuration
│   ├── _document.js           # Document configuration
│   ├── index.js               # Homepage
│   ├── explore.js             # Vehicle browsing page
│   ├── contact.js             # Contact form page
│   ├── login.js               # Login page
│   ├── signup.js              # Signup page
│   └── profile.js             # User profile page
├── public/                    # Static assets
├── styles/
│   └── custom.css             # Custom styles and animations
└── package.json               # Project dependencies
```

## 🎨 Key Pages & Components

### Homepage (`/`)
- Eye-catching hero section with gradient background
- Feature showcase with 6 key platform features
- Services overview with 6 core service offerings
- 3-step rental process explanation

### Explore Page (`/explore`)
- Vehicle search functionality
- Filter options (vehicle type, rate, fuel type)
- Grid display of available vehicles
- Vehicle cards with detailed information

### Contact Page (`/contact`)
- Contact form with validation
- Service selection dropdown
- Vehicle type radio buttons
- Message textarea

### User Authentication
- **Login Page** - Email and password authentication
- **Signup Page** - New user registration with form validation

### Profile Page
- User profile overview
- Order history access
- Settings management
- Login prompt for unauthenticated users

## 🎯 Features Breakdown

### Mobile-First Design
- Fixed bottom navigation bar for mobile devices
- Responsive grid layouts that adapt to screen sizes
- Touch-optimized buttons and interactions
- Optimized for iOS and Android devices

### Search & Filter
- Real-time vehicle search
- Filter by vehicle type (Car, Bike, Scooter)
- Filter by price range
- Filter by fuel type (Petrol, Diesel, CNG, EV)
- Location-based filtering

### Booking Flow
1. **Search** - Find your ideal vehicle
2. **Select** - Choose rental duration
3. **Book** - Complete secure payment
4. **Ride** - Pick up and enjoy your ride

## 🔒 Security Features

- Secure user authentication
- Protected API routes
- Input validation and sanitization
- XSS protection
- CSRF token implementation


---

<div align="center">
  Made with ❤️ by the RentMyRide Team
  <br/>
  <sub>© 2025 RentMyRide. All Rights Reserved.</sub>
</div>
