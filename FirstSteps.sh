#Script to install the first steps in Express
#To execut this script put on your terminal: ./FirstSteps.sh


npm init
npm install express --save
#It is optional if is not installed.Line below
#npm install -g nodemon
npm install --save-dev nodemon
npm i morgan

#Folder strcuture


mkdir public
cd public
mkdir views css
cd css
touch main.css about.css
cd ../../


#To run it into node js and if you want chalk uncomment the next line
#npm install --save chalk
