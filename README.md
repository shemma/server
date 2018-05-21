# Full Stack Application

Server : Node JS
Client: React + Redux
DB : Mongo

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for Production Development and testing purposes.

### Prerequisites

```
Node v8.7.0
Npm  v5.4.2
Heroku Account - deployment server
Mlab Account - Mongo online DB
Stripe Account - Billing
Google Auth API
```

### Installing

Installing and running Development ENV

```
1. Download solution.
    a. run npm install under /server
    b. run npm install under /server/client
2. Configure 'dev.js' file under server/config.
    a. insert the required keys (Ref: 'prod.js')
3. npm run dev (will load Server + Client)
    a. Server : localhost:5000
    b. client : localhost:3000 (with proxy forwarding to 5000)
```

Installing and running Production ENV

```
1. Download solution.
2. In Heroku Account configure all of the required ENV Variables (Ref: 'prod.js')
3. Create Remote connection to your heroku git repo
4. push the project
5. go to Heroku URI
```
