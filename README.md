# UseWalter Technical Test

## How to run the project

1. Clone the repo <br />
2. cd into useWalter/adminfrontend and run npm start <br />
    This will start the front end to be used at the front desk of the building
3. cd into useWalter/mobilefrontend and run npm start <br />
    This will start the front end to be used on mobile
4. cd into useWalter/backend and run node server.js to start the backend server

## Functionality

When a courier arrives, they can see the administator panel at the front desk where they can hit "deliver package" which will send a "notification" to the corresponding unit of the building. <br />
Once the package has been delivered, the user can login and will see if they have any packages waiting for them at the front desk. <br />
They can show this to the front desk from where the administrator can go into the admin panel at the top right of the admin frontend and confirm that the resident has picked up that package. <br />
This will delete the package from the database and remove the notification on the user's "phone" and from the admin front end's table of packages.

## Tech Stack & reasoning
React <br />
Node.js  <br />
Express <br />
Amazon S3 <br />
Babel <br />
Webpack <br />

I decided to stick with technology that I was familiar with given the timeframe and demonstrate my knowledge this way rather than implementing tech I wasn't familiar with and potentially not having a finished product to show for.

However knowing some basic SQL queries, I can see how having a relational DB with GraphQL would work better than a simple Node server with Amazon S3 database. Having to pull multiple objects by sending one query at a time AWS isn't as efficient.

Also as I was figuring out my back end and was changing a lot of object structures, I decided to not use Typescript for the time being, with slightly more time I would go back and start adding types to my objects to be able to better follow the flow and easily debug.

Given more time with the project I would have looked into using PostgreSQL as a DB as well as React Native.




