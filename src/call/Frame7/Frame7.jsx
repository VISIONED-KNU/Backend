import React from "react";
import { useNavigate } from "react-router-dom";
import "./Frame7.css";
import BackButton from "../../share/BackButton.jsx";
import "../../share/allshared.css";
import { playTextToSpeech } from "../../services/ttsService";

export const Frame7 = ({ className, ...props }) => {
    const navigate = useNavigate();

    const handleNavigateToMain = () => {
        playTextToSpeech("'메인 페이지로 돌아가겠습니다.'");
        navigate("/");
    };

    return (
        <div className={"frame-7 " + className}>
            <BackButton
                onClick={handleNavigateToMain} label="처음으로"/>
            <img
                className="deagu-logo"
                src="deagu-logo.png" alt = ""/>
            <div className="line-upper"></div>
            <div className="show-big-text">
                담당 정류장 안내원과
                <br/>
                전화연결 중입니다.
                <br/>
                잠시만 기다려주세요.{" "}
            </div>
            <img className="image-10" src="image-100.png" alt = ""/>
        </div>
    );
};

export default Frame7;
