Running the API
Install dependencies:

npm install express body-parser

Start the server:

npm start
Server runs at: http://localhost:3000

Testing with Postman
You can test the API using Postman. Create one request for each method as described below.

1. GET – Get all tasks
   Method: GET

URL: http://localhost:3000/tasks

Body: none

Click Send

Response: You’ll get the list of all tasks in JSON.

2. GET – Get a single task
   Method: GET

URL: http://localhost:3000/tasks/1

Click Send

Response: JSON for that task.

3. POST – Create a new task
   Method: POST

URL: http://localhost:3000/tasks

Headers:

Content-Type = application/json

Body: Choose raw, type JSON:

{
"title": "Buy milk"
}
Click Send

Response: The new task with an id.

4. PUT – Update a task
   Method: PUT

URL: http://localhost:3000/tasks/1

Headers:

Content-Type = application/json

Body: raw JSON:

{
"title": "Learn REST API deeply",
"done": true
}
Click Send

Response: Updated task.

5. DELETE – Remove a task
   Method: DELETE

URL: http://localhost:3000/tasks/2

Click Send

Response: Status 204 No Content (empty body).

