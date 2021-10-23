API

- https://rapid-api5247.herokuapp.com/api/contacts

- npx create-react-app my-app --template redux

Add Style

```code
 yarn add react-bootstrap bootstrap@5.1.3

 src/index.js
 import 'bootstrap/dist/css/bootstrap.min.css';

 public/index.html
 <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

<script
  src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
  crossorigin></script>

<script
  src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin>
</script>

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>

```

> Create Slice Reducer and Actions
Instead of creating many folders and files for Redux (actions, reducers, types,…), with redux-toolkit we just need all-in-one: slice.

A slice is a collection of Redux reducer logic and actions for a single feature.

For creating a slice, we need:

name to identify the slice
initial state value
one or more reducer functions to define how the state can be updated
Once a slice is created, we can export the generated Redux action creators and the reducer function for the whole slice.

Redux Toolkit provides createSlice() function that will auto-generate the action types and action creators for you, based on the names of the reducer functions you provide.

- We’re gonna import ContactService to make asynchronous HTTP requests with trigger one or more dispatch in the result.We also need to use Redux Toolkit createAsyncThunk which provides a thunk that will take care of the action types and dispatching the right actions based on the returned promise.
## createAsyncThunk

- A function that accepts a Redux action type string and a callback    function that should return a promise. It generates promise lifecycle action types based on the action type prefix that you pass in, and returns a thunk action creator that will run the promise callback and dispatch the lifecycle actions based on the returned promise.
- parameter: types,payload creater,Option object

## Create Redux Store
- The Redux Toolkit configureStore() function automatically:enable the Redux DevTools Extension.sets up the thunk middleware by default, so you can immediately write thunks without more configuration.In the previous part, we exported contact reducer from contactSlice. Let’s import it, and pass it to configureStore():





