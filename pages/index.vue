<script lang="ts">
import {useFilmStore} from "~/stories/film";



const filmStore = useFilmStore();

</script>




<template>
  <div class="row">
    <div class="col-md-4 my-3">
      <select class="form-select" aria-label="Default select example">
        <option selected>Select ganre</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div class="col-md-4  my-3">
      <select class="form-select" aria-label="Default select example">
        <option selected>Select country</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div class="col-md-2  my-3">
      <select class="form-select" aria-label="Default select example">
        <option value="name">Name</option>
        <option value="year">Year</option>
        <option value="rating">rating</option>
      </select>
    </div>
    <div class="col-md-2  my-3">
      <button class="btn btn-outline-warning" type="submit">Reset</button>
    </div>
  </div>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col" v-for="film in filmStore.films" :key="film.id">
      <div class="card h-100">
        <img :src="film.link_img" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{ film.name }}</h5>
          <p class="card-text">{{film.ratingAvg}}</p>
          <p class="card-text">{{film.duration}}</p>
          <p class="card-text">
            <template v-for="category in film.categories" :key="category.id">
              {{category.name}},
            </template>
          </p>
        </div>
        <div class="card-footer">
          <button class="btn btn-outline-success" type="submit">Смотреть</button>
        </div>
      </div>
    </div>

  </div>



  <nav class="d-flex justify-content-center mt-4" aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item"><a class="page-link" href="#"> &laquo; </a></li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item"><a class="page-link" href="#"> &raquo; </a></li>
    </ul>
  </nav>
</template>