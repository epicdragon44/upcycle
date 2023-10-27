<script>
  import Footer from "$lib/components/Footer.svelte";
  import MenuBar from '$lib/components/MenuBar.svelte';
</script>

<MenuBar currentPage="about" />

<div class="hero">
  <div class='left'>
    <h2>Our Story</h2>
    <p class='olive'>CycleUp! began at Kode With Klossy, uniting us over a shared passion for fashion's societal impact. We aim to promote awareness while keeping the joy that comes with expressing oneself through clothing. Being digital natives, we have an innate understanding of how trends circulate on social media, giving us a modern insight into tackling fast fashion. Our blend of tech expertise and fashion awareness equips us to make CycleUp! a transformative force in promoting sustainable fashion practices.
    </p>
  </div>
  <br><br>
  <div>
    <div class='left'>
      <h2>Meet the Team</h2>
    </div>
    <div class="flex-container">
      <div class="flex-item">
        <img src="https://via.placeholder.com/150" alt="Team Member 1">
        <p>Katie Lee<br>
          New West Charter High School<br>
          Los Angeles, CA
        </p>
      </div>
      <div class="flex-item">
        <img src="https://via.placeholder.com/150" alt="Team Member 2">
        <p>Janet Ani<br>
          California Academy of Mathematics and Science <br>
          Carson,CA </p>
      </div>
      <div class="flex-item">
        <img src="https://via.placeholder.com/150" alt="Team Member 3">
        <p>Sam Wong<br>
          High School</p>
      </div>
      <div class="flex-item">
        <img src="https://via.placeholder.com/150" alt="Team Member 4">
        <p>Michael Kim<br>
          Loyola High School<br>
          Los Angeles, CA</p>
      </div>
    </div>
  </div>
</div>

<Footer />

<style>
  h2 {
    font-family: 'Prata', serif;
    font-weight: 100;
    font-size: 48px;
  }

  .left {
    text-align: left;
  }

  .olive {
    background-color: #0C2D1C;
    color: white;
    padding: 16px;
  }

  .hero {
    text-align: center;
    padding: 24px;
  }

  .flex-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }

  .flex-item {
    margin: 10px;
    text-align: center;
    max-width: 180px;
  }

  .flex-item img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
  }

  .flex-item p {
    text-align: left;
  }
</style>
