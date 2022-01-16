
const generateHtml = ( answers ) => {

    `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Document</title>
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 id = "name" class="display-4">Hi! My name is ${answers.name}</h1>
        <p id = "language" class="lead">I am from ${answers.location}</p>
        <p id = "language" class="lead">${answers.funfact}</p>
        <h3><span class="badge badge-secondary">Contact Me</span></h3>
        <ul class="list-group">
          <li id = "GitHub" class="list-group-item">GitHub: ${answers.github}</li>
          <li id = "linkedin" class="list-group-item">LinkedIn: ${answers.name}</li>
        </ul>
      </div>
    </div>
    <script src="index.js"></script>
    </body>
    </html>`
}

 module.exports = generateHtml;