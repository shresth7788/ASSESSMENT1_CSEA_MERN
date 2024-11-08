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

    document.getElementById("resume-form").removeChild(document.getElementById("form"));
    document.getElementById("resume-content").innerHTML = resumeContent;
}

function downloadPDF() {
    const resumeElement = document.getElementById("resume-content");
    let opt = {
        margin:       1,
        filename:     'my-invoice.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
}

