<template>
  <footer>
    <div class="footerArea">
      <div class="icons">
        <div class="circleArea">
          <a href="https://www.ejmcvey.com" target="_blank">
            <div class="circle">
              <img class="circleImg" src="../../assets/logos/instaLogo.png" />
            </div>
          </a>
        </div>
        <div class="circleArea">
          <a href="https://www.ejmcvey.com" target="_blank">
            <div class="circle">
              <img class="circleImg" src="../../assets/logos/etsy2.png" />
            </div>
          </a>
        </div>
        <div class="circleArea">
          <a href="https://www.ejmcvey.com" target="_blank">
            <div class="circle">
              <img class="circleImg" src="../../assets/logos/fb-f.png" />
            </div>
          </a>
        </div>
      </div>

      <!-- <footer>
      <div class="footerPadding">
        <p class="copyright">Copyright @ Mia McVey 2020</p>
        <div class="developed">
          <p>Developed By</p>
          <p class="white">EJ</p>
        </div>
      </div>
      </footer>-->
    </div>
  </footer>
</template>


<style scoped>
.footerArea {
  width: 100%;
  display: flex;
  justify-content: center;
}
footer {
  background: #333399;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: white;

  padding: 10px;
}

footer .footerArea .icons {
  display: flex;
  justify-content: space-around;
  margin-bottom: 5px;
  width: 80%;
}

footer .footerArea .icons .circleArea {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 5px 20px 0 20px;
  text-align: center;
}

footer .footerArea .icons .circleArea .circle {
  width: 50px;
  height: 50px;
  background: #30d5c8;
  border-radius: 50%;
  color: white;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

footer .footerArea .icons .circleArea .circle:hover {
  background: #7852a9;
  transform: scale(1.05);
}

footer .footerArea .icons .circleArea .circle .circleImg {
  position: relative;
  top: 20%;
  width: 30px;
  height: 30px;
  font-size: 50px;
  z-index: 2;
  background: none;
}

/* footer p {
  margin: 0 !important;
  font-size: 13px !important;
}

footer .footerPadding {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
  justify-content: space-between;
  padding: 0 10px;
}

/* footer .copyright {
  /* color: navy; 
} 

footer .social {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

footer .social i {
  color: navy;
  font-size: 30px;
  margin: 0 30px;
}

footer .social i:hover {
  color: white;
} 

footer .developed {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

footer .developed p {
  color: white;
} 

footer .developed .white {
  color: #64c7cc;
  font-weight: bold;
  padding-left: 12px;
  letter-spacing: 4px; 
 } */
</style>