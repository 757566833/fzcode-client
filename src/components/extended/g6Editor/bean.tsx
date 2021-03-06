import {ModelConfig} from '@antv/g6/es/types';
import {ENode} from '@/components/extended/g6Editor/components/components/Nodes';

const beanNode4: ModelConfig = {
  linkPoints: {
    top: true,
    bottom: true,
    left: true,
    right: true,
    fill: '#fff',
    size: 5,
  },
  anchorPoints: [
    [0.5, 0],
    [1, 0.5],
    [0.5, 1],
    [0, 0.5],
  ],
};
const beanNode3: ModelConfig = {
  linkPoints: {
    top: true,
    bottom: true,
    left: true,
    right: true,
    fill: '#fff',
    size: 5,
  },
  // anchorPoints: [
  //   [0.5, 0],
  //   [0, 1],
  //   [1, 1],
  // ],
};
const beanNode5: ModelConfig = {
  linkPoints: {
    top: true,
    bottom: true,
    left: true,
    right: true,
    fill: '#fff',
    size: 5,
  },
  // anchorPoints: [
  //   [0.5, 0],
  //   [0.75, 0.25],
  //   [0.75, 0.5],
  //   [1, 1],
  //   [0, 1],
  // ],

};
export const beanNode: (x: number, y: number, type: ENode, count: number) => ModelConfig = (x: number, y: number, type: ENode, count: number) => {
  const defaultShape: ModelConfig = {
    x, y,
    type: type,
    id: `node-${count}`,
  };
  switch (type) {
    case ENode.圆形:
      return {
        ...beanNode4,
        ...defaultShape,
      };
    case ENode.三角形:
      return {
        ...beanNode3,
        ...defaultShape,
      };
  }
  return {...beanNode4, x, y, id: `node-${count}`};
};

// {
//   id: 'circle',
//     x: -200,
//   y: 150,
//   type: 'circle',
//   size:[80]
// },
// {
//   id: 'ellipse',
//     type: 'ellipse',
//   x: -100,
//   y: 150,
//   size: [80, 50],
// },
// {
//   id: 'rect',
//     x: 0,
//   y: 150,
//   type: 'rect',
//   size: [80, 50],
// },
// {
//   id: 'circle2',
//     //   label: 'Triangle',
//     x: 100,
//   y: 150,
//   type: 'triangle',
//   size: [50],
// },
// {
//   id: 'star',
//     // label: 'Star',
//     x: 200,
//   y: 150,
//   type: 'star',
//   size: [50],
// },
// {
//   id: 'diamond',
//     x: 300,
//   y: 150,
//   type:'diamond',
//   size: [60,80],
// },
