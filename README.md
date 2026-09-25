# EduFund Mobile
An intuitive mobile application designed to simplify education financing, savings goal tracking, scholarship distribution, and peer-to-peer crowdfunding for student tuition.
---
## Project Description
**EduFund Mobile** provides students, parents, and financial sponsors with a centralized mobile solution to manage education costs. The application helps families plan long-term tuition savings, apply for verified education micro-loans and scholarships, and run targeted crowdfunding campaigns for school fees.
---
## Features
- **User Authentication & Role Management**: Multi-role support for Students, Parents/Guardians, and Financial Donors.
- **Tuition Savings Goal Tracker**: Automated savings plans, progress metrics, and target date forecasting for school expenses.
- **Educational Crowdfunding**: Create, share, and track verified fundraising campaigns for tuition and academic supplies.
- **Scholarship & Financial Aid Portal**: Browse, apply for, and track the status of institutional grants and scholarships.
- **Secure Payment Gateway**: Multi-channel payment integration (Credit Card, Bank Transfer, E-Wallets) for instant fund deposits.
- **Real-Time Push Notifications**: Instant alerts for donation receipts, milestone progress, and payment schedules.
- **Financial Analytics & Reports**: Visual charts summarizing contributions, goal completion rates, and account activity.
---
## Technology Stack
- **Mobile Framework**: React Native (TypeScript) / Cross-platform Mobile SDK
- **State Management**: Redux Toolkit / React Context API
- **UI Components**: React Native Paper / Tailwind CSS (NativeWind)
- **HTTP Client**: Axios with JWT Interceptors
- **Backend API**: Node.js & Express REST API
- **Database**: PostgreSQL / Prisma ORM & Redis Caching
- **Authentication**: JWT & OAuth 2.0 (Google / Apple Sign-In)
- **Testing Framework**: Jest & React Native Testing Library
- **Build Tools**: Expo CLI / Android Studio & Xcode
---
## Installation
### Prerequisites
Ensure you have the following installed on your local machine:
- **Node.js**: v18.0.0 or higher
- **npm** or **yarn**: latest version
- **Android Studio** (for Android Emulator) or **Xcode** (for iOS Simulator, macOS only)
- **Git**
### Step-by-Step Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/vita1288/edufund-mobile.git
   cd edufund-mobile
Install Dependencies:

bash


npm install
# or using yarn
yarn install
Install CocoaPods (iOS only):

bash


cd ios && pod install && cd ..
Environment Variables
Create a .env file in the root directory of the project based on the template below:

env


# Application Configuration
APP_ENV=development
API_BASE_URL=http://10.0.2.2:3000/api/v1   # Android Emulator localhost
# API_BASE_URL=http://localhost:3000/api/v1 # iOS Simulator localhost
# Authentication & Security
JWT_SECRET=your_jwt_secret_key_here
REFRESH_TOKEN_SECRET=your_refresh_token_secret
# Payment Gateway Configuration
PAYMENT_PUBLIC_KEY=pk_test_edufund_example_key
PAYMENT_ENVIRONMENT=sandbox
# Firebase & Push Notifications
FIREBASE_API_KEY=AIzaSyExampleKeyHere
FIREBASE_SENDER_ID=123456789012
FIREBASE_APP_ID=1:123456789012:web:example
# Analytics & Logging
SENTRY_DSN=https://example@sentry.io/123456
LOG_LEVEL=debug
Local Development Setup
Start Metro Bundler:

bash


npm start
Run on Android Emulator:

Launch an Android Virtual Device (AVD) via Android Studio.
Execute the development build command:
bash


npm run android
Run on iOS Simulator (macOS only):

Launch iOS Simulator via Xcode.
Execute the development build command:
bash


npm run ios
How to Run
Development Mode:
bash


npm run dev
Reset Cache & Start:
bash


npm start -- --reset-cache
How to Test
Execute the automated test suite covering unit tests and component rendering:

Run All Tests:
bash


npm test
Run Tests in Watch Mode:
bash


npm run test:watch
Generate Test Coverage Report:
bash


npm run test:coverage
API Endpoints
The mobile application communicates with the backend REST API via the following primary endpoints:

Category	HTTP Method	Endpoint	Description
Auth	POST	/api/v1/auth/register	Create new student or sponsor account
Auth	POST	/api/v1/auth/login	Authenticate user and return JWT tokens
User	GET	/api/v1/users/profile	Retrieve current authenticated user profile
Savings	GET	/api/v1/goals	Fetch active education savings goals
Savings	POST	/api/v1/goals	Create a new tuition savings goal
Savings	PUT	/api/v1/goals/:id	Update goal target amount or target date
Campaigns	GET	/api/v1/campaigns	List active education crowdfunding campaigns
Campaigns	POST	/api/v1/campaigns	Create crowdfunding request for tuition
Payments	POST	/api/v1/payments/charge	Process donation or savings deposit transaction
Payments	GET	/api/v1/payments/history	Retrieve transaction history log
Deployment Information
1. Android Build (APK & AAB)
Generate Release Bundle (AAB for Google Play Store):

bash


cd android
./gradlew bundleRelease
The generated .aab file will be located at:
android/app/build/outputs/bundle/release/app-release.aab

Generate Standalone APK:

bash


cd android
./gradlew assembleRelease
2. iOS Build (IPA)
Open ios/EduFundMobile.xcworkspace in Xcode.
Select target device Any iOS Device (arm64).
Select Product -> Archive.
Upload the build to App Store Connect via Xcode Organizer.
Known Limitations
Offline Mode Synchronization: Financial transactions and real-time campaign updates require an active internet connection. Offline actions are cached locally and synchronized upon reconnection.
Payment Sandbox Restriction: Payment gateway processing in local development runs in sandbox mode; real monetary transactions require production credential activation.
Biometric Authentication Fallback: Hardware biometric authentication (Face ID / Touch ID) falls back to PIN / Password entry on devices without biometric hardware.
Push Notification Permissions: Real-time push notifications require explicit user permission approval on iOS 14+ and Android 13+.
