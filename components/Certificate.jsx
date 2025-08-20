import { certificates } from "../certificates"
export default function Certificates() {
    return (
        <>
            <h2 className="certificates-heading">My Certificates</h2>
            <div className="certificates-container" id="certificates">
                {certificates.map((certificate, index) => (
                    <div key={index} className="certificate-card">
                        <div className="certificate-image">
                            <img src={certificate.image} alt={certificate.title} />
                        </div>
                        <div className="certificate-content">
                            <h3>{certificate.title}</h3>
                            <p>{certificate.description}</p>
                        </div>
                        <div className="certificate-links">
                            <a href={certificate.link} target="_blank" rel="noopener noreferrer" className="certificate-link">
                                View Certificate
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}