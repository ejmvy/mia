<template>
  <footer>
    <p class="copyright">Copyright @ Mia McVey 2020</p>
    <div class="social">
      <a href="#" target="_blank">
        <i class="fab fa-facebook"></i>
      </a>
      <a href="#" target="_blank">
        <i class="fab fa-instagram"></i>
      </a>
    </div>
    <div class="developed">
      <p>Developed By</p>
      <p class="white">EJ</p>
    </div>
  </footer>
</template>


<style scoped>
footer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: navy;
  width: 100%;
  font-size: 15px;
  border-top: 3px solid navy;
}

footer .copyright {
  color: navy;
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
  color: navy;
}

footer .developed .white {
  color: white;
  font-weight: bold;
  padding-left: 12px;
  letter-spacing: 4px;
}
</style>