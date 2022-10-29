# SMA - Social Media App

# TODO

## Front-End

- [x] Add HomePage - React
- [x] Add Login Page - React
- [x] Add Register Page - React
- [ ] Add Reset Password Page - React
- [ ] Add About Page - React

## Back-End

- [x] Add Routes - Node
- [x] Setup MongoDB - Node
- [ ] Implement Models MongoDB - Node
- [x] Connect MongoDB - Node
- [ ] Initialize MongoDB To Login & Register - Node
- [ ] Authentication - Node
- [ ] Authorization - Node

## `Note` Using <a href="https://vitejs.dev/">Vite</a> tool for React to get fast workflow

## Basic Structure of directory

> ### There are two main folder inside **SMA** folder

> 1. clinet - React Front-End
> 2. server - Node Back-End

### Follow To Get copy of project

> 1. Clone repository or download
>
> 2. Open repository inside your IDE
>
> 3. Open terminal

### For Front-End (React)

> To work with frontend and run navigate to client directory

> ```
> cd client
> ```
>
> `Use default keyword of your package manager to run project` `e.x npm / yarn / pnpm`

> ### Paste following code inside your terminal

> ```
> npm i
> ```

> ```
> npm run dev
> ```

### For Back-End (Node)

> To work with backend navigate to server directory

> ```
> cd server
> ```
>
> `Use default keyword of your package manager to run project` `e.x npm / yarn / pnpm`

> ### Paste following code inside your terminal

> ```
> npm i
> ```

> ```
> npm run dev
> ```

> ```
> https://localhost:5000
> ```

> ```
> Use res.reply() function(located in app.js) with messages utility when sending response to front end
> return res.reply(messages.custom.user_create_success, { data:'xyz'},{ authorization: newUser.sVerificationToken });
> Here first argument is status and message second is response data and third is header
> Alternatively, you can pass return res.reply(messages.success('OTP sent'), { data:'xyz'},{ authorization: newUser.sVerificationToken });
> Refer messages.js from utils
> ```

`if you faced any kind of issue while setup project, create a new issue or asked in our discord server.`

We will add more documentation as project moves forward

That's it all you want to work with project.

Happy Hacking.
