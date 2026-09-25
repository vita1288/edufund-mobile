<h1>Edufund Mobile</h1>
<p>
  An intuitive mobile application designed to simplify education financing, savings goal tracking, scholarship distribution, and peer-to-peer crowdfunding for student tuition.
</p>
<hr>
<h2>Project Description</h2>
<p>
  <strong>EduFund Mobile</strong> provides students, parents, and financial sponsors with a centralized mobile solution to manage education costs. The application helps families plan long-term tuition savings, apply for verified education micro-loans and scholarships, and run targeted crowdfunding campaigns for school fees.
</p>
<hr>
<h2>Features</h2>
<ul>
  <li><strong>User Authentication &amp; Role Management</strong>: Multi-role support for Students, Parents/Guardians, and Financial Donors.</li>
  <li><strong>Tuition Savings Goal Tracker</strong>: Automated savings plans, progress metrics, and target date forecasting for school expenses.</li>
  <li><strong>Educational Crowdfunding</strong>: Create, share, and track verified fundraising campaigns for tuition and academic supplies.</li>
  <li><strong>Scholarship &amp; Financial Aid Portal</strong>: Browse, apply for, and track the status of institutional grants and scholarships.</li>
  <li><strong>Secure Payment Gateway</strong>: Multi-channel payment integration (Credit Card, Bank Transfer, E-Wallets) for instant fund deposits.</li>
  <li><strong>Real-Time Push Notifications</strong>: Instant alerts for donation receipts, milestone progress, and payment schedules.</li>
  <li><strong>Financial Analytics &amp; Reports</strong>: Visual charts summarizing contributions, goal completion rates, and account activity.</li>
</ul>
<hr>
<h2>Technology Stack</h2>
<ul>
  <li><strong>Mobile Framework</strong>: React Native (TypeScript) / Cross-platform Mobile SDK</li>
  <li><strong>State Management</strong>: Redux Toolkit / React Context API</li>
  <li><strong>UI Components</strong>: React Native Paper / Tailwind CSS (NativeWind)</li>
  <li><strong>HTTP Client</strong>: Axios with JWT Interceptors</li>
  <li><strong>Backend API</strong>: Node.js &amp; Express REST API</li>
  <li><strong>Database</strong>: PostgreSQL / Prisma ORM &amp; Redis Caching</li>
  <li><strong>Authentication</strong>: JWT &amp; OAuth 2.0 (Google / Apple Sign-In)</li>
  <li><strong>Testing Framework</strong>: Jest &amp; React Native Testing Library</li>
  <li><strong>Build Tools</strong>: Expo CLI / Android Studio &amp; Xcode</li>
</ul>
<hr>
<h2>Installation</h2>
<h3>Prerequisites</h3>
<p>Ensure you have the following installed on your local machine:</p>
<ul>
  <li><strong>Node.js</strong>: v18.0.0 or higher</li>
  <li><strong>npm</strong> or <strong>yarn</strong>: latest version</li>
  <li><strong>Android Studio</strong> (for Android Emulator) or <strong>Xcode</strong> (for iOS Simulator, macOS only)</li>
  <li><strong>Git</strong></li>
</ul>
<h3>Step-by-Step Installation</h3>
<ol>
  <li>
    <p><strong>Clone the Repository</strong>:</p>
    <pre><code>git clone https://github.com/vita1288/edufund-mobile.git
cd edufund-mobile</code></pre>
  </li>
  <li>
    <p><strong>Install Dependencies</strong>:</p>
    <pre><code>npm install
# or using yarn
yarn install</code></pre>
  </li>
  <li>
    <p><strong>Install CocoaPods (iOS only)</strong>:</p>
    <pre><code>cd ios &amp;&amp; pod install &amp;&amp; cd ..</code></pre>
  </li>
</ol>
<hr>
<h2>Environment Variables</h2>
<p>Create a <code>.env</code> file in the root directory of the project based on the template below:</p>
<pre><code># Application Configuration
APP_ENV=development
API_BASE_URL=http://10.0.2.2:3000/api/v1   # Android Emulator localhost
# API_BASE_URL=http://localhost:3000/api/v1 # iOS Simulator localhost
# Authentication &amp; Security
JWT_SECRET=your_jwt_secret_key_here
REFRESH_TOKEN_SECRET=your_refresh_token_secret
# Payment Gateway Configuration
PAYMENT_PUBLIC_KEY=pk_test_edufund_example_key
PAYMENT_ENVIRONMENT=sandbox
# Firebase &amp; Push Notifications
FIREBASE_API_KEY=AIzaSyExampleKeyHere
FIREBASE_SENDER_ID=123456789012
FIREBASE_APP_ID=1:123456789012:web:example
# Analytics &amp; Logging
SENTRY_DSN=https://example@sentry.io/123456
LOG_LEVEL=debug</code></pre>
<hr>
<h2>Local Development Setup</h2>
<ol>
  <li>
    <p><strong>Start Metro Bundler</strong>:</p>
    <pre><code>npm start</code></pre>
  </li>
  <li>
    <p><strong>Run on Android Emulator</strong>:</p>
    <p>Launch an Android Virtual Device (AVD) via Android Studio, then run:</p>
    <pre><code>npm run android</code></pre>
  </li>
  <li>
    <p><strong>Run on iOS Simulator (macOS only)</strong>:</p>
    <p>Launch iOS Simulator via Xcode, then run:</p>
    <pre><code>npm run ios</code></pre>
  </li>
