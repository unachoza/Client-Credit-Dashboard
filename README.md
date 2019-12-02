# Nova Front-End challenge

Please implement a Nova dashboard to render credit report entries of applicants

## Deliverables

- Render a list of reports
- Add ability to archive reports
- Add ability to load more reports

## Submitting

To submit, please share your solution via Google Drive (zipped up with node_modules folder removed). You will have a three day window to complete and return the assignment once it has been sent. The assignment usually takes candidates about three hours of coding to complete.

## Backend endpoints

### /api/requests

Optional query params: count, cursor

Example: /api/requests?count=50&cursor=2010-11-12T02:18:22.094Z
The endpoint will return 50 (count) unarchived reports created after 2010-11-12T02:18:22.094Z (cursor)

### /api/requests/archive

Given the id of the report to archive in the request body, the endpoint will mark the report as archived by changing its archived column value from `false` to `true`.

## Getting started

### Get your env right

- Get NodeJS (>=8.4.0) https://nodejs.org/en/
- Verify your npm install `npm -v`

### Install app

```sh
# In root
npm install
```

### Run tests

```sh
# Run Jest tests (auto-reload)
npm test
```

### Run app

```sh
# Start backend server (auto-reload)
npm run start:server
# Start frontend dev server (auto-reload)
npm run start
```

### Randomize data

```sh
# Calls script that generates from randomuser.me
npm run db:randomize
```
# Client-Credit-Dashboard-
