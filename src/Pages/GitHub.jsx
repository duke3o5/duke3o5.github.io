import React from "react";
import GitHubCalendar from "react-github-calendar";

export const Github = () => {
  return (
    <div className="section" style={{ textAlign:"center", margin:"auto", marginTop: "2%"}}>
    <h1 >Github</h1>
    <div className="github section" id="Github" >
      
      <span className="section_subtitle">Calender And Stats</span>

      
      <div className="github_container container">
        <a href="https://github.com/Duke3o5" target="_blank" rel="noreferrer">
          <img id="github-stats-card"
            alt="Github Stats"
            src="https://github-readme-stats.vercel.app/api?username=duke3o5&show_icons=true&count_private=true&theme=tokyonight"
            
            width={"60%"}
          />
        </a>
      </div>
      <div className="github_container container" style={{width:"100%",marginTop:"20px"}}>
        <a href="https://github.com/Duke3o5" target="_blank" rel="noreferrer">
          <img id="github-streak-stats"
            alt="Github Stats"
            src="https://github-readme-streak-stats.herokuapp.com?user=Duke3o5&theme=tokyonight"
            // height="192px"
            width={"60%"}
          />
          {/* [![GitHub Streak](https://github-readme-streak-stats.herokuapp.com?user=Duke3o5&theme=tokyonight)](https://git.io/streak-stats) */}
        </a>
      </div>
      <div className="github_container container"style={{width:"100%",marginTop:"20px"}}>
        <a href="https://github.com/Duke3o5" target="_blank" rel="noreferrer">
          <img id="github-top-langs"
            alt="Github Stats"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=duke3o5&layout=compact&theme=shades-of-purple"
            // height="192px"
            width={"60%"}
          />
        </a>
      </div>

     

      <div className="github_container container"style={{width:"90%",margin:"20px 0 0 8%",backgroundColor:"black",padding:"10px",color:"white",border:"1px solid white"}}>
        <a style={{textDecoration:"none"}}href="https://github.com/duke3o5" target="_blank" rel="noreferrer">
          <GitHubCalendar   username="duke3o5" className="calender react-activity-calendar" style={{color:"white"}}/>
        </a>
      </div>
    </div>
     
     </div>
  )
}