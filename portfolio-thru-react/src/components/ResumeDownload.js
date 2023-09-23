import React from 'react';

function ResumeDownload() {
  const resumeUrl = '/resume.pdf'; // Replace with the actual path or URL of your resume

  return (
    <div>
      <h2>Download My Resume</h2>
      <a href={resumeUrl} download="./resume.pdf">
        Download Resume
      </a>
    </div>
  );
}

export default ResumeDownload;
