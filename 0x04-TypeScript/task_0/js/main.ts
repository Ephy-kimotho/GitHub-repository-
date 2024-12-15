interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const S1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 23,
    location: "New york"
}
const S2: Student = {
    firstName: "Susan",
    lastName: "Doe",
    age: 21,
    location: "New York"
}

const studentsList: Student[] = [S1, S2];

const table = studentsList.map(student => {
    const table = document.createElement('table')

    const tr = document.createElement("tr");

    const td1 = document.createElement('td')
    td1.textContent = student.firstName

    const td2 = document.createElement("td")
    td2.textContent = student.location

    tr.append(td1, td2);
    table.append(tr)

})