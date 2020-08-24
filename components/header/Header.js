import React from 'react';
import HeaderTop from './HeaderTop';
import HeaderBottom from './HeaderBottom';

const categoriesOptions = [
  { value: '', label: 'All Categories' },
  { value: '1', label: 'Elektronika' },
  { value: '2', label: 'Ev &amp; bağça' },
  { value: '3', label: 'Körpə məhsulları' },
  { value: '4', label: 'Gözəllik və sağlamlıq' },
  { value: '5', label: 'Kitablar' },
  { value: '6', label: 'İdman malları' },
  { value: '7', label: 'Tikinti və təmir' },
  { value: '8', label: 'Qida məhsulları' },
  { value: '9', label: 'Heyvan məhsulları' },
  { value: '10', label: 'Aptek' },
  { value: '11', label: 'Məişət texnikası' },
  { value: '12', label: 'Avtomobil məhsulları' },
  { value: '13', label: 'Mebel' },
  { value: '14', label: 'Hobbi və yaradıcılıq' },
  { value: '15', label: 'urizm, balıqçılıq, ovçuluq' },
  { value: '16', label: 'Zərgərlik' },
  { value: '17', label: 'Oyunlar üçün hər şey' },
  { value: '18', label: 'Dəftərxana ləvazimatları' },
  { value: '19', label: 'Rəqəmsal məhsullar' },
  { value: '20', label: 'Əntiq əşyaları və kolleksiya əşyaları' },
  { value: '21', label: 'Məişət kimyəvi maddələr' },
  { value: '22', label: 'Geyim' },
];

const langOptions = [
  { value: 'Azerbaijani', label: 'Azerbaijani' },
  { value: 'English', label: 'English' },
  { value: 'Russian', label: 'Russian' },
];
const currencyOptions = [
  { value: 'AZN', label: 'AZN' },
  { value: 'USD', label: 'USD' },
  { value: 'EUR', label: 'EUR' },
];

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state={
      searchText: "",
      category: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { category, searchText} = this.state;
    console.log("Submitted value: ", searchText, category );
  };
  handleLangCurrencySubmit = e =>{
    e.preventDefault();
    const { lang, currency} = this.state;
    console.log("Submitted Value: ", lang, currency);
  };

  handleCategory = category => {
    this.setState({
      category: category.value
    });
  };

  handleSearch = e => {
    this.setState({
      searchText: e.target.value
    })
  };
  render() {;
  const {lang, currency, handleCurrency, handleLang } = this.props;
    const { searchText, category } = this.state;
    return(
      <div>
        <div className="header-fixed">
          <HeaderTop
            lang={lang}
            currency={currency}
            currencyOptions={currencyOptions}
            handleCurrency={handleCurrency}
            handleLang={handleLang}
            langOptions={langOptions}
            handleLangCurrencySubmit={this.handleLangCurrencySubmit}
          />
          <HeaderBottom searchText={searchText} category={category} categoriesOptions={categoriesOptions} handleCategory={this.handleCategory} handleSearch={this.handleSearch} handleSubmit={this.handleSubmit} cat/>
        </div>

        <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
      </div>
    )
  }
}

export default Header;
