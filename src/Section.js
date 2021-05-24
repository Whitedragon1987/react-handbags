import React from "react";

function Section({brand, brandtitle, title, paragraph1, paragraph2}){
    return(
        <section>
            <img src={brand} alt={brandtitle}/>
            <h2>{title}</h2>
            <p>{paragraph1}</p>
            <p>{paragraph2}</p>
        </section>
    );
}

export default Section;