// import { useState } from 'react'
// import { Wheel } from 'react-custom-roulette'

import CreateWheel from "../CreateWheel/CreateWheel";

function SpinWheel() {
  const data = [
    { option: '0' },
    { option: '1' },
    { option: '2' },
  ]

  // const [mustSpin, setMustSpin] = useState(false);
  // const [prizeNumber, setPrizeNumber] = useState(0);

  // const handleSpinClick = () => {
  //   if (!mustSpin) {
  //     const newPrizeNumber = Math.floor(Math.random() * data.length);
  //     setPrizeNumber(newPrizeNumber);
  //     setMustSpin(true);
  //   }
  // }

  return (
    <section>
      <div className="test-wrapper">
        <div className="test-border"></div>
        <div className="test-content">
          <CreateWheel />
        </div>
      </div>
      {/* <Wheel data={data} backgroundColors={["darkgrey", 'lightgrey']}/> */}
    </section>
  );
}
export default SpinWheel;

{
  /* <a onClick={handleSpinClick}>
<Wheel
  mustStartSpinning={mustSpin}
  prizeNumber={prizeNumber}
  data={data}
  backgroundColors={['#3e3e3e', '#df3428', '#fff']}
  pointerProps={{src: '/img/MoochPointerTest2.png'}}

  // Gestion Border extérieur 
  outerBorderColor={"#fff"}
  outerBorderWidth={2}

  innerBorderWidth={50}

  // Gestion border intérieur
  radiusLineColor={"#fff"}
  radiusLineWidth={2}

  onStopSpinning={() => {
    setMustSpin(false);
  }}
/>
</a>
 */
}
