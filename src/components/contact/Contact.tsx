import React from 'react';
import { Helmet } from 'react-helmet';

import { linkedIn } from '@global/global';

export default function ContactPage() {
  return (
    <div className="main">
      <Helmet>
        <title>{'Contact - Owen Moogk'}</title>
      </Helmet>
      <p className="title">Contact</p>
      <div id="contactPage">
        <h2>Say hi...</h2>
        <p>
          <a href="mailto:owenmoogk@gmail.com">owenmoogk@gmail.com</a>
          <br />
          <a href={linkedIn}>{linkedIn.replace('https://', '')}</a>
        </p>
        <h2>...or find me here</h2>

        <div id="contactLinks">
          <a href={linkedIn} target="_blank" rel="noreferrer">
            <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
              <g>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1 2.838A1.838 1.838 0 0 1 2.838 1H21.16A1.837 1.837 0 0 1 23 2.838V21.16A1.838 1.838 0 0 1 21.161 23H2.838A1.838 1.838 0 0 1 1 21.161V2.838zm8.708 6.55h2.979v1.496c.43-.86 1.53-1.634 3.183-1.634c3.169 0 3.92 1.713 3.92 4.856v5.822h-3.207v-5.106c0-1.79-.43-2.8-1.522-2.8c-1.515 0-2.145 1.089-2.145 2.8v5.106H9.708V9.388zm-5.5 10.403h3.208V9.25H4.208v10.54zM7.875 5.812a2.063 2.063 0 1 1-4.125 0a2.063 2.063 0 0 1 4.125 0z"
                />
              </g>
            </svg>
          </a>
          <a
            href="https://github.com/owenmoogk"
            target="_blank"
            rel="noreferrer"
          >
            <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
              <g>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                />
              </g>
            </svg>
          </a>
          <a
            href="https://open.spotify.com/user/uoxjt33b2c9axd2h9d74l3wag?si=R-cfHOGkSvGN-Ru5N81miQ"
            target="_blank"
            rel="noreferrer"
          >
            <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
              <g>
                <path d="M11.995 0C5.381 0 0 5.382 0 11.996C0 18.616 5.381 24 11.995 24C18.615 24 24 18.615 24 11.996C24 5.382 18.615 0 11.995 0zM5.908 16.404a14.548 14.548 0 0 1 4.238-.638c2.414 0 4.797.612 6.892 1.77c.125.068.238.292.29.572c.05.28.03.567-.052.716a.61.61 0 0 1-.834.24A13.107 13.107 0 0 0 6.277 18.03a.61.61 0 0 1-.771-.402c-.107-.35.114-1.13.402-1.224zm-.523-4.42a18.154 18.154 0 0 1 4.76-.635c2.894 0 5.767.7 8.31 2.026c.179.09.31.244.37.432a.747.747 0 0 1-.052.578c-.227.444-.493.743-.66.743a.769.769 0 0 1-.35-.086a16.33 16.33 0 0 0-7.617-1.854a16.34 16.34 0 0 0-4.366.585a.749.749 0 0 1-.92-.525c-.112-.422.145-1.16.525-1.264zM5.25 9.098a.88.88 0 0 1-1.073-.641c-.123-.498.188-1.076.64-1.19a22.365 22.365 0 0 1 5.328-.649c3.45 0 6.756.776 9.824 2.307a.888.888 0 0 1 .4 1.19c-.143.288-.453.598-.795.598a.924.924 0 0 1-.388-.087a20.026 20.026 0 0 0-9.041-2.126c-1.635 0-3.282.201-4.895.598z" />
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
