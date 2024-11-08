console.log("Script connected!")

function generateResume() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phoneno = document.getElementById("phoneno").value;
    const linkedin = document.getElementById("linkedin").value;
    const github = document.getElementById("github").value;
    const work_exp = document.getElementById("work_exp").value;
    const education = document.getElementById("education").value;
    const photo = document.getElementById("photo").files[0];

    const resumeContent = `
        <h1 style="text-align:center"> ${name}</h1>
        <p style="text-align:center"><strong>Email:</strong> ${email}</p>
        <p style="text-align:center"><strong>Phone Number:</strong> ${phoneno}</p>
        <p style="text-align:center"><strong>LinkedIn ID:</strong> ${linkedin}</p>
        <p style="text-align:center"><strong>Github ID:</strong> ${github}</p>
        <p style="text-align:center"><strong>Work Experience:</strong> ${work_exp}</p>
        <p style="text-align:center"><strong>Education:</strong> ${education}</p>
    `;

    document.getElementById("resume-form").innerHTML = resumeContent;
}

