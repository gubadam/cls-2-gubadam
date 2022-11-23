import React from "react";
import Image from "next/image";

import styles from "./User.module.css";

interface Props {
  name: string;
  email: string;
  image?: string;
  logout: () => void;
}

export const User = ({email, image, name, logout }: Props) => (
  <div className={styles.root}>
    <div className={styles.user}>
      <div>
        {image ? (
          <Image
            className={styles.image}
            src={image}
            alt="user avatar"
            width={40}
            height={40}
          />
        ) : (
          <span className={`${styles.image} ${styles.placeholder}`} />
        )}
      </div>
      <div className={styles.details}>
        <p className={styles.name}>{name}</p>
        <p className={styles.email}>{email}</p>
      </div>
    </div>

    <button
      type="button"
      onClick={logout}
      className={styles.button}
    >
      Wyloguj
    </button>
  </div>
);

export default User;
