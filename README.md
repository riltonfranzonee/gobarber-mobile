<h1 align="center">
    <img src="https://user-images.githubusercontent.com/58868651/77219318-88174b00-6b13-11ea-924d-1a6acdcbd939.png" />
</h1>

<p align="center">
Barbershop system that connects clients and providers - Mobile application made with React Native
</p>

💈 About GoBarber
------------------
This project is a system of a fictional barbershop called GoBarber. The full system has a [**web version**](https://github.com/riltonfranzonee/gobarber) made with ReactJS, an exclusive area for providers, where they are able to list all their appointments, change personal info and recieve notifications everytime a new appointment is created (also via email). The application also has a [**mobile version**](https://github.com/riltonfranzonee/gobarber-mobile) made with React Native, an exclusive area for clients, where they are able to create a new appointment with their favorite provider based on the available schedule. Besides that, the client is able to cancel the appointment (must be at most 2 hours before the appointment). All this system is served by a [**REST API**](https://github.com/riltonfranzonee/gobarber-api) made with Node.js 
 
 <table>
  <tr>
    <td align="center">Login Screen</td>
    <td align="center">Register Screen</td>
  </tr>
   <tr>
    <td><img width="370" height="800" src="https://user-images.githubusercontent.com/58868651/77219239-9a44b980-6b12-11ea-9eb5-ee32acdce7e4.png"></td>
    <td><img width="370" height="800" src="https://user-images.githubusercontent.com/58868651/77219241-9e70d700-6b12-11ea-9388-a29735ce1e5e.png"></td>
  </tr>
 </table>
 
 <table>
  <tr>
    <td align="center">Appointments Screen</td>
    <td align="center">Create Appointment - Select Provider</td>
  </tr>
  <tr>
    <td><img width="370" height="800" src="https://user-images.githubusercontent.com/58868651/77219242-9f096d80-6b12-11ea-836b-04279e690e36.png"></td>
    <td><img width="370" height="800" src="https://user-images.githubusercontent.com/58868651/77219243-9fa20400-6b12-11ea-9619-f7d17949da1b.png"></td>
  </tr>
 </table>

 <table>
  <tr>
    <td align="center">Create Appointment - Select Date</td>
    <td align="center">Create Appointment - Confirm</td>
  </tr>
  <tr>
    <td><img width="370" height="800" src="https://user-images.githubusercontent.com/58868651/77219244-a03a9a80-6b12-11ea-9a48-1516d27d5a36.png"></td>
    <td><img width="370" height="800" src="https://user-images.githubusercontent.com/58868651/77219245-a0d33100-6b12-11ea-9317-a4364b5287e7.png"></td>
  </tr>
 </table>
  <table>
  <tr>
    <td align="center">Profile Screen</td>
  </tr>
  <tr>
    <td><img width="370" height="800" src="https://user-images.githubusercontent.com/58868651/77219246-a16bc780-6b12-11ea-80f9-aaa16a44096e.png"></td>
  </tr>
 </table>
 
:wrench: Used technologies:
----------------------
The mobile version of the application handles with a lot of features such as data persistence, api calls and date picker. For the data persistence I found that Redux would be the best fit. I've also used other libraries and technologies to help me build this up, take a look at some of them: 

- [**React Native**](https://reactnative.dev/)
- [**Redux**](https://redux.js.org/)
- [**Redux Saga**](https://redux-saga.js.org/)
- [**Styled Components**](https://styled-components.com/)
- [**React Native Vector Icons**](https://oblador.github.io/react-native-vector-icons/)
- [**Axios**](https://github.com/axios/axios)
- [**Axios**](https://github.com/axios/axios)
- [**date-fns**](https://date-fns.org/docs/Getting-Started)
- [**Eslint**](https://eslint.org/)
- [**Prettier**](https://prettier.io/)
- [**EditorConfig**](https://editorconfig.org/)


## :information_source: How to use this project
To clone and run this application, you'll need Git, NodeJS, Yarn and Docker. 

You just need to run the following commands:

```bash
# Clone this repository
$ git clone https://github.com/riltonfranzonee/gobarber-mobile

# Go into the repository
$ cd gobarber-mobile

# Install dependencies
$ yarn

# Run the app
$ react-native run-ios
```

Make sure you have the [**REST API**](https://github.com/riltonfranzonee/gobarber-api) up and running.


:speech_balloon: Reach me
----------

[*In case you want to reach me*](https://www.linkedin.com/in/rilton-franzone-b975a7198/)



Thank you for taking a look at my project! Made with ♥
