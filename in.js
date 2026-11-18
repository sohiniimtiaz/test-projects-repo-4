const courses = [
    { title: "Web Development Basics", desc: "Learn HTML, CSS, and JavaScript from scratch." },
    { title: "Data Structures in Python", desc: "Master DS & Algorithms with Python." },
    { title: "UI/UX Design Fundamentals", desc: "Design user-friendly modern interfaces." },
    { title: "Machine Learning Intro", desc: "Understand ML core ideas with projects." }
];

function loadCourses(filter = "")  {
    const container = document.getElementById("courseContainer");
    container.innerHTML = "";

    const filtered = courses.filter(c =>
        c.title.toLowerCase().includes(filter.toLowerCase())
    );

    filtered.forEach(course =>  {
        const card = document.createElement("div");
        card.className = "course-card";
        card.innerHTML = `
            <div class="course-title">${course.title}</div>
            <div class="course-desc">${course.desc}</div>
            <a class="btn-enroll">Enroll</a>
        `;
        container.appendChild(card);
    });
}

document.getElementById("searchInput").addEventListener("keyup",(e) =>  {
    loadCourses(e.target.value);
});
loadCourses();

document.getElementById("searchBtn").addEventListener("click", () => {
    const inputValue = document.getElementById("searchInput").value.trim();
    const results = courses.filter(course =>
        course.title.toLowerCase().includes(inputValue.toLowerCase() )
    );

    loadCourses(inputValue);

    if (results.length === 0) {
        alert("No courses found. Please try another search.");
    }
} );

document.addEventListener("click", function(e) {
    if (e.target.classList.contains("btn-enroll")) {
        alert("You have enrolled successfully!" );
    }
});
