function generateResume() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let education = document.getElementById("education").value;
    let skills = document.getElementById("skills").value;

    if (!name || !email || !education || !skills) {
        alert("Please fill all fields");
        return;
    }

    let resumeContent = `
        <h3>${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Education:</strong> ${education}</p>
        <p><strong>Skills:</strong> ${skills}</p>
    `;

    document.getElementById("resumeContent").innerHTML = resumeContent;
    document.getElementById("resumeOutput").style.display = "block";
}

function downloadPDF() {
    const { jsPDF } = window.jspdf;
    let doc = new jsPDF();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let education = document.getElementById("education").value;
    let skills = document.getElementById("skills").value;

    doc.text(`Name: ${name}`, 10, 10);
    doc.text(`Email: ${email}`, 10, 20);
    doc.text(`Education: ${education}`, 10, 30);
    doc.text(`Skills: ${skills}`, 10, 40);
    
    doc.save("Resume.pdf");
}
