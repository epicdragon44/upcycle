<script>
  import "@fontsource/prata";

    import MenuBar from '$lib/components/MenuBar.svelte';
    import Cover from '$lib/components/Cover.svelte';
    import About from '$lib/components/About.svelte';
    import HowItWorks from "$lib/components/HowItWorks.svelte";
    import Testimonials from "$lib/components/Testimonials.svelte";
    import Screens from "$lib/components/Screens.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<MenuBar currentPage="home" />
<Cover />
<About />
<HowItWorks />
<Screens />
<Testimonials />
<Footer />

<style>
  h1 {
      font-family: 'Prata', serif;
      font-size: 32px;
  }

  body {
    font-family: 'Times New Roman', Times, serif;
    margin: 0;
  }
</style>
