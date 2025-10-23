# Project Architecture: Stock Trading Simulator

## 1. Goal

A **TypeScript full-stack application** built with:

- **Frontend:** React + TypeScript  
- **Backend:** Node.js + Express  
- **Testing:** Unit, integration, and end-to-end (e2e)  
- **CI/CD:** GitHub Actions + Docker  
- **Deployment:** Cloud platforms (e.g., Render/Railway for backend, Vercel for frontend)

---

## 2. High-Level Architecture Diagram

```
                           ┌───────────────────────────┐
                           │       FRONTEND (React)    │
                           │  - React + TypeScript     │
                           │  - Axios for API calls    │
                           │  - Auth (JWT in localStorage) │
                           │  - Charts + Leaderboard   │
                           └───────────▲───────────────┘
                                       │  REST API
                                       │  (HTTPS, JSON)
                           ┌───────────┴───────────────┐
                           │      BACKEND (Express)     │
                           │  - Node.js + TypeScript    │
                           │  - Auth (JWT)              │
                           │  - Stock API Integration   │
                           │  - Buy/Sell Logic          │
                           │  - MongoDB/PostgreSQL ORM  │
                           └───────────▲───────────────┘
                                       │
                                       │
                           ┌───────────┴───────────────┐
                           │      DATABASE LAYER        │
                           │  - MongoDB / PostgreSQL    │
                           │  - Users, Transactions     │
                           │  - Portfolio, Leaderboard  │
                           └────────────────────────────┘

                                       │
                                       ▼
                           ┌───────────────────────────┐
                           │   External Stock API       │
                           │  - AlphaVantage / Yahoo    │
                           │  - Provides real prices    │
                           └───────────────────────────┘
```

---

## 3. Repository Structure

To maintain a clean CI/CD setup and modular TypeScript environment, the app uses a **monorepo** structure.

```
stock-simulator/
│
├── frontend/                     # React + TypeScript app
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── services/             # axios API calls
│   │   └── tests/                # unit + e2e tests
│   ├── vite.config.ts
│   ├── tsconfig.json
│   ├── package.json
│   └── .env
│
├── backend/                      # Node + Express + TypeScript API
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── services/
│   │   ├── middlewares/
│   │   ├── utils/
│   │   ├── tests/                # Jest + Supertest
│   │   └── app.ts
│   ├── tsconfig.json
│   ├── package.json
│   ├── Dockerfile
│   └── .env
│
├── docker-compose.yml            # Link backend + db containers
├── .github/
│   └── workflows/
│       └── ci.yml                # CI/CD pipeline
│
├── docs/
└── .gitignore
```

---

## 4. Flow Explanation

### 4.1 Authentication Flow
1. User registers → Backend creates user and assigns **1,000,000 credits**.  
2. User logs in → Backend returns a **JWT**.  
3. JWT is stored in **localStorage** → Used for authenticated API requests.

---

### 4.2 Stock Fetching Flow
1. Frontend requests `GET /api/stocks`.  
2. Backend fetches data from an **external API** (e.g., AlphaVantage).  
3. Backend caches stock data temporarily (e.g., Redis or in-memory).  
4. Frontend displays updated stock data and refreshes periodically.

---

### 4.3 Trading Flow
1. User clicks **Buy** or **Sell** → Sends a trade request to backend.  
2. Backend:
   - Validates balance or ownership.
   - Updates user’s credits.
   - Records the transaction in the database.
3. Updated portfolio data is returned to the frontend.

---

## 5. Testing Strategy

| Test Type     | Tool                  | Example                                |
|----------------|----------------------|----------------------------------------|
| Unit           | Jest                 | `calculateProfit()` logic              |
| Integration    | Supertest            | `/api/trade/buy` endpoint              |
| End-to-End (E2E) | Cypress / Playwright | Full user flow: login → buy → portfolio |

---

## 6. CI/CD Pipeline (GitHub Actions)

**Workflow file:** `.github/workflows/ci.yml`

**Pipeline Steps:**
1. Trigger on every **push** or **pull request**.  
2. Install dependencies (frontend + backend).  
3. Run lint checks and tests.  
4. Build Docker images.  
5. *(Optional)* Auto-deploy if all tests pass.

---

## 7. Docker Setup

Each service is containerized for consistency and easy deployment.

- **backend/Dockerfile** – Builds and runs the Node API.  
- **frontend/Dockerfile** – Builds the React app.  
- **docker-compose.yml** – Links together:
  - Backend  
  - Frontend  
  - Database (MongoDB or PostgreSQL)

---

## 8. Deployment Plan

| Component | Platform | Description |
|------------|-----------|-------------|
| **Backend** | Render / Railway | Auto-deploy on Git push (Dockerized build). |
| **Frontend** | Vercel | Deploys React + TypeScript app from main branch. |
| **Database** | MongoDB Atlas / NeonDB | Managed cloud database. |

---

## 9. Recommended Libraries

### Backend
- express  
- mongoose / pg  
- jsonwebtoken  
- bcryptjs  
- axios  
- jest, supertest  
- ts-node-dev  
- dotenv  
- cors  

### Frontend
- react  
- typescript  
- vite  
- axios  
- react-router-dom  
- react-testing-library / vitest / jest  
- chart.js / recharts (for stock visualization)  
- tailwindcss (for styling)

---

## 10. Development Phases (Summary)

| Phase | Task | Focus |
|--------|------|--------|
| **1** | Setup backend + frontend (TypeScript, lint, structure) | TypeScript basics |
| **2** | Implement authentication & credits system | Backend + API |
| **3** | Integrate live stock API | Async + external APIs |
| **4** | Implement buy/sell & portfolio logic | Data modeling |
| **5** | Add unit, integration & e2e tests | Testing |
| **6** | Configure CI/CD pipeline with Docker | DevOps |
| **7** | Deploy to cloud | Deployment |

---
