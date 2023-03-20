import React from 'react'

function List_Section4() {
  return (
    <div>
      <div className="mapboxgl-canvas-container mapboxgl-interactive mapboxgl-touch-drag-pan mapboxgl-touch-zoom-rotate">
        <canvas
          className="mapboxgl-canvas border"
          tabIndex={0}
          aria-label="Map"
          width="2460"
          height="2662"
          style={{ width: "100%", height: "1331px" }}
        ></canvas>
        <div
          className="marker mapboxgl-marker mapboxgl-marker-anchor-center"
          tabIndex={0}
          style={{
            backgroundImage: "url('images/googlle-market-02.png')",
            width: "45px",
            height: "48px",
            transform:
              "translate(0%, 0%) translate(98px, -100px) rotateX(0deg) rotateZ(0deg)",
          }}
        //   style={'background-image: url("images/googlle-market-02.png"); width: 45px; height: 48px; transform: translate(-50%, -50%) translate(928px, 455px) rotateX(0deg) rotateZ(0deg);}'
        ></div>
        <div
          className="marker mapboxgl-marker mapboxgl-marker-anchor-center"
          tabIndex={0}
        //   style='background-image: url("images/googlle-market-02.png"); width: 45px; height: 48px; transform: translate(-50%, -50%) translate(544px, 553px) rotateX(0deg) rotateZ(0deg);'
        ></div>
        <div
          className="marker mapboxgl-marker mapboxgl-marker-anchor-center"
          tabIndex={0}
        //   style='background-image: url("images/googlle-market-03.png"); width: 45px; height: 48px; transform: translate(-50%, -50%) translate(429px, 666px) rotateX(0deg) rotateZ(0deg);'
        ></div>
        <div
          className="marker mapboxgl-marker mapboxgl-marker-anchor-center"
          tabIndex={0}
        //   style='background-image: url("images/googlle-market-02.png"); width: 45px; height: 48px; transform: translate(-50%, -50%) translate(227px, 498px) rotateX(0deg) rotateZ(0deg);'
        ></div>
        <div
          className="marker mapboxgl-marker mapboxgl-marker-anchor-center"
          tabIndex={0}
        //   style='background-image: url("images/googlle-market-02.png"); width: 45px; height: 48px; transform: translate(-50%, -50%) translate(597px, 697px) rotateX(0deg) rotateZ(0deg);'
        ></div>
        <div
          className="marker mapboxgl-marker mapboxgl-marker-anchor-center"
          tabIndex={0}
        //   style='background-image: url("images/googlle-market-03.png"); width: 45px; height: 48px; transform: translate(-50%, -50%) translate(608px, 547px) rotateX(0deg) rotateZ(0deg);'
        ></div>
      </div>
      {/* <div className="mapboxgl-control-container">
        <div className="mapboxgl-ctrl-top-left"></div>
        <div className="mapboxgl-ctrl-top-right">
          <div className="mapboxgl-ctrl mapboxgl-ctrl-group">
            <button
              className="mapboxgl-ctrl-zoom-in"
              type="button"
              title="Zoom in"
              aria-label="Zoom in"
            >
              <span className="mapboxgl-ctrl-icon" aria-hidden="true"></span>
            </button>
            <button
              className="mapboxgl-ctrl-zoom-out"
              type="button"
              title="Zoom out"
              aria-label="Zoom out"
            >
              <span className="mapboxgl-ctrl-icon" aria-hidden="true"></span>
            </button>
            <button
              className="mapboxgl-ctrl-compass"
              type="button"
              title="Reset bearing to north"
              aria-label="Reset bearing to north"
            >
              <span
                className="mapboxgl-ctrl-icon"
                aria-hidden="true"
                style="transform: rotate(0deg);"
              ></span>
            </button>
          </div>
        </div>
        <div className="mapboxgl-ctrl-bottom-left">
          <div className="mapboxgl-ctrl" style="display: none;">
            <a
              className="mapboxgl-ctrl-logo"
              target="_blank"
              rel="noopener nofollow"
              href="https://www.mapbox.com/"
              aria-label="Mapbox logo"
            ></a>
          </div>
        </div>
        <div className="mapboxgl-ctrl-bottom-right">
          <div className="mapboxgl-ctrl mapboxgl-ctrl-attrib mapboxgl-attrib-empty">
            <div className="mapboxgl-ctrl-attrib-inner"></div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default List_Section4