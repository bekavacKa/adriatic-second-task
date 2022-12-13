import React from 'react';
import AsideMeni from '../../Components/AsideMeni/AsideMeni';
import Header from '../../Components/Header/Header';
import data from '../../Json/data.json';
import './about-us.css';

function AboutUs() {


  return (
    <>
    {
        data.mainTitle && data.quickLinks &&
        <Header title={data.mainTitle} links={data.quickLinks} />
    }
        <main className="row mb-5">

            {/* <!-- * LEFT SECTION --> */}
            <section className="col-12 col-md-8 px-0 px-md-3">

                {/* <!-- ? About --> */}
                {
                    data.about && 
                    <article id="about" className="col-12 mb-3 px-md-0">
                        <h3 className="mb-3">{data.about.seactionTitle}</h3>                 
                        <p className="text-justify">{data.about.text}</p>
                    </article>
                }
                
                {/* <!-- ? Missions --> */}
                {
                    data.mission &&
                    <article id="missions" className="col-12 mb-3 px-md-0">
                        <h3 className="mb-3">{data.mission.sectionTitle}</h3>
                        <p className="text-justify">{data.mission.textMission}</p>
                        <p className="text-justify">{data.mission.textVision}</p>
                    </article>
                }

                {/* <!-- ? Values --> */}
                {
                    data.values && 
                    <article id="values" className="col-12 col-md-10 mb-3 px-md-0">
                        <h3 className="mb-3">{data.values.sectionTitle}</h3>
                        <div className="row px-2 px-md-0">
                            {
                                data.values.items.map((item, index) => {
                                    return (
                                        <div className="col-6 col-md-4 d-flex" key={index}>
                                            <div className="col-md-12 card mb-4 bg-secondary">
                                                <div className="card-body text-center p-0 py-3 d-flex flex-column justify-content-between align-items-center">
                                                    <img src={ require(`../../Assets/${item.image}`) } href="/" className="rounded pt-3 pb-4 values-image" alt={item.alt} />
                                                    <div>
                                                        <h5 className="card-title">{item.title}</h5>
                                                        <p className="card-text">{item.alt}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </article>
                }

                {/* <!-- ? Discover More --> */}
                {
                    data.discoverMore &&
                    <article id="discover-more" className="col-12 col-md-10 mb-3 px-md-0">
                        <h3 className="mb-3">{data.discoverMore.sectionTitle}</h3>
                        <div className="row">
                            {
                                data.discoverMore.items.map((item, index) => {
                                    return (
                                        <div className="col-12 col-md-6" key={index}>
                                            <div className="card mb-4 bg-secondary">
                                                <div className="card-body">
                                                    <h3 className="card-title">{item.title}</h3>
                                                    <img src={ require(`../../Assets/${item.image}`) } className="card-img-top" href="/" alt="..." />
                                                    <p className="card-text text-right">{item.urlText}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </article>
                }

                {/* <!-- ? User About Us --> */}
                {
                    data.usersAboutUs &&
                    <article id="user-about-us" className="col-12 col-md-10 mb-3 px-md-0">
                        <h3 className="mb-3">{data.usersAboutUs.sectionTitle}</h3>
                        <div className="card bg-secondary">
                            <div className="card-body">
                                <p className="card-text text-justify">{data.usersAboutUs.text}</p>
                                <h6 className="card-title text-right">{data.usersAboutUs.user}</h6>
                            </div>
                        </div>
                    </article>
                }

            </section>

            <aside id="meni-section" className="col-4 d-none d-lg-block d-md-block">
                {
                    data.aboutMenu && 
                    <AsideMeni meniData={data.aboutMenu} />
                }
                {
                    data.usefulLinks &&
                    <AsideMeni meniData={data.usefulLinks} />
                }
            </aside>

        </main>
    </>

  )
}

export default AboutUs