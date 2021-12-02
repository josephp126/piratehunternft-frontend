import React from "react";
import framesm from "../images/framesm.svg";
import ReactCircleModal from "react-circle-modal";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const PopupModel = () => {
  return (
    <ReactCircleModal
      backgroundColor="transparent"
      toogleComponent={(onClick) => (
        <button className="btn-primary" onClick={onClick}>
          Popup Model
        </button>
      )}
      offsetX={0}
      offsetY={0}
    >
      {(onClick) => (
        <div className="bg-transparent flex h-full ">
          <div className="relative max-w-xl m-auto">
            <img src={framesm} alt="frame" className="relative z-0 w-full " />
            <div className="absolute top-0 right-0 left-0 bottom-0 m-auto w-full px-3 sm:px-5 md:px-6 pt-6 sm:pt-8 md:pt-10 pb-5 md:pb-8">
              <div className="h-full flex flex-col  px-2 gap-y-6 items-center justify-center">
                <div className="flex justify-center gap-x-4 text-center ">
                  <p className="input-label">lorem ipsum dollar sit amet</p>
                  <Link
                    to="/"
                    style={{ maxWidth: "80px" }}
                    className="btn-primary"
                  >
                    mint
                  </Link>
                  <p className="input-label">lorem ipsum dollar sit amet</p>
                </div>
                <Link to="/" className="btn-primary">
                  connect wallet
                </Link>
              </div>
            </div>
            <button className="absolute top-2  right-0" onClick={onClick}>
              <span className="text-black text-3xl">
                <AiFillCloseCircle />
              </span>
            </button>
          </div>
        </div>
      )}
    </ReactCircleModal>
  );
};

export default PopupModel;
