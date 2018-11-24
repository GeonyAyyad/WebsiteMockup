import React from "react"

const style = {
  width: "700px",
  marginLeft: "auto",
  marginRight: "auto",
  display: "block",
  textAlign: "center",

}

const EventSection = props =>
  <div>
      <div className="Event-section">
    <div className="container">
        <div class="content">
            <div class="row">
                
                <div class="col-sm-6">
                    <div class="home-event-left">
                        <h2 class="home-events-heading">
                        upcoming <span>Events</span>
                        </h2>
                        
                        <div class="home-event-outer small-church">
                            
                            <div class="event-left-item">
                                <div class="event-item-date">
                                    <span>24</span>
                                </div>
                                <div class="event-item-month">
                                    <span>Nov</span>
                                </div>
                            </div>
                            <div class="event-right-item">
                                <h2 class="evente-right-heading">English Mass</h2>
                                <p>Starts: 4:00 pm Ends: 5:00 pm
                                </p>
                            </div>
                        </div>
                        <div class="home-event-outer large-church">
                            <div class="event-left-item">
                                <div class="event-item-date">
                                    <span>24</span>
                                </div>
                                <div class="event-item-month">
                                    <span>Nov</span>
                                </div>
                            </div>
                            <div class="event-right-item">
                                <h2 class="evente-right-heading">Spanish Mass</h2>
                                <p>Starts: 7:30 pm Ends: 8:30 pm</p>
                            </div>
                        </div>
                        <div class="home-event-outer small-church">
                            <div class="event-left-item">
                                <div class="event-item-date">
                                    <span>25</span>
                                </div>
                                <div class="event-item-month">
                                    <span>Nov</span>
                                </div>
                            </div>
                            <div class="event-right-item">
                                <h2 class="evente-right-heading">English Mass</h2>
                                <p>Starts: 8:30 am Ends: 9:30 am</p>
                            </div>
                        </div>
                        <div class="home-event-outer large-church">
                            <div class="event-left-item">
                                <div class="event-item-date"><span>25</span>
                            </div>
                            <div class="event-item-month"><span>Nov</span>
                        </div>
                    </div>
                    <div class="event-right-item">
                        <h2 class="evente-right-heading">Spanish Mass</h2>
                        <p>Starts: 9:45 am Ends: 10:45 am</p>
                    </div>
                </div>
                
                <a class="btn btn-gray" href="https://blessedsacrament-brooklyn.org/calendar/">View All Events</a>
                
                <br />
                <br />
            </div>
        </div>
    </div>
</div>
</div>
</div>
  
  </div>;

export default EventSection;