import React, { useRef, useEffect } from 'react';
import * as joint from 'jointjs';
import './App.scss';

function App() {
  const canvas: any = useRef(null);

  useEffect(() => {
    const elements = [
      new joint.shapes.basic.Rect({
        position: { x: 100, y: 30 },
        size: { width: 100, height: 30 },
        attrs: { rect: { fill: 'blue' }, text: { text: 'My Element', fill: 'white' } }
      }),
      new joint.shapes.basic.Rect({
        position: { x: 200, y: 30 },
        size: { width: 100, height: 30 },
        attrs: { rect: { fill: 'blue' }, text: { text: 'My Element', fill: 'white' } }
      }),
      new joint.shapes.basic.Rect({
        position: { x: 300, y: 30 },
        size: { width: 100, height: 30 },
        attrs: { rect: { fill: 'blue' }, text: { text: 'My Element', fill: 'white' } }
      }),
    ];

    const graph = new joint.dia.Graph({}, { cellNamespace: joint.shapes });

    const paper = new joint.dia.Paper({
      el: canvas.current,
      model: graph,
      width: 600,
      height: 400,
      gridSize: 1,
      // model: graph,
      // background: {
      //   color: '#F8F9FA',
      // },
      // frozen: true,
      // async: true,
      // sorting: joint.dia.Paper.sorting.APPROX,
      // cellViewNamespace: joint.shapes
    });

    // Добавление элементов в граф
    graph.addCells(elements);

    paper.unfreeze();

    console.log(canvas)
    // paper.render()

    return () => {
      // paper.remove();
    }
  }, []);

  return (
    <>
      {/* <div>WHYYYYYYYYY?</div> */}
      {/* <div className="canvas" ref={canvas} /> */}
      <div className="canvas" ref={canvas} />

    </>
  );
}

export default App;
