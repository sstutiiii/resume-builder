function generateResume() {
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let linkedin = document.getElementById("linkedin").value;
    let summary = document.getElementById("summary").value;
    let experience = document.getElementById("experience").value;
    let projects = document.getElementById("projects").value;
    
    // Get all education entries
    let educationEntries = document.querySelectorAll(".education-entry");
    let educationHTML = "";
    educationEntries.forEach(entry => {
        let degree = entry.querySelector(".degree").value;
        let institution = entry.querySelector(".institution").value;
        let board = entry.querySelector(".board").value;
        let year = entry.querySelector(".year").value;

        educationHTML += `
            <p><b>${degree}</b> (${institution})</p>
            <p>${board}         ${year}</p>
            <br>
        `;
    });

    let softSkills = document.getElementById("soft-skills").value;
    let technicalSkills = document.getElementById("technical-skills").value;
    let languages = document.getElementById("languages").value;
    let hobbies = document.getElementById("hobbies").value;

    let resumeHTML = `
        <div id="resume-content" style="font-family: Arial, sans-serif; color: #333; padding: 20px; border: 2px solid #000;">
            <h1 style="font-size: 22px; font-weight: bold; color:rgb(10, 10, 10);">${name}</h1><hr>
           <b><p> ${address} | ${email} | 
            ${phone} | 
            <a href="${linkedin}" target="_blank">${linkedin}</P></a></b>
            <hr>
            <h3 style="color:rgb(14, 12, 12);">Summary</h3>
            <p>${summary}</p>

            <h3 style="color:rgb(5, 4, 4);">Experience</h3>
            <p>${experience}</p>

            <h3 style="color:rgb(5, 5, 5);">Projects</h3>
            <p>${projects}</p>

            <h3 style="color:rgb(5, 5, 5);">Education</h3>
            ${educationHTML}

            <h3 style="color:rgb(12, 11, 11);">Skills</h3>
            <p><b>Technical Skills:</b> ${technicalSkills}</p>
            <p><b>Soft Skills:</b> ${softSkills}</p>

            <h3 style="color:rgb(14, 13, 13);">Additional Info</h3>
            <p><b>Languages:</b> ${languages}</p>
            <p><b>Hobbies:</b> ${hobbies}</p>
        </div>
    `;

    document.getElementById("resume-output").innerHTML = resumeHTML;
    document.getElementById("download-pdf").style.display = "block";
}

// Function to add new education entry
function addEducation() {
    let educationSection = document.getElementById("education-section");

    let newEntry = document.createElement("div");
    newEntry.classList.add("education-entry");

    newEntry.innerHTML = `
        <input type="text" class="institution" placeholder="Institution Name" required>
        <input type="text" class="board" placeholder="Board/University" required>
        <input type="text" class="degree" placeholder="Class/Degree" required>
        <input type="text" class="year" placeholder="Passout Year" required>
        <button type="button" class="delete-education" onclick="removeEducation(this)">❌</button>
    `;

    educationSection.appendChild(newEntry);
}

// Function to remove an education entry
function removeEducation(button) {
    button.parentElement.remove();
}

// PDF Download Function
async function downloadPDF() {
    const element = document.getElementById("resume-content");

    if (!element || !element.innerHTML.trim()) {
        alert("Please generate the resume first!");
        return;
    }

    const originalButton = document.getElementById("download-pdf");
    originalButton.disabled = true;
    originalButton.textContent = "Generating PDF...";

    try {
        const clone = element.cloneNode(true);
        clone.style.width = "210mm";
        clone.style.margin = "0 auto";
        clone.style.padding = "20px";
        clone.style.boxSizing = "border-box";
        clone.style.position = 'absolute';
        clone.style.left = '-9999px';
        document.body.appendChild(clone);

        await document.fonts.ready;

        const canvas = await html2canvas(clone, {
            scale: 2,
            logging: true,
            useCORS: true,
            allowTaint: true,
            scrollX: 0,
            scrollY: 0,
            letterRendering: true,
            backgroundColor: null
        });

        document.body.removeChild(clone);

        const pdf = new jspdf.jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });

        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage(canvas, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save('Resume.pdf');
    } catch (error) {
        console.error('Error generating PDF:', error);
        alert('Error generating PDF. Please try again.');
    } finally {
        originalButton.disabled = false;
        originalButton.textContent = "Download PDF";
    }
}
