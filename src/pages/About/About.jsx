import './About.css';
import Hexagon from './Hexagon.jsx';
import Skill from './skill.jsx';

function About() {
  return (
    <>
      <div className="about-me">
        <h1>About Me</h1>
        <div className="cards">
          <Hexagon label={"Technical Design"} desc={"Crafting seamless user interfaces and experiences that merge creative design with technical feasibility."}/>
          <Hexagon label={"Data Analyst"} desc={"Extracting actionable insights from complex datasets, guiding data-driven decision-making for improved business outcomes."}/>
          <Hexagon label={"Backend Specialist"} desc={" Developing and maintaining efficient server-side logic, ensuring smooth integration with frontend applications."}/>
          <Hexagon label={"Server Administrator"} desc={"Managing server infrastructure for optimal performance, security, and reliability, ensuring uninterrupted digital service operation."}/>
        </div>
        <div className="section-2">
          <div className="skills-section">
            <h2>Skills</h2>
            <Skill label={"Javascript"} percentage={"90"}/>
            <Skill label={"MongoDB"} percentage={"90"}/>
            <Skill label={"React"} percentage={"80"}/>
            <Skill label={"Node.js"} percentage={"80"}/>
            <Skill label={"Express.js"} percentage={"70"}/>
            <Skill label={"PHP"} percentage={"60"}/>
            <Skill label={"Java"} percentage={"60"}/>
          </div>
          <div className="about-section">
            {/*<h2>Info</h2>*/}
            {/*<div>*/}
            {/*  <p><span className="Bold">Portland, OR</span> - Remote Work <br/> 5-year self-taught developer with a Certification from <span className="Bold">UCF College</span> and <span className="Bold">MongoDB University.</span></p>*/}
            {/*  <p>My long-term <span className="Bold">Goal</span> is to create innovative, user-centric software solutions that leave a lasting mark.</p>*/}
            {/*</div>*/}
            {/*<div className="about-education">*/}
            {/*  <div className="edu">*/}
            {/*    <div className="edu-header">*/}
            {/*      <svg xmlns="http://www.w3.org/2000/svg" width="71" height="26" viewBox="0 0 71 26" fill="none">*/}
            {/*        <g clipPath="url(#clip0_56_1185)">*/}
            {/*          <path d="M17.7541 22.0457C17.7541 21.3682 17.6066 20.6907 17.282 20.0721C16.6919 18.8938 14.8035 18.0101 12.9741 17.1853C12.0889 16.7729 11.2037 16.3605 10.4956 15.9482C7.07284 13.8862 5.95159 11.3529 5.62702 9.615C5.5385 9.1437 5.47949 8.64294 5.47949 8.17163C5.47949 6.66935 5.92209 5.25544 6.71876 4.16554C9.93495 -0.105652 15.3641 0.395109 16.9575 0.630762C15.3936 0.689675 11.5283 1.39663 9.66939 5.0787C9.31532 5.78565 9.10877 6.55152 9.10877 7.28794C9.10877 10.2925 12.1774 12.8847 14.6265 14.9466C15.4821 15.6536 16.2788 16.3605 16.8985 16.9791C17.9902 18.1279 18.5508 19.3357 18.5508 20.6023C18.5508 22.0751 17.7836 23.2534 17.341 23.813C17.6361 23.2534 17.7541 22.6642 17.7541 22.0457Z" fill="#FFCF01"/>*/}
            {/*          <path d="M2.70605 20.3077C3.44371 20.9263 5.00755 21.9573 7.92868 22.7821C9.404 23.1945 10.7908 23.2239 11.912 23.2534C12.9153 23.2828 13.7119 23.2828 14.2135 23.5774C14.6266 23.8131 14.8627 24.1665 14.8627 24.5495L14.8332 24.7557C14.6856 25.3153 13.9185 25.9045 12.2366 25.9339C7.1025 25.9928 3.91582 22.1635 2.70605 20.3077Z" fill="#FFCF01"/>*/}
            {/*          <path d="M11.8828 11.5003C11.8828 11.5003 14.0073 7.96553 16.1907 7.3764C18.8463 6.66944 20.2921 7.81825 20.2921 7.81825L21.0298 6.37488L22.151 11.9127C22.151 11.9127 22.3576 12.4135 21.4134 13.0615C20.4987 13.6801 20.4102 13.5623 20.4102 13.5623C20.4102 13.5623 19.82 11.2941 18.6103 11.029C17.43 10.7639 17.43 12.3546 17.489 12.8553C17.548 13.3561 18.5808 15.418 20.2626 14.5638C22.1215 13.6212 22.9772 12.4135 22.9772 12.4135C22.9772 12.4135 23.2428 11.7949 23.5083 11.9716C23.7739 12.1484 24.7771 13.2382 24.7771 13.2382L24.3935 19.866C24.3935 19.866 24.3935 20.6907 23.2723 20.9853C22.151 21.3093 22.151 21.2504 22.151 21.2504L22.7412 19.2474H23.4788L23.2723 14.5932C23.2723 14.5932 22.6526 17.6273 21.4724 19.6303C20.0856 22.0163 17.8136 23.9899 17.8136 23.9899C17.8136 23.9899 19.2299 22.2814 19.0234 20.2194C18.8758 18.835 18.2857 17.2443 15.3351 14.7994C13.6532 13.415 11.8828 11.5003 11.8828 11.5003Z" fill="#FFCF01"/>*/}
            {/*          <path d="M15.3351 24.3727C15.3351 24.1665 15.2761 23.9603 15.1875 23.7836C14.863 23.1356 13.9483 22.8115 12.5025 22.7526C9.84689 22.6643 3.50302 22.0162 1.73264 17.8039C1.17202 16.4784 0.876953 15.0056 0.876953 13.4738C0.876953 11.7064 1.26054 10.2631 1.49659 9.49719C1.46708 9.70339 1.46708 10.0863 1.46708 10.0863C1.46708 11.7359 1.85066 14.8583 4.53574 17.0381C6.21761 18.452 8.75515 19.5419 12.0599 20.3077C14.3023 20.838 15.5711 21.6333 15.8662 22.6937L15.9252 23.1356C15.9252 23.6658 15.6891 24.196 15.2761 24.7557C15.3056 24.6378 15.3351 24.3727 15.3351 24.3727Z" fill="#FFCF01"/>*/}
            {/*          <path d="M16.5157 23.1945C16.5157 22.9 16.4567 22.576 16.3092 22.2519C15.8371 21.1326 14.4798 20.3078 12.2963 19.8365C6.6016 18.5993 3.3559 16.3017 2.41169 12.8553C2.17564 12.0011 2.05762 11.2057 2.05762 10.4693C2.05762 5.72683 6.24752 3.19357 7.66383 2.45715C6.89666 3.16411 5.30332 4.90205 4.97875 7.14074C4.91973 7.55313 4.89023 7.93607 4.89023 8.319C4.89023 11.1174 6.33604 13.5917 9.31618 15.8304C10.2604 16.5374 11.4997 17.097 12.7389 17.6567C14.4798 18.452 16.1322 19.1885 16.7813 20.2783C17.1059 20.8086 17.2239 21.3388 17.2239 21.8395C17.2239 22.8411 16.6928 23.6953 16.3387 24.1372C16.4272 23.9015 16.5157 23.5775 16.5157 23.1945Z" fill="#FFCF01"/>*/}
            {/*          <path d="M16.3381 3.78269C15.4234 3.78269 14.5382 2.92845 14.5382 1.98584C14.5382 2.89899 13.6825 3.78269 12.7383 3.78269C13.653 3.78269 14.5382 4.63693 14.5382 5.57954C14.5677 4.66638 15.4234 3.78269 16.3381 3.78269Z" fill="#FFCF01"/>*/}
            {/*          <path d="M41.5961 17.8924C41.5961 21.2799 39.5306 23.8131 35.5178 23.8131C31.5049 23.8131 29.4395 21.2799 29.4395 17.8924V9.05542H32.6261V17.7746C32.6261 19.5419 33.8359 20.8969 35.5473 20.8969C37.2291 20.8969 38.4389 19.5419 38.4389 17.7746V9.05542H41.5961V17.8924Z" fill="black"/>*/}
            {/*          <path d="M54.9916 12.7964C54.372 12.0305 53.4573 11.6181 52.2475 11.6181C49.8575 11.6181 48.0576 13.5623 48.0576 16.2428C48.0576 18.9234 49.828 20.8675 52.1295 20.8675C53.3983 20.8675 54.4605 20.3078 55.1097 19.3357L57.7652 21.3093C56.5555 23.0178 54.5195 23.8131 52.5426 23.8131C48.0281 23.8131 44.7529 20.8675 44.7529 16.2428C44.7529 11.6181 48.0281 8.67249 52.5426 8.67249C54.1655 8.67249 56.2014 9.23216 57.4112 10.7934L54.9916 12.7964Z" fill="black"/>*/}
            {/*          <path d="M60.9521 9.05542H70.6302V11.9716H64.1388V14.9173H70.1581V17.8335H64.1388V23.4597H60.9521V9.05542Z" fill="black"/>*/}
            {/*        </g>*/}
            {/*        <defs>*/}
            {/*          <clipPath id="clip0_56_1185">*/}
            {/*            <rect width="69.753" height="25.4504" fill="white" transform="translate(0.876953 0.483521)"/>*/}
            {/*          </clipPath>*/}
            {/*        </defs>*/}
            {/*      </svg>*/}
            {/*      <h3>Aug - Dec 2023</h3>*/}
            {/*    </div>*/}
            {/*    <h2>UCF Coding Boot Camp</h2>*/}
            {/*  </div>*/}
            {/*  <div className="edu">*/}
            {/*    <div className="edu-header">*/}
            {/*      <div>*/}
            {/*        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="50" viewBox="0 0 24 50" fill="none">*/}
            {/*          <path d="M11.8428 0.136475L13.177 2.64254C13.477 3.105 13.802 3.51435 14.1848 3.89557C15.307 5.00381 16.3531 6.18662 17.3158 7.43593C19.5766 10.4045 21.1015 13.7011 22.1905 17.2664C22.8436 19.4444 23.1982 21.6786 23.2248 23.9378C23.3341 30.692 21.0187 36.4916 16.3503 41.3115C15.5909 42.0759 14.7705 42.7771 13.8973 43.4082C13.4348 43.4082 13.2161 43.0536 13.0255 42.727C12.6784 42.1215 12.4474 41.4566 12.3443 40.7663C12.1802 39.9491 12.0724 39.132 12.1256 38.2883V37.9071C12.0881 37.8258 11.6803 0.328648 11.8428 0.136475Z" fill="#599636"/>*/}
            {/*          <path d="M11.8433 0.0537507C11.7886 -0.0556162 11.7339 0.0271902 11.6792 0.0803113C11.7058 0.627146 11.5152 1.11461 11.2167 1.5802C10.8886 2.04267 10.4543 2.39733 10.0184 2.77855C7.5967 4.87527 5.69058 7.4079 4.16413 10.2405C2.13303 14.0527 1.08623 18.1384 0.789376 22.4396C0.653449 23.991 1.27997 29.4656 1.76899 31.0452C3.10327 35.2387 5.49997 38.7525 8.60443 41.8022C9.36688 42.5366 10.1824 43.2178 11.0261 43.8724C11.2714 43.8724 11.298 43.6537 11.3542 43.4912C11.4618 43.1435 11.5438 42.7884 11.5995 42.4287L12.1464 38.3447L11.8433 0.0537507Z" fill="#6CAC48"/>*/}
            {/*          <path d="M13.1778 45.0675C13.2325 44.4425 13.5324 43.9238 13.859 43.4067C13.5309 43.2707 13.2871 43.0005 13.0965 42.6989C12.9322 42.4134 12.7961 42.1125 12.6903 41.8005C12.3091 40.6569 12.2278 39.457 12.1185 38.2883V37.5806C11.9825 37.6899 11.9544 38.6149 11.9544 38.7523C11.8749 39.9875 11.711 41.2158 11.4638 42.4286C11.3826 42.9192 11.3279 43.4082 11.0264 43.8441C11.0264 43.8988 11.0264 43.9535 11.0529 44.0347C11.5435 45.4784 11.6779 46.9486 11.7607 48.4469V48.9937C11.7607 49.6468 11.7341 49.5093 12.2763 49.728C12.495 49.8093 12.7387 49.8374 12.9575 49.9999C13.1215 49.9999 13.1481 49.864 13.1481 49.7546L13.0668 48.8562V46.3502C13.0403 45.9127 13.1215 45.4784 13.1762 45.069L13.1778 45.0675Z" fill="#C2BFBF"/>*/}
            {/*        </svg>*/}
            {/*        <svg xmlns="http://www.w3.org/2000/svg" width="79" height="22" viewBox="0 0 79 22" fill="none">*/}
            {/*          <g clipPath="url(#clip0_54_1173)">*/}
            {/*            <path d="M77.5425 17.787C77.4007 17.703 77.2941 17.5809 77.2089 17.4359C77.1308 17.2833 77.0879 17.1231 77.0879 16.9475C77.0879 16.772 77.1308 16.6041 77.2089 16.4592C77.2869 16.3065 77.4007 16.1921 77.5425 16.1081C77.6849 16.0242 77.841 15.9784 78.0186 15.9784C78.1961 15.9784 78.3522 16.0242 78.4946 16.1081C78.6364 16.1921 78.7431 16.3142 78.8282 16.4592C78.9063 16.6117 78.9492 16.772 78.9492 16.9475C78.9492 17.1231 78.9063 17.2909 78.8282 17.4359C78.7502 17.5886 78.6364 17.703 78.4946 17.787C78.3522 17.8709 78.1961 17.9167 78.0186 17.9167C77.8482 17.9167 77.6849 17.8785 77.5425 17.787ZM78.4166 17.6801C78.5369 17.6114 78.6228 17.5046 78.6937 17.3825C78.7574 17.2528 78.7932 17.1078 78.7932 16.9475C78.7932 16.7873 78.7574 16.6423 78.6937 16.5126C78.6292 16.3829 78.5369 16.2836 78.4166 16.2149C78.2956 16.1462 78.1675 16.1081 78.0186 16.1081C77.8697 16.1081 77.7415 16.1462 77.6205 16.2149C77.5002 16.2836 77.4143 16.3905 77.3435 16.5126C77.2797 16.6423 77.244 16.7873 77.244 16.9475C77.244 17.1078 77.2797 17.2528 77.3435 17.3825C77.4079 17.5122 77.5002 17.6114 77.6205 17.6801C77.7415 17.7488 77.8697 17.787 78.0186 17.787C78.1675 17.787 78.3028 17.7488 78.4166 17.6801ZM77.6348 17.413V17.3443L77.6492 17.3367H77.6921C77.7057 17.3367 77.72 17.3291 77.7272 17.3215C77.7415 17.3062 77.7415 17.2986 77.7415 17.2833V16.5736C77.7415 16.5583 77.7344 16.5431 77.7272 16.5355C77.7129 16.5202 77.7057 16.5202 77.6921 16.5202H77.6492L77.6348 16.5126V16.4439L77.6492 16.4363H78.0186C78.1252 16.4363 78.2033 16.4592 78.267 16.5126C78.3314 16.566 78.3593 16.6347 78.3593 16.7263C78.3593 16.795 78.3386 16.8636 78.2885 16.9094C78.2391 16.9628 78.1818 16.9934 78.1109 17.001L78.1961 17.0315L78.3593 17.3138C78.3736 17.3367 78.388 17.3443 78.4094 17.3443H78.4517L78.4588 17.352V17.4206L78.4517 17.4283H78.2319L78.2176 17.4206L77.9899 17.0086H77.9334V17.2833C77.9334 17.2986 77.9405 17.3138 77.9477 17.3215C77.962 17.3367 77.9692 17.3367 77.9828 17.3367H78.0257L78.04 17.3443V17.413L78.0257 17.4206H77.6492L77.6348 17.413ZM77.9971 16.9094C78.0544 16.9094 78.1038 16.8941 78.1324 16.856C78.1603 16.8254 78.1818 16.772 78.1818 16.711C78.1818 16.6499 78.1675 16.6041 78.1395 16.566C78.1109 16.5279 78.068 16.5126 78.0186 16.5126H77.9899C77.9756 16.5126 77.962 16.5202 77.9548 16.5279C77.9405 16.5431 77.9405 16.5507 77.9405 16.566V16.9094H77.9971Z" fill="#001E2B"/>*/}
            {/*            <path d="M7.30591 15.1768L3.85282 7.22289L3.84509 7.20093H1.15846V7.73558H1.59203C1.72364 7.73558 1.84751 7.78685 1.94046 7.87474C2.03333 7.96262 2.0798 8.07983 2.0798 8.20432L2.0024 16.2095C2.0024 16.4585 1.78565 16.6635 1.52236 16.6709L1.08105 16.6782V17.2055H3.69801V16.6782L3.42698 16.6709C3.16376 16.6635 2.94694 16.4585 2.94694 16.2095V8.66572L6.7098 17.2055C6.76393 17.33 6.8878 17.4106 7.02722 17.4106C7.16656 17.4106 7.29044 17.33 7.34465 17.2055L11.0223 8.85613L11.0765 16.2095C11.0765 16.4658 10.8597 16.6709 10.5887 16.6782H10.31V17.2055H13.3759V16.6782H12.9578C12.6946 16.6782 12.4778 16.4658 12.4701 16.2168L12.4469 8.21161C12.4469 7.9553 12.6636 7.75022 12.9269 7.7429L13.3759 7.73558V7.20093H10.759L7.30591 15.1768Z" fill="#111423"/>*/}
            {/*            <path d="M29.209 16.6995C29.1327 16.6117 29.0912 16.4919 29.0912 16.3481V12.0661C29.0912 11.2513 28.8836 10.6121 28.4682 10.1568C28.0598 9.70136 27.4921 9.46973 26.786 9.46973C25.796 9.46973 25.0137 9.93307 24.4668 10.8438C24.4599 10.8598 24.4391 10.8678 24.4184 10.8678C24.3976 10.8678 24.3838 10.8518 24.3838 10.8278L24.1276 9.6854H23.6984L22.5977 10.4124V10.8118H22.8815C23.013 10.8118 23.1238 10.8518 23.2 10.9317C23.2761 11.0116 23.3176 11.1314 23.3176 11.2991V16.3401C23.3176 16.4839 23.2761 16.6037 23.2 16.6916C23.1238 16.7794 23.02 16.8274 22.8954 16.8274H22.6184V17.4106H25.1521V16.8274H24.8753C24.7506 16.8274 24.6468 16.7794 24.5707 16.6916C24.4945 16.6037 24.4529 16.4839 24.4529 16.3401V13.0008C24.4529 12.5774 24.536 12.154 24.6884 11.7385C24.8475 11.3311 25.0829 10.9876 25.3945 10.724C25.706 10.4603 26.0798 10.3325 26.509 10.3325C26.9936 10.3325 27.3606 10.5082 27.589 10.8598C27.8174 11.2113 27.9352 11.6666 27.9352 12.2099V16.3321C27.9352 16.4759 27.8936 16.5957 27.8174 16.6836C27.7413 16.7715 27.6374 16.8194 27.5128 16.8194H27.236V17.4025H29.7697V16.8194H29.4928C29.3889 16.8354 29.292 16.7875 29.209 16.6995Z" fill="#111423"/>*/}
            {/*            <path d="M55.0485 7.8129C54.3246 7.40989 53.5156 7.20093 52.6427 7.20093H49.2363V7.74574H49.5699C49.6976 7.74574 49.8112 7.79798 49.9247 7.91739C50.0312 8.02933 50.0879 8.15624 50.0879 8.29053V16.321C50.0879 16.4553 50.0312 16.5822 49.9247 16.6941C49.8183 16.8061 49.6976 16.8657 49.5699 16.8657H49.2363V17.4106H52.6427C53.5156 17.4106 54.3246 17.2016 55.0485 16.7986C55.7723 16.3956 56.3614 15.7985 56.7872 15.0373C57.213 14.2761 57.4329 13.3581 57.4329 12.3132C57.4329 11.2684 57.213 10.3579 56.7872 9.58917C56.3543 8.81301 55.7723 8.22338 55.0485 7.8129ZM56.0633 12.2983C56.0633 13.2536 55.9001 14.0596 55.5807 14.7089C55.2614 15.3582 54.8355 15.8433 54.3104 16.1568C53.7853 16.4703 53.2033 16.627 52.5788 16.627H51.8905C51.7627 16.627 51.6492 16.5747 51.5357 16.4553C51.4292 16.3433 51.3724 16.2165 51.3724 16.0821V8.50702C51.3724 8.37265 51.4221 8.25327 51.5357 8.13381C51.6421 8.02187 51.7627 7.96217 51.8905 7.96217H52.5788C53.2033 7.96217 53.7853 8.1189 54.3104 8.43235C54.8355 8.74579 55.2614 9.23094 55.5807 9.88018C55.9001 10.537 56.0633 11.3504 56.0633 12.2983Z" fill="#646464"/>*/}
            {/*            <path d="M65.0958 12.8431C64.8023 12.4625 64.2358 12.1416 63.5698 11.9699C64.4895 11.4549 64.9623 10.731 64.9623 9.79813C64.9623 9.29063 64.8428 8.83537 64.6024 8.44725C64.3627 8.05921 64.0227 7.74574 63.5897 7.5293C63.156 7.31287 62.6493 7.20093 62.0762 7.20093H58.4837V7.74574H58.7703C58.8903 7.74574 58.9969 7.79798 59.1036 7.91739C59.2036 8.02933 59.2569 8.15624 59.2569 8.29053V16.321C59.2569 16.4553 59.2036 16.5822 59.1036 16.6941C59.0036 16.8061 58.8903 16.8657 58.7703 16.8657H58.457V17.4106H62.3565C62.9495 17.4106 63.5027 17.2986 64.0027 17.0747C64.5028 16.8508 64.9026 16.5225 65.1894 16.0896C65.4823 15.6568 65.6291 15.1268 65.6291 14.5148C65.6224 13.8581 65.4491 13.2983 65.0958 12.8431ZM60.6233 16.4627C60.5233 16.3508 60.47 16.224 60.47 16.0896V12.4848H62.3233C62.9761 12.4848 63.4761 12.6714 63.8228 13.0446C64.1694 13.4178 64.3427 13.9029 64.3427 14.4999C64.3427 14.8582 64.2624 15.2089 64.1163 15.5298C63.9629 15.8583 63.7358 16.1195 63.4296 16.321C63.1295 16.5225 62.7563 16.627 62.3233 16.627H60.9565C60.8366 16.627 60.73 16.5747 60.6233 16.4627ZM60.4767 11.7161V8.51447C60.4767 8.38011 60.5233 8.26072 60.63 8.14126C60.73 8.02933 60.8433 7.96963 60.9633 7.96963H61.8432C62.476 7.96963 62.9429 8.14879 63.2364 8.49204C63.5292 8.84282 63.676 9.29063 63.676 9.84292C63.676 10.4101 63.5359 10.8654 63.2629 11.2086C62.9894 11.5445 62.5763 11.7161 62.0298 11.7161H60.4767Z" fill="#646464"/>*/}
            {/*            <path d="M19.5436 9.96704C18.9212 9.64069 18.226 9.46973 17.4743 9.46973C16.7225 9.46973 16.0193 9.6329 15.4049 9.96704C14.7825 10.2933 14.2894 10.7673 13.9256 11.3656C13.5619 11.9639 13.376 12.6632 13.376 13.4401C13.376 14.2171 13.5619 14.9164 13.9256 15.5147C14.2894 16.113 14.7825 16.587 15.4049 16.9133C16.0274 17.2396 16.7225 17.4106 17.4743 17.4106C18.226 17.4106 18.9293 17.2474 19.5436 16.9133C20.1661 16.587 20.6592 16.113 21.0229 15.5147C21.3866 14.9164 21.5726 14.2171 21.5726 13.4401C21.5726 12.6632 21.3866 11.9639 21.0229 11.3656C20.6592 10.7673 20.1661 10.2933 19.5436 9.96704ZM20.1418 13.4401C20.1418 14.3959 19.8993 15.1728 19.4143 15.7322C18.9374 16.2917 18.2827 16.5792 17.4743 16.5792C16.666 16.5792 16.0111 16.2917 15.5343 15.7322C15.0492 15.1728 14.8067 14.3959 14.8067 13.4401C14.8067 12.4844 15.0492 11.7075 15.5343 11.148C16.0111 10.5886 16.666 10.3011 17.4743 10.3011C18.2827 10.3011 18.9374 10.5886 19.4143 11.148C19.8993 11.7075 20.1418 12.4844 20.1418 13.4401Z" fill="#111423"/>*/}
            {/*            <path d="M45.4113 9.96704C44.8667 9.64069 44.2584 9.46973 43.6007 9.46973C42.9429 9.46973 42.3275 9.6329 41.79 9.96704C41.2453 10.2933 40.8139 10.7673 40.4956 11.3656C40.1773 11.9639 40.0146 12.6632 40.0146 13.4401C40.0146 14.2171 40.1773 14.9164 40.4956 15.5147C40.8139 16.113 41.2453 16.587 41.79 16.9133C42.3346 17.2396 42.9429 17.4106 43.6007 17.4106C44.2584 17.4106 44.8738 17.2474 45.4113 16.9133C45.956 16.587 46.3875 16.113 46.7057 15.5147C47.024 14.9164 47.1867 14.2171 47.1867 13.4401C47.1867 12.6632 47.024 11.9639 46.7057 11.3656C46.3875 10.7673 45.9489 10.2933 45.4113 9.96704ZM45.9348 13.4401C45.9348 14.3959 45.7225 15.1728 45.2982 15.7322C44.8808 16.2917 44.3079 16.5792 43.6007 16.5792C42.8933 16.5792 42.3204 16.2917 41.9032 15.7322C41.4787 15.1728 41.2666 14.3959 41.2666 13.4401C41.2666 12.4767 41.4787 11.7075 41.9032 11.148C42.3204 10.5886 42.8933 10.3011 43.6007 10.3011C44.3079 10.3011 44.8808 10.5886 45.2982 11.148C45.7155 11.7075 45.9348 12.4844 45.9348 13.4401Z" fill="#111423"/>*/}
            {/*            <path d="M35.1534 9.46973C34.5537 9.46973 34.0067 9.60962 33.5121 9.88948C33.0174 10.1693 32.6278 10.548 32.3504 11.0336C32.0732 11.511 31.9308 12.0461 31.9308 12.6141C31.9308 13.1244 32.0357 13.5935 32.253 14.0134C32.4629 14.4167 32.7477 14.7541 33.1074 15.034L32.0357 16.6309C31.9008 16.8284 31.8858 17.0918 31.9832 17.3058C32.0881 17.528 32.283 17.6598 32.5078 17.6598H32.8151C32.5153 17.882 32.2755 18.1454 32.1106 18.4582C31.9158 18.8121 31.8184 19.1825 31.8184 19.5611C31.8184 20.269 32.1032 20.8535 32.6652 21.2897C33.2198 21.726 33.9992 21.9482 34.9809 21.9482C35.6629 21.9482 36.3149 21.8247 36.907 21.586C37.5065 21.3473 37.9936 20.9933 38.3533 20.5325C38.7206 20.0715 38.908 19.5118 38.908 18.8697C38.908 18.1948 38.6831 17.7173 38.1585 17.2565C37.7089 16.8695 37.0044 16.6638 36.1275 16.6638H33.1299C33.1224 16.6638 33.1149 16.6555 33.1149 16.6555C33.1149 16.6555 33.1074 16.6391 33.1149 16.6309L33.8943 15.4785C34.1041 15.5855 34.299 15.6513 34.4713 15.6925C34.6512 15.7337 34.8535 15.7501 35.0783 15.7501C35.7079 15.7501 36.2775 15.6102 36.7721 15.3303C37.2667 15.0505 37.6639 14.6719 37.9487 14.1862C38.2334 13.7088 38.3758 13.1738 38.3758 12.6058C38.3758 11.9967 38.1061 10.8855 37.3716 10.3175C37.3716 10.3093 37.3791 10.3093 37.3791 10.3093L38.9904 10.5068V9.69196H36.4123C36.0076 9.55207 35.588 9.46973 35.1534 9.46973ZM36.0526 14.6224C35.7678 14.787 35.4606 14.8776 35.1534 14.8776C34.6512 14.8776 34.209 14.6801 33.8343 14.2932C33.4596 13.9063 33.2723 13.3384 33.2723 12.6141C33.2723 11.8897 33.4596 11.3217 33.8343 10.9349C34.209 10.548 34.6512 10.3504 35.1534 10.3504C35.4681 10.3504 35.7678 10.4328 36.0526 10.6056C36.3374 10.7703 36.5697 11.0254 36.7571 11.3629C36.9369 11.7004 37.0344 12.1202 37.0344 12.6141C37.0344 13.1161 36.9444 13.5359 36.7571 13.8652C36.5772 14.2027 36.3374 14.4578 36.0526 14.6224ZM34.0217 17.6515H36.0526C36.6147 17.6515 36.9744 17.775 37.2143 18.0384C37.4541 18.3018 37.574 18.6557 37.574 19.0673C37.574 19.6682 37.3567 20.162 36.922 20.5325C36.4873 20.9029 35.9028 21.0922 35.1833 21.0922C34.5537 21.0922 34.0291 20.9358 33.6469 20.6394C33.2647 20.3432 33.0699 19.8904 33.0699 19.3143C33.0699 18.952 33.1598 18.6146 33.3397 18.3183C33.5195 18.0219 33.7369 17.8079 34.0217 17.6515Z" fill="#111423"/>*/}
            {/*          </g>*/}
            {/*          <defs>*/}
            {/*            <clipPath id="clip0_54_1173">*/}
            {/*              <rect x="0.0566406" y="0.394531" width="78.8922" height="21.5537" rx="10.7769" fill="white"/>*/}
            {/*            </clipPath>*/}
            {/*          </defs>*/}
            {/*        </svg>*/}
            {/*      </div>*/}
            {/*      <h3>Dec 2023</h3>*/}
            {/*    </div>*/}
            {/*    <h2>MongoDB Certified Developer Associate</h2>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
        <svg preserveAspectRatio="none" className="about-divider" xmlns="http://www.w3.org/2000/svg" width="100vw" height="150px" viewBox="0 0 1729 269" >
          <path opacity="0.66" d="M0 0V87.2442L861.231 269L1729 72.7091V0H0Z" fill="#DEE1EE"/>
          <path d="M0 0H1729L861.231 214.32L0 0Z" fill="#DEE1EE"/>
        </svg>
    </>
  );
}

export default About;