// Import Cypress types for global recognition
/// <reference types="cypress" />

// Import custom commands
import './commands'

// Handle uncaught exceptions in Cypress tests
// Ignore "Cannot use namespace 'Cypress' as a value errors (common in Vite)"
Cypress.on('uncaught:exception', (err) => {
  // Ignore "process is not defined" errors (common in Vite)
  // Ignore "Cannot use namespace 'Cypress' as a value"
  if (err.message.includes('process is not defined')) {
    return false
  }
})
