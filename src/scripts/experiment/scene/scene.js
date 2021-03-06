class Scene {
  
  /**
   * [Scene contructor]
   * @return void
   */ 
  constructor( _width, _height ) {

    this.width = _width;
    this.height = _height;

    this.children = [];

    this.stage = new PIXI.Container();
    this.renderer = new PIXI.WebGLRenderer( this.width, this.height );

  }

  /**
   * [Scene addChild]
   * - Add child to the stage
   * @param {obj} child
   */
  addChild( child ) {

    // has to be an instance of PIXI.DisplayObject PIXI.DisplayObject
    if ( child instanceof PIXI.DisplayObject === false ) {
      throw "child has to be an instance of PIXI.DisplayObject";
    }
    
    this.stage.addChild( child );

  }

  /**
   * [Scene removeChild]
   * - Remove child to the stage
   * @param {obj} child
   */
  removeChild( child ) {

    // has to be a PIXI.DisplayObject or child of PIXI.DisplayObject
    this.stage.removeChild( child );

  }

  /**
   * [Scene render]
   * - PIXI Renderer renders the PIXI stage
   * @return void
   */
  render() {

    this.renderer.render( this.stage );

  }

  /**
   * [Scene resize]
   * - Called by the parent when window's resized
   * @param  {number} _width
   * @param  {number} _height
   * @return void
   */
  resize( _width, _height ) {

    this.width = _width;
    this.height = _height;

    this.renderer.view.style.width = this.width + 'px';
    this.renderer.view.style.height = this.height + 'px';

  }

}

module.exports = Scene;