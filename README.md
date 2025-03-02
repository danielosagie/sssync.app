# sssync - Inventory Sync & Marketplace

## Overview
sssync is a platform for syncing inventory across multiple marketplaces and creating shared inventory marketplaces. It provides real-time inventory management, order automation, and local partnership opportunities.

## Features
- **Real-time inventory sync** across Shopify, Square, Clover, and Amazon
- **Exclusive marketplace** for local partnerships
- **Automated order management**
- **Advanced analytics** for inventory and sales

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/sssync.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add required variables for stack blitz auth but you won't need it for much else (e.g., `NEXT_PUBLIC_STACK_PROJECT_ID`, `STACK_SECRET_SERVER_KEY`, `NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY`) 

### Running the Project
- Development:
  ```bash
  npm run dev
  ```
- Production build:
  ```bash
  npm run build
  npm start
  ```

## Tech Stack
- **Frontend**: Next.js, TailwindCSS
- **Backend**: Node.js, Vercel Edge Functions
- **Analytics**: PostHog
- **Forms**: Fillout
- **Deployment**: Vercel

## Tracking & Analytics
- **PostHog** is used for tracking user interactions, including:
  - CTA clicks
  - Form completion times
  - Waitlist signups

## Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## License
MIT License. See `LICENSE` for more details.

## Contact
For support or inquiries, email support@sssync.app.
