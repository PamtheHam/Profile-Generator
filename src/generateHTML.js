
// html filler 

const managerCard = (managerArr) => {
    let card = '';
    for(const manager of managerArr){
        card+= `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${manager.name}</h5>
    <p class="card-text"><i class="fas fa-mug-hot"></i> Manager</p>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">${manager.id}</li>
    <li class="list-group-item">${manager.email}</li>
    <li class="list-group-item"> ${manager.officeNumber} </li>
    </ul>
    </div>`;
    }
    return card;
};

const engineerCard = (engineerArr) => {
    let card = '';
    for (const engineer of engineerArr) {
        card += `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${engineer.name}</h5>
        <p class="card-text"><i class="fas fa-glasses"></i> Engineer</p>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">${engineer.id}</li>
        <li class="list-group-item">${engineer.email}</li>
        <li class="list-group-item"> ${engineer.github} </li>
        </ul>
        </div>`;
    }
    return card;
}

const internCard = (internArr) => {
    let card = ''; 
    for (const intern of internArr) {
        card += `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${intern.name}</h5>
        <p class="card-text"><i class="fas fa-user-graduate"></i> Intern</p>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">${intern.id}</li>
        <li class="list-group-item">${intern.email}</li>
        <li class="list-group-item"> ${intern.school} </li>
        </ul>
        </div>`;
    }
    return card;
}

const generateHTML = (managerArr, engineerArr, internArr) => {
    return `

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
    <link rel="stylesheet" href="./Output/style.css">
    <title>Profile Generator</title>
</head>
<body>
<main>
<div class="row align-items-center">
<div class="col">
  ${managerCard(managerArr)}
</div>

<div class="col">
  ${engineerCard(engineerArr)}
</div>

<div class="col">
  ${internCard(internArr)}
</div> 
</div>
</body>
</html>`

};

module.exports = generateHTML;