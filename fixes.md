
All the listed fixes here have been moved to Click-up and split into relevant tasks. Please choose tasks there and proceed.

- On initial load (fresh bootstrapped repo), display "There are no fights right now."//done//
- When in production there should not be any console.logs. \/Done/\
- Remove CORS in production (CROSS origin resource sharing)
- separate admin and user routes in two files./\Done\/
- Separate the auth middlewares into a modules/auth.js
- Add timestamp in all models/\Done\/
- In PredictionSchema, use Enum for "type"/\Done\/
- In ResultSchema, also save "fightId"/\Done\/
- Put validation in all controllers.
- rename "editEvent" to "updateEvent"/\Done\/
- Create, Show, Update, Delete, List
- PredictionController -> Create or Update, delete a prediction make sure that its before the fight
- Move updateScore to either helper/modules/services

* Production Environment Variables.

## Frontend

- After signup, show a message that the user is signed up - if error also show corresponding message.
- Add Frontend validation on all forms

- Split reducers - Events - Users - Players - Fights - Use combineReducer to combine all

- EventCards move all the calculation (Event sorting) to either action or the callback in the action.
