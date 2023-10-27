<script>
  import { fade } from 'svelte/transition';
</script>

<div class="content">
  <img src="/images/cover.jpg" alt="Fashion images" in:fade={{ delay: 150, duration: 300}} >
  <div class="text-box" in:fade={{ delay: 450, duration: 300}} >
      <h2 in:fade={{ delay: 750, duration: 300 }}>A Free Clothing Swap Marketplace Inspiring Circular Fashion</h2>
  </div>
</div>

<style>
  .content {
      position: relative;
      width: 100%;
      height: 80vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }
  .content img {
      width: 80%;
      height: 80%;
      object-fit: cover;
  }
  .text-box {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      color: black;
      z-index: 1;
      background-color: white;
      padding: 42px;
  }
  h2 {
      font-family: 'Prata', serif;
      font-size: 50px;
      font-weight: 100;
  }
</style>
