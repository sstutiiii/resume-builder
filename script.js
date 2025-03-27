function generateResume() {
    let name = document.getElementById("name").value;
    let summary = document.getElementById("summary").value;
    let experience = document.getElementById("experience").value;
    let projects = document.getElementById("projects").value;
    let skills = document.getElementById("skills").value;
    let education = document.getElementById("education").value;
    let additionalInfo = document.getElementById("additional-info").value;

    let resumeHTML = `
        <h2 style="font-size: 22px; font-weight: bold;">${name}</h2>
        <h3>Summary</h3>
        <p>${summary}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
        <h3>Projects</h3>
        <p>${projects}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Additional Info</h3>
        <p>${additionalInfo}</p>
    `;

    document.getElementById("resume-output").innerHTML = resumeHTML;

    // Show the Download PDF button after generating the resume
    document.getElementById("download-pdf").style.display = "block";
}

// Function to download the resume as a PDF
function downloadPDF() {
    const { jsPDF } = window.jspdf;
    let doc = new jsPDF();

    let resumeContent = document.getElementById("resume-output").innerText;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(resumeContent, 20, 20, { maxWidth: 170 });

    doc.save("Resume.pdf");
}
