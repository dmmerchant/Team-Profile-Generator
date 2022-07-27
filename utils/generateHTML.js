function generateHTML(team) {
return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link href="./style.css" rel="stylesheet">
</head>

<body>
    <header class="jumbotron text-center bg-dark text-white">
        <h1>${team.name}</h1>
    </header>
    <main class="d-flex justify-content-center flex-wrap">
        ${generateCards(team.members)}
    </main>
</body>

</html>
`    
}

function generateCards(members){
    cardinfo = ''
    members.forEach(member => {cardinfo = cardinfo + individualCard(member)})
    return cardinfo
}


function individualCard(member){
return `<div class="card m-2" style="width: 18rem;">
<div class="card-header">
    <h2>${member.name}</h2>
    <span><i class="material-icons">${member.icon}</i> ${member.getRole()}</span>
</div>
<ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${member.id}</li>
    <li class="list-group-item">Email: <a href="mailto: ${member.email}">${member.email}</a></li>
    ${additionalInfo(member)}
</ul>
</div>
`    
}

function additionalInfo(member){
    let fieldName;
    let fieldValue;
    switch (member.getRole()) {
        case 'Manager': 
            fieldName = "Office number: ";
            fieldValue = member.officeNumber;
            break;

        case 'Intern': 
            fieldName = "School: ";
            fieldValue = member.school;
            break;

        case 'Engineer': 
            fieldName = "GitHub: ";
            fieldValue = `<a href="https://github.com/${member.github}">${member.github}</a>`;
            break;

        case 'Employee':
            return ''
      }
    return `<li class="list-group-item">${fieldName} ${fieldValue}</li>`
}

module.exports = generateHTML;