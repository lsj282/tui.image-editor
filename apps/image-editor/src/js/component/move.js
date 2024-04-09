import Component from '@/interface/component';
import { componentNames } from '@/consts';

/**
 * Image Rotation component
 * @class Rotation
 * @extends {Component}
 * @param {Graphics} graphics - Graphics instance
 * @ignore
 */
class Move extends Component {
  constructor(graphics) {
    super(componentNames.MOVE, graphics);
  }

  _moveForEachObject(deltaX, deltaY) {
    const canvas = this.getCanvas();

    canvas.forEachObject((obj) => {
      obj.set({ left: obj.left + deltaX, top: obj.top + deltaY });
      obj.setCoords();
    });
    canvas.renderAll();
  }

  move(deltaX, deltaY) {
    const canvasImage = this.getCanvasImage();
    canvasImage.set({ left: canvasImage.left + deltaX, top: canvasImage.top + deltaY });
    canvasImage.setCoords();

    // Adjust canvas dimensions
    // this.adjustCanvasDimension();

    // Move each object on the canvas
    this._moveForEachObject(deltaX, deltaY);

    return Promise.resolve({ deltaX, deltaY });
  }
}

export default Move;
