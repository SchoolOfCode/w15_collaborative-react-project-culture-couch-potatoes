# The Virtual Museum by Culture Couch Potatoes

This application provides an interactive, virtual tour of selected museum exhibits.
The user is able to navigate around a virtual museum hall, select an exhibit and click to see key information about it.
The museum hall and exhibits are displayed in 3D to re-create the experience of visiting a museum, but from the comfort and safety of your browser.

## Authors

- [@gurmuhk](https://www.github.com/gschandan)
- [@umar](https://www.github.com/umarbegg)
- [@sara](https://www.github.com/sara-mo93)
- [@merlin](https://www.github.com/merlinjones10)

  
## Installation

Download into your local folder (eg virtual-museum).

Install and run using npm

```bash
  npm install
  cd virtual-museum
  npm start  
```
Then open http://localhost:3000 to view it locally in your browser.

## User experience

On starting the app the user sees a loading progress screen - this is imported from the react-three-drei library.

Once the app is fully loaded the user is presented with a welcome page (modal overlay) with instructions for navigating the site. On clicking the exit button the welcome screen disappears.

Users can now see a 3D version of a "museum room" and are able to use the mouse to navigate freely up, down, and side-to-side;  users are also able to zoom in and out.  Each exhibit responds to the mouse hovering over them by increasing in size.  On click presents the user with a pop-up box displaying further information/detais.

4 of the 5 exhibits are static, the 5th exhibit (Wright Brothers' plane) moves slowly from right to left, as if at ceiling height.  The user is also able to click this exhibit to see further information.

## Structure

The components of the app are as follows:
- Welcome 
  This page loads  on entry to the site.  Onclick of the exit button renders it not-visible.
- Museum
  This is the component that displays the "room", setting the sizes, positioning and images to use to create the different textures seen on the walls (eg more detail when a user zooms in).
- Floor
  Similar to the museum component, this component sets the size, position and images to use to create the different textures seen on the floor (eg more detail when a user zooms in).
- Exhibits
  This component sets up the position, size, text, image, lighting for an exhibit along with setting functions for onClick and MouseOver events.  These are mapped over in the main app, using parameters stored as an object in the artworks.js to create each exhibit in turn. 
- Wright
  This component of the airplane is created separately to the other exhibits and uses GLTF file to display the model.

The main app.js uses a Canvas component to render the threejs elements and this element is rendered with all other components rendered within, with the exception of the Loader.

  
## License

This project was bootstrapped with Create React App. 

WebGL 3d scenes were created and rendered with three.js, react-three-fiber and react-three-drei.
