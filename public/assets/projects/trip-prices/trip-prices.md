![](main.png)

# Overview

This is actually the first project I've made that wasn't for myself. My dad likes to track the prices of vacations, which he gets from one compilated source online. He asked me to automate the process of collecting this data, and I thought it would be a good excuse to make a fullstack app.

# Functionality

This app is made of a few components, the first being the web scraping, to get the data. I had to learn how to get the data into a SQL database, but turns out (as with most things), this was pretty simple with Python. Secondly, I made a backend to serve various web requests in Django. This used the database to serve the collected data to API requests. Lastly, I made a frontend in React to get the web requests and display the data.

# Usage

Currently, I have this running on a simple web server that I have setup in my dad's office, so every day it scrapes the data and can be displayed to anyone on our home network.

# Next Steps

As with most of my fullstack projects, this is not easy to make public facing, because I'm too cheap to pay for hosting. However, I've recently learned more about microprocessors and Raspberry Pi's, and would love to get a cheap webserver running on a pi and make it accessible to the greater web.
