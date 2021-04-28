import './skills.css';

export default function Skills(){
    return(
        <div>
             <span className="skills-heading">My Specialty</span>
                <h2 className="skills-heading1">My Skills</h2>
            <div className="col-md-12 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                <p>
                        <ul>
                            <li><strong>Library –</strong> React JS, Ant Design(React UI library) etc</li>
                            <li><strong>Web Technologies – </strong> JavaScript,HTML/CSS, GraphQL etc</li>
                            <li><strong>Databases – </strong> Firebase, MS-SQL,MySql, Postgres etc.</li>
                            <li><strong>Others –</strong>  ServiceNow, Git, Jira,BugZilla etc</li>
                        </ul>
                </p>
            </div>
            <div className="skills-skills-tags">
                <div>
                    <h6>ReactJs</h6>
                    <div class="skills-meter">
                        <span style={{"width": "75%"}}>  </span>
                    </div>
                </div>
                <div>
                    <h6>JavaScript</h6>
                    <div class="skills-meter red">
                     <span style={{"width": "85%"}}></span>
                    </div>
                </div>
                <div>
                    <h6>HTML/CSS</h6>
                    <div class="skills-meter blue">
                        <span style={{"width": "70%"}}></span>
                    </div>
                </div>
                <div>
                    <h6><strong>Others: </strong>GraphQL/NodeJs</h6>
                    <div class="skills-meter yellow">
                        <span style={{"width": "40%"}}></span>
                    </div>
                </div>
            </div>
        </div>
    )
}