let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
]
if (coursesAndDurationArray.monthDuration > 5){
    console.log(coursesAndDurationArray.monthDuration)
    console.log('Super')
}else if (coursesAndDurationArray.monthDuration <5){
    console.log(coursesAndDurationArray.monthDuration)
    console.log('wrong')
}
