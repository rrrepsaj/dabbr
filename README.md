# Dabbr

[Heroku link]: https://dabbr.herokuapp.com

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Dabbr is a web application inspired by Flickr that will be built using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Photos
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Albums for organizing photos
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Comments
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Tags
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: docs/views.md
[components]: docs/components.md
[flux-cycles]: docs/flux-cycles.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (1 day, W1 Tu 6pm)

**Objective:** Functioning Rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin

### Phase 2: Photos Model, API, and basic APIUtil (1.5 days, W1 Th 12pm)

**Objective:** Photos can be created, read, edited and destroyed through
the API.

- [ ] create `Photo` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for photos (`PhotosController`)
- [ ] jBuilder views for photos
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1.5 days, W1 F 6pm)

**Objective:** Photos can be created, read, edited and destroyed with the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each photo component, building out the flux loop as needed.
  - [ ] `PhotosIndex`
  - [ ] `PhotoIndexItem`
  - [ ] `PhotoForm`
- [ ] save Photos to the DB when the form loses focus or is left idle
  after editing.

### Phase 4: Start Styling (0.5 days, W2 M 12pm)

**Objective:** Existing pages (including signup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Albums (1 day, W2 Tu 12pm)

**Objective:** Photos belong to Albums, and can be viewed by album.

- [ ] create `Album` model
- build out API, Flux loop, and components for:
  - [ ] Album CRUD
  - [ ] adding photos requires a album
  - [ ] moving photos to a different album
  - [ ] viewing photos by album
- Use CSS to style new views

Phase 3 adds organization to the Photos. Photos belong to an Album,
which has its own `Index` view.

### Phase 6: Tags (1 days, W2 Th 12pm)

**Objective:** Photos can be tagged with multiple tags, and tags are searchable.

- [ ] create `Tag` model and join table
- build out API, Flux loop, and components for:
  - [ ] fetching tags for album
  - [ ] adding tags to album
  - [ ] creating tags while adding to albums
  - [ ] searching albums by tag
- [ ] Style new elements

### Phase 7: Allow Complex Styling in Photos (0.5 days, W2 Th 6pm)

**objective:** Enable complex styling of photos.

- [ ] Use Rails helpers to sanitize HTML before rendering.

### Phase 8: Styling Cleanup and Seeding (1 day, W2 F 6pm)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Pagination / infinite scroll for Photos Index
- [ ] Following
- [ ] Favorites
- [ ] Multiple sessions

[phase-one]: docs/phases/phase1.md
[phase-two]: docs/phases/phase2.md
[phase-three]: docs/phases/phase3.md
[phase-four]: docs/phases/phase4.md
[phase-five]: docs/phases/phase5.md
