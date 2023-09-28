# About this repo
This is a repo for debugging why `cy.click()` doesn't work in a certain situation.

# How to run
## Nextjs
Run this on the root directory of this repo.
```
npm install
npm run build
npm run start
```
## Cypress
Move to cypress directory then run this.
```
npm install
npm run cypress:open
```

# How to reproduce the issue
When you run   `npm run cpyress:open`, you can see cypress browser window.
Click [debug.cy.ts](/cypress/cypress/e2e/debug.cy.ts) and you can see the test code.

