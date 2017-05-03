<template>
  <div id="app">
    <ul>
      <li><router-link to="/A">to A</router-link></li>
      <li><router-link to="/B">to B</router-link></li>
      <li><router-link to="/C">to C</router-link></li>
    </ul>
    <hr>
    <router-view />
  </div>
</template>
