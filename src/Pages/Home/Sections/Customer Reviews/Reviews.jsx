import React from "react";
import "./Reviews.css";

function Reviews() {
  return (
    <div className="reviews">
      <h2>
        Don&apos;t Take It From Us.
        <span> Hear What Our Customers Have to Say</span>
      </h2>
      <div className="customer-reviews">
        {/* <iframe
          src="https://embedsocial.com/api/pro_hashtag/2f650e7e16c62d3ca96ac6b4bb38bbf9e1a5d758"
          width="100%"
          height="100%"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="Crosby Reviews"
        ></iframe> */}
        <script src="https://embedsocial.com/js/iframe.js"></script>
        <iframe
          scrolling="no"
          title="Crosby Reviews"
          src="https://embedsocial.com/api/pro_hashtag/2f650e7e16c62d3ca96ac6b4bb38bbf9e1a5d758"
        ></iframe>
        <script>iFrameResize();</script>
      </div>
    </div>
  );
}

export default Reviews;
