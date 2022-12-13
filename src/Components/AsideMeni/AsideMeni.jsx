import React from 'react'

function AsideMeni({meniData}) {
  return (
    <article className="col-11 col-lg-8 py-3 bg-secondary ml-auto my-3 text-center rounded">
        <h5>{meniData.title}</h5>
        <ul className="nav flex-column nav-pills">
            {
                meniData.items.map((item, index) => {
                    return (
                        <li className="nav-item" key={index}>
                            <a className={`nav-link ${index === 0 ? 'active' : 'null'}`}  href="/">{item.title}</a>
                        </li>
                    );
                })
            }
        </ul>
    </article>
  )
}

export default AsideMeni