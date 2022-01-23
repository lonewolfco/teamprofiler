
// manager card html function

const Employee = require("../lib/Employee")

const generateManagerCard = function (manager) {
  return
`  
    
<div class="card mx-auto shadow-lg m-3" style="width: 18rem;">
<div class="card-body bg-secondary bg-gradient bg-opacity-75 text-dark">
  <h4 class="card-title fs-4 fw-bold">${manager.name}</h4>
  <h6 class="card-title fs-6 fw-bold">Manager</h6>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item"><strong>ID:</strong> ${manager.id} </li>
  <li class="list-group-item"><strong>Email:</strong> ${manager.email} </li>
  <li class="list-group-item"><strong>Office Number:</strong> ${manager.officeNum} </li>
</ul>
</div>
`

};

// engineer card html function
const generateEngineerCard = function (engineer) {
  return
  `
  <div class="card mx-auto shadow-lg m-3" style="width: 18rem;">
  <div class="card-body bg-secondary bg-gradient bg-opacity-75 text-dark">
    <h4 class="card-title fs-4 fw-bold">${engineer.name}</h4>
    <h6 class="card-title fs-6 fw-bold">Manager</h6>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><strong>ID:</strong> ${engnieer.id} </li>
    <li class="list-group-item"><strong>Email:</strong> ${engineer.email} </li>
    <li class="list-group-item"><strong>GitHub User:</strong> ${engineer.github} </li>
  </ul>
  </div>
  `
};

// intern card html function
const generateInternCard = function (intern) {
  return
  `
  <div class="card mx-auto shadow-lg m-3" style="width: 18rem;">
  <div class="card-body bg-secondary bg-gradient bg-opacity-75 text-dark">
    <h4 class="card-title fs-4 fw-bold">${intern.name}</h4>
    <h6 class="card-title fs-6 fw-bold">Manager</h6>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><strong>ID:</strong> ${intern.id} </li>
    <li class="list-group-item"><strong>Email:</strong> ${intern.email} </li>
    <li class="list-group-item"><strong>Office Number:</strong> ${intern.school} </li>
  </ul>
  </div>
  `
};




const generateHtml = ( answers ) => {
`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profiler</title>
        <!-- JavaScript Bundle with Popper -->
        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></body>
    
    </head>
    <body>
        <nav class="navbar  navbar-light bg-dark bg-gradient py-5">
            <div class="container-fluid">
              <a class="navbar-brand mx-auto text-light h1 fs-1" href="#">Team Profiler</a>
            </div>
          </nav>
    
    <!-- Employee Card Section-->
    <div class="container d-flex">
    
          <div class="row justify-content-center mt-3">
    
            <!-- cards go here -->   
    
    
            </div>
    
        </div>
    
    
    
          <script src="index.js"></script>
    </html>
    `
};

 module.exports = generateHtml;