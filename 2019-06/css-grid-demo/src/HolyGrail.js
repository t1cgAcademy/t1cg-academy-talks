import React, { Component } from 'react';
import gridlayout from './gridlayoutio-logo.svg';

export default class HolyGrail extends Component {
  render() {
    return (
      <div class="container">
        <header>
          <a href="/">
            <img src={gridlayout} width="210" alt="GridLayout.io" />
          </a>
          <h1>Grid Layout with CSS Grid</h1>
        </header>

        <nav>Nav Content Here</nav>

        <main>Main Content Here</main>

        <aside>Sidebar</aside>

        <footer>
          <p>Gridlayout Footer</p>
        </footer>
      </div>
    );
  }
}
