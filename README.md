MySQL, Express, React/Redux and Node Boilerplate in ES6/ES7

## Get Started

### 1. Prerequisites

- [NodeJs](https://nodejs.org/en/)
- [NPM](https://npmjs.org/) - Node package manager

### 2. Installation

Start by installing Homebrew, Node, and MySQL
Homebrew:
```
 $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Node
```
 $ brew install node
```

MySQL
```
 $ brew install mysql
```

Once you have installed MySQL you will need to log in and update the password for the root user. Run the following commands:

```
 $ mysql.server start
 $ mysql -u root -p
```


By default, your root password is empty. So press `ENTER` and you will log into a MySQL shell. We will need to update the password to `root`. To do so, run the following inside of the MySQL shell:

```
 > ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
 > CREATE DATABASE SD_DB;
 > USE SD_DB;
```

On the command prompt run the following commands:

``` 
 $ git clone https://github.com/SDHarwick/EsDee.git
 $ cd EsDee
 $ cp .env.example .env (edit it with your secret key and database information)
```

 Example configuration:

```
APP_PORT=3000
APP_HOST=127.0.0.1

NODE_ENV = development

DB_CLIENT=mysql
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=root
DB_NAME=SD_DB
DB_PORT=3306

TOKEN_SECRET_KEY=secretkeyforjsonwebtoken

LOGGING_DIR=logs
```

Then run:

```
 $ npm install
 $ npm run migrate
 ```

 Finally, start and build the application:
 
```
 $ npm run build (For development)
 $ npm run build:prod (For production)
```

List of NPM Commands:
 
```
  $ npm run lint       # linting
  $ npm run clean      # remove dist and node_modules folder and install dependencies
```

### 3. Usage

URL : http://localhost:3000/

Navigate to http://localhost:3000/swagger for the API documentation.

### 4. Useful Link
- Web framework for Node.js - [Express](http://expressjs.com/)
- JavaScript ORM  for Node.js - [Bookshelf](http://bookshelfjs.org/)
- SQL Query Builder for Postgres, MSSQL, MySQL, MariaDB, SQLite3, and Oracle - [Knex](http://knexjs.org/)
- JSON Web Tokens(jwt) - [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- Logging Library - [Winston](https://www.npmjs.com/package/winston)
- Object schema validation  - [Joi](https://www.npmjs.com/package/joi)
- API documentation using [swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc) and [swagger-ui](https://www.npmjs.com/package/swagger-ui)
- JavaScript library for building user interfaces - [React](https://facebook.github.io/react/)
- Predictable state container - [Redux](http://redux.js.org/)
- A React component library implementing Google's Material Design - [Material-UI](https://material-ui-1dab0.firebaseapp.com/)
- Redux Form - [Redux Form](http://redux-form.com/7.4.2/)
- Declarative routing for React - [React-Router](https://reacttraining.com/react-router/)
- Promise based HTTP client - [Axios](https://github.com/mzabriskie/axios)
- Code linting tool - [ESLint](http://eslint.org/)
- CI/CD [TravisCI](https://travis-ci.com)
- Server deployment - [Heroku](https://dashboard.heroku.com)
- Client Side Bundler/Builder - [Webpack 4](https://webpack.js.org/)