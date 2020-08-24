import React from 'react';
// import { useTranslation, Trans } from "react-i18next";
const Facilities = () => {
  // const { t, i18n } = useTranslation();

  return(<section className="features-area common-padding">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-sm-6">
          <div className="single-feature-box">
            <div className="single-feature-icon">
               {/*<i class="fas fa-money-check-alt"></i> */}
              <img
                src="../../static/uploads/documents/CompanyFeature/1.png"
                alt="" />
            </div>
            <div className="single-feature-info">
              {/*<h4>{t("Great value")}</h4>*/}
              <h4>
                Great value
              </h4>
              <p>Məhsullara rəqabətli qiymətlər təklif edirik</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="single-feature-box">
            <div className="single-feature-icon">
              {/*<i class="fas fa-money-check-alt"></i>*/}
              <img
                src="../../static/uploads/documents/CompanyFeature/5.png"
                alt="" />
            </div>
            <div className="single-feature-info">
              <h4>24/7 dəstək mərkəzi</h4>
              <p>Rahat bir alış-veriş təcrübəsi üçün gecə-gündüz dəstək.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="single-feature-box">
            <div className="single-feature-icon">
               {/*<i class="fas fa-money-check-alt"></i>*/}
              <img src="../../static/uploads/documents/CompanyFeature/4.png" alt="" />
            </div>
            <div className="single-feature-info">
              <h4>Güvənli alış-veriş</h4>
              <p>İstifadəçilərimizi qorumaq klikdən təslimə qədər alışınızı əhatə edir.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="single-feature-box">
            <div className="single-feature-icon">
              {/*<i class="fas fa-money-check-alt"></i> */}
              <img src="../../static/uploads/documents/CompanyFeature/3.png" alt="" />
            </div>
            <div className="single-feature-info">
              <h4>Təhlükəsiz Ödəniş</h4>
              <p>Dünyanın ən populyar və etibarlı ödəniş üsulları ilə ödəyin.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="single-feature-box">
            <div className="single-feature-icon">
               {/*<i class="fas fa-money-check-alt"></i> */}
              <img src="../../static/uploads/documents/CompanyFeature/2.png" alt="" />
            </div>
            <div className="single-feature-info">
              <h4>Ümumdünya çatdırılma</h4>
              <p>5 dildə saytlarla, 200-dən çox ölkəyə və bölgəyə göndəririk.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>);
};
export default Facilities;
