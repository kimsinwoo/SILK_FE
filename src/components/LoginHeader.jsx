import style from '../style/LoginHeader.module.css'
import { Link } from 'react-router-dom'

const LoginHeader = ({isLogin}) => {
    return (
        <div className={style.LoginHeader_component}>
            {
                isLogin == true ? 
                <div className={style.Login_Link}>
                    <button className={style.Logout}>
                        <span class="material-symbols-outlined">logout</span>
                        로그아웃
                    </button>
                </div> :
                <div className={style.Login_Link}>
                    <Link to="/login" className={style.Link}>
                        <span class="material-symbols-outlined">login</span>
                        로그인
                    </Link>
                </div>
            }
        </div>
    )
}

export default LoginHeader