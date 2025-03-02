# Dogify Project

Dogify is a dog-oriented startup using cutting-edge AI to classify dog breeds from images. This project is a functional prototype of the Dogify website, designed to showcase our technology, attract users, and collect valuable feedback. The platform supports user authentication, image classification, and product sales — all with a user-friendly interface.

## Tech Stack

**Frontend:** HTML, CSS, JavaScript (structured with separate files)
**Backend:** Node.js, Express.js, EJS
**Database:** Firebase Firestore (for user data and app data)
**Storage:** Cloudinary (for image storage)
**Deployment:** Render (backend), GitHub Pages (frontend)

## Core Features

### 1. AI Dog Breed Classifier

- Users can upload an image of a dog.
- The system uses a prebuilt API (The Dog API) to classify the dog breed and return results.
- Currently, breed data is generated randomly, but there is a placeholder for the API key.

### 2. User Authentication

- Email/Password sign-up and login powered by Firebase Authentication.
- Secure storage of user data (name, email, and uploaded images).

### 3. Dashboard

- Displays user’s past uploads and breed classification results.
- Allows users to delete or manage their data.

### 4. Subscription Plans

- 4 Paid Plans and 1 Free Plan.
- Free Plan: Basic classification.
- Paid Plans: Faster processing, detailed breed insights, and additional features.

### 5. Product Store

- Showcase of dog-related products like food, toys, and accessories.
- (Managed by the frontend team — no backend implementation for product purchases yet.)

### 6. Feedback System

- Simple feedback form where users can share their experiences and suggestions.
- Feedback data stored in Firebase Firestore.

## Pages Overview

1. **Home Page:** Introduction and call-to-action buttons (Sign Up, Try Now).
2. **Login Page:** Email and password login.
3. **Sign-Up Page:** New user registration.
4. **Dashboard:** User’s personal space for managing uploads and viewing results.
5. **Dog Classification Result Page:** Displays uploaded image and classified breed details.
6. **Products Page:** Displays available dog-related products.
7. **Subscription Plans Page:** Showcases pricing tiers and plan benefits.
8. **Feedback Page:** Allows users to submit feedback and rate their experience.
9. **404 Page:** Custom error page for incorrect URLs.

## Cloudinary Integration (Image Storage)

- Cloudinary is used for image uploads and storage due to Firebase Storage’s premium requirement.
- Images are uploaded to Cloudinary through the backend, and image URLs are stored in Firestore.

## Security Measures

- **Auth Protection:** Firebase Auth middleware for route protection on backend.
- **Cloudinary Security:** Only the backend has Cloudinary API keys.
- **Firestore Rules:** Users can only access their own data.
- **Environment Variables:** Sensitive data like API keys are stored in a `.env` file.

## Deployment

- **Frontend:** Deployed on GitHub Pages.
- **Backend:** Deployed on Render.

---
