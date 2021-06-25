import React from "react";
import {Link} from "react-router-dom";
function changeColor()
{
  document.getElementById('de12').style.color="red";
}
function Tabs() {
  return (

    <div className="tab-main">
      <div className="delivery">
      <Link to='/' className="del122">
        <div className="delivery1" onClick={changeColor}>
        <div className="delivery2">
          <div className="icons1">
            <div className="icon2">
              <img
                className="icons"
                src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png"
                alt="delivery"
              ></img>
            </div>
          </div>
          <div className="del2" id="de12">Delivery</div>
          </div>
        </div>
        </Link>

        <Link to='/Diningout' className="del122">
        <div className="delivery1" onClick={changeColor}>
        <div className="delivery2">
          <div className="icons11">
            <div className="icon2">
              <img
                className="icons"
                src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png"
                alt="diningout"
              ></img>
            </div>
          </div>
          <div className="del1">Dining Out</div>
          </div>
        </div>
        </Link>

        <Link to='/Nightlife' className="del122">
        <div className="delivery1" onClick={changeColor}>
        <div className="delivery2">
          <div className="icons111">
            <div className="icon2">
              <img
                className="icons"
                src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png"
                alt="Nightlife"
              ></img>
            </div>
          </div>
          <div className="del">Nightlife</div>
          </div>
        </div>
        </Link>

        <Link to='/Nutrition' className="del122">
        <div className="delivery1" onClick={changeColor}>
        <div className="delivery2">
          <div className="icons1111">
            <div className="icon2">
              <img
                className="icons"
                src="https://b.zmtcdn.com/data/o2_assets/54cad8274d3c3ec7129e0808a13b27c31616582882.png"
                alt="Nutrition"
              ></img>
            </div>
          </div>
          <div className="del">Nutrition</div>
          </div>
        </div>
        </Link>
      </div>
    </div>
  );
}
export default Tabs;
