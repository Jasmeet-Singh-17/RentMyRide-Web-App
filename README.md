# RentMyRide 🚗🏍️

A modern vehicle rental platform built with Next.js that connects users with vehicle owners for seamless car, bike, and scooter rentals.

## 📋 Features

### User Features
- **Easy Browsing**: Browse cars, bikes, and scooters with detailed information
- **Advanced Search**: Search vehicles by name, type, and specifications
- **Smart Filters**: Filter by vehicle type, fuel type, and price range
- **Detailed Vehicle Pages**: View comprehensive vehicle information including features, pricing, and location
- **User Authentication**: Login and signup functionality
- **Profile Management**: Personal profile and order tracking
- **Responsive Design**: Fully optimized for mobile and desktop devices

### Vehicle Features
- Multiple vehicle types: Cars, Bikes, Scooters
- Detailed specifications (fuel type, seating capacity, features)
- Transparent pricing per day
- Location-based availability
- High-quality vehicle images

### Platform Features
- 24/7 Customer Support
- Secure Payment Options
- Instant Booking Process
- Direct Owner Contact
- Top Brand Showcase

## 🛠️ Technologies Used

- **Framework**: Next.js (Pages Router)
- **Styling**: Bootstrap 5 + Custom CSS
- **Icons**: Remix Icons, Lucide React
- **Carousel**: Swiper.js
- **Language**: JavaScript/React

## 📦 Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd rentmyride
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to `http://localhost:3000`

## 📁 Project Structure

```
rentmyride/
├── components/
│   ├── BrandCard.js       # Brand display component
│   ├── Footer.js          # Footer with mobile and desktop variants
│   ├── Header.js          # Navigation header
│   └── VehicleCard.js     # Vehicle listing cards
├── data/
│   ├── VehicleData.js     # Vehicle information database
│   └── brands.js          # Brand logos data
├── pages/
│   ├── _app.js            # App wrapper with Bootstrap imports
│   ├── _document.js       # HTML document structure
│   ├── index.js           # Homepage
│   ├── explore.js         # Vehicle exploration page with filters
│   ├── search.js          # Search functionality
│   ├── contact.js         # Contact/Help page
│   ├── profile.js         # User profile page
│   ├── login.js           # Login page
│   ├── signup.js          # Registration page
│   └── vehicle/[id].js    # Dynamic vehicle detail page
├── styles/
│   └── custom.css         # Custom styling
└── public/
    ├── vehicles/          # Vehicle images
    └── logo/              # Brand logos
```

## 🎨 Key Components

### Header
- Responsive navigation bar
- Mobile and desktop variants
- Quick access to main sections

### Footer
- Mobile bottom navigation with icons
- Desktop footer with company info and links
- Social media integration
- Contact information

### VehicleCard
- Displays vehicle thumbnail and basic info
- Click-to-view-details functionality
- Bookmark feature

### BrandCard
- Showcases partner brands
- Used in Swiper carousel

## 📄 Pages Overview

### Home (`/`)
- Hero section with call-to-action
- Features showcase
- Top brands carousel
- Services overview
- 3-step rental process

### Explore (`/explore`)
- Complete vehicle listing
- Advanced filtering system (vehicle type, fuel type, price)
- Search integration
- Responsive filter panel

### Vehicle Detail (`/vehicle/[id]`)
- Full vehicle information
- Pricing details
- Features and amenities
- Location information
- Rent now action button

### Search (`/search`)
- Search bar with suggestions
- Recent searches display
- Quick access to vehicles

### Profile (`/profile`)
- User account overview
- Order history
- Settings access
- Wallet information

### Contact (`/contact`)
- Contact form
- Service inquiry
- Help and support

## 🎯 Available Vehicle Data

The platform includes sample data for 9 vehicles:
- **Cars**: Maruti Suzuki Swift, Toyota Fortuner, Honda Civic, BMW X5, Tata Nexon
- **Bikes**: Royal Enfield Classic, KTM Duke 390, Suzuki Gixxer
- **Scooters**: Honda Activa

Each vehicle includes:
- Name and type
- Daily rental rate (₹)
- Location
- Seating capacity
- Fuel type
- Features list
- Image

## 🚀 Development Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📱 Responsive Design

- **Mobile**: Bottom navigation bar, optimized layouts
- **Tablet**: Adaptive grid systems
- **Desktop**: Full navigation, multi-column layouts

## 🎨 Styling

The project uses:
- Bootstrap 5 for base components and grid system
- Custom CSS for animations and hover effects
- Remix Icons for consistent iconography
- Custom color scheme with warning (yellow) as primary brand color

## 🔧 Configuration

### Adding New Vehicles

Edit `data/VehicleData.js`:
```javascript
{
  id: 10,
  name: "Vehicle Name",
  type: "Car/Bike/Scooter",
  rate: 2500,
  rateUnit: "/day",
  currency: "₹",
  location: "City, India",
  seats: 5,
  fuel: "Petrol",
  features: ["Feature 1", "Feature 2"],
  src: "/path/to/image.jpg"
}
```

### Adding New Brands

Edit `data/brands.js`:
```javascript
{
  id: 10,
  src: "/logo/brand.png",
  name: "Brand Name"
}
```

## 🌟 Key Features Implementation

### Filter System
The explore page includes a sophisticated filter panel with:
- Vehicle type filtering
- Fuel type filtering
- Price range filtering
- Real-time filter application

### Navigation
- Smooth page transitions
- Back button functionality
- Active state indicators

### User Experience
- Loading states
- Hover effects
- Responsive interactions
- Mobile-first design

## 📞 Contact Information

- **Phone**: +91 98765 43210
- **Email**: support@rentmyride.com
- **Address**: 123 Business Park, Delhi, India 110064
- **Support**: 24/7 Available

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

© 2025 RentMyRide. All Rights Reserved.

## 🔮 Future Enhancements

- Backend integration for real bookings
- Payment gateway integration
- Real-time availability checking
- User reviews and ratings
- Advanced search with location-based filtering
- Booking calendar
- Email notifications
- Admin dashboard for vehicle management
- Multi-language support

## 💡 Notes

- This is a frontend prototype/demo
- Backend functionality needs to be implemented
- Images should be added to the public folder
- Forms currently don't submit data (need backend integration)

---

Built with ❤️ by RentMyRide Team
