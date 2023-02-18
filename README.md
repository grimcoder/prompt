## Background

We're working on a spice blend application. We have a single page React app that we've started and we would like to enhance this application in a number of ways.

## Getting Started

Run "npm install" and then "npm start". This should install the application in its entirety, open a webpage to localhost:3000, and watch for any of your changes in order to hot reload the page. You'll need node/npm installed (hopefully you have those already...), and it should work. If you run into troubles, consider those a challenge, and document what you needed to do to get the application running.

## Tasks

Feel free to add any libraries/dependencies/etc. Please explain why you picked those dependencies. Existing home route does some good work of fetching a list of spices and blends and then having a basic details page (data not super factual), for each spice. We need to accomplish the following items:

- Blend details page correctly lists the name of all included spices on first load.
- State management between pages, so as not to re-request data.
- Load a "blend of blend" (2nd, or 3rd blend) listing all spices included in that blend and child blends.
- Add new blend of blend to DB (form)
- One unit test.

## Technical Background

MirageJS is utilized to mock the backend and to allow us to have full stack interactions. You'll be able to query against those requests as if there was an actual API service on the backend. If you're so interested, you may even add/alter/research some of those mocked endpoints in the backend folder.

NOTE: Network requests will get logged in the console, and will not show up in your network request tab within dev tools.

## How to submit?

Zip your solution and respond to the email that you received this package to.

## Notes

Use this area for your notes and decisions:
