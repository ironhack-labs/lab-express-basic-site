![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | Express Basic Website

## Introduction

Pick a person that you admire and build a website that shares some basic information about them. They can be a writer, a musician, a celebrity, or someone you know personally.

You should use `express` to create your app, build the routing logic with the built-in app routing methods, and serve static content for every request.

## Requirements

- Fork this repo
- Clone this repo

## Submission

- Upon completion, run the following commands:

  ```bash
  git add .
  git commit -m "Solved Lab"
  git push origin master
  ```

- Create Pull Request so your TAs can check up your work.

## Instructions

**Your Website should have (at least) 3 pages:**

1. A **Home** page, that welcomes the visitor and links to the other pages on the website.
2. An **About** page, that shares some basic information about the person.
3. A **Works** page, where you showcase some of the work of the person you chose.
4. Bonus: A **Photo Gallery** page, displaying some pictures of the person/their work.

You should go through the following steps:

1. Run `npm init -y` to create a package.json file.
2. Run `npm install express` to install the Express package.
3. Create a `views/` directory that will hold your `.html` files.
4. Create a `public/` directory that will hold other static files, such as your CSS stylesheets, scripts and images.
5. Build your Express app in `app.js`.
6. Polish your HTML, stylesheets and scripts.

Happy coding! 💙



## FAQs


<details>
  <summary>I am stuck and don't know how to solve the problem or where to start. What should I do?</summary>


  If you are stuck in your code and don't know how to solve the problem or where to start, you should take a step back and try to form a clear question about the specific issue you are facing. This will help you narrow down the problem and come up with potential solutions.


For example, is it a concept that you don't understand, or are you receiving an error message that you don't know how to fix? It is usually helpful to try to state the problem as clearly as possible, including any error messages you are receiving. This can help you communicate the issue to others and potentially get help from classmates or online resources. 


Once you have a clear understanding of the problem, you will be able to start working towards the solution.

  <br>

  [Back to top](#faqs)

</details>


<details>
  <summary>I got the error: "Cannot find module" Node.js". How can I resolve it?</summary>


  The error "Cannot find module" in a Node.js application means that the module you are trying to import or use does not exist in your project or cannot be found by Node.js.


There are a few things you can try to resolve the issue:


1. **Dependencies are not installed**: Make sure that all dependencies are installed.

   To do this, run the command `npm install` in the root folder of your project.

   This will install all of the dependencies listed in the project's `package.json` file, and ensure that all of the modules that your Node'js application requires are available.
   <br>

2. **Module is not installed**: Make sure that the *package* you are trying to use is listed in the project's `package.json` and that it is installed.

   To do this, run the command `npm install <package_name>`, replacing the `<package_name>` with the name of the package.

   This will add the package to the list of dependencies in the `package.json` file, and install it in the project.
   <br>

3. **Module is not imported:** Make sure that you've imported the module/package correctly and that the `require` statement is spelled correctly and available in the correct place in your code.
   <br>

4. **Wrong file path:** If you are importing another file as a module, make sure that the file you are trying to require is located in the correct folder and that you are using the correct file path.
   <br>

5. **Wrong module/package name:** Check the spelling of the package name you are trying to import.

<br>



  <br>

  [Back to top](#faqs)

</details>


<details>
  <summary>Why are my CSS styles not loading after linking the stylesheet?</summary>


  There are a few reasons why your CSS styles might not be loading after linking the stylesheet:



1. **Incorrect file path**: Make sure that the file path for the stylesheet in the `link` tag of your Handlebars template is correct. If the path is incorrect, the browser will not be able to locate the stylesheet and the styles will not be applied.

   <br>
   For example, if the file structure of your project is as follows:

   ```
   - views/
       - layout.hbs
       - index.hbs
   
   - public/
       - stylesheets/
           - style.css
   ...
   ```

   <br>
   The correct file path for the stylesheet in the `link` tag of the `layout.hbs` file would be:

   ```html
   <link rel="stylesheet" href="/stylesheets/style.css">
   ```

   <br>***Important*:** The `href` path starts with a `/`, representing the path starting from the base folder where the static files are being served from, in this case the `public/` folder.

   <br>

2. **Incorrect file name:** Make sure that you are refering to the file by its right name in the `href` of the `link` tag.
   <br>

3. **Middleware not configured correctly**: Make sure that you have the `express.static` middleware, that serves static filescorrectly configured in your Express app and that the right folder path and name is specified. If this middleware is not set up correctly, the server will not send the stylesheet when requested.
   <br>

4. **Restart the server:**  Sometimes, even if you made the correct changes, the browser might still be loading an old version of the file. You should try restarting your Express server. This will ensure that the new changes are loaded and being served by the server, making sure the browser will load the most recent version of the stylesheet."

<br>

  <br>

  [Back to top](#faqs)

</details>


<details>
  <summary>Why are my images not loading/displaying on the page?</summary>


  There are a few reasons why your images might not be loading after linking the file:


1. **Incorrect file path**: Make sure that the file path for the image in the `img` tag of your Handlebars template is correct. If the path is incorrect, the browser will not be able to locate the stylesheet and the styles will not be applied.

   <br>
   For example, if the file structure of your project is as follows:

   ```
   - views/
       - layout.hbs
       - index.hbs
   
   - public/
       - images/
           - dog.jpg
   ...
   ```

   <br>
   The correct file path for loading the image in the `index.hbs` file would be:

   ```html
   <img alt="dog" src="/images/dog.jpg" />
   ```

   <br>***Important*:** The `src` path starts with a `/`, representing the path starting from the base folder where the static files are being served from, in this case the `public/` folder.

   <br>

2. **Incorrect file name:** Make sure that you are refering to the file by its right name in the `src` of the `img` tag.
   <br>

3. **Middleware not configured correctly**: Make sure that you have the `express.static` middleware, that serves static files correctly configured in your Express app and that the right folder path and name is specified. If this middleware is not set up correctly, the server will not send the images when requested.
   <br>

4. **Restart the server:**  Sometimes, even if you made the correct changes, the browser might still be loading an old version of the file. You should try restarting your Express server. This will ensure that the new changes are loaded and being served by the server.

<br>

  <br>

  [Back to top](#faqs)

</details>


<details>
  <summary>What is the difference between the .html and .hbs files?</summary>


  An `.hbs` file is a Handlebars template file. Handlebars is a templating library, used on the server side in Node.js to generate HTML pages from template files. Handlebars allows you to write templates that are more expressive and readable than plain HTML, and it also allows you to reuse code. Handlebars uses double curly brace `{{ }}` syntax to specify placeholders for data in templates.



So in short, `.hbs` is a format of the Handlebars template files and `.html` is the end format and the file generated after the `.hbs` template has been processed.


  <br>

  [Back to top](#faqs)

</details>


<details>
  <summary>My links are not working properly. Should I use a relative or an absolute path?</summary>


  When linking to other pages within your Express app, as a general rule you should use relative paths that start with a forward slash `/`.

This way you ensure that the links will work correctly both in your development environment and when the app is deployed.

<br>

For example, instead of linking to a page with an absolute path like this:

```html
<a href="http://yourdomain.com/contact"> Contact </a>
```

You should use a relative path starting with a forward slash `/` like this:

```html
<a href="/contact"> Contact </a>
```

<br>



If you are embedding values in your Handlebars template, you should still use the relative path that start with a forward slash `/` like this:

```handlebars
<a href="/projects/{{id}}" > About </a>
```

<br>


  <br>

  [Back to top](#faqs)

</details>


<details>
  <summary>I got the error "Error: listen EADDRINUSE: address already in use". How do I fix it?</summary>


  This error means that the port is taken by another process that is still running on that port. 

To fix the issue, you need to kill the process using the port and then run the command again. Here's how to do it:



#### On Mac/Linux

To kill the process running on the port `3000`, run the following command in the terminal:

```bash
sudo kill -9 $(lsof -t -i:3000)   
```

> **Important:** Replace the above example port *3000* with the port number of the process you are trying to kill.

<br>



#### On Windows

##### 1. Using the Task Manager

To kill the running process on Windows using the Task Manager do the following:

1. Open the **Task Manager** by pressing: **<kbd>Ctrl</kbd>** + **<kbd>Shift</kbd>** + **<kbd>Esc</kbd>** 
2. Find the Node process you want to terminate.
3. Right-click and select **End Task**

<br>



##### 2. Using Command Prompt

To kill the running process on Windows using the Command Prompt do the following:

1. Open the windows **Start** menu

2. Search for **CMD** in the search bar

3. In the search results, right-click on **Command Prompt** and select **Run as administrator**. This will open the Command Prompt terminal.

4. In the Comman Prompt terminal, run the following command to find the process ID:

   ```bash
   netstat -ano|findstr "PID :3000"
   ```

   > If the process happens to be running on another port, simply replace `3000` with the number the port number the process is running on.

   This will return the process id (PID). You should then run the following command using the process id (PID) you got in the previous step to terminate the process:

   ```bash
   taskkill /PID 12345 /f
   ```

   > **Important:** Replace the above example PID *12345*, with the process id (PID) you got in the previous step.


<br>



  <br>

  [Back to top](#faqs)

</details>


<details>
  <summary>I got the error "Port is already in use". How do I fix it?</summary>


  This error means that the port is taken by another process that is still running on that port. 

To fix the issue, you need to kill the process using the port and then run the command again. Here's how to do it:



#### On Mac/Linux

To kill the process running on the port `3000`, run the following command in the terminal:

```bash
sudo kill -9 $(lsof -t -i:3000)   
```

> **Important:** Replace the above example port *3000* with the port number of the process you are trying to kill.

<br>



#### On Windows

##### 1. Using the Task Manager

To kill the running process on Windows using the Task Manager do the following:

1. Open the **Task Manager** by pressing: **<kbd>Ctrl</kbd>** + **<kbd>Shift</kbd>** + **<kbd>Esc</kbd>** 
2. Find the Node process you want to terminate.
3. Right-click and select **End Task**

<br>



##### 2. Using Command Prompt

To kill the running process on Windows using the Command Prompt do the following:

1. Open the windows **Start** menu

2. Search for **CMD** in the search bar

3. In the search results, right-click on **Command Prompt** and select **Run as administrator**. This will open the Command Prompt terminal.

4. In the Comman Prompt terminal, run the following command to find the process ID:

   ```bash
   netstat -ano|findstr "PID :3000"
   ```

   > If the process happens to be running on another port, simply replace `3000` with the number the port number the process is running on.

   This will return the process id (PID). You should then run the following command using the process id (PID) you got in the previous step to terminate the process:

   ```bash
   taskkill /PID 12345 /f
   ```

   > **Important:** Replace the above example PID *12345*, with the process id (PID) you got in the previous step.


<br>


  <br>

  [Back to top](#faqs)

</details>


<details>
  <summary>I got the error "Refused to apply style ... ('text/html') is not a supported stylesheet MIME type". What should I do?</summary>


  This error most commonly occurs when the browser attempts to load a resource (i.e., stylesheet) but the server instead returns an HTML page. For example, if there is an issue with the file path and server is unable to serve the file, it may return a 404 html page.


There are a few things you should look at to troubleshoot this:

1. **Try accessing the file directly:** To verify that the server is returning an HTML page instead of the requested file, copy the file path and try to access the file directly from a new browser tab.
   <br>

2. **Check the file path**: Make sure that the file path used is correct and that the file actually exists in that location. If there is a typo or error in the file path, the server will not be able to find the file.
   <br>

3. **Check the static files middleware configuration**: Check that your `express.static` middleware, that serves static files, is correctly configured and that the right folder path and name is specified. If this middleware is not set up correctly, the server will not send the images when requested.  

   <br>



  <br>

  [Back to top](#faqs)

</details>


<details>
  <summary>I am getting an error: "not defined". How do I fix it?</summary>


  The "ReferenceError: variable is not defined" error in JavaScript occurs when you try to access a variable or a function that has not been defined yet, or is out of scope. 



To fix the issue, check that you have defined the variable or function that you are trying to use and double-check the spelling to make sure you are using the correct name.



In case that the variable or a function is defined in another file, make sure that the file has been imported or loaded correctly.
<br>

  <br>

  [Back to top](#faqs)

</details>


<details>
  <summary>I am unable to push changes to the repository. What should I do?</summary>


  There are a couple of possible reasons why you may be unable to *push* changes to a Git repository:

1. **You have not committed your changes:** Before you can push your changes to the repository, you need to commit them using the `git commit` command. Make sure you have committed your changes and try pushing again. To do this, run the following terminal commands from the project folder:

   ```bash
   git add .
   git commit -m "Your commit message"
   git push
   ```


2. **You do not have permission to push to the repository:** If you have cloned the repository directly from the main Ironhack repository without making a *Fork* first, you do not have write access to the repository.
   To check which remote repository you have cloned, run the following terminal command from the project folder:

   ```bash
   git remote -v
   ```

If the link shown is the same as the main Ironhack repository, you will need to fork the repository to your Github account first, and then clone your fork to your local machine to be able to push the changes.

Note: You may want to make a copy of the code your have locally, to avoid losing it in the process.


  <br>

  [Back to top](#faqs)

</details>

