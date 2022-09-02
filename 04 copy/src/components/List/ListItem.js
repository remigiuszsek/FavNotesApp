import React from "react";
import PropTypes from "prop-types";
import styles from "./ListItem.module.scss";
import Button from '../Button/Button';
import Title from '../Title/Title';

const ListItem = ({ type, image, title, description, link }) => {
  const ImageTag = image ? "img" : "div";

  return (
    <li className={styles.wrapper}>
      {image && <ImageTag 
        src={image} 
        className={image ? styles.image : styles.imageNone} 
        alt={title}
      />}
      <div>
        <Title>{title}</Title>
        <p className={styles.description}>{description}</p>
        {link && <Button
          href={link}
        >
          {image ? 'visit twitter page' : 'visit article'}
        </Button>}
      </div>
    </li>
  );
};

ListItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  link: PropTypes.string.isRequired,
};

ListItem.defaultProps = {
  image: 'https://pbs.twimg.com/profile_images/1545194945161707520/rqkwPViA_400x400.jpg',
  description: 'React creator',
};

export default ListItem;
