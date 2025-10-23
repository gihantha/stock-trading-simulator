# Project: Stock Trading Simulator (Using Credits)

## Table of Contents
1. [Project Summary](#1-project-summary)
2. [User Authentication & Profile](#2-user-authentication--profile)
   - [US-001: User Registration](#us-001-user-registration)
   - [US-002: User Login](#us-002-user-login)
   - [US-003: View Profile](#us-003-view-profile)
3. [Stock Market Data](#3-stock-market-data)
   - [US-004: View Real-Time Stock Prices](#us-004-view-real-time-stock-prices)
   - [US-005: View Stock Details](#us-005-view-stock-details)
4. [Trading System](#4-trading-system)
   - [US-006: Buy Stocks](#us-006-buy-stocks)
   - [US-007: Sell Stocks](#us-007-sell-stocks)
   - [US-008: View Portfolio](#us-008-view-portfolio)
5. [Leaderboard & Insights](#5-leaderboard--insights)
   - [US-009: View Leaderboard](#us-009-view-leaderboard)
   - [US-010: View Transaction History](#us-010-view-transaction-history)
6. [System & DevOps](#6-system--devops)
   - [US-011: CI/CD Pipeline](#us-011-cicd-pipeline)
   - [US-012: Automated Testing](#us-012-automated-testing)
   - [US-013: Dockerized Environment](#us-013-dockerized-environment)
7. [Optional: Admin Dashboard](#7-optional-admin-dashboard)
   - [US-014: Manage Users](#us-014-manage-users)

---

## 1. Project Summary

A web application that simulates real-world stock trading using virtual credits.  
Users can register to get free credits, view live stock market data, buy/sell stocks, track portfolio performance, and compete on a leaderboard — all built with **TypeScript**, tested, and deployed through a **CI/CD pipeline**.

---

## 2. User Authentication & Profile

### US-001: User Registration
**As a new user,**  
I want to register for an account,  
So that I can start trading with free virtual credits.

**Acceptance Criteria:**
- User can register with name, email, and password.
- On successful registration, the system assigns **1,000,000 credits**.
- User receives a welcome message or email confirmation (optional).

---

### US-002: User Login
**As a registered user,**  
I want to log in securely,  
So that I can access my trading dashboard.

**Acceptance Criteria:**
- Authentication must use **JWT tokens**.
- Passwords are **hashed securely** in the database.
- Invalid credentials show appropriate error messages.

---

### US-003: View Profile
**As a logged-in user,**  
I want to view my profile information and current credits,  
So that I can see my trading balance and account details.

---

## 3. Stock Market Data

### US-004: View Real-Time Stock Prices
**As a user,**  
I want to see real-time stock prices fetched from a public API,  
So that I can make trading decisions based on real data.

**Acceptance Criteria:**
- Stock list displays current **price**, **symbol**, and **change percentage**.
- Data refreshes automatically (e.g., every 30–60 seconds).
- Use a reliable stock API (e.g., **Yahoo Finance**, **AlphaVantage**).

---

### US-005: View Stock Details
**As a user,**  
I want to click a stock to view detailed info (chart, history, etc.),  
So that I can analyze its performance before trading.

---

## 4. Trading System

### US-006: Buy Stocks
**As a user,**  
I want to buy a certain number of shares using my credits,  
So that I can simulate investing in that stock.

**Acceptance Criteria:**
- The purchase deducts the correct amount of credits from the balance.
- The user must have enough credits to complete the purchase.
- Transaction is recorded in history.

---

### US-007: Sell Stocks
**As a user,**  
I want to sell the stocks I own,  
So that I can earn credits back depending on the current market price.

**Acceptance Criteria:**
- Selling adds credits back to balance.
- Transaction is recorded in history.
- Profit/loss is calculated correctly.

---

### US-008: View Portfolio
**As a user,**  
I want to view my holdings, stock quantities, and current profit/loss,  
So that I can track how my investments are performing.

---

## 5. Leaderboard & Insights

### US-009: View Leaderboard
**As a user,**  
I want to see a leaderboard of top users by profit,  
So that I can compare my performance with others.

---

### US-010: View Transaction History
**As a user,**  
I want to view all my past buy/sell transactions,  
So that I can review my trading decisions.

---

## 6. System & DevOps

### US-011: CI/CD Pipeline
**As a developer,**  
I want to automate the build, test, and deployment process,  
So that new code changes are tested and deployed automatically.

**Acceptance Criteria:**
- Code pushed to `main` triggers **GitHub Actions**.
- The pipeline runs **linting** and **tests**.
- On success, it builds **Docker images** and deploys automatically.

---

### US-012: Automated Testing
**As a developer,**  
I want to write automated tests for key features,  
So that I can ensure the system behaves correctly as I build new features.

**Acceptance Criteria:**
- **Backend:** Jest + Supertest for unit/integration tests.  
- **Frontend:** React Testing Library / Cypress for E2E.  
- **Coverage report** generated in CI pipeline.

---

### US-013: Dockerized Environment
**As a developer,**  
I want to containerize the app using Docker,  
So that I can easily deploy it anywhere with consistent results.

---

## 7. Optional: Admin Dashboard

### US-014: Manage Users
**As an admin,**  
I want to view and manage users (ban, delete, etc.),  
So that I can maintain a fair simulation environment.

---
