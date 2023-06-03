import React from "react";
import '../Styles/Projects.css'

const Projects =() => {
    
    const Sites =[{
        pic: 'image',
        app: 'Dojo App',
        description:'Built with HTML,CSS, React JS, Javascript, Tachyons and various other libraries.A  responsive, engaging MMA gym app. Get updates on classes dynamically on a daily basis; view the full schedule; send us an email with any questions or browse the site for more information.',
        live: <a href='https://traynhamdavid426.github.io/dojo-app/' target='_blank'> <button >Live Code</button></a>,
        source: <a href="https://github.com/traynhamdavid426/dojo-app" target="_blank"> <button >Source Code</button></a>,
    },
    {
        pic: 'image',
        app: 'Cat adopt app',
        description:'Come learn infinite cat facts; what type of cat fits you personally, get greeted by our dynamic site and navigate the integration of google maps api,so you may find your furry friend. Built with React JS, HTML, CSS, Javascript and various libraries.',
        live: <a href='https://traynhamdavid426.github.io/catadopt/' target="_blank"><button>Live Code</button></a>,
        source: <a href="https://github.com/traynhamdavid426/catadopt" target="_blank"> <button>Source Code</button></a>
    },
    {
        pic: 'image',
        app: 'In progress',
        description:'Coming soon',
        live: <button>Live Code</button>,
        source: <button>Source Code</button>
    }
    ];

    const Sitelist =({pic,description,app,live,source}) => {return(<div id="projects ">
        <div className="fl mw-35 ma3 br4 shadow  pa3 tc outline mb"> <div className=" white">{pic}</div>
         <div>
         <div className=" fw8 f2 mb2 mt2 white">{app}:</div>
        <div className=" measure-narrow f4 white fw7 ">{description}</div> 
         <div className="grow  mt3 p2 br4">{live}</div>
        < div className="grow mt2"> {source}</div></div></div>

    </div>)}

    const Sitedisplay =() => {return(<div>
        {Sites.map((item,i) =>{return(
            <Sitelist key={i}
            i= {Sites[i]}
            pic={item.pic}
            app= {item.app}
            description={item.description}
            live={item.live}
            source={item.source}/>

        )})};

    </div>)}
  
    
    return(<div className="projects " id="projects">
    <h1 className="tc fw8 white f1 ">Projects:</h1>
  <div className=""><div className="content "> <Sitedisplay/></div></div>
</div>)}

export default Projects;