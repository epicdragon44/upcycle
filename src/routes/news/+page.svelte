<script>
  import Footer from "$lib/components/Footer.svelte";
  import MenuBar from '$lib/components/MenuBar.svelte';

  const news = [
    {
      img: "https://www.ethicalconsumer.org/sites/default/files/styles/primary_image_xxlarge/public/images/2021-11/Fast-fashion.jpg?h=a2921b4c&itok=-fGhBF8z",
      title: "Fashion Shouldn't Cost You The Earth",
      link: "https://www.ethicalconsumer.org/fashion-clothing/what-fast-fashion-why-it-problem",
    },
    {
      img: "https://www.investopedia.com/thmb/M6kYJe0KduqD3K6G6jSy7ieDxmA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/fast-fashion-6d4aa773355b42c69c545bef9c9747a1.jpg",
      title: "Defining Fast Fashion",
      link: "https://www.investopedia.com/terms/f/fast-fashion.asp",
    },
    {
      img: "https://www.thegoodtrade.com/wp-content/uploads/2023/01/what2Bis2Bfast2Bfashion.jpg",
      title: "What is Fast Fashion Anyway?",
      link: "https://www.thegoodtrade.com/features/what-is-fast-fashion/",
    },
    {
      img: "https://pirg.org/wp-content/uploads/2023/09/image-from-rawpixel-id-6042186-original.jpg",
      title: "Fast Fashion",
      link: "https://www.youtube.com/watch?v=TzWGz1CD1p0",
    },
    {
      img: "https://cdn.evbstatic.com/s3-build/fe/build/images/1a1666fbbbb7290031d61de5f2c0d709-fashion.webp",
      title: "Fast Fashion Events in LA",
      link: "https://www.eventbrite.com/b/ca--los-angeles/fashion/",
    },
    {
      img: "https://www.thetailoredco.com/wp-content/uploads/2021/03/pexels-paul-deetman-2695679-e1615648009695-1500x1000.jpg",
      title: "Circular Fashion LA X Tailored",
      link: "https://www.thetailoredco.com/circular-fashion-los-angeles/",
    }
  ]

</script>

<MenuBar currentPage="news" />

<div class="all">
  <center>
    <h2>Stay connected to the latest news and events on reducing fast fashion with sustainable practices.</h2>
  </center>
  <div class='grid'>
    {#each news as { img, title, link }}
      <div class="card">
        <a href={link} target="_blank">
          <img src={img} alt={title} />
          <div class="overlay">
            <div class="text">{title}</div>
          </div>
        </a>
      </div>
    {/each}
  </div>
</div>

<Footer />

<style>
  h2 {
    font-family: 'Prata', serif;
    font-weight: 100;
    font-size: 24px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 24px;
    padding: 24px;
  }

  .card {
    position: relative;
    overflow: hidden;
    opacity: 1;
    transition: opacity 0.5s ease;
  }

  .card img {
    display: block;
    width: 100%;
    height: auto;
    transition: transform 0.5s ease;
    z-index: 100;
  }

  .card:hover img {
    transform: scale(1.1);
  }

  .card:hover .overlay {
    opacity: 1;
  }

  .card:hover .text {
    opacity: 1;
  }

  .card .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.1;
    transition: opacity 0.5s ease;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .card .text {
    color: white;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  h2 {
    font-family: 'Prata', serif;
    font-weight: 100;
    font-size: 24px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 24px;
    padding: 24px;
  }

  .card {
    position: relative;
    overflow: hidden;
    opacity: 1;
    transition: opacity 0.5s ease;
  }

  .card img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    z-index: 100;
  }

  .card:hover img {
    transform: scale(1.1);
  }

  .card:hover .overlay {
    opacity: 1;
  }

  .card:hover .text {
    opacity: 1;
  }

  .card .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    transition: opacity 0.5s ease;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .card .text {
    color: white;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
    opacity: 0;
    transition: opacity 0.5s ease;
  }
</style>
