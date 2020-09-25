<template>
  <div class="footerArea">
    <footer>
      <div class="footerPadding">
        <p class="copyright">Copyright @ Mia McVey 2020</p>
        <div class="developed">
          <p>Developed By</p>
          <p class="white">EJ</p>
        </div>
      </div>
    </footer>
  </div>
</template>


<style scoped>
.footerArea {
  width: 100%;
}
footer {
  background: #333399;
  /* margin: -5px 10px -10px 10px; */
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: white;

  padding: 5px 10px;
  /* height: 40px !important; */
}

footer p {
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
} */

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
/* 
footer .social i:hover {
  color: white;
} */

footer .developed {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

/* footer .developed p {
  color: white;
} */

footer .developed .white {
  color: #64c7cc;
  font-weight: bold;
  padding-left: 12px;
  letter-spacing: 4px;
}
</style>