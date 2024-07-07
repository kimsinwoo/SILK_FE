import React from 'react';
import Api from '../api';
import style from '../style/MainPage.module.css'

const MainPage = () => {
    return (
        <div>
            <div className={style.Post_Component}>
                {
                    Api.map((a, i) => {
                        return (
                            <div key={i} className={style.Post_container}>
                                <img src={a.img} width={256} alt="" />
                                <div className={style.Detail_Section}>
                                    <h4>{a.title}</h4>
                                    <p>{a.catagory === "with" ? <p>인당: {a.personalPrice}원</p> : <p>{a.Price}원</p>}</p>
                                    <div className={style.Detail_Section_sub}>
                                        {
                                            a.catagory === "with" ?
                                                <p>{a.people} / {a.nowPeople}</p>
                                                :
                                                null
                                        }
                                        <p>{a.uploadDate}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default MainPage;
