# JSON_PLACEHOLDER_PHOTOS_TEST

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Problem Statement

We are given an [API](http://jsonplaceholder.typicode.com/photos) which would return us the albumId and the meta of the images we request. The API has pagination implemented which would help us with pagination on client.
We need to make a table view of the results where the user would be able to view, delete and update each row

As of now I am not able to find any post resource for photos at the given API. So the edited picture would be available for a single session
For Optimizing requests we would be caching previous requests in a hashmap. So retriving data would be faster and we don't need to request a lot of data
The cache would be application memory
Let's get to coding it

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
