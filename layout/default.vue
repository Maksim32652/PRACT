<template>
  <header>
    <!-- Fixed navbar -->
    <nav class="navbar navbar-expand-md navbar-dark fixed bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Kino-tower</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarCollapse">
          <button class="btn btn-outline-success me-3" type="submit">signUp</button>
          <button class="btn btn-outline-info" type="submit">Signin</button>
        </div>
      </div>
    </nav>
  </header>

  <!-- Begin page content -->
  <main class="flex-shrink-0">
    <div class="container">
      <slot />
    </div>
  </main>

  <footer class="fixed-bottom">
    <div class="container">
      <span class="text-body-secondary">KinoTower 2024</span>
    </div>
  </footer>


</template>

<script setup lang="ts">
</script>