import React from 'react';
import Link from 'next/link';
const Footer = () => {
    return (
        <div>
            <div className="floating-chat">
                <i className="fa fa-comments" aria-hidden="true"></i>
                <div className="chat">
                    <div className="header">
                        <span className="title">what's on your mind?</span>
                        <button>
                            <i className="fa fa-times" aria-hidden="true"></i>
                        </button>
                    </div>
                    <ul className="messages">
                        <li className="other">asdasdasasdasdasasdasdasasdasdasasdasdasasdasdasasdasdas</li>
                        <li className="other">Are we dogs??? 🐶</li>
                        <li className="self">no... we're human</li>
                        <li className="other">are you sure???</li>
                    </ul>
                    <div className="footer">
                        <div className="text-box" contentEditable="true" disabled></div>
                        <button id="sendMessage">send</button>
                    </div>
                </div>
            </div>
            <section className="footer-section-one-area common-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="footer-about">
                                <div className="footer-logo">
                                    <Link href="/">
                                        <a>
                                            <img src="../../static/img/logo3.png" alt="" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="footer-about-text">
                                    It is a long established fact that a reader will be distracted by the readable
                                    content of a page when looking at its layout. The point of using Lorem Ipsum is that
                                    it has a more-or-less normal distribution of letters, as opposed to using
                                    &#039;Content here, content here&#039;, making it look like readable English. Many
                                    desktop publishing packages and web page editors now use Lorem Ipsum as their
                                    default model text, and a search for &#039;lorem ipsum&#039; will uncover many web
                                    sites still in their infancy. Various versions have evolved over the years,
                                    sometimes by accident, sometimes on purpose (injected humour and the like).
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 offset-2">
                            <div className="newsletter-box">
                                <h3>Yeniliklər üçün abunə olun</h3>
                                <p>Yeni məhsullarımız və xüsusi kampaniyalar haqqında dərhal məlumat əldə edin!</p>
                                <div className="newsletter-form">
                                    <form
                                        method="POST"
                                        action="https://beta.mystore.az/store/newsletter"
                                        acceptCharset="UTF-8">
                                        <input
                                            name="_token"
                                            type="hidden"
                                            value="RfJ1YgLyUfPcMNu0u4zETpbTsVzhQOR7FsBVaJ6V"
                                        />
                                        <input type="email" name="email" placeholder="E-poçt ünvanınızı daxil edin" />
                                        <button type="submit">
                                            <i className="fas fa-location-arrow"></i>
                                        </button>
                                    </form>
                                </div>
                                <div className="footer-social-links">
                                    <ul>
                                        <li>
                                            <a
                                                href="https://www.facebook.com/sharer/sharer.php?u=http://mystore.updatetechltd.com>"
                                                className="facebook">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://twitter.com/intent/tweet?text=&amp;url=http://mystore.updatetechltd.com"
                                                className="twitter">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/mystore" className="linkedin">
                                                <i className="fab fa-linkedin-in"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" className="instagram">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="pinterest">
                                                <i className="fab fa-pinterest"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="footer-section-two-area common-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="footer-links">
                                <h3>Necə almaq</h3>

                                <ul>
                                    <li>
                                        <a href="/payment-method">Ödənişlərin edilməsi</a>
                                    </li>
                                    <li>
                                        <a href="/delivery-method">Çatdırılma seçimləri</a>
                                    </li>
                                    <li>
                                        <a href="/buyer-protection">Alıcının qorunması</a>
                                    </li>
                                    <li>
                                        <a href="/user-guide">Yeni İstifadəçi bələdçisi</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="footer-links">
                                <h3>Müştəri xidməti</h3>
                                <ul>
                                    <li>
                                        <Link href="/blogs">
                                            <a>Blog</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/customer-service">
                                            <a>Müştəri xidməti</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/terms-condition">
                                            <a>Şərtlər və qaydalar</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faq">
                                            <a>Sual-cavab</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy-policy">
                                            <a>Gizlilik siyasəti</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <a>Bizimlə əlaqə</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="footer-links">
                                <h3>Partnyor təşviqi</h3>
                                <ul>
                                    <li>
                                        <Link href="/partnership">
                                            <a>footer.Partnership</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/affiliate">
                                            <a>footer.Affiliate Program</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 mt-2-m">
                            <div className="footer-links">
                                <h3>Kateqoriyalar üzrə baxış</h3>
                                <ul>
                                    <li>
                                        <a href="category/1-elektronika.html">Elektronika</a>
                                    </li>
                                    <li>
                                        <a href="category/2-ev-bagca.html">Ev &amp; bağça</a>
                                    </li>
                                    <li>
                                        <a href="category/4-korpe-mehsullari.html">Körpə məhsulları</a>
                                    </li>
                                    <li>
                                        <a href="category/5-gozellik-ve-saglamliq.html">Gözəllik və sağlamlıq</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 mt-2-m">
                            <div className="footer-links footer-links-with-image">
                                <h3>Download Our App</h3>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <img src="../../static/img/ic-download-ios.png" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="../../static/img/ic-download-android.png" alt="" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;
