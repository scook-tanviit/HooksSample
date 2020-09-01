import {Dimensions} from 'react-native';

class BlockBuilder{

  blockSize;
  width;
  height;


  constructor () {
    this.updateBlockSizes();
  }

  updateBlockSizes() {
    const _width = Dimensions.get('window').width;
    const _height = Dimensions.get('window').height;
    this.blockSize = Math.round(_width/33);
    this.width = 33;
    this.height = Math.round(_height/_width * this.blockSize);
  }


  _updateBlockSizes() {
    const _width = Dimensions.get('window').width;
    const _height = Dimensions.get('window').height;
    this.blockSize = Math.round(_height/33);
    this.height = 33;
    this.width = Math.round(_width/_height * this.blockSize);
  }

  getBlockSize(){
    return this.blockSize;
  }

  getHeight() {
    return this.height;
  }

  getWidth() {
    return this.width;
  }
}

const baseBuilder = new BlockBuilder();

export default baseBuilder;

