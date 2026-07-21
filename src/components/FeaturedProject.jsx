import resumeImage from "../assets/projects/resume-analyzer.png";

function FeaturedProject() {
  return (
    <section id="featured-project">

      <h2>Featured Project</h2>

      <div className="featured-project">

        <div className="project-image">
          <img src={resumeImage} alt="AI Resume Analyzer" />
        </div>

        <div className="project-info">

          <h3>AI Resume Analyzer</h3>

          <p>
            AI Resume Analyzer is a full-stack web application that helps
            users improve their resumes using Artificial Intelligence.
            Users upload a PDF resume and receive an ATS score, extracted
            skills, strengths, weaknesses, and personalized AI suggestions.
          </p>

          <h4>Key Features</h4>

          <ul>
            <li>✅ PDF Resume Upload</li>
            <li>✅ ATS Score Prediction</li>
            <li>✅ Skill Extraction</li>
            <li>✅ Strength & Weakness Analysis</li>
            <li>✅ AI Resume Suggestions</li>
            <li>✅ User Authentication</li>
            <li>✅ Resume History</li>
          </ul>

          <h4>Technology Stack</h4>

          <div className="feature-tech">

            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>Supabase</span>
            <span>Gemini AI</span>
            <span>JWT</span>

          </div>

          <div className="feature-buttons">

            <a
              href="https://github.com/anushka-malkar/AI-Resume-Analyzer"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default FeaturedProject;