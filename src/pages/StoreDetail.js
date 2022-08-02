import React, { Component } from "react";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import CMButton from "../components/CMButton";
import SIButton from "../components/SIButton";
import StoreMenu from "./StoreMenu";

const StoreDetail = () => {
  return (
    <>
      <div
        style={{
          margin: 20,
          padding: 20,
          border: "1px solid grey",
        }}
      >
        <div className="StoreDetail">
          <header>
            <h2>
              끝내주는 마라탕<br></br>
            </h2>
          </header>
          <div className="StoreInfoImage">
            <img
              className="storeImg"
              src="img/storelogo.png"
              width="150"
              height="150"
              alt="끝내주는 마라탕의 로고"
              align-items="left"
            />
          </div>
          <div className="StoreInfoText">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            {"     "}4.9 (59)
            <br></br>
            최소 주문 금액 <b>12,000원</b>
            <br></br>
            배달 소요 시간 <b>52~62분</b>
            <div>
              <br></br>
              <CMButton text={"전화"}></CMButton>
              {"     "}
              <CMButton text={"찜"}></CMButton>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          margin: 20,
        }}
      >
        <br></br>
        <SIButton text={"메뉴"}></SIButton>
        <SIButton text={"정보"}></SIButton>
        <SIButton text={"리뷰"}></SIButton>
      </div>
      <StoreMenu></StoreMenu>
    </>
  );
};

export default StoreDetail;
