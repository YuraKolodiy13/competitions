import React, {useState} from 'react';
import './Header.scss'
import {NavLink} from  'react-router-dom'
import LoginModal from "../modals/Auth/LoginModal/LoginModal";
import RegisterModal from "../modals/Auth/RegisterModal/RegisterModal";
import {useSelector} from "react-redux";
const Header = () => {

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const user = useSelector(state => state.auth.user);

  return (
    <>
      <nav className='header__wrapper'>
        <div className='header container'>
          <h1>
            <NavLink to='/' exact>Змагання</NavLink>
          </h1>

          <ul>
            <li>
              <NavLink to={'/teams'}>Команди</NavLink>
            </li>
          </ul>

          {user
            ? <ul>
              <li>
                <NavLink to={`/user/${user._id}`}>{user.name}</NavLink>
              </li>
              <li>
                <span>Logout</span>
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