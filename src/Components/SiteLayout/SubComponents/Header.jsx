import wyzlogo from '../../../assets/images/logo.png';
import { MenuData } from '../../../Constant/HomeDate';
import { Link } from 'react-router-dom';

const MenuItem = (props) =>{
    return(
        <>
            {
                <li className="nav-item">
                    <Link className="nav-link" to={props.link}>{props.name}</Link>
                </li>
            }
        </>
    );
}


const Header = () =>{
    return(
        <>
            <header className="wyzHeader fixed" id="main-head">
                <div className="container">
                    <nav className="navbar navbar-expand-sm  navbar-dark">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="index.html">
                                <img src={wyzlogo} alt={wyzlogo}/>                                    
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                            <span className="navbar-toggle"><i className="fa fa-bars"></i></span>
                            </button>
                            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                                <ul className="navbar-nav">
                                    {
                                        MenuData.map((val, ind) =>{
                                            return<MenuItem
                                                key={ind}
                                                name={val.name}
                                                link={val.link}
                                            />
                                        })
                                    }
                                    <li className="nav-item teli_icon">
                                        <a className="nav-link py_2 hover_flip" href="#">Learn</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}
export default Header;