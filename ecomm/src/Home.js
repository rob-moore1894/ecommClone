import React from 'react'
import "./Home.css";
import Product from './Product';


function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />
        
                <div className="home__row">
                    <Product 
                        id = "1"
                        title="Laser Cut Monogram" 
                        price={15.99} 
                        image="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-0/p526x296/117130096_967603626986749_2699964929535785143_o.jpg?_nc_cat=102&ccb=3&_nc_sid=8bfeb9&_nc_ohc=PabCBK2HOVUAX8YAjJr&_nc_ht=scontent-dfw5-2.xx&tp=6&oh=9c864e03398f56cb0e2e97851ed33582&oe=6049957B" 
                        rating={5}/>
                    <Product 
                        id = "2"
                        title="Kuryakyn 4357 Motorcycle Foot Control Component: Ribbed Folding Boards for Driver or Passenger Floorboards, Wrinkle Black, 1 Pair" 
                        price={152.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/813bwRSbehL._AC_SX679_.jpg" 
                        rating={4}/>
                </div>
                <div className="home__row">
                    <Product 
                        id = "3"
                        title='Mr IRONSTONE L-Shaped Desk 50.8" Computer Corner Desk, Home Gaming Desk, Office Writing Workstation with Large Monitor Stand, Black' 
                        price={79.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/61XuuXiLRxL._AC_SX450_.jpg" 
                        rating={5}
                    />
                    <Product 
                        id = "4"
                        title="HP OfficeJet Pro 8025 All-in-One Wireless Printer, Smart Home Office Productivity, HP Instant Ink, Works with Alexa (1KR57A)" 
                        price={169.89} 
                        image="https://images-na.ssl-images-amazon.com/images/I/71qmjgFw5FL._AC_SX522_.jpg" 
                        rating={4}
                    />
                    <Product 
                        id = "5"
                        title="Laser Cut Wooden Sign" 
                        price={29.99} 
                        image="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-0/p526x296/117444716_970928169987628_848189242092012146_o.jpg?_nc_cat=103&ccb=3&_nc_sid=8bfeb9&_nc_ohc=Hq1WYQfSk04AX99iR_5&_nc_ht=scontent-dfw5-1.xx&tp=6&oh=aabde88cb58037af9552009c3a018f2e&oe=604ABA4B" 
                        rating={3}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id = "6"
                        title="Wonder Woman Cancer Ribbon" 
                        price={20.00} 
                        image="https://scontent-dfw5-2.xx.fbcdn.net/v/t45.5328-4/s960x960/45471694_2168673146510952_2483768158368825344_n.jpg?_nc_cat=106&ccb=3&_nc_sid=c48759&_nc_ohc=CIBYo8Ssd5YAX_1PCDy&_nc_ht=scontent-dfw5-2.xx&tp=7&oh=305654471ca825e91fc7e3e904117503&oe=6049FAB4" 
                        rating={4}
                    />
                </div>
            
            </div>
        </div>
    )
}

export default Home
