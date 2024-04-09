import commandFactory from '@/factory/command';
import { componentNames, commandNames } from '@/consts';

const { MOVE } = componentNames;

const command = {
  name: commandNames.MOVE_IMAGE,

  /**
   * Rotate an image
   * @param {Graphics} graphics - Graphics instance
   * @param {string} type - 'rotate' or 'setAngle'
   * @param {number} angle - angle value (degree)
   * @param {boolean} isSilent - is silent execution or not
   * @returns {Promise}
   */
  execute(graphics, type, distance, direction) {
    const rotationComp = graphics.getComponent(MOVE);

    return rotationComp[type](distance, direction);
  },
};

commandFactory.register(command);

export default command;
