import "./about.css";

export default function About(){
    return(
        <div>
            <div className="about-desc">
                <span className="about-heading">About Me</span>
                <h2 className="about-heading1">Who Am I?</h2>
                <p><strong>Hi I'm Moreshwar Boramanikar</strong> Experience of building web applications, writing client as well as server side code. I am a Software Developer with expertise in JavaScript, ReactJs, HTML/CSS. Also have knowledge of NodeJs, GraphQL, Docker, Vagrant etc
Graduated from Walchand College Of Engineering Sangli. </p>

                <h2 className="about-heading1">Summary</h2>
                    <ul>
                        <li>I am Software Engineer with 5+ years of experience.</li>
                        <li>Knowledge and hands on JavaScript, Service Now, React JS etc.</li>
                        <li>Experience in Requirement gathering, Researching, Developing,Dev-Testing, Deployment etc.</li>
                        <li>Experience as module lead</li>
                        <li>Agile working experience.</li>
                    </ul>

                </div>
                <h2 className="about-heading1">Awards</h2>
                <div className="about-awards">
                    <div className="card">
                        <div className="card-image">
                            
                        </div>
                        <div className="card-stacked">
                            <div className="card-action">
                            <span><i class="small material-icons">star</i> <b className='award-name'>Star Award</b></span>
                            </div>
                            <div className="card-content">
                            <p>for excellent performance, commitment to quality deliverable teamwork</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image">
                            
                        </div>
                        <div className="card-stacked">
                            <div className="card-action">
                            <span><i class="small material-icons">lightbulb_outline</i> <b className='award-name'>Innovative Idea Award</b></span>
                            </div>
                            <div className="card-content">
                                <p>for Recruitment Tracker in house project.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image">
                            
                        </div>
                        <div className="card-stacked">
                            <div className="card-action">
                            <span><i class="small material-icons">lightbulb_outline</i> <b className='award-name'>Insta Award</b></span>
                            </div>
                            <div className="card-content">
                            <p>Certificate of Appreciation</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}