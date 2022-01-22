
// manager card html function

const generateManagerCard = function (manager) {
  return
`  
<div class="card mx-auto shadow-lg" style="width: 18rem;">
  <div class="card-body bg-secondary bg-gradient bg-opacity-75 text-dark">
    <h5 class="card-title p-3 fs-4 fw-bold">${manager.name}/h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><strong>ID:</strong> ${manager.id}</li>
    <li class="list-group-item"><strong>Email:</strong> ${manager.email} </li>
    <li class="list-group-item"><strong>Office Number:</strong> ${manager.officeNum}</li>
  </ul>
</div>
`

};

// engineer card html function
const generateEngineerCard = function (engineer) {
  return
  `
  <div class="mt-4">
  <div class="card shadow-lg mx-auto" style="width: 18rem;">
    <div class="card-body bg-secondary bg-gradient bg-opacity-50 text-dark">
      <h5 class="card-title p-3 fs-4 fw-bold">${engineer.name}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><strong>ID:</strong> ${engineer.id} </li>
      <li class="list-group-item"><strong>Email:</strong> ${engineer.email} </li>
      <li class="list-group-item"><strong>GitHub:</strong> ${engineer.github} </li>
    </ul>
  </div>
</div>
  `
};

// intern card html function
const generateInternCard = function (intern) {
  return
  `
  <div class="mt-4">
  <div class="card shadow-lg mx-auto" style="width: 18rem;">
    <div class="card-body bg-secondary bg-gradient bg-opacity-50 text-dark">
      <h5 class="card-title p-3 fs-4 fw-bold">${intern.name}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><strong>ID:</strong> ${intern.id} </li>
      <li class="list-group-item"><strong>Email:</strong> ${intern.email} </li>
      <li class="list-group-item"><strong>School:</strong> ${intern.school} </li>
    </ul>
  </div>
</div>

  `
};


const generateHtml = ( answers ) => {

    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profiler</title>
    </head>
    <body>
        <nav class="navbar  navbar-light bg-dark bg-gradient py-5">
            <div class="container-fluid">
              <a class="navbar-brand mx-auto text-light h1 fs-1" href="#">Team Profiler</a>
            </div>
          </nav>
    <!-- Manager Card Section -->
    <div class="py-4 row align-items-center">
    
          <div class="col-12">
              <h1 class="text-center">Manager</h1>
            <!-- card container -->
              <div class="mt-3">

    <!-- manager card goes here -->
    
              </div>
            </div>
    
        </div>
    
    <!-- Engineer & Intern Card Section -->
    <div class=" row justify-content-between">
    
      <div class="py-5 col-12 col-sm-6  mx-auto">
          <h1 class="text-center">Engineers</h1>
    
      <!-- engineer card goes here -->

    
    
    </div>
    
    
    <div class="py-5 col-12 col-sm-6 justify-content-center">
      <h1 class="text-center">Interns</h1>
    
      <!-- intern card goes here -->

    
    </div>
    `
};

 module.exports = generateHtml;