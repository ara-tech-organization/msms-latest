import React, { useState } from 'react';
import styles from './InstagramReels.module.css';
import { Container } from 'react-bootstrap';

const InstagramReels = () => {
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (index) => {
    setLoadedImages((prevState) => ({
      ...prevState,
      [index]: true,
    }));
  };

  const imageLinks = [
    "https://www.instagram.com/reel/DCW8P8-h-aM/?igsh=azZjbG1vdnJwNWJ5", // Link for the first image
    "https://www.instagram.com/p/DCUWCqqhJwL/?igsh=MXBuemprNWFwaWM2eg==", // Link for the second image
    "https://www.instagram.com/reel/DCLJ_HbBOYE/?igsh=MTQ0b3FsZzV1OXJyeA==", // Link for the third image
    "https://www.instagram.com/p/DB9-sp6BMAk/?igsh=eDJhOWM1OTE5cTVn", // Link for the fourth image
    "https://www.instagram.com/reel/DCW8P8-h-aM/?igsh=azZjbG1vdnJwNWJ5", // Link for the fifth image
  ];

const instagramLinks = [
  {
    id: 1,
    url: "https://www.instagram.com/p/DJtkanXs1wq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    embed:
      '<iframe src="https://www.instagram.com/p/DJtkanXs1wq/embed" width="400" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
  },
  {
    id: 2,
    url: "https://www.instagram.com/p/DJtfWQiy-UA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    embed:
      '<iframe src="https://www.instagram.com/p/DJtfWQiy-UA/embed" width="400" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
  },
  {
    id: 3,
    url: "https://www.instagram.com/p/DJtqW6lStuP/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    embed:
      '<iframe src="https://www.instagram.com/p/DJtqW6lStuP/embed" width="400" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
  },
];

  return (
    <Container className={`section-margin`}>
      <h2 className={styles.gridTitle}>Check Out Our Recent Achievements</h2>
      <div className={styles.gridWrapper}>
        {instagramLinks.map((link) => (
          <div key={link.id} className={styles.gridItem}>
            {/* Dangerously set iframe */}
            <div
              dangerouslySetInnerHTML={{ __html: link.embed }}
              className={styles.embedWrapper}
            ></div>
            <p className={styles.gridDescription}>{link.description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default InstagramReels;