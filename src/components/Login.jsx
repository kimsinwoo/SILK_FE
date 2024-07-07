import { useState } from "react"
import style from '../style/Login.module.css'

const Login = () => {
    const [seePassword, setSeePassword] = useState(false)
    return (
        <div className={style.Login_container}>
            <div >

            </div>
            <form action="" className={style.Login_form} onSubmit={(e) => {
                e.preventDefault()
            }}>
                <h1>경소고 중고 / 공동 구매 <br />
                    로그인
                </h1>
                <div>
                    <input placeholder="아이디를 입력하세요." type="text" />
                    <input placeholder="비밀번호를 입력하세요" type={seePassword == true ? "text" : "password"} />
                    <input type="submit" value="로그인" />
                    <div className={style.checkbox}>
                        <div>
                            <input type="checkbox" id="seePassword" onChange={(e) => {
                                setSeePassword(e.target.checked)
                            }} />
                            <label htmlFor="seePassword">패스워드를 보여줘!</label>
                        </div>
                        <div>
                            <label htmlFor="rememberMe">나를 기억 해줘</label>
                            <input type="checkbox" id="rememberMe" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login