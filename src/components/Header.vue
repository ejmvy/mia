<template>
  <header>
    <div class="logo">
      <a href="#">
        <img id="logoPic" src="https://i.ibb.co/q7J3TBg/imageonline-co-whitebackgroundremoved.png" />
      </a>
    </div>
    <nav>
      <li>
        <a href="classes.html">Classes</a>
      </li>
      <li>
        <a href="commission.html">Commission</a>
      </li>
      <li>
        <a href="contact.html">Contact</a>
      </li>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  position: fixed;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 80px;
  width: 100%;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  z-index: 6;
}

header #logoPic {
  width: 100px;
  height: 50px;
  z-index: 5;
  margin-left: 30px;
}

header nav {
  position: absolute;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  z-index: 5;
  right: 0;
}

header nav li {
  list-style: none;
  margin: 0 15px;
  padding: 30px;
  text-transform: uppercase;
  font-family: "Kodchasan", sans-serif;
  letter-spacing: 3px;
}

header nav li a {
  z-index: 6;
  color: #663399;
  text-decoration: none;
  cursor: pointer;
}

header nav li a:hover {
  color: white;
}

#active {
  border-bottom: 3px solid transparent;
  -webkit-animation: underline 1s 1 forwards;
  animation: underline 1s 1 forwards;
}

#active a {
  color: white;
}
</style>
