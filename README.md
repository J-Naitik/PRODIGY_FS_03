# PRODIGY_FS_03
----------------------------------------------
Make sure you have the following installed:
----------------------------------------------
Node.js (version 14 or later)
npm
MongoDB (running locally or accessible remotely)

------------------------------------------------
Setup MongoDB
-------------------------------------------------
Start your local MongoDB server.
Open the file named init.js.
Set up your MongoDB connection URL in init.js and other files where required.
Example: mongodb://localhost:27017/your-database-name

-----------------------------------------------------

Before running the app, insert the initial data into your MongoDB by running:
node init.js

This will populate your local database with the necessary initial data.

--------------------------------------------------

Start the Server

After inserting the data, start the backend server by running:
node app.js



+-----------------------------------------------------------------------------------+
| Ensure that MongoDB is running locally before executing any scripts.              |          
|                                                                                   |
| If using a remote MongoDB instance, update the connection URL accordingly.        |  
|                                                                                   |
| Re-run init.js if you modify the initial data setup.                              |
+-----------------------------------------------------------------------------------+
