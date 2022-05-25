import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Cabs.scss";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import NoCabs from "../../components/NoCabs/NoCabs";

const Cabs = () => {
  const cars = useSelector((store) => store.cars.cars);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000);
  }, []);
  console.log(cars);
  return (
    <div>
      {loading === false ? (
        <div>
          {cars.length > 0 ? (
            <div className="cabs">
              <div className="totalCabs">Showing {cars.length} cabs</div>
              <div className="container">
                <div className="makeFlex column">
                  {cars.map((n, i) => {
                    return (
                      <div className="individualCab blackText">
                        <div className="makeFlex">
                          <div className="cabImage makeRelative">
                            <img
                              className="vehicleImg"
                              src="https://jsak.mmtcdn.com/cabs_cdn_dt/image/Cab_Images/sedan_new.png"
                            />
                          </div>
                          <div className="cabDetails paddingTB15 makeFlex column spaceBetween">
                            <div>
                              <div className="makeFlex alignEnd">
                                <span className="latoBlack font20 appendRight5">
                                  {n.name}
                                </span>
                              </div>
                              <div className="cabUtilities font14 blackText appendTop10 latoRegular makeFlex hrtlCenter">
                                <span className="appendTop5 latoBold makeFlex hrtlCenter">
                                  {" "}
                                  {n.category} &nbsp;{" "}
                                </span>
                                <span className="appendTop5 makeFlex appendRight5 hrtlCenter">
                                  {" "}
                                  | &nbsp; {n.features.AC
                                    ? "AC"
                                    : "Non-AC"}{" "}
                                </span>
                                <span className="appendTop5 makeFlex appendRight5 hrtlCenter">
                                  {" "}
                                  | &nbsp; 4 Seats{" "}
                                </span>
                              </div>
                            </div>
                            <div>
                              <div className="width100percent">
                                <div className="makeFlex hrtlCenter appendBottom10 persuasion">
                                  <div className="iconContainer appendRight10">
                                    <div className="circleBulletBlack"></div>
                                  </div>
                                  <div className="makeFlex alignCenter">
                                    <p>
                                      <span className="latoRegular appendLeft2">
                                        <span className=""></span>
                                        <span className="latoBold">
                                          60 kms included
                                        </span>
                                      </span>
                                    </p>
                                  </div>
                                </div>
                                <div className="makeFlex hrtlCenter appendBottom10 persuasion">
                                  <div className="iconContainer appendRight10">
                                    <div className="circleBulletBlack"></div>
                                  </div>
                                  <div className="makeFlex alignCenter">
                                    <p>
                                      <span className="latoRegular appendLeft2">
                                        <span class=""></span>
                                        <span className="latoBold">
                                          Fuel Type
                                        </span>
                                        <span className=""> : </span>
                                        <span className="latoBold">
                                          {n.features.fuelType}
                                        </span>
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="cabBookDetails makeFlex column textRight">
                            <div className="makeFlex column justifyCenter priceDetailsPadding flexGrow1">
                              <div></div>

                              <div>
                                <div className="makeFlex rowReverse justifyCenter appendBottom5">
                                  <p className="font28 latoBlack blackText ">
                                    {console.log(n.totalAmount, "totalAmount")}₹{" "}
                                    {n.totalAmount || 54}
                                  </p>
                                </div>
                              </div>
                              <a className="appendBottom10 appendTop10 makeFlex column alignEnd">
                                <span className="bookNowButton latoBlack font12 whiteText">
                                  BOOK NOW
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <a
                          className="appendBottom10 appendTop10 makeFlex column alignCenter"
                          href={n.photo.url}
                          target="blank"
                        >
                          <span className="bookNowButton latoBlack font12 whiteText">
                            View Image
                          </span>
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <NoCabs />
          )}
        </div>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
};

export default Cabs;
