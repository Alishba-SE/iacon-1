import React, { useState } from "react";
import "./stdprofilepage.css";
import { FaEdit, FaSave, FaDownload, FaUpload } from "react-icons/fa";

const StudentProfile = () => {
  const [editSection, setEditSection] = useState(""); // Track which section is being edited

  const [profile, setProfile] = useState({
    name: "Alishba Qureshi",
    gpa: "3.8",
    email: "alishba.qureshi@example.com",
    address: "Islamabad, Pakistan",
    phone: "+92 300 1234567",
    linkedin: "https://linkedin.com/in/alishba",
    github: "https://github.com/alishba",
    about: "Final-year Software Engineering student passionate about AI and IoT.",
    skills: "React, Python, TensorFlow, SQL, JavaScript",
    achievements: "Dean’s List, Hackathon Finalist, Volunteer in TechFest 2025",
    picture: "",
    resume: "",
    certifications: [],
    projects: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleFileUpload = (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    if (type === "picture") {
      setProfile({ ...profile, picture: URL.createObjectURL(file) });
    } else if (type === "resume") {
      setProfile({ ...profile, resume: file.name });
    } else if (type === "certifications") {
      setProfile({
        ...profile,
        certifications: [...profile.certifications, file.name],
      });
    } else if (type === "projects") {
      setProfile({
        ...profile,
        projects: [...profile.projects, file.name],
      });
    }
  };

  const toggleEdit = (section) => {
    setEditSection(editSection === section ? "" : section);
  };

  return (
    <div className="profile-layout">
      <main className="profile-container">
        {/* ===== Header Section ===== */}
        <div className="profile-header">
          <div className="profile-pic">
            {profile.picture ? (
              <img src={profile.picture} alt="Profile" />
            ) : (
              <div className="placeholder-pic">Upload</div>
            )}
            <label className="upload-btn">
              <FaUpload /> Upload Picture
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileUpload(e, "picture")}
              />
            </label>
          </div>

          <div className="profile-details">
            {editSection === "info" ? (
              <>
                <input
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  className="edit-input name-input"
                />
                <input
                  name="gpa"
                  value={profile.gpa}
                  onChange={handleChange}
                  className="edit-input"
                />
                <input
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  className="edit-input"
                />
                <input
                  name="address"
                  value={profile.address}
                  onChange={handleChange}
                  className="edit-input"
                />
                <input
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                  className="edit-input"
                />
                <button
                  className="save-btn"
                  onClick={() => toggleEdit("info")}
                >
                  <FaSave /> Save
                </button>
              </>
            ) : (
              <>
                <h1>{profile.name}</h1>
                <p><strong>GPA:</strong> {profile.gpa}</p>
                <p><strong>Email:</strong> {profile.email}</p>
                <p><strong>Address:</strong> {profile.address}</p>
                <p><strong>Phone:</strong> {profile.phone}</p>
                <div className="links">
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                  <a href={profile.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>
                <button
                  className="edit-btn"
                  onClick={() => toggleEdit("info")}
                >
                  <FaEdit /> Edit
                </button>
              </>
            )}

            <div className="resume-section">
              <label className="upload-btn">
                <FaUpload /> Upload Resume
                <input
                  type="file"
                  accept=".pdf"
                  onChange={(e) => handleFileUpload(e, "resume")}
                />
              </label>
              {profile.resume && (
                <button className="download-btn">
                  <FaDownload /> {profile.resume}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ===== About Section ===== */}
        <div className="profile-section">
          <div className="section-header">
            <h2>About</h2>
            <button
              className="edit-btn"
              onClick={() => toggleEdit("about")}
            >
              {editSection === "about" ? <FaSave /> : <FaEdit />}
            </button>
          </div>
          {editSection === "about" ? (
            <textarea
              name="about"
              value={profile.about}
              onChange={handleChange}
            />
          ) : (
            <p>{profile.about}</p>
          )}
        </div>

        {/* ===== Skills Section ===== */}
        <div className="profile-section">
          <div className="section-header">
            <h2>Skills</h2>
            <button
              className="edit-btn"
              onClick={() => toggleEdit("skills")}
            >
              {editSection === "skills" ? <FaSave /> : <FaEdit />}
            </button>
          </div>
          {editSection === "skills" ? (
            <textarea
              name="skills"
              value={profile.skills}
              onChange={handleChange}
            />
          ) : (
            <p>{profile.skills}</p>
          )}
        </div>

        {/* ===== Achievements Section ===== */}
        <div className="profile-section">
          <div className="section-header">
            <h2>Achievements</h2>
            <button
              className="edit-btn"
              onClick={() => toggleEdit("achievements")}
            >
              {editSection === "achievements" ? <FaSave /> : <FaEdit />}
            </button>
          </div>
          {editSection === "achievements" ? (
            <textarea
              name="achievements"
              value={profile.achievements}
              onChange={handleChange}
            />
          ) : (
            <p>{profile.achievements}</p>
          )}
        </div>

        {/* ===== Certifications Section ===== */}
        <div className="profile-section">
          <div className="section-header">
            <h2>Certifications</h2>
          </div>
          <label className="upload-btn">
            <FaUpload /> Add Certification
            <input
              type="file"
              onChange={(e) => handleFileUpload(e, "certifications")}
            />
          </label>
          <ul>
            {profile.certifications.map((cert, i) => (
              <li key={i}>{cert}</li>
            ))}
          </ul>
        </div>

        {/* ===== Projects Section ===== */}
<div className="profile-section">
  <div className="section-header">
    <h2>Projects</h2>
    <button
      className="edit-btn"
      onClick={() => toggleEdit("projects")}
    >
      {editSection === "projects" ? <FaSave /> : <FaEdit />}
    </button>
  </div>

  {editSection === "projects" ? (
    <div className="add-project-form">
      <input
        type="text"
        name="projectName"
        placeholder="Project Title"
        className="edit-input"
        onChange={(e) =>
          setProfile({
            ...profile,
            currentProject: {
              ...profile.currentProject,
              name: e.target.value,
            },
          })
        }
      />
      <textarea
        name="projectDescription"
        placeholder="Project Description"
        className="edit-input"
        onChange={(e) =>
          setProfile({
            ...profile,
            currentProject: {
              ...profile.currentProject,
              description: e.target.value,
            },
          })
        }
      />
      <input
        type="text"
        name="projectSkills"
        placeholder="Related Skills (comma separated)"
        className="edit-input"
        onChange={(e) =>
          setProfile({
            ...profile,
            currentProject: {
              ...profile.currentProject,
              skills: e.target.value,
            },
          })
        }
      />
      <input
        type="url"
        name="projectLink"
        placeholder="GitHub / Demo Link"
        className="edit-input"
        onChange={(e) =>
          setProfile({
            ...profile,
            currentProject: {
              ...profile.currentProject,
              link: e.target.value,
            },
          })
        }
      />
      <label className="upload-btn">
        <FaUpload /> Upload Project Image
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              const imageUrl = URL.createObjectURL(file);
              setProfile({
                ...profile,
                currentProject: {
                  ...profile.currentProject,
                  image: imageUrl,
                },
              });
            }
          }}
        />
      </label>

      <button
        className="save-btn"
        onClick={() => {
          if (profile.currentProject?.name) {
            setProfile({
              ...profile,
              projects: [
                ...profile.projects,
                profile.currentProject,
              ],
              currentProject: {},
            });
          }
        }}
      >
        <FaSave /> Add Project
      </button>
    </div>
  ) : null}

  {/* Display added projects */}
  <div className="project-gallery">
    {profile.projects.length === 0 ? (
      <p>No projects added yet.</p>
    ) : (
      profile.projects.map((proj, i) => (
        <div key={i} className="project-card">
          {proj.image && <img src={proj.image} alt={proj.name} />}
          <div className="project-info">
            <h3>{proj.name}</h3>
            <p>{proj.description}</p>
            <p>
              <strong>Skills:</strong> {proj.skills}
            </p>
            {proj.link && (
              <a
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View on GitHub
              </a>
            )}
          </div>
        </div>
      ))
    )}
  </div>
</div>

      </main>
    </div>
  );
};

export default StudentProfile;