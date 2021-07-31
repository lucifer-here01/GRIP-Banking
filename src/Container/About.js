import React from 'react';
import Button from "@material-ui/core/IconButton";
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const About = () => {
    return (
        <div className="container">
            <div className="py-4">
                <h1 className="py-4" >Designed By Suarabh Gupta </h1>
                <h1 className="py-4" > Developed By Rishi Kumar </h1>
                <h1 className="py-4" >Project Integration and Deployment by Vipul Sharma </h1>
                <div style={{ display: "flex" }}>
                    
                        <Button style={{ color: "black" }} onClick={() => window.open("https://github.com/lucifer-here01", '_blank')}>
                            <GitHubIcon />
                        </Button>
                
                    <Button style={{ color: "black" }} onClick={() => window.open("", '_blank')}>
                        <TwitterIcon />
                    </Button>
                    <Button style={{ color: "black" }} onClick={() => window.open("https://www.linkedin.com/in/rishikumar147/", '_blank')}>
                        <LinkedInIcon />
                    </Button>
                </div>
            </div>

        </div>
    );
};

export default About;