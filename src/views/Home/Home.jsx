import React from "react";
import framesm from "../../images/framesm.svg";
import framelg from "../../images/frame-lg.png";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import PopupModel from "../../components/PopupModel";

export default function Home() {
  return (
    <div className="md:h-screen  bg-ship main-bg flex justify-center items-center">
      <div className="main-container">
        <div className="flex flex-col gap-y-4">
          <div className="grid grid-cols-1 md:grid-cols-5 ">
            <div className="flex mx-auto w-6/12 sm:w-auto flex-col sm:col-start-3 sm:col-end-4 md:col-start-3 md:col-end-4">
              <img className=" w-full" src={logo} alt="logo" />
            </div>
            <div className=" col-start-1 col-end-6 sm:col-start-2 sm:col-end-5 mt-8">
              <div className="relative flex flex-col justify-center">
                <img
                  className="relative right-0 main-frame left-0 mx-auto z-0  sm:h-auto md:h-96 lg:h-auto "
                  src={framelg}
                  alt="frame"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 m-auto w-full px-3 sm:px-5 md:px-6 pt-6 sm:pt-8 md:pt-10 pb-5 md:pb-8">
                  <div className="grid grid-cols-2 h-full">
                    <div className="border-r border-primary flex-col flex h-full w-full">
                      <h3 className="card-title px-3 md:px-4 pb-2 pt-2 md:pt-4">
                        UNSTAKED
                      </h3>
                      <hr className="border-primary" />
                      <div className="px-3 md:px-4 my-3 md:my-6 flex gap-4 gap-x-2 sm:gap-x-4 lg:gap-x-6 md:gap-x-8 ">
                        <Link className="btn-primary" to="/">
                          {" "}
                          button one
                        </Link>
                        <Link className="btn-primary" to="/">
                          {" "}
                          button two
                        </Link>
                      </div>
                      <hr className="border-primary" />
                      <h3 className="card-title px-3 md:px-4 my-2 md:my-3">
                        STAKED
                      </h3>
                      <hr className="border-primary" />{" "}
                      <div className="px-3 md:px-4 mt-3 md:mt-6">
                        <PopupModel />
                      </div>
                    </div>
                    <div className="w-full flex flex-col justify-center">
                      <div className="px-4   flex flex-col justify-between gap-y-4 sm:gap-y-8 md:gap-y-36 ">
                        <div className="flex gap-x-1 flex-wrap">
                          {" "}
                          <div className="text-white text-xs font-Poppins flex items-end">
                            TOTAL $BOOTY IN WALLET <br />
                            TOTAL $BOOTY UNCLAIMED :
                            <div className="w-9 border-white border-b h-1"></div>
                          </div>
                          {/* <input
                            className="bg-transparent px-1 sm:py-1 border-b w-full md:w-4/12 text-white focus:outline-none border-white"
                            type="text"
                          /> */}
                        </div>
                        <div>
                          <h3 className="card-title">
                            STAKE & ACCUMULATE $BOOTY UNSTAKE & CLAIM (GAS FEES
                            APPLY)
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4">
            <div className="relative">
              <img src={framesm} alt="frame" className="relative z-0 w-full " />
              <div className="absolute top-0 right-0 left-0 bottom-0 m-auto w-full px-3 sm:px-5 md:px-6 pt-6 sm:pt-8 md:pt-10 pb-5 md:pb-8">
                <div className="h-full flex flex-col px-2 gap-y-4 items-center justify-center">
                  <h3 className="card-sm-title text-center px-2 w-full">
                    pirates vs bounty hunters the most compelling game of tag in
                    the entire metaverse
                  </h3>
                  <div className="flex gap-x-4 w-full justify-center">
                    <Link className="btn-primary" to="/">
                      {" "}
                      button one
                    </Link>
                    <Link className="btn-primary" to="/">
                      {" "}
                      button two
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src={framesm} alt="frame" className="relative z-0 w-full " />
              <div className="absolute top-0 right-0 left-0 bottom-0 m-auto w-full px-3 sm:px-5 md:px-6 pt-6 sm:pt-8 md:pt-10 pb-5 md:pb-8">
                <div className="h-full flex flex-col px-2 gap-y-1 items-center justify-center">
                  <div className="flex flex-col gap-y-1 px-4">
                    {" "}
                    <div className="flex items-center gap-x-1 flex-wrap">
                      <div className="input-label">Pirates Minted:</div>
                      <div className="w-9 border-white border-b h-1"></div>
                    </div>
                    <div className="flex items-center gap-x-1 flex-wrap">
                      <div className="input-label"> Pirates staked:</div>
                      <div className="w-9 border-white border-b h-1"></div>
                    </div>
                    <div className="flex items-center gap-x-1 flex-wrap">
                      <div className="input-label"> bounty hunters minted:</div>
                      <div className="w-9 border-white border-b h-1"></div>
                    </div>
                    <div className="flex items-center gap-x-1 flex-wrap">
                      <div className="input-label">bounty hunters staked:</div>
                      <div className="w-9 border-white border-b h-1"></div>
                    </div>
                  </div>
                  <div className="flex gap-x-4 w-full justify-center">
                    <Link className="btn-primary" to="/">
                      {" "}
                      button one
                    </Link>
                    <Link className="btn-primary" to="/">
                      {" "}
                      button two
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src={framesm} alt="frame" className="relative z-0 w-full " />
              <div className="absolute top-0 right-0 left-0 bottom-0 m-auto w-full px-3 sm:px-5 md:px-6 pt-6 sm:pt-8 md:pt-10 pb-5 md:pb-8">
                <div className="h-full flex flex-col px-2 gap-y-6 items-center justify-center">
                  <h3 className="card-title text-center px-2 w-full">
                    leaderboard
                  </h3>
                  <div className="flex flex-col w-full justify-center px-4">
                    <div className="flex items-center gap-x-1 flex-wrap">
                      <div className="input-label">
                        PIRATES TOTAL $BOOTY CLAIMED:
                      </div>
                      <div className="w-9 border-white border-b h-1"></div>
                    </div>
                    <div className="flex items-center gap-x-1 flex-wrap">
                      <div className="input-label">
                        BOUNTY HUNTERS TOTAL $BOOTY CLAIMED:
                      </div>
                      <div className="w-9 border-white border-b h-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
