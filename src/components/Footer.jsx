import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function Footer() {
  return (
    <footer>
    <div className="footer__items">
        <div className="foot__logo">
            <Link to={"/"} className='logo'>Mon Cooking</Link>
        </div>
        <div>
            <h3>เกี่ยวกับ Punthai</h3>
            <div className="foot__list">
                <Link to={""}>คำถามที่พบบ่อย</Link>
                <Link to={""}>ข้อตกลงเงื่อนไข</Link>
                <Link to={""}>สมัครสมาชิก</Link>
            </div>
        </div>
        <div>
            <h3>ผลิตภัณฑ์</h3>
            <div className="foot__list">
                <Link to={""}>ห้องพัก</Link>
                <Link to={""}>ห้องประชุม</Link>
                <Link to={""}>รายการอาหาร</Link>
            </div>
        </div>
        <div>
            <h3>แผนกบริการลูกค้า</h3>
            <div className="foot__list">
                <Link to={""}>ติดต่อเรา</Link>
                <Link to={""}>วิธีการชำระเงิน</Link>
                <Link to={""}>รายระเอียดการประกัน</Link>
            </div>
        </div>
        <div>
            <h3>อื่นๆ</h3>
            <div className="foot__list">
                <Link to={""}>บทความทั้งหมด</Link>
                <Link to={""}>รีวิวห้องพัก</Link>
                <Link to={""}>เปรียบเทียบห้องพัก</Link>
            </div>
        </div>
        <div className="foot__hidden"></div>
        <div>
            <h3>ติดตามเราได้ทาง</h3>
        </div>
        <div>
            <div className="box__contact">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{fill: "#8e7968"}} viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{fill: "#8e7968"}} viewBox="0 0 24 24"><path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{fill: "#8e7968"}} viewBox="0 0 24 24"><path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path><circle cx="11.994" cy="11.979" r="3.003"></circle></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{fill: "#8e7968"}} viewBox="0 0 24 24"><path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"></path></svg>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer;