

const studentForm =
document.getElementById("studentForm");

const studentTableBody = document.getElementById("studentTableBody");

const totalStudents = document.getElementById("totalStudents");

const studentPass = document.getElementById("passStudents");

const studentFail = document.getElementById("failStudents");



let students =JSON.parse(localStorage.getItem("students")) || [];




function calculateGrade(average) {

    if (average >= 80) {
        return "A";

    } else if (average >= 70) {
        return "B";

    } else if (average >= 60) {
        return "C";

    } else if (average >= 50) {
        return "D";

    } else {
        return "F";
    }
}




function getStatus(average) {

    if (average >= 50) {
        return "Pass";

    } else {
        return "Fail";
    }
}



function saveToLocalStorage() {

    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );
}




function updateStatistics() {

    totalStudents.textContent =
    students.length;

  
    const passedStudents =
    students.filter(student =>
        student.average >= 50
    ).length;

  
    const failedStudents =
    students.filter(student =>
        student.average < 50
    ).length;


    studentPass.textContent =
    passedStudents;

    studentFail.textContent =
    failedStudents;
}




function displayStudents() {

    studentTableBody.innerHTML = "";

    students.forEach((student, index) => {

     
        const row =
        document.createElement("tr");

    
        row.innerHTML = `

        <td>${index + 1}</td>

        <td>${student.name}</td>

        <td>${student.course1}</td>

        <td>${student.marks1}</td>

        <td>${student.course2}</td>

        <td>${student.marks2}</td>

        <td>${student.average}</td>

        <td>${student.grade}</td>

        <td>${student.status}</td>

        <td>
          <button
            onclick="deleteStudent(${index})"
          >
            Delete
          </button>
        </td>

        `;

        // ADD ROW TO TABLE
        studentTableBody.appendChild(row);

    });

    // UPDATE TOTALS
    updateStatistics();
}




studentForm.addEventListener(
"submit",
function(e) {

   
    e.preventDefault();

 

    const name =document.getElementById("Name").value.trim();

    const course1 =document.getElementById("Course1").value.trim();

    const marks1 =Number(document.getElementById("Marks1").value );

    const course2 =document.getElementById("Course2").value.trim();
    const marks2 =Number( document.getElementById("Marks2") .value
 );



   
    if (  !name || !course1 || !course2
    ) {

        alert(
          "Please fill all fields."
        );

        return;
    }

    
    if (  isNaN(marks1) || isNaN(marks2)  ) {

        alert(
          "Marks must be numbers."
        );

        return;
    }

   
    if (marks1 < 0 || marks1 > 100 || marks2 < 0 || marks2 > 100) {

        alert(
          "Marks must be between 0 and 100."
        );

        return;
    }

   
    if (
        course1.toLowerCase() ===course2.toLowerCase()) {

        alert(
          "Courses cannot be the same."
        );

        return;
    }



    const average =
    ((marks1 + marks2) / 2)
    .toFixed(2);



    const student = {

        name,

        course1,
        marks1,

        course2,
        marks2,

        average,

        grade:
        calculateGrade(average),

        status:
        getStatus(average)
    };

    students.push(student);

    saveToLocalStorage();

    displayStudents();


    studentForm.reset();
    alert(
      "Student added successfully!"
    );

});




function deleteStudent(index) {

    students.splice(index, 1);

    saveToLocalStorage();

    displayStudents();
}




displayStudents();