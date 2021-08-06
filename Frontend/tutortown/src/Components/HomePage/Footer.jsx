import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <div className={styles.footerCont}>
      <br />
      <br />
      <br />
      <div className={styles.flexFooter}>
        <Link to="/about">About Us</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/help">Help</Link>
        <Link to="/policy">Policy</Link>
      </div>
      <div className={styles.flexFooter}>
        <Link to="/about">About Us</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/contact">Help</Link>
        <Link to="/contact">Policy</Link>
      </div>
      <div className={styles.flexFooter}>
        <Link to="/about">About Us</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/help">Help</Link>
        <Link to="/policy">Policy</Link>
      </div>
      <div className={styles.flexFooter}>
        <Link to="/about">About Us</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/contact">Help</Link>
        <Link to="/contact">Policy</Link>
      </div>
      <br />
      <br />
      <br />
      <div>
        <Link to="/contact">
          <img
            width="40px"
            src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fd7ea98ca57d5a01f8b06ac_lately-footer-facebook-icon.svg"
            alt=""
          />
        </Link>{" "}
        <Link to="/contact">
          <img
            width="40px"
            src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fd7ea98d033dccb4e0c5c8a_lately-footer-twitter-icon.svg"
            alt=""
          />
        </Link>{" "}
        <Link to="/contact">
          <img
            width="40px"
            src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fd7ea98a46fb9298adb10cf_lately-footer-linkedin-icon.svg"
            alt=""
          />
        </Link>{" "}
        <Link to="/contact">
          <img
            width="40px"
            src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fd7ea981e42d6cdd21dc804_lately-footer-instagram-icon.svg"
            alt=""
          />
        </Link>{" "}
        <Link to="/contact">
          <img
            width="40px"
            src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fd7ea98d97acfb972a65b4a_lately-footer-youtube-icon.svg"
            alt=""
          />
        </Link>{" "}
        <Link to="/contact">
          <img
            width="40px"
            src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/60199af29cf48909018c3acc_social_tiktok_grey.svg"
            alt=""
          />
        </Link>{" "}
        <Link to="/contact">
          <img
            width="40px"
            src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fd7ea98876e67fbe9ce343b_lately-footer-slack-icon.svg"
            alt=""
          />
        </Link>{" "}
        <Link to="/contact">
          <img
            width="40px"
            src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fd7ea98852e65824bc54cf9_lately-footer-email-icon.svg"
            alt=""
          />
        </Link>{" "}
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
