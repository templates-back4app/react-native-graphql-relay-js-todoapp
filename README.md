
# React Native CRUD Example using GraphQL and Relay provides from Back4App.com

## 1 - Install dependencies
You can use `yarn` or `npm` to install the dependencies project

run `yarn` or `npm install`

## 2 - Back4App Keys
Before running, inside of `environtment.js` you need to place your Back4App Application Id and Client Key

- On root project, open the `environtment.js` located on `./relay/environtment` and:

Replace
```jsx
'X-Parse-Application-Id': 'X-Parse-Application-Id',
'X-Parse-Client-Key': 'X-Parse-Client-Key',
```

to

```jsx
'X-Parse-Application-Id': 'YourApplicationId',
'X-Parse-Client-Key': 'YourClientKey',
```

## 3 - Relay Compiler
Generate the relay types before start your application:

`yarn relay`

or 

`npx run relay`

## 4 - Running the Device
- Start the metro 

`yarn start`

or 

`npx react-native start`


Decide how to run accordingly with your device:

-  android 

`yarn android`

or 

- ios

`npx pod-install` to install all pods

`npx react-native run-ios`

This repo cover this doc [React Native GraphQL CRUD tutorial](https://www.back4app.com/docs/react-native/graphql/data-objects/react-native-graphql-crud-tutorial) from [back4app.com](back4app.com).
---
