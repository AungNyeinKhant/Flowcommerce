# Flowcommerce 🛒

A full-stack e-commerce platform built with React, TypeScript, Node.js, and PostgreSQL. Features include user authentication, product management, shopping cart, payment processing with Stripe, and an admin panel.

## ✨ Features

### 🔐 Authentication
- User registration and login
- Google sign-in integration
- Role-based authentication (User/Admin)
- JWT token management

### 🛍️ Product Management
- Browse products with pagination
- Search products by name or description
- Filter products by category
- Sort products by price, date, etc.
- Add/remove products to/from cart
- Add/remove products to/from favorites list
- Product image upload and management

### 🛒 Shopping Experience
- Shopping cart functionality
- Real-time cart updates
- Checkout process
- Order management and tracking

### 💳 Payment Processing
- Secure payment processing with Stripe
- Multiple payment methods support
- Order confirmation and receipts

### 👤 User Profile
- View and update profile information
- Order history
- Favorite products management

### 🔧 Admin Panel
- Product management (CRUD operations)
- Order management and tracking
- User management
- Category management
- Analytics dashboard

### 📱 Responsive Design
- Mobile-first responsive design
- Progressive Web App (PWA) support
- Cross-browser compatibility

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Redux Toolkit** - State management
- **React Query** - Server state management
- **React Router** - Routing
- **React Hook Form** - Form handling
- **Stripe Elements** - Payment UI
- **Firebase** - Authentication

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **TypeScript** - Type safety
- **Prisma** - Database ORM
- **PostgreSQL** - Database
- **Stripe** - Payment processing
- **Firebase Admin** - Authentication
- **Cloudinary** - Image storage
- **Multer** - File upload handling
- **Sharp** - Image processing

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **PostgreSQL** database
- **Git**

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd Flowcommerce
```

### 2. Backend Setup

#### Navigate to backend directory
```bash
cd backend
```

#### Install dependencies
```bash
npm install
```

#### Environment Variables
Create a `.env` file in the backend directory refrencing .env.example file.

#### Database Setup
```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# Seed the database with sample data
npm run seed
```

#### Start the backend server
```bash
# Development mode
npm run server

# Production mode
npm run build
npm start
```

The backend server will run on `http://localhost:3000`

### 3. Frontend Setup

#### Navigate to frontend directory
```bash
cd ../frontend
```

#### Install dependencies
```bash
npm install
```

#### Environment Variables
Create a `.env` file in the frontend refrencing `.env.example` file
#### Start the frontend development server
```bash
npm run dev
```

The frontend application will run on `http://localhost:5173`

## 📊 Database Seeding

The project includes a comprehensive seeding script that creates:

- 100 sample products with realistic data
- 10 product categories
- Stripe product and price objects

To run the seed script:

```bash
cd backend
npm run seed
```

**Note**: Make sure your Stripe API key is configured before running the seed script, as it creates Stripe products for each sample product.

## 🐳 Docker Deployment

### Backend Docker
```bash
cd backend
docker build -t flowcommerce-backend .
docker run -p 3000:3000 flowcommerce-backend
```

### Frontend Docker
```bash
cd frontend
docker build -t flowcommerce-frontend .
docker run -p 5173:5173 flowcommerce-frontend
```

## 📁 Project Structure

```
Flowcommerce/
├── backend/                 # Backend API server
│   ├── src/
│   │   ├── controllers/     # Route controllers
│   │   ├── middleware/      # Custom middleware
│   │   ├── routes/          # API routes
│   │   ├── config/          # Configuration files
│   │   ├── types/           # TypeScript types
│   │   └── utils/           # Utility functions
│   ├── prisma/              # Database schema and migrations
│   └── seed.ts              # Database seeding script
├── frontend/                # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── features/        # Feature-based modules
│   │   ├── context/         # React context providers
│   │   ├── routes/          # Route components
│   │   ├── types/           # TypeScript types
│   │   └── utils/           # Utility functions
│   └── public/              # Static assets
└── README.md
```

## 🔧 Available Scripts

### Backend Scripts
```bash
npm run build          # Build TypeScript to JavaScript
npm run start          # Start production server
npm run server         # Start development server with nodemon
npm run seed           # Run database seeding
```

### Frontend Scripts
```bash
npm run dev            # Start development server
npm run build          # Build for production
npm run preview        # Preview production build
npm run lint           # Run ESLint
```

## 🔐 Authentication Flow

1. Users can register with email/password or Google OAuth
2. Firebase handles authentication
3. Backend validates Firebase tokens
4. Role-based access control for admin features

## 💳 Payment Integration

- Stripe handles all payment processing
- Secure checkout with Stripe Elements
- Webhook handling for payment confirmations
- Support for multiple payment methods

## 🖼️ Image Management

- Cloudinary for image storage and optimization
- Automatic image resizing and compression
- Support for multiple image formats
- CDN delivery for fast loading


## 📱 PWA Features

- Offline functionality
- Installable app
- Push notifications (configurable)
- Responsive design for all devices

**Happy Shopping! 🛒✨** 