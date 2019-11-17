import React from 'react';
import axios from 'axios';
import './App.css';
import { Cashify }from 'cashify';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      rates: null,
      amount: null,
      from: '',
      to: '',
      result: null
    }
  }

  componentDidMount() {
    axios.get('https://api.exchangeratesapi.io/latest?base=USD')
     .then(responce => {
       this.setState({ rates: responce.data.rates });
     });
  }

  handleAmountInput = (e) => {
    this.setState({ amount: Number(e.target.value) }, () => console.log(this.state));
  }

  handleFrom = (e) => {
    this.setState({ from: e.target.value }, () => console.log(this.state));
  }

  handleTo = (e) => {
    this.setState({ to: e.target.value }, () => console.log(this.state));
  }

  handleConvert = (e) => {
    e.preventDefault();
    const cashify = new Cashify({base: 'USD', rates: this.state.rates});
    const result = cashify.convert(this.state.amount, {from: this.state.from, to: this.state.to});
    this.setState({ result });
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form>
            <label>Amount</label>
            <br />
            <input type="text" value={this.state.amount} onChange={this.handleAmountInput}></input>
            <br />
            <label>From</label>
            <br />
            <select onChange={this.handleFrom}>
              <option value="">Select</option>
              <option value="AUD">🇦🇺 Australian dollar</option>
              <option value="BRL">🇧🇷 Brazilian real</option>
              <option value="BGN">🇧🇬 Bulgarian lev</option>
              <option value="CAD">🇨🇦 Canadian dollar</option>
              <option value="CNY">🇨🇳 Chinese yuan</option>
              <option value="HRK">🇭🇷 Croatian kuna</option>
              <option value="CZK">🇨🇿 Czech koruna</option>
              <option value="DKK">🇩🇰 Danish krone</option>
              <option value="EUR">🇪🇺 Euro</option>
              <option value="USD">🇺🇸 US dollar</option>
              <option value="HKD">🇭🇰 Hong Kong dollar</option>
              <option value="HUF">🇭🇺 Hungarian forint</option>
              <option value="ISK">🇮🇸 Icelandic krona</option>
              <option value="INR">🇮🇳 Indian rupee</option>
              <option value="IDR">🇮🇩 Indonesian rupiah</option>
              <option value="ILS">🇮🇱 Israeli shekel</option>
              <option value="JPY">🇯🇵 Japanese yen</option>
              <option value="NOK">🇳🇴 Norwegian krone</option>
              <option value="PLN">🇵🇱 Polish zloty</option>
              <option value="GBP">🇬🇧 Pound sterling</option>
              <option value="RON">🇷🇴 Romanian leu</option>
              <option value="RUB">🇷🇺 Russian rouble</option>
              <option value="KRW">🇰🇷 South Korean won</option>
              <option value="MXN">🇲🇽 Mexican peso</option>
              <option value="MYR">🇲🇾 Malaysian ringgit</option>
              <option value="NZD">🇳🇿 New Zealand dollar</option>
              <option value="PHP">🇵🇭 Philippine peso</option>
              <option value="SGD">🇸🇬 Singapore dollar</option>
              <option value="THB">🇹🇭 Thai baht</option>
              <option value="ZAR">🇿🇦 South African rand</option>
              <option value="SEK">🇸🇪 Swedish krona</option>
              <option value="CHF">🇨🇭 Swiss franc</option>
              <option value="TRY">🇹🇷 Turkish lira</option>
            </select>
            <br />
            <label>To</label>
            <br />
            <select onChange={this.handleTo}>
              <option value="">Select</option>
              <option value="AUD">🇦🇺 Australian dollar</option>
              <option value="BRL">🇧🇷 Brazilian real</option>
              <option value="BGN">🇧🇬 Bulgarian lev</option>
              <option value="CAD">🇨🇦 Canadian dollar</option>
              <option value="CNY">🇨🇳 Chinese yuan</option>
              <option value="HRK">🇭🇷 Croatian kuna</option>
              <option value="CZK">🇨🇿 Czech koruna</option>
              <option value="DKK">🇩🇰 Danish krone</option>
              <option value="EUR">🇪🇺 Euro</option>
              <option value="USD">🇺🇸 US dollar</option>
              <option value="HKD">🇭🇰 Hong Kong dollar</option>
              <option value="HUF">🇭🇺 Hungarian forint</option>
              <option value="ISK">🇮🇸 Icelandic krona</option>
              <option value="INR">🇮🇳 Indian rupee</option>
              <option value="IDR">🇮🇩 Indonesian rupiah</option>
              <option value="ILS">🇮🇱 Israeli shekel</option>
              <option value="JPY">🇯🇵 Japanese yen</option>
              <option value="NOK">🇳🇴 Norwegian krone</option>
              <option value="PLN">🇵🇱 Polish zloty</option>
              <option value="GBP">🇬🇧 Pound sterling</option>
              <option value="RON">🇷🇴 Romanian leu</option>
              <option value="RUB">🇷🇺 Russian rouble</option>
              <option value="KRW">🇰🇷 South Korean won</option>
              <option value="MXN">🇲🇽 Mexican peso</option>
              <option value="MYR">🇲🇾 Malaysian ringgit</option>
              <option value="NZD">🇳🇿 New Zealand dollar</option>
              <option value="PHP">🇵🇭 Philippine peso</option>
              <option value="SGD">🇸🇬 Singapore dollar</option>
              <option value="THB">🇹🇭 Thai baht</option>
              <option value="ZAR">🇿🇦 South African rand</option>
              <option value="SEK">🇸🇪 Swedish krona</option>
              <option value="CHF">🇨🇭 Swiss franc</option>
              <option value="TRY">🇹🇷 Turkish lira</option>
            </select>
            <br />
            <button onClick={this.handleConvert}>Convert</button>
          </form>
          <h1>{this.state.result}</h1>
        </header>
      </div>
    );
  }
}

export default App;
