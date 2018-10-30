/*
const React = require('react'),
      {render} = require('react-dom'),
      {Provider} = require('react-redux'),
      {createStore} = require('react-redux'),
      reducers = require('./modules'),
      routes = require('./routes');
*/
const {combineReducers} = require('redux'),
      {
        reducer: movies
      } = require('./movies');

module.exports = combineReducers({
    movies
});
/*
module.exports = render(
    (
        <Provider store={createStore(reducers)}>
            {routes}
        </Provider>
    ),
    document.getElementById('app')
);
*/