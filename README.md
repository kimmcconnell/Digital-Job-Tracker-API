# Digital Job Tracker API
#### Express / Knex / MySQL back end for Digital-Job-Tracker project
_Published_ **May 9 2019**<br>
_Author_  **Kimberly McConnell**
<hr/>

1. [Set Up Guide](#set-up-guide)

## **Set Up Guide**
_This guide will tell you how to clone down the repo and get it running with a database. It assumes you have brew installed._
***

### Clone Repo
Clone this repository and run
```bash
$ npm install
```

###  Set up MySQL on your local host

If you do not already have MySQL installed, run from anywhere on your computer:
```bash
$ brew install mysql
```
 If you want to check if you have it aready, run the following and see if mysql is in the list:
```bash
$ ls usr/local/Cellar
```

Now that we have MySQL, we need to start up the server. Run 
```bash
$ brew services start mysql
```

Unless you already have a configuration, log into the MySQL client with: 

```bash
$ mysql -u root
```
`-u` refers to the user, and `root` is the default user. 

You'll need a database for the data to go in. You can see MySQL's database list with

```bash
$ show databases;
```

Add the kanban_local database to the list by running: 
```bash
$ create database kanban_local;
```

**Knex and MySQL passwords** <br>
I have not yet found a way to run Knex without a password for the MySQL server. Knex with automatically try to send one, so if there isn't actually a password sent, the server will throw an error and fail to connect. I got around this by setting the password on my local MySQL server to 'password', which solved the problem. To do this, _in your MySQL client_, run 
```bash
$ ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
```
and this will set the password of `root` to `password`. 

If you already have a password on your MySQL server that is _not_ `password`, or you have a user name that isn't `root`, instead go into the knexfile.js file and change the `user: 'root'` and/or `password: 'password'` line to reflect your login info. 

#### Knex Migration for data table
To set up a structured data table in the kanban_local database, run:
```bash
$ knex migrate:latest
```
To populate the table with seed data, run: 
```bash
$ knex seed:run
```

## **To use**
To use with the front-end:
Clone the api branch of my Digital-Job-Tracker [here](https://github.com/kimmcconnell/Digital-Job-Tracker). <br>
```bash
$ npm install
$ npm run start
```
<br>
<br>
To use without a front end, you can play with the data postman.
 <br>
 
**Make a GET request** <br>
Make a get request to http://localhost:3000/jobs in postman to see all the data in the table by selecting "GET".
 <br>

**Make a POST request** <br>
Make a post request to http://localhost:3000/jobs in postman. After selecting "PUT", go to the Body tab and click the option for x-www-form-urlencoded to enter values in as key value pairs, or select raw to enter the data as objects. The possible keys are <br>
title<br>
description<br>
lane_id<br>
job_type<br>
due_date<br>
_None of these are necessary, so a put request should work without all keys._

 <br>

**Make a PUT request to edit a row** <br>
Do the same thing as a post request expect select "PUT". Use http://localhost:3000/jobs/:**id** where **id** is the id of the job you row you want to alter. For instance, if you use http://localhost:3000/jobs/3, you'll be altering the third job in the list. 

