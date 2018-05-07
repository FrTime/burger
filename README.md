# Burger-Eating App

## Installing the App

#### Before running the app, the *schema.sql*  and *seeds.sql* files must be used to create a local SQL database.  Change the password in *connection.js* if your SQL server requires one.


#### The app is initialized by installing the needed packets in node with *>'npm i'*.  The app can then be run through node with *>'node server'*.

## Using the App

#### Upon running the app, two tables are created:
1.  A list of burgers that have been eaten.  These can either be deleted or recooked, which will push them into the second table.
2.  A list of burgers that have not been eaten.  These can either be deleted or eaten, which will push them into the first table.

#### The user can also add their own burgers to either list with the form at the bottom of the page.

#### Any change in burger status or the addition of a new burger will refresh all tables on the app.