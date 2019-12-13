import React from 'react';
import './navHeader.scss'
import LogoTrivago from '../images/trivago.png'
import M from 'materialize-css';
import Select from '../general-components/select';

const options = [{ value: "1", name: "español" }, { value: "2", name: "ingles" }];

class NavHeader extends React.Component {

    componentDidMount = () => {
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems);
    }

    onHandleChange = (ev) => {
        console.log(ev)
    }

    render() {
        const { onHandleChange } = this
        return (
            <nav>
                <div class="nav-wrapper color-nav">
                    <img id="imgLogo" src={LogoTrivago} alt="Logo" />
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <div class="input-field col s12">
                            <Select onHandleChange={onHandleChange} options={options}></Select>
                        </div>

                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavHeader;