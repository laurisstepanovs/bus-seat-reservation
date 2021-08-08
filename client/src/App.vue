<template>
  <div class="logo-wrapper">
    <img class="logo-size" src="media/logo.jpg" alt="Logo">
  </div>
<div class="bus-cards">
  <router-view/>
</div>
</template>

<style>
html {
  height: 100%;
}
body {
  height: 100%;
}

.logo-size {
  width: 200px;
  height: 200px;
}

.logo-wrapper {
  position: absolute;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
  height: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.bus-cards {
  height: 100%;
  display: flex;
  margin: 0;
  align-items: center;
  justify-content: center;
}

.bus-card-wrapper {
  margin: 10px;
  text-decoration: none;
  font-size: 100px;
  font-weight: 500;
  width: 400px;
    height: 400px;
}

.bus-wrapper-1 {
  background: url('/media/bus1.jpeg');
  background-repeat: repeat;
  background-size: cover;
  background-position: right bottom;
}

.bus-wrapper-2 {
  background: url('/media/bus2.jpeg');
  background-repeat: repeat;
  background-size: cover;
  background-position: left bottom;
}

.bus-wrapper-3 {
  background-image: url('/media/bus3.jpeg');
  background-repeat: repeat;
  background-size: cover;
  background-position: right bottom;
}

.bus-card-bg {
  width: 100%;
  height: 100%;
  background-color: silver;
  opacity:0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bus-card-bg:hover {
  opacity: 0.5;
}

.bus-card {
  color: gray;
}

@media only screen and (max-width: 768px) {
  .logo-wrapper {
    width: 100%;
    top: 0;
  }

  .bus-cards {
    margin-top:600px;
  }
}
</style>
