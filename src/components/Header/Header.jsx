import React, {useState} from 'react';
import './Header.scss'
import {NavLink} from  'react-router-dom'
import LoginModal from "../modals/Auth/LoginModal/LoginModal";
import RegisterModal from "../modals/Auth/RegisterModal/RegisterModal";

const Header = props => {

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  return (
    <>
      <nav className='header__wrapper'>
        <div className='header container'>
          <h1>
            <NavLink to='/' exact>Змагання</NavLink>
          </h1>

          {props.user
            ? <ul>
              <li>
                <NavLink to={`/user/${props.user.id}`}>{props.user.name}</NavLink>
              </li>
              <li>
                <span onClick={props.logout}>Logout</span>
              </li>
            </ul>
            : <ul>
              <li>
                <span onClick={() => setIsLoginModalOpen(true)}>Увійти</span>
              </li>
              <li>
                <span onClick={() => setIsRegisterModalOpen(true)}>Реєстрація</span>
              </li>
            </ul>
          }
        </div>
      </nav>


      <LoginModal
        open={isLoginModalOpen}
        setIsModalOpen={setIsLoginModalOpen}
      />
      <RegisterModal
        open={isRegisterModalOpen}
        setIsModalOpen={setIsRegisterModalOpen}
      />
    </>
  )
};


export default Header;