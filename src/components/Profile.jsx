import style from '../style/Profile.module.css'

const Profile = () => {
    return (
        <div>
            <div className={style.user_info_section}>
                <img src="" alt="" />
                <h2>{/* 사용자 이름 */}</h2>
                <div>
                    <div>
                        {/* 몇학년 몇반 몇번인지 */}
                    </div>
                    <div>
                        {/* 무슨과인지 */}
                    </div>
                </div>
            </div>
            <div className={style.user_uploaded_section}>
                 {/* 유저가 업로드한 상품 (map 함수 사용) */}
            </div>
        </div>
    )
}

export default Profile