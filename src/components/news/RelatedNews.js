import React, { useState } from "react";
import VotePassive from "./assets/votepassive.svg";
import Upvote from "./assets/upvote.svg";
import Downvote from "./assets/downvote.svg";
import Dots from "./assets/dots.svg";
import Clock from "./assets/clock.svg";
import WhiteDots from "./assets/dots-white.svg";


  
  const RelatedNews = ({title, month, date, year, link, theme}) => {

  const [likeIndicator, setLikeIndicator] = useState("none");


  return (
    <div>
            <div className="single-related-news-wrapper">
              <a href={link} className="related-subnews-title">
                {title}
              </a>
              <div className="news-bottom-wrapper">
                <div className="like-wrapper">
                  <img
                    src={
                      likeIndicator === "none"
                        ? VotePassive
                        : likeIndicator === "like"
                        ? Upvote
                        : Downvote
                    }
                    alt=""
                    className="like-indicator"
                    onClick={(e) => {
                      setLikeIndicator("like");
                      e.stopPropagation();
                    }}
                  />
                  <img
                    src={
                      likeIndicator === "none"
                        ? VotePassive
                        : likeIndicator === "like"
                        ? Upvote
                        : Downvote
                    }
                    alt=""
                    className="like-indicator"
                    id="dislike"
                    onClick={(e) => {
                      setLikeIndicator("dislike");
                      e.stopPropagation();
                    }}
                  />
                </div>
                <img
                  src={theme === "theme-dark" ? WhiteDots : Dots}
                  alt=""
                  style={{ width: "auto" }}
                />
                <div className="date-wrapper">
                  <img src={Clock} alt="" style={{ width: "auto" }} />
                  <h6 className="date-content">
                    {month} {date}, {year}
                  </h6>
                </div>
              </div>
            </div>

    </div>
  );
};

export default RelatedNews
