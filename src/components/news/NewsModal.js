import Modal from "../general/Modal";
import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import RelatedNews from "./RelatedNews";
import OtherNews from "./OtherNews";

import { useState } from "react";

const NewsModal = ({
  modalId,
  visible,
  title,
  image,
  content,
  onModalClose,
  newsId,
  latestNewsData,
  pressData,
  theme,
  onShowModalPressInfo
}) => {

  const getItemsWithoutCurrentItem = (currentItemId, arrayOfItems) => {
    return arrayOfItems.filter(item => item.id !== currentItemId);
  }
  const elementRef = useRef();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (elementRef.current?.clientHeight !== 0) { setHeight(elementRef.current?.clientHeight); }

  }, [newsId]); 


  const owlCarouselOptions = {
    loop: true,
    margin: 0,
    center: false,
    nav: false,
    dots: true,
    autoplay: false,
    rewind: true,
    autoplayTimeout: 5000,
    responsiveClass: true,
    responsiveRefreshRate: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 1,
      },
      960: {
        items: 1,
      },
      1200: {
        items: 1,
      },
      1920: {
        items: 3,
      },
    },
  };

  const carousel = useRef();

  return (
    <Modal visible={visible} modalId={modalId} onModalClose={onModalClose}>
      <div>
        <div className="details-modal-content pb-0">
          <div className="left-col" ref={elementRef}>
            <h2 style={{ maxWidth: 550 }} className='left-col-title'>{title}</h2>
            <img
              src={image}
              alt=""
              className='left-col-image'
              style={{ maxWidth: 550, padding: "20px 0" }}
            />
            <p
              style={{ maxWidth: 550 }}
              className='left-col-content'
              dangerouslySetInnerHTML={{ __html: content }}
            ></p>
          </div>
          <div className="right-col">
            <h3 className="related-news-side-title">Related news</h3>
            <div className="related-news-wrapper">
              {latestNewsData.length > 0 && ((height > 500 && height < 600) ?
                getItemsWithoutCurrentItem(newsId, latestNewsData).slice(0, 5).map((item, key) => {
                  return <div key={key}>
                    <RelatedNews
                      theme={theme}
                      title={item.title}
                      date={item.date}
                      month={item.month}
                      year={item.year}
                      link={item.link}
                    />
                  </div>
                }
                )
                : (height > 620 && height < 700) ? getItemsWithoutCurrentItem(newsId, latestNewsData).slice(0, 6).map((item, key) => {
                  return <div key={key}>
                    <RelatedNews
                      theme={theme}
                      title={item.title}
                      date={item.date}
                      month={item.month}
                      year={item.year}
                      link={item.link}
                    />
                  </div>
                }) : (height > 700 && height < 900) ? getItemsWithoutCurrentItem(newsId, latestNewsData).slice(0, 8).map((item, key) => {
                  return <div key={key}>
                    <RelatedNews
                      theme={theme}
                      title={item.title}
                      date={item.date}
                      month={item.month}
                      year={item.year}
                      link={item.link}
                    />
                  </div>
                }) : (height > 900 && height < 1000) ? getItemsWithoutCurrentItem(newsId, latestNewsData).slice(0, 10).map((item, key) => {
                  return <div key={key}>
                    <RelatedNews
                      theme={theme}
                      title={item.title}
                      date={item.date}
                      month={item.month}
                      year={item.year}
                      link={item.link}
                    />
                  </div>
                }) : (height > 1000 && height < 2400) ? getItemsWithoutCurrentItem(newsId, latestNewsData).slice(0, 20).map((item, key) => {
                  return <div key={key}>
                    <RelatedNews
                      theme={theme}
                      title={item.title}
                      date={item.date}
                      month={item.month}
                      year={item.year}
                      link={item.link}
                    />
                  </div>
                }) : (height > 2400 && height < 2500) ? getItemsWithoutCurrentItem(newsId, latestNewsData).slice(0, 24).map((item, key) => {
                  return <div key={key}>
                    <RelatedNews
                      theme={theme}
                      title={item.title}
                      date={item.date}
                      month={item.month}
                      year={item.year}
                      link={item.link}
                    />
                  </div>
                }) : (height > 2400 && height < 3070) ? getItemsWithoutCurrentItem(newsId, latestNewsData).slice(0, 31).map((item, key) => {
                  return <div key={key}>
                    <RelatedNews
                      theme={theme}
                      title={item.title}
                      date={item.date}
                      month={item.month}
                      year={item.year}
                      link={item.link}
                    />
                  </div>
                }) : (height > 3070 && height < 3670) ? getItemsWithoutCurrentItem(newsId, latestNewsData).slice(0, 36).map((item, key) => {
                  return <div key={key}>
                    <RelatedNews
                      theme={theme}
                      title={item.title}
                      date={item.date}
                      month={item.month}
                      year={item.year}
                      link={item.link}
                    />
                  </div>
                }) : (height > 3670 && height < 3750) ? getItemsWithoutCurrentItem(newsId, latestNewsData).slice(0, 57).map((item, key) => {
                  return <div key={key}>
                    <RelatedNews
                      theme={theme}
                      title={item.title}
                      date={item.date}
                      month={item.month}
                      year={item.year}
                      link={item.link}
                    />
                  </div>
                }) : (height > 3750 && height < 5870) ? getItemsWithoutCurrentItem(newsId, latestNewsData).slice(0, 37).map((item, key) => {
                  return <div key={key}>
                    <RelatedNews
                      theme={theme}
                      title={item.title}
                      date={item.date}
                      month={item.month}
                      year={item.year}
                      link={item.link}
                    />
                  </div>
                }) : (height > 5870 && height < 6650) ? getItemsWithoutCurrentItem(newsId, latestNewsData).slice(0, 57).map((item, key) => {
                  return <div key={key}>
                    <RelatedNews
                      theme={theme}
                      title={item.title}
                      date={item.date}
                      month={item.month}
                      year={item.year}
                      link={item.link}
                    />
                  </div>
                }) : (height > 6650) ? getItemsWithoutCurrentItem(newsId, latestNewsData).map((item, key) => {
                  return <div key={key}>
                    <RelatedNews
                      theme={theme}
                      title={item.title}
                      date={item.date}
                      month={item.month}
                      year={item.year}
                      link={item.link}
                    />
                  </div>
                }) : <></>)

              }
            </div>

          </div>

        </div>
        <div className="modal-bottom-wrapper">
 <h3>Press Realese</h3>
        <div className="row justify-content-center" style={{gap: 15}}>
             
            {pressData.length > 0 &&
              getItemsWithoutCurrentItem(newsId, pressData).slice(0, 6).map((item, key) => {
                return (
                  <div
                    className="banner-item"
                    key={key}
                    style={{ background: "none" }}
                  >
                    <OtherNews
                      image={item.imageSrc}
                      title={item.title}
                      link={item.link}
                      date={item.date}
                      theme={theme}
                      onOtherNewsClick={()=>{onShowModalPressInfo(item.id)}}
                    />
                  </div>
                );
              })}
        </div>
        </div>
      </div>
    </Modal>
  );
};
NewsModal.propTypes = {
  modalId: PropTypes.string,
  visible: PropTypes.bool,
  onModalClose: PropTypes.func,
};

export default NewsModal;
