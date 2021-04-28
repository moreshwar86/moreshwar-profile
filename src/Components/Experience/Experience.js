import React from 'react';

import './experience.css'
  
export default function Education() {

  return (

    <div>
      <span className="about-heading">Experience</span>
    <h2 className="about-heading1">Work Experience</h2>

        <div class="timeline">
          <div class="timeline-event">
            <div class="card timeline-content">
              <div className="card-action">
                  <span><b>Infosys, Pune</b> (Aug 2018 - Current)</span>
              </div>
              <div className="card-content">
                  <p>for excellent performance, commitment to quality deliverable teamwork</p>
                  </div>
            </div>
            <div class="timeline-badge blue white-text"><i class="material-icons" color='primary'>dns</i></div>
          </div>
          <div class="timeline-event">
            <div class="card timeline-content">
              <div className="card-action">
                  <span><b>vDrivit Solutions pvt ltd , Pune</b> (Jun 2016 - Jul 2018)</span>
              </div>
              <div className="card-content">
                  <p>for excellent performance, commitment to quality deliverable teamwork</p>
              </div>
            </div>
            <div class="timeline-badge blue white-text"><i class="material-icons">dns</i></div>
          </div>
          <div class="timeline-event">
            <div class="card timeline-content">
              <div className="card-action">
                  <span><b>vDrivit Solutions pvt ltd , Pune</b> (Aug 2015 - Jan 2016)</span>
              </div>
              <div className="card-content">
                  <p>for excellent performance, commitment to quality deliverable teamwork</p>
              </div>
            </div>
            <div class="timeline-badge blue white-text"><i class="material-icons">dns</i></div>
          </div>
      </div>
    </div>
    
  );
}
