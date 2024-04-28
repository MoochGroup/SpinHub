import { useState } from 'react'
import { Wheel } from 'react-custom-roulette'

interface ImageProps {
  uri: string;
  offsetX?: number; // Optional
  offsetY?: number; // Optional
  sizeMultiplier?: number; // Optional
  landscape?: boolean; // Optional
}

function SpinWheel() {

  const data = [
    { option: '0' },
    { option: '1' },
    { option: '2' },
  ]

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  }

    return (
      <section>
    <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        backgroundColors={['#3e3e3e', '#df3428', '#fff']}
        
        onStopSpinning={() => {
          setMustSpin(false);
        }}
      />
      <button onClick={handleSpinClick}>SPIN</button>
      </section>
    );

}
export default SpinWheel;