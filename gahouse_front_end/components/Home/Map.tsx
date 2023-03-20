import { Lora } from "@next/font/google";
import Head from "next/head";
const lora = Lora({
  weight: '400',
  subsets: ['latin'],
})

function Map() {
  return (
    <div className={`pb-15 ${lora.className}`}>


      <div className="map-area">
        {/* <!--map-cherokee--> */}
        <div id="map-cherokee" className="map-main ">
          <div className="img-area ">
            <a href="/property?CountyOrParish=Cherokee" className="big-txt"><span>Cherokee</span></a>
            <img loading="lazy" src="images/cherokee-h.png" width="458" height="473" className="overlay-img" />
            <img loading="lazy" src="images/cherokee.png" width="458" height="473" />
          </div>
          <div className="map-text " data-map-area="map-cherokee">
            <div className="map-text-01"><a href="/property?City=Nelson" className="map-dot-left"><span>Nelson</span></a></div>
            <div className="map-text-02"><a href="/property?City=Ball Ground" className="map-dot-left"><span>Ball Ground</span></a></div>
            <div className="map-text-03"><a href="/property?City=Waleska" className="map-dot-left"><span>Waleska</span></a></div>
            <div className="map-text-04 pink"><a href="/property?City=Lebanon" className="map-dot-left"><span>Lebanon</span></a></div>
            <div className="map-text-05"><a href="/property?City=Canton" className="map-dot-left"><span>Canton</span></a></div>
            <div className="map-text-06"><a href="/property?City=Holly Springs" className="map-dot-left"><span>Holly Springs</span></a></div>
            {/* <!-- <div className="map-text-07 pink"><a href="/acworth" className="map-dot-right"><span>Acworth</span></a></div> --> */}
            <div className="map-text-08"><a href="/property?City=Woodstock" className="map-dot-left"><span>Woodstock</span></a></div>
          </div>
        </div>
        {/* <!--/map-cherokee-->
          <!--map-cobb--> */}
        <div id="map-cobb" className="map-main ">
          <div className="img-area ">
            <a href="/property?CountyOrParish=Cobb" className="big-txt"><span>Cobb</span></a>
            <img loading="lazy" src="images/cobb-h.png" width="412" height="468" className="overlay-img" />
            <img loading="lazy" src="images/cobb.png" width="412" height="468" />
          </div>
          <div className="map-text " data-map-area="map-cobb">
            <div className="map-text-01"><a href="/property?City=Acworth" className="map-dot-left"><span>Acworth</span></a></div>
            <div className="map-text-02"><a href="/property?City=Kennesaw" className="map-dot-left"><span>Kennesaw</span></a></div>
            <div className="map-text-03"><a href="/property?City=Marietta" className="map-dot-left"><span>Marietta</span></a></div>
            <div className="map-text-04"><a href="/property?City=Smyrna" className="map-dot-right"><span>Smyrna</span></a></div>
            <div className="map-text-05"><a href="/property?City=Powder Springs" className="map-dot-left"><span>Powder Springs</span></a></div>
            <div className="map-text-06"><a href="/property?City=Austell" className="map-dot-left"><span>Austell</span></a></div>
            <div className="map-text-07"><a href="/property?City=East Cobb" className="map-dot-right"><span>East Cobb</span></a></div>
          </div>
        </div>
        {/* <!--/map-cobb-->
            <!--map-fulton--> */}
        <div id="map-fulton" className="map-main ">
          <div className="img-area ">
            <a href="/property?CountyOrParish=Fulton" className="big-txt"><span><span>Fulton</span></span></a>
            <img loading="lazy" src="images/fulton-h.png" width="840" height="953" className="overlay-img" />
            <img loading="lazy" src="images/fulton.png" width="840" height="953" />
          </div>
          <div className="map-text " data-map-area="map-fulton">
            <div className="map-text-01"><a href="/property?City=Milton" className="map-dot-bottom"><span>Milton</span></a></div>
            <div className="map-text-02"><a href="/property?City=Mountain Park" className="map-dot-left"><span>Mountain Park</span></a></div>
            <div className="map-text-03"><a href="/property?City=Alpharetta" className="map-dot-left"><span>Alpharetta</span></a></div>
            <div className="map-text-04"><a href="/property?City=Johns Creek" className="map-dot-right"><span>Johns Creek</span></a></div>
            <div className="map-text-05"><a href="/property?City=Roswell" className="map-dot-top"><span>Roswell</span></a></div>
            <div className="map-text-06"><a href="/property?City=Sandy Springs" className="map-dot-top"><span>Sandy<br /> Springs</span></a></div>
            <div className="map-text-07"><a href="/property?City=Atlanta" className="map-dot-top"><span>Atlanta</span></a></div>
            <div className="map-text-08"><a href="/property?City=South Fulton" className="map-dot-left"><span>South<br /> Fulton</span></a></div>
            <div className="map-text-09"><a href="/property?City=East Point" className="map-dot-right"><span>East Point</span></a></div>
            <div className="map-text-10"><a href="/property?City=Hapeville" className="map-dot-right"><span>Hapeville</span></a></div>
            <div className="map-text-11"><a href="/property?City=College Park" className="map-dot-right"><span>College Park</span></a></div>
            <div className="map-text-12"><a href="/property?City=Union City" className="map-dot-right"><span>Union City</span></a></div>
            <div className="map-text-13"><a href="/property?City=Fairburn" className="map-dot-left"><span>Fairburn</span></a></div>
            <div className="map-text-14"><a href="/property?City=Chattahoochee Hills" className="map-dot-left"><span>Chattahoochee Hills</span></a></div>
            <div className="map-text-15"><a href="/property?City=Palmetto" className="map-dot-right"><span>Palmetto</span></a></div>
            <div className="map-text-16"><a href="/property?City=Buckhead" className="map-dot-top"><span>Buckhead</span></a></div>
            <div className="map-text-17"><a href="/property?City=Virginia Highlands" className="map-dot-right"><span>Virginia Highlands</span></a></div>
            <div className="map-text-18"><a href="/property?City=Midtown" className="map-dot-top"><span>Midtown</span></a></div>
          </div>
        </div>
        {/* <!--/map-fulton-->
              <!--map-dekalb--> */}
        <div id="map-dekalb" className="map-main ">
          <div className="img-area ">
            <a href="/property?CountyOrParish=Dekalb" className="big-txt"><span>Dekalb</span></a>
            <img loading="lazy" src="images/dekalb-h.png" width="359" height="488" className="overlay-img" />
            <img loading="lazy" src="images/dekalb.png" width="359" height="488" />
          </div>
          <div className="map-text " data-map-area="map-dekalb">
            <div className="map-text-01"><a href="/property?City=Dunwoody" className="map-dot-top"><span>Dunwoody</span></a></div>
            <div className="map-text-02"><a href="/property?City=Doraville" className="map-dot-bottom"><span>Doraville</span></a></div>
            <div className="map-text-03"><a href="/property?City=Chamblee" className="map-dot-top"><span>Chamblee</span></a></div>
            <div className="map-text-04"><a href="/property?City=Brookhaven" className="map-dot-top"><span>Brookhaven</span></a></div>
            <div className="map-text-05"><a href="/property?City=Tucker" className="map-dot-top"><span>Tucker</span></a></div>
            <div className="map-text-06"><a href="/property?City=Pine Lake" className="map-dot-right"><span>Pine Lake</span></a></div>
            <div className="map-text-07"><a href="/property?City=Clarkston" className="map-dot-right"><span>Clarkston</span></a></div>
            <div className="map-text-08"><a href="/property?City=Decatur" className="map-dot-left"><span>Decatur</span></a></div>
            <div className="map-text-09"><a href="/property?City=Stone Mountain" className="map-dot-top"><span>Stone <br /> Mountain</span></a></div>
            <div className="map-text-10"><a href="/property?City=Avondale Estates" className="map-dot-top"><span>Avondale Estates</span></a></div>
            <div className="map-text-11"><a href="property?City=Lithonia" className="map-dot-bottom"><span>Lithonia</span></a></div>
            <div className="map-text-12"><a href="property?City=Stonecrest" className="map-dot-top"><span>Stonecrest</span></a></div>
          </div>
        </div>
        {/* <!--/map-dekalb-->
                <!--map-gwinnett--> */}
        <div id="map-gwinnett" className="map-main ">
          <div className="img-area ">
            <a href="/property?CountyOrParish=Gwinnett" className="big-txt"><span>Gwinnett</span></a>
            <img loading="lazy" src="images/gwinnett-h.png" width="535" height="574" className="overlay-img" />
            <img loading="lazy" src="images/gwinnett.png" width="535" height="574" />
          </div>
          <div className="map-text " data-map-area="map-gwinnett">
            <div className="map-text-01"><a href="/property?City=Sugar Hill" className="map-dot-top"><span>Sugar Hill</span></a></div>
            <div className="map-text-02"><a href="/property?City=Buford" className="map-dot-left"><span>Buford</span></a></div>
            <div className="map-text-03 pink"><a href="/property?City=Auburn" className="map-dot-right"><span>Auburn</span></a></div>
            <div className="map-text-04"><a href="/property?City=Suwanee" className="map-dot-left"><span>Suwanee</span></a></div>
            <div className="map-text-05"><a href="/property?City=Duluth" className="map-dot-left"><span>Duluth</span></a></div>
            <div className="map-text-06"><a href="/property?City=Peachtree Corners" className="map-dot-top"><span>Peachtree Corners</span></a></div>
            <div className="map-text-07"><a href="/property?City=Berkeley Lake" className="map-dot-left"><span>Berkeley Lake</span></a></div>
            <div className="map-text-08"><a href="/property?City=Dacula" className="map-dot-top"><span>Dacula</span></a></div>
            <div className="map-text-09"><a href="/property?City=Lawrenceville" className="map-dot-top"><span>Lawrenceville</span></a></div>
            <div className="map-text-10"><a href="/property?City=Norcross" className="map-dot-top"><span>Norcross</span></a></div>
            <div className="map-text-11"><a href="/property?City=Grayson" className="map-dot-left"><span>Grayson</span></a></div>
            <div className="map-text-12"><a href="/property?City=Lilburn" className="map-dot-left"><span>Lilburn</span></a></div>
            <div className="map-text-13"><a href="/property?City=Loganville" className="map-dot-right"><span>Loganville</span></a></div>
            <div className="map-text-14"><a href="/property?City=Snellville" className="map-dot-right"><span>Snellville</span></a></div>
          </div>
        </div>
        {/* <!--/map-gwinnett-->
                  <!--map-forsyth--> */}
        <div id="map-forsyth" className="map-main ">
          <div className="img-area ">
            <a href="/property?CountyOrParish=Forsyth" className="big-txt"><span>Forsyth</span></a>
            <img loading="lazy" src="images/forsyth-h.png" width="372" height="390" className="overlay-img" />
            <img loading="lazy" src="images/forsyth.png" width="372" height="390" />
          </div>
          <div className="map-text " data-map-area="map-forsyth">
            <div className="map-text-01"><a href="/property?City=Sugar Hill" className="map-dot-top"><span>Silver City</span></a></div>
            <div className="map-text-02"><a href="/property?City=Buford" className="map-dot-right"><span>Chestatee</span></a></div>
            <div className="map-text-03"><a href="/property?City=Auburn" className="map-dot-left"><span>Cumming</span></a></div>
            <div className="map-text-04"><a href="/property?City=Suwanee" className="map-dot-top"><span>Big Creek</span></a></div>
          </div>
        </div>
        {/* <!--/map-forsyth--> */}
      </div>

    </div>
  );
}

export default Map;