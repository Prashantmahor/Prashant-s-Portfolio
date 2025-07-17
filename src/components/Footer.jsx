import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin, FaGithub, FaYoutube, FaTelegram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
       <a
        href="https://www.youtube.com/@Bro-Code-vs5cw"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaYoutube size={24} />
      </a>
      <a
        href="https://t.me/+916398783975"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTelegram size={24} />
      </a>
      <a
        href="https://www.instagram.com/chaotic.prashant?igsh=MXBmbXdieXlqeWljbw=="
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={24} />
      </a>
      <a href="https://l.instagram.com/?u=https%3A%2F%2Fgithub.com%2FPrashantmahor%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAadIjjv6fMM_CKRpdryiGVawRk_XEd51z5q1WRA7NXIxClc63Sv6ZuXfHVlUlQ_aem_krrC61N40rX5n0i5-JFReg&e=AT3m6-boRyAc97pIqqC8AlveGuUnA7aakQN45uqTx1ZYpxlhlnAjOvgLiOnOG6it_2C_ClZXARrIxI-L6FH358HXoED8Kj0ltqQh9aLKjP7Y3b1If1q5FdE" target="_blank" rel="noopener noreferrer">
        <FaGithub size={24} />
      </a>
      <a
        href="https://l.instagram.com/?u=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fprashant-mahor-a58159250%3Futm_source%3Dshare%26fbclid%3DPAZXh0bgNhZW0CMTEAAadRwmXo9R33xOxEZGz-bjAR-juwGyGclmtSiOLaBAFGEgkGT-qA1vRocMRuTQ_aem_SqfPaoOJlYvWqwfqrFzN0Q&e=AT2rglUPno5uGpbTTWQmtDas4Agf9EuFQQQQ9uf7-CkbX4F5isKSjlhQSGkDj6hWhUqXoktagXXrbBa7jn0ti9hkywGDE5T5XKHfknhlnWBZx1hYLK4plsg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
    </footer>
  );
};

export default Footer;