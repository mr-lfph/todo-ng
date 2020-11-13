# To Do App  
### __todo-ng__ App angular 9  with firebase 


### create a new project named todo-ng 

create a new project using command `ng new todo-ng` Run the Peoject by `ng serve`

install bootstrap `npm i bootstrap` add "node_modules/bootstrap/dist/css bootstrap  min. css" in styles angular.json file. create componet under layouts folder 

`ng g c layouts/footer` create anotther component name category into root folder `ng g c category`

 Ex: g generate c component layouts folder and footer is component name

 go app.component file and call here `<app-navbar></app-navbar>` component 
 this `<app-navbar>` coming from selector attributes of navbar.component.ts file.

[cssmatic](cssmatic.com/box-shadow) for create  automatic css 

install font awesome  `npm install --save @fortawesome/fontawesome-free` add path in angular.json also `"node_modules/@fortawesome/fontawesome-free/css/all.css"`

install firebase `ng add @angular/fire`

create service `ng g s service/category`
Toastr `npm i ngx-toastr`
Deploy
`ng build --prod` then go firebase cli then deploy `npm install -g firebase-tools` local mechine to install firebase globally.then go dist folder and rename published folder as `public` and go cmd on that folder 
`firebase login` then `firebase init` then some option here select deploy by pressing `space bar` then select existing project and some options will come complete those using y/n finally `firebase deploy` 









 
 
