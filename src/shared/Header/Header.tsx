import React from "react";
import Image from "next/image";
import "./Header.css";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="topbar">
        <div className="topbar-left">
          <div className="topbar-left__content">
            <svg
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9 0H2.1C1.54305 0 1.0089 0.237053 0.615076 0.65901C0.221249 1.08097 0 1.65326 0 2.25V9.75C0 10.3467 0.221249 10.919 0.615076 11.341C1.0089 11.7629 1.54305 12 2.1 12H11.9C12.457 12 12.9911 11.7629 13.3849 11.341C13.7788 10.919 14 10.3467 14 9.75V2.25C14 1.65326 13.7788 1.08097 13.3849 0.65901C12.9911 0.237053 12.457 0 11.9 0ZM2.1 1.5H11.9C12.0857 1.5 12.2637 1.57902 12.395 1.71967C12.5263 1.86032 12.6 2.05109 12.6 2.25L7 5.91L1.4 2.25C1.4 2.05109 1.47375 1.86032 1.60503 1.71967C1.7363 1.57902 1.91435 1.5 2.1 1.5ZM12.6 9.75C12.6 9.94891 12.5263 10.1397 12.395 10.2803C12.2637 10.421 12.0857 10.5 11.9 10.5H2.1C1.91435 10.5 1.7363 10.421 1.60503 10.2803C1.47375 10.1397 1.4 9.94891 1.4 9.75V3.96L6.636 7.3875C6.74241 7.45333 6.86312 7.48798 6.986 7.48798C7.10888 7.48798 7.22959 7.45333 7.336 7.3875L12.6 3.96V9.75Z"
                fill="white"
              />
            </svg>
            <p>mthomas&#64;gmail.com</p>
          </div>
          <div className="topbar-left__content">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.1967 15H11.2164C11.586 15 11.9353 14.8544 12.1999 14.5898L14.0984 12.6913C14.1634 12.6263 14.215 12.5492 14.2503 12.4643C14.2855 12.3793 14.3036 12.2883 14.3036 12.1964C14.3036 12.1044 14.2855 12.0134 14.2503 11.9285C14.215 11.8435 14.1634 11.7664 14.0984 11.7014L11.2983 8.90129C11.2333 8.83623 11.1562 8.78461 11.0712 8.74939C10.9863 8.71417 10.8953 8.69604 10.8033 8.69604C10.7114 8.69604 10.6204 8.71417 10.5354 8.74939C10.4505 8.78461 10.3734 8.83623 10.3084 8.90129L9.19257 10.0171C8.67525 9.86314 7.70991 9.51313 7.09809 8.90129C6.48627 8.28946 6.13625 7.32412 5.98225 6.80679L7.09809 5.69093C7.16315 5.62598 7.21477 5.54883 7.24999 5.46391C7.28521 5.37898 7.30334 5.28795 7.30334 5.19601C7.30334 5.10407 7.28521 5.01304 7.24999 4.92811C7.21477 4.84319 7.16315 4.76604 7.09809 4.70109L4.29798 1.90094C4.16415 1.77463 3.98709 1.70426 3.80306 1.70426C3.61903 1.70426 3.44197 1.77463 3.30814 1.90094L1.41037 3.79944C1.14436 4.06545 0.994551 4.43087 1.00015 4.80399C1.01625 5.80084 1.28016 9.26321 4.00887 11.9919C6.73758 14.7207 10.1999 14.9839 11.1967 15ZM3.80376 3.38572L5.61403 5.19601L4.7089 6.10115C4.62653 6.1833 4.56602 6.28474 4.53288 6.39625C4.49975 6.50776 4.49504 6.62579 4.51919 6.73959C4.53599 6.82009 4.94691 8.72909 6.10895 9.89114C7.271 11.0532 9.17997 11.4641 9.26047 11.4809C9.37426 11.5052 9.49233 11.5006 9.60386 11.4674C9.71539 11.4343 9.81683 11.3737 9.8989 11.2912L10.804 10.3861L12.6143 12.1964L11.21 13.5999C10.3364 13.5852 7.3473 13.3507 4.99871 11.0014C2.64242 8.64508 2.41421 5.64543 2.40021 4.78929L3.80376 3.38572ZM13.5999 7.29961H15C15 3.70844 12.2888 1 8.69275 1V2.40007C11.5363 2.40007 13.5999 4.46027 13.5999 7.29961Z"
                fill="white"
              />
              <path
                d="M9.5 4.12187V3.52039C10.4424 3.60006 11.1376 3.90971 11.6139 4.38605C12.0903 4.8624 12.3999 5.55761 12.4796 6.5H11.8781C11.8151 5.8192 11.6097 5.24081 11.1845 4.81555C10.7592 4.39029 10.1808 4.18491 9.5 4.12187Z"
                stroke="white"
              />
            </svg>
            <p>(12345)67890</p>
          </div>
        </div>
        <div className="topbar-right">
          <ul className="topbar-right__content">
            <li>
              <a href="">English</a>
            </li>
            <li>
              <a href="">USD</a>
            </li>
            <li className="con">
              <a href="">
                Login
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 2C8.49445 2 8.9778 2.14662 9.38893 2.42133C9.80005 2.69603 10.1205 3.08648 10.3097 3.54329C10.4989 4.00011 10.5484 4.50277 10.452 4.98773C10.3555 5.47268 10.1174 5.91814 9.76777 6.26777C9.41814 6.6174 8.97268 6.8555 8.48773 6.95196C8.00278 7.04843 7.50011 6.99892 7.04329 6.8097C6.58648 6.62048 6.19603 6.30005 5.92133 5.88893C5.64662 5.4778 5.5 4.99445 5.5 4.5C5.5 3.83696 5.76339 3.20107 6.23223 2.73223C6.70108 2.26339 7.33696 2 8 2ZM8 1C7.30777 1 6.63108 1.20527 6.05551 1.58986C5.47993 1.97444 5.03133 2.52107 4.76642 3.16061C4.50152 3.80015 4.4322 4.50388 4.56725 5.18282C4.7023 5.86175 5.03564 6.48539 5.52513 6.97487C6.01461 7.46436 6.63825 7.7977 7.31719 7.93275C7.99612 8.0678 8.69985 7.99848 9.33939 7.73358C9.97893 7.46867 10.5256 7.02007 10.9101 6.4445C11.2947 5.86892 11.5 5.19223 11.5 4.5C11.5 3.57174 11.1313 2.6815 10.4749 2.02513C9.8185 1.36875 8.92826 1 8 1Z"
                    fill="white"
                  />
                  <path
                    d="M13 15H12V12.5C12 12.1717 11.9353 11.8466 11.8097 11.5433C11.6841 11.24 11.4999 10.9644 11.2678 10.7322C11.0356 10.5001 10.76 10.3159 10.4567 10.1903C10.1534 10.0647 9.8283 10 9.5 10H6.5C5.83696 10 5.20107 10.2634 4.73223 10.7322C4.26339 11.2011 4 11.837 4 12.5V15H3V12.5C3 11.5717 3.36875 10.6815 4.02513 10.0251C4.6815 9.36875 5.57174 9 6.5 9H9.5C10.4283 9 11.3185 9.36875 11.9749 10.0251C12.6313 10.6815 13 11.5717 13 12.5V15Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="">
                Whislist
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.7141 3.30182C12.9713 2.55413 11.9865 2.09955 10.9387 2.02074C9.89102 1.94192 8.84997 2.24411 8.00494 2.87236C7.11474 2.20608 6.00672 1.90396 4.90401 2.02683C3.80131 2.1497 2.78582 2.68844 2.06205 3.53456C1.33828 4.38068 0.959991 5.47133 1.00336 6.58688C1.04672 7.70243 1.50852 8.76001 2.29576 9.54665L7.50818 14.7917C7.57323 14.8577 7.65061 14.9101 7.73587 14.9459C7.82113 14.9816 7.91257 15 8.00494 15C8.0973 15 8.18875 14.9816 8.27401 14.9459C8.35927 14.9101 8.43665 14.8577 8.50169 14.7917L13.7141 9.54665C14.1218 9.13671 14.4452 8.64995 14.6658 8.11419C14.8864 7.57843 15 7.00418 15 6.42424C15 5.8443 14.8864 5.27004 14.6658 4.73428C14.4452 4.19852 14.1218 3.71177 13.7141 3.30182ZM12.7276 8.55396L8.00494 13.2992L3.28227 8.55396C2.8661 8.13343 2.5826 7.59861 2.46733 7.01657C2.35207 6.43454 2.41017 5.83121 2.63436 5.28228C2.85854 4.73335 3.23882 4.26325 3.72749 3.93097C4.21616 3.59868 4.79147 3.419 5.38123 3.41447C6.16912 3.41641 6.92404 3.73293 7.4802 4.29452C7.54524 4.3605 7.62262 4.41288 7.70788 4.44862C7.79314 4.48437 7.88459 4.50277 7.97695 4.50277C8.06931 4.50277 8.16076 4.48437 8.24602 4.44862C8.33128 4.41288 8.40866 4.3605 8.47371 4.29452C9.04625 3.79527 9.7859 3.53355 10.543 3.56233C11.3 3.59111 12.0179 3.90824 12.5514 4.44954C13.0849 4.99083 13.3941 5.71586 13.4164 6.47788C13.4387 7.23989 13.1725 7.98199 12.6716 8.55396H12.7276Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li>
              <Link href="/Cart">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.999023 1.5991C0.999023 1.43995 1.06225 1.28732 1.17478 1.17478C1.28732 1.06225 1.43995 0.999023 1.5991 0.999023H2.04556C2.80566 0.999023 3.26172 1.51029 3.52175 1.98555C3.69538 2.30239 3.82099 2.66964 3.91941 3.00249C3.94602 3.00038 3.97271 2.99932 3.99942 2.99929H13.9991C14.6632 2.99929 15.1433 3.63457 14.9608 4.27385L13.4983 9.40172C13.3671 9.86167 13.0897 10.2664 12.708 10.5545C12.3263 10.8427 11.8611 10.9986 11.3828 10.9987H6.62376C6.14169 10.9988 5.67296 10.8405 5.2896 10.5482C4.90625 10.2559 4.6295 9.84579 4.50188 9.38092L3.8938 7.16303L2.88567 3.76419L2.88487 3.75778C2.76005 3.30413 2.64324 2.87927 2.46882 2.56243C2.30159 2.25439 2.16718 2.19918 2.04636 2.19918H1.5991C1.43995 2.19918 1.28732 2.13596 1.17478 2.02342C1.06225 1.91089 0.999023 1.75825 0.999023 1.5991ZM5.05795 6.87179L5.65883 9.06328C5.77885 9.49694 6.1733 9.79857 6.62376 9.79857H11.3828C11.6002 9.79857 11.8116 9.72773 11.9852 9.59679C12.1587 9.46585 12.2849 9.28193 12.3445 9.07288L13.7343 4.19944H4.26745L5.04675 6.82939L5.05795 6.87179Z"
                    fill="white"
                  />
                  <path
                    d="M7.80003 13.4007C7.80003 13.8251 7.63143 14.2322 7.33134 14.5323C7.03124 14.8324 6.62422 15.001 6.19982 15.001C5.77542 15.001 5.3684 14.8324 5.0683 14.5323C4.7682 14.2322 4.59961 13.8251 4.59961 13.4007C4.59961 12.9763 4.7682 12.5693 5.0683 12.2692C5.3684 11.9691 5.77542 11.8005 6.19982 11.8005C6.62422 11.8005 7.03124 11.9691 7.33134 12.2692C7.63143 12.5693 7.80003 12.9763 7.80003 13.4007ZM6.59987 13.4007C6.59987 13.2946 6.55772 13.1929 6.4827 13.1179C6.40767 13.0428 6.30592 13.0007 6.19982 13.0007C6.09372 13.0007 5.99196 13.0428 5.91694 13.1179C5.84191 13.1929 5.79977 13.2946 5.79977 13.4007C5.79977 13.5068 5.84191 13.6086 5.91694 13.6836C5.99196 13.7587 6.09372 13.8008 6.19982 13.8008C6.30592 13.8008 6.40767 13.7587 6.4827 13.6836C6.55772 13.6086 6.59987 13.5068 6.59987 13.4007Z"
                    fill="white"
                  />
                  <path
                    d="M13.4006 13.4007C13.4006 13.8251 13.232 14.2322 12.9319 14.5323C12.6318 14.8324 12.2248 15.001 11.8004 15.001C11.376 15.001 10.969 14.8324 10.6689 14.5323C10.3688 14.2322 10.2002 13.8251 10.2002 13.4007C10.2002 12.9763 10.3688 12.5693 10.6689 12.2692C10.969 11.9691 11.376 11.8005 11.8004 11.8005C12.2248 11.8005 12.6318 11.9691 12.9319 12.2692C13.232 12.5693 13.4006 12.9763 13.4006 13.4007ZM12.2005 13.4007C12.2005 13.2946 12.1583 13.1929 12.0833 13.1179C12.0083 13.0428 11.9065 13.0007 11.8004 13.0007C11.6943 13.0007 11.5925 13.0428 11.5175 13.1179C11.4425 13.1929 11.4004 13.2946 11.4004 13.4007C11.4004 13.5068 11.4425 13.6086 11.5175 13.6836C11.5925 13.7587 11.6943 13.8008 11.8004 13.8008C11.9065 13.8008 12.0083 13.7587 12.0833 13.6836C12.1583 13.6086 12.2005 13.5068 12.2005 13.4007Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <nav className="navbar">
        <div className="navbar-left">
          <div className="logo">
            <Image
              src="/assets/Hekto.png"
              alt="Website Logo"
              width={100}
              height={100}
            />
          </div>
          <ul className="menu">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/Blog">Blog</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-right">
          <div className="navbar-right-wrapper">
            <input
              type="text"
              name="text"
              placeholder="Search"
              className="input-search"
            />
            <button className="navbar-btn">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.7192 18.3139L16.0114 14.6333C17.4506 12.8374 18.1476 10.5579 17.959 8.26356C17.7705 5.96919 16.7106 3.83432 14.9975 2.29792C13.2844 0.761532 11.0481 -0.0595993 8.74862 0.00337152C6.44911 0.0663423 4.26109 1.00863 2.63448 2.63648C1.00786 4.26433 0.066292 6.454 0.00336896 8.75527C-0.059554 11.0565 0.760954 13.2945 2.29618 15.0089C3.83141 16.7233 5.96466 17.784 8.25729 17.9727C10.5499 18.1614 12.8277 17.4639 14.6222 16.0235L18.3 19.7042C18.3929 19.7979 18.5035 19.8723 18.6253 19.9231C18.747 19.9739 18.8777 20 19.0096 20C19.1415 20 19.2722 19.9739 19.3939 19.9231C19.5157 19.8723 19.6263 19.7979 19.7192 19.7042C19.8993 19.5177 20 19.2684 20 19.009C20 18.7497 19.8993 18.5004 19.7192 18.3139ZM9.01554 16.0235C7.63189 16.0235 6.27932 15.6129 5.12886 14.8436C3.9784 14.0743 3.08172 12.9809 2.55223 11.7016C2.02273 10.4223 1.88419 9.01462 2.15412 7.65653C2.42406 6.29844 3.09035 5.05095 4.06873 4.07183C5.04712 3.0927 6.29366 2.4259 7.65072 2.15576C9.00778 1.88562 10.4144 2.02426 11.6927 2.55417C12.9711 3.08407 14.0637 3.98142 14.8324 5.13276C15.6011 6.28409 16.0114 7.63769 16.0114 9.02239C16.0114 10.8792 15.2743 12.66 13.9623 13.973C12.6504 15.2859 10.871 16.0235 9.01554 16.0235Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;