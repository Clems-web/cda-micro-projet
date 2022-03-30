import './App.scss';
import {Header} from "../Header/Header";
import {Plans} from "../Plans/Plans";


function App() {


    const listPlans = [
        {id: 1, title: 'STARTER', price: 9, order_number : 30},
        {id: 2, title: 'BUSINESS', price: 24, order_number : 100}
    ];



  return (
    <div className="App">

      <Header />

      <div className='Presentation'>
          <h1>BEST CHATTING APP FOR BUSINESS</h1>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa deleniti dolor facere laudantium nam
              praesentium quasi repellat? Alias animi blanditiis eos explicabo, ipsam maxime minima nesciunt quaerat
              quisquam vel voluptate.
          </p>
          <button>LEARN MORE</button>
      </div>

      <div className='PricingList'>

          <h2>PRICING AND PLANS</h2>
          <p className='ShortDesc'>Risk free, 30 days trial period, 30-day money back guarantee, no hidden fees</p>

          <div className='Plan'>
              {listPlans.map(plan => <Plans plan={plan} key={plan.id} />)}
          </div>

          <div className='EndPricingList'>

              <p className='ShortDesc'>Contact us if your online store is operating more than 100 orders per month</p>

              <p className='SpotRed'>30 DAYS FREE TRIAL</p>

              <p className='ShortDesc'>
                  Try the product absolutely free for the first month. No risk. No hidden fees. After that you'll get a
                  payment link inside product chat in application.
              </p>
              <button>SIGN IN</button>

          </div>

      </div>
    </div>
  );
}

export default App;