</ol>
<hr>
<h2>How to Run</h2>
<ul>
  <li>
    <p><strong>Development Mode</strong>:</p>
    <pre><code>npm run dev</code></pre>
  </li>
  <li>
    <p><strong>Reset Cache &amp; Start</strong>:</p>
    <pre><code>npm start -- --reset-cache</code></pre>
  </li>
</ul>
<hr>
<h2>How to Test</h2>
<p>Execute the automated test suite covering unit tests and component rendering:</p>
<ul>
  <li>
    <p><strong>Run All Tests</strong>:</p>
    <pre><code>npm test</code></pre>
  </li>
  <li>
    <p><strong>Run Tests in Watch Mode</strong>:</p>
    <pre><code>npm run test:watch</code></pre>
  </li>
  <li>
    <p><strong>Generate Test Coverage Report</strong>:</p>
    <pre><code>npm run test:coverage</code></pre>
  </li>
</ul>
<hr>
<h2>API Endpoints</h2>
<p>The mobile application communicates with the backend REST API via the following primary endpoints:</p>
<table>
  <thead>
    <tr>
      <th>Category</th>
      <th>HTTP Method</th>
      <th>Endpoint</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Auth</strong></td>
      <td><code>POST</code></td>
      <td><code>/api/v1/auth/register</code></td>
      <td>Create new student or sponsor account</td>
    </tr>
    <tr>
      <td><strong>Auth</strong></td>
      <td><code>POST</code></td>
      <td><code>/api/v1/auth/login</code></td>
      <td>Authenticate user and return JWT tokens</td>
    </tr>
    <tr>
      <td><strong>User</strong></td>
      <td><code>GET</code></td>
      <td><code>/api/v1/users/profile</code></td>
      <td>Retrieve current authenticated user profile</td>
    </tr>
    <tr>
      <td><strong>Savings</strong></td>
      <td><code>GET</code></td>
      <td><code>/api/v1/goals</code></td>
      <td>Fetch active education savings goals</td>
    </tr>
    <tr>
      <td><strong>Savings</strong></td>
      <td><code>POST</code></td>
      <td><code>/api/v1/goals</code></td>
      <td>Create a new tuition savings goal</td>
    </tr>
    <tr>
      <td><strong>Savings</strong></td>
      <td><code>PUT</code></td>
      <td><code>/api/v1/goals/:id</code></td>
      <td>Update goal target amount or target date</td>
    </tr>
    <tr>
      <td><strong>Campaigns</strong></td>
      <td><code>GET</code></td>
      <td><code>/api/v1/campaigns</code></td>
      <td>List active education crowdfunding campaigns</td>
    </tr>
    <tr>
      <td><strong>Campaigns</strong></td>
      <td><code>POST</code></td>
      <td><code>/api/v1/campaigns</code></td>
      <td>Create crowdfunding request for tuition</td>
    </tr>
    <tr>
      <td><strong>Payments</strong></td>
      <td><code>POST</code></td>
      <td><code>/api/v1/payments/charge</code></td>
      <td>Process donation or savings deposit transaction</td>
    </tr>
    <tr>
      <td><strong>Payments</strong></td>
      <td><code>GET</code></td>
      <td><code>/api/v1/payments/history</code></td>
      <td>Retrieve transaction history log</td>
    </tr>
  </tbody>
</table>
<hr>
<h2>Deployment Information</h2>
<h3>1. Android Build (APK &amp; AAB)</h3>
<p>Generate Release Bundle (AAB for Google Play Store):</p>
<pre><code>cd android
./gradlew bundleRelease</code></pre>
<p>The generated <code>.aab</code> file will be located at: <code>android/app/build/outputs/bundle/release/app-release.aab</code></p>
<p>Generate Standalone APK:</p>
<pre><code>cd android
./gradlew assembleRelease</code></pre>
<h3>2. iOS Build (IPA)</h3>
<ol>
  <li>Open <code>ios/EduFundMobile.xcworkspace</code> in Xcode.</li>
  <li>Select target device <strong>Any iOS Device (arm64)</strong>.</li>
  <li>Select <strong>Product -&gt; Archive</strong>.</li>
  <li>Upload the build to <strong>App Store Connect</strong> via Xcode Organizer.</li>
</ol>
<hr>
<h2>Known Limitations</h2>
<ol>
  <li><strong>Offline Mode Synchronization</strong>: Financial transactions and real-time campaign updates require an active internet connection. Offline actions are cached locally and synchronized upon reconnection.</li>
  <li><strong>Payment Sandbox Restriction</strong>: Payment gateway processing in local development runs in sandbox mode; real monetary transactions require production credential activation.</li>
  <li><strong>Biometric Authentication Fallback</strong>: Hardware biometric authentication (Face ID / Touch ID) falls back to PIN / Password entry on devices without biometric hardware.</li>
  <li><strong>Push Notification Permissions</strong>: Real-time push notifications require explicit user permission approval on iOS 14+ and Android 13+.</li>
</ol>
