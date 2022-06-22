import './service.scss'
import { MdOutlineDeveloperMode, MdDomain, MdModelTraining} from 'react-icons/md'
import {FaCogs,FaDatabase,FaSearch} from 'react-icons/fa'

const Service = () => {
    return(
        <section id="services">
            <h5>what i offer</h5>
            <h2>my services</h2>

            <div className="container service-container">
                <article className="service">
                    <div className="icon">
                        <MdOutlineDeveloperMode className="service-icon" />
                    </div>
                    <h2>web development</h2>
                </article>

                <article className="service">
                    <div className="icon">
                        <MdDomain className="service-icon" />
                    </div>
                    <h2>web hosting</h2>
                </article>

                <article className="service">
                    <div className="icon">
                        <FaCogs className="service-icon" />
                    </div>
                    <h2>web maintaining</h2>
                </article>

                <article className="service">
                    <div className="icon">
                        <FaDatabase className="service-icon" />
                    </div>
                    <h2>non sql database management</h2>
                </article>

                <article className="service">
                    <div className="icon">
                        <MdModelTraining className="service-icon" />
                    </div>
                    <h2>web development training</h2>
                </article>

                <article className="service">
                    <div className="icon">
                        <FaSearch className="service-icon" />
                    </div>
                    <h2>search engine optimization</h2>
                </article>
            </div>
        </section>
    )
}

export default Service