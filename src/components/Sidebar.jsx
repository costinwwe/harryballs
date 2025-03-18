import React from 'react'

const Sidebar = ({ sidebarOpen }) => {
  return (
    <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
      <nav>
        <ul>
          <li>
            <a href="#harry-potter">Who is Harry Potter?</a>
            <ul>
              <li><a href="#harry-potter-actor">The Actor behind Harry Potter</a></li>
            </ul>
          </li>
          <li>
            <a href="#introduction">A brief introduction to the volume</a>
            <ul>
              <li><a href="#introduction-summary">Summary</a></li>
            </ul>
          </li>
          <li>
            <a href="#author">J.K. Rowling: The Creator Behind the Magic</a>
            <ul>
              <li><a href="#author-biography">The biography of the author</a></li>
              <li><a href="#author-inspirations">Inspirations for the Harry Potter universe</a></li>
            </ul>
          </li>
          <li>
            <a href="#wizarding-world">The Wizarding World: A Unique Setting</a>
            <ul>
              <li><a href="#wizarding-world-hogwarts">Hogwarts School of Witchcraft and Wizardry</a></li>
            </ul>
          </li>
          <li>
            <a href="#magic">The Role of Magic in Harry Potter</a>
            <ul>
              <li><a href="#magic-symbolism">The symbolism of magic in the story</a></li>
            </ul>
          </li>
          <li>
            <a href="#cultural-impact">Cultural and Social Impact</a>
            <ul>
              <li><a href="#cultural-impact-literature">Influence on young adult fantasy literature</a></li>
            </ul>
          </li>
          <li>
            <a href="#locations">Real life Harry Potter locations you can visit</a>
            <ul>
              <li><a href="#locations-kings-cross">King's Cross Station - London, England</a></li>
              <li><a href="#locations-durham">Durham Cathedral - Durham, England</a></li>
              <li><a href="#locations-glenfinnan">Glenfinnan Viaduct - Scotland</a></li>
            </ul>
          </li>
          <li>
            <a href="#relevance">Why Harry Potter remains relevant to new generations</a>
            <ul>
              <li><a href="#relevance-themes">Timeless Themes and Universal Values</a></li>
              <li><a href="#relevance-characters">Complex, Relatable Characters</a></li>
              <li><a href="#relevance-world">A Rich, Immersive World</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar