import SpinWheel from "../Modules/SpinWheel/SpinWheel";

function BaseUrl() {
    return (
      <section className="BaseUrl__Section">

        <div className="Title__Div">
          <h1 className="SpinHub__Title animate__animated animate__zoomInUp">Welcome to SpinHub!</h1>
          <p className="SpinHub__Title__Description animate__animated animate__fadeInDown animate__delay-1s">Discover Random Delights with Every Spin!</p>
        </div>


        <SpinWheel/>
      </section>
    );
  }
  export default BaseUrl;