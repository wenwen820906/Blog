import React, { Component } from 'react';
import './Article.css';
import {Link} from 'react-router-dom'


class Article extends Component {  
    render() {
        const article=window.location.toString().split('?')[1].split('=')[1];
        let sn = parseInt(article[article.length - 1],10);
        let title ='';

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
            title='------ The First Time In Canada -----';
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
            title='----- My Life In Kelowna -----';
        }
        if (article === 'section3') {
            articles.push({
                title: "Fairmont Lake Louise",
                content: '完全沒想到自己能在這高級飯店工作,把這絕美的風景當作後院,遇到很多好同事,雖然工作很累,但是在這的隱居生活讓我更明白自己要的是什麼',
            })
            articles.push({
                title: "Gondola",
                content: '一直很想嘗試開放式的纜車,這邊冬天的時候是一個雪場,夏天雪都溶了所以變成給觀光客看風景的纜車,真的是物盡其用呢 ！',
            })
            articles.push({
                title: "Ice Field !",
                content: '千年不溶的天使冰河,從遠方看就可以感受到氣勢磅礡,近距離踏上冰河還能看到水波動的形狀,真的是太神奇了 ！！',
            })
            articles.push({
                title: "Arora",
                content: '住在深山的好處就是沒有光害,當極光出現的時候可以看的一清二楚,省了跑去最北方的極光圈',
            })
            title='----- The Backyard . Lake Louise -----';
        }
        if (article === 'section4') {
            articles.push({
                title: "Parliament Building",
                content: '位於加拿大首都Ottawa的國會大樓,越往東部走會發現越來越多歷史悠久的城堡建築,好像走入了中古世紀,充滿古色古香',
            })
            articles.push({
                title: "Quebec Fairmont Castle Hotel",
                content: '又是一棟歷史悠久的城堡,因為韓劇"鬼怪"被廣為人知,去的時候也發現不少韓國人到這裡觀光',
            })
            articles.push({
                title: "Rue de Petit Champlain",
                content: '魁北克,小香普蘭街，有著濃濃的歐洲風情,兩旁的建築色彩繽紛,走在街上腳步會不自覺的慢下來,就怕錯過一點小細節',
            })
            articles.push({
                title: "Niagara Falls",
                content: '位於美加交界的尼加拉瓜大瀑布,實際搭船近距離接觸才覺得真的很大,在船上都能強烈感受到落下的水速,越是靠近越像是颱風天,穿著雨衣還是溼透的那種',
            })
            title='----- Head To East Of Canada -----';
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
                <h2>{title}</h2>
                <div className={article}>
                    {articleCollection} 
                </div>         
                    <div className='changepage'>
                        <div style={(article ==='section1')?{visibility:'hidden'}:{visibility:'visible'}}>
                            <Link to={`/article?id=section${sn-1}`}>
                            Last
                            </Link>
                        </div>
                        <div style={(article ==='section4')?{visibility:'hidden'}:{visibility:'visible'}}>
                            <Link to={`/article?id=section${sn+1}`}>
                            Next
                            </Link>
                        </div>
                     </div>
                
     </div>
    );
  }
}

export default Article;