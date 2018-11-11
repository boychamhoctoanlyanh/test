import React from 'react';

export default class Example extends React.Component {
  render() {
    return (
      <footer>
        {/* <div className="footer-content inner">
          <div className="footer-logo footer-logo-image">
            <a href="https://acworks.co.jp/">
              <img className="f_logo" src="https://acworks.co.jp/wp-content/uploads/2016/12/acworks.png" alt="ACワークス株式会社" />
            </a>
          </div>
          <p className="align1">ACワークス株式会社　〒550-0002 大阪府大阪市西区江戸堀1丁目17-17</p>
        </div> */}

        <div className="footer-bar01">
          <div className="footer-bar01-inner">
            <p className="copyright"><small>Copyright © ACワークス株式会社. All rights reserved.</small></p>
          </div>
        </div>
      </footer>
    );
  }
}
