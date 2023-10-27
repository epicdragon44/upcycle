<script>
  import { base } from '$app/paths';
  export let currentPage = "";
</script>

<nav style="display: flex; justify-content: space-between;" >
  <div>
      <h1>CycleUp!</h1>
  </div>
  <div class='links'>
      <a href="{base}/" class={currentPage === 'home' ? 'active' : ''}>Home</a>
      <a href="{base}/about" class={currentPage === 'about' ? 'active' : ''}>About Us</a>
      <a href="{base}/news" class={currentPage === 'news' ? 'active' : ''}>News</a>
  </div>
</nav>

<style>
  nav {
      padding: 10px 40px;
      background-color: white;
      
  }
  a {
      margin: 0 15px;
      text-decoration: none;
      transition: color 0.3s;
      color: black;
  }
  .active {
      font-weight: bold;
      color: #2C3E50;
  }
  .links {
      display: flex;
      align-items: center;
  }
</style>
