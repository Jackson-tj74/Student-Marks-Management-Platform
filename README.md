# 🎓 Student Marks Management Platform

This is a simple and easy-to-use web app for managing student marks.  
It helps you record student details, calculate their averages, assign grades, and instantly see whether they passed or failed — all right in your browser.

Everything runs using **HTML, CSS, and JavaScript**, and your data is saved using **Local Storage**, so nothing is lost when you refresh the page.

---

## 🚀 What this project can do

- Add student details like name, courses, and marks
- Automatically calculate the average score
- Assign grades (A, B, C, D, F)
- Show pass or fail status instantly
- Display live statistics:
  - Total number of students
  - Number of students who passed
  - Number of students who failed
- Delete student records when needed
- Save everything in the browser (no database needed)
- Fully responsive design for both mobile and desktop

---

## 🛠️ Technologies used

- HTML5 – structure of the app
- CSS3 – clean and modern UI design (Grid & Flexbox)
- JavaScript – logic, calculations, and Local Storage

---

## 📂 Project structure

```
student-marks-management/
│
├── index.html   → Main page
├── style.css    → Styling and layout
├── script.js    → App logic
└── README.md    → Project documentation
```

---

## ⚙️ How it works

1. You enter student information:
   - Student name
   - Course 1 and marks
   - Course 2 and marks

2. The system checks your input:
   - Ensures no field is empty
   - Makes sure marks are between 0 and 100
   - Ensures the two courses are not the same

3. It then:
   - Calculates the average score
   - Assigns a grade
   - Determines pass or fail

4. All data is stored in your browser using Local Storage, so it stays even after refreshing.

---

## 📊 Grading system

| Score range | Grade |
|------------|------|
| 80 - 100   | A    |
| 70 - 79    | B    |
| 60 - 69    | C    |
| 50 - 59    | D    |
| Below 50   | F    |

---

## ▶️ How to run the project

Clone the repository:

```bash
git clone https://github.com/your-username/student-marks-management.git
cd student-marks-management
```

Then simply open the project:

```
index.html
```

Or use **Live Server** in VS Code for a better experience.

---

##  Future improvements

This project can be improved with:

- Editing student records
- Search and filter functionality
- Export data to PDF or Excel
- Backend integration (Node.js / Firebase)
- Login system for teachers

---

## 👨‍💻 Author 
Tuyikunde Jackson

Created by **Jackson**  
Built for learning and practice purposes.
