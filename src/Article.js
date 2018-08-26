import React, { Component } from 'react';
import './Article.css';
import {Link} from 'react-router-dom'


class Article extends Component {  
    render() {
        const article=window.location.toString().split('?')[1].split('=')[1];
        let sn = parseInt(article[article.length - 1]);

        let articles = []
        if (article === 'section1') {
            articles.push({
                title: "It' snowing !!",
                content: '看過才知道初雪的浪漫,某天早上醒來發現外頭一片雪白,打開門的瞬間就像走入了白色天堂',
            })
            articles.push({
                title: "Let's go sking !",
                content: '人生第一次滑雪,才知道滑雪這麼累 ！小腿又痠又痛,不過還是硬著頭皮上完新手課,結束之後只有一個字就是累 ！',
            })
            articles.push({
                title: 'Movie night',
                content: '特別的體驗,原來國外的電影是沒有字幕的！而且椅子居然是電動躺椅,但是票價卻跟台灣差不多',
            })
            articles.push({
                title: 'Go Camping !',
                content: '親手搭起的帳篷,三五好友聊聊天,小酌一杯暖暖身子,搭配著夜晚的星光,在加拿大的生活好像都是這麼的愜意'
            })
        }
        if (article === 'section2') {
            articles.push({
                title: 'The First Homestay ',
                content: '住了將近四個月的地下室,感謝房東太太常常煮家鄉菜給我們吃,感謝所有給過幫助的每個人 ～'
            })
            articles.push({
                title: 'Okanagan Lake',
                content: '是Kelowna小鎮裡最大的一片湖,大到讓人分不清是湖還是海,休假時候來湖邊散步總是可以靜靜心'
            })
            articles.push({
                title: 'The Horses Neighbors',
                content: '隔壁的蘋果園養的兩隻馬,每天出門都會跟他們打個招呼'
            })
            articles.push({
                title: 'The First Job',
                content: '不知道哪來的勇氣,履歷都是自己walk in,也很慶幸自己有鼓起勇氣,得到這份工作遇到好的同事,也學到寶貴的經驗'
            })
        }
        if (article === 'section3') {

        }
        if (article === 'section4') {

        }

        const articleCollection = articles.map((obj, idx) => {
            return (
                    <div className='col' key={idx}>
                     <div className='image'></div>
                            <div className='text'>
                                <h3>{obj.title}</h3>
                                <br/>
                                <p>{obj.content}</p>
                            </div>
                    </div>
            )
        })

    return (
     <div className="article">
                <div className={article}>
                    {articleCollection} 
                </div>           
                    <div className='changepage'>
                        <Link to={`/article?id=section${sn-1}`}>
                        Last
                        </Link>
                        <Link to={`/article?id=section${sn+1}`}>
                        Next
                        </Link>
                     </div>
                
     </div>
    );
  }
}

export default Article;