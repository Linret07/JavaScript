// Створити для кожного елементу масиву свій блок, блок розділити блоками,
// в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами

let coursesArraywe1 = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

for (const course of coursesArraywe1) {
    let mainDiv = document.createElement('div');
    mainDiv.classList.add('course-card');

    let titleDiv = document.createElement('div');
    titleDiv.classList.add('course-title');
    titleDiv.innerText = `Назва: ${course.title}`;

    let durationDiv = document.createElement('div');
    durationDiv.classList.add('course-duration');
    durationDiv.innerText = `Тривалість: ${course.monthDuration} міс. | Годин: ${course.hourDuration}`;

    let modulesDiv = document.createElement('div');
    modulesDiv.classList.add('course-modules');

    let ul = document.createElement('ul');
    course.modules.forEach(module => {
        let li = document.createElement('li');
        li.innerText = module;
        ul.appendChild(li);
    });
    modulesDiv.appendChild(ul);

    mainDiv.appendChild(titleDiv);
    mainDiv.appendChild(durationDiv);
    mainDiv.appendChild(modulesDiv);
    document.body.appendChild(mainDiv);
}