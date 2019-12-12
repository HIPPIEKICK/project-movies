import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { MovieList } from "pages/MovieList"
import { MovieDetail } from "pages/MovieDetail"
import { Nav } from "pages/Nav"
import "./App.css"


export const App = () => {
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <Switch>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/popular">
          <MovieList />
        </Route>
        <Route path="/upcoming">
          <MovieList />
        </Route>
        <Route path="/top_rated">
          <MovieList />
        </Route>
        <Route path="/movies/:id">
          <MovieDetail />
        </Route>

      </Switch>


    </BrowserRouter>

  )
}
