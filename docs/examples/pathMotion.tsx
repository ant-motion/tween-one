import Tween from 'rc-tween-one';
import React from 'react';
import PathPlugin from 'rc-tween-one/es/plugin/PathMotionPlugin';

Tween.plugins.push(PathPlugin);

const array = [
  { x: 50, y: 50 },
  { x: 200, y: 250 },
  { x: 350, y: 50 },
  { x: 500, y: 250 },
  { x: 650, y: 50 } /* 
  { x: 800, y: 250 },
  { x: 950, y: 50 }, */,
];

export default function Demo() {
  const p = `M50.952,85.619C31.729,84.841,23.557,73.62,24.095,42.952
    c0.381-21.714,6.667-33.714,30.286-34.476
    c36.572-1.18,59.81,77.714,102.667,76.381c30.108-0.937,34.268-32.381,34.095-41.714
    C190.762,22.571,180.493,6.786,159.524,6C113.81,4.286,98,87.524,50.952,85.619z`;

  const p2 = 'M0,0,L100, 0L100, 100L0, 100Z';
  return (
    <div style={{ padding: '24px' }}>
      <div style={{ position: 'relative', width: 200, margin: 'auto' }}>
        <Tween
          animation={{
            duration: 3000,
            PathMotion: { path: p, center: ['15px', '15px'] },
            ease: 'linear',
          }}
          repeat={-1}
          style={{
            opacity: 1,
            position: 'absolute',
            width: '30px',
            height: '30px',
            background: '#fff000',
          }}
        >
          a
        </Tween>
        <Tween
          animation={{
            duration: 3000,
            PathMotion: { path: p2, center: ['15px', '15px'] },
            ease: 'linear',
          }}
          repeat={-1}
          style={{
            opacity: 1,
            position: 'absolute',
            width: '30px',
            height: '30px',
            background: '#fff000',
          }}
        >
          a
        </Tween>
        <svg>
          <path fill="none" stroke="#000" d={p} />
          <path fill="none" stroke="#000" d={p2} />
        </svg>
      </div>
      <div
        style={{
          width: 700,
          height: 300,
          margin: '24px auto 0',
          background: '#fff000',
          position: 'relative',
        }}
      >
        {array.map((item, i) => {
          return (
            <div
              key={i}
              style={{
                background: '#000',
                margin: 0,
                width: 8,
                height: 8,
                position: 'absolute',
                left: item.x - 4,
                top: item.y - 4,
                borderRadius: '100%',
              }}
            />
          );
        })}
        <Tween
          animation={{
            duration: 5000,
            PathMotion: {
              path: array,
              pathVars: { type: 'soft', curviness: 1 },
              center: ['15px', '15px'],
            },
          }}
          repeat={-1}
          yoyo
          style={{
            opacity: 1,
            position: 'absolute',
            width: '30px',
            height: '30px',
            background: '#1890ff',
          }}
        >c</Tween>
      </div>
    </div>
  );
}
