# Full Stack Developer Challenge
Fa-Lin (Roy) Wang

## Table of Contents
- Requirements
- Progress
- Challenge Scope

## Project Description
I create a CRUD employee performance review website using React, Express, Node.js, MySQL, and Tailwind CSS. The website allows users to create new accounts and stores hashed information using bcrypt on the database using MySQL. The front end is created using React.js and React Hook, cooperating with the utility-first CSS framework, and it is responsive and mobile-friendly. The backend is written in Node.js ES6.

## How to Run
- Local on Mac
1. First, you would need to install the dependencies with `npm install` in both server and client side.
2. For client, move to `/client` and run `npm start`, the default is run on [port 3000](http://localhost:3000/).
3. For server, open another terminal tap to `/server` and run `npm start`, the default is run on port 5000
4. When you open them successfully, you should see the screen like below.

## How to Use
You can sign up using username (required), email (required) and password more then 6 digits.
![](assets/signup.png)

You can view the list of employees with the button "View All Employees" below.
You can also update the usernames or delete users.
![](assets/view.png)

## Requirements
Design a web application that allows employees to submit feedback toward each other's performance review.

*Partial solutions are acceptable.*  It is not necessary to submit a complete solution that implements every requirement.
### Admin view
* Add/remove/update/view employees
* Add/update/view performance reviews
* Assign employees to participate in another employee's performance review

### Employee view
* List of performance reviews requiring feedback
* Submit feedback

## Progress
 - [x] User authentication
 - [x] Add employees
 - [x] remove employees
 - [x] update employees
 - [x] List of employees

## Challenge Scope
* High level description of design and technologies used
* Server side API (using a programming language and/or framework of your choice)
  * Implementation of at least 3 API calls
  * Most full stack web developers at PayPay currently use Java, Ruby on Rails, or Node.js on the server(with MySQL for the database), but feel free to use other tech if you prefer
* Web app
  * Implementation of 2-5 web pages using a modern web framework (e.g. React or Angular) that talks to server side
    * This should integrate with your API, but it's fine to use static responses for some of it 
* Document all assumptions made
* Complete solutions aren't required, but what you do submit needs to run.

## Reference
- [Tailwind Starter Kit by Creative Tim](https://www.creative-tim.com)
