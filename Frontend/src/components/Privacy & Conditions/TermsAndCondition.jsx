import React from "react";
import "./TermsAndCondition.css"; // Import the CSS file for styling

const TermsAndCondition = () => {
  return (
    <div className="terms-container">
      <h1>Terms and Conditions</h1>
      <div className="terms-content">
        {/* Introduction Section */}
        <section className="terms-section">
          <h2>Introduction</h2>
          <p>
            Welcome to <strong className="highlight">Ava Intern</strong>! These
            Terms and Conditions ("Terms") govern your use of our website and
            services. By accessing or using the platform, you agree to comply
            with and be bound by these Terms. If you do not agree with these
            Terms, please do not use our services.
          </p>
        </section>

        {/* Course Enrollment and Payments Section */}
        <section className="terms-section">
          <h2>Course Enrollment and Payments</h2>
          <div className="terms-subsection">
            <h3>Enrollment</h3>
            <p>
              To enroll in a course, you must complete the registration process
              and pay the required fees. By enrolling, you agree to attend at
              least <strong className="highlight">70%</strong> of the regular
              classes to qualify for certificates and exams.
            </p>
          </div>
          <div className="terms-subsection">
            <h3>Payments</h3>
            <p>
              All fees are <strong className="highlight">non-refundable</strong>{" "}
              once you have paid and onboarding has initiated. Payments must be
              made through the approved methods on our platform.
            </p>
          </div>
        </section>

        {/* Marking the Grade Attendance Section */}
        <section className="terms-section">
          <h2>Marking the Grade Attendance</h2>
          <p>
            You must aim for at least <strong className="highlight">75%</strong>{" "}
            attendance in regular classes to receive your certificates and
            qualify for exams.
          </p>
        </section>

        {/* Conduct Section */}
        <section className="terms-section">
          <h2>Conduct</h2>
          <p>
            You must be polite and professional towards mentors and program
            managers. Disrespectful behavior will not be tolerated and may
            result in expulsion from the course without a refund.
          </p>
        </section>

        {/* Assignments and Projects Section */}
        <section className="terms-section">
          <h2>Assignments and Projects</h2>
          <p>
            You must complete all assignments and projects given by your
            mentors. This is essential for your learning and growth.
          </p>
        </section>

        {/* Placement Cell Attendance Section */}
        <section className="terms-section">
          <h2>Placement Cell Attendance</h2>
          <p>
            <strong className="highlight">100% attendance</strong> in placement
            cell sessions (Thursday) is mandatory.
          </p>
        </section>

        {/* Commitment Section */}
        <section className="terms-section">
          <h2>Commitment</h2>
          <p>
            Once you apply for an internship opportunity, you must complete the
            entire selection process. Backing out will result in being
            blacklisted from the placement cell.
          </p>
        </section>

        {/* Internship Applications Section */}
        <section className="terms-section">
          <h2>Internship Applications</h2>
          <p>
            If you are selected for a company, you cannot apply for other
            upcoming internship opportunities.
          </p>
        </section>

        {/* Certification Eligibility Section */}
        <section className="terms-section">
          <h2>Certification Eligibility</h2>
          <div className="terms-subsection">
            <h3>Program Completion</h3>
            <p>
              To be eligible for program completion and project completion
              certificates, you must:
            </p>
            <ul>
              <li>
                Attend at least <strong className="highlight">75%</strong> of
                sessions.
              </li>
              <li>
                Complete and submit all assignments, hands-on challenges, and
                projects.
              </li>
              <li>Update your LinkedIn profile and resume.</li>
            </ul>
          </div>
        </section>

        {/* Conduct and Communication Section */}
        <section className="terms-section">
          <h2>Conduct and Communication</h2>
          <div className="terms-subsection">
            <h3>Group Spam</h3>
            <p>
              Students must not spam groups on WhatsApp or within the app. Doing
              so can result in removal from the course with no refund given.
            </p>
          </div>
          <div className="terms-subsection">
            <h3>Raising Concerns</h3>
            <p>
              For any issues related to the course, mentor, peer, or any other
              aspect of the learning experience, students must use a positive
              and friendly approach to raise concerns directly with the batch
              manager or moderator. If the batch manager does not respond,
              students can raise complaints at{" "}
              <a href="mailto:support@avaintern.com" className="highlight-link">
                support@avaintern.com
              </a>
              .
            </p>
          </div>
        </section>

        {/* No Refund Policy Section */}
        <section className="terms-section">
          <h2>No Refund Policy</h2>
          <p>
            All fees are <strong className="highlight">non-refundable</strong>{" "}
            once onboarding has initiated.
          </p>
        </section>

        {/* Intellectual Property Section */}
        <section className="terms-section">
          <h2>Intellectual Property</h2>
          <p>
            All content provided on the platform is the property of{" "}
            <strong className="highlight">Ava Intern</strong> or its partners.
            You may not use, reproduce, or distribute any content without prior
            written permission.
          </p>
        </section>

        {/* Prohibited Activities Section */}
        <section className="terms-section">
          <h2>Prohibited Activities</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the platform for any unlawful purpose.</li>
            <li>Upload or transmit viruses or other harmful code.</li>
            <li>
              Engage in any activity that interferes with or disrupts the
              platform.
            </li>
          </ul>
        </section>

        {/* Limitation of Liability Section */}
        <section className="terms-section">
          <h2>Limitation of Liability</h2>
          <p>
            <strong className="highlight">Ava Intern</strong> is not liable for
            any indirect, incidental, or consequential damages arising from your
            use of the platform. Our liability is limited to the amount you paid
            for the services.
          </p>
        </section>

        {/* Privacy Section */}
        <section className="terms-section">
          <h2>Privacy</h2>
          <p>
            Your use of the platform is also governed by our{" "}
            <a href="/privacy-policy" className="highlight-link">
              Privacy Policy
            </a>
            .
          </p>
        </section>

        {/* Termination Section */}
        <section className="terms-section">
          <h2>Termination</h2>
          <p>
            <strong className="highlight">Ava Intern</strong> reserves the right
            to terminate your account for any violation of these Terms. Upon
            termination, you must cease all use of the platform and return any
            proprietary information.
          </p>
        </section>

        {/* Governing Law Section */}
        <section className="terms-section">
          <h2>Governing Law</h2>
          <p>
            These Terms are governed by the laws of India. Any disputes will be
            resolved in the courts of India.
          </p>
        </section>

        {/* Contact Information Section */}
        <section className="terms-section">
          <h2>Contact Information</h2>
          <p>
            For any questions or concerns regarding these Terms, please contact
            us at{" "}
            <a href="mailto:support@avaintern.com" className="highlight-link">
              support@avaintern.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndCondition;
