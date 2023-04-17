import "./style.css";

function WireframeVerktoy() {
  return (
    <div className="container">
      <section className="tools-board">
        <div className="rad">
          <label className="title">Elementer</label>
          <ul className="options">
            <li className="option tool" id="rectangle">
              <img
                src="icons/rectangle-med-fet-linje.png"
                alt="bilde av rektangel med skrift Header/Footer/sidebar"
                height="22"
                width="22"
              />
              <span>Header/Footer/Sidebar</span>
              {/* eventuelt legge til flere ikoner?*/}
            </li>
            <li className="option">
              <input type="checkbox" id="fyll-farger" />
              <label htmlFor="fyll-farger">Fyll med farge</label>
            </li>
          </ul>
        </div>
        <div className="rad">
          <ul className="options">
            <img
              src="icons/settings.png"
              alt="bilde av tannhjul"
              width="17"
              height="17"
            />
            <label className="title">Valg</label>
            <li className="option active tool" id="pensel">
              <img
                src="icons/pensel.png"
                alt="bilde av pensel"
                width="20"
                height="20"
              />
              <span>Pensel</span>
            </li>
            <li className="option tool" id="viskel">
              <img src="icons/eraser.svg" alt="" />
              <span>Viskel</span>
            </li>
            <li className="option">
              <input
                type="range"
                id="size-slider"
                alt="bilde av skaleringslinje"
                min="1"
                max="30"
                defaultValue="5"
              />
            </li>
          </ul>
        </div>
        <div className="rad farge">
          {/* fargepaletten*/}
          <label className="title">Farger</label>
          <ul className="options">
            <li className="option"></li>
            <li className="option selected"></li>
            {/* for den valgte fargen*/}
            <li className="option"></li>
            {/* en for hver farge*/}
            <li className="option"></li>
            <li className="option"> </li>
            <li className="option">
              <input type="color" id="farge-velger" defaultValue="#4A98F7" />
            </li>
          </ul>
        </div>
        <div className="row buttons">
          {/* knappene for lagre og slette img*/}
          <button className="clear-canvas">Slett</button>
          <button className="save-img">Lagre wireframe</button>
        </div>
      </section>
      <section className="drawing-board">
        <canvas></canvas>
      </section>
    </div>
  );
}

export default WFTest;