import React from 'react';

function Header({title, links}) {

  return (
    <>
        <section id="main-title" className="row px-1 px-md-3 mx-md-0 mb-1 bg-secondary rounded">
            <h4 className="col-12 col-md-2 p-2 mx-2">{title}</h4>
        </section>

        <section id="quick-links" className="row px-1 px-md-3  mb-1 text-center">
            {
                links.map((link, index) => {
                    return (
                        <a className="col-5 col-md-2 py-1 mr-1 mb-1 bg-secondary rounded" href="/" key={index}>
                            {link.title} 
                        </a>
                    );
                })
            }
        </section>
    </>
  )
}

export default Header