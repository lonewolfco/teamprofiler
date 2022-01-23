
// manager card html function

// const Employee = require("../lib/Employee")

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
  <li class="list-group-item"><strong>Email:</strong> <a href="mailto:${manager.email}">${manager.email}</a></li>
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
    <li class="list-group-item"><strong>Email:</strong> <a href="mailto:${engineer.email}">${engineer.email}</a> </li>
    <li class="list-group-item"><strong>GitHub User:</strong> <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
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
    <li class="list-group-item"><strong>Email:</strong> <a href="mailto:${intern.email}">${intern.email}</a></li>
    <li class="list-group-item"><strong>Office Number:</strong> ${intern.school} </li>
  </ul>
  </div>
  `
};

// push card array data to the page
generateHTML = (data) => {

  // team profile cards array
  teamProfileArray = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    // if then to generate for each team role card
    if (role === "Manager") {
      const managerCard = generateManagerCard(employee);

      teamProfileArray.push(managerCard);
    }

    if (role === "Engineer") {
      const engineerCard = generateEngineerCard(employee);

      teamProfileArray.push(engineerCard);
    }

    if (role === "Intern") {
      const internCard = generateInternCard(employee);

      teamProfileArray.push(internCard);
    }

  }

    const teamCards = teamProfileArray.join('')

    const team = indexHtmlTemplate(teamCards);
    return team;

}

const indexHtmlTemplate = function ( teamCards ) {
  return
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
            ${teamCards}
    
            </div>
    
        </div>
    
    
    
          <script src="index.js"></script>
    </html>
    `
};

 module.exports = generateHTML;